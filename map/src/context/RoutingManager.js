import TracksManager from "./TracksManager";
import _ from "lodash";
import TrackLayerProvider from "../map/TrackLayerProvider";
import { mergeStateObject } from "../util/Utils";
import { apiGet } from '../util/HttpApi';
import { copy } from "../util/Utils";

const STOP_CALC_ROUTING = 'stop';

function addRoutingToCash(startPoint, endPoint, tempLine, ctx, routingCashRef) {
    const routingKey = createRoutingKey(startPoint, endPoint, ctx.creatingRouteMode);
    let routingList = routingCashRef ? routingCashRef : ctx.routingCash;

    routingList[routingKey] = {
        startPoint: _.cloneDeep(startPoint),
        endPoint: _.cloneDeep(endPoint),
        routeMode: _.cloneDeep(ctx.creatingRouteMode),
        tempLine: tempLine,
        geometry: null
    }

    ctx.setRoutingCash({...routingList});
    return routingList;
}

function getRoutingFromCash(track, ctx, map) {
    for (let i = 0; i < track.points.length - 1; i++) {
        const start = track.points[i];
        const end = track.points[i + 1];
        if (end.routeMode) {
            const routingKey = createRoutingKey(start, end, end.routeMode);
            const geoCash = ctx.routingCash[routingKey]?.geometry;
            if (geoCash === STOP_CALC_ROUTING) {
                let polylineTemp = TrackLayerProvider.createEditableTempLPolyline(start, end, map, ctx);
                track.layers.addLayer(polylineTemp);
                track.updateLayers = true;
                end.geometry = [];
                updateSelectedRouting(ctx.routingCash[routingKey], polylineTemp, ctx);
            } else if (geoCash) {
                end.geometry = geoCash;
            }
        }
    }
    return track;
}

function updateSelectedRouting(segment, polylineTemp, ctx) {
    segment.geometry = null;
    segment.tempLine = polylineTemp;
    ctx.setRoutingCash({...ctx.routingCash});
}

function validateRoutingCash(point, ctx, routingCashRef) {
    let routingList = routingCashRef ? routingCashRef : ctx.routingCash;
    Object.keys(routingList).forEach(k => {
        if (segmentHasPoint(routingList[k], point) && (routingList[k].geometry === null)) {
            routingList[k].geometry = 'stop';
        }
    })
}

function segmentHasPoint(segment, point) {
    return TracksManager.isEqualPoints(segment.startPoint, point) || TracksManager.isEqualPoints(segment.endPoint, point);
}

function createRoutingKey(startPoint, endPoint, routeMode) {
    return `startLat=${startPoint.lat},startLng=${startPoint.lng},endLat=${endPoint.lat},endLng=${endPoint.lng},${TracksManager.formatRouteMode(routeMode)}`;
}

function addSegmentToRouting(start, end, oldPoint, tempPolyline, segments) {
    const segment = {
        oldPoint: oldPoint,
        start: start,
        end: end,
        tempPolyline:tempPolyline
    }
    segments.push(segment);
    return segments;
}

function getColors() {
    return {
        'car': '#1976d2',
        'truck': '#2F4F4F',
        'motorcycle': '#f8931d',
        'bicycle': '#9053bd',
        'boat': '#08b5ff',
        'horsebackriding': '#7f3431',
        'pedestrian': '#d90139',
        'ski': '#ffacdf',
        'line': '#5F9EA0',
        'moped': '#3e690e',
        'train': '#a56b6f'
    };
}

function addModes(data) {
    data['line'] = { name: 'Line', params: {} };
    return data;
}

function filterMode(data) {
    return Object.fromEntries(Object.entries(data).filter(([key]) => !key.includes('rescuetrack')));
}

