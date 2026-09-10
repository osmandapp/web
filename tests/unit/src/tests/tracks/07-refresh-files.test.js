import { refreshGlobalFiles } from '@map/manager/track/SaveTrackManager';
import { findGroupByName, TRACK_VISIBLE_FLAG } from '@map/manager/track/TracksManager';
import { SMART_TYPE } from '@map/menu/share/shareConstants';
import { apiGet } from '@map/util/HttpApi';
import { createCtx } from '../../util/fixtures/tracks';

function file(name, updatetimems = 1000, details = undefined) {
    return { name, type: 'GPX', updatetimems, updatetime: new Date(updatetimems).toISOString(), details };
}

function smartFolder(name) {
    return {
        name,
        fullName: name,
        type: SMART_TYPE,
        subfolders: [],
        groupFiles: [],
        files: [],
        userFilePaths: [],
    };
}

function serverFiles(uniqueFiles) {
    apiGet.mockImplementation(async () => ({ json: async () => ({ uniqueFiles }) }));
}

describe('refreshGlobalFiles', () => {
    test('the file list is reloaded and the track groups are rebuilt from it', async () => {
        const ctx = createCtx();
        serverFiles([file('Folder/Track.gpx'), file('Loose.gpx')]);

        await refreshGlobalFiles({ ctx });

        expect(ctx.listFiles.uniqueFiles).toHaveLength(2);
        expect(findGroupByName(ctx.tracksGroups, 'Folder').groupFiles.map((f) => f.name)).toEqual(['Folder/Track.gpx']);
        expect(findGroupByName(ctx.tracksGroups, '').groupFiles.map((f) => f.name)).toEqual(['Loose.gpx']);
    });

    test('only gpx files become groups', async () => {
        const ctx = createCtx();
        serverFiles([file('Folder/Track.gpx'), { ...file('Folder/Track.gpx.info'), type: 'GPX' }]);

        await refreshGlobalFiles({ ctx });

        expect(findGroupByName(ctx.tracksGroups, 'Folder').realSize).toBe(1);
    });

    test('smart folders survive a refresh', async () => {
        const ctx = createCtx();
        ctx.tracksGroups = [smartFolder('My smart folder')];
        serverFiles([file('Folder/Track.gpx')]);

        await refreshGlobalFiles({ ctx });

        expect(ctx.tracksGroups.map((g) => g.fullName)).toContain('My smart folder');
    });

    test('an empty file list leaves only the smart folders', async () => {
        const ctx = createCtx();
        ctx.tracksGroups = [smartFolder('My smart folder'), { name: 'Folder', fullName: 'Folder' }];
        apiGet.mockImplementation(async () => ({ json: async () => ({}) }));

        await refreshGlobalFiles({ ctx });

        expect(ctx.tracksGroups.map((g) => g.fullName)).toEqual(['My smart folder']);
    });

    test('files whose details are outdated are queued for an update', async () => {
        const ctx = createCtx();
        serverFiles([
            file('Fresh.gpx', 1000, { update: false }),
            file('Outdated.gpx', 2000, { update: true, updatetime: 'time' }),
        ]);

        await refreshGlobalFiles({ ctx });

        expect(ctx.setUpdateFiles).toHaveBeenCalledWith([
            { name: 'Outdated.gpx', type: 'GPX', isError: false, time: 'time' },
        ]);
    });
});

describe('refreshGlobalFiles: the file is already in the list', () => {
    const NOW = 1750000000000;

    beforeEach(() => {
        jest.spyOn(Date, 'now').mockReturnValue(NOW);
    });

    function ctxWithGroups() {
        const ctx = createCtx({ uniqueFiles: [file('Folder/Nested/Track.gpx')] });
        ctx.tracksGroups = [
            {
                name: 'Folder',
                fullName: 'Folder',
                groupFiles: [],
                files: [file('Folder/Nested/Track.gpx')],
                subfolders: [
                    {
                        name: 'Nested',
                        fullName: 'Folder/Nested',
                        groupFiles: [file('Folder/Nested/Track.gpx')],
                        files: [file('Folder/Nested/Track.gpx')],
                        subfolders: [],
                    },
                ],
            },
        ];
        return ctx;
    }

    test('the list is not reloaded', async () => {
        const ctx = ctxWithGroups();

        await refreshGlobalFiles({ ctx, currentFileName: 'Folder/Nested/Track.gpx' });

        expect(apiGet).not.toHaveBeenCalled();
    });

    test('the save time of the file is updated in every group holding it', async () => {
        const ctx = ctxWithGroups();

        await refreshGlobalFiles({ ctx, currentFileName: 'Folder/Nested/Track.gpx' });

        const nested = findGroupByName(ctx.tracksGroups, 'Folder/Nested');
        expect(nested.groupFiles[0].updatetimems).toBe(NOW);
        expect(nested.files[0].updatetimems).toBe(NOW);
        expect(findGroupByName(ctx.tracksGroups, 'Folder').files[0].updatetimems).toBe(NOW);
    });

    test('the folder date follows the file that was saved', async () => {
        const ctx = ctxWithGroups();

        await refreshGlobalFiles({ ctx, currentFileName: 'Folder/Nested/Track.gpx' });

        const nested = findGroupByName(ctx.tracksGroups, 'Folder/Nested');
        expect(nested.lastModifiedMs).toBe(NOW);
        expect(nested.lastModifiedDate).toBe(NOW);
        expect(findGroupByName(ctx.tracksGroups, 'Folder').lastModifiedMs).toBe(NOW);
    });

    test('other files keep their save time', async () => {
        const ctx = ctxWithGroups();
        ctx.listFiles.uniqueFiles.push(file('Folder/Nested/Other.gpx'));
        findGroupByName(ctx.tracksGroups, 'Folder/Nested').groupFiles.push(file('Folder/Nested/Other.gpx'));

        await refreshGlobalFiles({ ctx, currentFileName: 'Folder/Nested/Track.gpx' });

        const nested = findGroupByName(ctx.tracksGroups, 'Folder/Nested');
        expect(nested.groupFiles.find((f) => f.name === 'Folder/Nested/Other.gpx').updatetimems).toBe(1000);
    });
});

describe('refreshGlobalFiles: rename', () => {
    beforeEach(() => {
        serverFiles([file('Folder/New.gpx')]);
    });

    test('the renamed track is no longer shown on the map under the old name', async () => {
        const ctx = createCtx();
        ctx.gpxFiles = { 'Folder/Old.gpx': { name: 'Folder/Old.gpx', url: null, type: 'GPX' } };

        await refreshGlobalFiles({ ctx, oldName: 'Folder/Old.gpx', currentFileName: 'Folder/New.gpx' });

        expect(ctx.gpxFiles['Folder/Old.gpx'].url).toBeNull();
        expect(ctx.gpxFiles['Folder/New.gpx']).toBeDefined();
    });

    test('the visible tracks keep the track under its new name', async () => {
        localStorage.setItem(TRACK_VISIBLE_FLAG, JSON.stringify({ new: ['Folder/Old.gpx'], old: [], open: [] }));
        const ctx = createCtx();

        await refreshGlobalFiles({ ctx, oldName: 'Folder/Old.gpx', currentFileName: 'Folder/New.gpx' });

        expect(JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG)).new).toEqual(['Folder/New.gpx']);
    });
});
