import { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_TYPE_TRAVEL, TRAVEL_ROUTE_ID_PARAM } from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import { applyZoomToFit } from '../util/MapManager';
import { useMap } from 'react-leaflet';
import { useUpdateQueryParam } from '../../util/hooks/menu/useUpdateQueryParam';
import { apiGet, apiPost } from '../../util/HttpApi';
import L from 'leaflet';
import { ACTIVITY_ALL, ALL_YEARS, TAG_MATCH_MODES } from '../../menu/travel/TravelMenu';
import TracksManager, { addDistance, getTrackPoints } from '../../manager/track/TracksManager';
import TrackLayerProvider from '../util/TrackLayerProvider';
import { clusterMarkers } from '../util/Clusterizer';
import { decodeSimplifiedGeometry } from '../../util/decodeSimplifiedGeometry';
import { SimpleDotMarker } from '../markers/SimpleDotMarker';
import { getActivityColor } from '../util/activityColors';
import isEmpty from 'lodash-es/isEmpty';
import { GPX } from '../../manager/GlobalManager';

const ROUTE_GPX_DATA = 'gpx_data';

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
    features.sort((a, b) => (b.properties?.date ?? '').localeCompare(a.properties?.date ?? ''));
}

export default function TravelLayer() {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const map = useMap();

    const { updateQueryParam } = useUpdateQueryParam();

    const [travelRoutes, setTravelRoutes] = useState(null);
    const [travelPoints, setTravelPoints] = useState(null);
    const [selectedRouteId, setSelectedRouteId] = useState(null);
    const selectedRouteLayerRef = useRef(null);

    const SELECTED_ROUTE_COLOR = '#f8931d';
    const ROUTE_WIDTH = 3;
    const OPENED_TRACK_WIDTH = 6;
    const POINT_RADIUS = 6;

    useEffect(() => {
        if (!ctx.searchTravelRoutes) {
            return;
        }
        if (ctx.searchTravelRoutes.clear) {
            if (travelRoutes) {
                map.removeLayer(travelRoutes);
            }
            if (travelPoints) {
                map.removeLayer(travelPoints);
            }
            return;
        }
        if (ctx.searchTravelRoutes.res) {
            const features = ctx.searchTravelRoutes.res.features;
            if (!features) {
                return;
            }

            if (travelRoutes) {
                map.removeLayer(travelRoutes);
                setTravelRoutes(null);
            }
            if (travelPoints) {
                map.removeLayer(travelPoints);
                setTravelPoints(null);
            }

            const routeLayers = [];
            const pointFeatures = [];

            features.forEach((route) => {
                if (route.properties.geo) {
                    const segments = route.properties.geo.map((segment) =>
                        segment.map((point) => [point.latitude, point.longitude])
                    );
                    segments.forEach((segment) => {
                        if (segment.length < 2) {
                            return;
                        }
                        const color = getActivityColor(route.properties.activity);
                        const isOpened =
                            ctx.selectedGpxFile?.id != null &&
                            String(ctx.selectedGpxFile.id) === String(route.properties.id);
                        const polyline = new L.Polyline(segment, {
                            color,
                            weight: isOpened ? OPENED_TRACK_WIDTH : ROUTE_WIDTH,
                            opacity: isOpened && selectedRouteLayerRef.current ? 0 : 1,
                            id: route.properties.id,
                            baseColor: color,
                        });
                        const html = buildOsmPopupHtml({
                            id: route.properties.id,
                            name: route.properties.name || '',
                            user: route.properties.user,
                        });
                        attachAutoClosePopup(polyline, html, [0, 0]);
                        polyline.on('click', () => {
                            ctx.setSelectedTravelRoute({ route, show: true });
                            updateQueryParam({
                                key: TRAVEL_ROUTE_ID_PARAM,
                                value: String(route.properties.id),
                                replace: false,
                            });
                        });
                        polyline.on('mouseover', () => {
                            ctx.setSelectedTravelRoute({ route, hover: true });
                        });
                        polyline.on('mouseout', () => {
                            ctx.setSelectedTravelRoute({ route, hover: false });
                        });
                        routeLayers.push(polyline);
                    });
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
                    iconSize: 8,
                    secondaryIconSize: 4,
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
                        ctx.setSelectedTravelRoute({ route: { properties: place.properties }, show: true });
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
            if (ctx.searchTravelRoutes.res !== null) {
                getRoutesList().then();
            }
            if (travelRoutes) {
                map.removeLayer(travelRoutes);
            }
            if (travelPoints) {
                map.removeLayer(travelPoints);
            }
        }
    }, [ctx.searchTravelRoutes]);

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
                const polyline = new L.Polyline(coords, {
                    color: getActivityColor(route.properties.activity),
                    weight: OPENED_TRACK_WIDTH,
                    id: route.properties.id,
                });

                // the detailed line and its waypoints live in one group, added/removed together
                const layers = [polyline];
                if (track.wpts?.length > 0) {
                    // waypoints as interactive markers, same as cloud tracks
                    TrackLayerProvider.parseWpt({ points: track.wpts, layers, ctx, data: track, map });
                }
                selectedRouteLayerRef.current = new L.FeatureGroup(layers);
                selectedRouteLayerRef.current.addTo(map);

                // fit the whole track into view; restoreMapView() (on menu close) returns to the previous bbox.
                // Skipped when we already fitted early using the simplified geometry.
                const bounds = polyline.getBounds();
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
            });
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
        });
        if (!response?.data) {
            ctx.setNotification({ text: 'Failed to load route', severity: 'error' });
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
            type: GPX,
        });
        ctx.setUpdateInfoBlock(true);
        createRoutePolyline(route, !fitted);
    }

    // Open route by URL param
    useEffect(() => {
        const id = ctx.travelRouteIdByUrl;
        if (!id || !ctx.processingTravelRouteByUrl) return;

        if (String(ctx.selectedGpxFile?.id) === String(id)) {
            ctx.setProcessingTravelRouteByUrl(false);
            return;
        }

        openInfoBlock(id, ctx.selectedTravelRoute?.route?.properties)
            .catch((e) => console.error('Failed to open travel route', e))
            .finally(() => ctx.setProcessingTravelRouteByUrl(false));
    }, [ctx.processingTravelRouteByUrl, ctx.travelRouteIdByUrl]);

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
            travelRoutes?.getLayers().forEach((layer) => {
                layer.setStyle({ color: layer.options.baseColor, weight: ROUTE_WIDTH, opacity: 1 });
            });
        } else if (ctx.selectedGpxFile?.id != null && travelRoutes) {
            const trackId = String(ctx.selectedGpxFile.id);
            const detailedReady = !!selectedRouteLayerRef.current;
            travelRoutes.getLayers().forEach((layer) => {
                if (String(layer.options.id) === trackId) {
                    layer.setStyle(detailedReady ? { opacity: 0 } : { weight: OPENED_TRACK_WIDTH });
                    if (!detailedReady) {
                        layer.bringToFront();
                    }
                } else {
                    layer.setStyle({ color: layer.options.baseColor, weight: ROUTE_WIDTH, opacity: 1 });
                }
            });
        }
    }, [ctx.selectedGpxFile, travelRoutes]);

    // manage selected route layer
    useEffect(() => {
        if (ctx.selectedTravelRoute?.show) {
            // the map is fitted to the whole track after it loads (see createRoutePolyline)
        } else if (ctx.selectedTravelRoute?.hover !== undefined) {
            const id = ctx.selectedTravelRoute.route.properties.id;
            travelRoutes?.getLayers().forEach((layer) => {
                if (layer.options.id === id) {
                    layer.setStyle({
                        color: ctx.selectedTravelRoute.hover ? SELECTED_ROUTE_COLOR : layer.options.baseColor,
                        weight: ROUTE_WIDTH,
                    });
                    layer.bringToFront();
                    if (id !== selectedRouteId) {
                        let layer = travelRoutes?.getLayers().find((layer) => layer.options.id === selectedRouteId);
                        if (layer) {
                            layer.setStyle({ color: layer.options.baseColor, weight: ROUTE_WIDTH });
                        }
                        setSelectedRouteId(id);
                    }
                }
            });
        } else if (selectedRouteLayerRef.current) {
            removeSelectedRouteLayers();
        }
    }, [ctx.selectedTravelRoute]);

    async function getRoutesList() {
        const bounds = map.getBounds();
        const minLat = bounds.getSouth();
        const maxLat = bounds.getNorth();
        const minLon = bounds.getWest();
        const maxLon = bounds.getEast();

        const {
            activity,
            year,
            tags,
            tagMatchMode = TAG_MATCH_MODES.OR,
            distanceRange,
            speedRange,
            maxSpeedRange,
            maxDistBetweenPointsRange,
            timeMinutesRange,
            waypointsRange,
        } = ctx.searchTravelRoutes;

        const activityArr = activity === ACTIVITY_ALL ? undefined : activity;

        const body = {
            activityArr,
            year: year === ALL_YEARS ? undefined : year,
            minLat,
            maxLat,
            minLon,
            maxLon,
            tags: tags.length ? tags : undefined,
            tagMatchMode,
            distanceRange,
            speedRange,
            maxSpeedRange,
            maxDistBetweenPointsRange,
            timeMinutesRange,
            waypointsRange,
        };

        const response = await apiPost(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/get-routes-list`, body, {
            apiCache: true,
        });

        if (response?.data) {
            decodeRoutesGeometry(response.data);
            ctx.setSearchTravelRoutes((prev) => ({ ...prev, res: response.data }));
        } else {
            ctx.setSearchTravelRoutes((prev) => (prev.res === null ? prev : { ...prev, res: null }));
        }
    }
}
