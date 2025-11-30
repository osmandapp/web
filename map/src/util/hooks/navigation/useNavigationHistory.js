import { useEffect, useState } from 'react';
import { LatLng } from 'leaflet';
import { formatLatLon } from '../../../menu/navigation/NavigationPointsManager';
import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH, ROUTE_POINTS_VIA } from '../../../store/geoRouter/profileConstants';

export default function useNavigationHistory(start, finish, intermediates, routeObject) {
    const [history, setHistory] = useState([]);

    const addToHistory = (latlon) => {
        if (!latlon?.lat || !latlon.lng) {
            return;
        }

        setHistory((prev) => {
            const prevHistory = prev || [];
            // Remove duplicates
            const filtered = prevHistory.filter((h) => {
                const isSameLat = Math.abs(h.lat - latlon.lat) < 0.00001;
                const isSameLng = Math.abs(h.lng - latlon.lng) < 0.00001;
                return !(isSameLat && isSameLng);
            });

            return [
                {
                    lat: latlon.lat,
                    lng: latlon.lng,
                    name: formatLatLon(latlon),
                },
                ...filtered,
            ].slice(0, 100);
        });
    };

    const clearHistory = () => {
        setHistory([]);
    };

    // Track changes in start point (for drag on map, etc.)
    useEffect(() => {
        // Don't add to history while dragging
        if (routeObject.preview) {
            return;
        }

        const startPoint = routeObject.getOption(ROUTE_POINTS_START);
        if (startPoint) {
            addToHistory(startPoint);
        }
        const finishPoint = routeObject.getOption(ROUTE_POINTS_FINISH);
        if (finishPoint) {
            addToHistory(finishPoint);
        }
        const viaPoints = routeObject.getOption(ROUTE_POINTS_VIA) || [];
        if (viaPoints && viaPoints.length > 0) {
            viaPoints.forEach((point) => {
                addToHistory(point);
            });
        }
    }, [routeObject]);

    const handleHistorySelect = (item, pointType, index = null) => {
        if (item?.lat && item?.lng) {
            const latlon = new LatLng(item.lat, item.lng);
            const displayValue = item.name || formatLatLon(latlon);

            if (pointType === ROUTE_POINTS_START) {
                routeObject.setOption(ROUTE_POINTS_START, latlon);
            } else if (pointType === ROUTE_POINTS_FINISH) {
                routeObject.setOption(ROUTE_POINTS_FINISH, latlon);
            } else if (pointType === ROUTE_POINTS_VIA && index !== null) {
                const viaPoints = routeObject.getOption(ROUTE_POINTS_VIA) || [];
                const newViaPoints = [...viaPoints];
                if (index >= newViaPoints.length) {
                    newViaPoints.push(latlon);
                } else {
                    newViaPoints[index] = latlon;
                }
                routeObject.setOption(ROUTE_POINTS_VIA, newViaPoints);
            }
            return displayValue;
        }
        return null;
    };

    return {
        history,
        clearHistory,
        handleHistorySelect,
    };
}
