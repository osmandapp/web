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

export function parseCoordinates(coords) {
    if (!coords) return null;

    // try to parse coordinate in format "lat, lon" or "lat lon"
    const parts = coords.trim().split(/[, ]+/);
    if (parts.length !== 2) return null;

    const [lat, lon] = parts;
    return isValidCoordinate(lat, lon) ? new LatLng(parseFloat(lat), parseFloat(lon)) : null;
}

function isValidCoordinate(lat, lon) {
    const latNum = parseFloat(lat);
    const lonNum = parseFloat(lon);
    return !isNaN(latNum) && !isNaN(lonNum) && latNum >= -90 && latNum <= 90 && lonNum >= -180 && lonNum <= 180;
}
