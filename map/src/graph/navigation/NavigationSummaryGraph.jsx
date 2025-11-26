import React, { useContext, useMemo, useRef } from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import {
    convertMeters,
    getLargeLengthUnit,
    getSmallLengthUnit,
    LARGE_UNIT,
    SMALL_UNIT,
} from '../../menu/settings/units/UnitsConverter';
import { getDistance } from '../../util/Utils';
import styles from './../graph.module.css';
import GraphManager, { calculateSlopes, ELEVATION_COLOR, ELEVATION_FILL_COLOR, SLOPE_COLOR } from '../GraphManager';
import { createCombinedYAxisLabelsPlugin } from '../plugins/combinedYAxisLabelsPlugin';
import { createDistanceXAxisPlugin } from '../plugins/distanceXAxisPlugin';
import { createTooltip } from '../plugins/tooltipPlugin';
import { createMouseLinePlugin } from '../plugins/mouseLinePlugin';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, zoomPlugin);

export default function NavigationSummaryGraph({ route }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const unitsSettings = ctx.unitsSettings;
    const chartRef = useRef(null);

    const graphData = useMemo(() => {
        if (!route?.features?.length) {
            return null;
        }

        const coordinates = [];
        route.features.forEach((feature) => {
            if (feature.geometry?.type === 'LineString' && Array.isArray(feature.geometry.coordinates)) {
                coordinates.push(...feature.geometry.coordinates);
            }
        });

        if (coordinates.length < 2) {
            return null;
        }

        const points = [];
        const coordsWithDistance = [];
        let totalDist = 0;
        let prevLat = null;
        let prevLng = null;

        coordinates.forEach(([lng, lat, ele]) => {
            if (prevLat !== null && prevLng !== null) {
                totalDist += getDistance(prevLat, prevLng, lat, lng);
            }
            prevLat = lat;
            prevLng = lng;

            const elevation = Number(ele);
            if (Number.isFinite(elevation)) {
                const prepDistance = convertMeters(totalDist, unitsSettings.len, LARGE_UNIT);
                const prepElevation = convertMeters(elevation, unitsSettings.len, SMALL_UNIT);
                if (prepDistance != null && prepElevation != null) {
                    points.push({ distance: prepDistance, elevation: prepElevation });
                    coordsWithDistance.push({ lat, lng, distance: prepDistance });
                }
            }
        });

        if (points.length < 2) {
            return null;
        }

        const maxPoints = 100;
        const step = Math.max(1, Math.floor(points.length / maxPoints));
        const sampledPoints = points.filter((_, i) => i % step === 0);

        const slopes = calculateSlopes(points, {
            totalDistance: totalDist,
            distanceKey: 'distance',
            elevationKey: 'elevation',
        });

        return { points: sampledPoints, slopes, allPoints: points, coordinates: coordsWithDistance };
    }, [route, unitsSettings.len]);

    const distanceUnit = t(getLargeLengthUnit({ unitsSettings }));
    const smallDistanceUnit = t(getSmallLengthUnit({ unitsSettings }));
    const elevationUnit = smallDistanceUnit;

    const totalDistance = graphData?.points[graphData.points.length - 1]?.distance || 0;

    const mouseLinePlugin = useMemo(() => createMouseLinePlugin('#f8931d'), []);

    const tooltipConfig = useMemo(
        () =>
            createTooltip({
                t,
                distanceUnit,
                smallDistanceUnit,
                totalDistance,
                mainParams: [
                    { id: 'y', label: 'altitude', unit: elevationUnit },
                    { id: 'y1', label: 'shared_string_slope', unit: '%' },
                ],
                attributes: null,
            }),
        [distanceUnit, smallDistanceUnit, totalDistance, elevationUnit]
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

    if (!graphData) {
        return null;
    }

    const elevationData = graphData.points.map((p) => ({ x: p.distance, y: p.elevation }));

    const slopeData = graphData.points.map((p) => {
        const slope = graphData.slopes.find((s) => Math.abs(s.dist - p.distance) < 0.01);
        return { x: p.distance, y: slope ? slope.slope : 0 };
    });

    const data = {
        datasets: [
            {
                label: 'Elevation',
                data: elevationData,
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
                data: slopeData,
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
                    onMouseMove={(e) => GraphManager.handleGraphMouseMove(e, chartRef, ctx, graphData.coordinates)}
                    onMouseLeave={() => GraphManager.hideGraphMarker(ctx)}
                />
            </div>
        </div>
    );
}
