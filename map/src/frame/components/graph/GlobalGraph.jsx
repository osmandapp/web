import { GLOBAL_GRAPH_HEIGHT_SIZE, MAIN_MENU_MIN_SIZE, MENU_INFO_OPEN_SIZE } from '../../../manager/GlobalManager';
import { Box, Divider, Drawer, IconButton, Typography } from '@mui/material';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import AppContext from '../../../context/AppContext';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineController,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { DISTANCE, ELEVATION, SLOPE, SPEED } from '../../../manager/GraphManager';
import { getGraphData } from '../../../infoblock/components/graph/GpxGraphProvider';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import styles from '../frame.module.css';
import SegmentSelector from './SegmentSelector';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import YAxisSelector from './YAxisSelector';
import { debounce } from 'lodash';
import annotationsPlugin from 'chartjs-plugin-annotation';

const Z_INDEX_GRAPH = 1000;
const MIN_GRAPH_HEIGHT = 34;
const INNER_GRAPH_HEIGHT = 150;
const INFO_BLOCK_WIDTH = 200;
export const TYPE_ANALYZER = 'analyzer';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineController,
    LineElement,
    Title,
    Tooltip,
    Legend,
    annotationsPlugin
);

export const Y_AXIS_OPTIONS = (t) => [
    { value: 'altitude', label: t('altitude') },
    { value: 'slope', label: t('shared_string_slope') },
    { value: 'speed', label: t('shared_string_speed') },
];

