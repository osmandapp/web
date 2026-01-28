import { useContext, useEffect, useState } from 'react';
import AppContext, { OBJECT_TYPE_TRAVEL } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { apiGet } from '../../util/HttpApi';
import L from 'leaflet';
import { ZOOM_TO_MAP } from './SearchLayer';
import { ACTIVITY_ALL, ALL_YEARS, TAG_MATCH_MODES } from '../../menu/travel/TravelMenu';
import { addDistance } from '../../manager/track/TracksManager';
import { clusterMarkers } from '../util/Clusterizer';
import { SimpleDotMarker } from '../markers/SimpleDotMarker';

export default function TravelLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [travelRoutes, setTravelRoutes] = useState(null);
    const [travelPoints, setTravelPoints] = useState(null);
    const [selectedRouteId, setSelectedRouteId] = useState(null);

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
                        polyline.on('click', (e) => openInfoBlock(e.target.options.id));
                        polyline.on('mouseover', () => ctx.setSelectedTravelRoute({ route, hover: true }));
                        polyline.on('mouseout', () => ctx.setSelectedTravelRoute({ route, hover: false }));
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
                    const name = place.properties.name || '';
                    const user = place.properties.user;
                    let url = null;
                    if (user && id !== undefined && id !== null) {
                        const encodedUser = encodeURIComponent(user);
                        url = `https://www.openstreetmap.org/user/${encodedUser}/traces/${id}`;
                    }
                    let html = '';
                    if (name) {
                        html += name;
                    }
                    if (url) {
                        if (html) {
                            html += '<br/>';
                        }
                        html += `<a href="${url}" target="_blank" rel="noopener noreferrer">Open in OpenStreetMap</a>`;
                    }
                    if (html) {
                        marker.bindPopup(html, {
                            offset: [0, -radius],
                            closeButton: false,
                            autoPan: false,
                        });
                        let closeTimeout = null;
                        marker.on('mouseover', () => {
                            if (closeTimeout) {
                                clearTimeout(closeTimeout);
                                closeTimeout = null;
                            }
                            marker.openPopup();
                        });
                        marker.on('mouseout', () => {
                            if (closeTimeout) {
                                clearTimeout(closeTimeout);
                            }
                            closeTimeout = setTimeout(() => {
                                marker.closePopup();
                                closeTimeout = null;
                            }, 1000);
                        });
                    }
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
            getRoutesList().then();
            if (travelRoutes) {
                map.removeLayer(travelRoutes);
            }
            if (travelPoints) {
                map.removeLayer(travelPoints);
            }
        }
    }, [ctx.searchTravelRoutes]);

    async function openInfoBlock(id) {
        const route = ctx.searchTravelRoutes.res.features.find((route) => route.properties.id === id);
        if (!route) {
            return;
        }
        const response = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/get-osm-route`, {
            apiCache: true,
            params: {
                id,
            },
        });
        if (response && response.data) {
            route.track = response.data;
            const track = route.track['gpx_data'];
            addDistance(track);
            ctx.setCurrentObjectType(OBJECT_TYPE_TRAVEL);
            const file = {
                id: route.properties.id,
                name: route.properties.name,
                description: route.properties.description,
                date: route.properties.date,
                user: route.properties.user,
                type: 'GPX',
                ...track,
            };
            ctx.setSelectedGpxFile(file);
            ctx.setUpdateInfoBlock(true);
        }
    }

    useEffect(() => {
        if (ctx.selectedTravelRoute?.show) {
            const start = ctx.selectedTravelRoute.route.properties?.geo[0][0];
            if (!start) {
                return; // no route
            }
            map.setView([start.latitude, start.longitude], ZOOM_TO_MAP);
            openInfoBlock(ctx.selectedTravelRoute.route.properties.id).then();
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
        }
    }, [ctx.selectedTravelRoute]);

    async function getRoutesList() {
        const bounds = map.getBounds();
        const minLat = bounds.getSouth();
        const maxLat = bounds.getNorth();
        const minLon = bounds.getWest();
        const maxLon = bounds.getEast();

        const { activity, year, tags, tagMatchMode = TAG_MATCH_MODES.OR } = ctx.searchTravelRoutes;
        const response = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/get-routes-list`, {
            apiCache: true,
            params: {
                activity: activity === ACTIVITY_ALL ? undefined : activity,
                year: year === ALL_YEARS ? undefined : year,
                minlat: minLat,
                maxlat: maxLat,
                minlon: minLon,
                maxlon: maxLon,
                tags: tags.length ? tags.join(',') : undefined,
                tagMatchMode,
            },
        });

        if (response?.data) {
            ctx.setSearchTravelRoutes((prev) => ({ ...prev, res: response.data }));
        } else {
            ctx.setSearchTravelRoutes((prev) => ({ ...prev, res: null }));
        }
    }
}
