import { Typography } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OVERLAY_MARGIN } from '../TracksDropOverlay';
import styles from './dropOverlay.module.css';

export default function TracksDropHighlight({
    active,
    dropZoneRef,
    scrollRef,
    listRef,
    rowsCount = 0,
    trackItemsCount = 0,
}) {
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

        // Where the flat track rows start, i.e. how much of the list above them is folders.
        const trackItemsStartIndex = rowsCount - trackItemsCount;
        const contentOffset = listRef?.current?.getItemOffset(trackItemsStartIndex) ?? 0;

        const update = () => {
            const scrollRect = scroll.getBoundingClientRect();
            const zoneRect = dropZone.getBoundingClientRect();

            // Keep the highlight off the folder rows above the flat track list: skip
            // whatever portion of the current scroll position is still inside them.
            const foldersVisibleHeight = Math.max(0, contentOffset - scroll.scrollTop);

            const top = Math.max(OVERLAY_MARGIN, scrollRect.top - zoneRect.top + OVERLAY_MARGIN + foldersVisibleHeight);
            const height = zoneRect.height - top - OVERLAY_MARGIN;

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
    }, [active, dropZoneRef, scrollRef, listRef, rowsCount, trackItemsCount]);

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
