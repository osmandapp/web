import MvtLayer from './MvtLayer';
import mvtOsmStyle from '../../resources/mvt/osm-demo.mvt.json';
import { isOsmTestTileURL, MVT_OSM_TEST_URL } from './MvtLayerConfig';

const config = {
    style: mvtOsmStyle,
    tileUrl: MVT_OSM_TEST_URL,
    isActive: isOsmTestTileURL,
    popupClassName: 'mvt-osm-popup',
    errorLabel: 'MVT OSM layer error',
    pane: 'mvtOsmPane',
    paneZIndex: 250,
};

export default function MvtOsmLayer() {
    return <MvtLayer config={config} />;
}
