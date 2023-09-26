import { Box, Button, Collapse, Divider, Grid, Icon, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { Bar } from 'react-chartjs-2';
import { Tooltip, Legend, Chart as ChartJS, BarElement } from 'chart.js';
import React, { useContext, useRef, useState } from 'react';
import annotationsPlugin from 'chartjs-plugin-annotation';
import TracksManager from '../../../manager/TracksManager';
import AppContext from '../../../context/AppContext';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { cap } from '../../../manager/GraphManager';

ChartJS.register(Tooltip, Legend, BarElement, annotationsPlugin);

export default function RoadAttributesGraph({ name, data, width, selectedPoint }) {
    const ctx = useContext(AppContext);
    const chartRef = useRef(null);

    const [open, setOpen] = useState(false);

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        layout: {
            padding: {
                left: -100,
            },
        },
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
                    title: () => null,
                    label: (context) => {
                        let label = context.dataset?.label || '';
                        if (label) {
                            return `${cap(label)}: ${context.parsed.x} km`;
                        }
                    },
                },
            },
            annotation: {
                annotations: {
                    label1: {
                        display: selectedPoint !== null,
                        type: 'line',
                        id: 'selectedPoint',
                        mode: 'vertical',
                        scaleID: 'x',
                        value: selectedPoint?.dist,
                        borderColor: '#ffffff',
                        borderWidth: 1,
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
                ticks: {
                    maxTicksLimit: 10,
                    beginAtZero: true,
                    align: 'inner',
                    font: {
                        size: 8,
                    },
                    autoSkip: true,
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
            type = cap(type);
        }
        return type;
    }

    function prepareDistance(value) {
        if (value?.distance) {
            if (value.distance > 10) {
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
        if (ctx.selectedGpxFile && chartRef.current._active?.length > 0) {
            let selected = chartRef.current._active[0];
            if (selected) {
                let pointList = TracksManager.getTrackPoints(ctx.selectedGpxFile);
                const ind = data.datasets[selected.datasetIndex].index;
                if (ind) {
                    const range = [ind, ind + Number(pointList[ind].segment.ext.length)];
                    ctx.setTrackRange(range);
                } else {
                    hideSelectedPointSegment();
                }
            }
        } else {
            hideSelectedPointSegment();
        }
    }

    function hideSelectedPointSegment() {
        ctx.setTrackRange([]);
    }

    return (
        <Box sx={{ p: 0, width: Number(width.replace('px', '')) - 40 }}>
            <Divider sx={{ mt: '15px', mb: '12px' }} />
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography variant="inherit" sx={{ color: '#666666', fontWeight: 'bold', mb: 2 }}>
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        size="small"
                        sx={{ color: '#f8931d', mt: '-1px' }}
                        onClick={() => setOpen(!open)}
                        id={'se-open-attr-legend-' + name + (open ? '-open' : '-hide')}
                    >
                        Details
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </Button>
                </Grid>
            </Grid>
            <Box sx={{ p: 0, width: Number(width.replace('px', '')) - 42, height: 60 }}>
                <Bar
                    margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                    style={{ fontSize: 10 }}
                    data={graphData}
                    options={options}
                    onMouseMove={(e) => onMouseMoveGraph(e, chartRef)}
                    onMouseLeave={hideSelectedPointSegment}
                    ref={chartRef}
                />
            </Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
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
                                        xs={Object.entries(data.legend).length > 3 ? 6 : 12}
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
            </Collapse>
        </Box>
    );
}
