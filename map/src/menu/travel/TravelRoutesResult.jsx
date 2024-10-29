import React, { useContext } from 'react';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import AppContext from '../../context/AppContext';
import styles from '../trackfavmenu.module.css';
import { Divider, ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { useInView } from 'react-intersection-observer';

const TravelRoute = ({ route }) => {
    const { ref, inView } = useInView();
    const ctx = useContext(AppContext);

    return (
        <div ref={ref}>
            {!inView ? (
                <Skeleton variant="rectangular" width="100%" height={'var(--menu-item-size)'} />
            ) : (
                <MenuItem
                    className={styles.item}
                    id={`se-travel-route-${route.properties.id}`}
                    onClick={() => {
                        ctx.setSelectedRoute({ route, show: true });
                    }}
                    onMouseEnter={() => {
                        ctx.setSelectedRoute({ route, hover: true });
                    }}
                    onMouseLeave={() => {
                        ctx.setSelectedRoute({ route, hover: false });
                    }}
                >
                    <ListItemIcon className={styles.icon}>
                        <TrackIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <MenuItemWithLines name={route.properties.description} maxLines={3} />
                        <Typography variant="body2" className={styles.groupInfo} noWrap>
                            {`${(route.properties.distance / 1000).toFixed(2)} km`}
                            {' · '}
                            {route.properties.date.slice(0, 10)}
                            {route.properties.geo && ` · ${route.properties.geo.length}`}
                        </Typography>
                    </ListItemText>
                </MenuItem>
            )}
            <Divider className={styles.dividerItem} />
        </div>
    );
};

const TravelRoutesResult = React.memo(({ routes }) => {
    return (
        <>{routes && routes.map((route, index) => <TravelRoute key={route.properties.id || index} route={route} />)}</>
    );
});
TravelRoutesResult.displayName = 'TravelRoutesResult';
export default TravelRoutesResult;
