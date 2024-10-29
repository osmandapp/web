import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { apiGet } from '../../util/HttpApi';
import L from 'leaflet';
import { ZOOM_TO_MAP } from './SearchLayer';

export default function TravelLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [travelRoutes, setTravelRoutes] = useState(null);
    const [selectedRouteId, setSelectedRouteId] = useState(null);

    const ROUTE_COLOR = '#3871e2';
    const SELECTED_ROUTE_COLOR = '#ff595d';

    useEffect(() => {
        if (!ctx.searchTravelRoutes) {
            return;
        }
        if (!ctx.searchTravelRoutes.res) {
            getRoutesList().then();
            if (travelRoutes) {
                map.removeLayer(travelRoutes);
            }
        } else {
            let routes = [];
            ctx.searchTravelRoutes.res.features.forEach((route) => {
                const coordinates = route.properties.geo.map((point) => [point.latitude, point.longitude]);
                const polyline = L.polyline(coordinates, { color: ROUTE_COLOR, weight: 3, id: route.properties.id });
                routes.push(polyline);
            });
            let layersGroup = new L.FeatureGroup(routes);
            setTravelRoutes(layersGroup);
            layersGroup.addTo(map);
        }
    }, [ctx.searchTravelRoutes]);

    useEffect(() => {
        if (ctx.selectedRoute?.show) {
            const start = ctx.selectedRoute.route.properties.geo[0];
            map.setView([start.latitude, start.longitude], ZOOM_TO_MAP);
        } else if (ctx.selectedRoute?.hover !== undefined) {
            const id = ctx.selectedRoute.route.properties.id;
            let layer = travelRoutes?.getLayers().find((layer) => layer.options.id === id);
            if (layer) {
                layer.setStyle({ color: ctx.selectedRoute.hover ? SELECTED_ROUTE_COLOR : ROUTE_COLOR, weight: 3 });
                if (id !== selectedRouteId) {
                    let layer = travelRoutes?.getLayers().find((layer) => layer.options.id === selectedRouteId);
                    if (layer) {
                        layer.setStyle({ color: ROUTE_COLOR, weight: 3 });
                    }
                    setSelectedRouteId(id);
                }
            }
        }
    }, [ctx.selectedRoute]);

    async function getRoutesList() {
        const bounds = map.getBounds();
        const minLat = bounds.getSouth();
        const maxLat = bounds.getNorth();
        const minLon = bounds.getWest();
        const maxLon = bounds.getEast();

        const { activity, year } = ctx.searchTravelRoutes;

        const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/osmgpx/get-routes-list`, {
            apiCache: true,
            params: {
                activity: activity,
                year: year,
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
