import PointManager from '@map/manager/PointManager';
import TracksManager, { GPX_FILE_TYPE, NAN_MARKER } from '@map/manager/track/TracksManager';
import { saveTrackToCloud } from '@map/manager/track/SaveTrackManager';
import TracksRoutingCache, {
    effectControlRouterRequests,
    GET_ANALYSIS_DEBOUNCE_MS,
    requestAnalytics,
} from '@map/context/TracksRoutingCache';
import { apiPost } from '@map/util/HttpApi';
import { findRequest } from '../../util/requests';
import { readGzipJson } from '../../util/infoFile';
import {
    CLOUD_FOLDER,
    CLOUD_TRACK_NAME,
    LOGGED_IN,
    createEditorCtx,
    createEditorPoint,
    createGapPoints,
    createPlainPoints,
    createPointsGroups,
    createRoutedPoints,
    lats,
} from '../../util/fixtures/tracks';
import { settle } from '../../util/settle';

const { GET_ANALYSIS, GET_SRTM_DATA } = TracksManager;
const ANALYSIS_URL = `/gpx/${GET_ANALYSIS}`;
const SRTM_URL = `/gpx/${GET_SRTM_DATA}`;
const SAVE_URL = '/gpx/save-track-data';
const UPLOAD_URL = '/mapapi/upload-file';

const SENT_FIELDS = ['lat', 'lng', 'ele', 'profile', 'geometry'];

const START_TIME = 1700000000000;
const END_TIME = 1700003600000;
const TOTAL_DISTANCE = 4448;

const SRTM_ELE = [100, 101, 102, 103, 104];

const TRACK_FILE_NAME = 'Track';

const sentFields = (point) => Object.fromEntries(SENT_FIELDS.map((key) => [key, point[key]]));

/** Editor points with what the editor keeps on them for itself: distances, the profile object, the srtm elevation. */
const withEditorFields = (points) =>
    points.map((point, i) => ({
        ...point,
        ele: 100 + i,
        dist: 1112,
        distanceTotal: 1112 * i,
        geoProfile: { profile: point.profile },
        srtmEle: 90 + i,
    }));

const createCtx = (points) => {
    const ctx = createEditorCtx({ points });
    ctx.selectedGpxFile.tracks = [{ points: [] }];
    ctx.setProcessingAnalytics = jest.fn();

    return ctx;
};

const analyse = (ctx, setLoading = jest.fn()) =>
    TracksManager.getTrackWithAnalysis(GET_ANALYSIS, ctx, setLoading, ctx.selectedGpxFile.points);

const requestsTo = (endpoint) => apiPost.mock.calls.filter(([url]) => url.endsWith(endpoint));
const analysedLats = async () => {
    const bodies = await Promise.all(requestsTo(ANALYSIS_URL).map(([, body]) => readGzipJson(body)));

    return bodies.map((body) => lats(body.tracks[0].points));
};

/** Track of 5 points without elevation, the server answers with the analysis and then with the srtm elevation. */
const createSrtmCtx = () => {
    const noEle = () => createPlainPoints(5).map((point) => ({ ...point, ele: NAN_MARKER }));
    const analysis = { totalDistance: TOTAL_DISTANCE, hasElevationData: false, startTime: 0, endTime: 0 };
    const srtmAnalysis = { ...analysis, srtmAnalysis: true, minElevationSrtm: 100, avgElevationSrtm: 102 };
    const srtmPoints = noEle().map((point, i) => ({ ...point, srtmEle: SRTM_ELE[i] }));
    apiPost.mockImplementation(async (url) => {
        if (url.endsWith(ANALYSIS_URL)) {
            return { data: { data: { tracks: [{ points: noEle() }], analysis } } };
        }
        if (url.endsWith(SRTM_URL)) {
            const answer = { tracks: [{ points: srtmPoints }], analysis: { ...srtmAnalysis, maxElevationSrtm: 104 } };

            return { data: { data: answer } };
        }

        return null;
    });

    return createCtx(noEle());
};

beforeEach(() => {
    apiPost.mockResolvedValue(null);
});

