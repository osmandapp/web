import md5 from 'blueimp-md5';
import {
    ROUTE_POINTS_START,
    ROUTE_POINTS_FINISH,
    ROUTE_ROUND_TRIP,
    ROUTE_ROUND_TRIP_ENABLED,
} from '../geoRouter/profileConstants';

export function getTrack() {
    return this.track;
}

export function getRoute() {
    return this.route;
}

// deps for GeoJSON refresh
export function getRouteKey() {
    return md5(this.id + this.getOption('route.points') + this.getOption('route.map.hidePoints'));
}

export function getRouteProps(route = this.route) {
    return (route?.features?.length > 0 && route.features[0].properties) ?? null;
}

// deps for re-routing effects
// use options affecting route-calc
export function getRouteEffectDeps() {
    return JSON.stringify({
        allPoints: this.getOption('route.points'),
        forceApproximation: this.getOption('route.map.forceApproximation'),
        // round trip settings matter only while it is on
        roundTrip: this.getOption(ROUTE_ROUND_TRIP_ENABLED) ? this.getOption(ROUTE_ROUND_TRIP) : null,
    });
}

export function isRouteReadyToCalc() {
    if (this.getOption(ROUTE_ROUND_TRIP_ENABLED)) {
        return !!this.getOption(ROUTE_POINTS_START);
    }
    return this.getOption(ROUTE_POINTS_START) && this.getOption(ROUTE_POINTS_FINISH);
}
