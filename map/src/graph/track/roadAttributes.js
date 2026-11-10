import styles from '../../resources/mapStyles/styleRulesResult.json';
import mapKeys from 'lodash-es/mapKeys';
import isEmpty from 'lodash-es/isEmpty';
import cloneDeep from 'lodash-es/cloneDeep';
import indexOf from 'lodash-es/indexOf';
import i18n from '../../i18n';
import { hexToRgba } from '../../util/ColorUtil';
import { addDistanceToPoints } from '../../manager/track/TracksManager';
import { cap } from '../GraphManager';

//road attributes
const HIGHWAY = 'highway';
export const SURFACE = 'surface';
const SMOOTHNESS = 'smoothness';
const WINTER_ROAD = 'winter_road';
const ICE_ROAD = 'ice_road';
const WINTER_ICE_ROAD = 'winter_ice_road';
const ROAD_CLASS = 'roadClass';
const TRACK_TYPE = 'tracktype';
const HORSE_SCALE = 'horse_scale';
export const STEEPNESS = 'steepness';
const PISTE_DIFFICULTY = 'piste:difficulty';
const PISTE_DIFFICULTY_NAME = 'piste_difficulty';
const PISTE_TYPE = 'piste:type';
const PISTE_TYPE_NAME = 'piste_type';

export const UNDEFINED_DATA = 'undefined';
const TAG_YES = 'yes';

const DEFAULT_STYLE = 'default.render.xml';
const SKI_STYLE = 'skimap.render.xml';

const ATTRIBUTES_TAGS = [
    HIGHWAY,
    SURFACE,
    STEEPNESS,
    SMOOTHNESS,
    WINTER_ROAD,
    ICE_ROAD,
    TRACK_TYPE,
    HORSE_SCALE,
    PISTE_DIFFICULTY,
    PISTE_TYPE,
];

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

export function roadAttributesData(roadPoints, routeTypes, slopes, metersToX) {
    addDistanceToPoints(roadPoints);
    let segments = [];
    let prevSegPoint;
    roadPoints.forEach((p) => {
        if (p.segment?.ext.types) {
            let seg = cloneDeep(p);
            seg.ind = indexOf(roadPoints, p);
            const rawLen = Number(seg.segment?.ext?.length);
            if (!Number.isFinite(rawLen) || rawLen < 1) {
                return;
            }
            let endIdx = seg.ind + rawLen - 1;
            if (endIdx >= roadPoints.length) {
                return;
            }
            seg.distance = prevSegPoint
                ? roadPoints[endIdx].distanceTotal - seg.distanceTotal
                : roadPoints[endIdx].distanceTotal;
            ATTRIBUTES_TAGS.forEach((a) => (seg[a] = UNDEFINED_DATA));
            p.segment.ext.types.split(',').forEach((t) => {
                const type = routeTypes?.[t];
                if (type) {
                    seg = getTags(type, seg);
                }
            });
            prevSegPoint = seg;
            segments.push(seg);
        }
    });

    return generateDataSets(segments, roadPoints, slopes, metersToX);
}

export function prepareType(type) {
    if (type) {
        type = type.replaceAll('_', ' ');
        type = cap(type);
    }
    return type;
}

export function checkNextSegment(arr, arrI, selectedInd) {
    return arrI >= arr.length - 1 ? true : selectedInd < arr[arrI + 1]?.index;
}

export function formattingSteepnessLabel(name) {
    let range = prepareRange(name, '_');
    return `${range[0]}% ➞ ${range[1]}%`;
}

function getTags(type, seg) {
    ATTRIBUTES_TAGS.forEach((a) => {
        if (type.tag === a) {
            seg[a] = type.value;
        }
    });
    return seg;
}

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
            color: hexToRgba(data.attrColorValue),
        };
        if (data.value === 'road') {
            res[UNDEFINED_DATA] = res.road;
        }
    });
    return res;
}

