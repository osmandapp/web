import MvtLayer from './MvtLayer';
import mvtOsmStyle from '../mvt/mvtOsmStyle.json';
import { isMvtOsmTileURL, MVT_OSM_TILE_URL } from '../mvt/MvtDemoConfig';

const config = {
    style: mvtOsmStyle,
    tileUrl: MVT_OSM_TILE_URL,
    isActive: isMvtOsmTileURL,
    popupClassName: 'mvt-osm-popup',
    errorLabel: 'MVT OSM layer error',
};

export default function MvtOsmLayer() {
    return <MvtLayer config={config} />;
}
