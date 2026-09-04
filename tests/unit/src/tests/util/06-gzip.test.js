import { compressFromJSON, compressFromString, decompressToJSON, decompressToString } from '@map/util/GzipBase64.mjs';
import { compressJSONToBlob, compressStringToBlob } from '@map/util/GzipCompression';
import { gunzipSync } from 'node:zlib';

// deterministic noise: gzip must not be able to compress it away
function noisyAscii(length) {
    let seed = 0x2f6e2b1;
    let out = '';
    for (let i = 0; i < length; i++) {
        seed ^= seed << 13;
        seed |= 0;
        seed ^= seed >>> 17;
        seed ^= seed << 5;
        seed |= 0;
        out += String.fromCharCode(33 + (Math.abs(seed) % 90));
    }

    return out;
}

// jsdom Blob has no arrayBuffer()
function readBlob(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(Buffer.from(reader.result));
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
    });
}

describe('GzipBase64', () => {
    test('string round-trip', async () => {
        for (const value of ['', 'Track', 'Трек №1']) {
            expect(await decompressToString(await compressFromString(value))).toBe(value);
        }
    });

    test('a payload that takes more than one chunk of u8toBytes', async () => {
        const value = noisyAscii(50000);
        const packed = await compressFromString(value);

        // u8toBytes walks the compressed bytes in 0x8000 chunks, so the payload has to cross that
        expect(Buffer.from(packed, 'base64').length).toBeGreaterThan(0x8000);
        expect(await decompressToString(packed)).toBe(value);
    });

    test('json round-trip', async () => {
        const obj = { name: 'Трек', points: [{ lat: 50.45, lng: 30.523 }], nested: { a: [1, 2, 3] } };
        expect(await decompressToJSON(await compressFromJSON(obj))).toEqual(obj);
    });

    test('the result is base64 and shorter than a repetitive input', async () => {
        const packed = await compressFromString('a'.repeat(10000));
        expect(packed).toMatch(/^[A-Za-z0-9+/]+=*$/);
        expect(packed.length).toBeLessThan(10000);
    });

    test('empty input decompresses to null', async () => {
        expect(await decompressToJSON('')).toBeNull();
        expect(await decompressToJSON(null)).toBeNull();
    });
});

describe('GzipCompression', () => {
    test('a string becomes a gzipped blob', async () => {
        const blob = compressStringToBlob('Трек №1');
        expect(blob.type).toBe('application/gzip');
        expect(gunzipSync(await readBlob(blob)).toString('utf-8')).toBe('Трек №1');
    });

    test('a json object becomes a gzipped blob', async () => {
        const obj = { name: 'Трек', points: [1, 2, 3] };
        const blob = compressJSONToBlob(obj);
        expect(JSON.parse(gunzipSync(await readBlob(blob)).toString('utf-8'))).toEqual(obj);
    });
});
