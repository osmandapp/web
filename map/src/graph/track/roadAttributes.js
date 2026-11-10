import styles from '../../resources/mapStyles/styleRulesResult.json';
import mapKeys from 'lodash-es/mapKeys';
import mapValues from 'lodash-es/mapValues';
import i18n from '../../i18n';
import { hexToRgba } from '../../util/ColorUtil';
import { cap } from '../GraphManager';
import { pointDistances } from '../model/profile';
import { attributeRuns, routeSegments, steepnessRuns } from '../model/attributeRuns';

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
const UNMATCHED = 'unmatched';
const TAG_YES = 'yes';

const DEFAULT_STYLE = 'default.render.xml';
const SKI_STYLE = 'skimap.render.xml';

const GRAPHS = [
    { name: ROAD_CLASS, tags: [HIGHWAY] },
    { name: SURFACE, tags: [SURFACE] },
    { name: STEEPNESS, tags: [] },
    { name: SMOOTHNESS, tags: [SMOOTHNESS] },
    { name: WINTER_ICE_ROAD, tags: [WINTER_ROAD, ICE_ROAD] },
    { name: TRACK_TYPE, tags: [TRACK_TYPE] },
    { name: HORSE_SCALE, tags: [HORSE_SCALE] },
    { name: PISTE_DIFFICULTY_NAME, tags: [PISTE_DIFFICULTY] },
    { name: PISTE_TYPE_NAME, tags: [PISTE_TYPE] },
];

const STYLE_CATEGORIES = {
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

const STEEPNESS_RANGES = Object.keys(STYLE_CATEGORIES[STEEPNESS] ?? {}).map((key) => ({
    key,
    range: prepareRange(key, '_'),
}));

export function roadAttributeRuns(roadPoints, routeTypes, slopes) {
    const distances = pointDistances(roadPoints);
    const segments = routeSegments(roadPoints, routeTypes, distances);
    const res = {};
    GRAPHS.forEach(({ name, tags }) => {
        if (name === STEEPNESS) {
            const runs = slopes ? steepnessRuns(slopes, distances, steepnessClass) : [];
            res[name] = runs.map((run) => ({ ...run, label: run.category }));
        } else {
            const runs = attributeRuns(
                segments,
                (segmentTags) => graphValue(segmentTags, tags),
                (value) => STYLE_CATEGORIES[name]?.[value]?.category ?? value
            );
            res[name] = runs.map((run) => ({ ...run, label: getType(STYLE_CATEGORIES[name], run.value) }));
        }
    });

    return res;
}

export function roadAttributeCharts(runsByGraph, metersToX) {
    return mapValues(runsByGraph, (runs, name) => chartData(runs, name, metersToX));
}

export function prepareType(type) {
    return type ? cap(type.replaceAll('_', ' ')) : type;
}

export function checkNextSegment(arr, arrI, selectedInd) {
    return arrI >= arr.length - 1 ? true : selectedInd < arr[arrI + 1]?.index;
}

export function formattingSteepnessLabel(name) {
    const [from, to] = prepareRange(name, '_');

    return `${from}% ➞ ${to}%`;
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
    const prefix = tag === ROAD_CLASS ? 'highway_class' : tag;
    const res = {};
    styles[style][`routeInfo_${tag}`].forEach((data) => {
        const value = data.attrStringValue === `${prefix}_undefined` ? UNDEFINED_DATA : data.attrStringValue;
        const attr = value?.replace(`${prefix}_`, '');
        res[data.value || attr] = {
            category: attr,
            name: i18n?.t(`rendering_attr_${value}_name`) || prepareType(attr),
            color: hexToRgba(data.attrColorValue),
        };
        if (data.value === 'road') {
            res[UNDEFINED_DATA] = res.road;
        }
    });

    return res;
}

function graphValue(segmentTags, graphTags) {
    if (graphTags.length > 1) {
        return graphTags.find((tag) => segmentTags[tag] === TAG_YES) ?? UNDEFINED_DATA;
    }
    const value = segmentTags[graphTags[0]] ?? UNDEFINED_DATA;

    return value === UNMATCHED ? UNDEFINED_DATA : value;
}

function steepnessClass(slope) {
    if (!Number.isFinite(slope)) {
        return null;
    }
    const rounded = Number(slope.toFixed(0));

    return STEEPNESS_RANGES.find(({ range }) => rounded >= range[0] && rounded <= range[1])?.key;
}

function chartData(runs, graph, metersToX) {
    const legend = {};
    let totalDist = 0;
    const datasets = runs.map(({ label, value, from, size, length }) => {
        const color =
            legend[label]?.color ??
            STYLE_CATEGORIES[graph]?.[value]?.color ??
            generatePastelColor(Object.keys(legend).length);
        if (length > 0) {
            legend[label] = { color, distance: (legend[label]?.distance ?? 0) + length };
        }
        const dist = metersToX(length);
        totalDist += dist;

        return {
            label,
            type: 'bar',
            backgroundColor: color,
            borderWidth: -1,
            totalDist,
            data: [dist],
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            index: from,
            size,
        };
    });

    return { datasets, legend: graph === STEEPNESS ? prepareLegend(legend) : legend };
}

function prepareLegend(legend) {
    return mapKeys(legend, function (value, key) {
        return formattingSteepnessLabel(key);
    });
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

function getType(arr, value) {
    return arr?.[value]?.name ?? prepareType(value);
}

function generatePastelColor(seed) {
    const R = 127 + (((seed + 1) * 111) % 127);
    const G = 127 + (((seed + 1) * 222) % 127);
    const B = 127 + (((seed + 1) * 333) % 127);
    const rgb = (R << 16) + (G << 8) + B;

    return `#${rgb.toString(16)}`;
}
