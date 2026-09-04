import { compressFromJSON, compressFromString, decompressToJSON, decompressToString } from '@map/util/GzipBase64.mjs';
import { compressJSONToBlob, compressStringToBlob } from '@map/util/GzipCompression';
import { gunzipSync } from 'node:zlib';

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

    test('a string longer than the 0x8000 chunk of u8toBytes', async () => {
        const value = Array.from({ length: 100000 }, (unused, i) => String.fromCharCode(33 + (i % 90))).join('');
        expect(await decompressToString(await compressFromString(value))).toBe(value);
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
