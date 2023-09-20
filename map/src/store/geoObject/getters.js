export function getTrack() {
    return this.track;
}

export function getRoute() {
    return this.route;
}

export function getRouteId() {
    return this.id;
}

export function getRouteProps(route = this.route) {
    return route?.features[0]?.properties ?? null;
}
