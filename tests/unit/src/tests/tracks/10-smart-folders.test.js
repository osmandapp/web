import {
    deleteSmartFolder,
    loadSmartFolders,
    populateSmartFolderFiles,
    renameSmartFolder,
} from '@map/manager/SmartFoldersManager';
import { SMART_TYPE } from '@map/menu/share/shareConstants';
import { apiGet } from '@map/util/HttpApi';
import { createCtx } from '../../util/fixtures/tracks';

const SMART_FOLDER = 'My smart folder';

/** Smart folder as the server returns it: a name and the paths of the files it matched. */
function serverFolder({ name = SMART_FOLDER, userFilePaths = ['Folder/Track.gpx'], creationTime = 1000 } = {}) {
    return { name, userFilePaths, creationTime };
}

function serverFolders(folders) {
    apiGet.mockImplementation(async (url) => {
        if (url.endsWith('/mapapi/get-smart-folders')) {
            return { data: folders };
        }

        return { data: { status: 'ok' } };
    });
}

function regularFolder(name) {
    return { name, fullName: name, subfolders: [], groupFiles: [], files: [] };
}

beforeEach(() => {
    serverFolders([serverFolder()]);
});

describe('loadSmartFolders', () => {
    test('a smart folder of the server becomes a group', async () => {
        const setTracksGroups = jest.fn((update) => update([]));

        await loadSmartFolders(setTracksGroups, jest.fn());

        const [group] = setTracksGroups.mock.results[0].value;
        expect(group).toMatchObject({
            name: SMART_FOLDER,
            fullName: SMART_FOLDER,
            type: SMART_TYPE,
            realSize: 1,
            userFilePaths: ['Folder/Track.gpx'],
        });
        expect(group.files).toEqual([]);
        expect(group.subfolders).toEqual([]);
    });

    test('regular folders survive, the previous smart folders are replaced', async () => {
        const previous = [regularFolder('Folder'), { ...regularFolder('Old smart'), type: SMART_TYPE }];
        const setTracksGroups = jest.fn((update) => update(previous));

        await loadSmartFolders(setTracksGroups, jest.fn());

        const names = setTracksGroups.mock.results[0].value.map((g) => g.fullName);
        expect(names).toEqual(['Folder', SMART_FOLDER]);
    });

    test('the cache is cleared before the folders are loaded', async () => {
        const setSmartFoldersCache = jest.fn();

        await loadSmartFolders(jest.fn(), setSmartFoldersCache);

        expect(setSmartFoldersCache).toHaveBeenCalledWith({});
    });

    test('a folder without files is loaded with an empty size', async () => {
        serverFolders([{ name: SMART_FOLDER, creationTime: 1000 }]);
        const setTracksGroups = jest.fn((update) => update([]));

        await loadSmartFolders(setTracksGroups, jest.fn());

        expect(setTracksGroups.mock.results[0].value[0]).toMatchObject({ realSize: 0, userFilePaths: [] });
    });

    test('no smart folders on the server leave only the regular ones', async () => {
        serverFolders(null);
        const setTracksGroups = jest.fn((update) => update([regularFolder('Folder')]));

        await loadSmartFolders(setTracksGroups, jest.fn());

        expect(setTracksGroups.mock.results[0].value.map((g) => g.fullName)).toEqual(['Folder']);
    });
});

