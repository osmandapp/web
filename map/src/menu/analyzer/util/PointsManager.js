export function getPointsForAnalysis({ startPoint, finishPoint }) {
    const coordinates = [];
    if (startPoint) {
        coordinates.push(parseCoordinate(startPoint));
    }
    if (finishPoint) {
        coordinates.push(parseCoordinate(finishPoint));
    }
    if (coordinates.length < 1) {
        return null;
    }
    return coordinates;
}

function parseCoordinate(coord) {
    if (!isValidCoordinate(coord)) {
        return null;
    }
    const [lat, lon] = coord.split(',').map(Number);
    return { lat, lon };
}

function isValidCoordinate(coord) {
    const [lat, lon] = coord.split(',').map(Number);
    return !isNaN(lat) && !isNaN(lon) && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
}
