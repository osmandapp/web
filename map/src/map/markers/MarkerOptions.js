import MarkerIcon from "./MarkerIcon";
import L from "leaflet";

const markerOptions = {
    startIcon: MarkerIcon({bg: 'blue'}),
    endIcon: MarkerIcon({bg: 'red'}),
    pointerIcons: MarkerIcon({bg: '#fec93b'}), //yellow
    route: L.icon({
        iconUrl: '/map/images/map_icons/circle.svg',
        iconSize: [10, 10],
        clickable: false
    })
};

export default markerOptions;