function osrmToFeaturesCollection(osrm) {
/*
    convert OSRM routes[] to features[] "LineString"
    convert OSRM legs[].steps[] to features[] "Point" (OSRM's turns)
    convert OSRM waypoints[] to features[] "Point" (OSRM's start-end)
    convert OSRM duration/distance to properties

    now support only 1st of routes[]
*/
    const features = [];

    const cap = (s) => s && s[0].toUpperCase() + s.slice(1);

    const maneuver = (s) => {
        // imperative
        const type = cap(s?.maneuver?.type ?? ''); // Turn
        const modifier = cap(s?.maneuver?.modifier ?? ''); // Left

        // target
        const name = s?.name ?? ''; // street
        const ref = s?.ref ? ` (${s.ref})` : ''; // (REF)

        // go
        const distance = s?.distance ?? '';

        const imperative = type + ' ' + modifier;
        const target = name ? 'to ' + name + ' ' + ref : '';
        const go = distance > 0 ? 'and go ' + distance + ' meters' : '';

        return `${imperative} ${target} ${go}`; // Turn Slight right to Schirmschneise and go 621 meters
    }

    osrm?.routes?.forEach(r => {
        // parse geo
        features.push({
            type: 'Feature',
            geometry: r.geometry,
            properties: {
                overall: {
                    time: r.duration,
                    distance: r.distance
                }
            }
        });
        // parse turns
        r.legs?.forEach(l => {
            l.steps?.forEach(s => {
                features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: s.maneuver?.location
                    },
                    properties: {
                        description: maneuver(s)
                    }
                });
            })
        });
    });

    // parse points (really need?)
    osrm?.waypoints?.forEach(w => {
        features.push({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: w.location
            },
            properties: {
                description: w.name
            }
        });
    });

    return { type: 'FeatureCollection', features };
}

async function calculateRoute({
    routeProviders,
    startPoint,
    endPoint,
    interPoints,
    avoidRoads,
    routeMode,
    setRouteData,
    getRouteText,
    setRoutingErrorMsg
}) {
    // OsmAnd (call original function)
    if (routeProviders.type === 'osmand') {
        return calculateRouteOsmAnd({
            startPoint,
            endPoint,
            interPoints,
            avoidRoads,
            routeMode,
            setRouteData,
            getRouteText,
            setRoutingErrorMsg
        });
    }

    // OSRM
    const url = routeProviders.getURL();
    const tail = '?geometries=geojson&overview=full&steps=true';

    const points = [];

    const geo = (point) => point.lng.toFixed(6) + ',' + point.lat.toFixed(6); // OSRM: lng first, lat second !

    points.push(geo(startPoint));
    interPoints?.forEach(i => points.push(geo(i)));
    points.push(geo(endPoint));

    const coordinates = points.join(';');

    setRoutingErrorMsg(null);
    getRouteText(true, null);

    // console.log(url + coordinates + tail);
    const response = await apiGet(url + coordinates + tail, { apiCache: true });

    if (response.ok) {
        const data = osrmToFeaturesCollection(await response.json());
        const props = data.features[0]?.properties ?? {};
        const allData = { geojson: data, id: new Date().getTime(), props: props };
        setRouteData(allData);
        getRouteText(false, allData);
    } else {
        setRouteData(null);
        getRouteText(false, null);
        setRoutingErrorMsg(`Router error. Please open settings and choose another provider/profile.`);
    }
}

