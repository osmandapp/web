import React, { createContext, forwardRef, useContext, useMemo } from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { FixedSizeList } from 'react-window';
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

// the block above the rows, which scrolls together with them
const ListHeaderContext = createContext({});

const ListInner = forwardRef(({ children, style, ...rest }, ref) => {
    const { header, headerRef, headerHeight } = useContext(ListHeaderContext);

    return (
        <div ref={ref} style={{ ...style, height: style.height + headerHeight }} {...rest}>
            {header && <div ref={headerRef}>{header}</div>}
            {children}
        </div>
    );
});
ListInner.displayName = 'ListInner';

const TravelRoutesResult = React.memo(({ routes, header = null }) => {
    const [containerRef, containerHeight] = useElementHeight();
    const [headerRef, measuredHeaderHeight] = useElementHeight();
    const headerHeight = header ? measuredHeaderHeight : 0;
    const headerValue = useMemo(() => ({ header, headerRef, headerHeight }), [header, headerHeight]);
    const itemCount = routes?.length ?? 0;

    if (itemCount === 0) {
        return null;
    }

    const listHeight = containerHeight || Math.min(itemCount * ITEM_HEIGHT + headerHeight, SECTION_HEIGHT);

    return (
        <Box ref={containerRef} className={travelStyles.resultsListBox}>
            <ListHeaderContext.Provider value={headerValue}>
                <FixedSizeList
                    height={listHeight}
                    itemCount={itemCount}
                    itemSize={ITEM_HEIGHT}
                    width={'100%'}
                    innerElementType={ListInner}
                    // the list counts rows from its top, so rows hidden under the header would go unrendered
                    overscanCount={2 + Math.ceil(headerHeight / ITEM_HEIGHT)}
                    style={{ overflowX: 'hidden' }}
                >
                    {({ index, style }) => (
                        <div style={{ ...style, top: style.top + headerHeight }}>
                            <TravelRoute route={routes[index]} />
                        </div>
                    )}
                </FixedSizeList>
            </ListHeaderContext.Provider>
        </Box>
    );
});
TravelRoutesResult.displayName = 'TravelRoutesResult';
export default TravelRoutesResult;
