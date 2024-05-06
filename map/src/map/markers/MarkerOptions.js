import L from 'leaflet';
import Utils from '../../util/Utils';
import poiicons from '../../resources/generated/poiicons.json';
import mapicons from '../../resources/generated/mapicons.json';
import shadersicons from '../../resources/generated/shadersicons.json';

const BACKGROUND_WPT_SHAPE_CIRCLE = 'circle';
const BACKGROUND_WPT_SHAPE_OCTAGON = 'octagon';
const BACKGROUND_WPT_SHAPE_SQUARE = 'square';
const DEFAULT_WPT_ICON = 'special_star';
const DEFAULT_WPT_COLOR = '#eecc22';

export const POI_ICONS_FOLDER = 'poi-icons-svg';
export const SHADERS_FOLDER = 'map-shaders-svg';
export const MAP_ICONS_FOLDER = 'map-icons-svg';
export const ICONS_PREFIX = 'mx_';
export const COLORED_ICONS_PREFIX = 'c_mx_';
export const SHADERS_PREFIX = 'h_';
export const COLORED_SHADERS_PREFIX = 'c_h_';

const MarkerIcon = ({ iconType = 'default-marker', bg = 'blue' }) => {
    let svg =
        `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">` +
        `<circle cx="24" cy="24" r="15" fill='${bg}'/>` +
        `</svg>`;

    return L.divIcon({
        html: `<div>${svg}<img class="icon" src="/map/images/map_icons/${iconType}.svg"></div>`,
    });
};

const options = {
    startIcon: MarkerIcon({ bg: '#1976d2' }),
    interIcon: MarkerIcon({ bg: '#f6791b' }),
    endIcon: MarkerIcon({ bg: '#ff595e' }),
    pointerIcons: MarkerIcon({ bg: '#fec93b' }),
    pointerGraph: L.icon({
        iconUrl: '/map/images/map_icons/circle_pointer.svg',
        iconSize: [13, 13],
        clickable: false,
    }),
    route: L.icon({
        iconUrl: '/map/images/map_icons/circle.svg',
        iconSize: [13, 13],
        clickable: false,
    }),
    trackStart: L.icon({
        iconUrl: '/map/images/map_icons/map_track_point_start.svg',
        iconSize: [60, 60],
        clickable: false,
    }),
    trackEnd: L.icon({
        iconUrl: '/map/images/map_icons/map_track_point_finish.svg',
        iconSize: [60, 60],
        clickable: false,
    }),
};

export function getWptIcon(point, color, background, icon, folder = POI_ICONS_FOLDER) {
    let colorBackground =
        color && color !== 'null'
            ? color
            : point.extensions?.color && point.extensions.color !== 'null'
              ? point.extensions.color
              : DEFAULT_WPT_COLOR;
    colorBackground = Utils.hexToArgb(colorBackground);
    let shapeBackground = background ? background : point.background;
    let svg = getBackground(colorBackground, shapeBackground);
    let iconWpt =
        icon && icon !== 'null'
            ? icon
            : point.extensions?.icon && point.extensions.icon !== 'null'
              ? point.extensions.icon
              : DEFAULT_WPT_ICON;
    let part = point ? 'mx_' : '';
    let html;
    const bsize = 24;
    const isize = 18;
    const offsetX = (bsize - isize) / 2; // Center the image horizontally
    const offsetY = (bsize - isize) / 2; // Center the image vertically
    if (iconWpt) {
        html = `<svg viewBox="0 0 ${bsize} ${bsize}" filter="drop-shadow(5px 0 2px gray)" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                ${svg}
                <image x="${offsetX}" y="${offsetY}" width="${isize}" height="${isize}" href="/map/images/${folder}/${part}${iconWpt}.svg" />
                </svg>`;
    } else {
        html = `<svg viewBox="0 0 ${bsize} ${bsize}"  filter="drop-shadow(5px 0 2px gray)" xmlns="http://www.w3.org/2000/svg">
                   ${svg}
                   <image x="${offsetX}" y="${offsetY}" width="${isize}" height="${isize}" href="/map/images/${POI_ICONS_FOLDER}/${ICONS_PREFIX}${DEFAULT_WPT_ICON}.svg" />
                   </svg>`;
    }
    return L.divIcon({ html: html });
}

function isStrangeShape(shape) {
    return (
        shape !== BACKGROUND_WPT_SHAPE_CIRCLE &&
        shape !== BACKGROUND_WPT_SHAPE_OCTAGON &&
        shape !== BACKGROUND_WPT_SHAPE_SQUARE
    );
}

