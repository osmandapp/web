// Decoder for the compact track geometry produced by the server-side
// TrackSimplifyEncoder (net.osmand.server.osmgpx.TrackSimplifyEncoder).
//
// Wire format (per track, base64 of these bytes):
//   varint segmentCount
//   per segment: varint pointCount, then per point:
//     varint zigzag(dx), varint zigzag(dy)   // deltas on the z18 storage grid
//
// Coordinates are stored on the STORE_ZOOM (18) + 8 = z26 tile grid, i.e.
// the 31-bit tile value shifted right by STORE_SHIFT. We reverse that here.
// Keep these constants in sync with TrackSimplifyEncoder.

const STORE_ZOOM = 18;
const STORE_SHIFT = 31 - (STORE_ZOOM + 8); // = 5
const STORE_MULT = 1 << STORE_SHIFT; // = 32
const POW31 = 2 ** 31;

function tileXToLongitude(px) {
    // mirror of MapUtils.get31LongitudeX
    return ((px * STORE_MULT) / POW31) * 360 - 180;
}

function tileYToLatitude(py) {
    // mirror of MapUtils.get31LatitudeY (inverse web-mercator)
    const ex = Math.PI * (1 - (2 * (py * STORE_MULT)) / POW31);
    return (Math.atan(Math.sinh(ex)) * 180) / Math.PI;
}

function base64ToBytes(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
        bytes[i] = bin.charCodeAt(i);
    }
    return bytes;
}

/**
 * Decode base64-encoded simplified geometry into the same structure the map
 * layer expects: an array of segments, each an array of { latitude, longitude }.
 *
 * @param {string} b64 base64 string (feature.properties.geo_b64)
 * @returns {Array<Array<{latitude:number, longitude:number}>>}
 */
export function decodeSimplifiedGeometry(b64) {
    if (!b64) {
        return [];
    }
    const data = base64ToBytes(b64);
    let pos = 0;

    const readVarint = () => {
        let result = 0;
        let shift = 0;
        let b;
        do {
            if (pos >= data.length || shift > 35) {
                throw new Error('Corrupted varint geometry');
            }
            b = data[pos++];
            result += (b & 0x7f) * 2 ** shift; // multiplication avoids 32-bit overflow
            shift += 7;
        } while (b & 0x80);
        return result;
    };

    const unzigzag = (v) => (v % 2 === 0 ? v / 2 : -(v + 1) / 2);

    const segCount = readVarint();
    const segments = [];
    for (let s = 0; s < segCount; s++) {
        const n = readVarint();
        let px = 0;
        let py = 0;
        const seg = [];
        for (let i = 0; i < n; i++) {
            px += unzigzag(readVarint());
            py += unzigzag(readVarint());
            seg.push({
                latitude: tileYToLatitude(py),
                longitude: tileXToLongitude(px),
            });
        }
        if (seg.length > 0) {
            segments.push(seg);
        }
    }
    return segments;
}
