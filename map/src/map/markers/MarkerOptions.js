import L from "leaflet";
import Utils from "../../util/Utils";

const BACKGROUND_WPT_SHAPE_CIRCLE = "circle";
const BACKGROUND_WPT_SHAPE_OCTAGON = "octagon";
const BACKGROUND_WPT_SHAPE_SQUARE = "square";
const DEFAULT_WPT_ICON = 'special_star';
const DEFAULT_WPT_COLOR = '#eecc22';


const MarkerIcon = ({iconType = 'default-marker', bg = 'blue'}) => {

    let svg = ` <svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="15" fill='${bg}'/>
                        </svg>`

    return L.divIcon({
        html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/map_icons/${iconType}.svg">
                              </div>
                              `
    })
}

const options = {
    startIcon: MarkerIcon({bg: '#1976d2'}), //blue
    endIcon: MarkerIcon({bg: '#ff595e'}),  //red
    pointerIcons: MarkerIcon({bg: '#fec93b'}), //yellow
    route: L.icon({
        iconUrl: '/map/images/map_icons/circle.svg',
        iconSize: [10, 10],
        clickable: false
    })
};

function getWptIcon(point, color, background, icon) {
    let colorBackground = color ? color :
        (point.extensions && point.extensions.color) ? point.extensions.color : DEFAULT_WPT_COLOR;
    colorBackground = Utils.hexToArgb(colorBackground);
    let shapeBackground = background ? background : point.background;
    let svg = getSvgBackground(colorBackground, shapeBackground);
    let iconWpt = icon ? icon : point.extensions?.icon;

    if (iconWpt) {
        return L.divIcon({
            html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/poi-icons-svg/mx_${iconWpt}.svg">
                              </div>
                              `
        })
    } else {
        return L.divIcon({
            html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/poi-icons-svg/mx_${DEFAULT_WPT_ICON}.svg">
                              </div>
                              `
        })
    }
}

function getSvgBackground(colorBackground, shape) {
    let svg;
    if (shape) {
        if (shape === BACKGROUND_WPT_SHAPE_CIRCLE) {
            svg = ` <svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="12" fill="${colorBackground}"/>
                        </svg>`
        }
        if (shape === BACKGROUND_WPT_SHAPE_OCTAGON) {
            svg = `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                           <path d="M13 19L19 13H29L35 19V29L29 35H19L13 29V19Z" fill="${colorBackground}"/>
                        </svg>`
        }
        if (shape === BACKGROUND_WPT_SHAPE_SQUARE) {
            svg = `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <rect x="13" y="13" width="22" height="22" rx="3" fill="${colorBackground}"/>
                        </svg>`
        }
    } else {
        svg = `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                         <circle cx="24" cy="24" r="12" fill="${colorBackground}"/>
                        </svg>`
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
    DEFAULT_WPT_ICON:DEFAULT_WPT_ICON,
    DEFAULT_WPT_COLOR:DEFAULT_WPT_COLOR
};

export default MarkerOptions;