describe('populateSmartFolderFiles', () => {
    const folder = { name: SMART_FOLDER, type: SMART_TYPE, userFilePaths: ['Folder/Track.gpx', 'Second.gpx'] };
    const listFiles = [{ name: 'Folder/Track.gpx' }, { name: 'Second.gpx' }, { name: 'Other.gpx' }];

    test('the files of the folder are taken from the file list', () => {
        const populated = populateSmartFolderFiles(folder, listFiles, {}, jest.fn());

        expect(populated.groupFiles.map((f) => f.name)).toEqual(['Folder/Track.gpx', 'Second.gpx']);
        expect(populated.files).toBe(populated.groupFiles);
        expect(populated.realSize).toBe(2);
        expect(populated.groupFiles.every((f) => f.smartFolder)).toBe(true);
    });

    test('a path that is not in the file list is skipped', () => {
        const populated = populateSmartFolderFiles(folder, [{ name: 'Second.gpx' }], {}, jest.fn());

        expect(populated.groupFiles.map((f) => f.name)).toEqual(['Second.gpx']);
        expect(populated.realSize).toBe(1);
    });

    test('the populated folder is cached', () => {
        const setSmartFoldersCache = jest.fn((update) => update({}));

        const populated = populateSmartFolderFiles(folder, listFiles, {}, setSmartFoldersCache);

        expect(setSmartFoldersCache.mock.results[0].value).toEqual({ [SMART_FOLDER]: populated });
    });

    test('a cached folder is returned as it is', () => {
        const cached = { ...folder, groupFiles: [], files: [], realSize: 0 };
        const setSmartFoldersCache = jest.fn();

        const populated = populateSmartFolderFiles(folder, listFiles, { [SMART_FOLDER]: cached }, setSmartFoldersCache);

        expect(populated).toBe(cached);
        expect(setSmartFoldersCache).not.toHaveBeenCalled();
    });
});

describe('renameSmartFolder', () => {
    test('only the last segment of the path is renamed', async () => {
        const ctx = createCtx();

        await renameSmartFolder({ fullName: 'Trips/Trips', name: 'Trips' }, '2026', ctx);

        const call = apiGet.mock.calls.find(([url]) => url.endsWith('/mapapi/rename-smart-folder'));
        expect(call[1].params).toEqual({ folderName: 'Trips/Trips', newFolderName: 'Trips/2026' });
    });

    test('the sort of the folder moves to the new name', async () => {
        const ctx = createCtx();
        ctx.selectedSort = { tracks: { [SMART_FOLDER]: 'az' } };

        await renameSmartFolder({ fullName: SMART_FOLDER, name: SMART_FOLDER }, 'Renamed', ctx);

        expect(ctx.selectedSort.tracks['Renamed']).toBe('az');
    });

    test('the folders are reloaded after the rename', async () => {
        const ctx = createCtx();

        await renameSmartFolder({ fullName: SMART_FOLDER, name: SMART_FOLDER }, 'Renamed', ctx);

        expect(ctx.tracksGroups.map((g) => g.fullName)).toEqual([SMART_FOLDER]);
    });

    test('a duplicate name is reported', async () => {
        apiGet.mockImplementation(async () => ({ data: 'folder already exists' }));
        const ctx = createCtx();

        await renameSmartFolder({ fullName: SMART_FOLDER, name: SMART_FOLDER }, 'Renamed', ctx);

        expect(ctx.setTrackErrorMsg).toHaveBeenCalledWith({ title: 'Duplicate error', msg: 'folder already exists' });
    });
});

describe('deleteSmartFolder', () => {
    test('the folder is deleted by its full path and the folders are reloaded', async () => {
        const ctx = createCtx();

        await deleteSmartFolder({ fullName: SMART_FOLDER }, ctx);

        const call = apiGet.mock.calls.find(([url]) => url.endsWith('/mapapi/delete-smart-folder'));
        expect(call[1].params).toEqual({ folderName: SMART_FOLDER });
        expect(ctx.tracksGroups.map((g) => g.fullName)).toEqual([SMART_FOLDER]);
    });

    test('a server error is shown', async () => {
        apiGet.mockImplementation(async () => ({ data: 'cannot delete' }));
        const ctx = createCtx();

        await deleteSmartFolder({ fullName: SMART_FOLDER }, ctx);

        expect(ctx.setTrackErrorMsg).toHaveBeenCalledWith({ title: 'Delete error', msg: 'cannot delete' });
    });
});
