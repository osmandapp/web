import TracksManager, {
    getGpxFileFromTrackData,
    isProtectedSegment,
    PROFILE_LINE,
} from '@map/manager/track/TracksManager';
import { saveTrackToLocal } from '@map/manager/track/SaveTrackManager';
import { apiPost } from '@map/util/HttpApi';
import { PROFILE_BICYCLE, PROFILE_PEDESTRIAN } from '@map/store/geoRouter/profileConstants';
import { fakeIndexedDbStore } from '../../util/indexedDb';
import { findRequest } from '../../util/requests';
import { readGzipJson } from '../../util/infoFile';
import {
    NOW,
    createCtx,
    createEditorPoint,
    createGapPoints,
    createPlainGapPoints,
    createPlainPoints,
    createRoutedPoints,
    lats,
} from '../../util/fixtures/tracks';
import { settle } from '../../util/settle';

const GAP = TracksManager.PROFILE_GAP;

const SAVE_TRACK_DATA = '/gpx/save-track-data';
const GPX_DATA = '<gpx></gpx>';

const TRACK_NAME = 'Track';
const WPT = { lat: 50.5, lng: 30.5, name: 'wpt' };

const sentPoints = (trackData) => trackData.tracks.flatMap((t) => t.points);
const snapshot = (value) => JSON.parse(JSON.stringify(value));

/** trkpt `i` as the server parses it: the rest of the gpx point (time, extensions) is kept in `ext`. */
function createTrkpt(i, extra = {}) {
    const { lat, lng } = createEditorPoint(i);

    return { lat, lng, ele: 100 + i, ext: { time: NOW.getTime() + i * 1000, extensions: { speed: '1.5' } }, ...extra };
}

function createTrkpts(from, to) {
    return Array.from({ length: to - from + 1 }, (_, k) => createTrkpt(from + k));
}

/** gpx_data of the server: an entry of `tracks` per trk, the points of all its trkseg in a row. */
function createGpxData(...trks) {
    return { tracks: trks.map((points) => ({ points })), wpts: [] };
}

/** Route points of one rte as the server gives them: the trkpts `from`..`to` are the geometry of its second point. */
function createRouteLeg(from, to, profile) {
    return [
        createEditorPoint(from, { profile, geometry: [] }),
        createEditorPoint(to, { profile, geometry: createTrkpts(from, to) }),
    ];
}

/** rte and one trk of two trkseg, as WebGpxParserTest.routePointsWithSegmentGeometry: the first trkseg ends with a gap. */
function createRouteAnswer() {
    const first = createRouteLeg(0, 2, PROFILE_PEDESTRIAN);
    first[1].profile = GAP;
    first[1].geometry.at(-1).profile = GAP;

    return createGpxData([...first, ...createRouteLeg(3, 5, PROFILE_BICYCLE)]);
}

function openInEditor(gpxData) {
    return { ...gpxData, name: TRACK_NAME, points: TracksManager.getEditablePoints(gpxData) };
}

/** Save the track as a gpx and read the track data the app has sent to the server for it. */
async function save(file) {
    apiPost.mockResolvedValue({ data: GPX_DATA });
    await getGpxFileFromTrackData(file, file.routeTypes);
    const { body } = findRequest(apiPost, SAVE_TRACK_DATA);

    return readGzipJson(body);
}

