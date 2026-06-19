import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import DropOverlay from './components/DropOverlay';
import { getMenuDropOverlayRect, getVisibleMapInsets } from './TracksMapDropGeometry';

export default function TracksDropOverlay() {
    const ctx = useContext(AppContext);
    const [insets, setInsets] = useState(null);

    const drag = ctx.gpxFileDrag;
    const active = !!drag?.active;
    const overMap = !!drag?.overMap;
    const hoverFolder = drag?.hoverFolder ?? null;

    useEffect(() => {
        if (!active) {
            setInsets(null);
            return;
        }

        const update = () => {
            if (overMap && hoverFolder === null) {
                setInsets(getVisibleMapInsets(ctx));
                return;
            }

            if (!overMap && hoverFolder !== null) {
                const container = ctx.getGpxDropOverlayEl(hoverFolder);
                setInsets(getMenuDropOverlayRect(container, ctx));
                return;
            }

            setInsets(null);
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
        overMap,
        hoverFolder,
        ctx.getGpxDropOverlayEl,
        ctx.infoBlockWidth,
        ctx.globalGraph?.show,
        ctx.globalGraph?.size,
        ctx.openMainMenu,
    ]);

    if (!insets) {
        return null;
    }

    return <DropOverlay insets={insets} />;
}
