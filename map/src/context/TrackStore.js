export function TrackData(name, tracks, wpt, metadata, ext) {
    this.name = name;
    this.tracks = tracks;
    this.wpt = wpt;
    this.metadata = metadata;
    this.ext = ext;
}

export function Track(info, points, routingTypes) {
    this.info = info;
    this.points = points;
    this.routingTypes = routingTypes;
}

export function Point(info, geometry, routingSegments) {
    this.info = info;
    this.geometry = geometry;
    this.routingSegments = routingSegments;
}

export function Geometry(points) {
    this.points = points;
}