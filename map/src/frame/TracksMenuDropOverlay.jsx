import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import DropOverlay from './components/DropOverlay';
import { getMenuDropOverlayRect, getMenuOverlayContainer } from './TracksMapDropGeometry';

export default function TracksMenuDropOverlay() {
    const ctx = useContext(AppContext);
    const [overlayInsets, setOverlayInsets] = useState(null);

    const hoverFolder = ctx.gpxFileDrag?.hoverFolder;
    const active = ctx.gpxFileDrag?.active && !ctx.gpxFileDrag?.overMap && hoverFolder !== null;

    useEffect(() => {
        if (!active) {
            setOverlayInsets(null);
            return;
        }

        const update = () => {
            const container = getMenuOverlayContainer(ctx.gpxFileDrag?.hoverFolder);
            if (!container) {
                setOverlayInsets(null);
                return;
            }
            const rect = getMenuDropOverlayRect(container, ctx);
            setOverlayInsets(rect);
        };

        update();
        window.addEventListener('resize', update);
        window.addEventListener('scroll', update, true);
        return () => {
            window.removeEventListener('resize', update);
            window.removeEventListener('scroll', update, true);
        };
    }, [
        active,
        hoverFolder,
        ctx.infoBlockWidth,
        ctx.globalGraph?.show,
        ctx.globalGraph?.size,
        ctx.openMainMenu,
    ]);

    if (!active) {
        return null;
    }

    return <DropOverlay insets={overlayInsets} />;
}
