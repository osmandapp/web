import { OBJECT_TYPE_CLOUD_TRACK, OBJECT_TYPE_LOCAL_TRACK } from '@map/context/AppContext';

export const CLOUD_FOLDER = 'Folder';
export const CLOUD_TRACK_NAME = 'Folder/Track.gpx';
export const WPT_GROUP = 'My group';

/** Waypoint group as it comes from a parsed gpx - `points` and `ext` must not reach the .info file. */
export function createPointsGroups({ hidden = false } = {}) {
    return {
        [WPT_GROUP]: {
            points: [{ lat: 50.45, lng: 30.52, name: 'wpt' }],
            ext: { color: '#ff0000' },
            color: '#ff0000',
            hidden,
        },
    };
}

export function createTrack({ name, pointsGroups = createPointsGroups(), info = undefined } = {}) {
    return { name, pointsGroups, info };
}

export function createCtx({ track, cloud = true, uniqueFiles = [] } = {}) {
    // the app calls the setters both with a value and with an updater, as react does
    const setter = (key) => jest.fn((update) => (ctx[key] = typeof update === 'function' ? update(ctx[key]) : update));
    const ctx = {
        currentObjectType: cloud ? OBJECT_TYPE_CLOUD_TRACK : OBJECT_TYPE_LOCAL_TRACK,
        selectedGpxFile: track,
        localTracks: cloud ? [] : [track],
        createTrack: null,
        listFiles: { uniqueFiles },
        gpxFiles: {},
        tracksGroups: [],
        mutateGpxFiles: jest.fn(),
        setTracksGroups: setter('tracksGroups'),
        setCreateTrack: jest.fn(),
        setListFiles: setter('listFiles'),
        setGpxFiles: setter('gpxFiles'),
        setUpdateFiles: jest.fn(),
        setSelectedSort: jest.fn(),
        setSmartFoldersCache: jest.fn(),
        setShareWithMeFiles: jest.fn(),
        setVisibleTracks: jest.fn(),
        setCurrentObjectType: jest.fn(),
        openGroups: [],
        setOpenGroups: jest.fn(),
        setSelectedGpxFile: setter('selectedGpxFile'),
        setTrackErrorMsg: jest.fn(),
    };

    return ctx;
}

/** Entry of ctx.listFiles for an already uploaded .info file. */
export function createInfoFile({ name = CLOUD_TRACK_NAME, updatetimems = 1700000000000, data = {} } = {}) {
    return { name: name + '.info', updatetimems, details: { data } };
}
