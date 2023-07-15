import { calculateRoute } from './legacy/calculateRoute.js';
import { calculateGpxRoute } from './legacy/calculateGpxRoute.js';

import { loadProviders } from './methods/loadProviders.js';
import { newInterPoint } from './methods/newInterPoint.js';
import { pickTypeRouterProfile } from './methods/pickTypeRouterProfile.js';

import { initSetter, nextState, flushState } from './state.js';

import {
    onOpenSettings,
    onCloseSettings,
    onDragStart,
    onDragEnd,
    onParamsChanged,
    onRouterProfileSelected,
} from './events.js';

import {
    isReady,
    getEffectDeps,
    listProviders,
    listProfiles,
    getProfile,
    getParams,
    getResetParams,
    isParamsChanged,
    getURL,
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
    paused = false;
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
    isParamsChanged = isParamsChanged;
    getURL = getURL;

    // events()
    onOpenSettings = onOpenSettings;
    onCloseSettings = onCloseSettings;
    onDragStart = onDragStart;
    onDragEnd = onDragEnd;
    onParamsChanged = onParamsChanged;
    onRouterProfileSelected = onRouterProfileSelected;

    // methods()
    loadProviders = loadProviders;
    newInterPoint = newInterPoint;
    pickTypeRouterProfile = pickTypeRouterProfile;

    // legacy()
    calculateRoute = calculateRoute;
    calculateGpxRoute = calculateGpxRoute;

    // state()
    nextState = nextState;
    flushState = flushState;
    initSetter = initSetter;
}

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
