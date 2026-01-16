import { useContext, useEffect, useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import AppContext, { OBJECT_TYPE_STOP } from '../../context/AppContext';
import { apiGet } from '../../util/HttpApi';
import { getVisibleBbox, findFeatureGroupById, bindTooltipToMarker } from '../util/MapManager';
import L from 'leaflet';
import { changeIconColor, createPoiIcon, DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import { clusterMarkers } from '../util/Clusterizer';
import { SimpleDotMarker } from '../markers/SimpleDotMarker';
import { getObjIdSearch } from './SearchLayer';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import debounce from 'lodash-es/debounce';
import { MENU_INFO_OPEN_SIZE, MAIN_URL_WITH_SLASH, STOP_URL } from '../../manager/GlobalManager';

export const TRANSPORT_STOPS_LAYER_ID = 'transport-stops-layer';

const TRANSPORT_STOP_ICON_COLOR = '#ffffff';
export const TRANSPORT_STOP_SHIELD_COLOR = '#237BFF';
export const TRANSPORT_STOP_BACKGROUND = 'square';
export const TRANSPORT_STOP_ICON_NAME = 'ic_action_transport_bus';
const TRANSPORT_STOP_ICON_SIZE = 16;

const MIN_ZOOM_FOR_STOPS = 12;

async function getTransportStopIcon() {
    try {
        const response = await fetch(`/map/images/map_icons/${TRANSPORT_STOP_ICON_NAME}.svg`);
        const svgData = await response.text();
        return changeIconColor(svgData, TRANSPORT_STOP_ICON_COLOR);
    } catch (error) {
        console.error('Failed to load transport stop icon:', error);
        return null;
    }
}

function getRouteStopsMap({ stopsList, selectedRoute, routeStopIds, routeStopsMapRef, selectedRouteIdRef }) {
    const currentRouteId = selectedRoute?.id || null;
    let routeStopsMap = routeStopsMapRef?.current || null;

    if (selectedRoute && routeStopIds.length > 0) {
        // Rebuild map only if route id changed
        if (!routeStopsMap || selectedRouteIdRef?.current !== currentRouteId) {
            routeStopsMap = new Map();
            stopsList.forEach((stop) => {
                const stopId = stop.properties?.id;
                if (stopId && routeStopIds.includes(stopId)) {
                    routeStopsMap.set(stopId, stop);
                }
            });
            if (routeStopsMapRef) {
                routeStopsMapRef.current = routeStopsMap;
            }
            if (selectedRouteIdRef) {
                selectedRouteIdRef.current = currentRouteId;
            }
        }
    } else {
        // Clear map if no route selected
        routeStopsMap = null;
        if (routeStopsMapRef) {
            routeStopsMapRef.current = null;
        }
        if (selectedRouteIdRef) {
            selectedRouteIdRef.current = null;
        }
    }

    return routeStopsMap;
}

async function createTransportStopsLayer({
    stopsList = [],
    map,
    zoom,
    onClick,
    ctx = null,
    routeStopsMapRef = null,
    selectedRouteIdRef = null,
}) {
    if (!stopsList || stopsList.length === 0) {
        return L.featureGroup();
    }

    const selectedRoute = ctx.selectedTransportRoute;
    const routeStopIds = selectedRoute?.stops || [];
    const routeColor = selectedRoute?.color || TRANSPORT_STOP_SHIELD_COLOR;

    // Before clustering: collect all route stops from stopsList
    const routeStopsMap = getRouteStopsMap({
        stopsList,
        selectedRoute,
        routeStopIds,
        routeStopsMapRef,
        selectedRouteIdRef,
    });

    const center = map.getCenter();
    const latitude = center.lat;
    let { mainMarkers, secondaryMarkers } = clusterMarkers({
        places: stopsList,
        zoom,
        latitude,
        iconSize: DEFAULT_ICON_SIZE,
        isPoi: true,
    });

    // After clustering: add route stops to mainMarkers if not present, remove from secondaryMarkers
    if (selectedRoute && routeStopIds.length > 0) {
        const mainMarkersStopIds = new Set((mainMarkers || []).map((stop) => stop.properties?.id));

        routeStopsMap.forEach((routeStop) => {
            const stopId = routeStop.properties?.id;
            if (stopId && !mainMarkersStopIds.has(stopId)) {
                mainMarkers = [...(mainMarkers || []), routeStop];
                mainMarkersStopIds.add(stopId);
            }
        });

        if (secondaryMarkers) {
            secondaryMarkers = secondaryMarkers.filter((stop) => {
                const stopId = stop.properties?.id;
                return !stopId || !routeStopIds.includes(stopId);
            });
        }
    }

    const iconSvg = await getTransportStopIcon();
    if (!iconSvg) {
        return L.featureGroup();
    }

    const getStopColor = (stopId) => {
        if (ctx.selectedTransportRoute && routeStopIds.length > 0 && stopId && routeStopIds.includes(stopId)) {
            return routeColor;
        }
        return TRANSPORT_STOP_SHIELD_COLOR;
    };

    const mainMarkersLayers = await Promise.all(
        mainMarkers?.map(async (stop) => {
            const stopColor = getStopColor(stop.properties.id);
            const iconHtml = createPoiIcon({
                color: stopColor,
                background: TRANSPORT_STOP_BACKGROUND,
                svgIcon: iconSvg,
                iconSize: TRANSPORT_STOP_ICON_SIZE,
            }).options.html;

            const icon = L.divIcon({ html: iconHtml, svg: iconSvg });
            const coord = stop.geometry.coordinates;
            const stopName = stop.properties.name;

            const marker = new L.Marker(new L.LatLng(coord[1], coord[0]), {
                ...stop.properties,
                idObj: stop.properties.id,
                name: stopName,
                icon,
                svg: iconSvg,
            });

            bindTooltipToMarker(marker, stopName, TRANSPORT_STOP_ICON_SIZE, true);

            if (onClick) {
                marker.on('click', onClick);
            }

            return marker;
        })
    );

    let simpleMarkersArr = new L.FeatureGroup();

    for (const place of secondaryMarkers) {
        const latlng = L.latLng(place.geometry.coordinates[1], place.geometry.coordinates[0]);
        const circle = new SimpleDotMarker(latlng, place, {
            ...place.properties,
            id: place.properties.id,
            idObj: getObjIdSearch(place),
            simple: true,
            fillColor: TRANSPORT_STOP_SHIELD_COLOR,
        }).build();
        if (circle) {
            const stopName = place.properties.name;
            bindTooltipToMarker(circle, stopName, TRANSPORT_STOP_ICON_SIZE, false);
            if (onClick) {
                circle.on('click', onClick);
            }
            simpleMarkersArr.addLayer(circle);
        }
    }

    const layers = [...mainMarkersLayers, ...simpleMarkersArr.getLayers()];

    if (layers.length) {
        return L.featureGroup(layers, {
            id: TRANSPORT_STOPS_LAYER_ID,
        });
    } else {
        return L.featureGroup();
    }
}

export function navigateToStop(stop, navigate) {
    if (!stop || !stop.options || !stop.latlng) return;

    const stopId = stop.options.id;
    const lat = stop.latlng.lat;
    const lng = stop.latlng.lng;

    if (!stopId || lat == null || lng == null) return;

    const pin = `${lat.toFixed(6)},${lng.toFixed(6)}`;
    const search = new URLSearchParams();
    search.append('id', stopId.toString());
    search.append('pin', pin);

    navigate({
        pathname: MAIN_URL_WITH_SLASH + STOP_URL,
        search: `?${search}`,
        hash: globalThis.location.hash,
    });
}

const TransportStopsLayer = () => {
    const ctx = useContext(AppContext);
    const map = useMap();
    const navigate = useNavigate();

    const reqIdRef = useRef(0);

    const [prevZoom, setPrevZoom] = useState(null);
    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);
    const [move, setMove] = useState(false);

    const [stopsData, setStopsData] = useState({
        layer: null,
        listFeatures: null,
    });
    const [prevController, setPrevController] = useState(false);
    const [useLimit, setUseLimit] = useState(false);
    const [transportRouteLines, setTransportRouteLines] = useState([]);

    const routeStopsMapRef = useRef(null);
    const selectedRouteIdRef = useRef(null);

    useZoomMoveMapHandlers(map, setZoom, setMove);

    async function createStopMarker(stopData) {
        const iconSvg = await getTransportStopIcon();
        if (!iconSvg) {
            return null;
        }

        const coord = stopData.geometry.coordinates;
        const stopName = stopData.properties.name;

        const iconHtml = createPoiIcon({
            color: TRANSPORT_STOP_SHIELD_COLOR,
            background: TRANSPORT_STOP_BACKGROUND,
            svgIcon: iconSvg,
            iconSize: TRANSPORT_STOP_ICON_SIZE,
        }).options.html;

        const icon = L.divIcon({ html: iconHtml, svg: iconSvg });

        const marker = new L.Marker(new L.LatLng(coord[1], coord[0]), {
            ...stopData.properties,
            idObj: stopData.properties.id,
            name: stopName,
            icon,
            svg: iconSvg,
        });

        bindTooltipToMarker(marker, stopName, TRANSPORT_STOP_ICON_SIZE, true);

        return L.featureGroup([marker]);
    }

    async function openStopByUrl() {
        const { id, pin } = ctx.stopByUrl.params;

        if (!id || !pin) {
            return null;
        }

        const coords = pin.split(',');
        if (coords.length !== 2) {
            return;
        }
        const lat = Number.parseFloat(coords[0]);
        const lon = Number.parseFloat(coords[1]);
        if (Number.isNaN(lat) || Number.isNaN(lon)) {
            return;
        }
        const params = {
            lat,
            lon,
            stopId: id,
        };
        const cleanParams = Object.fromEntries(Object.entries(params).filter(([, v]) => v != null && v !== ''));

        const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/get-transport-stop`, {
            params: cleanParams,
            apiCache: true,
        });

        if (response?.data) {
            const data = response.data;
            const stop = {
                mapObj: true,
                options: { ...data.properties },
                latlng: {
                    lat: data.geometry.coordinates[1],
                    lng: data.geometry.coordinates[0],
                },
            };

            ctx.setCurrentObjectType(OBJECT_TYPE_STOP);
            ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');
            ctx.setSelectedWpt({ stop });
            return data;
        }
        return null;
    }

    useEffect(() => {
        if (ctx.stopByUrl?.params) {
            openStopByUrl().then(async (res) => {
                let stopLayer = null;
                if (res) {
                    stopLayer = await createStopMarker(res);
                    // remove old stop marker
                    if (ctx.stopByUrl.layer) {
                        map.removeLayer(ctx.stopByUrl.layer);
                    }
                    if (stopLayer) {
                        map.addLayer(stopLayer);
                    }
                }
                ctx.setStopByUrl({
                    params: null,
                    layer: stopLayer,
                    open: true,
                });
                ctx.setProcessingStopByUrl(false);
            });
        } else if (ctx.stopByUrl?.layer && !ctx.stopByUrl?.open) {
            map.removeLayer(ctx.stopByUrl.layer);
            ctx.setStopByUrl(null);
            ctx.setProcessingStopByUrl(false);
        }
    }, [ctx.stopByUrl]);

    function onClick(e) {
        const lat = e.latlng?.lat ?? e.sourceTarget?._latlng?.lat;
        const lon = e.latlng?.lng ?? e.sourceTarget?._latlng?.lng;

        if (lat && lon) {
            const stop = {
                mapObj: true,
                options: e.sourceTarget.options,
                latlng: e.sourceTarget._latlng,
            };

            // Check if clicked stop belongs to selected route
            if (ctx.selectedTransportRoute?.stops?.length > 0) {
                const stopId = e.sourceTarget.options?.id;
                const routeStopIds = ctx.selectedTransportRoute.stops;

                // If clicked stop is not in route stops, clear the route
                if (!stopId || !routeStopIds.includes(stopId)) {
                    ctx.setSelectedTransportRoute(null);
                }
            }

            ctx.setSelectedWpt({ stop });

            navigateToStop(stop, navigate);
        }
    }

    async function getTransportStops(controller, bbox) {
        const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/search-transport-stops`, {
            apiCache: true,
            params: {
                northWest: `${bbox.getNorthWest().lat.toFixed(5)},${bbox.getNorthWest().lng.toFixed(5)}`,
                southEast: `${bbox.getSouthEast().lat.toFixed(5)},${bbox.getSouthEast().lng.toFixed(5)}`,
            },
            signal: controller.signal,
        });

        if (response?.data) {
            return response.data;
        }
        return null;
    }

    useEffect(() => {
        if (!ctx.configureMapState.showTransportStops || map.getZoom() < MIN_ZOOM_FOR_STOPS) {
            removeTransportStopsLayer();
            return;
        }

        let ignore = false;
        let controller = new AbortController();

        const debouncedGetTransportStops = debounce(async ({ controller, ignore, zoom, reqId }) => {
            const bbox = getVisibleBbox(map, ctx);
            if (!bbox) {
                return;
            }

            try {
                const res = await getTransportStops(controller, bbox);
                if (reqId !== reqIdRef.current || ignore) {
                    return;
                }

                if (res?.features?.features?.length > 0) {
                    const stopsList = res.features.features;

                    const layer = await createTransportStopsLayer({
                        stopsList,
                        map,
                        zoom,
                        onClick,
                        ctx,
                        routeStopsMapRef,
                        selectedRouteIdRef,
                    });

                    updateLayerOnMap(layer);

                    const newStopsData = {
                        layer,
                        listFeatures: res.features,
                    };
                    setStopsData(newStopsData);
                    setUseLimit(res.useLimit);
                } else {
                    updateLayerOnMap(null);
                    setStopsData({ layer: null, listFeatures: null });
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Failed to load transport stops:', error);
                }
            }
        }, 1000);

        function allStopsFound(zoomVal, prevZoomVal) {
            return prevZoomVal && zoomVal > prevZoomVal && !useLimit;
        }

        async function loadTransportStops() {
            const hasData = !!stopsData?.listFeatures?.features?.length;
            const shouldRequest = move || !hasData || (!allStopsFound(zoom, prevZoom) && zoom !== prevZoom);

            if (shouldRequest) {
                if (prevController) {
                    prevController.abort();
                }
                setPrevController(controller);
                setPrevZoom(zoom);

                reqIdRef.current += 1;
                debouncedGetTransportStops({ controller, ignore, zoom, reqId: reqIdRef.current });
            } else if (hasData) {
                const layer = await createTransportStopsLayer({
                    stopsList: stopsData.listFeatures.features,
                    map,
                    zoom,
                    onClick,
                    ctx,
                    routeStopsMapRef,
                    selectedRouteIdRef,
                });

                updateLayerOnMap(layer);

                const newStopsData = {
                    layer,
                    listFeatures: stopsData.listFeatures,
                };
                setStopsData(newStopsData);
            }
        }

        loadTransportStops();

        return () => {
            ignore = true;
            controller.abort();
        };
    }, [zoom, move, ctx.configureMapState.showTransportStops, ctx.selectedTransportRoute]);

    useEffect(() => {
        if (!move) {
            return;
        }
        setMove(false);
    }, [stopsData]);

    function removeTransportStopsLayer() {
        updateLayerOnMap(null);
        setStopsData({ layer: null, listFeatures: null });
        setMove(false);
    }

    function updateLayerOnMap(newLayer) {
        const existing = findFeatureGroupById(map, TRANSPORT_STOPS_LAYER_ID);
        if (existing) {
            map.removeLayer(existing);
        }
        if (newLayer && !map.hasLayer(newLayer)) {
            newLayer.addTo(map);
        }
    }

    useEffect(() => {
        if (!ctx.selectedTransportRoute) {
            transportRouteLines.forEach((line) => {
                if (map.hasLayer(line)) {
                    map.removeLayer(line);
                }
            });
            setTransportRouteLines([]);
            return;
        }

        const routeData = ctx.selectedTransportRoute;
        if (!routeData.nodes || routeData.nodes.length === 0) {
            return;
        }

        // Remove old lines
        transportRouteLines.forEach((line) => {
            if (map.hasLayer(line)) {
                map.removeLayer(line);
            }
        });

        const routeColor = routeData.color;
        const newLines = [];

        routeData.nodes.forEach((segment) => {
            if (!segment || segment.length === 0) {
                return;
            }
            const coords = segment.map((node) => [node.latitude, node.longitude]);

            const polyline = new L.Polyline(coords, {
                color: routeColor,
                weight: 4,
                opacity: 0.8,
            });

            polyline.addTo(map);
            newLines.push(polyline);
        });

        setTransportRouteLines(newLines);

        return () => {
            newLines.forEach((line) => {
                if (map.hasLayer(line)) {
                    map.removeLayer(line);
                }
            });
        };
    }, [ctx.selectedTransportRoute]);
};

export default TransportStopsLayer;