async function calculateRouteOsmAnd({
    startPoint,
    endPoint,
    interPoints,
    avoidRoads,
    routeMode,
    setRouteData,
    getRouteText,
    setRoutingErrorMsg
}) {
    // setRouteData(null); // don't reset (for better rendering)
    setRoutingErrorMsg(null);
    const starturl = `points=${startPoint.lat.toFixed(6)},${startPoint.lng.toFixed(6)}`;
    let inter = '';
    interPoints.forEach((i) => {
        inter += `&points=${i.lat.toFixed(6)},${i.lng.toFixed(6)}`;
    });
    const endurl = `points=${endPoint.lat.toFixed(6)},${endPoint.lng.toFixed(6)}`;
    let avoidRoadsUrl = '';
    avoidRoads.forEach((i) => {
        avoidRoadsUrl += ',' + i.id;
    });
    if (avoidRoadsUrl !== '') {
        avoidRoadsUrl = '&avoidRoads=' + avoidRoadsUrl.substring(1);
    }
    getRouteText(true, null)
    const maxDist = `maxDist=${process.env.REACT_APP_MAX_ROUTE_DISTANCE}`
    const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/route?`
        + `routeMode=${TracksManager.formatRouteMode(routeMode)}&${starturl}${inter}&${endurl}&${avoidRoadsUrl}${maxDist}`, {
        apiCache: true,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok && response.data?.features) {
        let data = await response.json();
        let props = {};
        if (data.msg) {
            setRoutingErrorMsg(data.msg);
            data = data.features;
        }
        if (data.features.length > 0) {
            props = data.features[0]?.properties;
        }
        let allData = {geojson: data, id: new Date().getTime(), props: props};
        setRouteData(allData);
        getRouteText(false, allData)
    } else {
        setRouteData(null);
        getRouteText(false, null);
        setRoutingErrorMsg(`Router error. Please open settings and choose another provider/profile.`);
    }
}

/*
    calculateGpxRoute() processes GPX-data via API-request /routing/gpx-approximate
    OSRM profiles car/bicycle/pedestrian are compatible and supported by API
    OsmAnd profiles (ex-routeMode) are supported as is
*/
async function calculateGpxRoute({
    routeMode,
    routeTrackFile,
    setRouteData,
    setStartPoint,
    setEndPoint,
    setInterPoints
}) {
    let formData = new FormData();
    formData.append('file', routeTrackFile);
    const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/gpx-approximate?routeMode=${TracksManager.formatRouteMode(routeMode)}`, {
        apiCache: true,
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        let data = await response.json();
        let start, end;
        let props = {};
        if (data?.features?.length > 0) {
            let coords = data?.features[0].geometry.coordinates;
            if (coords.length > 0) {
                start = {lat: coords[0][1], lng: coords[0][0]};
                end = {lat: coords[coords.length - 1][1], lng: coords[coords.length - 1][0]};
            }
            props = data.features[0]?.properties;
        }
        setStartPoint(start);
        setEndPoint(end);
        setInterPoints([]);
        setRouteData({geojson: data, id: new Date().getTime(), props: props});
    } else {
        let message = await response.text();
        alert(message);
    }
}

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

