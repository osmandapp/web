import Utils from '../../../util/Utils';
import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH, ROUTE_POINTS_VIA } from '../../geoRouter/profileConstants';

/**
 * Add (Shift/Push/Insert) new Inter-point.
 */

export function routeAddViaPoint({ ll } = {}) {
    const startPoint = this.getOption(ROUTE_POINTS_START);
    const finishPoint = this.getOption(ROUTE_POINTS_FINISH);
    const viaPoints = this.getOption(ROUTE_POINTS_VIA);

    const validPoints = viaPoints
        .map((point, index) => (point != null ? { point, index } : null))
        .filter((item) => item != null);

    if (validPoints.length === 0) {
        // No intermediate points, add to end
        this.setOption(ROUTE_POINTS_VIA, [...viaPoints, ll]);
        return;
    }

    const distToStart = dist(startPoint, ll);
    const distToFinish = dist(finishPoint, ll);
    const nearestInter = validPoints.reduce(
        (min, item) => {
            const d = dist(item.point, ll);
            return d < min.dist ? { item, dist: d } : min;
        },
        { item: validPoints[0], dist: dist(validPoints[0].point, ll) }
    );

    let insertIndex = -1; // -1 means add to end

    if (distToStart < distToFinish && distToStart < nearestInter.dist) {
        // start is nearest → add as 1st intermediate
        insertIndex = validPoints[0].index;
    } else if (distToFinish < distToStart && distToFinish < nearestInter.dist) {
        // finish is nearest → add to end
        insertIndex = -1;
    } else {
        // intermediate point is nearest
        const nearestIndex = nearestInter.item.index;
        const isLastPoint = nearestIndex === validPoints[validPoints.length - 1].index;
        const distStartToInter = dist(startPoint, nearestInter.item.point);
        const distFinishToInter = dist(finishPoint, nearestInter.item.point);
        const isStartCloser = distStartToInter < distFinishToInter;

        if (isStartCloser) {
            insertIndex =
                distToStart < distStartToInter ? nearestIndex : getInsertAfterIndex(nearestIndex, isLastPoint);
        } else {
            insertIndex =
                distToFinish < distFinishToInter ? getInsertAfterIndex(nearestIndex, isLastPoint) : nearestIndex;
        }
    }

    const newViaPoints = [...viaPoints];
    if (insertIndex < 0) {
        newViaPoints.push(ll);
    } else {
        newViaPoints.splice(insertIndex, 0, ll);
    }

    this.setOption(ROUTE_POINTS_VIA, newViaPoints);
}

function getInsertAfterIndex(currentIndex, isLastPoint) {
    return isLastPoint ? -1 : currentIndex + 1;
}

function dist(a1, a2) {
    const lon1 = a1.lon !== undefined ? a1.lon : a1.lng;
    const lon2 = a2.lon !== undefined ? a2.lon : a2.lng;
    return Utils.getDistance(a1.lat, lon1, a2.lat, lon2);
}
