import L from 'leaflet';
import Utils from '../../util/Utils';
import poiicons from '../../resources/generated/poiicons.json';
import mapicons from '../../resources/generated/mapicons.json';
import shadersicons from '../../resources/generated/shadersicons.json';
import PoiManager from '../../manager/PoiManager';
import backgrounds from '../../resources/generated/poiBackgroundIcons.json';

const BACKGROUND_WPT_SHAPE_CIRCLE = 'circle';
const BACKGROUND_WPT_SHAPE_OCTAGON = 'octagon';
const BACKGROUND_WPT_SHAPE_SQUARE = 'square';
const DEFAULT_WPT_ICON = 'special_star';
export const DEFAULT_WPT_COLOR = '#eecc22';

export const DEFAULT_ICON_SIZE = 24;

export const POI_ICONS_FOLDER = 'poi-icons-svg';
export const SHADERS_FOLDER = 'map-shaders-svg';
export const MAP_ICONS_FOLDER = 'map-icons-svg';
export const ICONS_PREFIX = 'mx_';
export const COLORED_ICONS_PREFIX = 'c_mx_';
export const SHADERS_PREFIX = 'h_';
export const COLORED_SHADERS_PREFIX = 'c_h_';

// startIcon, interIcon, endIcon, pointerIcons
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

export function createPoiIcon({
    point = null,
    color,
    background,
    hasBackgroundLight = true,
    icon = null,
    svgIcon = null,
    folder = POI_ICONS_FOLDER,
    iconSize = 12,
    backgroundSize = null,
}) {
    let colorBackground =
        color && color !== 'null'
            ? color
            : point?.extensions?.color && point?.extensions.color !== 'null'
              ? point?.extensions.color
              : DEFAULT_WPT_COLOR;
    colorBackground = Utils.hexToArgb(colorBackground);
    const shapeBackground = background ? background : point?.background;
    let svg = getBackground(colorBackground, shapeBackground);
    if (backgroundSize) {
        svg = changeIconSizeWpt(svg, 0, 48);
    }
    if (svg) {
        const idString = `id="se-poi-marker-background-${color}-${background}"`;
        svg = svg.replace('<svg ', `<svg ${idString} `);
    }
    const svgLight = hasBackgroundLight ? getBackgroundLight(shapeBackground) : '';
    const iconWpt =
        icon && icon !== 'null'
            ? icon
            : point?.extensions?.icon && point?.extensions.icon !== 'null'
              ? point?.extensions.icon
              : DEFAULT_WPT_ICON;
    let part = point ? 'mx_' : '';
    let html;
    const allIconSize = backgroundSize ? backgroundSize : DEFAULT_ICON_SIZE;
    const bsize = backgroundSize ? backgroundSize : getBackgroundSize(shapeBackground);
    const isize = iconSize;
    const offsetX = (allIconSize - isize) / 2; // Center the image horizontally
    const offsetY = (allIconSize - isize) / 2; // Center the image vertically
    if (iconWpt || svgIcon) {
        let iconElement;
        if (svgIcon) {
            iconElement = svgIcon
                .replace(/width="\d+"/, `width="${isize}"`)
                .replace(/height="\d+"/, `height="${isize}"`);
        } else {
            iconElement = `<image width="${isize}" height="${isize}" href="/map/images/${folder}/${part}${iconWpt}.svg" />`;
        }

        html = `<svg viewBox="0 0 ${allIconSize} ${allIconSize}" style="filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.10)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.23));" width="${allIconSize}" height="${allIconSize}" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(${(allIconSize - bsize) / 2}, ${(allIconSize - bsize) / 2})">
                ${svg}
            </g>
            <g transform="translate(${(allIconSize - bsize) / 2}, ${(allIconSize - bsize) / 2})">
                ${svgLight}
            </g>
            <g transform="translate(${offsetX}, ${offsetY})">
                ${iconElement}
            </g>
            </svg>`;
    } else {
        html = `<svg viewBox="0 0 ${allIconSize} ${allIconSize}" style="filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.10)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.23));" xmlns="http://www.w3.org/2000/svg">
                   <g transform="translate(${(allIconSize - bsize) / 2}, ${(allIconSize - bsize) / 2})">
                      ${svg}
                   </g>
                   <g transform="translate(${(allIconSize - bsize) / 2}, ${(allIconSize - bsize) / 2})">
                      ${svgLight}
                   </g>
                   <image width="${isize}" height="${isize}" href="/map/images/${POI_ICONS_FOLDER}/${ICONS_PREFIX}${DEFAULT_WPT_ICON}.svg" />
                   </svg>`;
    }
    return L.divIcon({ html: html });
}

