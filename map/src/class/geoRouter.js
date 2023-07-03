import { copyObj } from "../util/Utils";

import { loadProviders } from "./geoRouter/methods/loadProviders.js";
import { pickTypeRouterProfile } from "./geoRouter/methods/pickTypeRouterProfile.js";

import { onOpenSettings, onParamsChanged, onRouterProfileSelected } from "./geoRouter/events.js";
import { initSetter, nextState, flushState } from "./geoRouter/state.js";

/*
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

const preloaded = {
    type: 'osmand',
    router: 'osmand',
    profile: 'car',
    name: 'OsmAnd Advanced',
    url: `${process.env.REACT_APP_ROUTING_API_SITE}/routing/route`,
};

export class geoRouter {
    setter = null;

    // current
    type = preloaded.type;
    router = preloaded.router; // ref to providers.key
    profile = preloaded.profile; // ref to profiles.key

    // readiness
    loaded = false;
    paused = false;
    isReady() { return this.loaded === true && this.paused === false };

    // getters (use copy to prevent direct modify by parents)
    allProviders() { return this._allProviders() }; // no-copy-need
    getProvider(router = this.router) { return copyObj(this._getProvider(router)) };
    allProfiles(router = this.router) { return copyObj(this._allProfiles(router)) };
    getProfile(router = this.router, profile = this.profile) { return copyObj(this._getProfile(router, profile)) };
    getParams(router = this.router, profile = this.profile) { return copyObj(this._getParams(router, profile)) };
    getResetParams(router = this.router, profile = this.profile) { return copyObj(this._getResetParams(router, profile)) };
    getURL(router = this.router, profile = this.profile) { return this._getURL(router, profile) };
    getProviderByType(type = this.type) { return copyObj(this._getProviderByType(type)) };

    // internals (strict and fast)
    _allProviders() { return this.providersOSRM.concat(this.providersOsmAnd) }; // OSRM + OsmAnd
    _getProvider(router) { return this._allProviders()?.find(r => r.key === router) ?? {} };
    _allProfiles(router) { return this._getProvider(router)?.profiles ?? [] };
    _getProfile(router, profile) { return this._allProfiles(router)?.find(p => p.key === profile) ?? {} };
    _getParams(router, profile) { return this._getProfile(router, profile)?.params };
    _getResetParams(router, profile) { return this._getProfile(router, profile)?.backup };
    _getURL(router, profile) { return this._getProfile(router, profile)?.url ?? this._getProvider(router)?.url };
    _getProviderByType(type) { return this._allProviders()?.find(r => r.type === type) ?? {} };

    // events
    onOpenSettings = onOpenSettings;
    onParamsChanged = onParamsChanged;
    onRouterProfileSelected = onRouterProfileSelected;

    // methods
    loadProviders = loadProviders;
    pickTypeRouterProfile = pickTypeRouterProfile;

    // state control
    nextState = nextState;
    flushState = flushState;
    initSetter = initSetter;

    /*
        providersOSRM and providersOsmAnd are loaded by loadRouterProviders()
        Nevertheless, providersOsmAnd might be used before they are loaded
        Therefore, OsmAnd must be initialized with minimal-fallback data
    */
    providersOSRM = [];
    providersOsmAnd = [Object.assign({}, preloaded,
        { key: preloaded.router, profiles: [{ key: 'car', name: 'Car' }] })];
}