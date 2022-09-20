import L from "leaflet";

const MarkerIcon = ({iconType = 'default-marker', bg = 'blue'}) => {

    let svg = ` <svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="15" fill='${bg}'/>
                        </svg>`

    return L.divIcon({
        html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/map_icons/${iconType}.svg"
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

function getWptIcon(point) {
    let colorBackground = (point.extensions && point.extensions.color) ? point.extensions.color : '#eecc22';
    let svg = getSvgBackground(colorBackground, point);

    if (point.extensions?.icon) {
        return L.divIcon({
            html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/poi-icons-svg/mx_${point.extensions.icon}.svg"
                              </div>
                              `
        })
    } else {
        return L.divIcon({
            html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/poi-icons-svg/mx_special_star.svg"
                              </div>
                              `
        })
    }
}

function getSvgBackground(colorBackground, point) {
    let svg;
    if (point.extensions?.background) {
        if (point.extensions.background === "circle") {
            svg = ` <svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="12" fill="${colorBackground}"/>
                        </svg>`
        }
        if (point.extensions.background === "octagon") {
            svg = `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                           <path d="M13 19L19 13H29L35 19V29L29 35H19L13 29V19Z" fill="${colorBackground}"/>
                        </svg>`
        }
        if (point.extensions.background === "square") {
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
    getWptIcon
};

export default MarkerOptions;