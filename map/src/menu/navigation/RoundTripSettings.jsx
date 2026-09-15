import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Slider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import SelectItem from '../../frame/components/items/SelectItem';
import { ROUTE_ROUND_TRIP } from '../../store/geoRouter/profileConstants';

const LENGTH_TYPES = ['distance', 'time'];
const DIRECTIONS = ['any', '0', '45', '90', '135', '180', '225', '270', '315'];
const VARIANTS = ['1', '2', '3', '4', '5'];

const MIN_DISTANCE = 2;
const MAX_DISTANCE = 200;
const MIN_TIME = 15;
const MAX_TIME = 600;
const TIME_STEP = 5;

export default function RoundTripSettings() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const navObject = ctx.navigationObject;
    const roundTrip = navObject.getOption(ROUTE_ROUND_TRIP);
    const byTime = roundTrip.lengthType === 'time';

    const [length, setLength] = useState(byTime ? roundTrip.time : roundTrip.distance);

    useEffect(() => {
        setLength(byTime ? roundTrip.time : roundTrip.distance);
    }, [byTime]);

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
                    value={length}
                    min={byTime ? MIN_TIME : MIN_DISTANCE}
                    max={byTime ? MAX_TIME : MAX_DISTANCE}
                    step={byTime ? TIME_STEP : 1}
                    onChange={(e, value) => setLength(value)}
                    onChangeCommitted={(e, value) => update(byTime ? { time: value } : { distance: value })}
                />
            </Box>
            <SelectItem
                title={t('web:round_trip_direction')}
                value={roundTrip.direction === null ? 'any' : String(roundTrip.direction)}
                options={DIRECTIONS}
                getOptionValue={(o) => o}
                getOptionLabel={(o) => (o === 'any' ? t('web:round_trip_direction_any') : `${o}°`)}
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
        </Box>
    );
}
