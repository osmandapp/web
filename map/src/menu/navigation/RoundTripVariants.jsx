import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import { selectAlternativeRoute } from '../../store/geoRouter/legacy/selectAlternativeRoute';
import { LINE_STRING } from '../../util/Utils';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import RouteSummaryCard from './RouteSummaryCard';
import itemStyles from '../../frame/components/items/items.module.css';
import styles from './routemenu.module.css';

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

/**
 * One summary card per loop, in the place of the single route summary: the picked loop shows its graph
 * and details, the others are compact and a click picks them. Cards are ordered by direction, so a card
 * does not jump when it is picked (picking moves the loop to the front of the route features).
 */
export default function RoundTripVariants({ onDetails }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const navObject = ctx.navigationObject;
    const loops = (navObject.getRoute()?.features ?? [])
        .filter((f) => f.geometry?.type === LINE_STRING && f.properties?.overall && f.properties?.roundTrip)
        .sort((a, b) => (a.properties.roundTrip.heading ?? 0) - (b.properties.roundTrip.heading ?? 0));

    if (loops.length === 0) {
        // an edited loop is a single ordinary route
        return navObject.getRoute() ? (
            <RouteSummaryCard routeProps={navObject.getRouteProps()} onDetails={onDetails} />
        ) : null;
    }

    return (
        <Box>
            {loops.map((f, index) => {
                const props = f.properties;
                const shown = !props.alternative;
                const header = (
                    <Box className={styles.roundTripCardHeader}>
                        <Typography sx={{ fontWeight: 500, color: 'var(--text-primary)' }}>
                            {directionLabel(t, props.roundTrip.heading)}
                        </Typography>
                        <Typography variant="body2" className={itemStyles.addInfo}>
                            {t('web:round_trip_repeated', { value: Math.round(100 * (props.roundTrip.overlap ?? 0)) })}
                        </Typography>
                    </Box>
                );

                return (
                    <React.Fragment key={props.roundTrip.heading}>
                        {index > 0 && <ThickDivider mt={0} mb={0} />}
                        <Box
                            id={`se-round-trip-variant-${index}`}
                            className={`${styles.roundTripCard} ${shown ? styles.roundTripCardShown : ''}`}
                            onClick={() => !shown && selectAlternativeRoute(navObject, props.alternative)}
                        >
                            <RouteSummaryCard
                                routeProps={props}
                                onDetails={onDetails}
                                header={header}
                                compact={!shown}
                            />
                        </Box>
                    </React.Fragment>
                );
            })}
        </Box>
    );
}
