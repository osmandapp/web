import React, { useContext } from 'react';
import { Box, MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import { selectAlternativeRoute } from '../../store/geoRouter/legacy/selectAlternativeRoute';
import { LINE_STRING } from '../../util/Utils';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import styles from '../../frame/components/items/items.module.css';

const COMPASS_KEYS = [
    'round_trip_north',
    'round_trip_northeast',
    'round_trip_east',
    'round_trip_southeast',
    'round_trip_south',
    'round_trip_southwest',
    'round_trip_west',
    'round_trip_northwest',
];

/** Loops are told apart by where they go, which reads better than "Route 2" when they share a start */
export function directionKey(heading) {
    const deg = (((heading ?? 0) % 360) + 360) % 360;

    return COMPASS_KEYS[Math.round(deg / 45) % COMPASS_KEYS.length];
}

export function directionLabel(t, heading) {
    return t('web:' + directionKey(heading));
}

export default function RoundTripVariants() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const navObject = ctx.navigationObject;
    const loops = (navObject.getRoute()?.features ?? []).filter(
        (f) => f.geometry?.type === LINE_STRING && f.properties?.overall
    );

    if (loops.length < 2) {
        return null;
    }

    return (
        <Box>
            <ThickDivider mt={0} mb={0} />
            {loops.map((f) => {
                const props = f.properties;
                const roundTrip = props.roundTrip ?? {};
                const shown = !props.alternative;
                const summary =
                    `${(props.overall.distance / 1000).toFixed(1)} ${t('km')} · ` +
                    `${Math.round(props.overall.time / 60)} ${t('shared_string_minute_lowercase')} · ` +
                    t('web:round_trip_repeated', { value: Math.round(100 * (roundTrip.overlap ?? 0)) });

                return (
                    <MenuItem
                        key={props.alternative ?? 0}
                        id={`se-round-trip-variant-${props.alternative ?? 0}`}
                        selected={shown}
                        onClick={() => !shown && selectAlternativeRoute(navObject, props.alternative)}
                    >
                        <Box>
                            <Typography sx={{ color: 'var(--text-primary)' }}>
                                {directionLabel(t, roundTrip.heading)}
                            </Typography>
                            <Typography variant="body2" className={styles.addInfo}>
                                {summary}
                            </Typography>
                        </Box>
                    </MenuItem>
                );
            })}
        </Box>
    );
}
