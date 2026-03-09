import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';
import { ReactComponent as ActionBackIcon } from '../../../../assets/icons/ic_action_back.svg';
import { ReactComponent as ArrowForwardIcon } from '../../../../assets/icons/ic_arrow_forward.svg';
import AppContext from '../../../../context/AppContext';
import { TRANSPORT_STOPS_LAYER_ID } from '../../../../map/layers/TransportStopsLayer';
import styles from './transport.module.css';

export default function TransportStopRouteNavButtons({ route, stopsBeforeOpen }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const stops = route?.stops ?? [];
    const currentStopIndex = route ? stops.findIndex((s) => s.stopId === route.currentStopId) : -1;
    const currentHoverIndex = stops.findIndex((s) => s.stopId === ctx.selectedWptId?.id);

    // A stop of this route is currently highlighted (hover or click).
    const hasHighlight =
        ctx.selectedWptId?.type === TRANSPORT_STOPS_LAYER_ID &&
        ctx.selectedWptId?.show !== false &&
        currentHoverIndex >= 0;

    // Index to use for Prev/Next: highlighted stop if any, otherwise current stop.
    const effectiveIndex = hasHighlight ? currentHoverIndex : currentStopIndex;

    const goToPrevStop = () => {
        if (effectiveIndex <= 0) return;
        const prevStop = stops[effectiveIndex - 1];
        const isInCollapsedClosed = effectiveIndex - 1 < currentStopIndex && !stopsBeforeOpen;
        ctx.setSelectedWptId({
            id: prevStop?.stopId,
            show: true,
            type: TRANSPORT_STOPS_LAYER_ID,
            obj: prevStop,
            ...(isInCollapsedClosed ? { hideListHighlight: true } : {}),
        });
    };

    const goToNextStop = () => {
        if (effectiveIndex < 0 || effectiveIndex >= stops.length - 1) return;
        const nextStop = stops[effectiveIndex + 1];
        const isInCollapsedClosed = effectiveIndex + 1 < currentStopIndex && !stopsBeforeOpen;
        ctx.setSelectedWptId({
            id: nextStop?.stopId,
            show: true,
            type: TRANSPORT_STOPS_LAYER_ID,
            obj: nextStop,
            ...(isInCollapsedClosed ? { hideListHighlight: true } : {}),
        });
    };

    if (!stops.length) return null;

    return (
        <Box className={styles.stopsNavButtons}>
            <Button
                variant="text"
                className={`${styles.stopsNavButton} ${styles.stopsNavButtonPrev}`}
                onClick={goToPrevStop}
                disabled={effectiveIndex <= 0}
                aria-label={t('shared_string_previous')}
            >
                <ActionBackIcon />
                {t('shared_string_previous')}
            </Button>
            <Button
                variant="text"
                className={`${styles.stopsNavButton} ${styles.stopsNavButtonNext}`}
                onClick={goToNextStop}
                disabled={effectiveIndex < 0 || effectiveIndex >= stops.length - 1}
                aria-label={t('shared_string_next')}
            >
                {t('shared_string_next')}
                <ArrowForwardIcon />
            </Button>
        </Box>
    );
}