export function getPoiCategoryIcon({ icon, color, background }) {
    const colorBackground = Utils.hexToArgb(color);
    const svg = getBackground(colorBackground, background);
    const allIconSize = DEFAULT_ICON_SIZE;
    const bsize = getBackgroundSize(background);
    const isize = 18;
    const offsetX = (allIconSize - isize) / 2; // Center the image horizontally
    const offsetY = (allIconSize - isize) / 2; // Center the image vertically
    const src = getIconUrlByName('poi', PoiManager.preparePoiFilterIcon(icon));

    const html = `<svg viewBox="0 0 ${allIconSize} ${allIconSize}" width="${bsize}" height="${bsize}" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(${(allIconSize - bsize) / 2}, ${(allIconSize - bsize) / 2})">
                ${svg}
            </g>
            <image x="${offsetX}" y="${offsetY}" width="${isize}" height="${isize}" href="${src}" />
            </svg>`;

    return L.divIcon({ html: html });
}

function isStrangeShape(shape) {
    return (
        shape !== BACKGROUND_WPT_SHAPE_CIRCLE &&
        shape !== BACKGROUND_WPT_SHAPE_OCTAGON &&
        shape !== BACKGROUND_WPT_SHAPE_SQUARE
    );
}

export function getBackground(colorBackground, shape) {
    let svg;
    if (shape) {
        if (shape === BACKGROUND_WPT_SHAPE_CIRCLE || isStrangeShape(shape)) {
            svg = changeSvgColor(backgrounds['bg_point_circle.svg'], colorBackground);
        }
        if (shape === BACKGROUND_WPT_SHAPE_OCTAGON) {
            svg = changeSvgColor(backgrounds['bg_point_octagon.svg'], colorBackground);
        }
        if (shape === BACKGROUND_WPT_SHAPE_SQUARE) {
            svg = changeSvgColor(backgrounds['bg_point_square.svg'], colorBackground);
        }
    } else {
        svg = changeSvgColor(backgrounds['bg_point_circle.svg'], colorBackground);
    }
    return svg;
}

function getBackgroundLight(shape) {
    let svg;
    if (shape) {
        if (shape === BACKGROUND_WPT_SHAPE_CIRCLE || isStrangeShape(shape)) {
            svg = backgrounds['bg_point_circle_light.svg'];
        }
        if (shape === BACKGROUND_WPT_SHAPE_OCTAGON) {
            svg = backgrounds['bg_point_octagon_light.svg'];
        }
        if (shape === BACKGROUND_WPT_SHAPE_SQUARE) {
            svg = backgrounds['bg_point_square_light.svg'];
        }
    } else {
        svg = backgrounds['bg_point_circle_light.svg'];
    }
    return svg;
}

function getBackgroundSize(shape) {
    let res;
    if (shape) {
        if (shape === BACKGROUND_WPT_SHAPE_CIRCLE || isStrangeShape(shape)) {
            res = parseSvgSize(backgrounds['bg_point_circle_light.svg']);
        }
        if (shape === BACKGROUND_WPT_SHAPE_OCTAGON) {
            res = parseSvgSize(backgrounds['bg_point_octagon_light.svg']);
        }
        if (shape === BACKGROUND_WPT_SHAPE_SQUARE) {
            res = parseSvgSize(backgrounds['bg_point_square_light.svg']);
        }
    } else {
        res = parseSvgSize(backgrounds['bg_point_circle_light.svg']);
    }
    if (res) {
        return res.width;
    }
}

