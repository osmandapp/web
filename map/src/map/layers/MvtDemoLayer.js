import MvtLayer from './MvtLayer';
import defaultStyle from '../mvt/defaultStyle.json';
import { isMvtDemoTileURL, MVT_DEMO_TILE_URL } from '../mvt/MvtDemoConfig';

const config = {
    style: defaultStyle,
    tileUrl: MVT_DEMO_TILE_URL,
    isActive: isMvtDemoTileURL,
    popupClassName: 'mvt-demo-popup',
    errorLabel: 'MVT demo layer error',
};

export default function MvtDemoLayer() {
    return <MvtLayer config={config} />;
}
