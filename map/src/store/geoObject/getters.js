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
    return route?.features[0]?.properties ?? null;
}
