import { createTrackFreeName, removeFileExtension } from '@map/manager/track/SaveTrackManager';
import { getFileName, isTrackExists, prepareName, validName } from '@map/manager/track/TracksManager';

// groups as createTrackGroups builds them: fullName is the path, groupFiles are the cloud names
const GROUPS = [
    {
        name: 'Folder',
        fullName: 'Folder',
        groupFiles: [{ name: 'Folder/Track.gpx' }, { name: 'Folder/Second.gpx' }],
        subfolders: [
            {
                name: 'Nested',
                fullName: 'Folder/Nested',
                groupFiles: [{ name: 'Folder/Nested/Deep.gpx' }],
                subfolders: [],
            },
        ],
    },
];

describe('prepareName', () => {
    test('the extension is dropped', () => {
        expect(prepareName('Track.gpx')).toBe('Track');
    });

    test('a name without an extension is kept', () => {
        expect(prepareName('Track')).toBe('Track');
    });

    test('only the last part of the path is left', () => {
        expect(prepareName('Folder/Track.gpx')).toBe('Track');
        expect(prepareName('Folder/Nested/Track.gpx')).toBe('Track');
    });

    test('gpx inside the name is not an extension', () => {
        expect(prepareName('my gpx track.gpx')).toBe('my gpx track');
        expect(prepareName('Trackgpx')).toBe('Trackgpx');
        expect(prepareName('gpx-tour.gpx')).toBe('gpx-tour');
        expect(prepareName('Folder/gpx notes.gpx')).toBe('gpx notes');
    });

    test('a local track is split by the colon, a cloud one is not', () => {
        expect(prepareName('Folder:Track', true)).toBe('Track');
        expect(prepareName('Folder:Track')).toBe('Folder:Track');
    });

    test('a non-string is an empty name', () => {
        expect(prepareName(null)).toBe('');
        expect(prepareName(undefined)).toBe('');
        expect(prepareName(42)).toBe('');
    });

    test('an empty name is generated from the date', () => {
        expect(prepareName('')).toBe(new Date().toDateString());
        expect(prepareName('.gpx')).toBe(new Date().toDateString());
    });
});

describe('getFileName', () => {
    test('the cloud name of a file', () => {
        expect(getFileName({ name: 'Folder/Track.gpx' })).toBe('Track');
    });

    test('a local file is split by the colon', () => {
        expect(getFileName({ name: 'Folder:Track', local: true })).toBe('Track');
    });

    test('no name - no file name', () => {
        expect(getFileName({})).toBe('');
        expect(getFileName(null)).toBe('');
    });
});

describe('validName', () => {
    test('anything but spaces', () => {
        expect(validName('Track')).toBe(true);
        expect(validName(' Track ')).toBe(true);
    });

    test('empty or spaces only', () => {
        expect(validName('')).toBe(false);
        expect(validName('   ')).toBe(false);
    });
});

describe('isTrackExists', () => {
    test('a track of the folder', () => {
        expect(isTrackExists('Track', null, 'Folder', GROUPS)).toBe(true);
        expect(isTrackExists('Second', null, 'Folder', GROUPS)).toBe(true);
    });

    test('a track of another folder does not count', () => {
        expect(isTrackExists('Deep', null, 'Folder', GROUPS)).toBe(false);
        expect(isTrackExists('Track', null, 'Folder/Nested', GROUPS)).toBe(false);
    });

    test('a nested folder is found by its full path', () => {
        expect(isTrackExists('Deep', null, 'Folder/Nested', GROUPS)).toBe(true);
    });

    test('the folder can come as an object with a title', () => {
        expect(isTrackExists('Track', { title: 'Folder' }, null, GROUPS)).toBe(true);
    });

    test('an unknown folder or no groups at all', () => {
        expect(isTrackExists('Track', null, 'Missing', GROUPS)).toBe(false);
        expect(isTrackExists('Track', null, 'Folder', null)).toBe(false);
    });
});

describe('removeFileExtension', () => {
    test('the last extension is removed', () => {
        expect(removeFileExtension('Track.gpx')).toBe('Track');
        expect(removeFileExtension('Track.2025.gpx')).toBe('Track.2025');
    });

    test('a name without a dot is kept', () => {
        expect(removeFileExtension('Track')).toBe('Track');
    });

    test('the path is kept', () => {
        expect(removeFileExtension('Folder/Track.gpx')).toBe('Folder/Track');
    });
});

describe('createTrackFreeName', () => {
    test('a free local name is returned as is', () => {
        expect(createTrackFreeName('Track', [{ name: 'Other' }])).toBe('Track');
    });

    test('an occupied local name gets a number', () => {
        expect(createTrackFreeName('Track', [{ name: 'Track' }])).toBe('Track - 1');
        expect(createTrackFreeName('Track', [{ name: 'Track' }, { name: 'Track - 1' }])).toBe('Track - 2');
    });

    test('names taken in the same batch are skipped as well', () => {
        expect(createTrackFreeName('Track', [], null, null, new Set(['Track', 'Track - 1']))).toBe('Track - 2');
    });

    test('in a cloud folder the check goes through the groups', () => {
        expect(createTrackFreeName('Track', GROUPS, null, 'Folder')).toBe('Track - 1');
        expect(createTrackFreeName('Track', GROUPS, null, 'Folder/Nested')).toBe('Track');
    });

    test('no tracks to compare with', () => {
        expect(createTrackFreeName('Track', null)).toBe('Track');
    });
});
