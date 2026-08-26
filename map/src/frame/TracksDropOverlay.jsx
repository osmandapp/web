import { useContext } from 'react';
import AppContext from '../context/AppContext';
import DropOverlay from './components/DropOverlay';
import { getVisibleMapPadding } from '../map/layers/MapStateLayer';

export const OVERLAY_MARGIN = 16;

export default function TracksDropOverlay() {
    const ctx = useContext(AppContext);
    if (!ctx.gpxFileDrag?.active || !ctx.gpxFileDrag?.overMap || ctx.gpxFileDrag?.hoverFolder !== null) {
        return null;
    }

    return <DropOverlay insets={getVisibleMapPadding(ctx, OVERLAY_MARGIN)} />;
}
