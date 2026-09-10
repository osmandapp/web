// Test input for the geometry decoder: a copy of the server-side encoder
// net.osmand.server.osmgpx.TrackSimplifyEncoder, so that many cases (negative deltas, multi-byte
// varints, the edges of the mercator grid) can be generated instead of hand-writing bytes.
//
// This is a snapshot of the format, not a contract test: it lives in this repository, so a change
// of the format on the server would not fail anything here. That guarantee belongs to a test on
// TrackSimplifyEncoder itself.

const STORE_ZOOM = 18;
const STORE_SHIFT = 31 - (STORE_ZOOM + 8); // = 5
const POW31 = 2 ** 31;

// MapUtils.get31TileNumberX
function get31TileNumberX(longitude) {
    return Math.trunc(((longitude + 180) / 360) * POW31);
}

// MapUtils.get31TileNumberY
function get31TileNumberY(latitude) {
    const rad = (latitude * Math.PI) / 180;
    const eval31 = Math.min(Math.log(Math.tan(rad) + 1 / Math.cos(rad)), Math.PI);

    return Math.trunc(((1 - eval31 / Math.PI) / 2) * POW31);
}

function zigzag(v) {
    return (v << 1) ^ (v >> 31);
}

function writeVarint(bytes, value) {
    let v = value;
    while ((v & ~0x7f) !== 0) {
        bytes.push((v & 0x7f) | 0x80);
        v >>>= 7;
    }
    bytes.push(v);
}

function toBase64(bytes) {
    return Buffer.from(Uint8Array.from(bytes)).toString('base64');
}

/**
 * Encode segments of [latitude, longitude] pairs the way the server does.
 *
 * @param {Array<Array<[number, number]>>} segments
 * @returns {string} base64
 */
export function encodeGeometry(segments) {
    const bytes = [];
    writeVarint(bytes, segments.length);
    for (const points of segments) {
        writeVarint(bytes, points.length);
        let px = 0;
        let py = 0;
        for (const [latitude, longitude] of points) {
            const x = get31TileNumberX(longitude) >> STORE_SHIFT;
            const y = get31TileNumberY(latitude) >> STORE_SHIFT;
            writeVarint(bytes, zigzag(x - px));
            writeVarint(bytes, zigzag(y - py));
            px = x;
            py = y;
        }
    }

    return toBase64(bytes);
}

/** Distance in meters, enough for grid-precision assertions. */
export function distance(lat1, lon1, lat2, lon2) {
    const R = 6372800;
    const toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

    return 2 * R * Math.asin(Math.sqrt(a));
}
