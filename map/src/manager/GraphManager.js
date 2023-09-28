import roadTypes from '../store/road-types.json';
import surfaces from '../store/surfaces.json';
import _ from 'lodash';

export const HIGHWAY = 'highway';
export const SURFACE = 'surface';
export const UNDEFINED_DATA = 'undefined';
export const ELEVATION = 'Elevation';
export const ELEVATION_SRTM = 'ElevationSRTM';
export const SPEED = 'Speed';
export const DISTANCE = 'Distance';
export const SLOPE = 'Slope';

export function generateDataSets(data) {
    let types = [];
    let surfaces = [];
    let typesColors = {};
    let surfacesColors = {};
    data.forEach((seg) => {
        addDataSet(types, seg, HIGHWAY, typesColors);
        addDataSet(surfaces, seg, SURFACE, surfacesColors);
    });

    return {
        types: {
            datasets: types,
            legend: typesColors,
        },
        surfaces: {
            datasets: surfaces,
            legend: surfacesColors,
        },
    };
}

export function checkShowData(value) {
    return value === '' ? false : value;
}

export function cap(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

export function getSlopes(result, ctx) {
    let STEP = 5;
    let l = 10;
    while (l > 0 && ctx.selectedGpxFile.analysis.totalDistance / STEP > 10000) {
        STEP = Math.max(STEP, ctx.selectedGpxFile.analysis.totalDistance / (result.length * l--));
    }
    // interpolate
    const interpolatorResult = interpolate(ctx.selectedGpxFile.analysis.totalDistance, STEP, result);

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

function addDataSet(arr, seg, tag, colors) {
    const label = seg[tag];
    let res;
    if (label) {
        const type = tag === SURFACE ? label : getRoadType(label);
        if (!_.isEmpty(arr)) {
            const prev = arr[arr.length - 1];
            if (prev.label === type) {
                arr.pop();
                colors[type].distance += seg.distance;
                const dist = Number(Math.round(seg.distance) / 1000);
                prev.totalDist = (Number(prev.totalDist) + dist).toFixed(1);
                prev.data = [(Number(prev.data) + dist).toFixed(1)];
                prev.size += Number(seg.segment.ext.length - 1);
                res = prev;
            } else {
                res = createDataSet(seg, tag, colors, arr);
            }
        } else {
            res = createDataSet(seg, tag, colors, arr);
        }
    }
    if (res) {
        arr.push(res);
    }
}

function createDataSet(seg, tagName, colors, arr) {
    const label = seg[tagName];
    if (label) {
        let currentColor;
        const type = tagName === SURFACE ? label : getRoadType(label);
        if (colors[type]) {
            colors[type].distance += seg.distance;
            currentColor = colors[type].color;
        } else {
            if (seg.distance) {
                currentColor = getColor(label, colors, tagName);
                colors[type] = {
                    color: currentColor,
                    distance: seg.distance,
                };
            }
        }
        const dist = Number(Math.round(seg.distance) / 1000);
        const totalDist = !_.isEmpty(arr) ? Number(arr[arr.length - 1].totalDist) + dist : dist;
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

function getRoadType(value) {
    return roadTypes[value] ? roadTypes[value].class : value;
}

function getColor(label, colors, tagName) {
    let newColor;
    const data = tagName === SURFACE ? surfaces : roadTypes;
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
