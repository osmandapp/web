import md5 from 'blueimp-md5';

export function getTrack() {
    return this.track;
}

export function getRoute() {
    return this.route;
}

export function getRouteKey() {
    return md5(this.id + this.getOption('route.points') + this.getOption('route.map.hidePoints'));
}

export function getRouteProps(route = this.route) {
    return (route?.features && route.features[0].properties) ?? null;
}

// deps for re-routing effects
// use options affecting route-calc
export function getRouteEffectDeps() {
    return JSON.stringify({
        allPoints: this.getOption('route.points'),
        // hidePoints: this.getOption('route.map.hidePoints'),
    });
}

export function isRouteReadyToCalc() {
    return this.getOption('route.points.start') && this.getOption('route.points.finish');
}
