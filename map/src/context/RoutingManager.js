import TracksManager from "./TracksManager";
import _ from "lodash";
import TrackLayerProvider from "../map/TrackLayerProvider";
import { mergeStateObject } from "../util/Utils";
import { apiGet } from '../util/HttpApi';

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

function initRouteProviders() {
    // fallback default
    const type = 'osmand';
    const profile = 'Car';
    const name = 'OsmAnd Advanced Router';
    const url = `${process.env.REACT_APP_ROUTING_API_SITE}/routing/route`;

    /*
        routeProvides comprises:
            Currently selected provider: name and profile;
            Arrays of loaded and available providers;
            Public Getters and Setters to work with;
            Private helpers.
    */
    return {
        name,
        profile,

        // component Setters (called with AppContext reference)
        setName(ctx, name) { return mergeStateObject(ctx.routeProviders, ctx.setRouteProviders, { name }) },
        setProfile(ctx, profile) { return mergeStateObject(ctx.routeProviders, ctx.setRouteProviders, { profile }) },

        // component Getters
        getName() { return this.name },
        getProfile() { return this.profile },
        getType() { return this.currentProvider()?.type },
        getURL() { return this.currentProfile()?.url || this.currentProvider()?.url },
        listProfileNames() { return this.currentProvider()?.routes?.map(e => e.name) },
        listProviderNames() { return this.getProviders()?.map(e => e.name) },

        // initialized by loadRouteProviders()
        providersOSRM: [], // always dynamically loaded
        providersOsmAnd: [{ type, name, url }], // preloaded, but overriden dynamically

        // private helper functions
        getProviders() { return this.providersOSRM.concat(this.providersOsmAnd) }, // ordered, OSRM used first
        currentProvider() { return this.getProviders()?.find(e => e?.name === this.name) }, // current Provider
        currentProfile() { return this.currentProvider()?.routes?.find(e => e?.name === this.profile) }, // current Profile
    };
}

// load and validate OSRM and OsmAnd routing providers
async function loadRouteProviders({ routeProviders, setRouteProviders, creatingRouteMode = null, setCreatingRouteMode = null }) {
    // load OSRM providers first
    const osrm = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/online-routing-providers.json`);
    if (osrm.ok) {
        try {
            const json = await osrm.json();
            if (json && json?.providers && json?.providers[0]?.name) {
                routeProviders = mergeStateObject(routeProviders, setRouteProviders, {
                    providersOSRM: json.providers,
                    // name: 'OsmAnd Advanced Router', // debug
                    name: json.providers[0].name, // set first OSRM provider
                    profile: json.providers[0]?.routes[0]?.name // select first profile
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
                // convert OsmAnd "profiles" {} to OSRM "routes" []
                // Note: sort, filter, additional profiles will be processed here

                const converted = [];
                Object.keys(json).forEach((k) => {
                    converted.push(json[k]);
                });

                // update default OsmAnd provider with actual profiles
                routeProviders = mergeStateObject(routeProviders, setRouteProviders, {
                    providersOsmAnd: [{
                        type: routeProviders.providersOsmAnd[0].type,
                        name: routeProviders.providersOsmAnd[0].name,
                        url: routeProviders.providersOsmAnd[0].url,
                         routes: converted
                    }]
                });
            }
        } catch { console.log('failed to load osmand providers'); }
    }
}

const RoutingManager = {
    addRoutingToCash,
    getRoutingFromCash,
    validateRoutingCash,
    addSegmentToRouting,
    initRouteProviders,
    loadRouteProviders
}

export default RoutingManager;