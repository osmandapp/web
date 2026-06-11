import { Typography } from '@mui/material';
import { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import { HEADER_SIZE, MAIN_MENU_MIN_SIZE, MAIN_MENU_OPEN_SIZE } from '../../manager/GlobalManager';
import styles from './gpxMapDropOverlay.module.css';

const OVERLAY_MARGIN = 16;

function getVisibleMapInsets(ctx) {
    const infoBlockWidthPx = Number.parseInt(String(ctx.infoBlockWidth), 10) || 0;
    const bottomPx = ctx.globalGraph?.show ? ctx.globalGraph.size : 0;

    const leftChromePx =
        infoBlockWidthPx > 0
            ? MAIN_MENU_MIN_SIZE + infoBlockWidthPx
            : ctx.openMainMenu
              ? MAIN_MENU_OPEN_SIZE
              : MAIN_MENU_MIN_SIZE;
    return {
        top: HEADER_SIZE + OVERLAY_MARGIN,
        left: leftChromePx + OVERLAY_MARGIN,
        right: OVERLAY_MARGIN,
        bottom: bottomPx + OVERLAY_MARGIN,
    };
}

export default function GpxMapDropOverlay({ active }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
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
            className={styles.overlay}
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
