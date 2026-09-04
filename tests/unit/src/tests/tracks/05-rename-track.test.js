import { TRACK_VISIBLE_FLAG } from '@map/manager/track/TracksManager';
import {
    duplicateTrack,
    renameFolder,
    renameTrack,
    saveEmptyTrack,
    updateVisibleTracks,
} from '@map/manager/track/SaveTrackManager';
import { apiGet, apiPost } from '@map/util/HttpApi';
import { findRequest } from '../../util/requests';
import { createCtx } from '../../util/fixtures/tracks';

const CLOUD_FILES = [{ name: 'Folder/Track.gpx', type: 'GPX', updatetimems: 1000 }];

function cloudCtx() {
    return createCtx({ uniqueFiles: CLOUD_FILES });
}

beforeEach(() => {
    localStorage.clear();
    // rename-file and rename-folder answer ok, list-files gives the refreshed list
    apiGet.mockImplementation(async (url) => {
        if (url.endsWith('/mapapi/list-files')) {
            return { json: async () => ({ uniqueFiles: CLOUD_FILES }) };
        }

        return { data: { status: 'ok' } };
    });
    apiPost.mockResolvedValue({ data: { status: 'ok' } });
});

describe('renameTrack', () => {
    test('the new name keeps the folder and the extension', async () => {
        await renameTrack('Folder/Old.gpx', 'Folder/', 'New', cloudCtx());

        const { options } = findRequest(apiGet, '/mapapi/rename-file');
        expect(options.params).toEqual({
            oldName: 'Folder/Old.gpx',
            newName: 'Folder/New.gpx',
            type: 'GPX',
            saveCopy: false,
        });
    });

    test('the same name sends nothing', async () => {
        await renameTrack('Folder/Track.gpx', 'Folder/', 'Track', cloudCtx());

        expect(apiGet).not.toHaveBeenCalled();
    });

    test('a server error is shown and the list is not refreshed', async () => {
        apiGet.mockResolvedValue({ data: 'name is occupied' });
        const ctx = cloudCtx();

        await renameTrack('Folder/Old.gpx', 'Folder/', 'New', ctx);

        expect(ctx.setTrackErrorMsg).toHaveBeenCalledWith({ title: 'Rename error', msg: 'name is occupied' });
        expect(apiGet).toHaveBeenCalledTimes(1);
    });
});

describe('renameFolder', () => {
    test('only the folder itself is renamed, the path is kept', async () => {
        await renameFolder({ name: 'Nested', fullName: 'Folder/Nested' }, 'Renamed', cloudCtx());

        const { options } = findRequest(apiGet, '/mapapi/rename-folder');
        expect(options.params).toEqual({
            folderName: 'Folder/Nested',
            newFolderName: 'Folder/Renamed',
            type: 'GPX',
        });
    });

    test('the name of the parent folder is not touched when it contains the same words', async () => {
        await renameFolder({ name: 'Bike', fullName: 'Bike rides/Bike' }, 'MTB', cloudCtx());

        const { options } = findRequest(apiGet, '/mapapi/rename-folder');
        expect(options.params.newFolderName).toBe('Bike rides/MTB');
    });
});

describe('duplicateTrack', () => {
    test('a copy is saved next to the original, under a free name', async () => {
        const ctx = cloudCtx();
        ctx.tracksGroups = [{ name: 'Folder', fullName: 'Folder', groupFiles: CLOUD_FILES, subfolders: [] }];

        await duplicateTrack('Folder/Track.gpx', 'Folder', 'Track', ctx);

        const { options } = findRequest(apiGet, '/mapapi/rename-file');
        expect(options.params).toEqual({
            oldName: 'Folder/Track.gpx',
            newName: 'Folder/Track - 1.gpx',
            type: 'GPX',
            saveCopy: true,
        });
    });
});

describe('saveEmptyTrack', () => {
    test('a folder is created as a placeholder file', async () => {
        await expect(saveEmptyTrack('New folder', cloudCtx())).resolves.toBe(true);

        const { options } = findRequest(apiPost, '/mapapi/upload-file');
        expect(options.params).toEqual({ type: 'GPX', name: 'New folder/__folder__.info' });
    });
});

describe('updateVisibleTracks', () => {
    function visible(state) {
        localStorage.setItem(TRACK_VISIBLE_FLAG, JSON.stringify(state));
    }

    function stored() {
        return JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
    }

    test('a visible track keeps being visible under the new name', () => {
        visible({ new: ['Folder/Old.gpx'], old: [], open: [] });

        updateVisibleTracks('Folder/Old.gpx', 'Folder/New.gpx');

        expect(stored().new).toEqual(['Folder/New.gpx']);
    });

    test('a track of the previous session is renamed as well', () => {
        visible({ new: [], old: ['Folder/Old.gpx'], open: [] });

        updateVisibleTracks('Folder/Old.gpx', 'Folder/New.gpx');

        expect(stored().old).toEqual(['Folder/New.gpx']);
    });

    test('an opened track is renamed as well', () => {
        visible({ new: ['Folder/Old.gpx'], old: [], open: ['Folder/Old.gpx'] });

        updateVisibleTracks('Folder/Old.gpx', 'Folder/New.gpx');

        expect(stored().open).toEqual(['Folder/New.gpx']);
    });

    test('other tracks are left alone', () => {
        visible({ new: ['Folder/Other.gpx'], old: ['Folder/Third.gpx'], open: [] });

        updateVisibleTracks('Folder/Old.gpx', 'Folder/New.gpx');

        expect(stored()).toEqual({ new: ['Folder/Other.gpx'], old: ['Folder/Third.gpx'], open: [] });
    });

    test('nothing stored - nothing to do', () => {
        expect(() => updateVisibleTracks('Folder/Old.gpx', 'Folder/New.gpx')).not.toThrow();
        expect(localStorage.getItem(TRACK_VISIBLE_FLAG)).toBeNull();
    });
});