function generateDataSets(data, roadPoints, slopes, metersToX) {
    let graphAttrArr = [];
    let res = {};

    ATTRIBUTES_TAGS.forEach((a) => {
        if (a === WINTER_ROAD || a === ICE_ROAD) {
            const ind = graphAttrArr.findIndex((a) => a.graphName[0] === WINTER_ICE_ROAD);
            if (ind >= 0) {
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
            roadPoints,
            metersToX
        );
    }
    data.forEach((seg) => {
        graphAttrArr.forEach((tag) => {
            if (tag.graphName[0] !== STEEPNESS) {
                addDataSet(tag, seg, metersToX);
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

function addSteepnessDataSet(tag, slopes, roadPoints, metersToX) {
    const data = createRangeArr(data_parser[STEEPNESS]);
    slopes.grid.forEach((slope) => {
        const currentRange = Object.entries(data).find((arr) => {
            const d = arr[1];
            if (Number.isFinite(slope.slope)) {
                let s = Number(slope.slope.toFixed(0));
                return s >= d.range[0] && s <= d.range[1];
            }
        });
        if (currentRange) {
            const type = currentRange[1].name;
            let res;
            if (!isEmpty(tag.datasets)) {
                const prev = tag.datasets[tag.datasets.length - 1];
                if (prev.label === type) {
                    tag.datasets.pop();
                    if (tag.legend[type]) {
                        tag.legend[type].distance += slopes.step;
                    } else {
                        tag.legend[type] = { distance: slopes.step };
                    }
                    const dist = metersToX(slopes.step);
                    prev.totalDist = Number(prev.totalDist) + dist;
                    prev.data = [Number(prev.data) + dist];
                    res = prev;
                } else {
                    res = createSteepnessDataSet(tag, type, roadPoints, slope, slopes.step, metersToX);
                }
            } else {
                res = createSteepnessDataSet(tag, type, roadPoints, slope, slopes.step, metersToX);
            }
            if (res) {
                tag.datasets.push(res);
            }
        }
    });
    tag.datasets.forEach((d, i) => {
        d.size = (tag.datasets[i + 1]?.index ?? roadPoints.length - 1) - d.index;
    });
    tag.legend = prepareLegend(tag.legend);
}

function prepareLegend(legend) {
    return mapKeys(legend, function (value, key) {
        return formattingSteepnessLabel(key);
    });
}

function createSteepnessDataSet(tag, type, roadPoints, slope, step, metersToX) {
    let currentColor;
    if (tag.legend[type]) {
        tag.legend[type].distance += step;
        currentColor = tag.legend[type].color;
    } else {
        currentColor = getColor(type, tag.legend, tag.graphName);
        tag.legend[type] = {
            color: currentColor,
            distance: step,
        };
    }
    const dist = metersToX(step);
    const totalDist = !isEmpty(tag.datasets) ? Number(tag.datasets[tag.datasets.length - 1].totalDist) + dist : dist;
    const ind = roadPoints.findIndex((p, i) => {
        return (
            slope.distance >= p.distanceTotal &&
            i + 1 < roadPoints.length &&
            slope.distance <= roadPoints[i + 1].distanceTotal
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
    };
}

function createRangeArr(data) {
    let res = [];
    Object.keys(data).forEach((key) => {
        res.push({
            name: key,
            range: prepareRange(key, '_'),
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
    if (r1 !== -100 && r2 !== 100) {
        r2 = r1 + 4;
    }
    return [r1, r2];
}

function addDataSet(tag, seg, metersToX) {
    const label = segmentLabel(tag, seg);
    let res;
    if (label) {
        const type = getType(data_parser[tag.graphName], label);
        if (!isEmpty(tag.datasets)) {
            const prev = tag.datasets[tag.datasets.length - 1];
            if (prev.label === type) {
                tag.datasets.pop();
                if (tag.legend[type]) {
                    tag.legend[type].distance += seg.distance;
                } else {
                    tag.legend[type] = { distance: seg.distance };
                }
                const dist = metersToX(Math.round(seg.distance));
                prev.totalDist = Number(prev.totalDist) + dist;
                prev.data = [Number(prev.data) + dist];
                prev.size += Number(seg.segment.ext.length - 1);
                res = prev;
            } else {
                res = createDataSet(tag, seg, label, metersToX);
            }
        } else {
            res = createDataSet(tag, seg, label, metersToX);
        }
    }
    if (res) {
        tag.datasets.push(res);
    }
}

function segmentLabel(tag, seg) {
    if (tag.tagNames.length > 1) {
        return tag.tagNames.find((name) => seg[name] === TAG_YES) ?? UNDEFINED_DATA;
    }

    return seg[tag.tagNames[0]];
}

function createDataSet(tag, seg, label, metersToX) {
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
        const dist = metersToX(Math.round(seg.distance));
        const totalDist = !isEmpty(tag.datasets)
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
