import { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_TYPE_TRAVEL, TRAVEL_ROUTE_ID_PARAM } from '../../context/AppContext';
import TravelContext from '../../context/TravelContext';
import MapContext from '../../context/MapContext';
import { applyZoomToFit } from '../util/MapManager';
import { useMap } from 'react-leaflet';
import { useUpdateQueryParam } from '../../util/hooks/menu/useUpdateQueryParam';
import { apiGet, apiPost } from '../../util/HttpApi';
import L from 'leaflet';
import { ACTIVITY_ALL, ALL_ACTIVITY_IDS, OSM_GPX_ABORT_KEYS, routeMatchesFilters } from '../../menu/travel/TravelMenu';
import TracksManager, { addDistance, getTrackPoints } from '../../manager/track/TracksManager';
import TrackLayerProvider from '../util/TrackLayerProvider';
import { clusterMarkers } from '../util/Clusterizer';
import { decodeSimplifiedGeometry } from '../../util/decodeSimplifiedGeometry';
import { SimpleDotMarker } from '../markers/SimpleDotMarker';
import MarkerOptions from '../markers/MarkerOptions';
import { getActivityColor } from '../util/activities';
import isEmpty from 'lodash-es/isEmpty';
import { GPX } from '../../manager/GlobalManager';
import { ensureLeafletPane } from './MvtHybridDemo';
import { TRAVEL_SEARCH_PANE_Z_INDEX } from '../util/ZIndexes';

const ROUTE_GPX_DATA = 'gpx_data';
const SEARCH_RADIUS_PX = 20;
const SEARCH_MAX_RADIUS_M = 1000;
const SEARCH_CURSOR_CLASS = 'travel-search-cursor';
const SEARCH_CIRCLE_CLASS = 'travel-search-circle';
const SEARCH_PANE = 'travelSearchPane';

function buildOsmPopupHtml({ id, name, user }) {
    let html = '';
    if (name) {
        html += name;
    }
    if (user && id !== undefined && id !== null) {
        const encodedUser = encodeURIComponent(user);
        const url = `https://www.openstreetmap.org/user/${encodedUser}/traces/${id}`;
        if (html) {
            html += '<br/>';
        }
        html += `<a href="${url}" target="_blank" rel="noopener noreferrer">Open in OpenStreetMap</a>`;
    }
    return html;
}

function attachAutoClosePopup(layer, html, offset) {
    if (!html) {
        return;
    }
    layer.bindPopup(html, {
        offset,
        closeButton: false,
        autoPan: false,
    });
    let closeTimeout = null;
    layer.on('mouseover', () => {
        if (closeTimeout) {
            clearTimeout(closeTimeout);
            closeTimeout = null;
        }
        layer.openPopup();
    });
    layer.on('mouseout', () => {
        if (closeTimeout) {
            clearTimeout(closeTimeout);
        }
        closeTimeout = setTimeout(() => {
            layer.closePopup();
            closeTimeout = null;
        }, 1000);
    });
}

function startFinishMarkers(coords, options = {}) {
    if (!coords || coords.length === 0) {
        return [];
    }
    const markers = [new L.Marker(coords[0], { ...options, icon: MarkerOptions.options.trackStart })];
    if (coords.length > 1) {
        markers.push(new L.Marker(coords[coords.length - 1], { ...options, icon: MarkerOptions.options.trackEnd }));
    }

    return markers;
}

// bounds of a decoded geometry (array of segments of { latitude, longitude })
function boundsFromGeo(geo) {
    const latlngs = [];
    geo?.forEach((segment) => segment.forEach((p) => latlngs.push([p.latitude, p.longitude])));
    return latlngs.length > 0 ? L.latLngBounds(latlngs) : null;
}

function decodeRoutesGeometry(featureCollection) {
    const features = featureCollection?.features;
    if (!features) {
        return;
    }
    features.forEach((route) => {
        const props = route.properties;
        if (props && !props.geo && props.geo_b64) {
            try {
                props.geo = decodeSimplifiedGeometry(props.geo_b64);
            } catch (e) {
                console.warn(`Failed to decode geometry for route ${props.id}`, e);
            }
        }
    });
}

