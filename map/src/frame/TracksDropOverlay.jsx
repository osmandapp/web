import { useContext } from 'react';
import AppContext from '../context/AppContext';
import DropOverlay from './components/DropOverlay';
import { getVisibleMapInsets } from './TracksMapDropGeometry';

export default function TracksDropOverlay() {
    const ctx = useContext(AppContext);
    const drag = ctx.gpxFileDrag;

    if (!drag?.active || !drag?.overMap || drag?.hoverFolder !== null) {
        return null;
    }

    return <DropOverlay insets={getVisibleMapInsets(ctx)} />;
}
