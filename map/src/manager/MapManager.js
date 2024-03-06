export function getCenterMapLoc(hash) {
    const parts = hash.split('/').slice(1);
    if (parts.length === 2) {
        const [lat, lng] = parts.map(parseFloat);
        if (!isNaN(lat) && !isNaN(lng)) {
            return {
                lat: lat,
                lng: lng,
            };
        }
    }
    return null;
}
