import { ROUTE_POINTS_FINISH, ROUTE_POINTS_START, ROUTE_POINTS_VIA } from '../store/geoRouter/profileConstants';

export const NAVIGATION_OBJECT_TYPE_LOCATION = 'location';
export const NAVIGATION_OBJECT_TYPE_SEARCH = 'search';
export const NAVIGATION_OBJECT_TYPE_FAVORITE = 'favorite';

export function pickNextRoutePoint(navObject, viaInputsCount = 0) {
    if (!navObject) {
        return null;
    }
    const startPoint = navObject.getOption(ROUTE_POINTS_START);
    if (!startPoint) {
        return ROUTE_POINTS_START;
    }

    const viaPoints = navObject.getOption(ROUTE_POINTS_VIA) || [];

    // Check for null slots in viaPoints array (e.g., [point1, null, point3] → return index 1)
    for (let i = 0; i < viaPoints.length; i++) {
        if (!viaPoints[i]) {
            return { type: ROUTE_POINTS_VIA, index: i };
        }
    }

    // Check if there are more UI inputs than filled points (e.g., viaPoints=[p1,p2], viaInputsCount=3 → return index 2)
    if (viaInputsCount > viaPoints.length) {
        return { type: ROUTE_POINTS_VIA, index: viaPoints.length };
    }

    const finishPoint = navObject.getOption(ROUTE_POINTS_FINISH);
    if (!finishPoint) {
        return ROUTE_POINTS_FINISH;
    }

    // All inputs are filled - no empty slots available
    return null;
}