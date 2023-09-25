import React, { useContext, useEffect, useRef, useState } from 'react';
import { Chart } from 'react-chartjs-2';
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
import { Box, Slider, SliderThumb } from '@mui/material';
import AppContext from '../../../context/AppContext';
import TracksManager from '../../../context/TracksManager';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationsPlugin from 'chartjs-plugin-annotation';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { getRelativePosition } from 'chart.js/helpers';

const mouseLine = {
    id: 'mouseLine',
    afterEvent: function (chart, e) {
        const chartArea = chart.chartArea;
        chart.options.mouseLine = {};
        if (
            e.event.x >= chartArea.left &&
            e.event.y >= chartArea.top &&
            e.event.x <= chartArea.right &&
            e.event.y <= chartArea.bottom &&
            chart._active.length > 0
        ) {
            chart.options.mouseLine = {};
            chart.options.mouseLine.x = chart._active[0].element.x;
        } else {
            chart.options.mouseLine = {};
            chart.options.mouseLine.x = NaN;
        }
    },
    beforeTooltipDraw: function (chart) {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        const x = chart.options.mouseLine?.x;
        if (!isNaN(x)) {
            ctx.save();
            ctx.lineWidth = 2;
            ctx.moveTo(chart.options.mouseLine.x, chartArea.bottom);
            ctx.lineTo(chart.options.mouseLine.x, chartArea.top);
            ctx.strokeStyle = '#1976d2';
            ctx.stroke();
            ctx.restore();
        }
    },
};

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

const useStyles = makeStyles({
    slider: {
        '& .MuiSlider-thumb': {
            '&.first-thumb': {
                backgroundImage: `url('/map/images/map_icons/map_track_point_start.svg')`,
                backgroundPosition: 'center',
            },
            '&.second-thumb ': {
                backgroundImage: `url('/map/images/map_icons/map_track_point_finish.svg')`,
                backgroundPosition: 'center',
            },
        },
        '& .MuiSlider-valueLabel': { fontSize: '8px' },
    },
});