export function isTravelSearchOn(map) {
    return L.DomUtil.hasClass(map.getContainer(), SEARCH_CURSOR_CLASS);
}

export default function TravelLayer() {
    const ctx = useContext(AppContext);
    const ttx = useContext(TravelContext);
    const mtx = useContext(MapContext);
    const map = useMap();

    const { updateQueryParam } = useUpdateQueryParam();

    const [travelRoutes, setTravelRoutes] = useState(null);
    const [travelPoints, setTravelPoints] = useState(null);
    const [travelStartFinish, setTravelStartFinish] = useState(null);
    const selectedRouteLayerRef = useRef(null);

    const SELECTED_ROUTE_COLOR = '#f8931d';
    const HOVER_HALO_COLOR = '#ffffff';
    const ROUTE_WIDTH = 3;
    const HOVER_ROUTE_WIDTH = 5;
    const HOVER_HALO_WIDTH = 11;
    const OPENED_TRACK_WIDTH = 6;
    const POINT_RADIUS = 6;

    useEffect(() => {
        if (!ttx.searchTravelRoutes) {
            return;
        }
        if (ttx.searchTravelRoutes.clear) {
            removeRouteLayers();
            return;
        }
        if (ttx.searchTravelRoutes.res) {
            const features = ttx.searchTravelRoutes.res.features;
            if (!features) {
                return;
            }

            removeRouteLayers();

            const routeLayers = [];
            const startFinishLayers = [];
            const pointFeatures = [];

            const shown = features.filter((route) => routeMatchesFilters(route, ttx.searchTravelRoutes));
            shown.forEach((route) => {
                if (route.properties.geo) {
                    const segments = route.properties.geo.map((segment) =>
                        segment.map((point) => [point.latitude, point.longitude])
                    );
                    const isOpened =
                        ctx.selectedGpxFile?.id != null &&
                        String(ctx.selectedGpxFile.id) === String(route.properties.id);
                    segments.forEach((segment) => {
                        if (segment.length < 2) {
                            return;
                        }
                        const color = getActivityColor(route.properties.activity);
                        const polyline = new L.Polyline(segment, {
                            color,
                            weight: isOpened ? OPENED_TRACK_WIDTH : ROUTE_WIDTH,
                            opacity: isOpened && selectedRouteLayerRef.current ? 0 : 1,
                            id: route.properties.id,
                            baseColor: color,
                        });
                        polyline.on('click', (e) => {
                            L.DomEvent.stopPropagation(e);
                            ttx.setSelectedTravelRoute({ route, show: true });
                            updateQueryParam({
                                key: TRAVEL_ROUTE_ID_PARAM,
                                value: String(route.properties.id),
                                replace: false,
                            });
                        });
                        polyline.on('mouseover', () => {
                            ttx.setSelectedTravelRoute({ route, hover: true });
                        });
                        polyline.on('mouseout', () => {
                            ttx.setSelectedTravelRoute({ route, hover: false });
                        });
                        routeLayers.push(polyline);
                    });
                    if (!isOpened) {
                        startFinishLayers.push(...startFinishMarkers(segments.flat()));
                    }
                } else if (route.properties.point) {
                    pointFeatures.push(route);
                }
            });

            if (routeLayers.length > 0) {
                const layersGroup = new L.FeatureGroup(routeLayers);
                setTravelRoutes(layersGroup);
                layersGroup.addTo(map);
            } else if (travelRoutes) {
                map.removeLayer(travelRoutes);
                setTravelRoutes(null);
            }

            setTravelStartFinish(startFinishLayers.length > 0 ? new L.FeatureGroup(startFinishLayers) : null);

            if (pointFeatures.length > 0) {
                const places = pointFeatures.map((route, index) => {
                    const point = route.properties.point;
                    return {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [point.lon, point.lat],
                        },
                        properties: {
                            ...route.properties,
                            index,
                        },
                    };
                });

                const zoom = map.getZoom();
                const center = map.getCenter();
                const { mainMarkers, secondaryMarkers } = clusterMarkers({
                    places,
                    zoom,
                    latitude: center.lat,
                    mainRadiusPx: 8,
                    secondaryRadiusPx: 4,
                    isPoi: true,
                });

                const markers = [];

                function createMarker(place) {
                    const [lon, lat] = place.geometry.coordinates;
                    const marker = new SimpleDotMarker(L.latLng(lat, lon), place, {
                        radius: POINT_RADIUS,
                        weight: 1,
                        fillColor: getActivityColor(place.properties.activity),
                    }).build();
                    const id = place.properties.id;
                    const html = buildOsmPopupHtml({
                        id,
                        name: place.properties.name || '',
                        user: place.properties.user,
                    });
                    attachAutoClosePopup(marker, html, [0, -POINT_RADIUS]);
                    marker.on('click', () => {
                        ttx.setSelectedTravelRoute({ route: { properties: place.properties }, show: true });
                        updateQueryParam({ key: TRAVEL_ROUTE_ID_PARAM, value: String(id), replace: false });
                    });
                    markers.push(marker);
                }

                mainMarkers.forEach(createMarker);
                secondaryMarkers.forEach(createMarker);

                if (markers.length > 0) {
                    const markersGroup = new L.FeatureGroup(markers);
                    setTravelPoints(markersGroup);
                    markersGroup.addTo(map);
                }
            } else if (travelPoints) {
                map.removeLayer(travelPoints);
                setTravelPoints(null);
            }
        } else {
            if (ttx.searchTravelRoutes.res !== null) {
                loadRoutes();
            }
            removeRouteLayers();
        }
    }, [ttx.searchTravelRoutes]);

    function removeRouteLayers() {
        [travelRoutes, travelPoints, travelStartFinish].filter(Boolean).forEach((group) => map.removeLayer(group));
        setTravelRoutes(null);
        setTravelPoints(null);
        setTravelStartFinish(null);
    }

    useEffect(() => {
        if (!ttx.openTravel) {
            return;
        }
        const container = map.getContainer();
        const searchHere = (e) => setSearchPoint(e.latlng);
        L.DomUtil.addClass(container, SEARCH_CURSOR_CLASS);
        map.on('click', searchHere);

        return () => {
            map.off('click', searchHere);
            L.DomUtil.removeClass(container, SEARCH_CURSOR_CLASS);
        };
    }, [ttx.openTravel]);

    useEffect(() => {
        const { point } = ttx.searchTravelRoutes ?? {};
        if (!point || !ttx.openTravel) {
            return;
        }
        ensureLeafletPane(map, SEARCH_PANE, TRAVEL_SEARCH_PANE_Z_INDEX);
        const circle = L.circle([point.lat, point.lng], {
            pane: SEARCH_PANE,
            radius: point.radius,
            color: SELECTED_ROUTE_COLOR,
            weight: 2,
            dashArray: '4 4',
            fillOpacity: 0.3,
            interactive: false,
        }).addTo(map);

        const container = map.getContainer();
        const isInside = (latlng) => map.distance(latlng, circle.getLatLng()) <= point.radius;
        // over the circle the tracks ignore the mouse: it belongs to the circle
        const onHover = (e) => container.classList.toggle(SEARCH_CIRCLE_CLASS, isInside(e.latlng));
        // pressed inside the circle and moved: the circle follows the mouse instead of the map
        let moved = false;
        const onMove = (e) => {
            moved = true;
            circle.setLatLng(e.latlng);
        };
        const onUp = () => {
            map.off('mousemove', onMove);
            L.DomEvent.off(document, 'mouseup', onUp);
            map.dragging.enable();
            if (moved) {
                swallowNextClick(container);
                setSearchPoint(circle.getLatLng(), point.radius);
            }
        };
        const onDown = (e) => {
            if (!isInside(e.latlng)) {
                return;
            }
            moved = false;
            map.dragging.disable();
            map.on('mousemove', onMove);
            L.DomEvent.on(document, 'mouseup', onUp);
        };
        map.on('mousemove', onHover);
        map.on('mousedown', onDown);

        return () => {
            map.off('mousemove', onHover);
            map.off('mousedown', onDown);
            map.off('mousemove', onMove);
            L.DomEvent.off(document, 'mouseup', onUp);
            L.DomUtil.removeClass(container, SEARCH_CIRCLE_CLASS);
            map.dragging.enable();
            map.removeLayer(circle);
        };
    }, [ttx.searchTravelRoutes?.point, ttx.openTravel]);

    function setSearchPoint(latlng, radius = searchRadiusM(map, latlng)) {
        const point = { lat: latlng.lat, lng: latlng.lng, radius };
        ttx.setSearchTravelRoutes((prev) => (prev && !prev.clear ? { ...prev, point, res: undefined } : prev));
    }

    function loadRoutes() {
        if (ttx.searchTravelRoutes.point) {
            getRoutesList().then();
        } else {
            ttx.setSearchTravelRoutes((prev) => (prev.res === null ? prev : { ...prev, res: null }));
        }
    }

    // remove the opened track's detailed overlay (line + waypoints) from the map
    function removeSelectedRouteLayers() {
        if (selectedRouteLayerRef.current) {
            map.removeLayer(selectedRouteLayerRef.current);
            selectedRouteLayerRef.current = null;
        }
    }

    function createRoutePolyline(route, fit = true) {
        if (!route.properties?.geo && route.track?.[ROUTE_GPX_DATA]) {
            const track = route.track[ROUTE_GPX_DATA];
            const points = getTrackPoints(track);
            if (points?.length > 0) {
                removeSelectedRouteLayers();

                const coords = points.map((point) => [point.lat, point.lng]);
                const geo = [];
                let currentSegment = [];
                points.forEach((point) => {
                    if (point.profile === TracksManager.PROFILE_GAP && currentSegment.length > 0) {
                        geo.push(currentSegment);
                        currentSegment = [];
                    } else {
                        currentSegment.push({
                            latitude: point.lat,
                            longitude: point.lng,
                        });
                    }
                });
                if (currentSegment.length > 0) {
                    geo.push(currentSegment);
                }
                route.properties.geo = geo;
                const segments = geo.map((segment) => segment.map((point) => [point.latitude, point.longitude]));
                const halos = segments.map(
                    (segment) =>
                        new L.Polyline(segment, {
                            color: HOVER_HALO_COLOR,
                            weight: HOVER_HALO_WIDTH,
                            opacity: 0.9,
                            interactive: false,
                        })
                );
                const polylines = segments.map((segment) =>
                    new L.Polyline(segment, {
                        color: SELECTED_ROUTE_COLOR,
                        weight: OPENED_TRACK_WIDTH,
                        id: route.properties.id,
                    }).on('click', L.DomEvent.stopPropagation)
                );

                // the detailed line, its start/finish and waypoints live in one group, added/removed together
                const layers = [...halos, ...polylines, ...startFinishMarkers(coords)];
                if (track.wpts?.length > 0) {
                    // waypoints as interactive markers, same as cloud tracks
                    TrackLayerProvider.parseWpt({ points: track.wpts, layers, ctx, data: track, map });
                }
                selectedRouteLayerRef.current = new L.FeatureGroup(layers);
                selectedRouteLayerRef.current.addTo(map);

                // fit the whole track into view; restoreMapView() (on menu close) returns to the previous bbox.
                // Skipped when we already fitted early using the simplified geometry.
                const bounds = L.latLngBounds(coords);
                if (fit && bounds?.isValid()) {
                    applyZoomToFit({ map, mtx, bounds });
                }
            }
        }
    }

    async function openInfoBlock(id, meta = null) {
        if (!id) return;

        // 1) show the menu right away with what we already have (from the list/map item)
        let props = meta;
        if (!props) {
            const infoResp = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/get-route-info`, {
                apiCache: true,
                params: { id },
                abortControllerKey: OSM_GPX_ABORT_KEYS.routeInfo,
            });
            if (infoResp?.aborted) {
                return;
            }
            props = infoResp?.data || {};
        }
        const desc = (props.description || '').trim();
        ctx.setCurrentObjectType(OBJECT_TYPE_TRAVEL);
        ctx.setSelectedGpxFile({
            id,
            name: desc,
            description: desc,
            date: props.date,
            user: props.user,
            activity: props.activity,
            tags: props.tags,
            type: GPX,
        });
        ctx.setUpdateInfoBlock(true);

        let fitted = false;
        const earlyBounds = boundsFromGeo(props.geo);
        if (earlyBounds?.isValid()) {
            applyZoomToFit({ map, mtx, bounds: earlyBounds });
            fitted = true;
        }

        // 2) load the detailed track (geometry + analysis) and fill it in
        const response = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/get-osm-route`, {
            apiCache: true,
            params: { id },
            abortControllerKey: OSM_GPX_ABORT_KEYS.osmRoute,
        });
        if (response?.aborted) {
            return;
        }
        if (!response?.data) {
            // couldn't read the track (e.g. error tracks) — keep the metadata already shown, no error
            return;
        }
        const route = createRoute(response.data);
        route.track = response.data;
        const track = route.track[ROUTE_GPX_DATA];
        addDistance(track);
        route.properties.activity = props.activity;
        const fullDesc = (props.description || track?.metaData?.desc || '').trim();
        ctx.setSelectedGpxFile({
            ...track,
            id,
            name: fullDesc,
            description: fullDesc,
            date: props.date,
            user: props.user,
            activity: props.activity,
            tags: props.tags,
            type: GPX,
        });
        ctx.setUpdateInfoBlock(true);
        createRoutePolyline(route, !fitted);
    }

    // Open route by URL param
    useEffect(() => {
        const id = ttx.travelRouteIdByUrl;
        if (!id || !ttx.processingTravelRouteByUrl) {
            return;
        }

        if (String(ctx.selectedGpxFile?.id) === String(id)) {
            ttx.setProcessingTravelRouteByUrl(false);
            return;
        }

        openInfoBlock(id, ttx.selectedTravelRoute?.route?.properties)
            .catch((e) => console.error('Failed to open travel route', e))
            .finally(() => ttx.setProcessingTravelRouteByUrl(false));
    }, [ttx.processingTravelRouteByUrl, ttx.travelRouteIdByUrl]);

    function createRoute(data) {
        if (!data?.[ROUTE_GPX_DATA]) {
            return null;
        }

        return {
            properties: {
                id: Number(data.id),
                name: data.name ?? '',
                description: data.description ?? '',
                date: data.date ?? '',
                user: data.user ?? '',
            },
            track: data,
        };
    }

    useEffect(() => {
        if (isEmpty(ctx.selectedGpxFile)) {
            removeSelectedRouteLayers();
            ttx.setTravelRoutesHidden(false);
            travelRoutes?.getLayers().forEach((layer) => {
                layer.setStyle({ color: layer.options.baseColor, weight: ROUTE_WIDTH, opacity: 1 });
            });
        } else if (ctx.selectedGpxFile?.id != null && travelRoutes) {
            const trackId = String(ctx.selectedGpxFile.id);
            const detailedReady = !!selectedRouteLayerRef.current;
            travelRoutes.getLayers().forEach((layer) => {
                if (String(layer.options.id) === trackId) {
                    layer.setStyle(
                        detailedReady ? { opacity: 0 } : { color: SELECTED_ROUTE_COLOR, weight: OPENED_TRACK_WIDTH }
                    );
                    if (!detailedReady) {
                        layer.bringToFront();
                    }
                } else {
                    layer.setStyle({ color: layer.options.baseColor, weight: ROUTE_WIDTH, opacity: 0.35 });
                }
            });
        }
    }, [ctx.selectedGpxFile, travelRoutes]);

    // visibility of the other tracks on the map
    useEffect(() => {
        const setVisible = (group, visible) => {
            if (!group) return;
            if (visible && !map.hasLayer(group)) {
                group.addTo(map);
            } else if (!visible && map.hasLayer(group)) {
                map.removeLayer(group);
            }
        };
        const showOthers = ttx.openTravel && !ttx.travelRoutesHidden;
        setVisible(travelRoutes, showOthers);
        setVisible(travelPoints, showOthers);
        setVisible(travelStartFinish, showOthers && ttx.travelShowStartFinish);
    }, [
        ttx.openTravel,
        ttx.travelRoutesHidden,
        ttx.travelShowStartFinish,
        travelRoutes,
        travelPoints,
        travelStartFinish,
    ]);

    // manage selected route layer
    useEffect(() => {
        if (ttx.selectedTravelRoute?.show) {
            // the map is fitted to the whole track after it loads (see createRoutePolyline)
        } else if (ttx.selectedTravelRoute?.hover === undefined && selectedRouteLayerRef.current) {
            removeSelectedRouteLayers();
        }
    }, [ttx.selectedTravelRoute]);

    useEffect(() => {
        const { route, hover } = ttx.selectedTravelRoute ?? {};
        if (!hover || !route?.properties?.geo) {
            return;
        }
        const segments = route.properties.geo.map((segment) => segment.map((p) => [p.latitude, p.longitude]));
        const highlight = new L.FeatureGroup([
            ...segments.map(
                (segment) =>
                    new L.Polyline(segment, {
                        color: HOVER_HALO_COLOR,
                        weight: HOVER_HALO_WIDTH,
                        opacity: 0.9,
                        interactive: false,
                    })
            ),
            ...segments.map(
                (segment) =>
                    new L.Polyline(segment, {
                        color: SELECTED_ROUTE_COLOR,
                        weight: HOVER_ROUTE_WIDTH,
                        interactive: false,
                    })
            ),
            // the 60 px icon box would take the mouse from the track and hide the highlight again and again
            ...startFinishMarkers(segments.flat(), { interactive: false }),
        ]).addTo(map);

        return () => {
            map.removeLayer(highlight);
        };
    }, [ttx.selectedTravelRoute]);

    async function getRoutesList() {
        const { point } = ttx.searchTravelRoutes;
        const { activity, dateFrom, dateTo } = ttx.searchTravelRoutes;

        const activityArr = activity === ACTIVITY_ALL ? ALL_ACTIVITY_IDS : activity;

        const body = {
            activityArr,
            dateFrom,
            dateTo,
            lat: point.lat,
            lon: point.lng,
            radius: point.radius,
        };

        const response = await apiPost(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/get-routes-list`, body, {
            apiCache: true,
            abortControllerKey: OSM_GPX_ABORT_KEYS.routesList,
        });

        if (response?.aborted) {
            return;
        }
        if (response?.data) {
            decodeRoutesGeometry(response.data);
        }
        // the point may have been removed or moved while the tracks were loading
        ttx.setSearchTravelRoutes((prev) => (prev.point === point ? { ...prev, res: response?.data ?? null } : prev));
    }
}

function searchRadiusM(map, latlng) {
    const edge = map.containerPointToLatLng(map.latLngToContainerPoint(latlng).add([SEARCH_RADIUS_PX, 0]));

    return Math.min(SEARCH_MAX_RADIUS_M, map.distance(latlng, edge));
}

// the click that ends a drag must not open the track under the mouse; dropped on that click or the next press
function swallowNextClick(container) {
    const stop = (e) => {
        e.stopPropagation();
        release();
    };
    const release = () => {
        container.removeEventListener('click', stop, true);
        container.removeEventListener('mousedown', release, true);
    };
    container.addEventListener('click', stop, true);
    container.addEventListener('mousedown', release, true);
}
