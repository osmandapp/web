import { Box, Divider, Grid, Icon, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { Bar } from 'react-chartjs-2';
import { Tooltip, Legend, Chart as ChartJS, BarElement } from 'chart.js';
import React, { useContext, useRef } from 'react';
import annotationsPlugin from 'chartjs-plugin-annotation';
import TracksManager from '../../../context/TracksManager';
import AppContext from '../../../context/AppContext';

ChartJS.register(Tooltip, Legend, BarElement, annotationsPlugin);

export default function RoadAttributesGraph({ name, data, width }) {
    const ctx = useContext(AppContext);
    const chartRef = useRef(null);

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                intersect: false,
                backgroundColor: '#757575',
                displayColors: false,
                callbacks: {
                    label: (context) => {
                        let label = context.dataset?.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.x !== null) {
                            label += `${context.parsed.x} km`;
                        }
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                display: true,
                type: 'linear',
                max: Object.values(data.legend).reduce((a, b) => a + b, 0),
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
            y: {
                stacked: true,
                display: false,
            },
        },
    };

    const graphData = {
        labels: [name],
        datasets: data.datasets,
    };

    function prepareType(type) {
        if (type) {
            type = type.replaceAll('_', ' ');
            type = type.charAt(0).toUpperCase() + type.slice(1);
        }
        return type;
    }

    function prepareDistance(value) {
        if (value?.distance) {
            if (value.distance > 0.01) {
                return `${(value.distance / 1000).toFixed(2)} km`;
            } else {
                return '< 10 m';
            }
        }
        return '0 m';
    }

    function onMouseMoveGraph(e, chartRef) {
        if (!chartRef) {
            return;
        }
        if (ctx.mapMarkerListener && ctx.selectedGpxFile && chartRef.current._active?.length > 0) {
            let selected = chartRef.current._active[0];
            if (selected) {
                let pointList = TracksManager.getTrackPoints(ctx.selectedGpxFile);
                const ind = data.datasets[selected.datasetIndex].index;
                if (ind) {
                    const lat = Object.values(pointList)[ind].lat;
                    const lng = Object.values(pointList)[ind].lng;
                    ctx.mapMarkerListener(lat, lng);
                } else {
                    ctx.mapMarkerListener(null);
                }
            }
        } else {
            ctx.mapMarkerListener(null);
        }
    }

    return (
        <Box sx={{ p: 0, width: Number(width.replace('px', '')) - 40 }}>
            <Divider sx={{ mt: '15px', mb: '12px' }} />
            <Typography variant="inherit" sx={{ color: '#666666', fontWeight: 'bold', mb: 2 }}>
                {name}
            </Typography>
            <Box sx={{ p: 0, width: Number(width.replace('px', '')) - 40, height: 100 }}>
                <Bar
                    margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                    style={{ fontSize: 10 }}
                    data={graphData}
                    options={options}
                    onMouseMove={(e) => onMouseMoveGraph(e, chartRef)}
                    ref={chartRef}
                />
            </Box>
            <Grid sx={{ mt: 1, ml: '-8px' }} container spacing={2}>
                {data &&
                    Object.entries(data.legend)
                        .sort((a, b) => b[1].distance - a[1].distance)
                        .map(([type, value]) => {
                            return (
                                <Grid
                                    item
                                    key={type}
                                    sx={{ display: 'flex', paddingTop: '0px !important', ml: '-16px !important' }}
                                    xs={Object.entries(data.legend).length > 5 ? 6 : 12}
                                >
                                    <Icon sx={{ overflow: 'visible' }}>
                                        <CircleIcon sx={{ color: value.color, fontSize: '0.8rem' }} />
                                    </Icon>
                                    <Typography
                                        variant="inherit"
                                        sx={{
                                            color: '#666666',
                                            fontWeight: 'bold',
                                            fontSize: 11,
                                            margin: '14px 0px 0px 0px !important',
                                        }}
                                    >
                                        {prepareType(type)}
                                    </Typography>
                                    <Typography
                                        variant="inherit"
                                        sx={{
                                            color: '#666666',
                                            fontSize: 11,
                                            margin: '14px 0px 0px 0px !important',
                                        }}
                                    >
                                        : {prepareDistance(value)}
                                    </Typography>
                                </Grid>
                            );
                        })}
            </Grid>
        </Box>
    );
}
