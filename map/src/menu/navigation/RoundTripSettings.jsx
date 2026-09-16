import React, { useContext, useEffect, useState } from 'react';
import { Box, Slider, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import SquareTextBtn from '../../frame/components/btns/SquareTextBtn';
import { ROUTE_ROUND_TRIP, PROFILE_PEDESTRIAN } from '../../store/geoRouter/profileConstants';
import { directionLabel } from './RoundTripVariants';
import styles from './routemenu.module.css';

// the server fans candidate loops around the asked direction (up to 90 degrees each way),
// so four compass points are enough and fit one row
const DIRECTIONS = [0, 90, 180, 270];
const DIRECTION_SHORT_KEYS = { 0: 'round_trip_n', 90: 'round_trip_e', 180: 'round_trip_s', 270: 'round_trip_w' };

const MIN_DISTANCE = 2;
const MAX_DISTANCE = 200;
const MAX_WALKING_DISTANCE = 40;
const MIN_TIME = 15;
const MAX_TIME = 600;
const TIME_ROUND = 5;
const SLIDER_STEPS = 100;

// A linear slider spends most of its travel on lengths nobody asks for: half of it would be above
// 100 km. The position is squared, so short loops get half the slider and long ones stay reachable.
function sliderToValue(position, min, max, round) {
    const share = position / SLIDER_STEPS;

    return Math.round((min + (max - min) * share * share) / round) * round;
}

function valueToSlider(value, min, max) {
    const share = Math.sqrt(Math.max(0, (value - min) / (max - min)));

    return Math.round(share * SLIDER_STEPS);
}

export default function RoundTripSettings() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const navObject = ctx.navigationObject;
    const roundTrip = navObject.getOption(ROUTE_ROUND_TRIP);
    const byTime = roundTrip.lengthType === 'time';

    // nobody walks a 200 km loop, and the slider is easier to use when its range fits the profile
    const profile = navObject.getProfile()?.profile;
    const min = byTime ? MIN_TIME : MIN_DISTANCE;
    const max = byTime ? MAX_TIME : profile === PROFILE_PEDESTRIAN ? MAX_WALKING_DISTANCE : MAX_DISTANCE;
    const round = byTime ? TIME_ROUND : 1;

    const [length, setLength] = useState(byTime ? roundTrip.time : roundTrip.distance);

    useEffect(() => {
        setLength(byTime ? roundTrip.time : roundTrip.distance);
    }, [byTime]);

    useEffect(() => {
        if (!byTime && roundTrip.distance > max) {
            update({ distance: max });
        }
    }, [max]);

    const update = (patch) => navObject.setOption(ROUTE_ROUND_TRIP, { ...roundTrip, ...patch });

    return (
        <Box className={styles.roundTripSettings}>
            <Box className={styles.roundTripRow}>
                <Box className={styles.roundTripPills}>
                    <SquareTextBtn
                        id="se-round-trip-by-distance"
                        text={t('web:round_trip_by_distance')}
                        selected={!byTime}
                        onClick={() => update({ lengthType: 'distance' })}
                    />
                    <SquareTextBtn
                        id="se-round-trip-by-time"
                        text={t('web:round_trip_by_time')}
                        selected={byTime}
                        onClick={() => update({ lengthType: 'time' })}
                    />
                </Box>
                <Typography className={styles.roundTripValue}>
                    {byTime ? `${length} ${t('shared_string_minute_lowercase')}` : `${length} ${t('km')}`}
                </Typography>
            </Box>
            <Slider
                id="se-round-trip-length"
                size="small"
                value={valueToSlider(length, min, max)}
                min={0}
                max={SLIDER_STEPS}
                step={1}
                valueLabelDisplay="off"
                sx={{ color: '#237BFF' }}
                onChange={(e, position) => setLength(sliderToValue(position, min, max, round))}
                onChangeCommitted={(e, position) => {
                    const value = sliderToValue(position, min, max, round);
                    update(byTime ? { time: value } : { distance: value });
                }}
            />
            <Box className={styles.roundTripRow}>
                <Typography className={styles.roundTripLabel}>{t('web:round_trip_direction')}</Typography>
                <Box className={styles.roundTripPills}>
                    {DIRECTIONS.map((deg) => (
                        <Tooltip key={deg} title={directionLabel(t, deg)} arrow>
                            <span>
                                <SquareTextBtn
                                    id={`se-round-trip-direction-${deg}`}
                                    text={t('web:' + DIRECTION_SHORT_KEYS[deg])}
                                    selected={roundTrip.direction === deg}
                                    // no "Any" pill (it did not fit): clicking the picked direction again clears it
                                    onClick={() => update({ direction: roundTrip.direction === deg ? null : deg })}
                                />
                            </span>
                        </Tooltip>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
