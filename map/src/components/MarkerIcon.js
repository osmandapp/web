import L from "leaflet";

const MarkerIcon = ({iconType = 'default-marker', bg = 'blue'}) => {
    return new L.Icon({
        iconUrl: '/map/images/map_icons/' + iconType + '.svg',
        shadowUrl: '/map/images/map_icons/poi_' + bg + '_shield_map.svg',
        iconSize: [20, 20],
        shadowSize: [30, 30]
    })
}

export default MarkerIcon;