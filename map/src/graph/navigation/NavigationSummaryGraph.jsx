import React, { useContext, useMemo, useRef, useCallback } from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { useTranslation } from 'react-i18next';
import throttle from 'lodash-es/throttle';
import AppContext from '../../context/AppContext';
import { getLargeLengthUnit, getSmallLengthUnit } from '../../menu/settings/units/UnitsConverter';
import { LINE_STRING } from '../../util/Utils';
import styles from './../graph.module.css';
import GraphManager, { ELEVATION_COLOR, ELEVATION_FILL_COLOR, SLOPE_COLOR } from '../GraphManager';
import { routeProfile } from '../model/profile';
import { computeSlopes } from '../model/slopes';
import { sampleSeries } from '../model/sampling';
import { useGraphUnits } from '../units';
import { createCombinedYAxisLabelsPlugin } from '../plugins/combinedYAxisLabelsPlugin';
import { createDistanceXAxisPlugin } from '../plugins/distanceXAxisPlugin';
import { createTooltip } from '../plugins/tooltipPlugin';
import { createMouseLinePlugin } from '../plugins/mouseLinePlugin';

// ~60 FPS (16ms) for smooth performance
const MOUSE_MOVE_THROTTLE_MS = 16;

const MAX_GRAPH_POINTS = 100;

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, zoomPlugin);

/**
 * Navigation route summary graph displaying elevation and slope.
 * Supports zoom, pan, and shows marker on map on hover.
 *
 * @param {Object} route - GeoJSON route with features containing LineString geometry and elevation data
 * @param {number} totalDistanceMeters - Total route distance in meters (from route API)
 */
export default function NavigationSummaryGraph({ route, totalDistanceMeters }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const unitsSettings = ctx.unitsSettings;
    const units = useGraphUnits();
    const chartRef = useRef(null);

    // Process route geometry and calculate distances, elevations, and slopes
    const graphData = useMemo(() => {
        if (!route?.features?.length) {
            return null;
        }

        // Extract all coordinates from route features
        const coordinates = [];
        route.features.forEach((feature) => {
            if (
                feature.geometry?.type === LINE_STRING &&
                Array.isArray(feature.geometry.coordinates) &&
                !feature.properties?.alternative
            ) {
                coordinates.push(...feature.geometry.coordinates);
            }
        });

        if (coordinates.length < 2) {
            return null;
        }

        // Calculate cumulative distance and elevation for each point
        const profile = routeProfile(coordinates);
        const elevation = profile.map((p, index) => ({
            x: units.distance(p.distance),
            y: units.elevation(p.elevation),
            index,
        }));
        // Sample points for graph performance (max 100 points displayed)
        const points = sampleSeries(elevation, MAX_GRAPH_POINTS);
        if (points.length < 2) {
            return null;
        }
        const slopes = computeSlopes(profile);

        return {
            elevation: points,
            slope: points.map((p) => ({ x: p.x, y: slopes.pointSlopes[p.index], index: p.index })),
            coordinates: profile.map((p, i) => ({ lat: p.lat, lng: p.lng, distance: elevation[i].x })),
        };
    }, [route, units]);

    const distanceUnit = t(getLargeLengthUnit({ unitsSettings }));
    const smallDistanceUnit = t(getSmallLengthUnit({ unitsSettings }));
    const elevationUnit = smallDistanceUnit;

    const totalDistance = totalDistanceMeters
        ? units.distance(totalDistanceMeters)
        : graphData?.elevation.at(-1)?.x || 0;

    const mouseLinePlugin = useMemo(() => createMouseLinePlugin('#f8931d'), []);

    const tooltipConfig = useMemo(
        () =>
            createTooltip({
                t,
                unitsSettings,
                distanceUnit,
                smallDistanceUnit,
                totalDistance,
                mainParams: [
                    { id: 'y', label: 'altitude', unit: elevationUnit },
                    { id: 'y1', label: 'shared_string_slope', unit: '%' },
                ],
                attributes: null,
            }),
        [unitsSettings, distanceUnit, smallDistanceUnit, totalDistance, elevationUnit]
    );

    const options = useMemo(
        () => ({
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    right: 50,
                    left: 0,
                    top: 10,
                    bottom: 12,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: tooltipConfig,
                zoom: {
                    limits: {
                        x: {
                            min: 0,
                            max: totalDistance,
                            minRange: 0.1,
                        },
                    },
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        mode: 'x',
                    },
                    pan: {
                        enabled: true,
                        mode: 'x',
                    },
                },
            },
            scales: {
                x: {
                    type: 'linear',
                    display: true,
                    offset: false,
                    min: 0,
                    max: totalDistance,
                    border: {
                        display: true,
                    },
                    grid: {
                        display: false,
                    },
                },
                y: {
                    type: 'linear',
                    position: 'right',
                    border: {
                        display: false,
                    },
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    border: {
                        display: false,
                    },
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
        }),
        [totalDistance, distanceUnit, smallDistanceUnit, elevationUnit]
    );

    const handleMouseMove = useCallback(
        throttle((e) => {
            if (graphData?.coordinates) {
                GraphManager.handleGraphMouseMove(e, chartRef, ctx, graphData.coordinates);
            }
        }, MOUSE_MOVE_THROTTLE_MS),
        [graphData?.coordinates]
    );

    if (!graphData) {
        return null;
    }

    const data = {
        datasets: [
            {
                label: 'Elevation',
                data: graphData.elevation,
                borderColor: ELEVATION_COLOR,
                backgroundColor: ELEVATION_FILL_COLOR,
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
                fill: true,
                yAxisID: 'y',
            },
            {
                label: 'Slope',
                data: graphData.slope,
                borderColor: SLOPE_COLOR,
                backgroundColor: 'transparent',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.3,
                fill: false,
                yAxisID: 'y1',
            },
        ],
    };

    const combinedLabelsPlugin = createCombinedYAxisLabelsPlugin([
        { id: 'y', color: ELEVATION_COLOR, unit: elevationUnit },
        { id: 'y1', color: SLOPE_COLOR, unit: '%' },
    ]);

    const distanceXAxisPlugin = createDistanceXAxisPlugin({
        unitsSettings,
        totalDistance,
        t,
    });

    return (
        <div className={styles.routeSummaryGraph}>
            <div className={styles.routeSummaryGraphCanvas}>
                <Chart
                    ref={chartRef}
                    type="line"
                    data={data}
                    options={options}
                    plugins={[combinedLabelsPlugin, distanceXAxisPlugin, mouseLinePlugin]}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => GraphManager.hideGraphMarker(ctx)}
                />
            </div>
        </div>
    );
}
