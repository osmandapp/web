import React, { useContext, useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { convertMeters, getLargeLengthUnit, getSmallLengthUnit, LARGE_UNIT } from '../settings/units/UnitsConverter';
import { useTranslation } from 'react-i18next';
import styles from './routemenu.module.css';
import GrayBtnWithBlueHover from '../../frame/components/btns/GrayBtnWithBlueHover';
import AppContext from '../../context/AppContext';
import { ReactComponent as UphillIcon } from '../../assets/icons/ic_action_altitude_ascent_16.svg';
import { ReactComponent as DownhillIcon } from '../../assets/icons/ic_action_altitude_descent_16.svg';
import NavigationSummaryGraph from '../../graph/navigation/NavigationSummaryGraph';
import { PROFILE_LINE } from '../../store/geoRouter/profileConstants';

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
    if (totalMinutes < 60) {
        return {
            value: totalMinutes.toString(),
            unit: t('web:short_min'),
        };
    }
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return {
        value: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`,
        unit: '',
    };
}

function formatArrival(seconds) {
    if (!seconds) {
        return null;
    }
    const arrival = new Date(Date.now() + seconds * 1000);
    return arrival.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

function formatCost(cost) {
    if (!cost) {
        return null;
    }

    return 'Cost: ' + cost.toFixed(0);
}

function formatElevation(value, ctx, t) {
    if (value == null) {
        return null;
    }
    const converted = convertMeters(value, ctx.unitsSettings.len);
    if (converted == null) {
        return null;
    }
    return `${Math.round(converted)} ${t(getSmallLengthUnit(ctx))}`;
}

export default function RouteSummaryCard({ routeProps, onDetails }) {
    const ctx = useContext(AppContext);
    const { t, i18n } = useTranslation();
    const previousSummary = useRef(null);
    const route = ctx.routeObject.getRoute();
    const currentProfile = ctx.routeObject.getProfile()?.profile;

    const overall = routeProps?.overall ?? {};
    const isLineProfile = currentProfile === PROFILE_LINE;
    let summary;

    if (overall?.time === 0 && previousSummary.current && !isLineProfile) {
        summary = previousSummary.current;
    } else {
        const elevationUp = routeProps?.diffElevationUp ?? overall?.diffElevationUp;
        const elevationDown = routeProps?.diffElevationDown ?? overall?.diffElevationDown;

        summary = {
            distance: formatDistance(overall?.distance, ctx, i18n.language, t),
            duration: formatDuration(overall?.time, t),
            arrival: formatArrival(overall?.time),
            cost: formatCost(overall?.routingTime),
            elevationUp: formatElevation(elevationUp, ctx, t),
            elevationDown: formatElevation(elevationDown, ctx, t),
        };

        previousSummary.current = summary;
    }

    return (
        <Box className={styles.routeSummary}>
            <Box className={styles.routeSummaryInfo} id="se-route-summary-info">
                {summary.distance && (
                    <Typography className={styles.routeSummaryValue}>
                        {summary.distance.value}
                        <span className={styles.routeSummaryUnit}> {summary.distance.unit}</span>
                    </Typography>
                )}
                {summary.distance && summary.duration && (
                    <Typography className={styles.routeSummaryPoint}>•</Typography>
                )}
                {summary.duration && (
                    <Typography className={styles.routeSummaryValue}>
                        {summary.duration.value}
                        {summary.duration.unit && (
                            <span className={styles.routeSummaryUnit}> {summary.duration.unit}</span>
                        )}
                    </Typography>
                )}
                {summary.arrival && <Typography className={styles.routeSummaryArrival}>({summary.arrival})</Typography>}
                {ctx.develFeatures && summary.cost && (
                    <Typography className={styles.routeSummaryCost}>{summary.cost}</Typography>
                )}
            </Box>

            <Box className={styles.routeSummaryInfo}>
                {summary.elevationUp && (
                    <>
                        <IconButton className={styles.textIcon}>
                            <UphillIcon />
                        </IconButton>
                        <Typography className={styles.routeSummaryElevation}>{summary.elevationUp}</Typography>
                    </>
                )}
                {summary.elevationDown && (
                    <>
                        <IconButton className={styles.textIcon}>
                            <DownhillIcon />
                        </IconButton>
                        <Typography className={styles.routeSummaryElevation}>{summary.elevationDown}</Typography>
                    </>
                )}
            </Box>
            {route && <NavigationSummaryGraph route={route} />}
            <Box sx={{ mt: '20px' }}>
                <GrayBtnWithBlueHover
                    id="se-route-more-information"
                    action={onDetails}
                    text={t('shared_string_details')}
                />
            </Box>
        </Box>
    );
}
