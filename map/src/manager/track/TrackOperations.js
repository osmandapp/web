import cloneDeep from 'lodash-es/cloneDeep';
import { PROFILE_GAP, PROFILE_LINE } from '../../store/geoRouter/profileConstants';

let lastPointId = 0;

export function createPointId() {
    return ++lastPointId;
}

export function assignPointIds(points) {
    points.forEach((point) => {
        point.id = createPointId();
    });

    return points;
}

export function findPointIndex(points, id) {
    return id === undefined ? -1 : points.findIndex((point) => point.id === id);
}

export function isPointUnrouted({ point, pointIndex, prevPoint }) {
    return (
        !point.profile || // empty profile is Unrouted but PROFILE_LINE is Routed
        !point.geometry || // undefined geometry (null, undefined) is always Unrouted
        // empty geometry is Unrouted, but first point or previous PROFILE_GAP is Routed
        (pointIndex > 0 && point.geometry?.length === 0 && prevPoint.profile !== PROFILE_GAP)
    );
}

export function isWaitingForRouter(points, index) {
    return index > 0 && points[index]?.geometry?.length === 0 && !isGap(points[index - 1]);
}

export function isRecordedSegment({ startPoint, endPoint }) {
    return startPoint.profile === PROFILE_LINE && endPoint.geometry?.length > 2;
}

export function isProtectedSegment({ startPoint, endPoint }) {
    if (!startPoint || !endPoint) {
        console.error('isProtectedSegment got empty point');
        return true;
    }

    // gpx (just loaded)
    if (!endPoint.geometry && !startPoint.profile) {
        // console.debug('protect-gpx-plain');
        return true;
    }

    // gpx (after routing): protect Line-segments with more-than-line geometry
    if (isRecordedSegment({ startPoint, endPoint })) {
        // console.debug('protect-gpx-geometry');
        return true;
    }

    // gap-profile should be protected
    if (startPoint.profile === PROFILE_GAP) {
        // console.debug('protect-gap-profile');
        return true;
    }

    return false;
}

export function splitProtectedSegment({ newPoint, trackPoints, geometryIndex, endPointIndex }) {
    if (geometryIndex !== -1 && endPointIndex >= 1 && newPoint && trackPoints && trackPoints.length >= 2) {
        // newPoint should have previous geometry (up to geometryIndex) + newPoint at the end
        newPoint.geometry = trackPoints[endPointIndex].geometry.slice(0, geometryIndex + 1);
        newPoint.geometry.push({ lat: newPoint.lat, lng: newPoint.lng });
        if (newPoint.geometry.length <= 2) {
            // in case when new segment becomes Line "point-to-point"
            // duplicate newPoint geometry to keep the segment protected
            // dupe-geometry tested: GPX, Cloud, Android OsmAnd app, Garmin
            newPoint.geometry.push({ lat: newPoint.lat, lng: newPoint.lng });
        }

        // endPoint should have newPoint at the begin and the rest of previous geometry (next to geometryIndex)
        trackPoints[endPointIndex].geometry = trackPoints[endPointIndex].geometry.slice(geometryIndex + 1);
        trackPoints[endPointIndex].geometry.unshift({ lat: newPoint.lat, lng: newPoint.lng });
        if (trackPoints[endPointIndex].geometry.length <= 2) {
            // keep the segment protected (see comment for similar case before)
            trackPoints[endPointIndex].geometry.unshift({ lat: newPoint.lat, lng: newPoint.lng });
        }

        // duplicate profile string (from previous to endPoint)
        newPoint.profile = trackPoints[endPointIndex - 1].profile;

        // insert newPoint into trackPoints
        trackPoints.splice(endPointIndex, 0, newPoint);
    }
}

export function markGapEnd(geometry) {
    return geometry?.length > 0 ? [...geometry.slice(0, -1), { ...geometry.at(-1), profile: PROFILE_GAP }] : geometry;
}

function unmarkGapEnd(geometry) {
    return geometry.length > 0 ? [...geometry.slice(0, -1), { ...geometry.at(-1), profile: undefined }] : geometry;
}

export function deletePoint(points, index) {
    return removePoint(points, index, { passGap: true });
}

