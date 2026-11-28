import {
    clearAllLocalTracks,
    deleteLocalTrack,
    deleteLocalTracksByIndexes,
    loadLocalTracksFromStorage,
    saveTrackToLocalStorage,
} from '@map/context/LocalTrackStorage';
import { renameLocalTrack } from '@map/manager/track/SaveTrackManager';
import { withEditedPoints } from '@map/manager/track/TracksManager';
import { assignWptIds } from '@map/manager/track/TrackOperations';
import { fakeIndexedDbStore, removeIndexedDb } from '../../util/indexedDb';
import { settle } from '../../util/settle';
import { isAnalysisAsked } from '../../util/editor';

/** ctx as the local tracks menu keeps it: the list itself plus its setter. */
function createCtx(localTracks = []) {
    const ctx = {
        localTracks,
        setLocalTracks: jest.fn((update) => {
            ctx.localTracks = typeof update === 'function' ? update(ctx.localTracks) : update;
        }),
        setRoutingErrorMsg: jest.fn(),
    };

    return ctx;
}

function track(name) {
    return { name, points: [{ lat: 50, lng: 30 }], wpts: [] };
}

let db;

beforeEach(() => {
    db = fakeIndexedDbStore();
});

afterEach(() => {
    removeIndexedDb();
});

test('a track is saved under its own place and the list keeps the saved version, a nameless one is refused', async () => {
    const ctx = createCtx();

    saveTrackToLocalStorage({ ctx, track: track('Track') });
    saveTrackToLocalStorage({ ctx, track: { ...track('Track'), points: [{ lat: 51, lng: 31 }] } });
    saveTrackToLocalStorage({ ctx, track: { points: [] } });
    await settle();

    expect(ctx.localTracks).toEqual([{ ...track('Track'), points: [{ lat: 51, lng: 31 }] }]);
    expect([...db.keys()]).toEqual([0]);
    expect(db.get(0).points).toEqual([{ lat: 51, lng: 31 }]);
    expect(ctx.setRoutingErrorMsg).toHaveBeenCalled();
});

test('a write held back for the analysis keeps the list current, so Back saves the edit, and the next write stores it', async () => {
    const ctx = createCtx();
    saveTrackToLocalStorage({ ctx, track: track('Track') });
    await settle();
    const edited = { ...track('Track'), points: [{ lat: 51, lng: 31 }] };

    saveTrackToLocalStorage({ ctx, track: edited, writeToDB: false });
    await settle();

    expect(ctx.localTracks[0].points).toBe(edited.points);
    expect(db.get(0).points).toEqual([{ lat: 50, lng: 30 }]);

    saveTrackToLocalStorage({ ctx, track: edited });
    await settle();

    expect(db.get(0).points).toEqual([{ lat: 51, lng: 31 }]);
});

test('the tracks are loaded in the order of their ids, a record without a name is dropped', async () => {
    db.set(2, track('Third'));
    db.set(0, track('First'));
    db.set(1, { points: [] });

    const tracks = await loadLocalTracksFromStorage(jest.fn());

    expect(tracks.map((t) => t.name)).toEqual(['First', 'Third']);
    // the ids are packed again, so the next save does not overwrite anybody
    expect([...db.entries()].map(([id, t]) => [id, t.name])).toEqual([
        [0, 'First'],
        [1, 'Third'],
    ]);
});

