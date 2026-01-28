import React, { useContext } from 'react';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import AppContext from '../../context/AppContext';
import styles from '../trackfavmenu.module.css';
import { ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { useInView } from 'react-intersection-observer';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import { FixedSizeList } from 'react-window';
import { Box } from '@mui/material';

const TravelRoute = ({ route }) => {
    const { ref, inView } = useInView();
    const ctx = useContext(AppContext);

    function openRouteInfo(route) {
        ctx.setSelectedTravelRoute({ route, show: true });
    }

    function countPoints(route) {
        let sum = 0;
        route.forEach((segment) => {
            sum += segment.length;
        });
        return sum;
    }

    return (
        <div ref={ref}>
            {!inView ? (
                <Skeleton variant="rectangular" width="100%" height={'var(--menu-item-size)'} />
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
                            {route.properties.date.slice(0, 10)}
                            {route.properties.geo && ` · ${countPoints(route.properties.geo)}`}
                        </Typography>
                    </ListItemText>
                </MenuItem>
            )}
            <DividerWithMargin margin={'64px'} />
        </div>
    );
};

// Keep in sync with --menu-item-size (68px) from variables.css + 1px divider
const ITEM_HEIGHT = 69;
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
