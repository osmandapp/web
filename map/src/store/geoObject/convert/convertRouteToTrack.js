import { getDistance } from '../../../util/Utils';
import { NAN_MARKER, PROFILE_LINE, isNonZeroEle } from '../../../manager/track/TracksManager'; // jest: 99999, 'line'

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
            f.geometry.coordinates.forEach((c, index) => {
                const [lng, lat, ele] = c; // ele might be undefined
                if (ele) {
                    geometry.push({ lat, lng, ele }); // https://www.rfc-editor.org/rfc/rfc7946#section-3.1.1
                } else {
                    // temporary workaround for bug with first/last point NaN elevation (fallback to prev/next point)
                    const fallback = f.geometry.coordinates[index > 0 ? index - 1 : index + 1];
                    const [, , ele] = fallback; // still might be undefined
                    geometry.push({ lat, lng, ele });
                }
            })
        );
    return geometry;
}

export function convertRouteToTrack({ id, route, trackName, geoProfile, start, finish, viaPoints }) {
    const profile = geoProfile.profile ?? PROFILE_LINE;

    const points = []; // track points/segments

    const routeGeometry = getRouteGeometry(route);

    if (routeGeometry.length === 0) {
        return null;
    }

    /**
     * Route points include: start, finish, and viaPoints
     *
     * The `routeGeometry` should be split into segments by the Route Points.
     * However, Route Points are not always directly connected to the routeGeometry.
     *
     * The Map-object `theNearestMap` is used to find connections between geometry and points.
     */
    const theNearestMap = {}; // [geoPoint] = routePoint

    // start, finish - fast (use geometry[1st,last] if where is no start/finish specified)
    theNearestMap[llRoundedKey(routeGeometry[0])] = start ?? routeGeometry[0];
    theNearestMap[llRoundedKey(routeGeometry[routeGeometry.length - 1])] =
        finish || routeGeometry[routeGeometry.length - 1];

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
                    const ele = routeGeometry[i].ele;
                    if (ele !== undefined) {
                        const thisPointExtras = {
                            ele,
                            srtmEle: null,
                            ext: { ele, extensions: {} },
                        };
                        geometry.push({ ...routeGeometry[i], ...thisPointExtras });
                    } else {
                        geometry.push({ ...routeGeometry[i], ...defaultPointExtras });
                    }
                }
            }
            const ele = geoLL.ele;
            if (ele !== undefined) {
                const thisPointExtras = {
                    ele,
                    srtmEle: null,
                    ext: { ele, extensions: {} },
                };
                points.push({ ...routeLL, ...thisPointExtras, profile, geoProfile, geometry });
            } else {
                points.push({ ...routeLL, ...defaultPointExtras, profile, geoProfile, geometry });
            }
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
        tracks: [{ points }],
        // metaData: { desc: trackDesc },
        analysis: pointsGeometryMinAvgMaxElevation(points),
    };
    // console.log('track', track);

    return track; // bare points
}

function pointsGeometryMinAvgMaxElevation(points) {
    let elevationSum = 0;
    let elevationPoints = 0;
    let avgElevation = Number.NaN;
    let minElevation = Number.POSITIVE_INFINITY;
    let maxElevation = Number.NEGATIVE_INFINITY;
    points &&
        points.length > 0 &&
        points.forEach((p) =>
            p.geometry?.forEach((g) => {
                if (isNonZeroEle(g?.ele) || isNonZeroEle(g?.ext?.ele)) {
                    const ele = isNonZeroEle(g?.ele) ? g.ele : g.ext.ele;
                    minElevation = Math.min(minElevation, ele);
                    maxElevation = Math.max(maxElevation, ele);
                    elevationPoints++;
                    elevationSum += ele;
                    avgElevation = elevationSum / elevationPoints;
                }
            })
        );
    if (elevationPoints > 0) {
        return {
            minElevation,
            maxElevation,
            avgElevation,
            hasElevationData: true,
        };
    } else {
        return {};
    }
}
