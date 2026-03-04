import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Collapse, Divider, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, Visibility } from '@mui/icons-material';
import { ReactComponent as StopIcon } from '../../../../assets/icons/ic_action_transport_stop_list.svg';
import AppContext from '../../../../context/AppContext';
import { useWindowSize } from '../../../../util/hooks/useWindowSize';
import { useHasVerticalScroll } from '../../../../util/hooks/useHasVerticalScroll';
import { HEADER_SIZE } from '../../../../manager/GlobalManager';
import styles from './transport.module.css';
import gStyles from '../../../../menu/gstylesmenu.module.css';
import SecondaryMenuDrawer from '../../../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../../../frame/components/header/HeaderWithUnderline';
import SelectItemWithoutOptions from '../../../../frame/components/items/SelectItemWithoutOptions';
import DefaultItem from '../../../../frame/components/items/DefaultItem';
import DividerWithMargin from '../../../../frame/components/dividers/DividerWithMargin';
import capitalize from 'lodash-es/capitalize';

function formatTravelTime(seconds) {
    if (seconds == null) return '';
    const total = Math.floor(Number(seconds));
    const m = Math.floor(total / 60);
    const s = total % 60;

    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

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
            <Box className={styles.routeDetailsHeaderContent}>
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

function StopRowIcon({ routeColor, isSelected }) {
    if (isSelected) {
        return (
            <Box className={styles.stopRowIconSelected} style={{ backgroundColor: '#237BFF' }}>
                <Visibility sx={{ fontSize: 16, color: 'white' }} />
            </Box>
        );
    }
    return (
        <Box className={styles.stopRowIconWrapper}>
            <Box className={styles.stopIconCircle} />
            <Box className={styles.stopIconHover} />
            <Box className={styles.stopRowIconInner}>
                <StopIcon style={{ fill: routeColor }} />
            </Box>
        </Box>
    );
}

function CollapseRowWithDots({ routeColor, children }) {
    return (
        <Box className={styles.collapseRowWithDots}>
            <Box className={styles.collapseDotsColumn}>
                {[0, 1, 2].map((i) => (
                    <Box key={i} className={styles.collapseDot} style={{ backgroundColor: routeColor }} />
                ))}
            </Box>
            <Box className={styles.collapseRowContent}>{children}</Box>
        </Box>
    );
}

function LineAndIconWrapper(routeColor, content, { lineNoRadiusTop, lineNoRadiusBottom } = {}) {
    const lineClass = [
        styles.lineAndIconLine,
        lineNoRadiusTop && styles.lineAndIconLineNoRadiusTop,
        lineNoRadiusBottom && styles.lineAndIconLineNoRadiusBottom,
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <Box className={styles.lineAndIconWrapper}>
            <Box className={styles.lineAndIconContent}>
                <Box className={lineClass} style={{ backgroundColor: routeColor }} />
                {content}
            </Box>
        </Box>
    );
}

export default function TransportStopRouteDetails() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const [stopsBeforeOpen, setStopsBeforeOpen] = useState(false);

    const route = ctx.selectedTransportRoute;

    const [scrollContentRef, hasVerticalScroll] = useHasVerticalScroll([route]);
    const [, height] = useWindowSize();

    if (!route) {
        return null;
    }
    const handleClose = () => {
        ctx.setSelectedTransportRoute(null);
    };

    const stops = route.stops ?? [];

    const currentStopIndex = stops.findIndex((s) => s.stopId === route.currentStopId);
    const stopsBeforeCount = currentStopIndex;
    const stopsAfterCurrent = stops.slice(currentStopIndex + 1);

    const routeColor = route.color;
    const stopName = (stop) => stop?.name;

    return (
        <SecondaryMenuDrawer onClose={handleClose}>
            <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
                <HeaderWithUnderline onClose={handleClose} />
                <Box ref={scrollContentRef} className={gStyles.scrollActiveBlock}>
                    <RouteDetailsHeader route={route} minimised={hasVerticalScroll} />
                    <Divider />
                    {route.stops?.length > 0 && (
                        <>
                            <Box className={styles.stopsListHeader}>
                                <Typography className={styles.stopsListHeaderTitle}>
                                    {capitalize(t('transport_stops'))}
                                </Typography>
                                <Typography className={styles.stopsListHeaderTravelTime}>
                                    {t('web:transport_travel_time')}
                                </Typography>
                            </Box>
                            {/* Stops before current (collapsible) */}
                            {stopsBeforeCount > 0 && (
                                <>
                                    <CollapseRowWithDots routeColor={routeColor}>
                                        <SelectItemWithoutOptions
                                            title={`${stopsBeforeCount} stops before`}
                                            boldTitle={false}
                                            onClick={() => setStopsBeforeOpen(!stopsBeforeOpen)}
                                            endIcon={stopsBeforeOpen ? <ExpandLess /> : <ExpandMore />}
                                            showValue={false}
                                        />
                                    </CollapseRowWithDots>
                                    <Collapse in={stopsBeforeOpen} timeout="auto">
                                        {LineAndIconWrapper(
                                            routeColor,
                                            stops.slice(0, currentStopIndex).map((stop, i) => (
                                                <React.Fragment key={`before-${stop.stopId ?? i}`}>
                                                    <Box
                                                        className={styles.stopItemWrapper}
                                                        style={{ '--route-color': routeColor }}
                                                    >
                                                        <DefaultItem
                                                            name={stopName(stop)}
                                                            rightText={formatTravelTime(stop.travelTime)}
                                                            icon={
                                                                <Box className={styles.stopIconCell}>
                                                                    <StopRowIcon
                                                                        routeColor={routeColor}
                                                                        isSelected={false}
                                                                    />
                                                                </Box>
                                                            }
                                                        />
                                                    </Box>
                                                    {i < currentStopIndex - 1 && <DividerWithMargin margin={'50px'} />}
                                                </React.Fragment>
                                            )),
                                            { lineNoRadiusBottom: true }
                                        )}
                                    </Collapse>
                                </>
                            )}
                            {/* Current stop + stops after current */}
                            {stops.length > 0 &&
                                LineAndIconWrapper(
                                    routeColor,
                                    <Box>
                                        {/* Current stop (selected) */}
                                        <Box
                                            className={`${styles.stopItemWrapper} ${styles.stopItemWrapperSelected}`}
                                            style={{ '--route-color': routeColor }}
                                        >
                                            <DefaultItem
                                                name={stopName(stops[currentStopIndex])}
                                                rightText={formatTravelTime(stops[currentStopIndex]?.travelTime)}
                                                icon={
                                                    <Box className={styles.stopIconCell}>
                                                        <StopRowIcon routeColor={routeColor} isSelected />
                                                    </Box>
                                                }
                                            />
                                        </Box>
                                        {stopsAfterCurrent.length > 0 && <DividerWithMargin margin={'50px'} />}
                                        {/* Stops after current */}
                                        {stopsAfterCurrent.map((stop, i) => (
                                            <React.Fragment key={`after-${stop.stopId ?? currentStopIndex + 1 + i}`}>
                                                <Box
                                                    className={styles.stopItemWrapper}
                                                    style={{ '--route-color': routeColor }}
                                                >
                                                    <DefaultItem
                                                        name={stopName(stop)}
                                                        rightText={formatTravelTime(stop.travelTime)}
                                                        icon={
                                                            <Box className={styles.stopIconCell}>
                                                                <StopRowIcon
                                                                    routeColor={routeColor}
                                                                    isSelected={false}
                                                                />
                                                            </Box>
                                                        }
                                                    />
                                                </Box>
                                                {i < stopsAfterCurrent.length - 1 && (
                                                    <DividerWithMargin margin={'50px'} />
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Box>,
                                    { lineNoRadiusTop: stopsBeforeOpen }
                                )}
                        </>
                    )}
                </Box>
            </Box>
        </SecondaryMenuDrawer>
    );
}
