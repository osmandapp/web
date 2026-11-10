import TracksManager, { getAllPoints } from '../../manager/track/TracksManager';
import { getDistance } from '../../util/Utils';

export function trackProfile(track) {
    const parts = track.tracks ? track.tracks.map((t) => t.points) : [track.points];
    const profile = [];
    let distance = 0;
    parts
        .filter((points) => Array.isArray(points) && points.length > 0)
        .forEach((points) => {
            const flat = getAllPoints(points);
            flat.forEach((point, i) => {
                const prev = flat[i - 1];
                const startsSegment = !prev || prev.profile === TracksManager.PROFILE_GAP;
                if (!startsSegment) {
                    distance += getDistance(prev.lat, prev.lng, point.lat, point.lng);
                }
                profile.push(profilePoint(point, distance));
            });
        });

    return profile;
}

export function analyzerProfile(points) {
    return points.map((point) => profilePoint(point, point.distance ?? 0));
}

export function routeProfile(coordinates) {
    return trackProfile({ points: coordinates.map(([lng, lat, ele]) => ({ lat, lng, ele })) });
}

function profilePoint(point, distance) {
    return {
        distance,
        elevation: TracksManager.getEle(point, 'ele') ?? null,
        srtmElevation: TracksManager.getEle(point, 'srtmEle') ?? null,
        speed: speedOf(point),
        lat: point.lat,
        lng: point.lng ?? point.lon,
    };
}

function speedOf(point) {
    const speed = Number(point.speed || point.ext?.speed || point.ext?.extensions?.speed);

    return speed > 0 ? speed : null;
}