describe('what is sent for the analysis', () => {
    test('only the position, elevation, profile and geometry of the editor points are sent, the times are zeroed', async () => {
        const points = withEditorFields(createRoutedPoints(3));
        const ctx = createCtx(points);
        ctx.selectedGpxFile.analysis = { totalDistance: TOTAL_DISTANCE, startTime: START_TIME, endTime: END_TIME };

        await analyse(ctx);

        const body = await readGzipJson(findRequest(apiPost, ANALYSIS_URL).body);
        expect(body).toEqual({
            tracks: [{ points: points.map(sentFields) }],
            metaData: { name: 'Local' },
            analysis: { totalDistance: TOTAL_DISTANCE, startTime: 0, endTime: 0 },
        });
    });

    test('only the position, elevation, profile and geometry of the editor points are saved to the cloud', async () => {
        const points = withEditorFields(createRoutedPoints(3));
        const ctx = createCtx(points);
        ctx.listFiles = { uniqueFiles: [{ name: CLOUD_TRACK_NAME }] };
        apiPost.mockImplementation(async (url) => {
            if (url.endsWith(SAVE_URL)) {
                return { data: '<gpx></gpx>' };
            }
            if (url.endsWith(UPLOAD_URL)) {
                return { data: { status: 'ok' } };
            }

            return null;
        });

        const saved = saveTrackToCloud({
            ctx,
            ltx: LOGGED_IN,
            currentFolder: CLOUD_FOLDER,
            fileName: TRACK_FILE_NAME,
            type: GPX_FILE_TYPE,
            open: false,
        });
        await expect(saved).resolves.toBe(true);

        const body = await readGzipJson(findRequest(apiPost, SAVE_URL).body);
        expect(body).toEqual({
            tracks: [{ points: points.map(sentFields) }],
            metaData: { name: 'Local' },
            analysis: null,
        });
        expect(findRequest(apiPost, UPLOAD_URL).options.params).toEqual({
            type: GPX_FILE_TYPE,
            name: CLOUD_TRACK_NAME,
        });
    });
});

describe('when the analysis is asked', () => {
    test('deleting or moving a point asks for the analysis of the new points', async () => {
        const deleted = createCtx(createRoutedPoints(3));
        await PointManager.deletePoint(2, deleted);

        const moved = createCtx(createRoutedPoints(4));
        await PointManager.reorder(3, 1, moved.selectedGpxFile, moved);

        expect(await analysedLats()).toEqual([
            [50, 50.01],
            [50, 50.03, 50.01, 50.02],
        ]);
    });

    test('a burst of analysis requests sends one request a second after the last one', () => {
        jest.useFakeTimers();
        const ctx = createCtx(createRoutedPoints(3));
        const debouncerTimer = { current: null };

        for (let i = 0; i < 3; i++) {
            requestAnalytics({ ctx, track: ctx.selectedGpxFile, debouncerTimer });
        }
        jest.advanceTimersByTime(GET_ANALYSIS_DEBOUNCE_MS - 1);
        expect(requestsTo(ANALYSIS_URL)).toHaveLength(0);
        jest.advanceTimersByTime(1);

        expect(requestsTo(ANALYSIS_URL)).toHaveLength(1);
        jest.useRealTimers();
    });

    test.failing.each([
        ['trim before a point', createRoutedPoints(4), (ctx) => PointManager.trimBefore(2, ctx)],
        ['trim after a point', createRoutedPoints(4), (ctx) => PointManager.trimAfter(1, ctx)],
        ['split', createRoutedPoints(4), (ctx) => PointManager.split(1, ctx)],
        ['join', createGapPoints(4, 1), (ctx) => PointManager.join(...ctx.selectedGpxFile.points.slice(1, 3), ctx)],
    ])('%s asks for the analysis of the new points', async (_, points, operation) => {
        const ctx = createCtx(points);

        await operation(ctx);
        await settle();

        const sent = (await analysedLats()).map(String);
        const asked =
            ctx.selectedGpxFile.refreshAnalytics === true || sent.includes(String(lats(ctx.selectedGpxFile.points)));
        expect(asked).toBe(true);
    });
});

