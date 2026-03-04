import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import AppContext from '../../../../context/AppContext';
import { useWindowSize } from '../../../../util/hooks/useWindowSize';
import { useHasVerticalScroll } from '../../../../util/hooks/useHasVerticalScroll';
import { HEADER_SIZE } from '../../../../manager/GlobalManager';
import styles from './transport.module.css';
import gStyles from '../../../../menu/gstylesmenu.module.css';
import SecondaryMenuDrawer from '../../../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../../../frame/components/header/HeaderWithUnderline';

function RouteInfo({ route }) {
    const { t } = useTranslation();
    const parts = [];
    if (route.intervalSeconds != null) {
        const minutes = Math.round(route.intervalSeconds / 60);
        parts.push(`${t('shared_string_interval')} ${minutes} ${t('shared_string_minute_lowercase')}`);
    }
    if (route.typeName) parts.push(route.typeName);
    if (route.stops?.length) parts.push(`${route.stops.length} stops`);

    if (parts.length === 0) {
        return null;
    }

    return (
        <Box className={styles.routeDetailsType}>
            {parts.map((part, i) => (
                <React.Fragment key={part}>
                    {i > 0 && <span>•</span>}
                    <span>{part}</span>
                </React.Fragment>
            ))}
        </Box>
    );
}

function RouteDetailsHeader({ route, minimised }) {
    return (
        <Box className={minimised ? styles.routeDetailsHeader : styles.routeDetailsHeaderDefault}>
            <Box sx={{ overflow: 'hidden', flexGrow: 1 }}>
                {route.name && (
                    <Typography
                        className={minimised ? styles.routeDetailsName : styles.routeDetailsNameDefault}
                        sx={minimised ? undefined : { whiteSpace: 'normal' }}
                    >
                        {route.name}
                    </Typography>
                )}
                <RouteInfo route={route} />
            </Box>
            {route.ref && (
                <Box
                    component="span"
                    className={minimised ? styles.routeDetailsShield : styles.routeDetailsShieldDefault}
                    sx={{ backgroundColor: route.color }}
                >
                    {route.ref}
                </Box>
            )}
        </Box>
    );
}

export default function TransportStopRouteDetails() {
    const ctx = useContext(AppContext);

    const route = ctx.selectedTransportRoute;

    const [scrollContentRef, hasVerticalScroll] = useHasVerticalScroll([route]);
    const [, height] = useWindowSize();

    if (!route) {
        return null;
    }
    const handleClose = () => {
        ctx.setSelectedTransportRoute(null);
    };

    return (
        <SecondaryMenuDrawer onClose={handleClose}>
            <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
                <HeaderWithUnderline onClose={handleClose} />
                <Box ref={scrollContentRef} className={gStyles.scrollActiveBlock}>
                    <RouteDetailsHeader route={route} minimised={hasVerticalScroll} />
                </Box>
            </Box>
        </SecondaryMenuDrawer>
    );
}
