import { geoRouter } from '../geoRouter/geoRouter.js';

import { routeAddViaPoint } from './legacy/routeAddViaPoint.js';
import { getOption, setOption, getOptionText } from './options.js';

import { getRoute, getTrack, getRouteKey, getRouteProps, getRouteEffectDeps, isRouteReadyToCalc } from './getters.js';
import { resetRoute, putRoute, putRouteOsrm } from './setters.js';

export class geoObject extends geoRouter {
    id = null;

    // gpx = null; // later
    route = null; // GeoJSON FeatureCollection
    track = null; // selectedGpxFile format (LocalClientTrackLayer compatible)

    options = {
        route: {
            hidePoints: false,
            // useApproximate: false, // always used
            points: {
                start: null,
                finish: null,
                viaPoints: [],
                avoidRoads: [],
            },
        },
    };

    optionsText = {
        route: {
            hidePoints: 'Hide navigation points',
            // useApproximate: 'Generate advanced details',
        },
    };

    // setters
    putRoute = putRoute;
    putRouteOsrm = putRouteOsrm;
    resetRoute = resetRoute;
    setOption = setOption;

    // getters
    getTrack = getTrack;
    getRoute = getRoute;
    getOption = getOption;
    getOptionText = getOptionText;

    // route-getters
    getRouteKey = getRouteKey;
    getRouteProps = getRouteProps;
    getRouteEffectDeps = getRouteEffectDeps;
    isRouteReadyToCalc = isRouteReadyToCalc;

    // route-methods
    routeAddViaPoint = routeAddViaPoint;
}
