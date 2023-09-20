import md5 from 'blueimp-md5';

export function reset() {
    this.flushState((o) => (o.route = o.track = o.gpx = null));
}

export function putRoute(route) {
    const id = md5(JSON.stringify(route)); // calc once at init (stringify+md5 is slow)
    this.flushState((o) => {
        o.route = route;
        o.id = id;
    });
}
