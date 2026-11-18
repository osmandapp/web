import { apiGet, apiPost } from '@map/util/HttpApi';
import TracksManager from '@map/manager/track/TracksManager';
import { updateRouteBetweenPoints } from '@map/store/geoRouter/legacy/updateRouteBetweenPoints';
import { createEditorPoint, lats } from '../../util/fixtures/tracks';

const GAP = TracksManager.PROFILE_GAP;
const OSRM = { type: 'osrm', profile: 'OSRM-car' };
const OSMAND = { type: 'osmand', profile: 'car' };

const router = { getURL: () => 'https://osrm.test/' };
const createGapPoint = () => createEditorPoint(1, { profile: GAP });
const createCtx = () => ({ setRoutingErrorMsg: jest.fn() });
const along = (...lats) => lats.map((lat) => ({ lat, lng: 30 }));

/** OSRM answer with one route along the given latitudes, or with no route. */
const osrmAnswer = (...lats) => ({
    ok: true,
    json: async () => ({
        routes: lats.length > 0 ? [{ geometry: { coordinates: lats.map((lat) => [30, lat]) } }] : [],
    }),
});

const route = (ctx, end, geoProfile) =>
    updateRouteBetweenPoints.call(router, ctx, createEditorPoint(0), end, geoProfile);

describe('a router answer without a route', () => {
    test('OSRM and OsmAnd give a straight line and a message', async () => {
        apiGet.mockResolvedValue(osrmAnswer());
        apiPost.mockResolvedValue({ data: { msg: 'Route not found' } });

        for (const geoProfile of [OSRM, OSMAND]) {
            const ctx = createCtx();

            const result = await route(ctx, createEditorPoint(1), geoProfile);

            expect(lats(result.points)).toEqual([50, 50.01]);
            expect(ctx.setRoutingErrorMsg).toHaveBeenLastCalledWith(expect.any(String));
        }
    });

    test.failing('OsmAnd gives a straight line to a gap point too', async () => {
        apiPost.mockResolvedValue({ data: { msg: 'Route not found' } });

        const result = await route(createCtx(), createGapPoint(), OSMAND);

        expect(lats(result.points)).toEqual([50, 50.01]);
    });
});

describe('a route to a gap point', () => {
    test('carries the gap on its last vertex', async () => {
        apiGet.mockResolvedValue(osrmAnswer(50, 50.005, 50.01));
        apiPost.mockImplementation(async (url) =>
            url.endsWith('/routing/update-route-between-points') ? { data: { points: along(50, 50.005, 50.01) } } : null
        );

        for (const geoProfile of [OSRM, OSMAND]) {
            const result = await route(createCtx(), createGapPoint(), geoProfile);

            expect(result.points.at(-1).profile).toBe(GAP);
        }
    });

    test.failing('carries the gap on its last vertex when OSRM is approximated', async () => {
        apiGet.mockResolvedValue(osrmAnswer(50, 50.005, 50.01));
        apiPost.mockResolvedValue({ data: { points: along(50, 50.004, 50.01) } });

        const result = await route(createCtx(), createGapPoint(), OSRM);

        expect(result.points.at(-1).profile).toBe(GAP);
    });

    test.failing('carries the gap on its last vertex when it is replaced by a straight line', async () => {
        apiGet.mockResolvedValue(osrmAnswer());

        const result = await route(createCtx(), createGapPoint(), OSRM);

        expect(result.points.at(-1).profile).toBe(GAP);
    });
});

describe('an OSRM route', () => {
    test('is approximated on the server', async () => {
        apiGet.mockResolvedValue(osrmAnswer(50, 50.005, 50.01));
        apiPost.mockResolvedValue({ data: { points: along(50, 50.004, 50.01) } });

        const result = await route(createCtx(), createEditorPoint(1), OSRM);

        expect(apiPost).toHaveBeenCalledWith(
            'https://api.test/routing/approximate',
            expect.any(Array),
            expect.objectContaining({ params: expect.objectContaining({ routeMode: 'OSRM-car', nPoints: 3 }) })
        );
        expect(lats(result.points)).toEqual([50, 50.004, 50.01]);
    });

    test('longer than REACT_APP_MAX_APPROXIMATE_KM is not approximated', async () => {
        apiGet.mockResolvedValue(osrmAnswer(50, 51));

        const result = await route(createCtx(), createEditorPoint(100), OSRM);

        expect(apiPost).not.toHaveBeenCalled();
        expect(lats(result.points)).toEqual([50, 51]);
    });
});
