import styles from '../../src/resources/mapStyles/styleRulesResult.json';
import _ from 'lodash';
import i18n from '../i18n';
import Utils from '../util/Utils';
import { Interaction } from 'chart.js';
import { getRelativePosition } from 'chart.js/helpers';

//road attributes
export const HIGHWAY = 'highway';
export const SURFACE = 'surface';
export const SMOOTHNESS = 'smoothness';
export const WINTER_ROAD = 'winter_road';
export const ICE_ROAD = 'ice_road';
export const WINTER_ICE_ROAD = 'winter_ice_road';
export const ROAD_CLASS = 'roadClass';
export const TRACK_TYPE = 'tracktype';
export const HORSE_SCALE = 'horse_scale';
export const STEEPNESS = 'steepness';
export const PISTE_DIFFICULTY = 'piste:difficulty';
export const PISTE_DIFFICULTY_NAME = 'piste_difficulty';
export const PISTE_TYPE = 'piste:type';
export const PISTE_TYPE_NAME = 'piste_type';

//graph
export const UNDEFINED_DATA = 'undefined';
export const ELEVATION = 'Elevation';
export const ELEVATION_SRTM = 'ElevationSRTM';
export const SPEED = 'Speed';
export const DISTANCE = 'Distance';
export const SLOPE = 'Slope';
export const DEFAULT_STYLE = 'default.render.xml';
export const SKI_STYLE = 'skimap.render.xml';

export const SLOPE_STEP = 10; //m

const data_parser = {
    [ROAD_CLASS]: parse(styles, ROAD_CLASS),
    [SURFACE]: parse(styles, SURFACE),
    [SMOOTHNESS]: parse(styles, SMOOTHNESS),
    [WINTER_ICE_ROAD]: parse(styles, WINTER_ICE_ROAD),
    [TRACK_TYPE]: parse(styles, TRACK_TYPE),
    [HORSE_SCALE]: parse(styles, HORSE_SCALE),
    [STEEPNESS]: parse(styles, STEEPNESS),
    [PISTE_DIFFICULTY_NAME]: parse(styles, PISTE_DIFFICULTY_NAME, SKI_STYLE),
    [PISTE_TYPE_NAME]: parse(styles, PISTE_TYPE_NAME, SKI_STYLE),
};

const graphsNames = {
    [HIGHWAY]: [ROAD_CLASS],
    [SURFACE]: [SURFACE],
    [SMOOTHNESS]: [SMOOTHNESS],
    [WINTER_ROAD]: [WINTER_ICE_ROAD],
    [ICE_ROAD]: [WINTER_ICE_ROAD],
    [TRACK_TYPE]: [TRACK_TYPE],
    [HORSE_SCALE]: [HORSE_SCALE],
    [STEEPNESS]: [STEEPNESS],
    [PISTE_DIFFICULTY]: [PISTE_DIFFICULTY_NAME],
    [PISTE_TYPE]: [PISTE_TYPE_NAME],
};

function parse(styles, attribute, style = DEFAULT_STYLE) {
    const types = styles[style][`routeInfo_${attribute}`];
    if (types && types.length > 0) {
        if (types[0].attrStringValue && types[0].attrColorValue) {
            return parseType(styles, attribute, style);
        }
    }
    return null;
}

function parseType(styles, tag, style = DEFAULT_STYLE) {
    const types = styles[style][`routeInfo_${tag}`];
    tag = tag === ROAD_CLASS ? 'highway_class' : tag;
    let res = [];
    Object.values(types).map((data) => {
        const value = data.attrStringValue === `${tag}_undefined` ? UNDEFINED_DATA : data.attrStringValue;
        let name = i18n?.t(`rendering_attr_${value}_name`);
        const attr = value && value.replace(`${tag}_`, '');
        if (!name) {
            name = prepareType(attr);
        }
        res[data.value ? data.value : attr] = {
            name: name,
            color: Utils.hexToArgb(data.attrColorValue),
        };
        if (data.value === 'road') {
            res[UNDEFINED_DATA] = res.road;
        }
    });
    return res;
}

export function prepareType(type) {
    if (type) {
        type = type.replaceAll('_', ' ');
        type = cap(type);
    }
    return type;
}

