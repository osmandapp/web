import { downloadObfCollection, downloadOsfBackup } from '@map/manager/track/TracksManager';
import { apiPost } from '@map/util/HttpApi';
import { findRequest } from '../../util/requests';
import { createCtx } from '../../util/fixtures/tracks';

const SERVER_FILE = new Blob(['file from the server']);

let click;

beforeEach(() => {
    URL.createObjectURL = jest.fn(() => 'blob:saved');
    click = jest.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
});

/** The file the app hands to the browser: the server blob behind the link and the name it is saved under. */
function savedFile() {
    return { blob: URL.createObjectURL.mock.calls[0]?.[0], name: click.mock.contexts[0]?.download };
}

test('the OBF collection of a folder is built from its tracks and saved as OsmAndCollection.travel.obf', async () => {
    apiPost.mockResolvedValue({ data: SERVER_FILE });

    await downloadObfCollection({
        names: ['Folder/A.gpx', 'Folder/B.gpx'],
        fileName: 'OsmAndCollection.travel.obf',
        displayName: 'Folder',
        ctx: createCtx(),
        setProcessDownload: jest.fn(),
    });

    // MapApiController.downloadObf reads the track names from the request body
    const { body, options } = findRequest(apiPost, '/mapapi/download-obf');
    expect(body).toEqual(['Folder/A.gpx', 'Folder/B.gpx']);
    expect(options).toEqual({ params: undefined, responseType: 'blob', throwErrors: true });
    const { blob, name } = savedFile();
    expect(blob).toBe(SERVER_FILE);
    expect(name).toBe('OsmAndCollection.travel.obf');
});

test('the OSF backup of a folder is requested by its full path and saved under the name from the server', async () => {
    // UserdataService.getBackupFolder: "attachment; filename=" + "Export_" + date + format
    apiPost.mockResolvedValue({
        data: SERVER_FILE,
        headers: { 'content-disposition': 'attachment; filename=Export_28-10-26.osf' },
    });

    await downloadOsfBackup({
        params: { folderName: 'Folder/Sub', smart: false },
        displayName: 'Sub',
        ctx: createCtx(),
        setProcessDownload: jest.fn(),
    });

    // MapApiController.createBackupFolder requires format and type, the folder comes as folderName
    const { body, options } = findRequest(apiPost, '/mapapi/download-backup-folder');
    expect(body).toEqual([]);
    expect(options).toEqual({
        params: { format: '.osf', type: 'GPX', folderName: 'Folder/Sub', smart: false },
        responseType: 'blob',
        throwErrors: true,
    });
    const { blob, name } = savedFile();
    expect(blob).toBe(SERVER_FILE);
    expect(name).toBe('Export_28-10-26.osf');
});