export function removeShadowFromIconWpt(svgHtml) {
    const filterPattern = /filter=".*?"/g;
    const styleFilterPattern = /style="[^"]*filter:[^;"]*;?[^"]*"/g;

    svgHtml = svgHtml.replace(filterPattern, '');

    svgHtml = svgHtml.replace(styleFilterPattern, (match) => {
        return match.replace(/filter:[^;"]*;?/, '');
    });
    return svgHtml;
}

export function changeIconColor(svgHtml, color) {
    const colorPattern = /(<path[^>]*fill=")[^"]*(")/g;
    const strokePattern = /(<path[^>]*stroke=")[^"]*(")/g;
    svgHtml = svgHtml.replace(colorPattern, `$1${color}$2`);
    svgHtml = svgHtml.replace(strokePattern, `$1${color}$2`);
    return svgHtml;
}

function changeSvgColor(svgHtml, color) {
    const colorPattern = /(fill=")(?!none")[^"]*(")/g;
    return svgHtml.replace(colorPattern, `$1${color}$2`);
}

function parseSvgSize(svgHtml) {
    const viewBoxPattern = /<svg[^>]*viewBox="0 0 (\d+) (\d+)"/;
    const viewBoxMatch = svgHtml.match(viewBoxPattern);
    const width = viewBoxMatch ? parseInt(viewBoxMatch[1], 10) : null;
    const height = viewBoxMatch ? parseInt(viewBoxMatch[2], 10) : null;
    if (width && height) {
        return { width, height };
    }
    return null;
}

function replacePathDataAndCalculateSize(pathData, shapeSize, oldShapeSize) {
    // ex. oldShapeSize = 24 and old path = d="M1 7L7 1H17L23 7V17L17 23H7L1 17V7Z"
    // for shapeSize = 30 new path = d="M1 9L9 1H21L29 9V21L21 29H9L1 21V9Z"
    const values = pathData.match(/[-+]?\d*\.?\d+/g);

    if (values && values.length === 14) {
        const scaleFactor = shapeSize / oldShapeSize;
        const newValues = values.map((value) => {
            const shiftedValue = parseFloat(value) * scaleFactor;
            return Math.round(shiftedValue);
        });

        const newPathData = `M${newValues[0]} ${newValues[1]}L${newValues[2]} ${newValues[3]}H${newValues[4]}L${newValues[5]} ${newValues[6]}V${newValues[7]}L${newValues[8]} ${newValues[9]}H${newValues[10]}L${newValues[11]} ${newValues[12]}V${newValues[13]}Z`;

        const minX = Math.min(
            newValues[0],
            newValues[2],
            newValues[4],
            newValues[5],
            newValues[8],
            newValues[10],
            newValues[11]
        );
        const maxX = Math.max(
            newValues[0],
            newValues[2],
            newValues[4],
            newValues[5],
            newValues[8],
            newValues[10],
            newValues[11]
        );
        const minY = Math.min(
            newValues[1],
            newValues[3],
            newValues[6],
            newValues[7],
            newValues[9],
            newValues[12],
            newValues[13]
        );
        const maxY = Math.max(
            newValues[1],
            newValues[3],
            newValues[6],
            newValues[7],
            newValues[9],
            newValues[12],
            newValues[13]
        );

        const realWidth = maxX - minX;
        const realHeight = maxY - minY;

        return { newPathData, realWidth, realHeight };
    }

    return { newPathData: pathData, realWidth: 0, realHeight: 0 };
}

// only for icons with image (with href)
export function changeIconSizeWpt(svgHtml, iconSize, shapeSize) {
    // Update the sizes inside viewBox and for <image>, <circle>, <path>, <rect>
    const viewBoxPattern = /viewBox="0 0 (\d+) (\d+)"/;
    const widthPattern = /width="(\d+)"/;
    const heightPattern = /height="(\d+)"/;
    const circlePattern = /<circle ([^>]*)cx="(\d+\.?\d*)" ([^>]*)cy="(\d+\.?\d*)" ([^>]*)r="(\d+\.?\d*)" ([^>]*)\/>/;
    const pathPattern = /<path\s[^>]*d="([^"]+)"[^>]*>/g;
    const rectPattern =
        /<rect ([^>]*)width="(\d+\.?\d*)" ([^>]*)height="(\d+\.?\d*)" ([^>]*)rx="(\d+\.?\d*)" ([^>]*)\/>/;
    const imagePattern = /<g[^>]*>\s*<image[^>]*\/>\s*<\/g>/g;
    const singleImagePattern = /<image[^>]*\/>/g;

    const viewBoxMatch = svgHtml.match(viewBoxPattern);
    const oldShapeSize = viewBoxMatch ? parseFloat(viewBoxMatch[1]) : shapeSize;
    let nestedBWidth = shapeSize;
    let nestedBHeight = shapeSize;

    svgHtml = svgHtml.replace(viewBoxPattern, () => {
        // Update the sizes inside viewBox
        const newWidth = shapeSize;
        const newHeight = shapeSize;
        return `viewBox="0 0 ${newWidth} ${newHeight}"`;
    });

    // Remove <g> wrapper around <image> if it exists and process the <image>
    svgHtml = svgHtml.replace(imagePattern, (match) => {
        const imageMatch = match.match(singleImagePattern);
        return imageMatch ? imageMatch[0] : match;
    });

    svgHtml = svgHtml.replace(widthPattern, () => {
        // Update width
        return `width="${shapeSize}"`;
    });

    svgHtml = svgHtml.replace(heightPattern, () => {
        // Update height
        return `height="${shapeSize}"`;
    });

    // Update the sizes inside <circle>, <path>, <rect>
    svgHtml = svgHtml.replace(
        /<svg ([^>]*)width="(\d+\.?\d*)" ([^>]*)height="(\d+\.?\d*)" ([^>]*)viewBox="0 0 (\d+\.?\d*) (\d+\.?\d*)"([^>]*)>/g,
        (match, prefix, nestedWidth, middle1, nestedHeight, middle2, viewBoxWidth, viewBoxHeight, suffix) => {
            if (match.includes('<image')) {
                return match;
            }
            return `<svg ${prefix} width="${shapeSize}" ${middle1} height="${shapeSize}" ${middle2} viewBox="0 0 ${shapeSize} ${shapeSize}"${suffix}>`;
        }
    );

    svgHtml = svgHtml.replace(circlePattern, (match, prefix, cx, middle, cy, middle2, r, suffix) => {
        // Update the sizes inside <circle>
        const newCx = shapeSize / 2;
        const newCy = shapeSize / 2;
        const newR = shapeSize / 2;
        return `<circle ${prefix} cx="${newCx}" ${middle} cy="${newCy}" ${middle2} r="${newR}" ${suffix}/>`;
    });

    svgHtml = svgHtml.replace(pathPattern, (match, pathData) => {
        // Update the sizes inside <path>
        const { newPathData, realWidth, realHeight } = replacePathDataAndCalculateSize(
            pathData,
            shapeSize,
            oldShapeSize
        );
        const fillPattern = /fill="([^"]*)"/;
        const oldFillMatch = match.match(fillPattern);
        const oldFill = oldFillMatch ? oldFillMatch[1] : '';

        nestedBHeight = realHeight;
        nestedBWidth = realWidth;

        return `<path d="${newPathData}" fill="${oldFill}"/>`;
    });

    svgHtml = svgHtml.replace(rectPattern, (match, prefix, width, middle, height, middle2, rx, suffix) => {
        // Update the sizes inside <rect>
        const newWidth = shapeSize;
        const newHeight = shapeSize;
        const newRx = newWidth / 8;
        return `<rect ${prefix} width="${newWidth}" ${middle} height="${newHeight}" ${middle2} rx="${newRx}" ${suffix}/>`;
    });

    svgHtml = svgHtml.replace(/<g transform="translate\((\d+\.?\d*), (\d+\.?\d*)\)">/g, () => {
        const offsetX = (shapeSize - nestedBWidth) / 2;
        const offsetY = (shapeSize - nestedBHeight) / 2;
        return `<g transform="translate(${offsetX}, ${offsetY})">`;
    });

    // Process single <image> tags
    svgHtml = svgHtml.replace(singleImagePattern, (match) => {
        const hrefPattern = /href="([^"]*)"/;
        const hrefMatch = match.match(hrefPattern);
        const href = hrefMatch ? hrefMatch[1] : '';

        const newSize = iconSize;
        const offsetX = (shapeSize - newSize) / 2;
        const offsetY = (shapeSize - newSize) / 2;
        const transform = `translate(${offsetX},${offsetY})`;

        return `<image transform="${transform}" width="${newSize}" height="${newSize}" href="${href}" />`;
    });

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
    BACKGROUND_WPT_SHAPE_CIRCLE: BACKGROUND_WPT_SHAPE_CIRCLE,
    BACKGROUND_WPT_SHAPE_OCTAGON: BACKGROUND_WPT_SHAPE_OCTAGON,
    BACKGROUND_WPT_SHAPE_SQUARE: BACKGROUND_WPT_SHAPE_SQUARE,
    DEFAULT_WPT_ICON: DEFAULT_WPT_ICON,
    DEFAULT_WPT_COLOR: DEFAULT_WPT_COLOR,
};

export default MarkerOptions;
