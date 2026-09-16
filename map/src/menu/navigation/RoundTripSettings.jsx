import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Slider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import SelectItem from '../../frame/components/items/SelectItem';
import { ROUTE_ROUND_TRIP, PROFILE_PEDESTRIAN } from '../../store/geoRouter/profileConstants';
import RoundTripVariants, { directionLabel } from './RoundTripVariants';

const LENGTH_TYPES = ['distance', 'time'];
const DIRECTIONS = ['any', '0', '45', '90', '135', '180', '225', '270', '315'];
const VARIANTS = ['1', '2', '3', '4', '5'];

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
        <Box>
            <SelectItem
                title={t('web:round_trip_length')}
                value={roundTrip.lengthType}
                options={LENGTH_TYPES}
                getOptionValue={(o) => o}
                getOptionLabel={(o) => (o === 'time' ? t('web:round_trip_by_time') : t('web:round_trip_by_distance'))}
                onSelect={(value) => update({ lengthType: value })}
            />
            <Box sx={{ px: 2 }}>
                <Typography variant="body2">
                    {byTime ? `${length} ${t('shared_string_minute_lowercase')}` : `${length} ${t('km')}`}
                </Typography>
                <Slider
                    id="se-round-trip-length"
                    value={valueToSlider(length, min, max)}
                    min={0}
                    max={SLIDER_STEPS}
                    step={1}
                    onChange={(e, position) => setLength(sliderToValue(position, min, max, round))}
                    onChangeCommitted={(e, position) => {
                        const value = sliderToValue(position, min, max, round);
                        update(byTime ? { time: value } : { distance: value });
                    }}
                />
            </Box>
            <SelectItem
                title={t('web:round_trip_direction')}
                value={roundTrip.direction === null ? 'any' : String(roundTrip.direction)}
                options={DIRECTIONS}
                getOptionValue={(o) => o}
                getOptionLabel={(o) => (o === 'any' ? t('web:round_trip_direction_any') : directionLabel(t, Number(o)))}
                onSelect={(value) => update({ direction: value === 'any' ? null : Number(value) })}
            />
            <SelectItem
                title={t('web:round_trip_variants')}
                value={String(roundTrip.variants)}
                options={VARIANTS}
                getOptionValue={(o) => o}
                getOptionLabel={(o) => o}
                onSelect={(value) => update({ variants: Number(value) })}
            />
            <Box sx={{ px: 2, pb: 2 }}>
                {/* the same settings give the same loops, another seed asks for other directions */}
                <Button id="se-round-trip-another" onClick={() => update({ seed: roundTrip.seed + 1 })}>
                    {t('web:round_trip_another')}
                </Button>
            </Box>
            {/* the loops overlap on the map, so they are picked from a list instead */}
            <RoundTripVariants />
        </Box>
    );
}
