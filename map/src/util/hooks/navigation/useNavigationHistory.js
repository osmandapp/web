import { useCallback, useEffect } from 'react';
import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH, ROUTE_POINTS_VIA } from '../../../store/geoRouter/profileConstants';
import { FINISH_POINT, INTERMEDIATE_POINT, START_POINT } from '../../../menu/navigation/NavigationInputRow';
import { navigationObject } from '../../../store/navigationObject/navigationObject';

export default function useNavigationHistory(navObject, ctx = null) {
    const history = ctx.navigationHistory || [];
    const setHistory = ctx.setNavigationHistory;

    const addToHistory = useCallback(
        (navObj) => {
            if (!navObj || !(navObj instanceof navigationObject)) {
                return;
            }

            if (!setHistory) return;

            setHistory((prev) => {
                const prevHistory = prev || [];
                // Remove duplicates
                const filtered = prevHistory.filter((prevObj) => {
                    if (!(prevObj instanceof navigationObject)) return true;
                    const isSameLat = Math.abs(prevObj.lat - navObj.lat) < 0.00001;
                    const isSameLng = Math.abs(prevObj.lng - navObj.lng) < 0.00001;
                    const isSameType = prevObj.type === navObj.type;
                    return !(isSameLat && isSameLng && isSameType);
                });

                const newObj = new navigationObject(navObj.lat, navObj.lng, {
                    name: navObj.name,
                    type: navObj.type,
                    poiType: navObj.poiType,
                    icon: navObj.icon,
                    displayValue: navObj.displayValue,
                    usedAt: navObj.usedAt,
                });

                return [newObj, ...filtered].slice(0, 100);
            });
        },
        [setHistory]
    );

    const clearHistory = () => {
        if (setHistory) {
            setHistory([]);
        }
    };

    useEffect(() => {
        if (navObject.preview) {
            return;
        }

        const startPoint = navObject.getOption(ROUTE_POINTS_START);
        if (startPoint instanceof navigationObject) {
            addToHistory(startPoint);
        } else if (startPoint) {
            const navObj = navigationObject.fromCoordinates(startPoint.lat, startPoint.lng);
            addToHistory(navObj);
        }

        const finishPoint = navObject.getOption(ROUTE_POINTS_FINISH);
        if (finishPoint instanceof navigationObject) {
            addToHistory(finishPoint);
        } else if (finishPoint) {
            const navObj = navigationObject.fromCoordinates(finishPoint.lat, finishPoint.lng);
            addToHistory(navObj);
        }

        const viaPoints = navObject.getOption(ROUTE_POINTS_VIA) || [];
        if (viaPoints && viaPoints.length > 0) {
            viaPoints.forEach((point) => {
                if (point instanceof navigationObject) {
                    addToHistory(point);
                } else if (point) {
                    const navObj = navigationObject.fromCoordinates(point.lat, point.lng);
                    addToHistory(navObj);
                }
            });
        }
    }, [navObject]);

    const handleHistorySelect = (item, pointType, index = null) => {
        if (!(item instanceof navigationObject)) {
            return null;
        }

        if (pointType === START_POINT) {
            navObject.setOption(ROUTE_POINTS_START, item);
        } else if (pointType === FINISH_POINT) {
            navObject.setOption(ROUTE_POINTS_FINISH, item);
        } else if (pointType === INTERMEDIATE_POINT && index !== null) {
            const viaPoints = navObject.getOption(ROUTE_POINTS_VIA) || [];
            const newViaPoints = [...viaPoints];
            if (index >= newViaPoints.length) {
                newViaPoints.push(item);
            } else {
                newViaPoints[index] = item;
            }
            navObject.setOption(ROUTE_POINTS_VIA, newViaPoints);
        }
        return item.getDisplayValue();
    };

    return {
        history,
        clearHistory,
        handleHistorySelect,
    };
}
