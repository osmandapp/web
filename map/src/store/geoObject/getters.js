import md5 from 'blueimp-md5';

export function getTrack() {
    return this.track;
}

export function getRoute() {
    return this.route;
}

export function getRouteKey() {
    return md5(this.id + JSON.stringify(this.options.route));
}

export function getRouteProps(route = this.route) {
    return (route && route.length > 0 && route[0].properties) ?? null;
}

export function getRouteEffectDeps() {
    return JSON.stringify({
        allPoints: this.getOption('route.points'),
        useApproximate: this.getOption('route.useApproximate'),
    });
}

export function isRouteReadyToCalc() {
    return this.getOption('route.points.start') && this.getOption('route.points.finish');
}
