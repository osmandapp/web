import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Collapse, Divider, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, Visibility } from '@mui/icons-material';
import { ReactComponent as StopIcon } from '../../../../assets/icons/ic_action_transport_stop_list.svg';
import TransportStopActionIcon from './TransportStopActionIcon';
import TransportStopRouteNavButtons from './TransportStopRouteNavButtons';
import AppContext from '../../../../context/AppContext';
import { useWindowSize } from '../../../../util/hooks/useWindowSize';
import { useHasVerticalScroll } from '../../../../util/hooks/useHasVerticalScroll';
import { HEADER_SIZE } from '../../../../manager/GlobalManager';
import { TRANSPORT_STOPS_LAYER_ID } from '../../../../map/layers/TransportStopsLayer';
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
    if (route.stops?.length) parts.push(`${route.stops.length} ${t('transport_stops')}`);

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

function LineAndIconWrapper({ routeColor, lineNoRadiusTop, lineNoRadiusBottom, children }) {
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
                {children}
            </Box>
        </Box>
    );
}

function StopItem({ stop, routeColor, isSelected = false, showTravelTime = true }) {
    const ctx = useContext(AppContext);

    const stopId = stop?.stopId;

    const isHoveredFromMap =
        ctx.selectedWptId?.type === TRANSPORT_STOPS_LAYER_ID &&
        ctx.selectedWptId?.id === stopId &&
        ctx.selectedWptId?.show &&
        !ctx.selectedWptId?.hideListHighlight;

    return (
        <Box
            className={`${styles.stopItemWrapper} ${isSelected ? styles.stopItemWrapperSelected : ''} ${isHoveredFromMap ? styles.stopItemWrapperHovered : ''}`}
            style={{ '--route-color': routeColor }}
            onMouseEnter={() =>
                stopId != null &&
                ctx.setSelectedWptId({ id: stopId, show: true, type: TRANSPORT_STOPS_LAYER_ID, obj: stop })
            }
            onMouseLeave={() =>
                ctx.setSelectedWptId((prev) => {
                    if (prev?.type !== TRANSPORT_STOPS_LAYER_ID || prev?.id !== stopId) return prev;
                    if (prev.fromClick) return prev;
                    return { ...prev, show: false };
                })
            }
            onClick={() =>
                stopId != null &&
                ctx.setSelectedWptId({
                    id: stopId,
                    show: true,
                    type: TRANSPORT_STOPS_LAYER_ID,
                    obj: stop,
                    fromClick: true,
                })
            }
        >
            <DefaultItem
                name={stop?.name}
                rightText={showTravelTime && stop?.travelTime != null ? formatTravelTime(stop.travelTime) : undefined}
                icon={
                    <Box className={styles.stopIconCell}>
                        <StopRowIcon routeColor={routeColor} isSelected={isSelected} />
                        {!isSelected && <TransportStopActionIcon />}
                    </Box>
                }
            />
        </Box>
    );
}

export default function TransportStopRouteDetails() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const [stopsBeforeOpen, setStopsBeforeOpen] = useState(false);

    const route = ctx.selectedTransportRoute;

    const [scrollContentRef, hasVerticalScroll, recheckScroll] = useHasVerticalScroll([route]);
    const [, height] = useWindowSize();

    const stops = route?.stops ?? [];
    const hasTravelTime = stops.some((s) => s?.travelTime != null);
    const currentStopIndex = route ? stops.findIndex((s) => s.stopId === route.currentStopId) : -1;

    if (!route) {
        return null;
    }
    const handleClose = () => {
        ctx.setSelectedWptId((p) => (p?.type === TRANSPORT_STOPS_LAYER_ID ? null : p));
        ctx.setSelectedTransportRoute(null);
    };

    const stopsAfterCurrent = stops.slice(currentStopIndex + 1);
    const routeColor = route.color;

    return (
        <SecondaryMenuDrawer onClose={handleClose}>
            <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
                <HeaderWithUnderline onClose={handleClose} />
                <Box ref={scrollContentRef} className={gStyles.scrollActiveBlock}>
                    <RouteDetailsHeader route={route} minimised={hasVerticalScroll} />
                    <Divider />
                    {stops.length > 0 && (
                        <>
                            <Box className={styles.stopsListHeader}>
                                <Typography className={styles.stopsListHeaderTitle}>
                                    {capitalize(t('transport_stops'))}
                                </Typography>
                                {hasTravelTime && (
                                    <Typography className={styles.stopsListHeaderTravelTime}>
                                        {t('web:transport_travel_time')}
                                    </Typography>
                                )}
                            </Box>
                            <TransportStopRouteNavButtons route={route} stopsBeforeOpen={stopsBeforeOpen} />
                            {/* Stops before current (collapsible) */}
                            {currentStopIndex > 0 && (
                                <>
                                    <CollapseRowWithDots routeColor={routeColor}>
                                        <SelectItemWithoutOptions
                                            title={`${currentStopIndex} stops before`}
                                            boldTitle={false}
                                            onClick={() => setStopsBeforeOpen(!stopsBeforeOpen)}
                                            endIcon={stopsBeforeOpen ? <ExpandLess /> : <ExpandMore />}
                                            showValue={false}
                                        />
                                    </CollapseRowWithDots>
                                    <Collapse
                                        in={stopsBeforeOpen}
                                        timeout="auto"
                                        onEntered={recheckScroll}
                                        onExited={recheckScroll}
                                    >
                                        <LineAndIconWrapper routeColor={routeColor} lineNoRadiusBottom>
                                            {stops.slice(0, currentStopIndex).map((stop, i) => (
                                                <React.Fragment key={`before-${stop.stopId ?? i}`}>
                                                    <StopItem stop={stop} routeColor={routeColor} showTravelTime={hasTravelTime} />
                                                    {i < currentStopIndex - 1 && <DividerWithMargin margin={'50px'} />}
                                                </React.Fragment>
                                            ))}
                                        </LineAndIconWrapper>
                                    </Collapse>
                                </>
                            )}
                            {/* Current stop + stops after current */}
                            <LineAndIconWrapper routeColor={routeColor} lineNoRadiusTop={stopsBeforeOpen}>
                                <Box>
                                    {/* Current stop (selected) */}
                                    <StopItem stop={stops[currentStopIndex]} routeColor={routeColor} isSelected showTravelTime={hasTravelTime} />
                                    {stopsAfterCurrent.length > 0 && <DividerWithMargin margin={'50px'} />}
                                    {/* Stops after current */}
                                    {stopsAfterCurrent.map((stop, i) => (
                                        <React.Fragment key={`after-${stop.stopId ?? currentStopIndex + 1 + i}`}>
                                            <StopItem stop={stop} routeColor={routeColor} showTravelTime={hasTravelTime} />
                                            {i < stopsAfterCurrent.length - 1 && <DividerWithMargin margin={'50px'} />}
                                        </React.Fragment>
                                    ))}
                                </Box>
                            </LineAndIconWrapper>
                        </>
                    )}
                </Box>
            </Box>
        </SecondaryMenuDrawer>
    );
}
