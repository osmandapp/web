# overhead to be optimized

- optimize point.ext (skip default values such as 0, false, etc)
- optimize segments' dictionary (make it one-global and append-only)
- optimize approximate API: reduce coordinates precision to 5-6 decimal digits (now is ~15 digits)

# track format

{
    "id": <String> // id of track (usually equals to name)
    "name": <String> // name of track (.gpx added for Cloud-tracks)
    "originalName": <String> // original Cloud track name including folder name
    "metaData": {
        "name": <String> // duplicates track name
        "ext": {
            "name": <String> // again name
            "time": <Number> // timestamp (of extension?)
            "extensions": {
                // some more extensions
            }
        }
        "desc": <String> // optional track description
    }
    "wpts": [WPT, ...] // optional waypoints array TODO details
    "points": [POINT, ...] // route/gpx points array TODO details
    "track": [TRACKS, ...] // optional Cloud-kind of track storage (track[0].points equals to points) TODO details
    "newPoint": {} // lastly added point (including all calculated details)
    "analysis": {} // filled by get-analysis API request
    "pointsGroups": {} // dynamically created ???
    "zoom": <Boolean> // internal
    "hasGeo": <Boolean> // internal
    "update": <Boolean> // internal
    "selected": <Boolean> // internal
    "syncRouting": <Boolean> // internal
    "updateLayers": <Boolean> // internal
    "localRedrawWpts": <Boolean> // internal
    "cloudRedwarWpts": <Boolean> // internal
    "refreshAnalytics": <Boolean> // internal
    "layers": [] // leaflet layers (cyclic value)
}

# POINT format

see convertRouteToTrack.js for details of conversion route points to track points

# minimum required track point geometry and structure

[0] = { lat: start.lat, lng: start.lng, distance: 0, ...defaultPointExtras },
[1] = { lat: end.lat, lng: end.lng, distance, ...defaultPointExtras },

const defaultPointExtras = {
    srtmEle: null,
    ele: TracksManager.NAN_MARKER,
    ext: { ele: TracksManager.NAN_MARKER, extensions: {} }, // getTrackWithAnalysis requires ext.extensions
};

# route format (minimum required - w/o maneuvers/turns details)

// GeoJSON data (FeatureCollection format)
geoObject.route = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'LineString', // type of segment (LineString always)
                coordinates, // array of points [lon, lat] Note: sequence lon-lat !
            },
            properties: {
                overall: {
                    time,
                    distance,
                },
            },
            style,
        },
    ],
};
