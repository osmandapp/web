import { calculateRoute } from './legacy/calculateRoute.js';
import { calculateGpxRoute } from './legacy/calculateGpxRoute.js';
import { updateRouteBetweenPoints } from './legacy/updateRouteBetweenPoints.js';

import { loadProviders } from './methods/loadProviders.js';
import { pickTypeRouterProfile } from './methods/pickTypeRouterProfile.js';

import { initSetter, nextState, flushState } from './state.js';

import {
    onOpenSettings,
    onCloseSettings,
    onDragStart,
    onDragEnd,
    onParamsChanged,
    onGeoProfile,
    escapeFromLineProfile,
} from './events.js';

import {
    isReady,
    getEffectDeps,
    listProviders,
    listProfiles,
    getProfile,
    getParams,
    getResetParams,
    getChangedParams,
    isParamsChanged,
    getURL,
    getGeoProfile,
    getColor,
} from './getters.js';

// fallback
const osmand = {
    key: 'osmand',
    type: 'osmand',
    name: 'OsmAnd Advanced',
    profiles: [
        {
            key: 'car',
            name: 'Car',
            params: {},
            resetParams: {},
        },
    ],
    url: `${process.env.REACT_APP_ROUTING_API_SITE}/routing/route`,
};

export class geoRouter {
    // state
    setter = null;
    loaded = false;
    preview = false;

    // current
    type = osmand.type;
    router = osmand.key; // providers.key
    profile = osmand.profiles[0].key; // profiles.key

    // load
    colors = {};
    fallback = osmand;
    providers = [osmand];

    // getters()
    isReady = isReady;
    getEffectDeps = getEffectDeps;
    listProviders = listProviders;
    listProfiles = listProfiles;
    getProfile = getProfile;
    getParams = getParams;
    getResetParams = getResetParams;
    getChangedParams = getChangedParams;
    isParamsChanged = isParamsChanged;
    getURL = getURL;
    getGeoProfile = getGeoProfile;
    getColor = getColor;

    // events()
    onOpenSettings = onOpenSettings;
    onCloseSettings = onCloseSettings;
    onDragStart = onDragStart;
    onDragEnd = onDragEnd;
    onParamsChanged = onParamsChanged;
    onGeoProfile = onGeoProfile;
    onRouterProfileSelected = onGeoProfile; // alias
    escapeFromLineProfile = escapeFromLineProfile;

    // methods()
    loadProviders = loadProviders;
    pickTypeRouterProfile = pickTypeRouterProfile;

    // legacy()
    calculateRoute = calculateRoute;
    calculateGpxRoute = calculateGpxRoute;
    updateRouteBetweenPoints = updateRouteBetweenPoints;

    // state()
    nextState = nextState;
    flushState = flushState;
    initSetter = initSetter;
}

/**
 * <geoProfile> is an object:
 *
 * Usual way: { type, router, profile, params }
 *
 * Track-Point way: { ... profile, geoProfile: { type, router, profile, params } }
 *
 * With Track-Point way, point.profile will be used if no point.geoProfile found.
 *
 * When geoProfile used as getter parameters, all fields are optional.
 * If some fields are omited, they will be taken from this class current vars.
 *
 * When you got geoProfile as a result, it must be stored as is into track.point.geoProfile
 */

/*
    TODO rewrite/remove old doc

    OsmAnd provider structure and modifications: https://test.osmand.net/routing/routing-modes

        1. OsmAnd type, router (key), url are pre-defined
        2. OsmAnd provider is ONE only in providersOsmAnd[] array
        3. OsmAnd profiles are converted from {} to profiles[] array
        4. OsmAnd profile's .params are copied to .backup (used to reset params)

    OSRM provider structure and modifications: https://test.osmand.net/online-routing-providers.json

        1. OSRM type, name (as key), url, routes are loaded into providersOSRM[]
        2. routes[] are renamed to profiles[], each profile .type is renamed to .key
        3. finally, names are turned into pretty names by aliases (hardcoded)

    Attributes usage:

        1. providers[] usage: key as is, type, name (pretty), url (when profile has no url)
        2. profiles[] usage: key as is, name (pretty), url/params are optional
        3. current choosed: type, router(key), profile(key)

    routeProviders comprises:

        Currently selected provider: type, router (key), profile (key) -- will use these to keep in routing results;
        Public getters() and ACTIONS() to work with;
        Arrays of loaded (= available) providers;
        Internal helper functions
*/
