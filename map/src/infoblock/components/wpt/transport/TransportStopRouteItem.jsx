import React from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from '../wptDetails.module.css';
import itemsStyles from '../../../../frame/components/items/items.module.css';
import MenuItemWithLines from '../../../../menu/components/MenuItemWithLines';

export default function TransportStopRouteItem({ route, icon, color, typeName }) {
    const IconComponent = icon;
    return (
        <MenuItem id={`route-${route.id}`} disableRipple className={styles.stopRouteItem}>
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
