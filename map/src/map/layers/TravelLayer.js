import { useContext, useEffect, useState } from 'react';
import AppContext, { OBJECT_TYPE_TRAVEL } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { apiGet } from '../../util/HttpApi';
import L from 'leaflet';
import { ZOOM_TO_MAP } from './SearchLayer';
import { ALL_YEARS } from '../../menu/travel/TravelMenu';
import { addDistance } from '../../manager/track/TracksManager';

export default function TravelLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [travelRoutes, setTravelRoutes] = useState(null);
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
            return;
        }
        if (!ctx.searchTravelRoutes.res) {
            getRoutesList().then();
            if (travelRoutes) {
                map.removeLayer(travelRoutes);
            }
        } else {
            let routes = [];
            if (!ctx.searchTravelRoutes.res.features) {
                return;
            }
            ctx.searchTravelRoutes.res.features.forEach((route) => {
                if (!route.properties.geo) {
                    return;
                }
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
                    routes.push(polyline);
                });
            });
            let layersGroup = new L.FeatureGroup(routes);
            setTravelRoutes(layersGroup);
            layersGroup.addTo(map);
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

        const { activity, year } = ctx.searchTravelRoutes;

        const response = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/get-routes-list`, {
            apiCache: true,
            params: {
                activity: activity,
                year: year !== ALL_YEARS ? year : undefined,
                minlat: minLat,
                maxlat: maxLat,
                minlon: minLon,
                maxlon: maxLon,
            },
        });

        if (response && response.data) {
            ctx.setSearchTravelRoutes((prev) => ({ ...prev, res: response.data }));
        } else {
            ctx.setSearchTravelRoutes((prev) => ({ ...prev, res: null }));
        }
    }
}
