import { deleteTrack, deleteTrackFolder, deleteTracksFromMap } from '@map/manager/track/DeleteTrackManager';
import { apiGet, apiPost } from '@map/util/HttpApi';
import { findRequest } from '../../util/requests';
import { createTrackGroups, findGroupByName } from '@map/manager/track/TracksManager';
import { createCtx } from '../../util/fixtures/tracks';

const LOGGED_IN = { loginUser: 'osmand@grr.la' };

function cloudCtx() {
    return createCtx({ uniqueFiles: [{ name: 'Folder/Track.gpx', type: 'GPX' }] });
}

beforeEach(() => {
    apiPost.mockResolvedValue({ status: 200 });
    apiGet.mockImplementation(async (url) => {
        if (url.endsWith('/mapapi/list-files')) {
            return { json: async () => ({ uniqueFiles: [] }) };
        }
        if (url.endsWith('/mapapi/get-smart-folders')) {
            return { data: [] };
        }

        return { data: { status: 'ok' } };
    });
});

describe('deleteTrack', () => {
    test('the file is deleted in the cloud and dropped from the list', async () => {
        const ctx = cloudCtx();

        await deleteTrack({ file: { name: 'Folder/Track.gpx' }, ctx, ltx: LOGGED_IN });

        const { options } = findRequest(apiPost, '/mapapi/delete-file');
        expect(options.params).toEqual({ name: 'Folder/Track.gpx', type: 'GPX' });
        expect(ctx.listFiles.uniqueFiles).toEqual([]);
    });

    test('the open track is marked for removal on the map', async () => {
        const ctx = cloudCtx();

        await deleteTrack({ file: { name: 'Folder/Track.gpx' }, ctx, ltx: LOGGED_IN });

        const mutate = ctx.mutateGpxFiles.mock.calls[0][0];
        const files = { 'Folder/Track.gpx': { url: 'http://track' } };
        mutate(files);
        expect(files['Folder/Track.gpx']).toEqual({ url: null, delete: true });
    });

    test('nothing happens without a logged in user', async () => {
        await deleteTrack({ file: { name: 'Folder/Track.gpx' }, ctx: cloudCtx(), ltx: {} });

        expect(apiPost).not.toHaveBeenCalled();
    });

    test('a nameless track is not deleted', async () => {
        const ctx = cloudCtx();
        ctx.selectedGpxFile = {};

        await deleteTrack({ file: null, ctx, ltx: LOGGED_IN });

        expect(apiPost).not.toHaveBeenCalled();
    });
});

