import { Typography } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OVERLAY_MARGIN } from '../TracksDropOverlay';
import styles from './dropOverlay.module.css';

export default function TracksDropHighlight({ active, dropZoneRef, scrollRef }) {
    const { t } = useTranslation();
    const [insets, setInsets] = useState(null);

    useLayoutEffect(() => {
        if (!active) {
            setInsets(null);
            return;
        }

        const dropZone = dropZoneRef?.current;
        const scroll = scrollRef?.current;
        if (!dropZone || !scroll) {
            setInsets(null);
            return;
        }

        const update = () => {
            const scrollRect = scroll.getBoundingClientRect();
            const zoneRect = dropZone.getBoundingClientRect();

            const top = Math.max(OVERLAY_MARGIN, scrollRect.top - zoneRect.top + OVERLAY_MARGIN);
            const bottom = Math.max(OVERLAY_MARGIN, zoneRect.bottom - scrollRect.bottom + OVERLAY_MARGIN);
            const height = zoneRect.height - top - bottom;

            if (height <= 0) {
                setInsets(null);
                return;
            }

            setInsets({
                top,
                left: OVERLAY_MARGIN,
                right: OVERLAY_MARGIN,
                height,
            });
        };

        update();
        scroll.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            scroll.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [active, dropZoneRef, scrollRef]);

    if (!insets) {
        return null;
    }

    return (
        <div
            className={styles.tracksDropHighlight}
            style={{
                top: `${insets.top}px`,
                left: `${insets.left}px`,
                right: `${insets.right}px`,
                height: `${insets.height}px`,
            }}
        >
            <Typography className={styles.text}>{t('web:drop_gpx_to_import')}</Typography>
        </div>
    );
}
