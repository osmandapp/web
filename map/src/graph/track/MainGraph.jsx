import { Chart } from 'react-chartjs-2';
import { Box, Slider, SliderThumb } from '@mui/material';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import isEmpty from 'lodash-es/isEmpty';
import isEqual from 'lodash-es/isEqual';
import GraphManager, {
    cap,
    checkNextSegment,
    DISTANCE,
    ELEVATION,
    ELEVATION_SRTM,
    SLOPE,
    SPEED,
    STEEPNESS,
    UNDEFINED_DATA,
} from '../GraphManager';
import TracksManager from '../../manager/track/TracksManager';
import AppContext from '../../context/AppContext';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Interaction,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Tooltip,
} from 'chart.js';
import clsx from 'clsx';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationsPlugin from 'chartjs-plugin-annotation';
import { getRelativePosition } from 'chart.js/helpers';
import { getLargeLengthUnit, getSmallLengthUnit, getSpeedUnit } from '../../menu/settings/units/UnitsConverter';
import { useTranslation } from 'react-i18next';

ChartJS.register(
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineController,
    LineElement,
    Filler,
    zoomPlugin,
    annotationsPlugin
);

export default function MainGraph({ data, attrGraphData, showData, setSelectedPoint, width }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const [speedData, setSpeedData] = useState(null);
    const [eleData, setEleData] = useState(null);
    const [eleSRTMData, setEleSRTMData] = useState(null);
    const [slopeData, setSlopeData] = useState(null);
    const [maxMinData, setMaxMinData] = useState({});

    const chartRef = useRef(null);

    const dataGraph = data?.res;
    const xAxis = DISTANCE;
    const y1Axis = [ELEVATION, ELEVATION_SRTM, SLOPE];
    const y2Axis = SPEED;
    const minEle = data?.minEle;
    const maxEle = data?.maxEle;
    const minSpeed = data?.minSpeed;
    const maxSpeed = data?.maxSpeed;
    const slopes = data?.slopes;

    const [distRangeValue, setDistRangeValue] = useState([0, dataGraph.length - 1]);

    const showY1 = showY1Scale();
    const showY2 = showY2Scale();
    const showSlope = showSlopeScale();

    const [zoomLevel, setZoomLevel] = useState(1);

    const GRAPH_SAMPLING_LIMIT = 500;
    const distRangeRef = useRef([0, dataGraph.length - 1]);
    const sliderStep = zoomLevel > 3 ? 1 : Math.max(1, Math.floor(dataGraph.length / GRAPH_SAMPLING_LIMIT));

    const handleRangeChange = useCallback(
        (event, newValue) => {
            if (isEqual(distRangeRef.current, newValue)) return;

            distRangeRef.current = newValue;
            setDistRangeValue([...newValue]);

            requestAnimationFrame(() => {
                ctx.setTrackRange({
                    range: distRangeRef.current,
                    dist: [dataGraph[newValue[0]][xAxis], dataGraph[newValue[1]][xAxis]],
                });
            });
        },
        [ctx, dataGraph, xAxis]
    );

    useEffect(() => {
        if (data) {
            setSpeedData(
                showData[y2Axis]
                    ? dataGraph.map((d, i) => ({ x: d[xAxis], y: parseFloat(d[y2Axis]), originalIndex: i }))
                    : null
            );
            setEleData(
                showData[y1Axis[0]]
                    ? dataGraph.map((d, i) => ({ x: d[xAxis], y: parseFloat(d[y1Axis[0]]), originalIndex: i }))
                    : null
            );
            setEleSRTMData(
                showData[y1Axis[1]]
                    ? dataGraph.map((d, i) => ({ x: d[xAxis], y: parseFloat(d[y1Axis[1]]), originalIndex: i }))
                    : null
            );
            setSlopeData(
                showData[y1Axis[2]] ? slopes.map((d, i) => ({ x: d.dist, y: d.slope, originalIndex: i })) : null
            );
            if (showData[y1Axis[0]]) {
                addMaxMinMarkers(y1Axis[0], minEle, maxEle);
            } else {
                const activeData = Object.keys(showData).filter((k) => showData[k] === true);
                if (activeData.length === 1) {
                    addMaxMinMarkers(activeData[0]);
                }
            }
            setDistRangeValue([0, dataGraph.length - 1]);
            ctx.setTrackRange(null);
        }
    }, [data, showData, slopes]);

    function addMaxMinMarkers(dataSet, min = null, max = null) {
        let res = {
            minInd: null,
            maxInd: null,
        };
        if (dataSet === 'Slope' && slopes?.length > 0) {
            slopes.forEach((value, index) => {
                if (value.slope === slopes.min && !res.minInd) {
                    res.minInd = index;
                }
                if (value.slope === slopes.max && !res.maxInd) {
                    res.maxInd = index;
                }
            });
        } else {
            if (min && max) {
                dataGraph.forEach((value, index) => {
                    if (value[dataSet] === min && !res.minInd) {
                        res.minInd = index;
                    }
                    if (value[dataSet] === max && !res.maxInd) {
                        res.maxInd = index;
                    }
                });
            }
        }
        if (res.minInd && res.maxInd) {
            res = {
                min:
                    dataSet === 'Slope'
                        ? { x: slopes[res.minInd].dist, y: slopes[res.minInd].slope }
                        : { x: dataGraph[res.minInd][xAxis], y: dataGraph[res.minInd][dataSet] },
                max:
                    dataSet === 'Slope'
                        ? { x: slopes[res.maxInd].dist, y: slopes[res.maxInd].slope }
                        : { x: dataGraph[res.maxInd][xAxis], y: dataGraph[res.maxInd][dataSet] },
            };
            setMaxMinData(res);
        }
    }

    const trackCoordinates = useMemo(() => {
        if (!ctx.selectedGpxFile || !dataGraph) {
            return [];
        }
        const pointList = TracksManager.getTrackPoints(ctx.selectedGpxFile);
        return Object.values(pointList).map((point, i) => ({
            lat: point.lat,
            lng: point.lng,
            distance: dataGraph[i] ? dataGraph[i][xAxis] : 0,
        }));
    }, [ctx.selectedGpxFile, dataGraph, xAxis]);

    function showMaxMin() {
        return !isEmpty(maxMinData);
    }

    function showRange() {
        const defaultPos =
            isEmpty(ctx.trackRange?.range) ||
            (ctx.trackRange.range[0] === 0 && ctx.trackRange.range[1] === dataGraph.length - 1);
        return !defaultPos;
    }

    function showY1Scale() {
        const hasEle = showData[y1Axis[0]] !== '' && showData[y1Axis[0]] !== false && showData[y1Axis[0]] !== undefined;
        const hasEleSRTM =
            showData[y1Axis[1]] !== '' && showData[y1Axis[1]] !== false && showData[y1Axis[1]] !== undefined;
        return hasEle || hasEleSRTM;
    }

    function showY2Scale() {
        return showData[y2Axis] !== '' && showData[y2Axis] !== false && showData[y2Axis] !== undefined;
    }

    function showSlopeScale() {
        return showData[y1Axis[2]] !== '' && showData[y1Axis[2]] !== false && showData[y1Axis[2]] !== undefined;
    }

    Interaction.modes.myCustomMode = function (chart, e, options, useFinalPosition) {
        const position = getRelativePosition(e, chart);
        const items = [];
        Interaction.evaluateInteractionItems(chart, 'x', position, (element, datasetIndex, index) => {
            //filter slope points and duplicates
            if (
                element.inXRange(position.x, useFinalPosition) &&
                datasetIndex !== 2 &&
                !items.some((i) => i.datasetIndex === datasetIndex)
            ) {
                items.push({ element, datasetIndex, index });
            }
        });
        return items;
    };

    function getMode() {
        return !showY1 && !showY2 && showSlope ? 'nearest' : 'myCustomMode';
    }

    const options = useMemo(
        () => ({
            responsive: true,
            maintainAspectRatio: false,
            spanGaps: true,
            animation: false,
            interaction: {
                intersect: false,
                mode: getMode(),
            },
            layout: {
                padding: {
                    left: -100,
                },
            },
            plugins: {
                annotation: {
                    annotations: {
                        label1: {
                            display: showMaxMin(),
                            type: 'line',
                            id: 'vline' + maxMinData?.min?.x,
                            mode: 'vertical',
                            scaleID: 'x',
                            value: maxMinData?.min?.x,
                            borderColor: '#757575',
                            borderWidth: 1,
                        },
                        label2: {
                            display: showMaxMin(),
                            type: 'label',
                            xValue: maxMinData?.min?.x,
                            yValue: 'center',
                            backgroundColor: '#ebf3f2',
                            content: [Math.round(maxMinData?.min?.y)],
                            font: {
                                size: 9,
                            },
                            borderRadius: 5,
                            color: 'green',
                            borderWidth: 1,
                            padding: 2,
                        },
                        label3: {
                            display: showMaxMin(),
                            type: 'line',
                            id: 'vline' + maxMinData?.max?.x,
                            mode: 'vertical',
                            scaleID: 'x',
                            value: maxMinData?.max?.x,
                            borderColor: '#757575',
                            borderWidth: 1,
                        },
                        label4: {
                            display: showMaxMin(),
                            type: 'label',
                            xValue: maxMinData?.max?.x,
                            yValue: 'center',
                            backgroundColor: '#ebf3f2',
                            content: [Math.round(maxMinData?.max?.y)],
                            font: {
                                size: 9,
                            },
                            borderRadius: 5,
                            color: 'red',
                            borderWidth: 1,
                            padding: 2,
                        },
                        box1: {
                            display: showRange(),
                            type: 'box',
                            xMin: ctx.trackRange && !isEmpty(ctx.trackRange.dist) && ctx.trackRange.dist[0],
                            xMax: ctx.trackRange && !isEmpty(ctx.trackRange.dist) && ctx.trackRange.dist[1],
                            backgroundColor: 'rgb(169,169,169, 0.34)',
                            borderWidth: 0,
                        },
                    },
                },
                tooltip: {
                    enabled: true,
                    mode: getMode(),
                    intersect: false,
                    backgroundColor: '#757575',
                    displayColors: false,
                    callbacks: {
                        title: (context) => {
                            const xValue = context[0]?.parsed?.x;
                            return `${xAxis}: ${xValue.toFixed(2)} ${t(getLargeLengthUnit(ctx))}`;
                        },
                        label: (context) => {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            const dimension =
                                context.dataset.yAxisID === 'y1'
                                    ? t(getSmallLengthUnit(ctx))
                                    : context.dataset.yAxisID === 'y1Slope'
                                      ? '%'
                                      : t(getSpeedUnit(ctx));
                            if (context.parsed.y !== null) {
                                label += `${context.parsed.y.toFixed(0)} ${dimension}`;
                            }
                            return label;
                        },
                        afterBody: (context) => {
                            let res = [];
                            const ind = dataGraph.findIndex((d) => d[xAxis] === Number(context[0].label));
                            //add slopes
                            if (dataGraph[ind] && context[0].dataset.yAxisID !== 'y1Slope' && showSlope) {
                                if (dataGraph[ind]['Slope']) {
                                    res.push(`Slope: ${dataGraph[ind]['Slope'].toFixed(0)} %`);
                                } else {
                                    res.push('Slope: N/A');
                                }
                            }
                            //add road attributes
                            if (attrGraphData) {
                                let resArr = [];
                                Object.keys(attrGraphData).forEach((k) => {
                                    const res = attrGraphData[k].datasets.find(
                                        (d, i) => ind >= d.index && checkNextSegment(attrGraphData[k].datasets, i, ind)
                                    );
                                    if (res && res.label !== cap(UNDEFINED_DATA) && k !== STEEPNESS) {
                                        resArr.push(res);
                                    }
                                });
                                if (resArr.length > 0) {
                                    res.push('-----------------------');
                                }
                                resArr.forEach((r) => {
                                    res.push(cap(r.label));
                                });
                            }
                            return res;
                        },
                    },
                },
                hover: {
                    intersect: false,
                    includeInvisible: true,
                },
                legend: {
                    display: false,
                },
                zoom: {
                    limits: {
                        x: {
                            min: dataGraph[0][xAxis],
                            max: dataGraph[dataGraph.length - 1][xAxis],
                            minRange: 0.1,
                        },
                    },
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        mode: 'x',
                        speed: 100,
                        onZoom: ({ chart }) => {
                            setZoomLevel(chart.getZoomLevel());
                        },
                    },
                    pan: {
                        enabled: true,
                        mode: 'x',
                        speed: 100,
                    },
                },
            },
            scales: {
                x: {
                    display: true,
                    type: 'linear',
                    max: parseFloat(Number(dataGraph[dataGraph.length - 1][xAxis]).toFixed(1)),
                    ticks: {
                        maxTicksLimit: 10,
                        beginAtZero: true,
                        align: 'inner',
                        font: {
                            size: 8,
                        },
                        autoSkip: true,
                    },
                    title: {
                        display: true,
                        text: `distance in ${t(getLargeLengthUnit(ctx))}`,
                        color: '#757575',
                        font: {
                            size: 10,
                            lineHeight: 1.2,
                        },
                    },
                },
                y1: {
                    display: showY1,
                    position: 'left',
                    ticks: {
                        mirror: true,
                        align: 'end',
                        z: 1000,
                        font: {
                            size: 8,
                        },
                        maxTicksLimit: 6,
                        callback: (val) => {
                            return parseFloat(val.toFixed(2)) + ` ${t(getSmallLengthUnit(ctx))}`;
                        },
                    },
                },
                y2: {
                    display: showY2,
                    position: 'right',
                    ticks: {
                        mirror: true,
                        align: 'end',
                        z: 1000,
                        font: {
                            size: 8,
                        },
                        padding: -5,
                        maxTicksLimit: 6,
                        callback: (val) => {
                            return val + ` ${t(getSpeedUnit(ctx))}`;
                        },
                    },
                    grid: {
                        display: !showY1,
                    },
                },
                ['y1Slope']: {
                    display: !showY2 && showSlope,
                    position: 'right',
                    ticks: {
                        mirror: true,
                        align: 'end',
                        z: 1000,
                        font: {
                            size: 8,
                        },
                        padding: -5,
                        maxTicksLimit: 6,
                        callback: (val) => {
                            return val + '  %';
                        },
                    },
                    grid: {
                        display: !showY1,
                    },
                },
            },
        }),
        [dataGraph, ctx.trackRange, showData]
    );

    const graphData = useMemo(
        () => ({
            labels: dataGraph.filter((_, i) => i % sliderStep === 0).map((d) => d[xAxis]?.toFixed(1)),
            datasets: [
                {
                    label: y1Axis[0],
                    type: 'line',
                    data: eleData?.filter((_, i) => i % sliderStep === 0),
                    borderColor: 'rgb(242, 217, 131)',
                    backgroundColor: 'rgba(242, 217, 131, 0.46)',
                    borderWidth: 1,
                    min: minEle,
                    max: maxEle,
                    fill: true,
                    yAxisID: 'y1',
                    pointRadius: dataGraph.length < 100 ? 2 : 0,
                    order: 2,
                },
                {
                    label: y1Axis[1],
                    type: 'line',
                    data: eleSRTMData?.filter((_, i) => i % sliderStep === 0),
                    borderColor: 'rgba(169, 212, 129, 0.79)',
                    backgroundColor: 'rgba(169, 212, 129, 0.46)',
                    borderWidth: 1,
                    min: minEle,
                    max: maxEle,
                    fill: true,
                    yAxisID: 'y1',
                    pointRadius: 0,
                    order: 3,
                },
                {
                    label: y1Axis[2],
                    type: 'line',
                    data: slopeData?.filter((_, i) => i % sliderStep === 0),
                    borderColor: 'rgba(145, 217, 255, 0.80)',
                    backgroundColor: 'rgba(145, 217, 255, 0.46)',
                    borderWidth: 1,
                    min: slopes.min,
                    max: slopes.max,
                    fill: true,
                    yAxisID: 'y1Slope',
                    pointRadius: 0,
                    order: 0,
                },
                {
                    label: y2Axis,
                    type: 'line',
                    data: speedData?.filter((_, i) => i % sliderStep === 0),
                    borderColor: '#ff595e',
                    borderWidth: 1,
                    min: minSpeed,
                    max: maxSpeed,
                    yAxisID: 'y2',
                    pointRadius: 0,
                    order: 1,
                },
            ],
        }),
        [dataGraph, eleData, eleSRTMData, slopeData, speedData, sliderStep, xAxis]
    );

    function ThumbComponent(props) {
        const { children, className, ...other } = props;
        const extraClassName = other['data-index'] === 0 ? 'first-thumb' : 'second-thumb';
        return (
            <SliderThumb {...other} className={clsx(className, extraClassName)}>
                {children}
            </SliderThumb>
        );
    }

    const valueLabelFormat = useMemo(() => {
        return (value) => `${dataGraph[value][xAxis].toFixed(1)}  ${t(getLargeLengthUnit(ctx))}`;
    }, [dataGraph, xAxis]);

    function hideSelectedPoint() {
        GraphManager.hideGraphMarker(ctx, (point) => setSelectedPoint(point));
    }
    return (
        <>
            <Box id="se-main-graph" sx={{ p: 0, height: 180 }}>
                <Chart
                    ref={chartRef}
                    style={{ fontSize: 10 }}
                    data={graphData}
                    options={options}
                    plugins={[GraphManager.mouseLine]}
                    onMouseMove={(e) =>
                        GraphManager.handleGraphMouseMove(e, chartRef, ctx, trackCoordinates, (point) => {
                            if (point) {
                                setSelectedPoint({
                                    ind: point.index,
                                    dist: point.distance,
                                });
                            } else {
                                setSelectedPoint(null);
                            }
                        })
                    }
                    onMouseLeave={() => hideSelectedPoint()}
                />
            </Box>
            <Slider
                sx={{
                    '& .MuiSlider-thumb.first-thumb': {
                        backgroundImage: "url('/map/images/map_icons/map_track_point_start.svg')",
                        backgroundPosition: 'center',
                    },
                    '& .MuiSlider-thumb.second-thumb': {
                        backgroundImage: "url('/map/images/map_icons/map_track_point_finish.svg')",
                        backgroundPosition: 'center',
                    },
                    '& .MuiSlider-valueLabel': {
                        fontSize: '8px',
                    },
                }}
                valueLabelDisplay="auto"
                valueLabelFormat={valueLabelFormat}
                getAriaLabel={() => 'Distance range'}
                size="small"
                value={distRangeValue}
                onChange={handleRangeChange}
                min={0}
                step={sliderStep}
                max={dataGraph?.length - 1}
                components={{ Thumb: ThumbComponent }}
            />
        </>
    );
}