export function reorder(points, from, to) {
    if (from === to) {
        return points;
    }
    const removed = removePoint(points, from, { passGap: false });
    const prev = removed[to - 1];
    const next = removed[to];
    const routed = Boolean(next ? next.geometry : prev?.geometry);
    const moved = routed ? { ...points[from], geometry: [] } : points[from];
    const result = insertAt(removed, to, moved);
    if (routed && next) {
        result[to + 1] = { ...next, geometry: [] };
    }

    return result;
}

export function insertOnLine(points, index, { lat, lng }, geometryIndex) {
    const prev = points[index - 1];
    const end = points[index];
    const newPoint = { lat, lng, id: createPointId() };
    if (isPointUnrouted({ point: end, pointIndex: index, prevPoint: prev })) {
        return insertAt(points, index, newPoint);
    }
    if (isProtectedSegment({ startPoint: prev, endPoint: end })) {
        const result = [...points];
        result[index] = { ...end };
        splitProtectedSegment({ newPoint, trackPoints: result, geometryIndex, endPointIndex: index });

        return result;
    }
    const routedPoint = {
        ...cloneDeep(end),
        ...newPoint,
        geometry: [],
        profile: prev.profile,
        geoProfile: { ...prev.geoProfile },
    };
    const result = insertAt(points, index, routedPoint);
    result[index + 1] = { ...end, geometry: [] };

    return result;
}

export function movePoint(points, index, { lat, lng }) {
    const result = [...points];
    const prev = points[index - 1];
    const next = points[index + 1];
    const point = { ...points[index], lat, lng };
    if (isPointUnrouted({ point, pointIndex: index, prevPoint: prev })) {
        delete point.ele;
        result[index] = point;

        return result;
    }
    if (prev && !isGap(prev) && prev.geometry) {
        point.geometry = prev.profile === PROFILE_LINE ? replaceLast(point.geometry, { lat, lng }) : [];
    }
    result[index] = point;
    if (next && !isGap(point) && next.geometry) {
        const geometry = point.profile === PROFILE_LINE ? [{ lat, lng }, ...next.geometry.slice(1)] : [];
        result[index + 1] = { ...next, geometry };
    }

    return result;
}

export function trimBefore(points, index) {
    const result = points.slice(index);
    if (result[0].geometry?.length > 0) {
        result[0] = { ...result[0], geometry: [] };
    }

    return result;
}

export function trimAfter(points, index) {
    return points.slice(0, index + 1);
}

export function split(points, index) {
    const result = [...points];
    result[index] = withGap(points[index]);
    result[index + 1] = { ...points[index + 1], geometry: [] };

    return result;
}

export function join(points, index) {
    const start = points[index];
    const end = points[index + 1];
    const result = [...points];
    result[index] = { ...start, profile: end.profile, geoProfile: end.geoProfile };
    if (start.geometry) {
        result[index].geometry = unmarkGapEnd(start.geometry);
    }
    result[index + 1] = { ...end, geometry: [] };

    return result;
}

export function setProfile(points, index, geoProfile) {
    const result = [...points];
    result[index] = { ...points[index], profile: geoProfile.profile, geoProfile };

    return result;
}

export function setSegmentGeometry(points, index, geometry) {
    const result = [...points];
    const point = points[index];
    result[index] = { ...point, geometry: isGap(point) ? markGapEnd(geometry) : geometry };

    return result;
}

function isGap(point) {
    return point?.profile === PROFILE_GAP;
}

function withGap(point) {
    return point.geometry
        ? { ...point, profile: PROFILE_GAP, geometry: markGapEnd(point.geometry) }
        : { ...point, profile: PROFILE_GAP };
}

function removePoint(points, index, { passGap }) {
    const removed = points[index];
    const result = [...points.slice(0, index), ...points.slice(index + 1)];
    const prev = result[index - 1];
    const next = result[index];
    if (!next) {
        return result;
    }
    if (!prev) {
        if (next.geometry) {
            result[index] = { ...next, geometry: [] };
        }
        return result;
    }
    if (passGap && isGap(removed)) {
        result[index - 1] = withGap(prev);
        return result;
    }
    if (removed.geometry || (isGap(prev) && next.geometry)) {
        result[index] = { ...next, geometry: [] };
    }

    return result;
}

function insertAt(points, index, point) {
    return [...points.slice(0, index), point, ...points.slice(index)];
}

function replaceLast(geometry, vertex) {
    return geometry.length > 0 ? [...geometry.slice(0, -1), vertex] : geometry;
}
