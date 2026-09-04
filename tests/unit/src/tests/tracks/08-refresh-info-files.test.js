import { applyRefreshedInfoFilesToGpx, getFilesForUpdateDetails } from '@map/util/hooks/useInitialFilesLoad';
import { EMPTY_FILE_NAME } from '@map/manager/track/TracksManager';

function gpxFile(name, details) {
    return { name, type: 'GPX', details };
}

/** Row of the refresh-list-files response: the .info file with its parsed content. */
function infoRow(gpxName, data) {
    return { name: gpxName + '.info', details: data === undefined ? {} : { data } };
}

describe('getFilesForUpdateDetails', () => {
    test('only files whose details are outdated are taken', () => {
        const setUpdateFiles = jest.fn();
        const files = [
            gpxFile('Folder/Track.gpx', { update: true, updatetime: 100 }),
            gpxFile('Folder/Fresh.gpx', { update: false }),
            gpxFile('Folder/NoDetails.gpx', undefined),
        ];

        expect(getFilesForUpdateDetails(files, setUpdateFiles)).toBe(true);
        expect(setUpdateFiles).toHaveBeenCalledWith([
            { name: 'Folder/Track.gpx', type: 'GPX', isError: false, time: 100 },
        ]);
    });

    test('info files are updated together with the tracks', () => {
        const setUpdateFiles = jest.fn();
        const files = [gpxFile('Folder/Track.gpx.info', { update: true, updatetime: 100 })];

        getFilesForUpdateDetails(files, setUpdateFiles);

        expect(setUpdateFiles.mock.calls[0][0].map((f) => f.name)).toEqual(['Folder/Track.gpx.info']);
    });

    test('folder placeholders are never updated', () => {
        const setUpdateFiles = jest.fn();
        const files = [gpxFile('Folder/' + EMPTY_FILE_NAME, { update: true })];

        expect(getFilesForUpdateDetails(files, setUpdateFiles)).toBe(false);
        expect(setUpdateFiles).not.toHaveBeenCalled();
    });

    test('files of other types are never updated', () => {
        const setUpdateFiles = jest.fn();
        const files = [{ name: 'favorites.gpx', type: 'FAVOURITES', details: { update: true } }];

        expect(getFilesForUpdateDetails(files, setUpdateFiles)).toBe(false);
        expect(setUpdateFiles).not.toHaveBeenCalled();
    });

    test('a file whose details failed to be read is marked as an error', () => {
        const setUpdateFiles = jest.fn();
        const files = [gpxFile('Track.gpx', { update: true, error: 'broken', updatetime: 100 })];

        getFilesForUpdateDetails(files, setUpdateFiles);

        expect(setUpdateFiles.mock.calls[0][0][0].isError).toBe(true);
    });
});

describe('applyRefreshedInfoFilesToGpx', () => {
    function apply(rows, { gpxFiles = {}, track = null } = {}) {
        const setGpxFiles = jest.fn();
        const setSelectedGpxFile = jest.fn();

        applyRefreshedInfoFilesToGpx(rows, setGpxFiles, setSelectedGpxFile);

        return {
            setGpxFiles,
            setSelectedGpxFile,
            files: setGpxFiles.mock.calls[0]?.[0](gpxFiles),
            selected: setSelectedGpxFile.mock.calls[0]?.[0](track),
        };
    }

    test('the refreshed info is merged into the loaded track', () => {
        const gpxFiles = { 'Folder/Track.gpx': { name: 'Folder/Track.gpx', info: { color: '#ff0000', width: '3' } } };

        const { files } = apply([infoRow('Folder/Track.gpx', { color: '#00ff00' })], { gpxFiles });

        expect(files['Folder/Track.gpx'].info).toEqual({ color: '#00ff00', width: '3' });
        expect(files['Folder/Track.gpx'].cloudRedrawWpts).toBe(true);
    });

    test('tracks without a refreshed info file are kept as they are', () => {
        const other = { name: 'Other.gpx', info: { color: '#ff0000' } };
        const gpxFiles = { 'Folder/Track.gpx': { name: 'Folder/Track.gpx' }, 'Other.gpx': other };

        const { files } = apply([infoRow('Folder/Track.gpx', { color: '#00ff00' })], { gpxFiles });

        expect(files['Other.gpx']).toBe(other);
    });

    test('the loaded tracks are not touched when nothing matches', () => {
        const gpxFiles = { 'Other.gpx': { name: 'Other.gpx' } };

        const { files } = apply([infoRow('Folder/Track.gpx', { color: '#00ff00' })], { gpxFiles });

        expect(files).toBe(gpxFiles);
    });

    test('an info file without content leaves the loaded track alone', () => {
        const gpxFiles = { 'Folder/Track.gpx': { name: 'Folder/Track.gpx', info: { color: '#ff0000' } } };

        const { files } = apply([infoRow('Folder/Track.gpx')], { gpxFiles });

        expect(files).toBe(gpxFiles);
    });

    test('a response without info files is ignored', () => {
        const { setGpxFiles, setSelectedGpxFile } = apply([{ name: 'Folder/Track.gpx', details: {} }]);

        expect(setGpxFiles).not.toHaveBeenCalled();
        expect(setSelectedGpxFile).not.toHaveBeenCalled();
    });

    test('the open track gets the refreshed info', () => {
        const track = { name: 'Folder/Track.gpx', info: { color: '#ff0000', width: '3' } };

        const { selected } = apply([infoRow('Folder/Track.gpx', { color: '#00ff00' })], { track });

        expect(selected.info).toEqual({ color: '#00ff00', width: '3' });
        expect(selected.cloudRedrawWpts).toBe(true);
    });

    test('unsaved appearance changes of the open track are kept', () => {
        const track = { name: 'Folder/Track.gpx', info: { color: '#ff0000' }, infoChanged: true };

        const { selected } = apply([infoRow('Folder/Track.gpx', { color: '#00ff00' })], { track });

        expect(selected).toBe(track);
    });

    test('an info file without content leaves the open track alone', () => {
        const track = { name: 'Folder/Track.gpx', info: { color: '#ff0000' } };

        const { selected } = apply([infoRow('Folder/Track.gpx')], { track });

        expect(selected).toBe(track);
    });
});
