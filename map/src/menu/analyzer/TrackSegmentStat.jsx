import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from './trackanalyzer.module.css';
import React, { useEffect, useState } from 'react';
import { ReactComponent as SegmentIcon } from '../../assets/icons/ic_action_gpx_width_bold.svg';
import { ReactComponent as MaxSpeedIcon } from '../../assets/icons/ic_action_max_speed_16.svg';
import { ReactComponent as AvgSpeedIcon } from '../../assets/icons/ic_action_speed_16.svg';
import { ReactComponent as MinSpeedIcon } from '../../assets/icons/ic_action_min_speed_16.svg';
import { ReactComponent as MaxAltitudeIcon } from '../../assets/icons/ic_action_altitude_max_16.svg';
import { ReactComponent as AvgAltitudeIcon } from '../../assets/icons/ic_action_altitude_average_16.svg';
import { ReactComponent as MinAltitudeIcon } from '../../assets/icons/ic_action_altitude_min_16.svg';
import { ReactComponent as UphillIcon } from '../../assets/icons/ic_action_altitude_min_16.svg';
import { ReactComponent as DownhillIcon } from '../../assets/icons/ic_action_altitude_min_16.svg';
import { ReactComponent as DateIcon } from '../../assets/icons/ic_action_calendar_16.svg';
import { ReactComponent as TimeDurationIcon } from '../../assets/icons/ic_action_time_span_16.svg';
import { ReactComponent as TimeMovingIcon } from '../../assets/icons/ic_action_time_span_16.svg';
import { ReactComponent as DistanceIcon } from '../../assets/icons/ic_action_length_16.svg';
import SimpleDivider from '../components/dividers/SimpleDivider';
import DividerWithMargin from '../components/dividers/DividerWithMargin';
import ThickDivider from '../components/dividers/ThickDivider';
import { format } from 'date-fns';
import * as locales from 'date-fns/locale';
import i18n from 'i18next';
import { MAIN_BLOCK_SIZE } from './TrackAnalyzerMenu';
import { useTranslation } from 'react-i18next';

export const getSpeedStats = (stats, t) => [
    { icon: <MaxSpeedIcon />, label: t('shared_string_max_speed'), ...formatValue(stats.maxSpeed, t('km_h')) },
    { icon: <AvgSpeedIcon />, label: t('web:avg_speed'), ...formatValue(stats.avgSpeed, t('km_h')) },
    { icon: <MinSpeedIcon />, label: t('shared_string_min_speed'), ...formatValue(stats.minSpeed, t('km_h')) },
];

export const getAltitudeStats = (stats, t) => [
    { icon: <MaxAltitudeIcon />, label: t('web:max_altitude'), ...formatValue(stats.maxElevation, t('m')) },
    { icon: <AvgAltitudeIcon />, label: t('web:avg_altitude'), ...formatValue(stats.avgElevation, t('m')) },
    { icon: <MinAltitudeIcon />, label: t('web:min_altitude'), ...formatValue(stats.minElevation, t('m')) },
    { icon: <UphillIcon />, label: t('shared_string_uphill'), ...formatValue(stats.diffElevationUp, t('m')) },
    { icon: <DownhillIcon />, label: t('shared_string_downhill'), ...formatValue(stats.diffElevationDown, t('m')) },
];

export const getOtherStats = (stats, t, formatDate) => [
    { icon: <DateIcon />, label: t('shared_string_date'), value: formatDate(stats.date) },
    { icon: <TimeDurationIcon />, label: t('duration'), ...formatValue(stats.duration, t('web:h'), 3600000) },
    { icon: <TimeMovingIcon />, label: t('web:moving_time'), ...formatValue(stats.timeMoving, t('web:h'), 3600000) },
    { icon: <DistanceIcon />, label: t('web:length'), ...formatValue(stats.totalDist, t('km'), 1000) },
];

const formatValue = (value, unit = '', factor = 1) => {
    if (value === 'NaN') return { value: 'NaN', unit: '' };
    return { value: (Number(value) / factor).toFixed(2), unit };
};

export default function TrackSegmentStat({ height, sortedSegments, activeSegmentParams }) {
    const { t } = useTranslation();

    const [filteredStats, setFilteredStats] = useState([]);

    const formatDate = (timestamp) => {
        const locale = locales[i18n.language] || locales.enUS;
        const date = new Date(parseInt(timestamp, 10));
        if (isNaN(date)) {
            return timestamp;
        }
        return format(date, 'dd.MM.yyyy', { locale });
    };

    useEffect(() => {
        if (!sortedSegments) return;

        setFilteredStats(
            sortedSegments.map((segment) => ({
                name: segment.name,
                color: segment.color,
                stats: {
                    speed: getSpeedStats(segment.stats, t).filter((s) => activeSegmentParams.has(s.label)),
                    altitude: getAltitudeStats(segment.stats, t).filter((s) => activeSegmentParams.has(s.label)),
                    other: getOtherStats(segment.stats, t, formatDate).filter((s) => activeSegmentParams.has(s.label)),
                },
            }))
        );
    }, [sortedSegments, activeSegmentParams]);

    const Statistics = (stats) => {
        if (!stats) return null;

        const StatItems = (items, isLastGroup) => (
            <Box>
                {items.map((item, index) => (
                    <Box key={index}>
                        <MenuItem className={styles.statItem}>
                            <ListItemIcon className={styles.icon}>{item.icon}</ListItemIcon>
                            <ListItemText
                                primary={
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="inherit" noWrap>
                                            {item.label}
                                        </Typography>
                                        <Box display="flex" justifyContent="flex-end" alignItems="center">
                                            <Typography
                                                className={styles.statItemValue}
                                                noWrap
                                                sx={{ ...(!item.unit && { mr: -1 }) }}
                                            >
                                                {item.value}
                                            </Typography>
                                            <Typography className={styles.statItemValue2} noWrap sx={{ mt: '2px' }}>
                                                &nbsp;{item.unit}
                                            </Typography>
                                        </Box>
                                    </Box>
                                }
                            />
                        </MenuItem>
                        {index < items.length - 1 && <DividerWithMargin dashed={true} />}
                    </Box>
                ))}
                {!isLastGroup && <SimpleDivider />}
            </Box>
        );

        return (
            <Box>
                {StatItems(stats.speed)}
                {StatItems(stats.altitude)}
                {StatItems(stats.other)}
            </Box>
        );
    };

    return (
        <Box sx={{ maxHeight: `${height - MAIN_BLOCK_SIZE}px`, overflowY: 'auto' }}>
            {filteredStats &&
                filteredStats.map((segment, index) => {
                    const stats = segment.stats;
                    const isFirstSegment = index === 0;
                    const color = segment.color;

                    return (
                        <Box key={`${segment.name}-${index}`}>
                            {!isFirstSegment && <ThickDivider />}
                            <MenuItem className={styles.tracksSelectItem}>
                                <ListItemIcon sx={{ fill: color }} className={styles.segmentIcon}>
                                    <SegmentIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography
                                        variant="inherit"
                                        noWrap
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                flexGrow: 1,
                                                minWidth: 0,
                                            }}
                                        >
                                            {segment.name}
                                        </Box>
                                        <Box component="span" sx={{ flexShrink: 0, marginLeft: '4px' }}>
                                            {segment.allInd > 1 ? `(${segment.trackInd + 1}/${segment.allInd})` : ''}
                                        </Box>
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                            <SimpleDivider />
                            {Statistics(stats)}
                        </Box>
                    );
                })}
        </Box>
    );
}
