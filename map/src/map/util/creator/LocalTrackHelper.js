import TracksManager from '../../../manager/track/TracksManager';
import TrackLayerProvider, { WPT_SIMPLIFY_THRESHOLD } from '../TrackLayerProvider';
import { createFirstLayers } from './LocalTrackLayerHelper';

export function trackWasChanged(localTracks, track) {
    return localTracks.find((t) => t.name === track.name)?.updated;
}

export function isNewTrack(localTracks, track) {
    return !localTracks.find((t) => t.name === track.name);
}

export function initNewSelectedTrack({ ctx, map, geoRouter, selectedGpxFile, setRegisteredLayers }) {
    let newPoint;
    if (ctx.createTrack.latlng) {
        newPoint = createNewPoint({ ctx, geoProfile: geoRouter.getProfile() });
    }

    const track = {
        name: TracksManager.createName(ctx),
        tracks: TracksManager.createGpxTracks(),
        pointsGroups: {},
        points: newPoint ? [newPoint] : [],
        newPoint: newPoint ?? null,
        layers: newPoint
            ? createFirstLayers({ map, ctx, track: selectedGpxFile, newPoint, setRegisteredLayers })
            : null,
        updateLayers: !!newPoint,
        addPoint: !!newPoint,
    };

    if (newPoint) {
        createLocalTrack({ ctx, map, file: track });
        ctx.setUpdateInfoBlock(true);
        TracksManager.updateState(ctx);
    }

    ctx.setSelectedGpxFile({ ...track });
}

export function createNewPoint({ ctx, e, geoProfile }) {
    return {
        lat: e ? e.latlng.lat : ctx.createTrack.latlng.lat,
        lng: e ? e.latlng.lng : ctx.createTrack.latlng.lng,
        ele: TracksManager.NAN_MARKER,
        profile: geoProfile.profile,
        geoProfile: geoProfile,
        geometry: [],
    };
}

export function createLocalTrack({ ctx, map, file, points = [], wpts = [] }) {
    ctx.setLocalTracks((prev) => {
        const tracks = [...prev];
        TracksManager.prepareTrack(file);
        const trackPoints = points ?? file.points;
        const trackWpts = wpts ?? file.wpts;
        file.tracks = [{ trackPoints, trackWpts }];
        file.layers = TrackLayerProvider.createLayersByTrackData({
            data: file,
            ctx,
            map,
            simplifyWpts: file?.wpts?.length >= WPT_SIMPLIFY_THRESHOLD,
        });
        tracks.push(file);
        return tracks;
    });
}
