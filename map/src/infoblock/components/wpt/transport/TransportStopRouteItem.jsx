import React, { useContext } from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from '../wptDetails.module.css';
import itemsStyles from '../../../../frame/components/items/items.module.css';
import MenuItemWithLines from '../../../../menu/components/MenuItemWithLines';
import AppContext from '../../../../context/AppContext';
import { apiGet } from '../../../../util/HttpApi';

export default function TransportStopRouteItem({ route, icon, color, typeName, wpt }) {
    const ctx = useContext(AppContext);
    const IconComponent = icon;

    const handleRouteClick = async () => {
        if (!wpt || !wpt.latlon || !wpt.id || !route.id) {
            return;
        }

        try {
            const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/get-transport-route`, {
                apiCache: true,
                params: {
                    lat: wpt.latlon.lat,
                    lon: wpt.latlon.lon,
                    stopId: wpt.id,
                    routeId: route.id,
                },
            });

            if (response?.data) {
                ctx.setSelectedTransportRoute({
                    ...response.data,
                    color,
                });
            }
        } catch (error) {
            console.error('Failed to load transport route:', error);
        }
    };

    return (
        <MenuItem id={`se-transport-route-${route.id}`} disableRipple className={styles.stopRouteItem} onClick={handleRouteClick}>
            <ListItemIcon className={itemsStyles.icon} sx={{ alignItems: 'center' }}>
                <IconComponent style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText>
                <Box className={styles.stopRouteInfoRow}>
                    <Box component="span" className={styles.stopRouteShield} sx={{ backgroundColor: color }}>
                        {route.ref}
                    </Box>
                    <Typography className={styles.stopRouteInfo} noWrap>
                        {typeName}
                    </Typography>
                </Box>
                <MenuItemWithLines name={route.name} maxLines={2} className={styles.stopRouteName} />
            </ListItemText>
        </MenuItem>
    );
}
