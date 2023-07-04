import { loadProviders } from "./geoRouter/methods/loadProviders.js";
import { calculateRoute } from "./geoRouter/legacy/calculateRoute.js";
import { calculateGpxRoute } from "./geoRouter/legacy/calculateGpxRoute.js";
import { pickTypeRouterProfile } from "./geoRouter/methods/pickTypeRouterProfile.js";

import { initSetter, nextState, flushState } from "./geoRouter/state.js";
import { onOpenSettings, onParamsChanged, onRouterProfileSelected } from "./geoRouter/events.js";
import { isReady, getEffectDeps, getProfileName, getProfileIcon, getProfileColor,
    allProviders, getProvider, allProfiles, getProfile, getParams, getResetParams, getURL, getProviderByType,
    _allProviders, _getProvider, _allProfiles, _getProfile, _getParams, _getResetParams, _getURL, _getProviderByType,
} from "./geoRouter/getters.js";

// fallback
const osmand = {
    key: 'osmand',
    type: 'osmand',
    name: 'OsmAnd Advanced',
    profiles: [{
        key: 'car',
        name: 'Car',
        params: {},
        backup: {}
    }],
    url: `${process.env.REACT_APP_ROUTING_API_SITE}/routing/route`
};

export class geoRouter {
    // state
    setter = null;
    loaded = false;
    paused = false;

    // current
    type = osmand.type;
    router = osmand.key; // providers.key
    profile = osmand.profiles[0].key; // profiles.key

    // load
    colors = {};
    fallback = osmand;
    providers = [osmand];

    // getters() - new
    isReady = isReady;
    getEffectDeps = getEffectDeps;
    getProfileName = getProfileName;
    getProfileIcon = getProfileIcon;
    getProfileColor = getProfileColor;

    // getters() - old
    allProviders = allProviders;
    getProvider = getProvider;
    allProfiles = allProfiles;
    getProfile = getProfile;
    getParams = getParams;
    getResetParams = getResetParams;
    getURL = getURL;
    getProviderByType = getProviderByType;

    _allProviders = _allProviders;
    _getProvider = _getProvider;
    _allProfiles = _allProfiles;
    _getProfile = _getProfile;
    _getParams = _getParams;
    _getResetParams = _getResetParams;
    _getURL = _getURL;
    _getProviderByType = _getProviderByType;

    // events()
    onOpenSettings = onOpenSettings;
    onParamsChanged = onParamsChanged;
    onRouterProfileSelected = onRouterProfileSelected;

    // methods()
    loadProviders = loadProviders;
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