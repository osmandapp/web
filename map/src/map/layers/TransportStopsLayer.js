import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import AppContext, { OBJECT_TYPE_STOP } from '../../context/AppContext';
import { apiGet } from '../../util/HttpApi';
import {
    getVisibleBbox,
    findFeatureGroupById,
    bindTooltipToMarker,
    createTooltip,
    TOOLTIP_MAX_LENGTH,
} from '../util/MapManager';
import L from 'leaflet';
import { changeIconColor, createPoiIcon, DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import { clusterMarkers, removeTooltip } from '../util/Clusterizer';
import Utils from '../../util/Utils';
import { SimpleDotMarker } from '../markers/SimpleDotMarker';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { useSelectMarkerOnMap } from '../../util/hooks/map/useSelectMarkerOnMap';
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

function bindHoverToLayer({ layer, stopId, stopName, latlng, mainStyle, map, ctx }) {
    const tooltipRef = ctx.searchTooltipRef;
    const offset = mainStyle ? [5, TRANSPORT_STOP_ICON_SIZE * 0.8] : [0, TRANSPORT_STOP_ICON_SIZE * 0.8];

    const isStopOutsideSelectedRoute = () => {
        const route = ctx.selectedTransportRoute;
        const routeMenuOpen = route && !route.isPreview;
        const ids = route?.stops?.map((s) => s.stopId) ?? [];
        return routeMenuOpen && !ids.includes(stopId);
    };

    layer.on('mouseover', () => {
        removeTooltip(map, tooltipRef);
        if (stopName) {
            tooltipRef.current = createTooltip(Utils.truncateText(stopName, TOOLTIP_MAX_LENGTH), latlng, { offset });
            map.addLayer(tooltipRef.current);
        }
        if (isStopOutsideSelectedRoute()) return;
        ctx.setSelectedWptId({
            id: stopId,
            show: true,
            type: TRANSPORT_STOPS_LAYER_ID,
            obj: layer,
            hoverFromMap: true,
        });
    });

    layer.on('mouseout', () => {
        removeTooltip(map, tooltipRef);
        if (isStopOutsideSelectedRoute()) return;
        ctx.setSelectedWptId((prev) => {
            if (prev?.type !== TRANSPORT_STOPS_LAYER_ID || prev?.id !== stopId) return prev;
            if (prev.fromClick) return prev;
            return { ...prev, show: false };
        });
    });
}

async function createTransportStopsLayer({ stopsList = [], map, zoom, onClick, ctx = null }) {
    if (!stopsList || stopsList.length === 0) {
        return L.featureGroup();
    }

    const selectedRoute = ctx.selectedTransportRoute;
    const routeStopIds = selectedRoute?.stops?.map((s) => s.stopId) ?? [];

    const center = map.getCenter();
    const latitude = center.lat;
    let { mainMarkers, secondaryMarkers } = clusterMarkers({
        places: stopsList,
        zoom,
        latitude,
        iconSize: DEFAULT_ICON_SIZE,
        isPoi: true,
    });

    // Route stops are drawn as a separate temporary layer — hide them from bbox layer to avoid duplicates
    if (selectedRoute && routeStopIds.length > 0) {
        mainMarkers = (mainMarkers || []).filter((s) => !routeStopIds.includes(s.properties?.id));
        secondaryMarkers = (secondaryMarkers || []).filter((s) => !routeStopIds.includes(s.properties?.id));
    }

    const iconSvg = await getTransportStopIcon();
    if (!iconSvg) {
        return L.featureGroup();
    }

    const mainMarkersLayers = await Promise.all(
        mainMarkers?.map(async (stop) => {
            const iconHtml = createPoiIcon({
                color: TRANSPORT_STOP_SHIELD_COLOR,
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
                color: TRANSPORT_STOP_SHIELD_COLOR,
                background: TRANSPORT_STOP_BACKGROUND,
            });

            if (onClick) {
                marker.on('click', onClick);
            }

            bindHoverToLayer({
                layer: marker,
                stopId: stop.properties.id,
                stopName,
                latlng: new L.LatLng(coord[1], coord[0]),
                mainStyle: true,
                map,
                ctx,
            });
            return marker;
        })
    );

    let simpleMarkersArr = new L.FeatureGroup();

    for (const place of secondaryMarkers) {
        const latlng = L.latLng(place.geometry.coordinates[1], place.geometry.coordinates[0]);
        const circle = new SimpleDotMarker(latlng, place, {
            ...place.properties,
            id: place.properties.id,
            idObj: place.properties.id,
            simple: true,
            fillColor: TRANSPORT_STOP_SHIELD_COLOR,
            svg: iconSvg,
            color: TRANSPORT_STOP_SHIELD_COLOR,
            background: TRANSPORT_STOP_BACKGROUND,
        }).build();
        if (circle) {
            if (onClick) {
                circle.on('click', onClick);
            }
            bindHoverToLayer({
                layer: circle,
                stopId: place.properties.id,
                stopName: place.properties.name,
                latlng,
                mainStyle: false,
                map,
                ctx,
            });
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
    if (!stop?.options || !stop.latlng) return;

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
    const selectedRouteIdRef = useRef(0);

    const transportLayerRef = useRef(null);

    useSelectMarkerOnMap({
        ctx,
        getLayers: useCallback(() => {
            const base = transportLayerRef.current?.getLayers() ?? [];
            const route = routeStopsMapRef.current?.getLayers() ?? [];
            const all = [...base, ...route];
            return all.length > 0 ? all : null;
        }, []),
        type: TRANSPORT_STOPS_LAYER_ID,
        map,
    });

    useZoomMoveMapHandlers(map, setZoom, setMove);

    useEffect(() => {
        if (ctx.currentObjectType !== OBJECT_TYPE_STOP) {
            ctx.setSelectedTransportRoute(null);
        }
    }, [ctx.currentObjectType]);

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
            const stopId = e.sourceTarget.options?.id ?? e.sourceTarget.options?.idObj;
            const route = ctx.selectedTransportRoute;
            const routeMenuOpen = route && !route.isPreview;
            const routeStopIds = route?.stops?.map((s) => s.stopId) ?? [];

            // Route menu open + click on a stop of this route → only highlight it in the list (same as hover, persistent until next click/hover)
            if (routeMenuOpen && stopId && routeStopIds.includes(stopId)) {
                ctx.setSelectedWptId({
                    id: stopId,
                    show: true,
                    type: TRANSPORT_STOPS_LAYER_ID,
                    obj: e.sourceTarget,
                    hoverFromMap: true,
                    fromClick: true,
                });
                return;
            }

            const stop = {
                mapObj: true,
                options: e.sourceTarget.options,
                latlng: e.sourceTarget._latlng,
            };

            // Check if clicked stop belongs to selected route
            if (route?.stops?.length > 0) {
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

        transportLayerRef.current = newLayer;

        if (newLayer && !map.hasLayer(newLayer)) {
            newLayer.addTo(map);
        }
    }

    useEffect(() => {
        function clearRouteStopMarkers() {
            if (routeStopsMapRef.current) {
                map.removeLayer(routeStopsMapRef.current);
                routeStopsMapRef.current = null;
            }
        }

        function clearLines() {
            transportRouteLines.forEach((line) => {
                if (map.hasLayer(line)) map.removeLayer(line);
            });
            setTransportRouteLines([]);
        }

        if (!ctx.selectedTransportRoute) {
            clearLines();
            clearRouteStopMarkers();
            return;
        }

        const routeData = ctx.selectedTransportRoute;
        if (!routeData.nodes || routeData.nodes.length === 0) {
            return;
        }

        clearLines();
        clearRouteStopMarkers();

        const routeColor = routeData.color;
        const newLines = [];

        routeData.nodes.forEach((segment) => {
            if (!segment || segment.length === 0) return;
            const coords = segment.map((node) => [node.latitude, node.longitude]);
            const polyline = new L.Polyline(coords, { color: routeColor, weight: 4, opacity: 0.8 });
            polyline.addTo(map);
            newLines.push(polyline);
        });

        setTransportRouteLines(newLines);

        // Draw markers for all route stops using stop.coords
        selectedRouteIdRef.current += 1;
        const drawId = selectedRouteIdRef.current;
        getTransportStopIcon().then((iconSvg) => {
            if (selectedRouteIdRef.current !== drawId || !iconSvg) return;
            const stops = routeData.stops ?? [];
            const group = L.featureGroup();
            stops.forEach((stop) => {
                const lat = stop.coords?.latitude;
                const lon = stop.coords?.longitude;
                if (lat == null || lon == null) return;
                const stopId = stop.stopId;
                const latlng = L.latLng(lat, lon);
                const iconHtml = createPoiIcon({
                    color: routeColor,
                    background: TRANSPORT_STOP_BACKGROUND,
                    svgIcon: iconSvg,
                    iconSize: TRANSPORT_STOP_ICON_SIZE,
                }).options.html;
                const marker = L.marker(latlng, {
                    icon: L.divIcon({ html: iconHtml }),
                    idObj: stopId,
                    id: stopId,
                    name: stop.name,
                    color: routeColor,
                    background: TRANSPORT_STOP_BACKGROUND,
                    svg: iconSvg,
                });
                bindHoverToLayer({ layer: marker, stopId, stopName: stop.name, latlng, mainStyle: true, map, ctx });
                marker.on('click', onClick);
                marker.addTo(group);
            });
            if (group.getLayers().length > 0) {
                group.addTo(map);
                routeStopsMapRef.current = group;
            }
        });

        return () => {
            selectedRouteIdRef.current += 1;
            newLines.forEach((line) => {
                if (map.hasLayer(line)) map.removeLayer(line);
            });
            clearRouteStopMarkers();
        };
    }, [ctx.selectedTransportRoute]);
};

export default TransportStopsLayer;
