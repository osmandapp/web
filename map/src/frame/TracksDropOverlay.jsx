import { useContext } from 'react';
import AppContext from '../context/AppContext';
import DropOverlay from './components/DropOverlay';
import { getVisibleMapPadding } from '../map/layers/MapStateLayer';

export const OVERLAY_MARGIN = 16;

export default function TracksDropOverlay() {
    const ctx = useContext(AppContext);
    const drag = ctx.gpxFileDrag;

    if (!drag?.active || !drag?.overMap || drag?.hoverFolder !== null) {
        return null;
    }

    return <DropOverlay insets={getVisibleMapPadding(ctx, OVERLAY_MARGIN)} />;
}