describe('an edited local track', () => {
    const points = [
        { lat: 50, lng: 30, profile: 'car', geoProfile: { profile: 'car' }, geometry: [] },
        {
            lat: 50.01,
            lng: 30,
            profile: 'car',
            geometry: [
                { lat: 50, lng: 30 },
                { lat: 50.01, lng: 30 },
            ],
        },
    ];
    const edited = () => ({
        ...track('Track'),
        points,
        tracks: [{ points }],
        wpts: assignWptIds([{ lat: 50, lon: 30, name: 'wpt' }]),
        layers: {},
        updateLayers: true,
        selected: true,
        analysis: { totalDistance: 1112, srtmAnalysis: true, isSrtmApplied: true },
    });

    test('is stored with its points, profiles, geometry and waypoints, without lines, gpx tracks and waypoint ids', async () => {
        saveTrackToLocalStorage({ ctx: createCtx(), track: edited() });
        await settle();

        const record = db.get(0);
        expect(record.points).toEqual(points);
        expect(record.wpts).toEqual([{ lat: 50, lon: 30, name: 'wpt' }]);
        expect(record).not.toHaveProperty('tracks');
        expect(record).not.toHaveProperty('layers');
        expect(record).not.toHaveProperty('updateLayers');
        expect(record.selected).toBe(false);
        expect(record.analysis).toMatchObject({ totalDistance: 1112, srtmAnalysis: false, isSrtmApplied: false });
    });

    test('opens after a reload with its edits and does not ask for its analysis again', async () => {
        saveTrackToLocalStorage({ ctx: createCtx(), track: edited() });
        await settle();

        const [loaded] = await loadLocalTracksFromStorage(jest.fn());

        expect(loaded.points).toEqual(points);
        expect(loaded.selected).toBe(false);
        expect(isAnalysisAsked({ selectedGpxFile: loaded })).toBe(false);
        expect(withEditedPoints(loaded).tracks).toEqual([{ points }]);
    });
});

describe('renaming a local track', () => {
    function ctxWithTwo() {
        ['First', 'Second'].forEach((name, id) => db.set(id, track(name)));
        const ctx = createCtx([track('First'), track('Second')]);
        ctx.selectedGpxFile = ctx.localTracks[1];
        ctx.setSelectedGpxFile = jest.fn();

        return ctx;
    }

    test('the track keeps its place in the storage, the open track and the list get the new name', async () => {
        const ctx = ctxWithTwo();

        expect(renameLocalTrack(ctx, 'Second', 'Renamed')).toEqual({ ok: true });
        await settle();

        expect(ctx.localTracks.map((t) => t.name)).toEqual(['First', 'Renamed']);
        expect([...db.entries()].map(([id, t]) => [id, t.name])).toEqual([
            [0, 'First'],
            [1, 'Renamed'],
        ]);
        expect(ctx.setSelectedGpxFile).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'Renamed', id: 'Renamed', oldName: 'Second' })
        );
    });

    test('the name of another track renames nothing', async () => {
        const ctx = ctxWithTwo();

        expect(renameLocalTrack(ctx, 'Second', 'First')).toHaveProperty('error');
        await settle();

        expect(ctx.localTracks.map((t) => t.name)).toEqual(['First', 'Second']);
        expect(db.get(1).name).toBe('Second');
    });
});

describe('deleting local tracks', () => {
    function ctxWithThree() {
        ['First', 'Second', 'Third'].forEach((name, id) => db.set(id, track(name)));

        return createCtx([track('First'), track('Second'), track('Third')]);
    }

    test('a track deleted in the same session does not come back after a reload', async () => {
        const ctx = ctxWithThree();

        deleteLocalTrack(ctx, 1);
        await settle();
        ctx.selectedGpxFile = track('Third');
        deleteLocalTrack(ctx);
        await settle();

        expect(ctx.localTracks.map((t) => t.name)).toEqual(['First']);
        const left = await loadLocalTracksFromStorage(jest.fn());
        expect(left.map((t) => t.name)).toEqual(['First']);
    });

    test('clearing the list removes every stored track and closes the open one', async () => {
        const ctx = ctxWithThree();
        ctx.selectedGpxFile = track('Second');
        ctx.setSelectedGpxFile = jest.fn();

        clearAllLocalTracks(ctx);
        await settle();

        expect(ctx.localTracks).toEqual([]);
        expect([...db.keys()]).toEqual([]);
        expect(ctx.setSelectedGpxFile).toHaveBeenCalledWith({});
    });

    test('the tracks that are left keep their place in the storage', async () => {
        const ctx = ctxWithThree();

        deleteLocalTracksByIndexes(ctx, [0]);
        await settle();
        expect(ctx.localTracks.map((t) => t.name)).toEqual(['Second', 'Third']);
        expect((await loadLocalTracksFromStorage(jest.fn())).map((t) => t.name)).toEqual(['Second', 'Third']);

        const other = ctxWithThree();
        deleteLocalTracksByIndexes(other, [0, 2]);
        await settle();
        expect((await loadLocalTracksFromStorage(jest.fn())).map((t) => t.name)).toEqual(['Second']);
    });
});