describe('the answer of the analysis', () => {
    test('the analysis keeps the waypoints, their groups and the times of the track', async () => {
        const wpts = [{ lat: 50.005, lon: 30, name: 'wpt' }];
        const ctx = createCtx(createPlainPoints(3).map((point) => ({ ...point, ele: 100 })));
        Object.assign(ctx.selectedGpxFile, {
            wpts,
            pointsGroups: createPointsGroups(),
            analysis: { startTime: START_TIME, endTime: END_TIME },
        });
        const answer = {
            wpts: [],
            pointsGroups: {},
            analysis: { totalDistance: TOTAL_DISTANCE, startTime: 0, endTime: 0 },
        };
        apiPost.mockResolvedValue({ data: { data: answer } });

        const result = await analyse(ctx);

        expect(result.wpts).toEqual(wpts);
        expect(result.pointsGroups).toEqual(createPointsGroups());
        expect(result.analysis).toEqual({ totalDistance: TOTAL_DISTANCE, startTime: START_TIME, endTime: END_TIME });
    });

    test('a failed analysis keeps the track and ends the loading and the analysis', async () => {
        const ctx = createCtx(createRoutedPoints(3));
        const setLoading = jest.fn();
        apiPost.mockResolvedValue({ ok: false, status: 502, data: null });

        await expect(analyse(ctx, setLoading)).resolves.toBe(ctx.selectedGpxFile);

        expect(setLoading).toHaveBeenLastCalledWith(false);
        expect(ctx.setProcessingAnalytics).toHaveBeenLastCalledWith(false);
    });

    test.failing('an analysis answer without data keeps the track and ends the analysis', async () => {
        const ctx = createCtx(createRoutedPoints(3));
        apiPost.mockResolvedValue({ data: {} });

        await expect(analyse(ctx)).resolves.toBe(ctx.selectedGpxFile);

        expect(ctx.setProcessingAnalytics).toHaveBeenLastCalledWith(false);
    });
});

describe('srtm', () => {
    test('a track without elevation takes the elevation of srtm after the analysis', async () => {
        const ctx = createSrtmCtx();

        const result = await analyse(ctx);

        expect(apiPost.mock.calls.map(([url]) => url.split('/').pop())).toEqual([GET_ANALYSIS, GET_SRTM_DATA]);
        expect(result.points.map((point) => point.ele)).toEqual(SRTM_ELE);
        expect(result.analysis).toMatchObject({
            isSrtmApplied: true,
            hasElevationData: true,
            minElevation: 100,
            avgElevation: 102,
            maxElevation: 104,
        });
    });

    test.failing('the analysis is finished when srtm is applied, so routing is not blocked', async () => {
        const ctx = createSrtmCtx();

        await analyse(ctx);

        expect(ctx.setProcessingAnalytics).toHaveBeenLastCalledWith(false);
    });
});

describe('routing in progress', () => {
    test('save stays disabled from the start of a routing job till the last job is done', async () => {
        const ctx = createCtx();
        let answer;
        ctx.trackRouter.updateRouteBetweenPoints.mockImplementation(() => new Promise((resolve) => (answer = resolve)));
        TracksRoutingCache.addRoutingToCache(createEditorPoint(0), createEditorPoint(1), {}, ctx);
        let jobs = 0;
        const setStartedRouterJobs = (update) => (jobs = update(jobs));
        const control = () => effectControlRouterRequests({ ctx, startedRouterJobs: jobs, setStartedRouterJobs });

        control();
        control();
        const whileRouting = [...ctx.setProcessRouting.mock.calls];
        answer({ points: [createEditorPoint(0), createEditorPoint(1)] });
        await settle();
        control();

        expect(whileRouting).toEqual([[true]]);
        expect(ctx.setProcessRouting).toHaveBeenLastCalledWith(false);
    });

    test.failing('save stays disabled while join waits for the router', async () => {
        const ctx = createCtx(createGapPoints(4, 1));
        ctx.setRoutingNewSegments = jest.fn();
        let answer;
        ctx.trackRouter.updateRouteBetweenPoints.mockImplementation(() => new Promise((resolve) => (answer = resolve)));
        const [, gap, next] = ctx.selectedGpxFile.points;

        const joined = PointManager.join(gap, next, ctx);
        const disabled =
            ctx.setRoutingNewSegments.mock.calls.length > 0 ||
            ctx.setProcessRouting.mock.calls.some(([routing]) => routing);
        answer?.({ points: [gap, next] });
        await joined;

        expect(disabled).toBe(true);
    });
});
