import MvtLayer from './MvtLayer';
import MvtHybridDemoUnderlay from './MvtHybridDemo';
import defaultStyle from '../mvt/defaultStyle.json';
import { isOsmAndTileURL, MVT_OSMAND_URL } from '../mvt/MvtDemoConfig';

const config = {
    style: defaultStyle,
    tileUrl: MVT_OSMAND_URL,
    isActive: isOsmAndTileURL,
    popupClassName: 'mvt-demo-popup',
    errorLabel: 'MVT demo layer error',
    pane: 'mvtDemoPane',
    paneZIndex: 250,
};

export default function MvtDemoLayer() {
    return (
        <>
            <MvtHybridDemoUnderlay />
            <MvtLayer config={config} />
        </>
    );
}
