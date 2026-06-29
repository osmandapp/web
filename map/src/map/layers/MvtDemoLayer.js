import MvtLayer from './MvtLayer';
import defaultStyle from '../mvt/defaultStyle.json';
import { isOsmAndTileURL, MVT_OSMAND_URL } from '../mvt/MvtDemoConfig';

const config = {
    style: defaultStyle,
    tileUrl: MVT_OSMAND_URL,
    isActive: isOsmAndTileURL,
    popupClassName: 'mvt-demo-popup',
    errorLabel: 'MVT demo layer error',
};

export default function MvtDemoLayer() {
    return <MvtLayer config={config} />;
}
