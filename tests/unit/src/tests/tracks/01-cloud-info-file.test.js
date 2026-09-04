import { syncCloudTrackInfo, updateGroupsVisibility } from '@map/manager/track/TrackAppearanceManager';
import { apiPost } from '@map/util/HttpApi';
import { readUploadedInfo } from '../../util/infoFile';
import { CLOUD_TRACK_NAME, WPT_GROUP, createCtx, createInfoFile, createTrack } from '../../util/fixtures/tracks';

const UPDATE_TIME = 1800000000000;
const PREV_UPDATE_TIME = 1700000000000;

// a track just created on the web has a bare name - prepareName() strips both the folder and the extension
const NEW_TRACK_NAME = 'Track';

beforeEach(() => {
    apiPost.mockResolvedValue({ data: { updatetime: UPDATE_TIME } });
});

test('new track in a folder: full .info structure', async () => {
    const ctx = createCtx({ track: createTrack({ name: NEW_TRACK_NAME }) });

    await syncCloudTrackInfo(ctx, CLOUD_TRACK_NAME);

    const { url, params, info } = await readUploadedInfo(apiPost);
    expect(url).toMatch(/\/mapapi\/update-info$/);
    expect(params).toEqual({ name: 'Folder/Track.gpx.info' });
    expect(info).toEqual({
        type: 'GPX',
        file: '/tracks/Folder/Track.gpx',
        subtype: 'gpx',
        // points and ext are stripped, the rest of the group survives
        pointsGroups: { [WPT_GROUP]: { color: '#ff0000', hidden: false } },
    });
});

test('new track in the root: .info keeps the extension', async () => {
    const ctx = createCtx({ track: createTrack({ name: NEW_TRACK_NAME }) });

    await syncCloudTrackInfo(ctx, 'Track.gpx');

    const { params, info } = await readUploadedInfo(apiPost);
    expect(params).toEqual({ name: 'Track.gpx.info' });
    expect(info.file).toBe('/tracks/Track.gpx');
});

test('new .info is registered in listFiles', async () => {
    const ctx = createCtx({ track: createTrack({ name: NEW_TRACK_NAME }) });

    await syncCloudTrackInfo(ctx, CLOUD_TRACK_NAME);

    expect(ctx.listFiles.uniqueFiles).toEqual([
        expect.objectContaining({ name: 'Folder/Track.gpx.info', updatetimems: UPDATE_TIME }),
    ]);
});

test('existing .info: updatetime is sent and previous fields are kept', async () => {
    const track = createTrack({
        name: NEW_TRACK_NAME,
        info: { type: 'GPX', file: '/tracks/Folder/Track.gpx', subtype: 'gpx', color: 'blue' },
    });
    track.infoChanged = true;
    const infoFile = createInfoFile({ updatetimems: PREV_UPDATE_TIME });
    const ctx = createCtx({ track, uniqueFiles: [infoFile] });

    await syncCloudTrackInfo(ctx, CLOUD_TRACK_NAME);

    const { params, info } = await readUploadedInfo(apiPost);
    expect(params).toEqual({ name: 'Folder/Track.gpx.info', updatetime: PREV_UPDATE_TIME });
    expect(info.color).toBe('blue');
    expect(info.file).toBe('/tracks/Folder/Track.gpx');
    expect(infoFile.updatetimems).toBe(UPDATE_TIME);
});

test('nothing changed: .info is not uploaded again', async () => {
    const ctx = createCtx({ track: createTrack({ name: NEW_TRACK_NAME }), uniqueFiles: [createInfoFile()] });

    await syncCloudTrackInfo(ctx, CLOUD_TRACK_NAME);

    expect(apiPost).not.toHaveBeenCalled();
});

test('track without waypoints: no .info is created', async () => {
    const ctx = createCtx({ track: createTrack({ name: NEW_TRACK_NAME, pointsGroups: {} }) });

    await syncCloudTrackInfo(ctx, CLOUD_TRACK_NAME);

    expect(apiPost).not.toHaveBeenCalled();
});

test('local track: group hidden before the upload keeps the cloud path', async () => {
    const ctx = createCtx({ track: createTrack({ name: NEW_TRACK_NAME }), cloud: false });

    updateGroupsVisibility(ctx, [WPT_GROUP], true, { current: null });
    await syncCloudTrackInfo(ctx, CLOUD_TRACK_NAME);

    const { info } = await readUploadedInfo(apiPost);
    expect(info.file).toBe('/tracks/Folder/Track.gpx');
    expect(info.pointsGroups[WPT_GROUP].hidden).toBe(true);
});
