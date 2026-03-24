import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Box, CircularProgress, Collapse, Divider } from '@mui/material';
import AppContext from '../../../../context/AppContext';
import TransportStopRouteDetails from './TransportStopRouteDetails';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { apiGet } from '../../../../util/HttpApi';
import { ReactComponent as BusIcon } from '../../../../assets/icons/ic_action_transport_bus.svg';
import { ReactComponent as FerryIcon } from '../../../../assets/icons/ic_action_transport_ferry.svg';
import { ReactComponent as FunicularIcon } from '../../../../assets/icons/ic_action_transport_funicular.svg';
import { ReactComponent as LightRailIcon } from '../../../../assets/icons/ic_action_transport_light_rail.svg';
import { ReactComponent as MonorailIcon } from '../../../../assets/icons/ic_action_transport_monorail.svg';
import { ReactComponent as RailwayIcon } from '../../../../assets/icons/ic_action_transport_railway.svg';
import { ReactComponent as ShareTaxiIcon } from '../../../../assets/icons/ic_action_transport_share_taxi.svg';
import { ReactComponent as TrainIcon } from '../../../../assets/icons/ic_action_transport_train.svg';
import { ReactComponent as TramIcon } from '../../../../assets/icons/ic_action_transport_tram.svg';
import { ReactComponent as TrolleybusIcon } from '../../../../assets/icons/ic_action_transport_trolleybus.svg';
import { ReactComponent as SubwayIcon } from '../../../../assets/icons/ic_action_transport_subway.svg';
import TransportStopRouteItem from './TransportStopRouteItem';
import TransportTypeFilter from './TransportTypeFilter';
import DividerWithMargin from '../../../../frame/components/dividers/DividerWithMargin';
import SelectItemWithoutOptions from '../../../../frame/components/items/SelectItemWithoutOptions';
import { TRANSPORT_STOP_SHIELD_COLOR } from '../../../../map/layers/TransportStopsLayer';
import styleRulesResult from '../../../../resources/mapStyles/styleRulesResult.json';

const getRouteColorFromStyleRules = (routeTypeKey) => {
    const publicTransportStyle = styleRulesResult['publictransportroutes.addon.render.xml'];
    const defaultStyle = styleRulesResult['default.render.xml'];

    let colors = null;
    if (publicTransportStyle?.[routeTypeKey]) {
        colors = publicTransportStyle[routeTypeKey];
    } else if (defaultStyle?.[routeTypeKey]) {
        colors = defaultStyle[routeTypeKey];
    }

    if (!colors) {
        return TRANSPORT_STOP_SHIELD_COLOR;
    }

    const color = colors.find((c) => !c.nightMode) || colors[0];
    return color?.attrColorValue || TRANSPORT_STOP_SHIELD_COLOR;
};

// android types
// https://github.com/osmandapp/OsmAnd/blob/296672f798da6090e4b06764b3ce67d0cded8e64/OsmAnd/src/net/osmand/plus/transport/TransportStopType.java#L13
export const ROUTE_TYPES = {
    bus: {
        order: 0,
        icon: BusIcon,
        name: 'route_type_bus',
        color: getRouteColorFromStyleRules('routeBusColor'),
    },
    subway: {
        order: 1,
        icon: SubwayIcon,
        name: 'route_type_subway',
        color: getRouteColorFromStyleRules('routeTrainColor'),
    },
    trolleybus: {
        order: 2,
        icon: TrolleybusIcon,
        name: 'route_type_trolleybus',
        color: getRouteColorFromStyleRules('routeTrolleybusColor'),
    },
    ferry: {
        order: 3,
        icon: FerryIcon,
        name: 'route_type_ferry',
        color: getRouteColorFromStyleRules('routeFerryColor'),
    },
    funicular: {
        order: 4,
        icon: FunicularIcon,
        name: 'route_type_funicular',
        color: getRouteColorFromStyleRules('routeFunicularColor'),
    },
    light_rail: {
        order: 5,
        icon: LightRailIcon,
        name: 'route_type_light_rail',
        color: getRouteColorFromStyleRules('routeLightrailColor'),
    },
    monorail: {
        order: 6,
        icon: MonorailIcon,
        name: 'route_type_monorail',
        color: getRouteColorFromStyleRules('routeLightrailColor'),
    },
    railway: {
        order: 7,
        icon: RailwayIcon,
        name: 'route_type_railway',
        color: getRouteColorFromStyleRules('routeTrainColor'),
    },
    share_taxi: {
        order: 8,
        icon: ShareTaxiIcon,
        name: 'route_type_share_taxi',
        color: getRouteColorFromStyleRules('routeShareTaxiColor'),
    },
    train: {
        order: 9,
        icon: TrainIcon,
        name: 'route_type_train',
        color: getRouteColorFromStyleRules('routeTrainColor'),
    },
    tram: {
        order: 10,
        icon: TramIcon,
        name: 'route_type_tram',
        color: getRouteColorFromStyleRules('routeTramColor'),
    },
};