function initRouteProviders() {
    const preloaded = {
        type: 'osmand',
        router: 'osmand',
        profile: 'car',
        name: 'OsmAnd Advanced',
        url: `${process.env.REACT_APP_ROUTING_API_SITE}/routing/route`,
    };

    return {
        // current
        type: preloaded.type,
        router: preloaded.router, // ref to providers.key
        profile: preloaded.profile, // ref to profiles.key

        // readiness
        loaded: false,
        paused: false,
        isReady() { return this.loaded === true && this.paused === false },

        // getters (use copy to prevent direct modify by parents)
        allProviders() { return this._allProviders() }, // no-copy-need
        getProvider(router = this.router) { return copy(this._getProvider(router)) },
        allProfiles(router = this.router) { return copy(this._allProfiles(router)) },
        getProfile(router = this.router, profile = this.profile) { return copy(this._getProfile(router, profile)) },
        getParams(router = this.router, profile = this.profile) { return copy(this._getParams(router, profile)) },
        getResetParams(router = this.router, profile = this.profile) { return copy(this._getResetParams(router, profile)) },
        getURL(router = this.router, profile = this.profile) { return this._getURL(router, profile) },
        getProviderByType(type = this.type) { return copy(this._getProviderByType(type)) },

        // internals (strict and fast)
        _allProviders() { return this.providersOSRM.concat(this.providersOsmAnd) }, // OSRM + OsmAnd
        _getProvider(router) { return this._allProviders()?.find(r => r.key === router) ?? {} },
        _allProfiles(router) { return this._getProvider(router)?.profiles ?? [] },
        _getProfile(router, profile) { return this._allProfiles(router)?.find(p => p.key === profile) ?? {} },
        _getParams(router, profile) { return this._getProfile(router, profile)?.params },
        _getResetParams(router, profile) { return this._getProfile(router, profile)?.backup },
        _getURL(router, profile) { return this._getProfile(router, profile)?.url ?? this._getProvider(router)?.url },
        _getProviderByType(type) { return this._allProviders()?.find(r => r.type === type) ?? {} },

        // actions
        PARAMS(ctx = null, opts) {
            /*
                Saving profile params isn't easy process:

                1. We can't modify _getProfile().params directly because allProviders() consist of joined arrays
                2. We assume that opts are applicable to providersOsmAnd only (OSRM options aren't supported)
                3. Therefore, we look into providersOsmAnd, rewrite params and call ctx-setter
            */

            if (!ctx || opts === undefined) throw(new Error('invalid route.PARAMS() call'));

            const router = ctx.routeProviders.router;
            const profile = ctx.routeProviders.profile;

            ctx.routeProviders?.providersOsmAnd?.forEach(r => {
                if (r.key === router) {
                    r.profiles?.forEach(p => {
                        if (p.key === profile) {
                            p.params = opts;
                        }
                    });
                }
            });

            ctx.setRouteProviders(ctx.routeProviders);
        },

        PAUSE(ctx, state) {
            // pause routing while RouteSettingsDialog open
            if (!ctx || state === undefined) throw(new Error('invalid route.PAUSE() call'));
            mergeStateObject(ctx.routeProviders, ctx.setRouteProviders, { paused: state });
        },

        CHOOSE(ctx = null, { type = null, router = null, profile = null } = {}) {
            /*
                Switch to selected "router" and/or "profile":

                1. use current router|profile when (any)===null
                2. use first available when router|profile is not applicable
                3. type is changed automatically according to applicated router

                Examples:

                CHOOSE(ctx, { profile }) - switch profile, keep router
                CHOOSE(ctx, { router }) - switch router, try to keep profile
                CHOOSE(ctx, { router, profile }) - switch both (if applicable)

                Special case (used for searchParams / share route link):

                CHOOSE(ctx, { type, [profile] }) - select 1st type's provider

                Return: updated routeProviders (use if you need) or null
            */
            const routeProviders = ctx?.routeProviders;

            if (!ctx || !routeProviders) throw(new Error('invalid route.CHOOSE() call'));

            if (type && !router) {
                router = routeProviders.getProviderByType(type)?.key ?? 'osmand';
                // console.log('type', type, 'router', router);
            }

            // use current values if not defined
            router = router ?? routeProviders.router;
            profile = profile ?? routeProviders.profile;

            const providers = this.allProviders();

            if (!providers.find(r => r.key === router)) {
                router = providers[0].key ?? 'osmand'; // fallback
            }

            const profiles = this.allProfiles(router);

            if (!profiles.find(p => p.key === profile)) {
                profile = profiles[0].key ?? 'car'; // fallback
            }

            if (router && profile) {
                type = this.getProvider(router)?.type ?? 'osmand'; // fallback
                // console.log('choosen:', type, router, profile);
                return mergeStateObject(routeProviders, ctx.setRouteProviders, { type, router, profile });
            }

            return routeProviders; // unmodified
        },

        /*
            providersOSRM and providersOsmAnd are loaded by loadRouterProviders()
            Nevertheless, providersOsmAnd might be used before they are loaded
            Therefore, OsmAnd must be initialized with minimal-fallback data
        */
        providersOSRM: [],
        providersOsmAnd: [Object.assign({}, preloaded,
            { key: preloaded.router, profiles: [{ key: 'car', name: 'Car' }] })],

    };
}

