import React, { useContext, useMemo } from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import VirtualizedList from '../../frame/components/VirtualizedList';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import AppContext, { TRAVEL_ROUTE_ID_PARAM } from '../../context/AppContext';
import TravelContext from '../../context/TravelContext';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { useUpdateQueryParam } from '../../util/hooks/menu/useUpdateQueryParam';
import { useElementHeight } from '../../util/hooks/useElementHeight';
import { activityLabel, getActivityColor } from '../../map/util/activities';
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

const ACTIVITY_IDS_HIDDEN = new Set(['nospeed']);
export function formatActivity(route, t) {
    const activity = route?.properties?.activity;
    if (!activity) return null;
    if (ACTIVITY_IDS_HIDDEN.has(activity)) return null;

    return activityLabel(activity, t);
}

const TravelRoute = ({ route }) => {
    const ctx = useContext(AppContext);
    const ttx = useContext(TravelContext);
    const { t } = useTranslation();

    const { updateQueryParam } = useUpdateQueryParam();

    function openRouteInfo(route) {
        ttx.setSelectedTravelRoute({ route, show: true });
        if (route?.properties?.id != null) {
            updateQueryParam({ key: TRAVEL_ROUTE_ID_PARAM, value: String(route.properties.id), replace: false });
        }
    }

    const activity = formatActivity(route, t);

    return (
        <>
            <MenuItem
                className={styles.item}
                id={`se-travel-route-${route.properties.id}`}
                onClick={() => {
                    openRouteInfo(route);
                }}
                onMouseEnter={() => {
                    ttx.setSelectedTravelRoute({ route, hover: true });
                }}
                onMouseLeave={() => {
                    ttx.setSelectedTravelRoute({ route, hover: false });
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
                        className={`${styles.groupInfo} ${travelStyles.activityLine}`}
                        noWrap
                        component="span"
                    >
                        {activity && (
                            <>
                                <span
                                    className={travelStyles.activityType}
                                    style={{ color: getActivityColor(route.properties.activity) }}
                                >
                                    {activity}
                                </span>
                                {' · '}
                            </>
                        )}
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
            <DividerWithMargin margin={'64px'} />
        </>
    );
};

const ITEM_HEIGHT = 85;
const SECTION_HEIGHT = 750;

const TravelRoutesResult = React.memo(({ routes, header = null }) => {
    const [containerRef, containerHeight] = useElementHeight();

    const rows = useMemo(
        () => [
            ...(header ? [header] : []),
            ...(routes ?? []).map((route) => <TravelRoute key={route.properties.id} route={route} />),
        ],
        [routes, header]
    );

    const itemCount = routes?.length ?? 0;

    if (itemCount === 0) {
        return null;
    }

    return (
        <Box ref={containerRef} className={travelStyles.resultsListBox}>
            <VirtualizedList
                items={rows}
                renderItem={(row) => row}
                height={containerHeight || SECTION_HEIGHT}
                estimatedItemHeight={ITEM_HEIGHT}
            />
        </Box>
    );
});
TravelRoutesResult.displayName = 'TravelRoutesResult';
export default TravelRoutesResult;
