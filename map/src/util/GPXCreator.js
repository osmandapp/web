import {BaseBuilder, buildGPX} from "gpx-builder";
import {Metadata, Point, Route, Segment, Track} from "gpx-builder/dist/builder/BaseBuilder/models";

function createGpx(track) {
    const gpxData = new BaseBuilder();

    createMetaData(track, gpxData);
    createWPT(track, gpxData);
    createRTE(track, gpxData);
    createTRK(track, gpxData);

    return buildGPX(gpxData.toObject());
}

function createMetaData(track, gpxData) {
    if (track.metadata) {
        gpxData.setMetadata(new Metadata(track.metadata));
    }
}

function createWPT(track, gpxData) {
    if (track.wpt) {
        let pointsArr = [];
        for (let id in track.wpt) {
            let properties = {};
            for (const [key, value] of Object.entries(track.wpt[id].meta)) {
                properties[key] = value;
            }
            pointsArr.push(new Point(track.wpt[id].lat, track.wpt[id].lng, properties))
        }
        gpxData.setWayPoints(pointsArr)
    }
}

function createRTE(track, gpxData) {
    if (track.rte) {
        let routes = [];
        for (let rte in track.rte) {
            let pointsArr = [];
            track.rte[rte].forEach(points => {
                points.points.forEach(p => {
                    let properties = {};
                    for (const [key, value] of Object.entries(p.meta)) {
                        properties[key] = value;
                    }
                    pointsArr.push(new Point(p.lat, p.lng, properties))
                })
            });
            routes.push(new Route({rtept: pointsArr}));
        }
        gpxData.setRoutes(routes)
    }
}

function createTRK(track, gpxData) {
    let points = [];

    if (track.trk) {
        let tracks = [];
        let segments = [];
        for (let trk in track.trk) {
            track.trk[trk].forEach(s => {
                let points = [];
                s.points.forEach(p => {
                    let properties = {};
                    if (Object.keys(p.meta).length !== 0) {
                        for (const [key, value] of Object.entries(p.meta)) {
                            properties[key] = value;
                        }
                    }
                    points.push(new Point(p.lat, p.lng, properties))

                });
                segments.push(new Segment(points));
            })

            tracks.push(new Track(segments));
        }
        gpxData.setTracks(tracks)
    } else {
        track.points.forEach(p => points.push(new Point(p.lat, p.lng)));
        gpxData.setSegmentPoints(points);
    }
}

const GPXCreator = {
    createGpx
};

export default GPXCreator;