import React, { useContext, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { convertMeters, getLargeLengthUnit, getSmallLengthUnit, LARGE_UNIT } from '../settings/units/UnitsConverter';
import { useTranslation } from 'react-i18next';
import styles from './routemenu.module.css';
import GrayBtnWithBlueHover from '../../frame/components/btns/GrayBtnWithBlueHover';
import AppContext from '../../context/AppContext';

function formatDistance(distanceMeters, ctx, locale, t) {
    if (!distanceMeters) {
        return null;
    }
    const value = convertMeters(distanceMeters, ctx.unitsSettings.len, LARGE_UNIT);
    if (value == null) {
        return null;
    }
    const formatter = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    return {
        value: formatter.format(value),
        unit: t(getLargeLengthUnit(ctx)),
    };
}

function formatDuration(seconds, t) {
    if (!seconds) {
        return null;
    }
    const totalMinutes = Math.round(seconds / 60);
    return {
        value: totalMinutes.toString(),
        unit: t('web:short_min'),
    };
}

function formatArrival(seconds) {
    if (!seconds) {
        return null;
    }
    const arrival = new Date(Date.now() + seconds * 1000);
    return arrival.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

function formatElevation(value, ctx, t, prefix) {
    if (value == null) {
        return null;
    }
    const converted = convertMeters(value, ctx.unitsSettings.len);
    if (converted == null) {
        return null;
    }
    return `${prefix} ${Math.round(converted)} ${t(getSmallLengthUnit(ctx))}`;
}

export default function RouteSummaryCard({ routeProps, onDetails }) {
    const ctx = useContext(AppContext);
    const { t, i18n } = useTranslation();

    const summary = useMemo(() => {
        const overall = routeProps?.overall ?? {};
        const elevationUp = routeProps?.diffElevationUp ?? overall?.diffElevationUp;
        const elevationDown = routeProps?.diffElevationDown ?? overall?.diffElevationDown;

        return {
            distance: formatDistance(overall?.distance, ctx, i18n.language, t),
            duration: formatDuration(overall?.time, t),
            arrival: formatArrival(overall?.time),
            elevationUp: formatElevation(elevationUp, ctx, t, '↑'),
            elevationDown: formatElevation(elevationDown, ctx, t, '↓'),
        };
    }, [routeProps]);

    if (!summary.distance && !summary.duration) {
        return null;
    }

    return (
        <Box className={styles.routeSummary}>
            <Box className={styles.routeSummaryInfo}>
                {summary.distance && (
                    <>
                        <Typography className={styles.routeSummaryValue}>{summary.distance.value}</Typography>
                        <Typography className={styles.routeSummaryUnit}>{summary.distance.unit}</Typography>
                    </>
                )}
                {summary.distance && summary.duration && (
                    <Typography className={styles.routeSummaryPoint}>•</Typography>
                )}
                {summary.duration && (
                    <>
                        <Typography className={styles.routeSummaryValue}>{summary.duration.value}</Typography>
                        <Typography className={styles.routeSummaryUnit}>{summary.duration.unit}</Typography>
                    </>
                )}
                {summary.arrival && <Typography className={styles.routeSummaryArrival}>({summary.arrival})</Typography>}
            </Box>

            <Box className={styles.routeSummaryInfo}>
                {summary.elevationUp && (
                    <Typography className={styles.routeSummaryElevation}>{summary.elevationUp}</Typography>
                )}
                {summary.elevationDown && (
                    <Typography className={styles.routeSummaryElevation}>{summary.elevationDown}</Typography>
                )}
            </Box>
            <Box sx={{ mt: '20px' }}>
                <GrayBtnWithBlueHover action={onDetails} text={t('shared_string_details')} />
            </Box>
        </Box>
    );
}