function RouteSection({
    title,
    defaultOpen,
    routes,
    isLoading,
    showFilter,
    filterRoutes,
    selectedType,
    setSelectedType,
    wpt,
}) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(defaultOpen);
    const routeList = routes ?? [];
    const filteredRoutes = useMemo(
        () => (selectedType ? routeList.filter((r) => r.type === selectedType) : routeList),
        [routeList, selectedType]
    );

    return (
        <Box sx={{ mb: '-16px' }}>
            <Divider sx={{ mt: '16px' }} />
            <SelectItemWithoutOptions
                title={title}
                onClick={() => setOpen(!open)}
                endIcon={open ? <ExpandLess /> : <ExpandMore />}
                showValue={false}
            />
            <Collapse in={open} timeout="auto">
                <Box>
                    {isLoading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                            <CircularProgress size={24} />
                        </Box>
                    ) : (
                        <>
                            {showFilter && filterRoutes.length > 0 && (
                                <TransportTypeFilter
                                    routes={filterRoutes}
                                    selectedType={selectedType}
                                    setSelectedType={setSelectedType}
                                />
                            )}
                            {filteredRoutes.map((route, index) => {
                                const routeType = ROUTE_TYPES[route.type];
                                return (
                                    <React.Fragment key={route.id || index}>
                                        <TransportStopRouteItem
                                            route={route}
                                            icon={routeType?.icon}
                                            color={routeType?.color}
                                            typeName={routeType ? t(`web:${routeType.name}`) : ''}
                                            wpt={wpt}
                                        />
                                        {index < filteredRoutes.length - 1 && <DividerWithMargin margin={'64px'} />}
                                    </React.Fragment>
                                );
                            })}
                        </>
                    )}
                </Box>
            </Collapse>
        </Box>
    );
}

export default function TransportStopsRoutes({ wpt }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const [nearbyRoutes, setNearbyRoutes] = useState(null);
    const [selectedRouteType, setSelectedRouteType] = useState(null);

    useEffect(() => {
        const lat = wpt?.latlon?.lat;
        const lon = wpt?.latlon?.lon;
        const stopId = wpt?.id;
        if (lat == null || lon == null || stopId == null) {
            setNearbyRoutes(null);
            return;
        }
        setNearbyRoutes(null);
        const controller = new AbortController();
        apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/get-nearby-transport-stops`, {
            params: { lat, lon, stopId },
            apiCache: true,
            signal: controller.signal,
        })
            .then((response) => {
                const list = response?.data?.nearbyRoutes;
                setNearbyRoutes(Array.isArray(list) ? list : []);
            })
            .catch(() => setNearbyRoutes([]));
        return () => controller.abort();
    }, [wpt?.id, wpt?.latlon?.lat, wpt?.latlon?.lon]);

    const filterRoutes = useMemo(() => [...(wpt?.routes ?? []), ...(nearbyRoutes ?? [])], [wpt?.routes, nearbyRoutes]);

    if (!wpt) return null;

    const routesList = wpt.routes ?? [];

    return (
        <>
            {routesList.length > 0 && (
                <RouteSection
                    title={t('transport_Routes')}
                    defaultOpen={true}
                    routes={routesList}
                    isLoading={false}
                    showFilter={true}
                    filterRoutes={filterRoutes}
                    selectedType={selectedRouteType}
                    setSelectedType={setSelectedRouteType}
                    wpt={wpt}
                />
            )}
            {nearbyRoutes?.length > 0 && (
                <RouteSection
                    title={t('web:transport_nearby_routes')}
                    defaultOpen={false}
                    routes={nearbyRoutes}
                    isLoading={false}
                    showFilter={false}
                    filterRoutes={filterRoutes}
                    selectedType={selectedRouteType}
                    setSelectedType={setSelectedRouteType}
                    wpt={wpt}
                />
            )}
            {ctx.selectedTransportRoute && !ctx.selectedTransportRoute.isPreview && <TransportStopRouteDetails />}
        </>
    );
}
