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

const Z_INDEX_GRAPH = 1000;
const MIN_GRAPH_HEIGHT = 34;
const INNER_GRAPH_HEIGHT = 150;
const INFO_BLOCK_WIDTH = 200;
export const TYPE_ANALYZER = 'analyzer';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineController, LineElement, Title, Tooltip, Legend);

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

    const toggleSegmentVisibility = (trackName, index) => {
        setSegmentVisibility((prev) => ({
            ...prev,
            [trackName]: prev[trackName].map((visible, i) => (i === index ? !visible : visible)),
        }));
    };

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
                        const distanceValues = segmentData.res.map((point) => parseFloat(point[DISTANCE]));
                        allDistances.push(...distanceValues);
                        datasets.push({
                            label: `${trackName} - Segment ${index + 1}`,
                            data: segmentData.res.map((point) => ({
                                x: parseFloat(point[DISTANCE]),
                                y:
                                    yAxisOption === 'altitude'
                                        ? point[ELEVATION]
                                        : yAxisOption === 'speed'
                                          ? point[SPEED]
                                          : point[SLOPE],
                            })),
                            borderColor: segment.color,
                            backgroundColor: segment.color,
                            borderWidth: 2,
                            pointRadius: 1,
                            fill: false,
                        });
                    }
                });
            });
        }

        return { datasets, allDistances };
    }, [currentGraph.object, yAxisOption, segmentVisibility]);

    const options = useMemo(() => {
        const minX = graphData.allDistances.length > 0 ? Math.min(...graphData.allDistances) : 0;
        const maxX = graphData.allDistances.length > 0 ? Math.max(...graphData.allDistances) : 1;

        return {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 400,
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
            scales: {
                x: {
                    type: 'linear',
                    min: minX,
                    max: maxX,
                    ticks: {
                        callback: (value) => `${value.toFixed(1)} km`,
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
            },
        };
    }, [graphData, yAxisOption]);

    const GraphName = () => {
        return <Typography className={styles.graphTitle}>{currentGraph.name}</Typography>;
    };

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
                                <Chart type="line" ref={chartRef} data={graphData} options={options} />
                            </Box>
                        </Box>
                    </Box>
                )}
            </Drawer>
        </>
    );
}
