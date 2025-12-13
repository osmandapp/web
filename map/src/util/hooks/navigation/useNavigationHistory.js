import { useCallback, useEffect } from 'react';
import { LatLng } from 'leaflet';
import { formatLatLon } from '../../../menu/navigation/NavigationPointsManager';
import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH, ROUTE_POINTS_VIA } from '../../../store/geoRouter/profileConstants';
import { FINISH_POINT, INTERMEDIATE_POINT, START_POINT } from '../../../menu/navigation/NavigationInputRow';
import { createNavObjectFromCoords, NavigationObject } from '../../../menu/navigation/NavigationObject';

export default function useNavigationHistory(routeObject, ctx = null) {
    const history = ctx.navigationHistory || [];
    const setHistory = ctx.setNavigationHistory;

    const addToHistory = useCallback(({ location = null, obj = null }) => {
        if (location) {
            obj = createNavObjectFromCoords(location.lat, location.lng);
        }
        if (!obj || !obj.lat || !obj.lng) {
            return;
        }

        if (!setHistory) return;

        setHistory((prev) => {
            const prevHistory = prev || [];
            // Remove duplicates
            const filtered = prevHistory.filter((prevObj) => {
                const isSameLat = Math.abs(prevObj.lat - obj.lat) < 0.00001;
                const isSameLng = Math.abs(prevObj.lng - obj.lng) < 0.00001;
                const isSameType = prevObj.type === obj.type;
                return !(isSameLat && isSameLng && isSameType);
            });

            return [
                NavigationObject({
                    lat: obj.lat,
                    lng: obj.lng,
                    type: obj.type,
                    icon: obj.icon,
                    displayValue: obj.displayValue,
                }),
                ...filtered,
            ].slice(0, 100);
        });
    }, []);

    const clearHistory = () => {
        if (setHistory) {
            setHistory([]);
        }
    };

    // Track changes in start point (for drag on map, etc.)
    useEffect(() => {
        // Don't add to history while dragging
        if (routeObject.preview) {
            return;
        }

        const startPoint = routeObject.getOption(ROUTE_POINTS_START);
        if (startPoint) {
            addToHistory({ location: startPoint });
        }
        const finishPoint = routeObject.getOption(ROUTE_POINTS_FINISH);
        if (finishPoint) {
            addToHistory({ location: finishPoint });
        }
        const viaPoints = routeObject.getOption(ROUTE_POINTS_VIA) || [];
        if (viaPoints && viaPoints.length > 0) {
            viaPoints.forEach((point) => {
                addToHistory({ location: point });
            });
        }
    }, [routeObject]);

    useEffect(() => {
        if (ctx.currentNavObject) {
            addToHistory({ obj: ctx.currentNavObject });
            ctx.setCurrentNavObject(null);
        }
    }, [ctx.currentNavObject]);

    const handleHistorySelect = (item, pointType, index = null) => {
        if (item?.lat && item?.lng) {
            const latlon = new LatLng(item.lat, item.lng);
            const displayValue = item.displayValue || formatLatLon(latlon);

            if (pointType === START_POINT) {
                routeObject.setOption(ROUTE_POINTS_START, latlon);
            } else if (pointType === FINISH_POINT) {
                routeObject.setOption(ROUTE_POINTS_FINISH, latlon);
            } else if (pointType === INTERMEDIATE_POINT && index !== null) {
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
