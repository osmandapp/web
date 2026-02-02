import { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_TYPE_TRAVEL, TRAVEL_ROUTE_ID_PARAM } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { useUpdateQueryParam } from '../../util/hooks/menu/useUpdateQueryParam';
import { apiGet, apiPost } from '../../util/HttpApi';
import L from 'leaflet';
import { ZOOM_TO_MAP } from './SearchLayer';
import { ACTIVITY_ALL, ALL_YEARS, TAG_MATCH_MODES } from '../../menu/travel/TravelMenu';
import TracksManager, { addDistance, getTrackPoints } from '../../manager/track/TracksManager';
import { clusterMarkers } from '../util/Clusterizer';
import { SimpleDotMarker } from '../markers/SimpleDotMarker';
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

function getRouteStart(route, track = null) {
    let start = route.properties?.geo ? route.properties.geo[0][0] : null;
    if (!start && track) {
        const points = getTrackPoints(track[ROUTE_GPX_DATA]);
        if (points?.length > 0) {
            start = {
                latitude: points[0].lat,
                longitude: points[0].lng,
            };
        }
    }
    if (!start && route.properties.point) {
        start = {
            latitude: route.properties.point.lat,
            longitude: route.properties.point.lon,
        };
    }
    return start;
}

export default function TravelLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const { updateQueryParam } = useUpdateQueryParam();

    const [travelRoutes, setTravelRoutes] = useState(null);
    const [travelPoints, setTravelPoints] = useState(null);
    const [selectedRouteId, setSelectedRouteId] = useState(null);
    const selectedRoutePolylineRef = useRef(null);

    const ROUTE_COLOR = '#666666';
    const SELECTED_ROUTE_COLOR = '#f8931d';
    const ROUTE_WIDTH = 3;

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
                        const polyline = new L.Polyline(segment, {
                            color: ROUTE_COLOR,
                            weight: ROUTE_WIDTH,
                            id: route.properties.id,
                        });
                        const html = buildOsmPopupHtml({
                            id: route.properties.id,
                            name: route.properties.name || '',
                            user: route.properties.user,
                        });
                        attachAutoClosePopup(polyline, html, [0, 0]);
                        polyline.on('click', (e) => openInfoBlock(e.target.options.id));
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

                function createMarker(place, isMain) {
                    const [lon, lat] = place.geometry.coordinates;
                    const radius = isMain ? 8 : 4;
                    const marker = new SimpleDotMarker(L.latLng(lat, lon), place, {
                        radius,
                        weight: 1,
                    }).build();
                    const id = place.properties.id;
                    const html = buildOsmPopupHtml({
                        id,
                        name: place.properties.name || '',
                        user: place.properties.user,
                    });
                    attachAutoClosePopup(marker, html, [0, -radius]);
                    marker.on('click', () => openInfoBlock(id));
                    markers.push(marker);
                }

                mainMarkers.forEach((place) => createMarker(place, true));
                secondaryMarkers.forEach((place) => createMarker(place, false));

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

    function createRoutePolyline(route) {
        if (!route.properties?.geo && route.track?.[ROUTE_GPX_DATA]) {
            const track = route.track[ROUTE_GPX_DATA];
            const points = getTrackPoints(track);
            if (points?.length > 0) {
                if (selectedRoutePolylineRef.current) {
                    map.removeLayer(selectedRoutePolylineRef.current);
                    selectedRoutePolylineRef.current = null;
                }

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
                    color: ROUTE_COLOR,
                    weight: ROUTE_WIDTH,
                    id: route.properties.id,
                });

                selectedRoutePolylineRef.current = polyline;
                polyline.addTo(map);
            }
        }
    }

    // open route info by id from URL param or click on map
    async function openInfoBlock(id, addParam = true) {
        if (!id) return;

        const response = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/get-osm-route`, {
            apiCache: true,
            params: { id },
        });
        if (response?.data) {
            if (addParam) {
                updateQueryParam(TRAVEL_ROUTE_ID_PARAM, String(id));
            }
            const route = createRoute(response.data);
            route.track = response.data;
            const track = route.track[ROUTE_GPX_DATA];
            addDistance(track);
            ctx.setCurrentObjectType(OBJECT_TYPE_TRAVEL);
            const file = {
                id: route.properties.id,
                name: route.properties.name,
                description: route.properties.description,
                date: route.properties.date,
                user: route.properties.user,
                type: GPX,
                ...track,
            };
            ctx.setSelectedGpxFile(file);
            ctx.setUpdateInfoBlock(true);
            createRoutePolyline(route);
        } else {
            ctx.setNotification({ text: 'Failed to load route', severity: 'error' });
        }
    }

    // Open route by URL param
    useEffect(() => {
        const id = ctx.travelRouteIdByUrl;
        if (!id || !ctx.processingTravelRouteByUrl) return;

        openInfoBlock(id, false).then(() => {
            ctx.setProcessingTravelRouteByUrl(false);
        });
    }, [ctx.processingTravelRouteByUrl, ctx.travelRouteIdByUrl]);

    function createRoute(data) {
        if (!data?.[ROUTE_GPX_DATA]) {
            return null;
        }
        const route = {
            properties: {
                id: Number(data.id),
                name: data.name ?? '',
                description: data.description ?? '',
                date: data.date ?? '',
                user: data.user ?? '',
            },
            track: data,
        };
        const start = getRouteStart(route, data);
        if (start) {
            map.setView([start.latitude, start.longitude], ZOOM_TO_MAP);
        }
        return route;
    }

    useEffect(() => {
        if (isEmpty(ctx.selectedGpxFile) && selectedRoutePolylineRef.current) {
            map.removeLayer(selectedRoutePolylineRef.current);
            selectedRoutePolylineRef.current = null;
        }
    }, [ctx.selectedGpxFile]);

    // manage selected route layer
    useEffect(() => {
        if (ctx.selectedTravelRoute?.show) {
            const start = getRouteStart(ctx.selectedTravelRoute.route);
            if (start) {
                map.setView([start.latitude, start.longitude], ZOOM_TO_MAP);
            }
        } else if (ctx.selectedTravelRoute?.hover !== undefined) {
            const id = ctx.selectedTravelRoute.route.properties.id;
            travelRoutes?.getLayers().forEach((layer) => {
                if (layer.options.id === id) {
                    layer.setStyle({
                        color: ctx.selectedTravelRoute.hover ? SELECTED_ROUTE_COLOR : ROUTE_COLOR,
                        weight: ROUTE_WIDTH,
                    });
                    layer.bringToFront();
                    if (id !== selectedRouteId) {
                        let layer = travelRoutes?.getLayers().find((layer) => layer.options.id === selectedRouteId);
                        if (layer) {
                            layer.setStyle({ color: ROUTE_COLOR, weight: ROUTE_WIDTH });
                        }
                        setSelectedRouteId(id);
                    }
                }
            });
        } else if (selectedRoutePolylineRef.current) {
            map.removeLayer(selectedRoutePolylineRef.current);
            selectedRoutePolylineRef.current = null;
        }
    }, [ctx.selectedTravelRoute]);

    async function getRoutesList() {
        const bounds = map.getBounds();
        const minLat = bounds.getSouth();
        const maxLat = bounds.getNorth();
        const minLon = bounds.getWest();
        const maxLon = bounds.getEast();

        const { activity, year, tags, tagMatchMode = TAG_MATCH_MODES.OR } = ctx.searchTravelRoutes;
        const body = {
            activity: activity === ACTIVITY_ALL ? undefined : activity,
            year: year === ALL_YEARS ? undefined : year,
            minLat,
            maxLat,
            minLon,
            maxLon,
            tags: tags.length ? tags : undefined,
            tagMatchMode,
        };

        const response = await apiPost(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/get-routes-list`, body, {
            apiCache: true,
        });

        if (response?.data) {
            ctx.setSearchTravelRoutes((prev) => ({ ...prev, res: response.data }));
        } else {
            ctx.setSearchTravelRoutes((prev) => (prev.res === null ? prev : { ...prev, res: null }));
        }
    }
}
