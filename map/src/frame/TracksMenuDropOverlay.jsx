import { Typography } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from '../context/AppContext';
import { getMenuDropOverlayRect, getMenuOverlayContainer } from './TracksMapDropGeometry';
import styles from './tracksMapDropOverlay.module.css';

export default function TracksMenuDropOverlay() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const ctxRef = useRef(ctx);
    const [overlayStyle, setOverlayStyle] = useState(null);

    ctxRef.current = ctx;

    const hoverFolder = ctx.gpxFileDrag?.hoverFolder;
    const active = ctx.gpxFileDrag?.active && !ctx.gpxFileDrag?.overMap && hoverFolder !== null;

    useEffect(() => {
        if (!active) {
            setOverlayStyle(null);
            return;
        }

        const update = () => {
            const container = getMenuOverlayContainer(ctxRef.current.gpxFileDrag?.hoverFolder);
            if (!container) {
                setOverlayStyle(null);
                return;
            }
            const rect = getMenuDropOverlayRect(container, ctxRef.current);
            if (!rect) {
                setOverlayStyle(null);
                return;
            }
            setOverlayStyle({
                top: `${rect.top}px`,
                left: `${rect.left}px`,
                right: `${rect.right}px`,
                bottom: `${rect.bottom}px`,
            });
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
    ]);

    if (!active || !overlayStyle) {
        return null;
    }

    return (
        <div className={styles.dropOverlay} style={overlayStyle}>
            <Typography className={styles.text}>{t('web:drop_gpx_to_import')}</Typography>
        </div>
    );
}
