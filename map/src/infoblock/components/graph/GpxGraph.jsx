import React, { useContext, useEffect, useRef, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import {
    Tooltip,
    Legend,
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineController,
    LineElement,
    Filler,
} from 'chart.js';
import { Box, Slider, SliderThumb } from '@mui/material';
import AppContext from '../../../context/AppContext';
import TracksManager from '../../../context/TracksManager';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationsPlugin from 'chartjs-plugin-annotation';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

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
    afterDraw: function (chart) {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        const x = chart.options.mouseLine?.x;
        if (!isNaN(x)) {
            ctx.save();
            ctx.lineWidth = 1;
            ctx.moveTo(chart.options.mouseLine.x, chartArea.bottom);
            ctx.lineTo(chart.options.mouseLine.x, chartArea.top);
            ctx.strokeStyle = '#757575';
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
    LineController,
    LineElement,
    Filler,
    zoomPlugin,
    mouseLine,
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

export default function GpxGraph({ data, showData, xAxis, y1Axis, y2Axis, width, minEle, maxEle, minSpeed, maxSpeed }) {
    const ctx = useContext(AppContext);
    const styles = useStyles();

    const [speedData, setSpeedData] = useState(null);
    const [eleData, setEleData] = useState(null);
    const [eleSRTMData, setEleSRTMData] = useState(null);
    const [maxMinData, setMaxMinData] = useState({});
    const [distRangeValue, setDistRangeValue] = useState([0, data.length - 1]);

    const chartRef = useRef(null);

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
            if (showData[y1Axis[0]]) {
                addMaxMinMarkers(minEle, maxEle, y1Axis[0]);
            }
            setDistRangeValue([0, data.length]);
            ctx.setTrackRange(null);
        }
    }, [data, showData]);

    function addMaxMinMarkers(min, max, dataSet) {
        let res = {
            min: null,
            max: null,
        };
        data.forEach((value, index) => {
            if (value[dataSet] === min && !res.min) {
                res.min = index;
            }
            if (value[dataSet] === max && !res.max) {
                res.max = index;
            }
        });
        if (res.min && res.max) {
            res = {
                min: { x: res.min, y: data[res.min][dataSet] },
                max: { x: res.max, y: data[res.max][dataSet] },
            };
            let newMaxMin = Object.assign({}, maxMinData);
            newMaxMin[dataSet] = res;
            setMaxMinData(newMaxMin);
        }
    }

    function onMouseMoveGraph(e, chartRef) {
        if (!chartRef) {
            return;
        }
        if (ctx.mapMarkerListener && ctx.selectedGpxFile && chartRef.current._active?.length > 0) {
            let pointList = TracksManager.getTrackPoints(ctx.selectedGpxFile);
            const ind = chartRef.current._active[0].element.$context.index;
            if (ind) {
                const lat = Object.values(pointList)[ind].lat;
                const lng = Object.values(pointList)[ind].lng;
                ctx.mapMarkerListener(lat, lng);
            } else {
                ctx.mapMarkerListener(null);
            }
        } else {
            ctx.mapMarkerListener(null);
        }
    }

    function showMaxMin(dataSet) {
        return showData[dataSet] && !_.isEmpty(maxMinData) && maxMinData[dataSet];
    }

    function showRange() {
        const defaultPos = distRangeValue[0] === 0 && distRangeValue[1] === data.length;
        return !defaultPos;
    }

    function showY1Scale() {
        const hasEle = showData[y1Axis[0]] !== '' && showData[y1Axis[0]] !== false;
        const hasEleSRTM = showData[y1Axis[1]] !== '' && showData[y1Axis[1]] !== false;
        return hasEle || hasEleSRTM;
    }

    function showY2Scale() {
        return showData[y2Axis] !== '' && showData[y2Axis] !== false;
    }

    const options = {
        responsive: true,
        spanGaps: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            annotation: {
                annotations: {
                    label1: {
                        display: showMaxMin(y1Axis[0]),
                        type: 'line',
                        id: 'vline' + maxMinData[y1Axis[0]]?.min?.x,
                        mode: 'vertical',
                        scaleID: 'x',
                        value: maxMinData[y1Axis[0]]?.min?.x,
                        borderColor: '#757575',
                        borderWidth: 1,
                    },
                    label2: {
                        display: showMaxMin(y1Axis[0]),
                        type: 'label',
                        xValue: maxMinData[y1Axis[0]]?.min?.x,
                        yValue: 'center',
                        backgroundColor: '#ebf3f2',
                        content: [Math.round(maxMinData[y1Axis[0]]?.min?.y)],
                        font: {
                            size: 9,
                        },
                        borderRadius: 5,
                        color: 'green',
                        borderWidth: 1,
                        padding: 2,
                    },
                    label3: {
                        display: showMaxMin(y1Axis[0]),
                        type: 'line',
                        id: 'vline' + maxMinData[y1Axis[0]]?.max?.x,
                        mode: 'vertical',
                        scaleID: 'x',
                        value: maxMinData[y1Axis[0]]?.max?.x,
                        borderColor: '#757575',
                        borderWidth: 1,
                    },
                    label4: {
                        display: showMaxMin(y1Axis[0]),
                        type: 'label',
                        xValue: maxMinData[y1Axis[0]]?.max?.x,
                        yValue: 'center',
                        backgroundColor: '#ebf3f2',
                        content: [Math.round(maxMinData[y1Axis[0]]?.max?.y)],
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
                        xMin: distRangeValue[0],
                        xMax: distRangeValue[1],
                        backgroundColor: 'rgba(245, 208, 39, 0.34)',
                    },
                },
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                backgroundColor: '#757575',
                displayColors: false,
                callbacks: {
                    title: (context) => {
                        return `${xAxis}: ${context[0].label} km`;
                    },
                    label: (context) => {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        const dimension = context.dataset.yAxisID === 'y1' ? 'm' : 'm/s';
                        if (context.parsed.y !== null) {
                            label += `${context.parsed.y} ${dimension}`;
                        }
                        return label;
                    },
                },
            },
            hover: {
                mode: 'nearest',
                intersect: false,
                includeInvisible: true,
            },
            legend: {
                display: false,
            },
            zoom: {
                limits: {
                    y1: { min: minEle - 10, max: maxEle + 10 },
                    y2: { min: minSpeed - 10, max: maxSpeed + 10 },
                },
                zoom: {
                    wheel: {
                        enabled: true,
                        rangeMax: {
                            y: maxEle,
                        },
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
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: width === 400 && 10,
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
                display: showY1Scale(),
                position: 'left',
                title: {
                    display: true,
                    text: 'ele in m',
                    color: '#757575',
                    font: {
                        size: 10,
                        lineHeight: 1.2,
                    },
                },
            },
            y2: {
                display: showY2Scale(),
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'speed in m/s',
                    color: '#757575',
                    font: {
                        size: 10,
                        lineHeight: 1.2,
                    },
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
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                min: minEle,
                max: maxEle,
                fill: true,
                yAxisID: 'y1',
                pointRadius: 0,
            },
            {
                label: y1Axis[1],
                type: 'line',
                data: eleSRTMData,
                borderColor: 'rgba(245, 230, 39, 0.79)',
                backgroundColor: 'rgba(245, 230, 39, 0.46)',
                min: minEle,
                max: maxEle,
                fill: true,
                yAxisID: 'y1',
                pointRadius: 0,
            },
            {
                label: y2Axis,
                type: 'line',
                data: speedData,
                borderColor: '#ff595e',
                min: minSpeed,
                max: maxSpeed,
                yAxisID: 'y2',
                pointRadius: 0,
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

    return (
        <>
            <Box sx={{ p: 0, maxWidth: width - 40 }}>
                <Chart
                    ref={chartRef}
                    width={width - 40}
                    height={150}
                    margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                    style={{ fontSize: 10 }}
                    data={graphData}
                    options={options}
                    onMouseMove={(e) => onMouseMoveGraph(e, chartRef)}
                    onMouseLeave={() => ctx.mapMarkerListener(null)}
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
