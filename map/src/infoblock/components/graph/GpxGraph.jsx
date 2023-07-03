import React, {useContext, useRef} from 'react';
import {Chart} from 'react-chartjs-2';
import {
    Tooltip,
    Legend,
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineController,
    LineElement,
    Filler
} from "chart.js";
import {Typography} from "@mui/material";
import AppContext from "../../../context/AppContext";
import TracksManager from "../../../context/TracksManager";
import zoomPlugin from "chartjs-plugin-zoom";

const mouseLine = {
    id: 'mouseLine',
    afterEvent: function (chart, e) {
        const chartArea = chart.chartArea;
        chart.options.mouseLine = {};
        if (e.event.x >= chartArea.left && e.event.y >= chartArea.top &&
            e.event.x <= chartArea.right && e.event.y <= chartArea.bottom &&
            chart._active.length > 0) {
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
            ctx.lineWidth = 1
            ctx.moveTo(chart.options.mouseLine.x, chartArea.bottom);
            ctx.lineTo(chart.options.mouseLine.x, chartArea.top);
            ctx.strokeStyle = '#757575';
            ctx.stroke();
            ctx.restore();
        }
    }
}


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
    mouseLine
);


export default function GpxGraph({data, xAxis, yAxis, width, minEle, maxEle, minSpeed, maxSpeed}) {

    const ctx = useContext(AppContext);

    minEle = Math.ceil(minEle / 10) * 10;
    maxEle = Math.floor(maxEle / 10) * 10;

    const chartRef = useRef(null);

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


    const options = {
        responsive: true,
        spanGaps: true,
        interaction: {
            intersect: false,
            mode: 'index'
        },
        plugins: {
            tooltip: {
                enabled: true,
                mode: "index",
                intersect: false,
                backgroundColor: '#757575',
                displayColors: false,
                callbacks: {
                    title: (context) => {
                        return `Distance: ${context[0].label} km`
                    },
                    label: (context) => {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        const dimension = context.dataset.yAxisID === 'y1' ? 'm' : 'm/c'
                        if (context.parsed.y !== null) {
                            label += `${context.parsed.y} ${dimension}`;
                        }
                        return label;
                    }
                }
            },
            hover: {
                mode: "nearest",
                intersect: false,
                includeInvisible: true
            },
            legend: {
                display: false
            },
            zoom: {
                limits: {
                    y: {min: minEle - 10, max: maxEle + 10}
                },
                zoom: {
                    wheel: {
                        enabled: true,
                        rangeMax: {
                            y: maxEle
                        }
                    },
                    mode: "xy",
                    speed: 100,
                },
                pan: {
                    enabled: true,
                    mode: "xy",
                    speed: 100
                }
            }
        },
        scales: {
            x: {
                display: true,
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 7,
                },
                title: {
                    display: true,
                    text: 'distance in km',
                    color: '#757575',
                    font: {
                        size: 10,
                        lineHeight: 1.2,
                    }
                }
            },
            y1: {
                display: minEle && maxEle,
                position: 'left',
                title: {
                    display: true,
                    text: 'ele in m',
                    color: '#757575',
                    font: {
                        size: 10,
                        lineHeight: 1.2,
                    }
                }
            },
            y2: {
                display: minSpeed !== null && maxSpeed !== null,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
                title: {
                    display: true,
                    text: 'speed in m/c',
                    color: '#757575',
                    font: {
                        size: 10,
                        lineHeight: 1.2,
                    }
                }
            },
        }
    };

    const graphData = {
        labels: data.map((d) => {
            if (d[`${xAxis}`] !== 0) {
                return d[`${xAxis}`].toFixed(2)
            } else {
                return 0;
            }
        }),
        datasets: [
            {
                label: 'Elevation',
                type: 'line',
                data: data.map((d) => d[`${yAxis}`]),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                min: minEle,
                max: maxEle,
                fill: true,
                yAxisID: 'y1',
                pointRadius: 0
            },
            {
                label: 'ElevationSRTM',
                type: 'line',
                data: data.map((d) => d[`ElevationSRTM`]),
                borderColor: '#ffc939',
                backgroundColor: '#f7fabe',
                min: minEle,
                max: maxEle,
                fill: true,
                yAxisID: 'y1',
                pointRadius: 0
            },
            {
                label: 'Speed',
                type: 'line',
                data: data.map((d) => d[`Speed`]),
                borderColor: '#ff595e',
                min: minSpeed,
                max: maxSpeed,
                yAxisID: 'y2',
                pointRadius: 0
            },
        ],
    };


    return (<>
            <Typography component={'span'} type="title" color="inherit" sx={{p: 0}}>
                <Chart
                    ref={chartRef}
                    width={width}
                    height={150}
                    margin={{top: 0, right: 0, left: -20, bottom: 0}}
                    style={{fontSize: 10}}
                    data={graphData}
                    options={options}
                    onMouseMove={(e) => onMouseMoveGraph(e, chartRef)}
                    onMouseLeave={() => ctx.mapMarkerListener(null)}
                />
            </Typography>
        </>
    );
};