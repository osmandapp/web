import React, { useContext } from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from './transport.module.css';
import itemsStyles from '../../../../frame/components/items/items.module.css';
import MenuItemWithLines from '../../../../menu/components/MenuItemWithLines';
import AppContext from '../../../../context/AppContext';
import { apiGet } from '../../../../util/HttpApi';

async function fetchRouteData({ wpt, route, color, typeName }) {
    const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/get-transport-route`, {
        apiCache: true,
        params: {
            lat: route.stop?.lat ?? wpt.latlon.lat,
            lon: route.stop?.lon ?? wpt.latlon.lon,
            stopId: route.stop?.id ?? wpt.id,
            routeId: route.id,
        },
    });
    if (!response?.data) return null;
    return {
        ...response.data,
        color,
        ref: route.ref,
        name: route.name,
        type: route.type,
        typeName,
    };
}

export default function TransportStopRouteItem({ route, icon, color, typeName, wpt }) {
    const ctx = useContext(AppContext);
    const IconComponent = icon;

    const handleRouteMouseEnter = async () => {
        if (!route.id) return;
        if (ctx.selectedTransportRoute && !ctx.selectedTransportRoute.isPreview) return;
        try {
            const data = await fetchRouteData({ wpt, route, color, typeName });
            if (data) {
                ctx.setSelectedTransportRoute({ ...data, currentStopId: route.stop?.id ?? wpt?.id, isPreview: true });
            }
        } catch (error) {
            console.error('Failed to load transport route on hover:', error);
        }
    };

    const handleRouteMouseLeave = () => {
        if (ctx.selectedTransportRoute?.isPreview) ctx.setSelectedTransportRoute(null);
    };

    const handleRouteClick = async () => {
        if (!route.id) return;
        const currentStopId = route.stop?.id ?? wpt.id;
        try {
            if (ctx.selectedTransportRoute?.id === route.id && ctx.selectedTransportRoute?.isPreview) {
                ctx.setSelectedTransportRoute({
                    ...ctx.selectedTransportRoute,
                    currentStopId,
                    isPreview: false,
                });
                return;
            }
            const data = await fetchRouteData({ wpt, route, color, typeName });
            if (data) {
                ctx.setSelectedTransportRoute({ ...data, currentStopId, isPreview: false });
            }
        } catch (error) {
            console.error('Failed to load transport route:', error);
        }
    };

    return (
        <MenuItem
            id={`se-transport-route-${route.id}`}
            disableRipple
            className={`${styles.stopRouteItem} ${ctx.selectedTransportRoute?.id === route.id ? styles.selected : ''}`}
            onClick={handleRouteClick}
            onMouseEnter={handleRouteMouseEnter}
            onMouseLeave={handleRouteMouseLeave}
        >
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