export function generateDataSets(data, roadPoints, attributesTags, slopes) {
    let graphAttrArr = [];
    let res = {};

    attributesTags.forEach((a) => {
        if (a === WINTER_ROAD || a === ICE_ROAD) {
            const ind = graphAttrArr.findIndex((a) => a.graphName === WINTER_ICE_ROAD);
            if (ind > 0) {
                graphAttrArr[ind].tagNames.push(a);
            } else {
                graphAttrArr.push({
                    graphName: graphsNames[a],
                    tagNames: [a],
                    datasets: [],
                    legend: {},
                });
            }
        } else {
            graphAttrArr.push({
                graphName: graphsNames[a],
                tagNames: [a],
                datasets: [],
                legend: {},
            });
        }
    });
    if (slopes) {
        addSteepnessDataSet(
            graphAttrArr.find((a) => a.graphName[0] === STEEPNESS),
            slopes,
            roadPoints
        );
    }
    data.forEach((seg) => {
        graphAttrArr.forEach((tag) => {
            if (tag.graphName[0] !== STEEPNESS) {
                addDataSet(tag, seg);
            }
        });
    });
    graphAttrArr.forEach((tag) => {
        res[tag.graphName] = {
            datasets: tag.datasets,
            legend: tag.legend,
        };
    });
    return res;
}

export function checkNextSegment(arr, arrI, selectedInd) {
    return arrI > arr.length - 1 ? true : selectedInd < arr[arrI + 1]?.index;
}

export function checkShowData(value) {
    return value === '' ? false : value;
}

