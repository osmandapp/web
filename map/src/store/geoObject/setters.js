import md5 from 'blueimp-md5';
import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH, ROUTE_POINTS_VIA } from '../geoRouter/profileConstants';

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
        // generate track name
        const { name } = this.getProfile();
        const cap = (s) => s && s[0].toUpperCase() + s.slice(1);
        const yyyymmdd = () => new Date().toISOString().substring(0, 10);
        const km = parseFloat(Number((this.getRouteProps(route)?.overall?.distance ?? 0) / 1000).toFixed(2));
        const trackName = `${yyyymmdd()} ${cap(name)} ${km} km`; // Example: 2023-09-26 Foot 2.14 km

        const track = convertRouteToTrack({
            id,
            route,
            trackName,
            geoProfile: this.getGeoProfile(),
            start: this.getOption(ROUTE_POINTS_START),
            finish: this.getOption(ROUTE_POINTS_FINISH),
            viaPoints: this.getOption(ROUTE_POINTS_VIA),
        });

        this.flushState((o) => {
            o.route = route;
            o.track = track;
            o.id = id;
        });

        return { id, route, track };
    }

    return { id, route };
}
