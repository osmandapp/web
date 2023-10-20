import styles from '../../src/generated/styles.json';
import andValues from '../../src/generated/android-values.json';
import _ from 'lodash';
import Utils from '../util/Utils';

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

//graph
export const UNDEFINED_DATA = 'undefined';
export const ELEVATION = 'Elevation';
export const ELEVATION_SRTM = 'ElevationSRTM';
export const SPEED = 'Speed';
export const DISTANCE = 'Distance';
export const SLOPE = 'Slope';
export const DEFAULT_STYLE = 'default.render.xml';

const data_parser = {
    [ROAD_CLASS]: parse(styles, ROAD_CLASS),
    [SURFACE]: parse(styles, SURFACE),
    [SMOOTHNESS]: parse(styles, SMOOTHNESS),
    [WINTER_ICE_ROAD]: parse(styles, WINTER_ICE_ROAD),
    [TRACK_TYPE]: parse(styles, TRACK_TYPE),
    [HORSE_SCALE]: parse(styles, HORSE_SCALE),
};

function parse(styles, attribute, style = DEFAULT_STYLE) {
    const types = styles[style][`routeInfo_${attribute}`];
    if (types && types.length > 0) {
        if (types[0].attrStringValue && types[0].attrColorValue) {
            if (types[0].value) {
                return parse2Type(styles, attribute, style);
            } else {
                return parse1Type(styles, attribute, style);
            }
        }
    }
    return null;
}

function parse1Type(styles, tag, style = DEFAULT_STYLE) {
    const types = styles[style][`routeInfo_${tag}`];
    let res = [];
    Object.values(types).map((data) => {
        const value = data.attrStringValue === `${tag}_undefined` ? UNDEFINED_DATA : data.attrStringValue;
        let name = andValues[`rendering_attr_${value}_name`];
        const attr = value && value.replace(`${tag}_`, '');
        if (!name) {
            name = prepareType(attr);
        }
        res[attr] = {
            name: name,
            color: Utils.hexToArgb(data.attrColorValue),
        };
    });
    return res;
}

function parse2Type(styles, tag, style = DEFAULT_STYLE) {
    const types = styles[style][`routeInfo_${tag}`];
    tag = tag === ROAD_CLASS ? 'highway_class' : tag;
    let res = [];
    Object.values(types).map((data) => {
        const value = data.attrStringValue === `${tag}_undefined` ? UNDEFINED_DATA : data.attrStringValue;
        let name = andValues[`rendering_attr_${value}_name`];
        const attr = value && value.replace(`${tag}_`, '');
        if (!name) {
            name = prepareType(attr);
        }
        res[data.value] = {
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

export function generateDataSets(data, attributesTags) {
    let graphAttrArr = [];
    let res = {};

    attributesTags.forEach((a) => {
        if (a === HIGHWAY) {
            graphAttrArr.push({
                graphName: ROAD_CLASS,
                tagNames: [a],
                datasets: [],
                legend: {},
            });
        } else if (a === WINTER_ROAD || a === ICE_ROAD) {
            const ind = graphAttrArr.findIndex((a) => a.graphName === WINTER_ICE_ROAD);
            if (ind > 0) {
                graphAttrArr[ind].tagNames.push(a);
            } else {
                graphAttrArr.push({
                    graphName: WINTER_ICE_ROAD,
                    tagNames: [a],
                    datasets: [],
                    legend: {},
                });
            }
        } else {
            graphAttrArr.push({
                graphName: a,
                tagNames: [a],
                datasets: [],
                legend: {},
            });
        }
    });

    data.forEach((seg) => {
        graphAttrArr.forEach((tag) => {
            addDataSet(tag, seg);
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
    let STEP = 5;
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

const GraphManager = {};
export default GraphManager;
