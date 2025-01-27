import { LatLng } from 'leaflet';

// prepare points for API request
export function getPointsForAnalysis({ startPoint, finishPoint }) {
    const coordinates = [];
    if (startPoint) {
        coordinates.push({
            lat: startPoint.lat,
            lon: startPoint.lng,
        });
    }
    if (finishPoint) {
        coordinates.push({
            lat: finishPoint.lat,
            lon: finishPoint.lng,
        });
    }
    if (coordinates.length < 1) {
        return null;
    }
    return coordinates;
}

export function parseCoordinate(coord) {
    if (!isValidCoordinate(coord)) {
        return null;
    }
    const [lat, lon] = coord.split(',').map(Number);
    return new LatLng(lat, lon);
}

function isValidCoordinate(coord) {
    const [lat, lon] = coord.split(',').map(Number);
    return !isNaN(lat) && !isNaN(lon) && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
}
