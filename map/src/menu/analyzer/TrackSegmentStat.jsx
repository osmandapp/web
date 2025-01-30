import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from './trackanalyzer.module.css';
import React from 'react';
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

export default function TrackSegmentStat({ height, sortedSegments }) {
    const { t } = useTranslation();

    const formatDate = (timestamp) => {
        const locale = locales[i18n.language] || locales.enUS;
        const date = new Date(parseInt(timestamp, 10));
        if (isNaN(date)) {
            return timestamp;
        }
        return format(date, 'dd.MM.yyyy', { locale });
    };

    const Statistics = (stats) => {
        if (!stats) return null;

        const speedStats = [
            {
                icon: <MaxSpeedIcon />,
                label: t('shared_string_max_speed'),
                value: stats.maxSpeed.toFixed(1),
                unit: t('km_h'),
            },
            { icon: <AvgSpeedIcon />, label: t('web:avg_speed'), value: stats.avgSpeed.toFixed(1), unit: t('km_h') },
            { icon: <MinSpeedIcon />, label: t('shared_string_min_speed'), value: stats.minSpeed, unit: t('km_h') },
        ];

        const altitudeStats = [
            { icon: <MaxAltitudeIcon />, label: t('web:max_altitude'), value: stats.maxElevation, unit: t('m') },
            {
                icon: <AvgAltitudeIcon />,
                label: t('web:avg_altitude'),
                value: stats.avgElevation.toFixed(1),
                unit: t('m'),
            },
            { icon: <MinAltitudeIcon />, label: t('web:min_altitude'), value: stats.minElevation, unit: t('m') },
            {
                icon: <UphillIcon />,
                label: t('shared_string_uphill'),
                value: stats.diffElevationUp.toFixed(1),
                unit: t('m'),
            },
            {
                icon: <DownhillIcon />,
                label: t('shared_string_downhill'),
                value: stats.diffElevationDown.toFixed(1),
                unit: t('m'),
            },
        ];

        const otherStats = [
            { icon: <DateIcon />, label: t('shared_string_date'), value: formatDate(stats.date) },
            {
                icon: <TimeDurationIcon />,
                label: t('duration'),
                value: (stats.duration / 3600000).toFixed(2),
                unit: t('web:h'),
            },
            {
                icon: <TimeMovingIcon />,
                label: t('web:moving_time'),
                value: (stats.timeMoving / 3600000).toFixed(2),
                unit: t('web:h'),
            },
            {
                icon: <DistanceIcon />,
                label: t('web:length'),
                value: (stats.totalDist / 1000).toFixed(2),
                unit: t('km'),
            },
        ];

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
                {StatItems(speedStats, false)}
                {StatItems(altitudeStats, false)}
                {StatItems(otherStats, true)}
            </Box>
        );
    };

    return (
        <Box sx={{ maxHeight: `${height - MAIN_BLOCK_SIZE}px`, overflowY: 'auto' }}>
            {sortedSegments &&
                sortedSegments.map((segment, index) => {
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
