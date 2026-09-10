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
        // useMutator: the callback gets a shallow copy of the previous state and mutates it
        mutateGpxFiles: jest.fn((update) => {
            const next = { ...ctx.gpxFiles };
            update(next);
            ctx.gpxFiles = next;
        }),
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

/** Point of the track editor `i` hundredths of a degree north of 50, optionally with the geometry leading to it. */
export function createEditorPoint(i, { profile = 'car', geometry } = {}) {
    return { lat: 50 + i / 100, lng: 30, profile, ...(geometry && { geometry }) };
}

/** Routed track of the editor: every point but the first carries the geometry of the segment leading to it. */
export function createRoutedPoints(n) {
    return Array.from({ length: n }, (_, i) =>
        createEditorPoint(i, { geometry: i === 0 ? [] : [createEditorPoint(i - 1), createEditorPoint(i)] })
    );
}

/**
 * ctx of the track editor: a local track open on the map, the routing cache and a router that answers
 * with a straight line. `geoRouter` is what the layers pass around separately from ctx.
 */
export function createEditorCtx({ points = [] } = {}) {
    const track = { name: 'Local', points, layers: { addLayer: jest.fn(), getLayers: () => [] } };
    const ctx = createCtx({ track, cloud: false });
    ctx.createTrack = { enable: false };
    ctx.trackState = {};
    ctx.routingCache = {};
    ctx.mutateRoutingCache = (update) => update(ctx.routingCache);
    ctx.trackRouter = {
        getGeoProfile: (point) => ({ profile: point.profile, cacheKey: `key-${point.profile}` }),
        getColor: () => '#0000ff',
        updateRouteBetweenPoints: jest.fn(async (ctx, start, end) => ({ points: [start, end] })),
    };
    ctx.setTrackState = jest.fn();
    ctx.setProcessRouting = jest.fn();
    ctx.setUpdateInfoBlock = jest.fn();
    ctx.setLoadingContextMenu = jest.fn();
    ctx.setUnverifiedGpxFile = jest.fn();

    return ctx;
}
