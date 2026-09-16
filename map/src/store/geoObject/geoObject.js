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
            map: {
                zoom: false,
                conceal: false,
                hidePoints: false,
                forceApproximation: false,
            },
            points: {
                start: null,
                finish: null,
                viaPoints: [],
                avoidRoads: [],
            },
            // prototype: the route starts and ends at the start point, its length is given instead of a finish
            roundTrip: {
                enabled: false,
                lengthType: 'distance', // distance (km) | time (min)
                distance: 20,
                time: 60,
                variants: 3, // always three loops to pick from
                direction: null, // degrees, null - any
                seed: 0, // another seed gives other loops for the same settings
            },
        },
    };

    optionsText = {
        route: {
            map: {
                hidePoints: 'Hide navigation points',
                forceApproximation: 'Override approximation limit',
            },
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
