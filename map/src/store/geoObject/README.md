# overhead to be optimized

- optimize point.ext (skip default values such as 0, false, etc)
- optimize segments' dictionary (make it one-global and append-only)

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
    // optional Cloud-kind of track storage (track[0].points equals to points)
    track: [
    ]
    // route/gpx points array TODO details
    "points": [
    ]
    // optional waypoints array TODO details
    "wpts": [
    ]
    "analysis": {} // filled by get-analysis API request
    "newPoint": {} // lastly added point (including all calculated details)
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
}

# minimum required track point geometry and structure

[0] = { lat: start.lat, lng: start.lng, distance: 0, ...defaultPointExtras },
[1] = { lat: end.lat, lng: end.lng, distance, ...defaultPointExtras },

const defaultPointExtras = {
    srtmEle: null,
    ele: TracksManager.NAN_MARKER,
    ext: { ele: TracksManager.NAN_MARKER, extensions: {} }, // getTrackWithAnalysis requires ext.extensions
};
