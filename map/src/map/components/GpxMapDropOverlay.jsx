import { Typography } from '@mui/material';
import { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import { getVisibleMapInsets } from './GpxMapDropGeometry';
import styles from './gpxMapDropOverlay.module.css';

export default function GpxMapDropOverlay() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
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

    return (
        <div
            className={styles.dropOverlay}
            style={{
                top: `${insets.top}px`,
                left: `${insets.left}px`,
                right: `${insets.right}px`,
                bottom: `${insets.bottom}px`,
            }}
        >
            <Typography className={styles.text}>{t('web:drop_gpx_to_import')}</Typography>
        </div>
    );
}