describe('the points of an imported gpx in the editor', () => {
    test('the points of one trk are its trkpts as they came, no profile is added, the gap between trkseg is kept', () => {
        const plain = createGpxData(createTrkpts(0, 2));
        const points = TracksManager.getEditablePoints(plain);

        expect(points).toEqual(createTrkpts(0, 2));
        points.forEach((point, i) => expect(point).toBe(plain.tracks[0].points[i]));

        const segments = createGpxData([createTrkpt(0), createTrkpt(1, { profile: GAP }), ...createTrkpts(2, 3)]);
        const expected = snapshot(segments.tracks[0].points);

        expect(TracksManager.getEditablePoints(segments)).toEqual(expected);
    });

    test('route points of rte with trk keep their profile and geometry, a gap and a recorded line are protected', () => {
        const points = TracksManager.getEditablePoints(createRouteAnswer());

        expect(points).toEqual(createRouteAnswer().tracks[0].points);
        expect(isProtectedSegment({ startPoint: points[1], endPoint: points[2] })).toBe(true);
        expect(isProtectedSegment({ startPoint: points[0], endPoint: points[1] })).toBe(false);
        expect(isProtectedSegment({ startPoint: points[2], endPoint: points[3] })).toBe(false);

        const line = TracksManager.getEditablePoints(createGpxData(createRouteLeg(0, 2, PROFILE_LINE)));

        expect(isProtectedSegment({ startPoint: line[0], endPoint: line[1] })).toBe(true);
    });

    test('two trk are joined with a gap after the first one, a gpx of waypoints only gives no points', () => {
        const points = TracksManager.getEditablePoints(createGpxData(createTrkpts(0, 2), createTrkpts(3, 4)));

        expect(points).toEqual([...createTrkpts(0, 1), { ...createTrkpt(2), profile: GAP }, ...createTrkpts(3, 4)]);

        expect(TracksManager.getEditablePoints({ ...createGpxData(), wpts: [WPT] })).toEqual([]);
    });

    test.failing('a gap between two routed trk also ends the geometry of the first one, as Split puts it', () => {
        const points = TracksManager.getEditablePoints(
            createGpxData(createRouteLeg(0, 2, PROFILE_PEDESTRIAN), createRouteLeg(3, 5, PROFILE_BICYCLE))
        );

        expect(points[1].profile).toBe(GAP);
        expect(points[1].geometry.at(-1).profile).toBe(GAP);
    });
});

test('a track imported with others is stored with the points of all its trk and the gap, without tracks', async () => {
    const db = fakeIndexedDbStore();
    const track = { ...createGpxData(createTrkpts(0, 1), createTrkpts(2, 3)), name: TRACK_NAME };

    saveTrackToLocal({ ctx: createCtx(), track, selected: false });
    await settle();

    const record = db.get(0);
    expect(record).not.toHaveProperty('tracks');
    expect(record.points).toMatchObject([createTrkpt(0), { ...createTrkpt(1), profile: GAP }, ...createTrkpts(2, 3)]);
    expect(record.points.map((p) => p.profile)).toEqual([undefined, GAP, undefined, undefined]);
});

describe('the track data a save sends to the server', () => {
    test('the profile, geometry, gap and elevation of the editor points are sent and come back unchanged', async () => {
        const points = createGapPoints(4, 1).map((point, i) => ({ ...point, ele: 100 + i }));
        const expected = snapshot(points);

        const sent = await save({ name: TRACK_NAME, tracks: TracksManager.createGpxTracks(), wpts: [], points });

        expect(sent).toEqual({
            tracks: [{ points: expected }],
            wpts: [],
            metaData: { name: TRACK_NAME },
            analysis: null,
        });
        expect(TracksManager.getEditablePoints(createGpxData(sent.tracks[0].points))).toEqual(expected);
    });

    test.failing('a save does not change the points of the editor', async () => {
        const points = createPlainGapPoints(4, 1);

        await save({ name: TRACK_NAME, tracks: TracksManager.createGpxTracks(), wpts: [], points });

        expect(points).toEqual(createPlainGapPoints(4, 1));
    });

    test.failing('a plain point keeps its time and extensions', async () => {
        const sent = await save(openInEditor(createGpxData(createTrkpts(0, 2))));

        expect(sent.tracks[0].points.map((p) => p.ext)).toEqual(createTrkpts(0, 2).map((p) => p.ext));
    });

    test.failing('every point of a gpx of two trk is sent once', async () => {
        const sent = await save(openInEditor(createGpxData(createTrkpts(0, 2), createTrkpts(3, 4))));

        expect(lats(sentPoints(sent))).toEqual(lats(createPlainPoints(5)));
    });

    test.failing('the points added to a gpx of waypoints only are sent', async () => {
        const points = createRoutedPoints(2);

        const sent = await save({ ...openInEditor({ ...createGpxData(), wpts: [WPT] }), points });

        expect(lats(sentPoints(sent))).toEqual(lats(points));
    });
});
