import { useContext, useEffect, useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
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
import { MENU_INFO_OPEN_SIZE } from '../../manager/GlobalManager';

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

async function createTransportStopsLayer({ stopsList = [], map, zoom, onClick }) {
    if (!stopsList || stopsList.length === 0) {
        return L.featureGroup();
    }

    const center = map.getCenter();
    const latitude = center.lat;
    const { mainMarkers, secondaryMarkers } = clusterMarkers({
        places: stopsList,
        zoom,
        latitude,
        iconSize: DEFAULT_ICON_SIZE,
        isPoi: true,
    });

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
                idObj: getObjIdSearch(stop),
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

const TransportStopsLayer = () => {
    const ctx = useContext(AppContext);
    const map = useMap();

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

    useZoomMoveMapHandlers(map, setZoom, setMove);

    function onClick(e) {
        const lat = e.latlng?.lat ?? e.sourceTarget?._latlng?.lat;
        const lon = e.latlng?.lng ?? e.sourceTarget?._latlng?.lng;

        if (lat && lon) {
            const stop = {
                mapObj: true,
                options: e.sourceTarget.options,
                latlng: e.sourceTarget._latlng,
            };
            ctx.setCurrentObjectType(OBJECT_TYPE_STOP);
            ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');
            ctx.setSelectedWpt({ stop });
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
    }, [zoom, move, ctx.configureMapState.showTransportStops]);

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

    return null;
};

export default TransportStopsLayer;
