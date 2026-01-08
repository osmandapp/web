import React, { useState, useEffect, useRef, useContext } from 'react';
import { Box } from '@mui/material';
import NavigationInputRow, { FINISH_POINT, INTERMEDIATE_POINT, START_POINT } from './NavigationInputRow';
import { useTranslation } from 'react-i18next';
import useNavigationHistory from '../../util/hooks/navigation/useNavigationHistory';
import { LatLng } from 'leaflet';
import styles from './routemenu.module.css';
import AppContext from '../../context/AppContext';
import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH, ROUTE_POINTS_VIA } from '../../store/geoRouter/profileConstants';
import { matchPath, useLocation } from 'react-router-dom';
import { MAIN_URL_WITH_SLASH, NAVIGATE_URL } from '../../manager/GlobalManager';
import { navigationObject } from '../../store/navigationObject/navigationObject';
import { apiGet } from '../../util/HttpApi';
import { parseCoordinate } from '../analyzer/util/PointsManager';

export function formatLatLon(pnt) {
    if (!pnt) {
        return '';
    }
    return pnt.lat.toFixed(5) + ', ' + pnt.lng.toFixed(5);
}

async function getValidatedLatLon(value) {
    // Try to parse as coordinates first using existing parseCoordinate function
    const latlon = parseCoordinate(value);
    if (latlon) {
        return latlon;
    }

    // If not valid coordinates, try API search
    const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/parse-location`, {
        params: {
            location: value,
        },
    });

    if (response?.data && response.data.lat && response.data.lon) {
        return new LatLng(response.data.lat, response.data.lon);
    }

    return null;
}

const preparePointUpdate = ({ value, current }) => {
    const trimmedValue = value ? value.trim() : '';

    if (!trimmedValue) {
        return { shouldClear: true, shouldSkip: false, trimmedValue };
    }

    let matches = false;
    if (current) {
        if (current instanceof navigationObject) {
            matches = trimmedValue === current.getDisplayValue() || trimmedValue === formatLatLon(current.toLatLng());
        } else {
            matches = trimmedValue === formatLatLon(current);
        }
    }

    if (matches) {
        return { shouldClear: false, shouldSkip: true, trimmedValue };
    }

    return { shouldClear: false, shouldSkip: false, trimmedValue };
};

export default function NavigationPointsManager() {
    const { t } = useTranslation();
    const ctx = useContext(AppContext);

    const navObject = ctx.navigationObject;

    const startPoint = navObject.getOption(ROUTE_POINTS_START);
    const finishPoint = navObject.getOption(ROUTE_POINTS_FINISH);
    const viaPoints = navObject.getOption(ROUTE_POINTS_VIA) || [];

    const [start, setStart] = useState('');
    const [finish, setFinish] = useState('');
    const [intermediates, setIntermediates] = useState([]);

    const [draggedIndex, setDraggedIndex] = useState(null);

    const [dropTargetIndex, setDropTargetIndex] = useState(null);

    const startInputRef = useRef(null);
    const finishInputRef = useRef(null);
    const usedAutoFocus = useRef(false);
    const autofocusDisabled = useRef(false);
    const prevIsMainMenu = useRef(false);

    const FOCUS_DELAY_MS = 150;

    const location = useLocation();

    const { history, clearHistory, handleHistorySelect } = useNavigationHistory(navObject, ctx);

    const isMainMenu = matchPath({ path: MAIN_URL_WITH_SLASH + NAVIGATE_URL + '*' }, location.pathname);

    useEffect(() => {
        if (startPoint instanceof navigationObject) {
            setStart(startPoint.getDisplayValue());
        } else if (startPoint && typeof startPoint == 'object') {
            setStart(formatLatLon(startPoint));
        } else if (!startPoint) {
            setStart('');
        }
    }, [startPoint]);

    useEffect(() => {
        if (finishPoint instanceof navigationObject) {
            setFinish(finishPoint.getDisplayValue());
        } else if (finishPoint && typeof finishPoint == 'object') {
            setFinish(formatLatLon(finishPoint));
        } else if (!finishPoint) {
            setFinish('');
        }
    }, [finishPoint]);

    // Reset autofocus flags when menu is reopened
    useEffect(() => {
        if (isMainMenu && !prevIsMainMenu.current) {
            // Menu was just opened
            usedAutoFocus.current = false;
            autofocusDisabled.current = false;
        }
        prevIsMainMenu.current = isMainMenu;
    }, [isMainMenu]);

    useEffect(() => {
        if (!isMainMenu) {
            usedAutoFocus.current = false;
            return;
        }

        if (autofocusDisabled.current) {
            return;
        }

        const focusTimeout = setTimeout(() => {
            // Don't autofocus if user already focused an input
            const activeElement = document.activeElement;
            const isInputFocused =
                activeElement &&
                (activeElement === startInputRef.current ||
                    activeElement === finishInputRef.current ||
                    activeElement.id?.startsWith('se-route-'));

            if (isInputFocused) {
                return;
            }

            if (start === '' && startInputRef.current && !usedAutoFocus.current) {
                startInputRef.current.focus();
                usedAutoFocus.current = true;
            } else if (start !== '' && finish === '' && finishInputRef.current) {
                finishInputRef.current.focus();
                usedAutoFocus.current = true;
            }
        }, FOCUS_DELAY_MS);

        return () => clearTimeout(focusTimeout);
    }, [isMainMenu, start, finish]);

    // Sync intermediate inputs with map points, preserving manually added empty inputs.
    // Example: user adds 2 empty inputs, then clicks map
    useEffect(() => {
        const formattedPoints =
            viaPoints?.length > 0
                ? viaPoints.map((p) => (p instanceof navigationObject ? p.getDisplayValue() : formatLatLon(p)))
                : [];

        const targetInputsCount = Math.max(formattedPoints.length, ctx.viaInputsCount || 0);

        const newIntermediates = [
            ...formattedPoints,
            ...Array(Math.max(0, targetInputsCount - formattedPoints.length)).fill(''),
        ];

        setIntermediates(newIntermediates);
        if (targetInputsCount !== ctx.viaInputsCount) {
            ctx.setViaInputsCount(targetInputsCount);
        }
    }, [viaPoints]);

    const handleStartChange = (value) => {
        setStart(value);
    };

    const handleFinishChange = (value) => {
        setFinish(value);
    };

    const handleIntermediateChange = (index, value) => {
        const newIntermediates = [...intermediates];
        newIntermediates[index] = value;
        setIntermediates(newIntermediates);
        ctx.setViaInputsCount(newIntermediates.length);
    };

    const handleStartBlur = async (value) => {
        const { shouldClear, shouldSkip, trimmedValue } = preparePointUpdate({
            value,
            current: navObject.getOption(ROUTE_POINTS_START),
        });

        if (shouldSkip) {
            return;
        }

        if (shouldClear) {
            navObject.setOption(ROUTE_POINTS_START, null);
            navObject.resetRoute();
            return;
        }

        const latlon = await getValidatedLatLon(trimmedValue);
        if (latlon) {
            const navObj = navigationObject.fromCoordinates(latlon.lat, latlon.lng);
            navObject.setOption(ROUTE_POINTS_START, navObj);
        }
    };

    const handleFinishBlur = async (value) => {
        const { shouldClear, shouldSkip, trimmedValue } = preparePointUpdate({
            value,
            current: navObject.getOption(ROUTE_POINTS_FINISH),
        });

        if (shouldSkip) {
            return;
        }

        if (shouldClear) {
            navObject.setOption(ROUTE_POINTS_FINISH, null);
            navObject.resetRoute();
            return;
        }

        const latlon = await getValidatedLatLon(trimmedValue);
        if (latlon) {
            const navObj = navigationObject.fromCoordinates(latlon.lat, latlon.lng);
            navObject.setOption(ROUTE_POINTS_FINISH, navObj);
        }
    };

    const handleIntermediateBlur = async (index, value) => {
        if (!value || value.trim() === '') {
            if (viaPoints && index < viaPoints.length) {
                const newViaPoints = [...viaPoints];
                newViaPoints[index] = null;
                navObject.setOption(ROUTE_POINTS_VIA, newViaPoints);
            }
            return;
        }
        const latlon = await getValidatedLatLon(value);
        if (latlon) {
            const navObj = navigationObject.fromCoordinates(latlon.lat, latlon.lng);
            const newViaPoints = viaPoints ? [...viaPoints] : [];
            while (newViaPoints.length <= index) {
                newViaPoints.push(null);
            }
            newViaPoints[index] = navObj;
            navObject.setOption(ROUTE_POINTS_VIA, newViaPoints);
        }
    };

    const handleAddIntermediate = () => {
        autofocusDisabled.current = true;
        const newIntermediates = [...intermediates, ''];
        setIntermediates(newIntermediates);
        ctx.setViaInputsCount(newIntermediates.length);
    };

    const handleRemoveIntermediate = (index) => {
        autofocusDisabled.current = true;
        const newIntermediates = intermediates.filter((_, i) => i !== index);
        setIntermediates(newIntermediates);

        if (viaPoints && index < viaPoints.length) {
            const newViaPoints = viaPoints.filter((_, i) => i !== index);
            navObject.setOption(ROUTE_POINTS_VIA, newViaPoints);
        }

        ctx.setViaInputsCount(newIntermediates.length);
    };

    const handleKeyPress = (e, handler) => {
        const TAB = 9;
        const ENTER = 13;
        if (e.keyCode === TAB || e.keyCode === ENTER) {
            if (handler) {
                handler(e.target.value);
            }
        }
    };

    const handleStartHistorySelect = (item) => {
        const displayValue = handleHistorySelect(item, START_POINT);
        if (displayValue) {
            handleStartChange(displayValue);
        }
    };

    const handleFinishHistorySelect = (item) => {
        const displayValue = handleHistorySelect(item, FINISH_POINT);
        if (displayValue) {
            handleFinishChange(displayValue);
        }
    };

    const handleIntermediateHistorySelect = (index, item) => {
        const displayValue = handleHistorySelect(item, INTERMEDIATE_POINT, index);
        if (displayValue) {
            handleIntermediateChange(index, displayValue);
        }
    };

    const handleSwap = () => {
        autofocusDisabled.current = true;
        // Remove focus from all inputs before swapping
        const blurEvent = new CustomEvent('nav-blur');
        globalThis.dispatchEvent(blurEvent);

        navObject.setOption(ROUTE_POINTS_START, finishPoint);
        navObject.setOption(ROUTE_POINTS_FINISH, startPoint);
    };

    const getAllPoints = () => {
        return [start, ...intermediates, finish];
    };

    const getAllRoutePoints = () => {
        const points = [startPoint];
        if (viaPoints && viaPoints.length > 0) {
            points.push(...viaPoints.filter((p) => p != null));
        }
        points.push(finishPoint);
        return points.map((p) => (p instanceof navigationObject ? p.toLatLng() : p));
    };

    const updateAllPoints = (newPoints) => {
        if (newPoints.length < 2) return;

        // Update menu values
        setStart(newPoints.at(0));
        setFinish(newPoints.at(-1));
        const newIntermediates = newPoints.slice(1, -1);
        setIntermediates(newIntermediates);

        // Update map routeObject
        const allRoutePoints = getAllRoutePoints();
        const newRoutePoints = [];

        for (const element of newPoints) {
            const value = element;
            const allValues = getAllPoints();
            const originalIndex = allValues.indexOf(value);
            if (originalIndex !== -1 && allRoutePoints[originalIndex]) {
                newRoutePoints.push(allRoutePoints[originalIndex]);
            }
        }

        if (newRoutePoints.length >= 2) {
            navObject.setOption('route.points.start', newRoutePoints.at(0));
            navObject.setOption(ROUTE_POINTS_FINISH, newRoutePoints.at(-1));

            const newViaPoints = newRoutePoints.slice(1, -1).filter((p) => p !== null);
            navObject.setOption(ROUTE_POINTS_VIA, newViaPoints);
        }
    };

    const handleDragStart = (index) => (e) => {
        // Remove empty intermediate inputs before dragging
        const nonEmptyIntermediates = intermediates.filter((val) => val && val.trim() !== '');
        if (nonEmptyIntermediates.length !== intermediates.length) {
            setIntermediates(nonEmptyIntermediates);
            // Also clean up viaPoints
            const cleanViaPoints = viaPoints ? viaPoints.filter((p) => p !== null) : [];
            if (cleanViaPoints.length !== (viaPoints ? viaPoints.length : 0)) {
                navObject.setOption(ROUTE_POINTS_VIA, cleanViaPoints);
            }
        }

        setDraggedIndex(index);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (index) => (e) => {
        e.preventDefault();
        setDropTargetIndex(index);
    };

    const handleDrop = (targetIndex) => (e) => {
        e.preventDefault();

        if (draggedIndex === null || draggedIndex === targetIndex) {
            setDraggedIndex(null);
            setDropTargetIndex(null);
            return;
        }

        const allPoints = getAllPoints();
        const newPoints = [...allPoints];
        const [draggedItem] = newPoints.splice(draggedIndex, 1);
        newPoints.splice(targetIndex, 0, draggedItem);

        updateAllPoints(newPoints);
        setDraggedIndex(null);
        setDropTargetIndex(null);
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
        setDropTargetIndex(null);
    };

    return (
        <Box className={styles.pointsContainer}>
            {/* Drop indicator before start */}
            {dropTargetIndex === 0 && draggedIndex !== 0 && <Box className={styles.dropIndicator} />}

            {/* Start Point */}
            <NavigationInputRow
                key="start-point"
                inputId="se-route-start-point"
                value={start}
                placeholder={t('web:set_start_point')}
                onChange={handleStartChange}
                onBlur={handleStartBlur}
                onKeyDown={(e) => handleKeyPress(e, handleStartBlur)}
                type={START_POINT}
                onSwap={handleSwap}
                onDragStart={handleDragStart(0)}
                onDragOver={handleDragOver(0)}
                onDrop={handleDrop(0)}
                onDragEnd={handleDragEnd}
                inputRef={startInputRef}
                history={history}
                onHistorySelect={handleStartHistorySelect}
                onClearHistory={clearHistory}
                isDragging={draggedIndex === 0}
                hasIntermediates={intermediates.length > 0}
            />

            {/* Intermediate Points */}
            {intermediates.map((value, index) => (
                <React.Fragment key={`intermediate-point-${index}`}>
                    {/* Drop indicator */}
                    {dropTargetIndex === index + 1 && draggedIndex !== index + 1 && (
                        <Box className={styles.dropIndicator} />
                    )}
                    <NavigationInputRow
                        inputId={`se-route-via-point-${index}`}
                        value={value}
                        placeholder={`${t('web:set_via_point')} ${index + 1}`}
                        onChange={(val) => handleIntermediateChange(index, val)}
                        onBlur={(val) => handleIntermediateBlur(index, val)}
                        onKeyDown={(e) => handleKeyPress(e, (val) => handleIntermediateBlur(index, val))}
                        type={INTERMEDIATE_POINT}
                        onRemove={() => handleRemoveIntermediate(index)}
                        onDragStart={handleDragStart(index + 1)}
                        onDragOver={handleDragOver(index + 1)}
                        onDrop={handleDrop(index + 1)}
                        onDragEnd={handleDragEnd}
                        history={history}
                        onHistorySelect={(item) => handleIntermediateHistorySelect(index, item)}
                        onClearHistory={clearHistory}
                        isDragging={draggedIndex === index + 1}
                        isFirstIntermediate={index === 0}
                    />
                </React.Fragment>
            ))}

            {/* Drop indicator before finish */}
            {dropTargetIndex === intermediates.length + 1 && draggedIndex !== intermediates.length + 1 && (
                <Box className={styles.dropIndicator} />
            )}

            {/* Finish Point */}
            <NavigationInputRow
                key="finish-point"
                inputId="se-route-finish-point"
                value={finish}
                placeholder={t('web:set_destination')}
                onChange={handleFinishChange}
                onBlur={handleFinishBlur}
                onKeyDown={(e) => handleKeyPress(e, handleFinishBlur)}
                type={FINISH_POINT}
                onAdd={handleAddIntermediate}
                onDragStart={handleDragStart(intermediates.length + 1)}
                onDragOver={handleDragOver(intermediates.length + 1)}
                onDrop={handleDrop(intermediates.length + 1)}
                onDragEnd={handleDragEnd}
                inputRef={finishInputRef}
                history={history}
                onHistorySelect={handleFinishHistorySelect}
                onClearHistory={clearHistory}
                isDragging={draggedIndex === intermediates.length + 1}
            />

            {/* Drop indicator after finish (to move item to the end) */}
            {dropTargetIndex === intermediates.length + 2 && <Box className={styles.dropIndicator} />}
            {draggedIndex !== null && (
                <Box
                    onDragOver={handleDragOver(intermediates.length + 2)}
                    onDrop={handleDrop(intermediates.length + 2)}
                    sx={{ minHeight: '20px' }}
                />
            )}
        </Box>
    );
}
