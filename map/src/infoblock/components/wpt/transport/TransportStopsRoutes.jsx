import React, { useState } from 'react';
import { Box, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
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
import DividerWithMargin from '../../../../frame/components/dividers/DividerWithMargin';
import SelectItemWithoutOptions from '../../../../frame/components/items/SelectItemWithoutOptions';
import { TRANSPORT_STOP_SHIELD_COLOR } from '../../../../map/layers/TransportStopsLayer';
import styleRulesResult from '../../../../resources/mapStyles/styleRulesResult.json';

const getRouteColorFromStyleRules = (routeTypeKey) => {
    const publicTransportStyle = styleRulesResult['publictransportroutes.addon.render.xml'];
    const defaultStyle = styleRulesResult['default.render.xml'];

    let colors = null;
    if (publicTransportStyle && publicTransportStyle[routeTypeKey]) {
        colors = publicTransportStyle[routeTypeKey];
    } else if (defaultStyle && defaultStyle[routeTypeKey]) {
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
const ROUTE_TYPES = {
    bus: {
        icon: BusIcon,
        name: 'route_type_bus',
        color: getRouteColorFromStyleRules('routeBusColor'),
    },
    ferry: {
        icon: FerryIcon,
        name: 'route_type_ferry',
        color: getRouteColorFromStyleRules('routeFerryColor'),
    },
    funicular: {
        icon: FunicularIcon,
        name: 'route_type_funicular',
        color: getRouteColorFromStyleRules('routeFunicularColor'),
    },
    light_rail: {
        icon: LightRailIcon,
        name: 'route_type_light_rail',
        color: getRouteColorFromStyleRules('routeLightrailColor'),
    },
    monorail: {
        icon: MonorailIcon,
        name: 'route_type_monorail',
        color: getRouteColorFromStyleRules('routeLightrailColor'),
    },
    railway: {
        icon: RailwayIcon,
        name: 'route_type_railway',
        color: getRouteColorFromStyleRules('routeTrainColor'),
    },
    share_taxi: {
        icon: ShareTaxiIcon,
        name: 'route_type_share_taxi',
        color: getRouteColorFromStyleRules('routeShareTaxiColor'),
    },
    train: {
        icon: TrainIcon,
        name: 'route_type_train',
        color: getRouteColorFromStyleRules('routeTrainColor'),
    },
    tram: {
        icon: TramIcon,
        name: 'route_type_tram',
        color: getRouteColorFromStyleRules('routeTramColor'),
    },
    trolleybus: {
        icon: TrolleybusIcon,
        name: 'route_type_trolleybus',
        color: getRouteColorFromStyleRules('routeTrolleybusColor'),
    },
    subway: {
        icon: SubwayIcon,
        name: 'route_type_subway',
        color: getRouteColorFromStyleRules('routeTrainColor'),
    },
};

export default function TransportStopsRoutes({ routes = [] }) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(true);

    if (!routes || routes.length === 0) {
        return null;
    }

    return (
        <Box>
            <SelectItemWithoutOptions
                title={t('transport_Routes')}
                onClick={() => setOpen(!open)}
                endIcon={open ? <ExpandLess /> : <ExpandMore />}
                showValue={false}
            />
            <Collapse in={open} timeout="auto">
                <Box>
                    {routes.map((route, index) => {
                        const routeType = ROUTE_TYPES[route.type];
                        return (
                            <React.Fragment key={route.id || index}>
                                <TransportStopRouteItem
                                    route={route}
                                    icon={routeType.icon}
                                    color={routeType.color}
                                    typeName={t(`web:${routeType.name}`)}
                                />
                                {index < routes.length - 1 && <DividerWithMargin margin={'64px'} />}
                            </React.Fragment>
                        );
                    })}
                </Box>
            </Collapse>
        </Box>
    );
}
