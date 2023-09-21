import { initSetter, nextState, flushState } from '../geoRouter/state.js'; // reuse geoRouter module

import { getOption, setOption, getOptionText } from './options.js';

import { reset, putRoute, putRouteOsrm } from './setters.js';

import { getRoute, getTrack, getRouteId, getRouteProps } from './getters.js';

export class geoObject {
    id = null;

    // gpx = null; // later
    route = null; // GeoJSON FeatureCollection
    track = null; // selectedGpxFile format (LocalClientTrackLayer compatible)

    options = {
        route: {
            geoProfile: null,
            hidePoints: false,
            useApproximate: false,
        },
    };

    optionsText = {
        route: {
            hidePoints: 'Hide route points',
            useApproximate: 'Advanced details',
        },
    };

    constructor({ route = null } = {}) {
        // gpx && this.putGpx(gpx);
        // track && this.putTrack(track);
        route && this.putRoute(route);
    }

    // setters
    reset = reset;
    putRoute = putRoute;
    putRouteOsrm = putRouteOsrm;
    setOption = setOption;

    // getters
    getTrack = getTrack;
    getRoute = getRoute;
    getRouteId = getRouteId;
    getRouteProps = getRouteProps;
    getOption = getOption;
    getOptionText = getOptionText;

    // state
    setter = null;
    nextState = nextState;
    flushState = flushState;
    initSetter = initSetter;
}

/*
    geoObject.route = {
        // route id (used as a part of the key for GeoJSON)
        id, // unique: new Date().getTime() or md5(coordinates)

        // route props (statistics)
        // filled from data.features[0].properties || {}
        // used in formatRouteInfo() and changeRouteText()
        props: {
            overall: {
                time, // overall time
                distance, // overall distance
                routingTime, // overall routing time (cost)
            },
        },

        // GeoJSON data (FeatureCollection format)
        geojson: {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'LineString', // type of segment (LineString always)
                        coordinates, // array of points [lon, lat] Note: sequence lon-lat !
                    },
                    properties: {
                        overall: {
                            time,
                            distance,
                        },
                    },
                    style,
                },
            ],
        },
    };
 */
