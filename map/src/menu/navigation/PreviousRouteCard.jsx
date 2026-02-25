import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH, ROUTE_POINTS_VIA } from '../../store/geoRouter/profileConstants';
import { navigationObject } from '../../store/navigationObject/navigationObject';
import { formatLatLon } from './NavigationPointsManager';
import { ReactComponent as RouteDirectIcon } from '../../assets/icons/ic_action_route_direct.svg';
import { ReactComponent as RouteViaIcon } from '../../assets/icons/ic_action_route_via.svg';
import TextWithLeftIcon from '../../frame/components/other/TextWithLeftIcon';
import ThickDivider from '../../frame/components/dividers/ThickDivider';

export function getRouteRecordFromNavObject(navObject) {
    const startPoint = navObject.getOption(ROUTE_POINTS_START);
    const finishPoint = navObject.getOption(ROUTE_POINTS_FINISH);
    const viaPoints = navObject.getOption(ROUTE_POINTS_VIA) || [];

    if (!startPoint || !finishPoint) return null;

    const toPoint = (p) => {
        if (!p) return null;
        if (p instanceof navigationObject) {
            return { lat: p.lat, lng: p.lng, displayValue: p.getDisplayValue() };
        }
        if (p.lat == null || p.lng == null) return null;

        return { lat: p.lat, lng: p.lng, displayValue: formatLatLon(p) };
    };

    const start = toPoint(startPoint);
    const finish = toPoint(finishPoint);

    if (!start || !finish) return null;

    const via = viaPoints.map(toPoint).filter(Boolean);
    const points = [start, ...via, finish];

    return { points };
}

function formatRouteLabel(points) {
    if (!points || points.length < 2) return null;
    const from = points[0]?.displayValue ?? '';
    const to = points[points.length - 1]?.displayValue ?? '';
    if (points.length === 2) {
        return (
            <>
                From <strong>{from}</strong> to <strong>{to}</strong>
            </>
        );
    }
    if (points.length === 3) {
        const via = points[1]?.displayValue ?? '';
        return (
            <>
                From <strong>{from}</strong> via <strong>{via}</strong> to <strong>{to}</strong>
            </>
        );
    }
    const stopCount = points.length - 2;
    return (
        <>
            From <strong>{from}</strong> via <strong>{stopCount} stops</strong> to <strong>{to}</strong>
        </>
    );
}

function getRouteIcon(points) {
    if (points.length === 2) return <RouteDirectIcon />;
    return <RouteViaIcon />;
}

export default function PreviousRouteCard() {
    const ctx = useContext(AppContext);

    const navObject = ctx.navigationObject;

    if (!ctx.previousRoute?.points?.length || !navObject) return null;

    const points = ctx.previousRoute.points;
    if (points.length < 2) return null;

    function applyRoute() {
        const pts = ctx.previousRoute.points;
        if (!pts || pts.length < 2) return;

        const startP = pts[0];
        const finishP = pts[pts.length - 1];
        const viaP = pts.slice(1, -1);

        navObject.setOption(
            ROUTE_POINTS_START,
            new navigationObject(startP.lat, startP.lng, { displayValue: startP.displayValue })
        );
        navObject.setOption(
            ROUTE_POINTS_FINISH,
            new navigationObject(finishP.lat, finishP.lng, { displayValue: finishP.displayValue })
        );
        navObject.setOption(
            ROUTE_POINTS_VIA,
            viaP.map((p) => new navigationObject(p.lat, p.lng, { displayValue: p.displayValue }))
        );

        navObject.resetRoute();
    }

    const label = formatRouteLabel(points);
    const icon = getRouteIcon(points);

    return (
        <>
            <TextWithLeftIcon icon={icon} text={label} onClick={() => applyRoute()} />
            <ThickDivider mt={0} mb={0} />
        </>
    );
}
