import L from 'leaflet';
import Utils from '../../util/Utils';

const BACKGROUND_WPT_SHAPE_CIRCLE = 'circle';
const BACKGROUND_WPT_SHAPE_OCTAGON = 'octagon';
const BACKGROUND_WPT_SHAPE_SQUARE = 'square';
const DEFAULT_WPT_ICON = 'special_star';
const DEFAULT_WPT_COLOR = '#eecc22';
const POI_ICONS_FOLDER = 'poi-icons-svg';

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

export function getWptIcon(point, color, background, icon, folder) {
    let colorBackground =
        color && color !== 'null'
            ? color
            : point.extensions?.color && point.extensions.color !== 'null'
            ? point.extensions.color
            : DEFAULT_WPT_COLOR;
    colorBackground = Utils.hexToArgb(colorBackground);
    let shapeBackground = background ? background : point.background;
    let svg = getSvgBackground(colorBackground, shapeBackground);
    let iconWpt =
        icon && icon !== 'null'
            ? icon
            : point.extensions?.icon && point.extensions.icon !== 'null'
            ? point.extensions.icon
            : DEFAULT_WPT_ICON;
    let iconsFolder = folder ? folder : POI_ICONS_FOLDER;
    let part = point ? 'mx_' : '';
    if (iconWpt) {
        return L.divIcon({
            html: `<svg viewBox="0 0 24 24" filter="drop-shadow(5px 0 2px gray)" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    ${svg}
                   <image x="0" y="0" width="24" height="24" href="/map/images/${iconsFolder}/${part}${iconWpt}.svg" />
                   </svg>`,
        });
    } else {
        return L.divIcon({
            html: `<svg viewBox="0 0 24 24"  filter="drop-shadow(5px 0 2px gray)" xmlns="http://www.w3.org/2000/svg">
                   ${svg}
                   <image x="0" y="0" width="24" height="24" href="/map/images/${POI_ICONS_FOLDER}/mx_${DEFAULT_WPT_ICON}.svg" />
                   </svg>`,
        });
    }
}

function isStrangeShape(shape) {
    return (
        shape !== BACKGROUND_WPT_SHAPE_CIRCLE &&
        shape !== BACKGROUND_WPT_SHAPE_OCTAGON &&
        shape !== BACKGROUND_WPT_SHAPE_SQUARE
    );
}

function getSvgBackground(colorBackground, shape) {
    let svg;
    if (shape) {
        if (shape === BACKGROUND_WPT_SHAPE_CIRCLE || isStrangeShape(shape)) {
            svg = `<circle cx="12" cy="12" r="12" fill="${colorBackground}"/>`;
        }
        if (shape === BACKGROUND_WPT_SHAPE_OCTAGON) {
            svg = `<path d="M13 19L19 13H29L35 19V29L29 35H19L13 29V19Z" fill="${colorBackground}"/>`;
        }
        if (shape === BACKGROUND_WPT_SHAPE_SQUARE) {
            svg = `<rect x="13" y="13" width="22" height="22" rx="3" fill="${colorBackground}"/>`;
        }
    } else {
        svg = `<circle cx="12" cy="12" r="12" fill="${colorBackground}"/>`;
    }
    return svg;
}

const MarkerOptions = {
    options,
    getWptIcon,
    getSvgBackground,
    BACKGROUND_WPT_SHAPE_CIRCLE: BACKGROUND_WPT_SHAPE_CIRCLE,
    BACKGROUND_WPT_SHAPE_OCTAGON: BACKGROUND_WPT_SHAPE_OCTAGON,
    BACKGROUND_WPT_SHAPE_SQUARE: BACKGROUND_WPT_SHAPE_SQUARE,
    DEFAULT_WPT_ICON: DEFAULT_WPT_ICON,
    DEFAULT_WPT_COLOR: DEFAULT_WPT_COLOR,
    POI_ICONS_FOLDER: POI_ICONS_FOLDER,
};

export default MarkerOptions;
