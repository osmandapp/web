import MarkerIcon from "./MarkerIcon";
import L from "leaflet";

const markerOptions = {
    startIcon: MarkerIcon({bg: '#1976d2'}), //blue
    endIcon: MarkerIcon({bg: '#ff595e'}),  //red
    pointerIcons: MarkerIcon({bg: '#fec93b'}), //yellow
    route: L.icon({
        iconUrl: '/map/images/map_icons/circle.svg',
        iconSize: [10, 10],
        clickable: false
    })
};

export default markerOptions;