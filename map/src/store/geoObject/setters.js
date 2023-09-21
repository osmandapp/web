import md5 from 'blueimp-md5';

import { osrmToFeaturesCollection } from './convert/osrmToFeaturesCollection';

export function reset() {
    this.flushState((o) => (o.route = o.track = o.gpx = null));
}

export function putRoute(route) {
    const id = md5(JSON.stringify(route)); // calc once at init (stringify+md5 is slow)
    this.flushState((o) => {
        o.route = route;
        o.id = id;
    });
    return { id, route };
}

export function putRouteOsrm({ osrm, style }) {
    return this.putRoute(osrmToFeaturesCollection({ osrm, style }));
}
