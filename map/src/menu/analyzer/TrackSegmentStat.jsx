import { Box } from '@mui/material';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ReactComponent as MaxSpeedIcon } from '../../assets/icons/ic_action_max_speed_16.svg';
import { ReactComponent as AvgSpeedIcon } from '../../assets/icons/ic_action_speed_16.svg';
import { ReactComponent as MinSpeedIcon } from '../../assets/icons/ic_action_min_speed_16.svg';
import { ReactComponent as MaxAltitudeIcon } from '../../assets/icons/ic_action_altitude_max_16.svg';
import { ReactComponent as AvgAltitudeIcon } from '../../assets/icons/ic_action_altitude_average_16.svg';
import { ReactComponent as MinAltitudeIcon } from '../../assets/icons/ic_action_altitude_min_16.svg';
import { ReactComponent as UphillIcon } from '../../assets/icons/ic_action_altitude_ascent_16.svg';
import { ReactComponent as DownhillIcon } from '../../assets/icons/ic_action_altitude_descent_16.svg';
import { ReactComponent as DateIcon } from '../../assets/icons/ic_action_calendar_16.svg';
import { ReactComponent as TimeSpanIcon } from '../../assets/icons/ic_action_time_span_16.svg';
import { ReactComponent as StartTimeIcon } from '../../assets/icons/ic_action_time_start_16.svg';
import { ReactComponent as EndTimeIcon } from '../../assets/icons/ic_action_time_end_16.svg';
import { ReactComponent as TimeDurationIcon } from '../../assets/icons/ic_action_time_span_16.svg';
import { ReactComponent as TimeMovingIcon } from '../../assets/icons/ic_action_time_span_16.svg';
import { ReactComponent as DistanceIcon } from '../../assets/icons/ic_action_length_16.svg';
import { format } from 'date-fns';
import i18n from 'i18next';
import { MAIN_BLOCK_SIZE } from './TrackAnalyzerMenu';
import { useTranslation } from 'react-i18next';
import TrackSegmentItem from './TrackSegmentItem';
import {
    convertMeters,
    convertSpeedMS,
    getLargeLengthUnit,
    getSmallLengthUnit,
    getSpeedUnit,
    LARGE_UNIT,
} from '../settings/units/UnitsConverter';
import AppContext from '../../context/AppContext';

export const getSpeedStats = (stats, t, ctx) => [
    {
        icon: <MaxSpeedIcon />,
        label: t('shared_string_max_speed'),
        rawValue: stats.maxSpeed,
        ...formatValue(convertSpeedMS(stats.maxSpeed, ctx.unitsSettings.speed), t(getSpeedUnit(ctx))),
    },
    {
        icon: <AvgSpeedIcon />,
        label: t('web:avg_speed'),
        rawValue: stats.avgSpeed,
        ...formatValue(convertSpeedMS(stats.avgSpeed, ctx.unitsSettings.speed), t(getSpeedUnit(ctx))),
    },
    {
        icon: <MinSpeedIcon />,
        label: t('shared_string_min_speed'),
        rawValue: stats.minSpeed,
        ...formatValue(convertSpeedMS(stats.minSpeed, ctx.unitsSettings.speed), t(getSpeedUnit(ctx))),
    },
];

export const getAltitudeStats = (stats, t, ctx) => [
    {
        icon: <MaxAltitudeIcon />,
        label: t('web:max_altitude'),
        rawValue: stats.maxElevation,
        ...formatValue(convertMeters(stats.maxElevation, ctx.unitsSettings.len), t(getSmallLengthUnit(ctx))),
    },
    {
        icon: <AvgAltitudeIcon />,
        label: t('web:avg_altitude'),
        rawValue: stats.avgElevation,
        ...formatValue(convertMeters(stats.avgElevation, ctx.unitsSettings.len), t(getSmallLengthUnit(ctx))),
    },
    {
        icon: <MinAltitudeIcon />,
        label: t('web:min_altitude'),
        rawValue: stats.minElevation,
        ...formatValue(convertMeters(stats.minElevation, ctx.unitsSettings.len), t(getSmallLengthUnit(ctx))),
    },
    {
        icon: <UphillIcon />,
        label: t('shared_string_uphill'),
        rawValue: stats.diffElevationUp,
        ...formatValue(convertMeters(stats.diffElevationUp, ctx.unitsSettings.len), t(getSmallLengthUnit(ctx))),
    },
    {
        icon: <DownhillIcon />,
        label: t('shared_string_downhill'),
        rawValue: stats.diffElevationDown,
        ...formatValue(convertMeters(stats.diffElevationDown, ctx.unitsSettings.len), t(getSmallLengthUnit(ctx))),
    },
];

