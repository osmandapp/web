import { Box } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
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
import { format } from 'date-fns';
import * as locales from 'date-fns/locale';
import i18n from 'i18next';
import { MAIN_BLOCK_SIZE } from './TrackAnalyzerMenu';
import { useTranslation } from 'react-i18next';
import TrackSegmentItem from './TrackSegmentItem';

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
            sortedSegments.map((segment) => {
                const stats = {
                    speed: getSpeedStats(segment.stats, t).filter((s) => activeSegmentParams.has(s.label)),
                    altitude: getAltitudeStats(segment.stats, t).filter((s) => activeSegmentParams.has(s.label)),
                    other: getOtherStats(segment.stats, t, formatDate).filter((s) => activeSegmentParams.has(s.label)),
                };

                let lastGroup = null;
                Object.keys(stats).forEach((key) => {
                    if (stats[key].length > 0) {
                        lastGroup = key;
                    }
                });

                return {
                    ...segment,
                    stats: {
                        ...stats,
                        isLastGroup: lastGroup,
                    },
                };
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
