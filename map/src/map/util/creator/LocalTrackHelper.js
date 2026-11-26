import TracksManager from '../../../manager/track/TracksManager';
import TrackLayerProvider, { WPT_SIMPLIFY_THRESHOLD } from '../TrackLayerProvider';
import { createFirstLayers } from './LocalTrackLayerHelper';
import cloneDeep from 'lodash-es/cloneDeep';
import isEmpty from 'lodash-es/isEmpty';
import { createPointId } from '../../../manager/track/TrackOperations';

export const ADDED_POINT = {
    FIRST: 'first',
    LINE: 'line',
    ROUTED: 'routed',
    ASK_ROUTING: 'ask-routing',
};

export function isNewTrack(localTracks, track) {
    return !localTracks.find((t) => t?.name === track?.name);
}

export function initNewSelectedTrack({ ctx, map, geoRouter, setRegisteredLayers }) {
    let newPoint;
    if (ctx.createTrack.latlng) {
        newPoint = createNewPoint({ ctx, geoProfile: geoRouter.getShortGeoProfile() });
    }

    const track = {
        name: TracksManager.createName(ctx),
        pointsGroups: {},
        points: newPoint ? [newPoint] : [],
        newPoint: newPoint ?? null,
        layers: newPoint ? createFirstLayers({ map, ctx, newPoint, setRegisteredLayers }) : null,
        updateLayers: !!newPoint,
        addPoint: !!newPoint,
        routeTypes: [],
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
        id: createPointId(),
        lat: e ? e.latlng.lat : ctx.createTrack.latlng.lat,
        lng: e ? e.latlng.lng : ctx.createTrack.latlng.lng,
        ele: TracksManager.NAN_MARKER,
        profile: geoProfile.profile,
        geoProfile: geoProfile,
        geometry: [],
    };
}

export function isAddPointByClick(ctx) {
    return ctx.createTrack?.enable && isEmpty(ctx.pointContextMenu) && !ctx.openContextMenu;
}

export function addPointToTrack(track, newPoint) {
    if (!isNewPoint(track, newPoint)) {
        return null;
    }
    if (newPoint.profile !== TracksManager.PROFILE_LINE && trackWithoutRouting(track.points)) {
        return ADDED_POINT.ASK_ROUTING;
    }
    if (track.points.length === 0) {
        track.points = [newPoint];
        return ADDED_POINT.FIRST;
    }
    const last = track.points.length - 1;
    const prevPoint = { ...track.points[last], profile: newPoint.profile, geoProfile: newPoint.geoProfile };
    track.points = [...track.points.slice(0, last), prevPoint, newPoint];
    if (newPoint.profile === TracksManager.PROFILE_LINE && !trackHasRouting(track)) {
        const linePoint = { ...newPoint };
        delete linePoint.geometry;
        if (prevPoint.geometry?.length === 0) {
            delete prevPoint.geometry;
        }
        track.points[last + 1] = linePoint;

        return ADDED_POINT.LINE;
    }
    track.hasGeo = true;

    return ADDED_POINT.ROUTED;
}

export function addRoutedSegment({ points, newPoint, geoRouter }) {
    const lastPoint = {
        ...points[points.length - 1],
        geometry: deleteInfo(cloneDeep(points)),
        profile: newPoint.profile,
        geoProfile: newPoint.geoProfile,
    };
    const firstPoint = {
        ...points[0],
        geometry: [],
        profile: TracksManager.PROFILE_LINE,
        geoProfile: geoRouter.getShortGeoProfile({ profile: TracksManager.PROFILE_LINE }),
    };

    return [firstPoint, lastPoint, newPoint];
}

export function getLastSegmentGeoProfile(points, geoRouter) {
    if (points?.length > 1) {
        const beforeLast = points[points.length - 2];
        if (beforeLast?.geoProfile) {
            return geoRouter.getGeoProfile(beforeLast.geoProfile);
        }
    }

    return null;
}

export function createLocalTrack({ ctx, map, file }) {
    ctx.setLocalTracks((prev) => {
        const tracks = [...prev];
        TracksManager.prepareTrack(file);
        if (!file?.name || typeof file.name !== 'string' || file.name.trim() === '') {
            ctx.setRoutingErrorMsg('Cannot save nameless local track.');
            return prev;
        }
        file.layers = TrackLayerProvider.createLayersByTrackData({
            data: file,
            ctx,
            map,
            simplifyWpts: file?.wpts?.length >= WPT_SIMPLIFY_THRESHOLD,
        });
        tracks.push(file);
        ctx.setSelectedLocalTrackObj(file);
        return tracks;
    });
}

function isNewPoint(track, newPoint) {
    return !track.points.find((p) => TracksManager.isEqualPoints(p, newPoint));
}

function trackWithoutRouting(points) {
    const prevProfilePoint = points.length - 2 > 0 ? points[points.length - 2] : null;
    const prevProfile = prevProfilePoint?.profile;

    return (
        prevProfilePoint && (!prevProfile || (prevProfile === TracksManager.PROFILE_LINE && !prevProfilePoint.geometry))
    );
}

function trackHasRouting(track) {
    // hasGeo set before?
    if (track.hasGeo) {
        return true;
    }
    // just-created is routable
    if (track.points.length <= 2) {
        return true;
    }
    // finally, assume Line-only as non-routable
    const pointWithRouting = track.points.find(
        (p) => p.profile !== undefined && p.profile !== TracksManager.PROFILE_LINE
    );

    return !!pointWithRouting;
}

function deleteInfo(points) {
    points.forEach((p) => {
        delete p.id;
        delete p.profile;
        delete p.geometry;
    });

    return points;
}
