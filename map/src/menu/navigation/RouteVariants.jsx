import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import { getRouteVariants, selectAlternativeRoute } from '../../store/geoRouter/legacy/selectAlternativeRoute';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import RouteSummaryCard from './RouteSummaryCard';
import itemStyles from '../../frame/components/items/items.module.css';
import styles from './routemenu.module.css';

/**
 * One summary card per route when the router returned alternatives: the shown route has its graph and
 * details, the others are compact and a click shows them (the same as a click on the map).
 * Cards keep the router's order (by routing cost), so a card does not jump when it is picked -
 * picking only moves the route to the front of the features and swaps the "alternative" numbers.
 */
export default function RouteVariants({ routeProps, onDetails }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const navObject = ctx.navigationObject;
    const routes = getRouteVariants(navObject.getRoute());

    if (routes.length < 2) {
        return <RouteSummaryCard routeProps={routeProps} onDetails={onDetails} />;
    }

    const minOf = (key) => Math.min(...routes.map((f) => f.properties.overall[key] ?? Infinity));
    const fastest = minOf('time');
    const shortest = minOf('distance');

    return (
        <Box>
            {routes.map((f, index) => {
                const props = f.properties;
                const shown = !props.alternative;
                const badges = [];
                if (props.overall.time === fastest) badges.push(t('web:alt_route_fastest'));
                if (props.overall.distance === shortest) badges.push(t('web:alt_route_shortest'));
                const header = (
                    <Box className={styles.routeVariantHeader}>
                        <Typography sx={{ fontWeight: 500, color: 'var(--text-primary)' }}>
                            {t('web:alt_route_label', { n: index + 1 })}
                        </Typography>
                        <Typography variant="body2" className={itemStyles.addInfo}>
                            {badges.join(' · ')}
                        </Typography>
                    </Box>
                );

                return (
                    <React.Fragment key={index}>
                        {index > 0 && <ThickDivider mt={0} mb={0} />}
                        <Box
                            id={`se-route-variant-${index}`}
                            className={`${styles.routeVariant} ${shown ? styles.routeVariantShown : ''}`}
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
