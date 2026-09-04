// AppContext pulls in the whole app - unit tests only need the track-type helpers
const OBJECT_TYPE_LOCAL_TRACK = 'local_track';
const OBJECT_TYPE_CLOUD_TRACK = 'cloud_track';

module.exports = {
    __esModule: true,
    default: {},
    OBJECT_TYPE_LOCAL_TRACK,
    OBJECT_TYPE_CLOUD_TRACK,
    isLocalTrack: (ctx) => ctx.currentObjectType === OBJECT_TYPE_LOCAL_TRACK,
    isCloudTrack: (ctx) => ctx.currentObjectType === OBJECT_TYPE_CLOUD_TRACK,
};