function getBackground(colorBackground, shape) {
    let svg;
    if (shape) {
        if (shape === BACKGROUND_WPT_SHAPE_CIRCLE || isStrangeShape(shape)) {
            svg = `<circle cx="12" cy="12" r="12" fill="${colorBackground}"/>`;
        }
        if (shape === BACKGROUND_WPT_SHAPE_OCTAGON) {
            svg = `<path d="M1 7L7 1H17L23 7V17L17 23H7L1 17V7Z" fill="${colorBackground}"/>`;
        }
        if (shape === BACKGROUND_WPT_SHAPE_SQUARE) {
            svg = `<rect width="24" height="24" rx="3" fill="${colorBackground}"/>`;
        }
    } else {
        svg = `<circle cx="12" cy="12" r="12" fill="${colorBackground}"/>`;
    }
    return svg;
}

export function getSvgBackground(colorBackground, shape) {
    let svg;
    if (shape) {
        if (shape === BACKGROUND_WPT_SHAPE_CIRCLE || isStrangeShape(shape)) {
            svg =
                `<svg class="background" id="se-wpt-marker-background-${colorBackground}-${shape}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">` +
                `<circle cx="24" cy="24" r="12" fill="${colorBackground}"/>` +
                `</svg>`;
        }
        if (shape === BACKGROUND_WPT_SHAPE_OCTAGON) {
            svg =
                `<svg class="background" id="se-wpt-marker-background-${colorBackground}-${shape}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">` +
                `<path d="M13 19L19 13H29L35 19V29L29 35H19L13 29V19Z" fill="${colorBackground}"/>` +
                `</svg>`;
        }
        if (shape === BACKGROUND_WPT_SHAPE_SQUARE) {
            svg =
                `<svg class="background" id="se-wpt-marker-background-${colorBackground}-${shape}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">` +
                `<rect x="13" y="13" width="22" height="22" rx="3" fill="${colorBackground}"/>` +
                `</svg>`;
        }
    } else {
        svg =
            `<svg class="background" id="se-wpt-marker-background-${colorBackground}-${shape}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">` +
            `<circle cx="24" cy="24" r="12" fill="${colorBackground}"/>` +
            `</svg>`;
    }
    return svg;
}

export function removeShadowFromIconWpt(svgHtml) {
    const filterPattern = /filter=".*?"/g;
    return svgHtml.replace(filterPattern, '');
}

