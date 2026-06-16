import { useContext, useMemo } from 'react';
import AppContext from '../context/AppContext';
import DropOverlay from './components/DropOverlay';
import { getVisibleMapInsets } from './TracksMapDropGeometry';

export default function TracksMapDropOverlay() {
    const ctx = useContext(AppContext);
    const active =
        ctx.gpxFileDrag?.active && ctx.gpxFileDrag?.overMap && ctx.gpxFileDrag?.hoverFolder === null;
    const insets = useMemo(() => getVisibleMapInsets(ctx), [
        ctx.infoBlockWidth,
        ctx.globalGraph?.show,
        ctx.globalGraph?.size,
        ctx.openMainMenu,
    ]);

    if (!active) {
        return null;
    }

    return <DropOverlay insets={insets} />;
}
