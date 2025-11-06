import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import NavigationInputRow from './NavigationInputRow';
import { useTranslation } from 'react-i18next';
import { LatLng } from 'leaflet';
import styles from './routemenu.module.css';

export function formatLatLon(pnt) {
    if (!pnt) {
        return '';
    }
    return pnt.lat.toFixed(5) + ', ' + pnt.lng.toFixed(5);
}

function getCoord(value) {
    const coords = value.trim().split(/[, ]+/);
    if (coords.length === 2) {
        let lat = coords[0];
        let lng = coords[1];
        if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
            return new LatLng(lat, lng);
        }
    }
    return null;
}

export default function NavigationPointsManager({ routeObject }) {
    const { t } = useTranslation();

    const startPoint = routeObject.getOption('route.points.start');
    const finishPoint = routeObject.getOption('route.points.finish');
    const viaPoints = routeObject.getOption('route.points.viaPoints') || [];

    const [start, setStart] = useState('');
    const [finish, setFinish] = useState('');
    const [intermediates, setIntermediates] = useState([]);

    const [draggedIndex, setDraggedIndex] = useState(null);
    const [dropTargetIndex, setDropTargetIndex] = useState(null);

    useEffect(() => {
        if (startPoint && typeof startPoint == 'object') {
            setStart(formatLatLon(startPoint));
        } else if (!startPoint) {
            setStart('');
        }
    }, [startPoint]);

    useEffect(() => {
        if (finishPoint && typeof finishPoint == 'object') {
            setFinish(formatLatLon(finishPoint));
        } else if (!finishPoint) {
            setFinish('');
        }
    }, [finishPoint]);

    useEffect(() => {
        if (viaPoints && viaPoints.length > 0 && intermediates.length <= viaPoints.length) {
            setIntermediates(viaPoints.map((p) => formatLatLon(p)));
        } else if (!viaPoints || viaPoints.length === 0) {
            setIntermediates([]);
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
    };

    const handleStartBlur = (value) => {
        if (!value || value.trim() === '') {
            routeObject.setOption('route.points.start', null);
            routeObject.resetRoute();
            return;
        }
        const latlon = getCoord(value);
        if (latlon) {
            routeObject.setOption('route.points.start', latlon);
        }
    };

    const handleFinishBlur = (value) => {
        if (!value || value.trim() === '') {
            routeObject.setOption('route.points.finish', null);
            routeObject.resetRoute();
            return;
        }
        const latlon = getCoord(value);
        if (latlon) {
            routeObject.setOption('route.points.finish', latlon);
        }
    };

    const handleIntermediateBlur = (index, value) => {
        if (!value || value.trim() === '') {
            if (viaPoints && index < viaPoints.length) {
                const newViaPoints = viaPoints.filter((_, i) => i !== index);
                routeObject.setOption('route.points.viaPoints', newViaPoints);
            }
            return;
        }
        const latlon = getCoord(value);
        if (latlon) {
            const newViaPoints = viaPoints ? [...viaPoints] : [];
            if (index >= newViaPoints.length) {
                newViaPoints.push(latlon);
            } else {
                newViaPoints[index] = latlon;
            }
            routeObject.setOption('route.points.viaPoints', newViaPoints);
        }
    };

    const handleAddIntermediate = () => {
        setIntermediates([...intermediates, '']);
    };

    const handleRemoveIntermediate = (index) => {
        const newIntermediates = intermediates.filter((_, i) => i !== index);
        setIntermediates(newIntermediates);

        if (viaPoints && index < viaPoints.length) {
            const newViaPoints = viaPoints.filter((_, i) => i !== index);
            routeObject.setOption('route.points.viaPoints', newViaPoints);
        }
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

    const handleSwap = () => {
        const tempValue = start;
        setStart(finish);
        setFinish(tempValue);

        const tempPoint = startPoint;
        routeObject.setOption('route.points.start', finishPoint);
        routeObject.setOption('route.points.finish', tempPoint);
    };

    const getAllPoints = () => {
        return [start, ...intermediates, finish];
    };

    const getAllRoutePoints = () => {
        const points = [startPoint];
        if (viaPoints && viaPoints.length > 0) {
            points.push(...viaPoints);
        }
        points.push(finishPoint);
        return points;
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
            routeObject.setOption('route.points.start', newRoutePoints.at(0));
            routeObject.setOption('route.points.finish', newRoutePoints.at(-1));

            const newViaPoints = newRoutePoints.slice(1, -1).filter((p) => p !== null);
            routeObject.setOption('route.points.viaPoints', newViaPoints);
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
                routeObject.setOption('route.points.viaPoints', cleanViaPoints);
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
                value={start}
                placeholder={t('web:set_start_point')}
                onChange={handleStartChange}
                onBlur={handleStartBlur}
                onKeyDown={(e) => handleKeyPress(e, (val) => handleStartBlur(val))}
                type="start"
                onSwap={handleSwap}
                onDragStart={handleDragStart(0)}
                onDragOver={handleDragOver(0)}
                onDrop={handleDrop(0)}
                onDragEnd={handleDragEnd}
            />

            {/* Intermediate Points */}
            {intermediates.map((value, index) => (
                <React.Fragment key={`intermediate-${index}`}>
                    {/* Drop indicator */}
                    {dropTargetIndex === index + 1 && draggedIndex !== index + 1 && (
                        <Box className={styles.dropIndicator} />
                    )}
                    <NavigationInputRow
                        value={value}
                        placeholder={`${t('web:set_via_point')} ${index + 1}`}
                        onChange={(val) => handleIntermediateChange(index, val)}
                        onBlur={(val) => handleIntermediateBlur(index, val)}
                        onKeyDown={(e) => handleKeyPress(e, (val) => handleIntermediateBlur(index, val))}
                        type="intermediate"
                        onRemove={() => handleRemoveIntermediate(index)}
                        onDragStart={handleDragStart(index + 1)}
                        onDragOver={handleDragOver(index + 1)}
                        onDrop={handleDrop(index + 1)}
                        onDragEnd={handleDragEnd}
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
                value={finish}
                placeholder={t('web:set_destination')}
                onChange={handleFinishChange}
                onBlur={handleFinishBlur}
                onKeyDown={(e) => handleKeyPress(e, (val) => handleFinishBlur(val))}
                type="finish"
                onAdd={handleAddIntermediate}
                onDragStart={handleDragStart(intermediates.length + 1)}
                onDragOver={handleDragOver(intermediates.length + 1)}
                onDrop={handleDrop(intermediates.length + 1)}
                onDragEnd={handleDragEnd}
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
