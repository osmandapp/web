import md5 from 'blueimp-md5';

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
    });
}

export function isRouteReadyToCalc() {
    return this.getOption('route.points.start') && this.getOption('route.points.finish');
}