// load and validate OSRM and OsmAnd routing providers
async function loadRouteProviders({ routeProviders, setRouteProviders, creatingRouteMode = null, setCreatingRouteMode = null }) {
    const nameAliases = {
        'ZLZK': 'OSRM',
        'Routing OSM DE (Demo)': 'OSRM (backup)'
    };

    // load OSRM providers first
    const osrm = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/online-routing-providers.json`);
    if (osrm.ok) {
        try {
            const json = await osrm.json();
            if (json && json?.providers && json?.providers[0]?.name) {

                json.providers.forEach(p => { // routes to profiles
                    p.key = p.name; // name acts as key
                    if (nameAliases[p.key]) {
                        p.name = nameAliases[p.key];
                    }
                    if (p.routes) {
                        p.routes.forEach(r => { // type to key
                            r.key = r.type;
                            delete r.type;
                        });
                        p.profiles = p.routes;
                        delete p.routes;
                    }
                });

                routeProviders = mergeStateObject(routeProviders, setRouteProviders, {
                    providersOSRM: json.providers,
                    type: json.providers[0].type,
                    router: json.providers[0].key, // select first OSRM key and type
                    profile: json.providers[0]?.profiles[0]?.key // select first profile
                });
            }
        } catch { console.log('failed to load osrm providers'); }
    }

    // load OsmAnd provider as advanced solution
    // TracksManager compatibility: provide OsmAnd to setCreatingRouteMode
    // OsmAnd JSON profiles list is converted from Object to Array (for OSRM compatibility)
    const osmand = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/routing-modes`);
    if (osmand.ok) {
        try {
            const json = await osmand.json();

            // Tracks-routing compatibility
            if (json && setCreatingRouteMode) {
                let creatingData = _.cloneDeep(json);
                creatingData = filterMode(creatingData);
                creatingData = addModes(creatingData);
                setCreatingRouteMode( {
                    mode: creatingRouteMode.mode,
                    modes: creatingData,
                    opts: creatingData[creatingRouteMode.mode]?.params,
                    colors: getColors()
                    }
                );
            }

            if (json) {
                // convert OsmAnd "profiles" {} to OSRM "profiles" [] array
                // note: sort, filter, additional profiles will be processed here
                // copy .params to .backup (used later to reset params in settings)
                const converted = [];
                Object.keys(json).forEach((k) => {
                    if (json[k]?.params) {
                        json[k].backup = copy(json[k]?.params);
                    }
                    converted.push(json[k]);
                });

                // update default OsmAnd provider with actual profiles
                routeProviders = mergeStateObject(routeProviders, setRouteProviders, {
                    providersOsmAnd: [
                        Object.assign({},
                            routeProviders.providersOsmAnd[0], // keep preloaded
                            { profiles: converted } // add profiles
                        )
                    ]
                });
            }
        } catch { console.log('failed to load osmand providers'); }
    }

    // set type/profile according to window.location.search
    const searchParams = new URLSearchParams(window.location.search);
    const type = searchParams.get('type');
    const profile = searchParams.get('profile');
    if (type && profile) {
        // emulate ctx {} for CHOOSE() call
        routeProviders.CHOOSE({ routeProviders, setRouteProviders }, { type, profile });
    }

    routeProviders = mergeStateObject(routeProviders, setRouteProviders, { loaded: true }); // ready
}

function routeModeCompatible(routeProviders) {
    const compatible = {
        mode: routeProviders.profile,
        opts: routeProviders.getParams() ?? {} // compatible opts can't be undefined
    }
    return compatible;
}

const RoutingManager = {
    addRoutingToCash,
    getRoutingFromCash,
    validateRoutingCash,
    addSegmentToRouting,
    initRouteProviders,
    loadRouteProviders,
    routeModeCompatible,
    calculateGpxRoute,
    calculateRoute
}

export default RoutingManager;