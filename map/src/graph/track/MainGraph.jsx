import { Chart } from 'react-chartjs-2';
import { Box, Slider, SliderThumb } from '@mui/material';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import isEmpty from 'lodash-es/isEmpty';
import isEqual from 'lodash-es/isEqual';
import GraphManager, { cap, DISTANCE, ELEVATION, ELEVATION_SRTM, SLOPE, SPEED } from '../GraphManager';
import { checkNextSegment, STEEPNESS, UNDEFINED_DATA } from './roadAttributes';
import { hasValue, sampleSeries } from '../model/sampling';
import { useGraphUnits } from '../../util/hooks/useGraphUnits';
import { activeMouseLinePlugin } from '../plugins/mouseLinePlugin';
import { CUSTOM_MODE } from '../plugins/interactionModes';
import AppContext from '../../context/AppContext';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Tooltip,
} from 'chart.js';
import { formatNumber, toFont } from 'chart.js/helpers';
import clsx from 'clsx';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationsPlugin from 'chartjs-plugin-annotation';
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

const GRAPH_SAMPLING_LIMIT = 500;

const ELEVATION_AXIS = 'y1';
const SPEED_AXIS = 'y2';
const SLOPE_AXIS = 'y1Slope';

export default function MainGraph({ profile, slopes, attrGraphData, visible, setSelectedPoint, width }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const units = useGraphUnits();
    const chartRef = useRef(null);
    const distRangeRef = useRef([0, profile.length - 1]);

    const [distRangeValue, setDistRangeValue] = useState([0, profile.length - 1]);
    const [zoomLevel, setZoomLevel] = useState(1);

    const showY1 = !!(visible[ELEVATION] || visible[ELEVATION_SRTM]);
    const showY2 = !!visible[SPEED];
    const showSlope = !!visible[SLOPE];
    const sliderStep = zoomLevel > 3 ? 1 : Math.max(1, Math.floor(profile.length / GRAPH_SAMPLING_LIMIT));

    const xs = useMemo(() => profile.map((p) => units.distance(p.distance)), [profile, units]);

    const series = useMemo(() => {
        const line = (valueOf) => profile.map((p, index) => ({ x: xs[index], y: valueOf(p), index }));

        return {
            [ELEVATION]: visible[ELEVATION] ? line((p) => units.elevation(p.elevation)) : null,
            [ELEVATION_SRTM]: visible[ELEVATION_SRTM] ? line((p) => units.elevation(p.srtmElevation)) : null,
            [SPEED]: visible[SPEED] ? line((p) => units.speed(p.speed)) : null,
            [SLOPE]:
                visible[SLOPE] && slopes
                    ? slopes.grid.map((s) => ({ x: units.distance(s.distance), y: s.slope, index: s.index }))
                    : null,
        };
    }, [profile, slopes, visible, units, xs]);

    const markers = useMemo(() => {
        const shown = Object.keys(visible).filter((key) => visible[key]);
        if (visible[ELEVATION]) {
            return extremes(series[ELEVATION]);
        }
        if (shown.length === 1) {
            return extremes(series[shown[0]]);
        }

        return null;
    }, [series, visible]);

    const trackCoordinates = useMemo(
        () => profile.map((p, i) => ({ lat: p.lat, lng: p.lng, distance: xs[i] })),
        [profile, xs]
    );

    const handleRangeChange = useCallback(
        (event, newValue) => {
            if (isEqual(distRangeRef.current, newValue)) return;

            distRangeRef.current = newValue;
            setDistRangeValue([...newValue]);

            requestAnimationFrame(() => {
                ctx.setTrackRange({
                    range: distRangeRef.current,
                    dist: [xs[newValue[0]], xs[newValue[1]]],
                });
            });
        },
        [ctx, xs]
    );

    useEffect(() => {
        distRangeRef.current = [0, profile.length - 1];
        setDistRangeValue([0, profile.length - 1]);
        ctx.setTrackRange(null);
    }, [profile, visible]);

    useEffect(() => {
        window.seGraphData = { profile, slopes };

        return () => {
            window.seGraphData = null;
        };
    }, [profile, slopes]);

    function showRange() {
        const defaultPos =
            isEmpty(ctx.trackRange?.range) ||
            (ctx.trackRange.range[0] === 0 && ctx.trackRange.range[1] === profile.length - 1);
        return !defaultPos;
    }

    function getMode() {
        return !showY1 && !showY2 && showSlope ? 'nearest' : CUSTOM_MODE;
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
                            display: !!markers,
                            type: 'line',
                            id: 'vline' + markers?.min.x,
                            mode: 'vertical',
                            scaleID: 'x',
                            value: markers?.min.x,
                            borderColor: '#757575',
                            borderWidth: 1,
                        },
                        label2: {
                            display: !!markers,
                            type: 'label',
                            xValue: markers?.min.x,
                            yValue: 'center',
                            backgroundColor: '#ebf3f2',
                            content: [Math.round(markers?.min.y)],
                            font: {
                                size: 9,
                            },
                            borderRadius: 5,
                            color: 'green',
                            borderWidth: 1,
                            padding: 2,
                        },
                        label3: {
                            display: !!markers,
                            type: 'line',
                            id: 'vline' + markers?.max.x,
                            mode: 'vertical',
                            scaleID: 'x',
                            value: markers?.max.x,
                            borderColor: '#757575',
                            borderWidth: 1,
                        },
                        label4: {
                            display: !!markers,
                            type: 'label',
                            xValue: markers?.max.x,
                            yValue: 'center',
                            backgroundColor: '#ebf3f2',
                            content: [Math.round(markers?.max.y)],
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
                            return `${DISTANCE}: ${xValue.toFixed(2)} ${t(getLargeLengthUnit(ctx))}`;
                        },
                        label: (context) => {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            const dimension =
                                context.dataset.yAxisID === ELEVATION_AXIS
                                    ? t(getSmallLengthUnit(ctx))
                                    : context.dataset.yAxisID === SLOPE_AXIS
                                      ? '%'
                                      : t(getSpeedUnit(ctx));
                            if (context.parsed.y !== null) {
                                label += `${Math.round(context.parsed.y)} ${dimension}`;
                            }
                            return label;
                        },
                        afterBody: (context) => {
                            let res = [];
                            const ind = context[0].raw.index;
                            //add slopes
                            if (context[0].dataset.yAxisID !== SLOPE_AXIS && showSlope) {
                                const slope = slopes?.pointSlopes[ind];
                                if (Number.isFinite(slope)) {
                                    res.push(`Slope: ${Math.round(slope)} %`);
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
                            min: xs[0],
                            max: xs.at(-1),
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
                    max: xs.at(-1),
                    afterTickToLabelConversion: labelAxisBounds,
                    ticks: {
                        includeBounds: false,
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
                [ELEVATION_AXIS]: {
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
                [SPEED_AXIS]: {
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
                [SLOPE_AXIS]: {
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
        [xs, markers, ctx.trackRange, visible, slopes, attrGraphData]
    );

    const graphData = useMemo(() => {
        const maxPoints = zoomLevel > 3 ? Infinity : GRAPH_SAMPLING_LIMIT;
        const sampled = (key) => (series[key] ? sampleSeries(series[key], maxPoints) : []);

        return {
            datasets: [
                {
                    label: ELEVATION,
                    type: 'line',
                    data: sampled(ELEVATION),
                    borderColor: 'rgb(242, 217, 131)',
                    backgroundColor: 'rgba(242, 217, 131, 0.46)',
                    borderWidth: 1,
                    fill: true,
                    yAxisID: ELEVATION_AXIS,
                    pointRadius: profile.length < 100 ? 2 : 0,
                    order: 2,
                },
                {
                    label: ELEVATION_SRTM,
                    type: 'line',
                    data: sampled(ELEVATION_SRTM),
                    borderColor: 'rgba(169, 212, 129, 0.79)',
                    backgroundColor: 'rgba(169, 212, 129, 0.46)',
                    borderWidth: 1,
                    fill: true,
                    yAxisID: ELEVATION_AXIS,
                    pointRadius: 0,
                    order: 3,
                },
                {
                    label: SLOPE,
                    type: 'line',
                    data: sampled(SLOPE),
                    borderColor: 'rgba(145, 217, 255, 0.80)',
                    backgroundColor: 'rgba(145, 217, 255, 0.46)',
                    borderWidth: 1,
                    fill: true,
                    yAxisID: SLOPE_AXIS,
                    pointRadius: 0,
                    order: 0,
                },
                {
                    label: SPEED,
                    type: 'line',
                    data: sampled(SPEED),
                    borderColor: '#ff595e',
                    borderWidth: 1,
                    yAxisID: SPEED_AXIS,
                    pointRadius: 0,
                    order: 1,
                },
            ],
        };
    }, [series, zoomLevel, profile]);

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
        return (value) => `${xs[value].toFixed(1)}  ${t(getLargeLengthUnit(ctx))}`;
    }, [xs]);

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
                    plugins={[activeMouseLinePlugin]}
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
                max={profile.length - 1}
                components={{ Thumb: ThumbComponent }}
            />
        </>
    );
}

function labelAxisBounds(axis) {
    const range = axis.max - axis.min;
    const fractionDigits = Math.max(2, 1 - Math.floor(Math.log10(range)));
    const format = (value) => formatNumber(value, axis.chart.options.locale, { maximumFractionDigits: fractionDigits });
    const start = { value: axis.min, label: format(axis.min) };
    const end = { value: axis.max, label: format(axis.max) };
    const pixelsPerUnit = axis.width / range;
    axis.ctx.font = toFont(axis.options.ticks.font).string;
    const labelWidth = (tick) => axis.ctx.measureText(tick.label).width;
    const overlaps = (tick, bound) =>
        tick &&
        Math.abs(tick.value - bound.value) * pixelsPerUnit <
            labelWidth(bound) + labelWidth(tick) / 2 + axis.options.ticks.autoSkipPadding;

    if (overlaps(axis.ticks[0], start)) {
        axis.ticks.shift();
    }
    if (overlaps(axis.ticks.at(-1), end)) {
        axis.ticks.pop();
    }
    axis.ticks.unshift(start);
    axis.ticks.push(end);
}

function extremes(series) {
    const valued = series?.filter(hasValue);
    if (isEmpty(valued)) {
        return null;
    }

    return {
        min: valued.reduce((a, b) => (b.y < a.y ? b : a)),
        max: valued.reduce((a, b) => (b.y > a.y ? b : a)),
    };
}
