import cloneDeep from 'lodash-es/cloneDeep';
import { PROFILE_LINE } from '../../store/geoRouter/profileConstants';

export const PROFILE_GAP = 'gap';

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

export function hasSegmentWaitingForRouter(points) {
    return points.some((point, index) => isWaitingForRouter(points, index));
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
    if (geometryIndex === -1 || endPointIndex < 1 || !newPoint || !trackPoints || trackPoints.length < 2) {
        return trackPoints;
    }
    const end = trackPoints[endPointIndex];
    const vertex = () => ({ lat: newPoint.lat, lng: newPoint.lng });

    // newPoint should have previous geometry (up to geometryIndex) + newPoint at the end
    const newGeometry = [...end.geometry.slice(0, geometryIndex + 1), vertex()];
    if (newGeometry.length <= 2) {
        // in case when new segment becomes Line "point-to-point"
        // duplicate newPoint geometry to keep the segment protected
        // dupe-geometry tested: GPX, Cloud, Android OsmAnd app, Garmin
        newGeometry.push(vertex());
    }

    // endPoint should have newPoint at the begin and the rest of previous geometry (next to geometryIndex)
    const endGeometry = [vertex(), ...end.geometry.slice(geometryIndex + 1)];
    if (endGeometry.length <= 2) {
        // keep the segment protected (see comment for similar case before)
        endGeometry.unshift(vertex());
    }

    // duplicate profile string (from previous to endPoint)
    const inserted = { ...newPoint, geometry: newGeometry, profile: trackPoints[endPointIndex - 1].profile };

    // insert newPoint into trackPoints
    return [
        ...trackPoints.slice(0, endPointIndex),
        inserted,
        { ...end, geometry: endGeometry },
        ...trackPoints.slice(endPointIndex + 1),
    ];
}

export function markGapEnd(geometry) {
    return geometry?.length > 0 ? [...geometry.slice(0, -1), { ...geometry.at(-1), profile: PROFILE_GAP }] : geometry;
}

function unmarkGapEnd(geometry) {
    return geometry.length > 0 ? [...geometry.slice(0, -1), { ...geometry.at(-1), profile: undefined }] : geometry;
}

function withGapEnd(point, geometry) {
    if (isGap(point)) {
        return markGapEnd(geometry);
    }

    return geometry?.at(-1)?.profile === PROFILE_GAP ? unmarkGapEnd(geometry) : geometry;
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
        return splitProtectedSegment({ newPoint, trackPoints: points, geometryIndex, endPointIndex: index });
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
    return setProfiles(points, [index], geoProfile);
}

export function setProfiles(points, indexes, geoProfile) {
    const result = [...points];
    indexes.forEach((index) => {
        result[index] = { ...points[index], profile: geoProfile.profile, geoProfile };
    });

    return result;
}

export function setSegmentsProfile(points, starts, geoProfile) {
    const result = setProfiles(points, starts, geoProfile);
    starts.forEach((start) => {
        result[start + 1] = { ...result[start + 1], geometry: [] };
    });

    return result;
}

export function withAnsweredElevation(points, answered) {
    return mapOrSame(points, (point, index) =>
        point === answered[index] ? point : withElevation(point, answered[index])
    );
}

export function setSegmentGeometries(points, routes) {
    if (routes.length === 0) {
        return points;
    }
    const result = [...points];
    routes.forEach(({ index, geometry }) => {
        result[index] = { ...points[index], geometry: withGapEnd(points[index], geometry) };
    });

    return result;
}

function isGap(point) {
    return point?.profile === PROFILE_GAP;
}

function withElevation(point, answered) {
    if (point.lat !== answered.lat || point.lng !== answered.lng) {
        return point;
    }
    const geometry =
        point.geometry && point.geometry !== answered.geometry && point.geometry.length === answered.geometry?.length
            ? mapOrSame(point.geometry, (vertex, index) => withElevation(vertex, answered.geometry[index]))
            : point.geometry;
    const ele = answered.ele ?? point.ele;
    if (ele === point.ele && geometry === point.geometry) {
        return point;
    }

    return { ...point, ele, ...(geometry && { geometry }) };
}

function mapOrSame(items, update) {
    const result = items.map(update);

    return result.every((item, index) => item === items[index]) ? items : result;
}

export function withGap(point) {
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