export function changeIconColor(svgHtml, color) {
    const colorPattern = /(<path[^>]*fill=")[^"]*(")/g;
    return svgHtml.replace(colorPattern, `$1${color}$2`);
}

function replacePathData(pathData, shapeSize, oldShapeSize) {
    // ex. oldShapeSize = 24 and old path = d="M1 7L7 1H17L23 7V17L17 23H7L1 17V7Z"
    // for shapeSize = 30 new path = d="M1 9L9 1H21L29 9V21L21 29H9L1 21V9Z"
    const values = pathData.match(/[-+]?\d*\.?\d+/g);

    if (values && values.length === 14) {
        const scaleFactor = shapeSize / oldShapeSize;
        const newValues = values.map((value) => {
            const shiftedValue = parseFloat(value) * scaleFactor;
            return Math.round(shiftedValue);
        });

        return `M${newValues[0]} ${newValues[1]}L${newValues[2]} ${newValues[3]}H${newValues[4]}L${newValues[5]} ${newValues[6]}V${newValues[7]}L${newValues[8]} ${newValues[9]}H${newValues[10]}L${newValues[11]} ${newValues[12]}V${newValues[13]}Z`;
    }

    return pathData;
}

export function changeIconSizeWpt(svgHtml, iconSize, shapeSize) {
    // Update the sizes inside viewBox and for <image>, <circle>, <path>, <rect>

    const viewBoxPattern = /viewBox="0 0 (\d+) (\d+)"/;
    const widthPattern = /width="(\d+)"/;
    const heightPattern = /height="(\d+)"/;
    const circlePattern = /<circle ([^>]*)cx="(\d+\.?\d*)" ([^>]*)cy="(\d+\.?\d*)" ([^>]*)r="(\d+\.?\d*)" ([^>]*)\/>/;
    const pathPattern = /<path\s[^>]*d="([^"]+)"[^>]*>/g;
    const rectPattern =
        /<rect ([^>]*)width="(\d+\.?\d*)" ([^>]*)height="(\d+\.?\d*)" ([^>]*)rx="(\d+\.?\d*)" ([^>]*)\/>/;
    const imagePattern =
        /<image ([^>]*)x="(\d+\.?\d*)" ([^>]*)y="(\d+\.?\d*)" ([^>]*)width="(\d+\.?\d*)" ([^>]*)height="(\d+\.?\d*)" ([^>]*)href="([^"]*)" ([^>]*)\/>/;

    const viewBoxMatch = svgHtml.match(viewBoxPattern);
    const oldShapeSize = viewBoxMatch ? parseFloat(viewBoxMatch[1]) : shapeSize;

    svgHtml = svgHtml.replace(viewBoxPattern, () => {
        // Update the sizes inside viewBox
        const newWidth = shapeSize;
        const newHeight = shapeSize;
        return `viewBox="0 0 ${newWidth} ${newHeight}"`;
    });

    svgHtml = svgHtml.replace(widthPattern, () => {
        // Update width
        return `width="${shapeSize}"`;
    });

    svgHtml = svgHtml.replace(heightPattern, () => {
        // Update height
        return `height="${shapeSize}"`;
    });

    svgHtml = svgHtml.replace(circlePattern, (match, prefix, cx, middle, cy, middle2, r, suffix) => {
        // Update the sizes inside <circle>
        const newCx = shapeSize / 2;
        const newCy = shapeSize / 2;
        const newR = shapeSize / 2;
        return `<circle ${prefix}cx="${newCx}" ${middle}cy="${newCy}" ${middle2}r="${newR}" ${suffix}/>`;
    });

    svgHtml = svgHtml.replace(pathPattern, (match, pathData) => {
        // Update the sizes inside <path>
        const newPathData = replacePathData(pathData, shapeSize, oldShapeSize);
        const fillPattern = /fill="([^"]*)"/;
        const oldFillMatch = match.match(fillPattern);
        const oldFill = oldFillMatch ? oldFillMatch[1] : '';
        return `<path d="${newPathData}" fill="${oldFill}"/>`;
    });

    svgHtml = svgHtml.replace(rectPattern, (match, prefix, width, middle, height, middle2, rx, suffix) => {
        // Update the sizes inside <rect>
        const newWidth = shapeSize;
        const newHeight = shapeSize;
        const newRx = newWidth / 8;
        return `<rect ${prefix} width="${newWidth}" ${middle} height="${newHeight}" ${middle2} rx="${newRx}" ${suffix}/>`;
    });

    svgHtml = svgHtml.replace(
        imagePattern,
        (match, prefix, x, middle, y, middle2, width, middle3, height, middle4, href, suffix) => {
            const newSize = iconSize;
            const offsetX = (shapeSize - newSize) / 2;
            const offsetY = (shapeSize - newSize) / 2;
            const transform = `translate(${offsetX},${offsetY})`;
            return `<image ${prefix} transform="${transform}" ${middle2} width="${newSize}" ${middle3} height="${newSize}" ${middle4} href="${href}" ${suffix}/>`;
        }
    );

    return svgHtml;
}

export function getIconUrlByName(type, name) {
    if (type === 'poi') {
        if (poiicons.includes(`${ICONS_PREFIX}${name}.svg`)) {
            return `/map/images/${POI_ICONS_FOLDER}/${ICONS_PREFIX}${name}.svg`;
        } else return `/map/images/${POI_ICONS_FOLDER}/${COLORED_ICONS_PREFIX}${name}.svg`;
    } else if (type === 'map') {
        if (mapicons.includes(`${ICONS_PREFIX}${name}.svg`)) {
            return `/map/images/${MAP_ICONS_FOLDER}/${ICONS_PREFIX}${name}.svg`;
        } else return `/map/images/${MAP_ICONS_FOLDER}/${COLORED_ICONS_PREFIX}${name}.svg`;
    }
    return '';
}

export function getShaderUrlByName(name) {
    if (shadersicons.includes(`${ICONS_PREFIX}${name}.svg`)) {
        return `/map/images/${SHADERS_FOLDER}/${SHADERS_PREFIX}${name}.svg`;
    } else return `/map/images/${SHADERS_FOLDER}/${COLORED_SHADERS_PREFIX}${name}.svg`;
}

const MarkerOptions = {
    options,
    getWptIcon,
    getBackground,
    BACKGROUND_WPT_SHAPE_CIRCLE: BACKGROUND_WPT_SHAPE_CIRCLE,
    BACKGROUND_WPT_SHAPE_OCTAGON: BACKGROUND_WPT_SHAPE_OCTAGON,
    BACKGROUND_WPT_SHAPE_SQUARE: BACKGROUND_WPT_SHAPE_SQUARE,
    DEFAULT_WPT_ICON: DEFAULT_WPT_ICON,
    DEFAULT_WPT_COLOR: DEFAULT_WPT_COLOR,
};

export default MarkerOptions;
