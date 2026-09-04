import { EMPTY_FILE_NAME, createTrackGroups, findGroupByName } from '@map/manager/track/TracksManager';

// sorting is not the subject here: without ctx.selectedSort doSort returns the groups as they are
const CTX = { tracksGroups: [] };

function file(name, updatetimems = 1000) {
    return { name, updatetimems, updatetime: new Date(updatetimems).toISOString() };
}

function build(files) {
    return createTrackGroups({ files, ctx: CTX });
}

describe('createTrackGroups', () => {
    test('files without a folder go to the default group', () => {
        const groups = build([file('Track.gpx'), file('Second.gpx')]);

        expect(groups).toHaveLength(1);
        expect(groups[0].name).toBe('');
        expect(groups[0].files.map((f) => f.name)).toEqual(['Track.gpx', 'Second.gpx']);
        expect(groups[0].realSize).toBe(2);
    });

    test('a folder becomes a group with its full path', () => {
        const groups = build([file('Folder/Track.gpx')]);

        expect(groups).toHaveLength(1);
        expect(groups[0].name).toBe('Folder');
        expect(groups[0].fullName).toBe('Folder');
        expect(groups[0].groupFiles.map((f) => f.name)).toEqual(['Folder/Track.gpx']);
        expect(groups[0].subfolders).toEqual([]);
    });

    test('nested folders become subfolders', () => {
        const groups = build([file('Folder/Nested/Deep.gpx')]);

        const folder = groups[0];
        expect(folder.fullName).toBe('Folder');
        expect(folder.subfolders).toHaveLength(1);
        expect(folder.subfolders[0].fullName).toBe('Folder/Nested');
    });

    test('a file of a subfolder is not counted twice in the parent', () => {
        const groups = build([file('Folder/Own.gpx'), file('Folder/Nested/Deep.gpx')]);

        const folder = groups[0];
        // groupFiles are the files of the folder itself, files are everything below it
        expect(folder.groupFiles.map((f) => f.name)).toEqual(['Folder/Own.gpx']);
        expect(folder.files.map((f) => f.name).sort()).toEqual(['Folder/Nested/Deep.gpx', 'Folder/Own.gpx']);
        expect(folder.realSize).toBe(2);
        expect(folder.subfolders[0].realSize).toBe(1);
    });

    test('a file of a nested folder is listed once in every group above it', () => {
        const groups = build([file('Root.gpx'), file('Folder/Nested/Deep.gpx')]);

        expect(findGroupByName(groups, 'Folder').files.map((f) => f.name)).toEqual(['Folder/Nested/Deep.gpx']);
        expect(findGroupByName(groups, '').files.map((f) => f.name)).toEqual(['Root.gpx', 'Folder/Nested/Deep.gpx']);
    });

    test('folders and loose files live together', () => {
        const groups = build([file('Track.gpx'), file('Folder/Inside.gpx')]);

        const names = groups.map((g) => g.fullName);
        expect(names).toContain('Folder');
        expect(names).toContain('');
        const defaultGroup = groups.find((g) => g.fullName === '');
        // the default group adopts the folders, so its files hold everything
        expect(defaultGroup.groupFiles.map((f) => f.name)).toEqual(['Track.gpx']);
        expect(defaultGroup.subfolders.map((g) => g.fullName)).toEqual(['Folder']);
        expect(defaultGroup.files.map((f) => f.name).sort()).toEqual(['Folder/Inside.gpx', 'Track.gpx']);
    });

    test('the last modified time is the newest file below the folder', () => {
        const groups = build([file('Folder/Old.gpx', 1000), file('Folder/Nested/New.gpx', 5000)]);

        const folder = groups[0];
        expect(folder.lastModifiedMs).toBe(5000);
        expect(folder.lastModifiedDate).toBe(new Date(5000).toISOString());
        expect(folder.subfolders[0].lastModifiedMs).toBe(5000);
    });

    test('an empty folder placeholder is not a track', () => {
        const placeholder = { name: 'Folder/' + EMPTY_FILE_NAME, filesize: 0, updatetimems: 1000 };
        const groups = build([placeholder, file('Folder/Track.gpx')]);

        expect(groups[0].groupFiles).toHaveLength(2);
        expect(groups[0].realSize).toBe(1);
    });

    test('no files at all is an empty list, not a missing one', () => {
        expect(build([])).toEqual([]);
    });
});

describe('findGroupByName', () => {
    const GROUPS = build([file('Folder/Track.gpx'), file('Folder/Nested/Deep.gpx'), file('Other/Track.gpx')]);

    test('a top level folder', () => {
        expect(findGroupByName(GROUPS, 'Folder').fullName).toBe('Folder');
        expect(findGroupByName(GROUPS, 'Other').fullName).toBe('Other');
    });

    test('a nested folder by its full path', () => {
        expect(findGroupByName(GROUPS, 'Folder/Nested').fullName).toBe('Folder/Nested');
    });

    test('the short name of a nested folder is not a path', () => {
        expect(findGroupByName(GROUPS, 'Nested')).toBeNull();
    });

    test('an unknown folder', () => {
        expect(findGroupByName(GROUPS, 'Missing')).toBeNull();
        expect(findGroupByName([], 'Folder')).toBeNull();
    });
});