export function cap(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

export function getSlopes(result, ctx, sumDist) {
    const totalDistance = ctx?.selectedGpxFile?.analysis?.totalDistance || sumDist;
    let STEP = SLOPE_STEP;
    let l = 10;
    while (l > 0 && totalDistance / STEP > 10000) {
        STEP = Math.max(STEP, totalDistance / (result.length * l--));
    }
    // interpolate
    const interpolatorResult = interpolate(totalDistance, STEP, result);

    const calculatedDist = interpolatorResult.calculatedX;
    const calculatedH = interpolatorResult.calculatedY;
    const SLOPE_PROXIMITY = Math.max(20, STEP * 2);
    const calculatedSlopeDist = [];
    const calculatedSlope = [];

    const threshold = Math.max(2, Math.floor(SLOPE_PROXIMITY / STEP / 2));

    for (let k = 0; k < calculatedDist.length; k++) {
        calculatedSlopeDist[k] = calculatedDist[k];

        if (k < threshold) {
            calculatedSlope[k] =
                ((-1.5 * calculatedH[k] + 2.0 * calculatedH[k + 1] - 0.5 * calculatedH[k + 2]) * 100) / STEP;
        } else if (k >= calculatedSlopeDist.length - threshold) {
            calculatedSlope[k] =
                ((0.5 * calculatedH[k - 2] - 2.0 * calculatedH[k - 1] + 1.5 * calculatedH[k]) * 100) / STEP;
        } else {
            calculatedSlope[k] = ((calculatedH[threshold + k] - calculatedH[k - threshold]) * 100) / SLOPE_PROXIMITY;
        }

        if (isNaN(calculatedSlope[k])) {
            calculatedSlope[k] = 0;
        }
    }
    // add slopes to points
    for (let i = 0; i < result.length; i++) {
        let current = result[i];
        if (current) {
            let dist = current[DISTANCE];
            let ind = calculatedSlopeDist.findIndex(
                (d) => d / 1000 > dist - STEP / 1000 && d / 1000 < dist + STEP / 1000
            );
            if (ind !== -1 && ind >= 0) {
                result[i][SLOPE] = Math.trunc(calculatedSlope[ind] * 100) / 100;
            }
        }
    }

    // create array slopes
    let res = [];
    for (let i = 0; i < calculatedSlope.length; i++) {
        let dist = calculatedSlopeDist[i];
        res.push({
            slope: Math.trunc(calculatedSlope[i] * 100) / 100,
            dist: dist !== undefined ? dist / 1000 : 0,
        });
    }
    if (STEP > 5) {
        res = smoothSlopes(res, 0.3);
    }
    res.min = Math.trunc(Math.min(...calculatedSlope) * 100) / 100;
    res.max = Math.trunc(Math.max(...calculatedSlope) * 100) / 100;
    return res;
}

export function isSrtmAppeared(trackData, ctx) {
    return !trackData.srtm && ctx.selectedGpxFile.analysis?.srtmAnalysis;
}

function interpolate(totalLength, step, result) {
    const calculatedPointsCount = Math.floor(totalLength / step) + 1;
    const calculatedX = [];
    const calculatedY = [];
    const lastIndex = result.length - 1;
    let nextW = 0;

    function getY(index) {
        return result[index][ELEVATION];
    }

    function getX(index) {
        return result[index][DISTANCE] * 1000;
    }

    for (let k = 0; k < calculatedPointsCount; k++) {
        if (k > 0) {
            calculatedX[k] = (calculatedX[k - 1] ? calculatedX[k - 1] : 0) + step;
        } else {
            calculatedY[k] = getY(0);
            continue;
        }
        while (nextW < lastIndex && calculatedX[k] > getX(nextW)) {
            nextW++;
        }
        const px = nextW === 0 ? 0 : getX(nextW - 1);
        const py = nextW === 0 ? getY(0) : getY(nextW - 1);

        calculatedY[k] = py + ((getY(nextW) - py) / (getX(nextW) - px)) * (calculatedX[k] - px);
    }
    return { calculatedX, calculatedY };
}

function smoothSlopes(data, alpha) {
    if (data?.length > 0) {
        const smoothedData = [];
        let previousValue = data[0].slope;
        for (let i = 0; i < data.length; i++) {
            const currentSlope = data[i].slope;
            const smoothedSlope = alpha * currentSlope + (1 - alpha) * previousValue;
            smoothedData.push({
                slope: smoothedSlope,
                dist: data[i].dist,
            });
            previousValue = smoothedSlope;
        }
        return smoothedData;
    }
    return data;
}

function addSteepnessDataSet(tag, slopes, roadPoints) {
    const data = createRangeArr(data_parser[STEEPNESS]);
    Object.values(slopes).forEach((slope) => {
        const currentRange = Object.entries(data).find((arr) => {
            const d = arr[1];
            if (slope.slope) {
                let s = Number(slope.slope.toFixed(0));
                return s >= d.range[0] && s <= d.range[1];
            }
        });
        if (currentRange) {
            const type = currentRange[1].name;
            let res;
            if (!_.isEmpty(tag.datasets)) {
                const prev = tag.datasets[tag.datasets.length - 1];
                if (prev.label === type) {
                    tag.datasets.pop();
                    if (tag.legend[type]) {
                        tag.legend[type].distance += SLOPE_STEP;
                    } else {
                        tag.legend[type] = { distance: SLOPE_STEP };
                    }
                    const dist = SLOPE_STEP / 1000;
                    prev.totalDist = Number(prev.totalDist) + dist;
                    prev.data = [Number(prev.data) + dist];
                    res = prev;
                } else {
                    res = createSteepnessDataSet(tag, type, roadPoints, slope);
                }
            } else {
                res = createSteepnessDataSet(tag, type, roadPoints, slope);
            }
            if (res) {
                tag.datasets.push(res);
            }
        }
    });
    tag.legend = prepareLegend(tag.legend);
}

function prepareLegend(legend) {
    return _.mapKeys(legend, function (value, key) {
        return formattingSteepnessLabel(key);
    });
}

export function formattingSteepnessLabel(name) {
    let range = prepareRange(name, '_');
    return `${range[0]}% ➞ ${range[1]}%`;
}

function createSteepnessDataSet(tag, type, roadPoints, slope) {
    let currentColor;
    if (tag.legend[type]) {
        tag.legend[type].distance += SLOPE_STEP;
        currentColor = tag.legend[type].color;
    } else {
        currentColor = getColor(type, tag.legend, tag.graphName);
        tag.legend[type] = {
            color: currentColor,
            distance: SLOPE_STEP,
        };
    }
    const dist = SLOPE_STEP / 1000;
    const totalDist = !_.isEmpty(tag.datasets) ? Number(tag.datasets[tag.datasets.length - 1].totalDist) + dist : dist;
    const ind = roadPoints.findIndex((p, i) => {
        return (
            slope.dist >= p.distanceTotal / 1000 &&
            i + 1 < roadPoints.length - 1 &&
            slope.dist <= roadPoints[i + 1].distanceTotal / 1000
        );
    });

    return {
        label: type,
        type: 'bar',
        backgroundColor: currentColor,
        borderWidth: -1,
        totalDist: totalDist,
        data: [dist],
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        index: ind,
        size: undefined,
    };
}

function createRangeArr(data) {
    let res = [];
    Object.entries(data).forEach((d) => {
        res.push({
            name: d[0],
            range: prepareRange(d[1].name, ' '),
        });
    });
    return res;
}

function prepareRange(data, delimiter) {
    const range = data.split(delimiter);
    let r1 = Number(range[0]);
    let r2 = Number(range[1]);
    if (r1 % 2 !== 0) {
        r1 += -1;
    }
    if (r1 !== 100 && r2 !== 100) {
        r2 = r1 + 4;
    }
    return [r1, r2];
}

function addDataSet(tag, seg) {
    tag.tagNames.forEach((name) => {
        const label = seg[name];
        let res;
        if (label) {
            const type = getType(data_parser[tag.graphName], label);
            if (!_.isEmpty(tag.datasets)) {
                const prev = tag.datasets[tag.datasets.length - 1];
                if (prev.label === type) {
                    tag.datasets.pop();
                    if (tag.legend[type]) {
                        tag.legend[type].distance += seg.distance;
                    } else {
                        tag.legend[type] = { distance: seg.distance };
                    }
                    const dist = Number(Math.round(seg.distance) / 1000);
                    prev.totalDist = Number(prev.totalDist) + dist;
                    prev.data = [Number(prev.data) + dist];
                    prev.size += Number(seg.segment.ext.length - 1);
                    res = prev;
                } else {
                    res = createDataSet(tag, seg, name);
                }
            } else {
                res = createDataSet(tag, seg, name);
            }
        }
        if (res) {
            tag.datasets.push(res);
        }
    });
}

function createDataSet(tag, seg, name) {
    let label = seg[name];
    if (label) {
        label = label === 'unmatched' ? UNDEFINED_DATA : label;
        let currentColor;
        const type = getType(data_parser[tag.graphName], label);
        if (tag.legend[type]) {
            tag.legend[type].distance += seg.distance;
            currentColor = tag.legend[type].color;
        } else {
            if (seg.distance) {
                currentColor = getColor(label, tag.legend, tag.graphName);
                tag.legend[type] = {
                    color: currentColor,
                    distance: seg.distance,
                };
            }
        }
        const dist = Number(Math.round(seg.distance) / 1000);
        const totalDist = !_.isEmpty(tag.datasets)
            ? Number(tag.datasets[tag.datasets.length - 1].totalDist) + dist
            : dist;
        return {
            label: type,
            type: 'bar',
            backgroundColor: currentColor,
            borderWidth: -1,
            totalDist: totalDist,
            data: [dist],
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            index: seg.ind,
            size: Number(seg.segment.ext.length - 1),
        };
    }
}

function getType(arr, value) {
    return arr[value] ? arr[value].name : prepareType(value);
}

function getColor(label, colors, tagName) {
    let newColor;
    const data = data_parser[tagName];
    if (colors[label]) {
        newColor = colors[label];
    } else {
        newColor = data[label] ? data[label].color : generatePastelColor(Object.keys(colors).length);
    }
    return newColor;
}

function generatePastelColor(seed) {
    const R = 127 + (((seed + 1) * 111) % 127);
    const G = 127 + (((seed + 1) * 222) % 127);
    const B = 127 + (((seed + 1) * 333) % 127);
    let rgb = (R << 16) + (G << 8) + B;
    return `#${rgb.toString(16)}`;
}

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
            ctx.moveTo(chart.options.mouseLine.x, chartArea.bottom);
            ctx.lineTo(chart.options.mouseLine.x, chartArea.top);
            ctx.strokeStyle = chart.options.mouseLine?.color || '#737D8C';
            ctx.stroke();
            ctx.restore();
        }
    },
};

function myCustomMode(chart, e, options, useFinalPosition) {
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
}

const GraphManager = {
    mouseLine: mouseLine,
    myCustomMode: myCustomMode,
};
export default GraphManager;