export const getOtherStats = (stats, t, formatDate, ctx) => [
    { icon: <DateIcon />, label: t('shared_string_date'), rawValue: stats.date, value: formatDate(stats.date) },
    {
        icon: <TimeSpanIcon />,
        label: t('shared_string_time_span'),
        rawValue: stats.timeSpan,
        ...formatTime(stats.timeSpan, t),
    },
    {
        icon: <StartTimeIcon />,
        label: t('shared_string_start_time'),
        rawValue: stats.startTime,
        ...formatTimestamp(stats.startTime),
    },
    {
        icon: <EndTimeIcon />,
        label: t('shared_string_end_time'),
        rawValue: stats.endTime,
        ...formatTimestamp(stats.endTime),
    },
    { icon: <TimeDurationIcon />, label: t('duration'), rawValue: stats.duration, ...formatTime(stats.duration, t) },
    {
        icon: <TimeMovingIcon />,
        label: t('moving_time'),
        rawValue: stats.timeMoving,
        ...formatTime(stats.timeMoving, t),
    },
    {
        icon: <DistanceIcon />,
        label: t('shared_string_length'),
        rawValue: stats.totalDist,
        ...formatValue(convertMeters(stats.totalDist, ctx.unitsSettings.len, LARGE_UNIT), t(getLargeLengthUnit(ctx))),
    },
];

export const UNDEFINED_VALUE = 'NaN';

const formatValue = (value, unit = '', factor = 1) => {
    if (value === UNDEFINED_VALUE) return { value: UNDEFINED_VALUE, unit: '' };
    const formattedValue = Number(value) / factor;
    return { value: formattedValue % 1 === 0 ? formattedValue.toFixed(0) : formattedValue.toFixed(1), unit };
};

const isTimestampInMilliseconds = (timestamp) => {
    return timestamp >= 10 ** 12 && timestamp < 10 ** 15;
};

const formatTimestamp = (value) => {
    if (value === UNDEFINED_VALUE) return { value: UNDEFINED_VALUE, unit: '' };
    const timestamp = Number(value);
    if (isTimestampInMilliseconds(timestamp)) {
        const date = new Date(timestamp);
        return { value: date.toLocaleTimeString('en-GB', { hour12: false }), unit: '' };
    }
    return timestamp;
};

const formatTime = (value, t) => {
    if (value === UNDEFINED_VALUE) return { value: UNDEFINED_VALUE, unit: '' };

    const totalSeconds = Math.round(Number(value) / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = [
        String(hours).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(seconds).padStart(2, '0'),
    ].join(':');

    return {
        value: formattedTime,
        unit: hours > 0 ? ` ${t('web:hours')}` : ` ${t('web:short_min')}`,
    };
};

export default function TrackSegmentStat({ height, sortedSegments, activeSegmentParams }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const [filteredStats, setFilteredStats] = useState([]);

    const formatDate = (timestamp) => {
        const date = new Date(parseInt(timestamp, 10));
        if (isNaN(date)) {
            return UNDEFINED_VALUE;
        }
        return format(date, 'dd.MM.yyyy', { locale: ctx.dateLocale });
    };

    useEffect(() => {
        if (!sortedSegments) return;

        const statsMap = {
            speed: new Map(),
            altitude: new Map(),
            other: new Map(),
        };

        // 1. Collect statistics, filtering only active parameters
        const segmentStats = sortedSegments.map((segment) => {
            const stats = {
                speed: getSpeedStats(segment.stats, t, ctx).filter((s) => activeSegmentParams.has(s.label)),
                altitude: getAltitudeStats(segment.stats, t, ctx).filter((s) => activeSegmentParams.has(s.label)),
                other: getOtherStats(segment.stats, t, formatDate, ctx).filter((s) => activeSegmentParams.has(s.label)),
            };

            // Store only parameter values in statsMap
            Object.keys(stats).forEach((category) => {
                stats[category].forEach((stat) => {
                    const value = Number(stat.rawValue);
                    if (!statsMap[category].has(stat.label)) {
                        statsMap[category].set(stat.label, { values: [], stats: [] });
                    }
                    statsMap[category].get(stat.label).values.push(value);
                    statsMap[category].get(stat.label).stats.push(stat); // Keep a direct reference to update later
                });
            });

            return { ...segment, stats };
        });
        // 2. Determine min/max values while handling NaN properly
        Object.keys(statsMap).forEach((category) => {
            statsMap[category].forEach(({ values, stats }) => {
                const numericValues = values.filter((v) => !isNaN(v));

                if (numericValues.length === 0) {
                    // If all values are NaN, no one gets isMin or isMax
                    stats.forEach((stat) => {
                        stat.isMax = false;
                        stat.isMin = false;
                    });
                    return;
                }

                const min = Math.min(...numericValues);
                const max = Math.max(...numericValues);

                stats.forEach((stat) => {
                    const value = Number(stat.rawValue);
                    if (isNaN(value)) {
                        stat.isMax = false;
                        stat.isMin = false;
                    } else {
                        stat.isMax = value === max;
                        stat.isMin = value === min;
                    }
                });
            });
        });

        // 3. Set isLastGroup and update state
        setFilteredStats(
            segmentStats.map((segment) => {
                const lastGroup = Object.keys(segment.stats).findLast((key) => segment.stats[key].length > 0);
                return { ...segment, stats: { ...segment.stats, isLastGroup: lastGroup } };
            })
        );
    }, [sortedSegments, activeSegmentParams]);

    return useMemo(
        () => (
            <Box sx={{ maxHeight: `${height - MAIN_BLOCK_SIZE}px`, overflowY: 'auto' }}>
                {filteredStats?.map((segment, index) => (
                    <Box key={index}>
                        <TrackSegmentItem
                            segment={segment}
                            index={index}
                            filteredStats={filteredStats}
                            setFilteredStats={setFilteredStats}
                        />
                    </Box>
                ))}
            </Box>
        ),
        [filteredStats, height]
    );
}
