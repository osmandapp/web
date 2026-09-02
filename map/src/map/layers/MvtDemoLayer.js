import MvtLayer from './MvtLayer';
import MvtHybridDemoUnderlay from './MvtHybridDemo';
import defaultStyle from '../../resources/mvt/default.mvt.json';
import { isOsmAndTileURL, MVT_OSMAND_URL } from './MvtLayerConfig';
import { MVT_PANE_Z_INDEX } from '../util/ZIndexes';

const config = {
    style: defaultStyle,
    tileUrl: MVT_OSMAND_URL,
    isActive: isOsmAndTileURL,
    popupClassName: 'mvt-demo-popup',
    errorLabel: 'MVT demo layer error',
    pane: 'mvtDemoPane',
    paneZIndex: MVT_PANE_Z_INDEX,
};

export default function MvtDemoLayer() {
    return (
        <>
            <MvtHybridDemoUnderlay />
            <MvtLayer config={config} />
        </>
    );
}
