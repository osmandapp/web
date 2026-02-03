import React, { useContext } from 'react';
import capitalize from 'lodash-es/capitalize';
import { Box, ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { FixedSizeList } from 'react-window';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import AppContext, { TRAVEL_ROUTE_ID_PARAM } from '../../context/AppContext';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { useUpdateQueryParam } from '../../util/hooks/menu/useUpdateQueryParam';
import styles from '../trackfavmenu.module.css';
import travelStyles from './travel.module.css';
import {
    convertMeters,
    convertSpeedMS,
    getLargeLengthUnit,
    getSpeedUnit,
    LARGE_UNIT,
} from '../settings/units/UnitsConverter';
import { useTranslation } from 'react-i18next';

const ACTIVITY_IDS_HIDDEN = ['nospeed'];

function formatActivity(route) {
    const activity = route?.properties?.activity;
    if (!activity) return null;
    if (ACTIVITY_IDS_HIDDEN.includes(activity)) return null;

    return capitalize(activity.replace(/_/g, ' '));
}

const TravelRoute = ({ route }) => {
    const { ref, inView } = useInView();
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const { updateQueryParam } = useUpdateQueryParam();

    function openRouteInfo(route) {
        ctx.setSelectedTravelRoute({ route, show: true });
        if (route?.properties?.id != null) {
            updateQueryParam({ key: TRAVEL_ROUTE_ID_PARAM, value: String(route.properties.id) });
        }
    }

    const activity = formatActivity(route);

    return (
        <div ref={ref}>
            {!inView ? (
                <Skeleton variant="rectangular" width="100%" height={ITEM_HEIGHT - 1} />
            ) : (
                <MenuItem
                    className={styles.item}
                    id={`se-travel-route-${route.properties.id}`}
                    onClick={() => {
                        openRouteInfo(route);
                    }}
                    onMouseEnter={() => {
                        ctx.setSelectedTravelRoute({ route, hover: true });
                    }}
                    onMouseLeave={() => {
                        ctx.setSelectedTravelRoute({ route, hover: false });
                    }}
                >
                    <ListItemIcon className={styles.icon}>
                        <TrackIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <MenuItemWithLines name={route.properties.description} maxLines={1} />
                        <Typography variant="body2" className={styles.groupInfo} noWrap>
                            {Number.isFinite(route.properties.dist)
                                ? `${convertMeters(route.properties.dist, ctx.unitsSettings.len, LARGE_UNIT).toFixed(2)} ${t(getLargeLengthUnit(ctx))} · `
                                : ''}
                            {Number.isFinite(route.properties.speed)
                                ? `${convertSpeedMS(route.properties.speed / 3.6, ctx.unitsSettings.speed).toFixed(0)} ${t(getSpeedUnit(ctx))} · `
                                : ''}
                            {Number.isFinite(route.properties.points) ? `${route.properties.points}` : ''}
                        </Typography>
                        <Typography
                            variant="body2"
                            className={styles.groupInfo}
                            noWrap
                            component="span"
                            sx={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            {activity && `${activity} · `}
                            {route.properties.date?.slice(0, 10)}
                            {route.properties.id != null && route.properties.user && (
                                <>
                                    {' · '}
                                    <a
                                        href={`https://www.openstreetmap.org/user/${encodeURIComponent(route.properties.user)}/traces/${route.properties.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className={travelStyles.osmIdLink}
                                    >
                                        OSM ID
                                    </a>
                                </>
                            )}
                        </Typography>
                    </ListItemText>
                </MenuItem>
            )}
            <DividerWithMargin margin={'64px'} />
        </div>
    );
};

// Keep in sync with menu item (3 lines)
const ITEM_HEIGHT = 85;
const SECTION_HEIGHT = 750;

const TravelRoutesResult = React.memo(({ routes }) => {
    if (!routes || routes.length === 0) {
        return null;
    }

    const itemCount = routes.length;

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <FixedSizeList
                height={Math.min(itemCount * ITEM_HEIGHT, SECTION_HEIGHT)}
                itemCount={itemCount}
                itemSize={ITEM_HEIGHT}
                width={'100%'}
            >
                {({ index, style }) => (
                    <div style={style}>
                        <TravelRoute route={routes[index]} />
                    </div>
                )}
            </FixedSizeList>
        </Box>
    );
});
TravelRoutesResult.displayName = 'TravelRoutesResult';
export default TravelRoutesResult;
