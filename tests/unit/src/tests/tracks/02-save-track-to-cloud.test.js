import { saveTrackToCloud } from '@map/manager/track/SaveTrackManager';
import { DEFAULT_GROUP_NAME } from '@map/manager/track/TracksManager';
import { apiPost } from '@map/util/HttpApi';
import { readUploadedInfo } from '../../util/infoFile';
import { findRequest } from '../../util/requests';
import { CLOUD_FOLDER, CLOUD_TRACK_NAME, WPT_GROUP, createCtx, createTrack } from '../../util/fixtures/tracks';

const UPDATE_TIME = 1800000000000;
const GPX_DATA = '<gpx></gpx>';

// a track just created on the web has a bare name - prepareName() strips both the folder and the extension
const NEW_TRACK_NAME = 'Track';

beforeEach(() => {
    apiPost.mockImplementation(async (url) => {
        if (url.endsWith('/gpx/save-track-data')) {
            return { data: GPX_DATA };
        }
        if (url.endsWith('/mapapi/upload-file')) {
            return { data: { status: 'ok' } };
        }
        if (url.endsWith('/mapapi/update-info')) {
            return { data: { updatetime: UPDATE_TIME } };
        }

        return null;
    });
});

function saveToCloud(ctx, currentFolder = CLOUD_FOLDER) {
    return saveTrackToCloud({
        ctx,
        ltx: { loginUser: 'osmand@grr.la' },
        currentFolder,
        fileName: NEW_TRACK_NAME,
        type: 'GPX',
        open: false,
    });
}

test('save to cloud: gpx and .info are uploaded under the same cloud name', async () => {
    // the gpx is already listed, so the list is not refreshed after the upload
    const ctx = createCtx({ track: createTrack({ name: NEW_TRACK_NAME }), uniqueFiles: [{ name: CLOUD_TRACK_NAME }] });

    await expect(saveToCloud(ctx)).resolves.toBe(true);

    const upload = findRequest(apiPost, '/mapapi/upload-file');
    expect(upload.options.params).toEqual({ type: 'GPX', name: CLOUD_TRACK_NAME });

    const { params, info } = await readUploadedInfo(apiPost);
    expect(params).toEqual({ name: CLOUD_TRACK_NAME + '.info' });
    expect(info).toEqual({
        type: 'GPX',
        file: '/tracks/' + CLOUD_TRACK_NAME,
        subtype: 'gpx',
        pointsGroups: { [WPT_GROUP]: { color: '#ff0000', hidden: false } },
    });
});

test('save to cloud: track saved to the root has no folder in .info', async () => {
    const ctx = createCtx({ track: createTrack({ name: NEW_TRACK_NAME }), uniqueFiles: [{ name: 'Track.gpx' }] });

    await saveToCloud(ctx, DEFAULT_GROUP_NAME);

    const upload = findRequest(apiPost, '/mapapi/upload-file');
    expect(upload.options.params.name).toBe('Track.gpx');

    const { info } = await readUploadedInfo(apiPost);
    expect(info.file).toBe('/tracks/Track.gpx');
});
