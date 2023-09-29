import md5 from 'blueimp-md5';

// pure functions
import { convertRouteToTrack } from './convert/convertRouteToTrack';
import { osrmToFeatureCollection } from './convert/osrmToFeatureCollection';

export function resetRoute() {
    this.flushState((o) => (o.route = o.track = o.gpx = null));
}

export function putRouteOsrm({ osrm, style }) {
    const route = osrmToFeatureCollection({ osrm, style });
    return this.putRoute({ route });
}

export function putRoute({ route, skipConversion = false }) {
    const id = md5(JSON.stringify(route));

    if (skipConversion) {
        this.flushState((o) => {
            o.route = route;
            o.id = id;
        });
    } else {
        const track = convertRouteToTrack({
            id,
            route,
            geoProfile: this.getGeoProfile(),
            hidePoints: this.getOption('route.hidePoints'),
        });
        this.flushState((o) => {
            o.route = route;
            o.track = track;
            o.id = id;
        });
    }

    return { id, route };
}
