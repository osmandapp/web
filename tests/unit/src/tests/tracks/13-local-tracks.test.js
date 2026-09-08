import {
    deleteLocalTrack,
    deleteLocalTracksByIndexes,
    loadLocalTracksFromStorage,
    saveTrackToLocalStorage,
} from '@map/context/LocalTrackStorage';
import { fakeTracksDb, removeIndexedDb } from '../../util/indexedDb';

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

/** the storage writes are not awaited by the app, give them a tick */
const settle = () => new Promise((resolve) => setTimeout(resolve, 0));

let db;

beforeEach(() => {
    db = fakeTracksDb();
});

afterEach(() => {
    removeIndexedDb();
});

test('a track is saved under its own place, a nameless one is refused', async () => {
    const ctx = createCtx();

    saveTrackToLocalStorage({ ctx, track: track('Track') });
    saveTrackToLocalStorage({ ctx, track: { ...track('Track'), points: [{ lat: 51, lng: 31 }] } });
    saveTrackToLocalStorage({ ctx, track: { points: [] } });
    await settle();

    expect(ctx.localTracks.map((t) => t.name)).toEqual(['Track']);
    expect([...db.keys()]).toEqual([0]);
    expect(db.get(0).points).toEqual([{ lat: 51, lng: 31 }]);
    expect(ctx.setRoutingErrorMsg).toHaveBeenCalled();
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