export default function GlobalGraph({ type = TYPE_ANALYZER }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const chartRef = useRef(null);
    const [width] = useWindowSize();
    const [collapsed, setCollapsed] = useState(false);

    const GRAPH_TYPES = {
        analyzer: {
            name: t('web:tracks_analyzer'),
            object: ctx.trackAnalyzer?.segments || {},
        },
    };

    const [yAxisOption, setYAxisOption] = useState('altitude');
    const [currentGraph, setCurrentGraph] = useState(GRAPH_TYPES[type]);
    const prevSegmentsRef = useRef(currentGraph.object);
    const [segmentVisibility, setSegmentVisibility] = useState({});

    useEffect(() => {
        ctx.setGlobalGraph((prev) => ({
            ...prev,
            size: collapsed ? MIN_GRAPH_HEIGHT : GLOBAL_GRAPH_HEIGHT_SIZE,
        }));
    }, [collapsed]);

    // update graph data when new segments are loaded
    useEffect(() => {
        setSegmentVisibility((prev) => {
            if (type !== TYPE_ANALYZER) return prev;

            const initialVisibility = {};
            Object.entries(currentGraph.object).forEach(([trackName, trackSegments]) => {
                if (!prev[trackName]) {
                    initialVisibility[trackName] = trackSegments.map(() => true); // all segments are visible by default
                } else {
                    initialVisibility[trackName] = prev[trackName]; // keep the visibility of segments
                }
            });

            return initialVisibility;
        });
    }, [currentGraph.object, type]);

    useEffect(() => {
        if (type === TYPE_ANALYZER) {
            const filteredSegments = Object.entries(ctx.trackAnalyzer?.segments || {}).reduce(
                (acc, [trackName, trackSegments]) => {
                    const filtered = trackSegments.filter(
                        (segment) => !ctx.excludedSegments.has(`${segment.name} ${segment.trackInd}`)
                    );
                    if (filtered.length > 0) {
                        acc[trackName] = filtered;
                    }
                    return acc;
                },
                {}
            );
            if (prevSegmentsRef.current !== filteredSegments) {
                setCurrentGraph({ ...GRAPH_TYPES[type], object: filteredSegments });
                prevSegmentsRef.current = filteredSegments;
            }
        }
    }, [ctx.trackAnalyzer?.segments, ctx.excludedSegments]);

    useEffect(() => {
        if (ctx.graphHighlightedPoint && chartRef.current) {
            const { lat, lng } = ctx.graphHighlightedPoint;

            let closestPoint = null;
            let datasetIndex = -1;
            let pointIndex = -1;

            // Find the closest point to the highlighted point
            graphData.datasets.forEach((dataset, dIndex) => {
                dataset.data.forEach((point, pIndex) => {
                    const distance = Math.hypot(point.lat - lat, point.lng - lng);
                    if (!closestPoint || distance < closestPoint.distance) {
                        closestPoint = { ...point, distance };
                        datasetIndex = dIndex;
                        pointIndex = pIndex;
                    }
                });
            });

            // Highlight the closest point
            if (closestPoint && datasetIndex !== -1 && pointIndex !== -1) {
                chartRef.current.tooltip.setActiveElements([{ datasetIndex, index: pointIndex }], {
                    x: closestPoint.x,
                    y: closestPoint.y,
                });
                chartRef.current.update();
            }
        }
    }, [ctx.graphHighlightedPoint]);

    const toggleSegmentVisibility = (trackName, index) => {
        setSegmentVisibility((prev) => ({
            ...prev,
            [trackName]: prev[trackName].map((visible, i) => (i === index ? !visible : visible)),
        }));
    };

    function extractAndShorten(str) {
        if (!str) return '';
        const lastPart = str.split('/').pop();
        return lastPart.length > 15 ? lastPart.slice(0, 15) + '...' : lastPart;
    }

    const graphData = useMemo(() => {
        const datasets = [];
        let allDistances = []; // for setting x-axis limits
        if (type === TYPE_ANALYZER && currentGraph.object) {
            Object.entries(currentGraph.object).forEach(([trackName, trackSegments]) => {
                trackSegments.forEach((segment, index) => {
                    if (!segmentVisibility[trackName]?.[index]) {
                        return;
                    }
                    const segmentData = getGraphData({
                        segmentData: segment,
                        ctx,
                        hasEle: true,
                        hasSpeed: true,
                    });
                    if (segmentData?.res?.length) {
                        const points = segmentData.res.map((point) => ({
                            x: parseFloat(point[DISTANCE]),
                            y:
                                yAxisOption === 'altitude'
                                    ? point[ELEVATION]
                                    : yAxisOption === 'speed'
                                      ? point[SPEED]
                                      : point[SLOPE],
                            lat: point.lat,
                            lng: point.lon,
                        }));

                        const distanceValues = points.map((p) => p.x);
                        const ind = trackSegments.length > 1 ? ` (${index + 1})` : '';
                        allDistances.push(...distanceValues);

                        datasets.push({
                            name: trackName,
                            label: `${extractAndShorten(trackName)}${ind}`,
                            data: points,
                            borderColor: segment.color,
                            backgroundColor: segment.color,
                            borderWidth: 2,
                            pointRadius: points.length < 200 ? 2 : 0,
                            fill: false,
                        });
                    }
                });
            });
        }

        return { datasets, allDistances };
    }, [currentGraph.object, yAxisOption, segmentVisibility]);

    // fix tooltip for nearest points
    useEffect(() => {
        if (!chartRef.current) return;

        const chart = chartRef.current;

        chart.options.onHover = (event) => {
            if (!chartRef.current) return;

            const xValue = chart.scales.x.getValueForPixel(event.native.offsetX);
            chart.options.plugins.annotation.annotations.crosshairLine.value = xValue;

            const newActiveElements = [];

            chart.data.datasets.forEach((dataset, datasetIndex) => {
                dataset.data.forEach((point, index) => {
                    if (Math.abs(point.x - xValue) < 0.001) {
                        newActiveElements.push({ datasetIndex, index });
                    }
                });
            });

            if (newActiveElements.length > 0) {
                chart.tooltip.setActiveElements(newActiveElements, {
                    x: event.native.offsetX,
                    y: event.native.offsetY,
                });
                chart.update('none');
            }
        };
        chart.update();
    }, [graphData, yAxisOption]);

    const options = useMemo(() => {
        const minX = graphData.allDistances.length > 0 ? Math.min(...graphData.allDistances) : 0;
        const maxX = graphData.allDistances.length > 0 ? Math.max(...graphData.allDistances) : 1;

        const totalDistance = maxX - minX;

        return {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 400,
            },
            interaction: {
                mode: 'nearest',
                intersect: false,
            },
            scales: {
                x: {
                    type: 'linear',
                    min: minX,
                    max: maxX,
                    ticks: {
                        callback: (value) => {
                            return totalDistance < 1
                                ? `${(value * 1000).toFixed(0)} ${t('m')}`
                                : `${value.toFixed(2)} ${t('km')}`;
                        },
                        autoSkip: true,
                        maxTicksLimit: 20,
                    },
                },
                y: {
                    ticks: {
                        callback: (value) => {
                            if (yAxisOption === 'altitude') return `${value} ${t('m')}`;
                            if (yAxisOption === 'speed') return `${value} ${t('m_s')}`;
                            if (yAxisOption === 'slope') return `${value} %`;
                            return value;
                        },
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: true,
                    intersect: false,
                },
                annotation: {
                    annotations: {
                        crosshairLine: {
                            type: 'line',
                            mode: 'vertical',
                            scaleID: 'x',
                            value: null,
                            borderColor: 'rgba(255, 0, 0, 0.8)',
                            borderWidth: 1,
                            borderDash: [4, 4],
                        },
                    },
                },
            },
        };
    }, [graphData, yAxisOption]);

    const GraphName = () => {
        return <Typography className={styles.graphTitle}>{currentGraph.name}</Typography>;
    };

    const onMouseMoveGraph = debounce((e, chartRef) => {
        if (!chartRef) {
            return;
        }
        const chart = chartRef.current;

        if (ctx.mapMarkerListener && chart._active?.length > 0) {
            // Get the mouse cursor position
            const eventX = e.nativeEvent.offsetX;
            // Search for the closest point to the mouse cursor
            const selected = chart._active.reduce((closest, current) => {
                const currentX = current.element.x;
                return !closest || Math.abs(currentX - eventX) < Math.abs(closest.element.x - eventX)
                    ? current
                    : closest;
            }, null);
            if (selected) {
                const { lat, lng } = selected.element.$context.raw;
                if (lat !== undefined && lng !== undefined) {
                    ctx.mapMarkerListener(lat, lng);
                } else {
                    hideSelectedPoint();
                }
            }
        } else {
            hideSelectedPoint();
        }
    }, 50);

    function hideSelectedPoint() {
        ctx.mapMarkerListener(null);
    }

    return (
        <>
            <Drawer
                anchor="bottom"
                variant="persistent"
                PaperProps={{
                    sx: {
                        height: collapsed ? '34px' : `${GLOBAL_GRAPH_HEIGHT_SIZE}px`,
                        width: '100%',
                        ml: `${MENU_INFO_OPEN_SIZE + MAIN_MENU_MIN_SIZE}px`,
                        boxShadow: 'none',
                        zIndex: Z_INDEX_GRAPH,
                    },
                }}
                sx={{ left: 'auto !important' }}
                open={true}
                hideBackdrop
            >
                <Box className={styles.graphTitleBox}>
                    <IconButton sx={{ ml: -1 }} onClick={() => setCollapsed(!collapsed)} size="small">
                        {collapsed ? <ExpandMore /> : <ExpandLess />}
                    </IconButton>
                    <GraphName />
                </Box>
                <Divider />
                {!collapsed && (
                    <Box sx={{ display: 'flex', height: '100%' }}>
                        <Box className={styles.graphSelector}>
                            {type === TYPE_ANALYZER && (
                                <SegmentSelector
                                    currentGraph={currentGraph}
                                    segmentVisibility={segmentVisibility}
                                    toggleSegmentVisibility={toggleSegmentVisibility}
                                />
                            )}
                            <YAxisSelector yAxisOption={yAxisOption} setYAxisOption={setYAxisOption} />
                        </Box>
                        <Box sx={{ flex: 1, padding: '10px' }}>
                            <Box
                                sx={{
                                    width: width - MENU_INFO_OPEN_SIZE - MAIN_MENU_MIN_SIZE - INFO_BLOCK_WIDTH - 10,
                                    height: INNER_GRAPH_HEIGHT,
                                }}
                            >
                                <Chart
                                    type="line"
                                    ref={chartRef}
                                    data={graphData}
                                    options={options}
                                    onMouseMove={(e) => onMouseMoveGraph(e, chartRef)}
                                    onMouseLeave={() => hideSelectedPoint()}
                                />
                            </Box>
                        </Box>
                    </Box>
                )}
            </Drawer>
        </>
    );
}
