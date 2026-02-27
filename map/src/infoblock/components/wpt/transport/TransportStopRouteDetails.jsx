import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import AppContext from '../../../../context/AppContext';
import styles from './transport.module.css';
import SecondaryMenuDrawer from '../../../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../../../frame/components/header/HeaderWithUnderline';

function RouteInfo({ route }) {
    const parts = [];
    if (route.typeName) parts.push(route.typeName);
    if (route.stops?.length) parts.push(`${route.stops.length} stops`);

    if (parts.length === 0) {
        return null;
    }

    return (
        <Box className={styles.routeDetailsType}>
            {parts.map((part, i) => (
                <React.Fragment key={i}>
                    {i > 0 && <span>•</span>}
                    <span>{part}</span>
                </React.Fragment>
            ))}
        </Box>
    );
}

export default function TransportStopRouteDetails() {
    const ctx = useContext(AppContext);

    const route = ctx.selectedTransportRoute;

    if (!route) {
        return null;
    }

    const handleClose = () => {
        ctx.setSelectedTransportRoute(null);
    };

    return (
        <SecondaryMenuDrawer onClose={handleClose}>
            <HeaderWithUnderline onClose={handleClose} />
            <Box className={styles.routeDetailsHeader}>
                <Box sx={{ overflow: 'hidden', flexGrow: 1 }}>
                    {route.name && <Typography className={styles.routeDetailsName}>{route.name}</Typography>}
                    <RouteInfo route={route} />
                </Box>
                {route.ref && (
                    <Box component="span" className={styles.routeDetailsShield} sx={{ backgroundColor: route.color }}>
                        {route.ref}
                    </Box>
                )}
            </Box>
            <Box sx={{ overflowY: 'auto', flexGrow: 1 }} />
        </SecondaryMenuDrawer>
    );
}