export default function GpxGraph({
    data,
    showData,
    xAxis,
    y1Axis,
    y2Axis,
    width,
    minEle,
    maxEle,
    minSpeed,
    maxSpeed,
    slopes,
    setSelectedPoint,
    pointTypes,
}) {
    const ctx = useContext(AppContext);
    const styles = useStyles();

    const [speedData, setSpeedData] = useState(null);
    const [eleData, setEleData] = useState(null);
    const [eleSRTMData, setEleSRTMData] = useState(null);
    const [slopeData, setSlopeData] = useState(null);
    const [maxMinData, setMaxMinData] = useState({});
    const [distRangeValue, setDistRangeValue] = useState([0, data.length - 1]);
    const [lastPointInd, setLastPointInd] = useState(null);

    const chartRef = useRef(null);

    const showY1 = showY1Scale();
    const showY2 = showY2Scale();
    const showSlope = showSlopeScale();
    const handleRangeChange = (event, newValue) => {
        setDistRangeValue(newValue);
        if (showRange) {
            ctx.setTrackRange(newValue);
        }
    };
    useEffect(() => {
        if (data) {
            setSpeedData(showData[y2Axis] ? data.map((d) => ({ x: d[xAxis], y: d[y2Axis] })) : null);
            setEleData(showData[y1Axis[0]] ? data.map((d) => ({ x: d[xAxis], y: d[y1Axis[0]] })) : null);
            setEleSRTMData(showData[y1Axis[1]] ? data.map((d) => ({ x: d[xAxis], y: d[y1Axis[1]] })) : null);
            setSlopeData(showData[y1Axis[2]] ? slopes.map((d) => ({ x: d.dist, y: d.slope })) : null);
            if (showData[y1Axis[0]]) {
                addMaxMinMarkers(y1Axis[0], minEle, maxEle);
            } else {
                const activeData = Object.keys(showData).filter((k) => showData[k] === true);
                if (activeData.length === 1) {
                    addMaxMinMarkers(activeData[0]);
                }
            }
            setDistRangeValue([0, data.length - 1]);
            ctx.setTrackRange([]);
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
                data.forEach((value, index) => {
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
                        : { x: data[res.minInd][xAxis], y: data[res.minInd][dataSet] },
                max:
                    dataSet === 'Slope'
                        ? { x: slopes[res.maxInd].dist, y: slopes[res.maxInd].slope }
                        : { x: data[res.maxInd][xAxis], y: data[res.maxInd][dataSet] },
            };
            setMaxMinData(res);
        }
    }

    function onMouseMoveGraph(e, chartRef) {
        if (!chartRef) {
            return;
        }
        if (ctx.mapMarkerListener && ctx.selectedGpxFile && chartRef.current._active?.length > 0) {
            //filter slope points
            let selected = chartRef.current._active.find((data) => data.datasetIndex !== 2);
            if (selected) {
                let pointList = TracksManager.getTrackPoints(ctx.selectedGpxFile);
                const ind = selected.element.$context.index;
                // add marker to map
                if (ind) {
                    const lat = Object.values(pointList)[ind].lat;
                    const lng = Object.values(pointList)[ind].lng;
                    ctx.mapMarkerListener(lat, lng);
                } else {
                    hideSelectedPoint();
                }
            }
        } else {
            hideSelectedPoint();
        }
    }

    function showMaxMin() {
        return !_.isEmpty(maxMinData);
    }

    function showRange() {
        const defaultPos =
            _.isEmpty(ctx.trackRange) || (ctx.trackRange[0] === 0 && ctx.trackRange[1] === data.length - 1);
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
        return !showY1 && !showY2 && showSlope ? 'index' : 'myCustomMode';
    }

    function getSelectedBoxPosition(ind) {
        return !_.isEmpty(ctx.trackRange) && data[ctx.trackRange[ind]] && data[ctx.trackRange[ind]][xAxis];
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        animation: {
            duration: 400,
        },
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
                        xMin: getSelectedBoxPosition(0),
                        xMax: getSelectedBoxPosition(1),
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
                        return `${xAxis}: ${Number(context[0].label).toFixed(2)} km`;
                    },
                    label: (context) => {
                        let label = context.dataset.label || '';
                        let ind = data.findIndex((d) => d[xAxis] === Number(context.label));
                        if ((!lastPointInd || lastPointInd !== ind) && context.dataset.yAxisID !== 'y1Slope') {
                            setSelectedPoint({
                                ind: ind,
                                dist: data[ind][xAxis],
                            });
                        }
                        setLastPointInd(ind);
                        if (label) {
                            label += ': ';
                        }
                        const dimension =
                            context.dataset.yAxisID === 'y1'
                                ? 'm'
                                : context.dataset.yAxisID === 'y1Slope'
                                ? '%'
                                : 'km/h';
                        if (context.parsed.y !== null) {
                            label += `${context.parsed.y.toFixed(0)} ${dimension}`;
                        }
                        let res = [];
                        res.push(label);
                        if (data[ind] && context.dataset.yAxisID !== 'y1Slope' && showSlope) {
                            res.push(`Slope: ${data[ind]['Slope'].toFixed(0)} %`);
                        }
                        res.push('-------------------------');
                        if (pointTypes) {
                            res.push(pointTypes.type);
                            res.push(pointTypes.surface);
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
                        min: data[0][xAxis],
                        max: data[data.length - 1][xAxis],
                        minRange: 0.1,
                    },
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    mode: 'x',
                    speed: 100,
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
                max: Number(data[data.length - 1][xAxis]).toFixed(1),
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
                    text: 'distance in km',
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
                        return val + ' m';
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
                        return val + ' km/h';
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
    };

    const graphData = {
        labels: data.map((d) => (d[xAxis] !== 0 ? d[xAxis].toFixed(1) : 0)),
        datasets: [
            {
                label: y1Axis[0],
                type: 'line',
                data: eleData,
                borderColor: 'rgb(242, 217, 131)',
                backgroundColor: 'rgba(242, 217, 131, 0.46)',
                borderWidth: 1,
                min: minEle,
                max: maxEle,
                fill: true,
                yAxisID: 'y1',
                pointRadius: 0,
                order: 2,
            },
            {
                label: y1Axis[1],
                type: 'line',
                data: eleSRTMData,
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
                data: slopeData,
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
                data: speedData,
                borderColor: '#ff595e',
                borderWidth: 1,
                min: minSpeed,
                max: maxSpeed,
                yAxisID: 'y2',
                pointRadius: 0,
                order: 1,
            },
        ],
    };

    function ThumbComponent(props) {
        const { children, className, ...other } = props;
        const extraClassName = other['data-index'] === 0 ? 'first-thumb' : 'second-thumb';
        return (
            <SliderThumb {...other} className={clsx(className, extraClassName)}>
                {children}
            </SliderThumb>
        );
    }

    function valueLabelFormat(value) {
        return `${data[value][xAxis].toFixed(1)}  km`;
    }

    function hideSelectedPoint() {
        ctx.mapMarkerListener(null);
        setSelectedPoint(null);
    }

    return (
        <>
            <Box sx={{ p: 0, width: Number(width.replace('px', '')) - 42, height: 180 }}>
                <Chart
                    ref={chartRef}
                    style={{ fontSize: 10 }}
                    data={graphData}
                    options={options}
                    plugins={[mouseLine]}
                    onMouseMove={(e) => onMouseMoveGraph(e, chartRef)}
                    onMouseLeave={() => hideSelectedPoint()}
                />
            </Box>
            <Slider
                className={styles.slider}
                valueLabelDisplay="auto"
                valueLabelFormat={valueLabelFormat}
                getAriaLabel={() => 'Distance range'}
                size="small"
                value={distRangeValue}
                onChange={handleRangeChange}
                min={0}
                step={1}
                max={data.length - 1}
                components={{ Thumb: ThumbComponent }}
            />
        </>
    );
}
