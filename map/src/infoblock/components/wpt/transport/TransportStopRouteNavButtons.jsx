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

    const goToPrevStop = () => {
        if (currentHoverIndex <= 0) return;
        const prevStop = stops[currentHoverIndex - 1];
        const isInCollapsedClosed = currentHoverIndex - 1 < currentStopIndex && !stopsBeforeOpen;
        ctx.setSelectedWptId({
            id: prevStop?.stopId,
            show: true,
            type: TRANSPORT_STOPS_LAYER_ID,
            obj: prevStop,
            ...(isInCollapsedClosed ? { hideListHighlight: true } : {}),
        });
    };

    const goToNextStop = () => {
        if (currentHoverIndex < 0 || currentHoverIndex >= stops.length - 1) return;
        const nextStop = stops[currentHoverIndex + 1];
        const isInCollapsedClosed = currentHoverIndex + 1 < currentStopIndex && !stopsBeforeOpen;
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
                disabled={currentHoverIndex <= 0}
                aria-label={t('shared_string_previous')}
            >
                <ActionBackIcon />
                {t('shared_string_previous')}
            </Button>
            <Button
                variant="text"
                className={`${styles.stopsNavButton} ${styles.stopsNavButtonNext}`}
                onClick={goToNextStop}
                disabled={currentHoverIndex < 0 || currentHoverIndex >= stops.length - 1}
                aria-label={t('shared_string_next')}
            >
                {t('shared_string_next')}
                <ArrowForwardIcon />
            </Button>
        </Box>
    );
}
