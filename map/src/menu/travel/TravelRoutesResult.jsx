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

    const { updateQueryParam } = useUpdateQueryParam();

    function openRouteInfo(route) {
        ctx.setSelectedTravelRoute({ route, show: true });
        if (route?.properties?.id != null) {
            updateQueryParam(TRAVEL_ROUTE_ID_PARAM, String(route.properties.id));
        }
    }

    function countPoints(route) {
        let sum = 0;
        route.forEach((segment) => {
            sum += segment.length;
        });
        return sum;
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
                            {Number.isFinite(route.properties.distance)
                                ? `${(route.properties.distance / 1000).toFixed(2)} km · `
                                : ''}
                            {route.properties.date?.slice(0, 10)}
                            {route.properties.geo && ` · ${countPoints(route.properties.geo)}`}
                        </Typography>
                        {route.properties.id != null && route.properties.user && (
                            <Typography
                                variant="body2"
                                className={styles.groupInfo}
                                noWrap
                                component="span"
                                sx={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}
                            >
                                {activity && `${activity} · `}
                                <a
                                    href={`https://www.openstreetmap.org/user/${encodeURIComponent(route.properties.user)}/traces/${route.properties.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className={travelStyles.osmIdLink}
                                >
                                    OSM ID
                                </a>
                            </Typography>
                        )}
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