describe('deleteTrack: track groups', () => {
    function ctxWithGroups(names, updatetimems = () => 1000) {
        const files = names.map((name) => ({ name, updatetimems: updatetimems(name) }));
        const ctx = createCtx({ uniqueFiles: files });
        ctx.tracksGroups = createTrackGroups({ files, ctx });
        return ctx;
    }

    test('a track of a folder is removed from that folder', async () => {
        const ctx = ctxWithGroups(['Folder/Track.gpx', 'Folder/Second.gpx']);

        await deleteTrack({ file: { name: 'Folder/Track.gpx' }, ctx, ltx: LOGGED_IN });

        const folder = findGroupByName(ctx.tracksGroups, 'Folder');
        expect(folder.groupFiles.map((f) => f.name)).toEqual(['Folder/Second.gpx']);
        expect(folder.files.map((f) => f.name)).toEqual(['Folder/Second.gpx']);
        expect(folder.realSize).toBe(1);
    });

    test('a track of a subfolder is removed from that subfolder', async () => {
        const ctx = ctxWithGroups(['Folder/Nested/Deep.gpx', 'Folder/Own.gpx']);

        await deleteTrack({ file: { name: 'Folder/Nested/Deep.gpx' }, ctx, ltx: LOGGED_IN });

        const nested = findGroupByName(ctx.tracksGroups, 'Folder/Nested');
        expect(nested.groupFiles).toEqual([]);
        expect(nested.realSize).toBe(0);
    });

    test('a track without a folder is removed from the default group', async () => {
        const ctx = ctxWithGroups(['Track.gpx', 'Second.gpx']);

        await deleteTrack({ file: { name: 'Track.gpx' }, ctx, ltx: LOGGED_IN });

        const defaultGroup = findGroupByName(ctx.tracksGroups, '');
        expect(defaultGroup.files.map((f) => f.name)).toEqual(['Second.gpx']);
    });

    test('a root track is removed from the default group that owns folders', async () => {
        const ctx = ctxWithGroups(['Track.gpx', 'Folder/Inside.gpx']);

        await deleteTrack({ file: { name: 'Track.gpx' }, ctx, ltx: LOGGED_IN });

        const defaultGroup = findGroupByName(ctx.tracksGroups, '');
        expect(defaultGroup.groupFiles).toEqual([]);
        expect(defaultGroup.files.map((f) => f.name)).toEqual(['Folder/Inside.gpx']);
        expect(defaultGroup.realSize).toBe(1);
    });

    test('the groups above the track are updated too', async () => {
        const ctx = ctxWithGroups(['Root.gpx', 'Folder/Nested/Deep.gpx']);

        await deleteTrack({ file: { name: 'Folder/Nested/Deep.gpx' }, ctx, ltx: LOGGED_IN });

        const folder = findGroupByName(ctx.tracksGroups, 'Folder');
        expect(folder.files).toEqual([]);
        expect(folder.realSize).toBe(0);
        const defaultGroup = findGroupByName(ctx.tracksGroups, '');
        expect(defaultGroup.files.map((f) => f.name)).toEqual(['Root.gpx']);
        expect(defaultGroup.realSize).toBe(1);
    });

    test('the folder date follows the deleted track', async () => {
        const ctx = ctxWithGroups(['Folder/Old.gpx', 'Folder/New.gpx'], (name) =>
            name.endsWith('New.gpx') ? 5000 : 1000
        );

        await deleteTrack({ file: { name: 'Folder/New.gpx' }, ctx, ltx: LOGGED_IN });

        expect(findGroupByName(ctx.tracksGroups, 'Folder').lastModifiedMs).toBe(1000);
    });

    test('a track is deleted even when the groups are not loaded yet', async () => {
        const ctx = createCtx({ uniqueFiles: [{ name: 'Track.gpx' }] });

        await deleteTrack({ file: { name: 'Track.gpx' }, ctx, ltx: LOGGED_IN });

        expect(ctx.listFiles.uniqueFiles).toEqual([]);
    });
});

describe('deleteTrackFolder', () => {
    test('the folder is deleted by its full path', async () => {
        await deleteTrackFolder({ fullName: 'Folder/Nested' }, cloudCtx());

        const { options } = findRequest(apiGet, '/mapapi/delete-folder');
        expect(options.params).toEqual({ folderName: 'Folder/Nested', type: 'GPX' });
    });

    test('a server error is shown', async () => {
        apiGet.mockImplementation(async () => ({ data: 'folder is not empty' }));
        const ctx = cloudCtx();

        await deleteTrackFolder({ fullName: 'Folder' }, ctx);

        expect(ctx.setTrackErrorMsg).toHaveBeenCalledWith({ title: 'Delete error', msg: 'folder is not empty' });
    });
});

describe('deleteTracksFromMap', () => {
    test('only tracks shown on the map are hidden', () => {
        const ctx = cloudCtx();
        const shown = { name: 'Shown.gpx', url: 'http://shown' };

        deleteTracksFromMap(ctx, [shown, { name: 'Hidden.gpx' }]);

        const update = ctx.setGpxFiles.mock.calls[0][0];
        const next = update({ 'Shown.gpx': { url: 'http://shown' }, 'Hidden.gpx': { url: null } });
        expect(next['Shown.gpx'].url).toBeNull();
        expect(next['Hidden.gpx'].url).toBeNull();
    });

    test('shared tracks are hidden in their own storage', () => {
        const ctx = cloudCtx();

        deleteTracksFromMap(ctx, [{ name: 'Shared.gpx', url: 'http://shared', sharedWithMe: true }]);

        expect(ctx.setGpxFiles).not.toHaveBeenCalled();
        const update = ctx.setShareWithMeFiles.mock.calls[0][0];
        const next = update({ tracks: { 'Shared.gpx': { url: 'http://shared' } } });
        expect(next.tracks['Shared.gpx'].url).toBeNull();
    });

    test('the open track stops being the selected object', () => {
        const ctx = cloudCtx();
        ctx.selectedGpxFile = { name: 'Shown.gpx' };

        deleteTracksFromMap(ctx, [{ name: 'Shown.gpx', url: 'http://shown' }]);

        expect(ctx.setCurrentObjectType).toHaveBeenCalledWith(null);
    });

    test('nothing to hide', () => {
        const ctx = cloudCtx();

        deleteTracksFromMap(ctx, []);

        expect(ctx.setGpxFiles).not.toHaveBeenCalled();
    });
});
