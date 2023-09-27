import { getDistance } from '../../../util/Utils';
import { NAN_MARKER, PROFILE_LINE } from '../../../context/TracksManager'; // jest: 99999, 'line'

export const defaultPointExtras = {
    srtmEle: null,
    ele: NAN_MARKER,
    ext: { ele: NAN_MARKER, extensions: {} }, // getTrackWithAnalysis requires ext.extensions
};

const llRoundedKey = ({ lat, lng }) => Number(lat).toFixed(5) + ',' + Number(lng).toFixed(5);

function getRouteGeometry(route) {
    const geometry = [];
    route.features
        .filter((f) => f.geometry?.type === 'LineString' && f.geometry?.coordinates?.length > 0)
        .forEach((f) =>
            // LineString has [[ll], [ll], ...]
            f.geometry.coordinates.forEach((c) => {
                const [lng, lat] = c;
                geometry.push({ lat, lng });
            })
        );
    return geometry;
}

export function convertRouteToTrack({ id, route, trackName, geoProfile, start, finish, viaPoints }) {
    const profile = geoProfile.profile ?? PROFILE_LINE;

    const points = []; // track points/segments

    const routeGeometry = getRouteGeometry(route);

    /**
     * Route points include: start, finish, and viaPoints
     *
     * The `routeGeometry` should be split into segments by the Route Points.
     * However, Route Points are not always directly connected to the routeGeometry.
     *
     * The Map-object `theNearestMap` is used to find connections between geometry and points.
     */
    const theNearestMap = {}; // [geoPoint] = routePoint
    // start, finish - fast
    theNearestMap[llRoundedKey(routeGeometry[0])] = start;
    theNearestMap[llRoundedKey(routeGeometry[routeGeometry.length - 1])] = finish;
    // viaPoints (measured ~10 RPS on a big 2500 km route with 10 via-points)
    viaPoints.forEach((via) => {
        let closest = null;
        let min = Infinity;
        for (let i = 0; i < routeGeometry.length; i++) {
            const geo = routeGeometry[i];
            const dist = getDistance(via.lat, via.lng, geo.lat, geo.lng);
            if (dist < min) {
                closest = geo;
                min = dist;
            }
        }
        if (closest) {
            theNearestMap[llRoundedKey(closest)] = via;
        }
    });

    // split by route points = N segments (gpx-rtept)
    let lastIndex = 0;
    // console.log('map', theNearestMap);
    routeGeometry.forEach((geoLL, index) => {
        const routeLL = theNearestMap[llRoundedKey(geoLL)];
        if (routeLL) {
            const geometry = [];
            if (index !== lastIndex) {
                for (let i = lastIndex; i <= index; i++) {
                    // console.log('found', index, 'last', lastIndex, 'i', i);
                    geometry.push({ ...routeGeometry[i], ...defaultPointExtras });
                }
            }
            points.push({ ...routeLL, ...defaultPointExtras, profile, geoProfile, geometry });
            lastIndex = index;
            // console.log('done');
        } else {
            // console.log('skip-index', index);
        }
    });

    const track = {
        id,
        points,
        name: trackName,
        // metaData: { desc: trackDesc },
    };

    return track; // bare points
}

// function getRoutePointsMap(route) {
//     const pointsMap = {};
//     route.features
//         .filter((f) => f.geometry?.type === 'Point' && f.geometry?.coordinates?.length > 0)
//         .forEach((f) => {
//             const [lng, lat] = f.geometry.coordinates; // Point has [ll]
//             pointsMap[llRoundedKey({ lat, lng })] = true;
//         });
//     return pointsMap;
// }

// if (hidePoints) {
//     // process whole route = 1 segment (gpx-trkpt)
//     routeGeometry.forEach((ll) => points.push({ ...ll, ...defaultPointExtras }));
// } else {
//     // route Points are acutally turn (maneuver) points
//     // finish points is not turn point (absent here)
//     // PROFILE_LINE has no turns (zero turns)
//     const routePointsMap = getRoutePointsMap(route);

//     // just turns aren't enough:
//     // re-map start/finish points
//     const start = llRoundedKey(routeGeometry[0]);
//     const finish = llRoundedKey(routeGeometry[routeGeometry.length - 1]);
//     // routePointsMap[start] || console.log('add START');
//     // routePointsMap[finish] || console.log('add FINISH');
//     routePointsMap[start] || (routePointsMap[start] = true);
//     routePointsMap[finish] || (routePointsMap[finish] = true);

//     // split by route points = N segments (gpx-rtept)
//     let lastIndex = 0;
//     // console.log('map', routePointsMap);
//     routeGeometry.forEach((ll, index) => {
//         if (routePointsMap[llRoundedKey(ll)]) {
//             const geometry = [];
//             if (index !== lastIndex) {
//                 for (let i = lastIndex; i <= index; i++) {
//                     // console.log('found', index, 'last', lastIndex, 'i', i);
//                     geometry.push({ ...routeGeometry[i], ...defaultPointExtras });
//                 }
//             }
//             points.push({ ...ll, ...defaultPointExtras, profile, geoProfile, geometry });
//             lastIndex = index;
//             // console.log('done');
//         } else {
//             // console.log('skip-index', index);
//         }
//     });
// }
