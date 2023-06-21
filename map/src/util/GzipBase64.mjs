import { gzip, ungzip } from 'pako';

/*
    v0.01 (2023-06-07)

    This module might be used to compress data before save it to localStorage.

    localStorage has a limit of 10 MB (sometimes 5 MB or even 2.5 MB)
    TODO: localStorageAvailableBytes()

    TODO: compressBlob() / decompressBlob()

    Exports:

        async compressJSON(input: Object) -- return: String -- compress JSON-object to gzipped base64-string
        async compressString(input: String) -- return: String -- compress string to gzipped base64-string

        async decompressJSON(input: String) -- return: Object -- decompress base64-string to JSON-object
        async decompressString(input: String) -- return: String -- decompress base64-string to string
    
    Tested on Latin and Utf8 strings, GPX and JSON files.

    Performance notes (tested on CPU i5-8365U with node.js engine on ~600 MB GPX-tracks-data):
    
        compress+decompress using CompressionStream API: ~17 Mb/s
        compress+decompress using 'pako.js': ~12 Mb/s (~30% slower)
        compress+decompress using Linux gzip/gunzip: ~43 MB/s (triple faster)
*/

export async function compressJSON(obj) {
    return compressToBase64(JSON.stringify(obj));
}

export async function compressString(str) {
    return compressToBase64(str);
}

export async function decompressJSON(str) {
    return JSON.parse(await decompressFromBase64(str));
}

export async function decompressString(str) {
    return decompressFromBase64(str);
}

async function compressToBase64(input) {
    /*
        input: String (uncompressed data)

        return: String (compressed data wrapped with base64)

        pako notes:
            u8toBytes() used to chunk-convert uint-array to binary string
    */

    try { // faster (native)
        const cs = new CompressionStream('gzip');

        const w = cs.writable.getWriter();
        w.write(input);
        w.close();

        const output = [];
        const r = cs.readable.getReader();

        while(1) {
            const { value, done } = await r.read();
            if (done || typeof value === 'undefined') {
                break;
            }
            output.push(u8toBytes(value));
        }

        return btoa(output.join(''));
    } catch { // slower (pako)
        return btoa(u8toBytes(gzip(input)));
    }
}

async function decompressFromBase64(base64string) {
    /*
        base64string: String (compressed/wrapped data)

        return: String (uncompressed data)

        pako notes:
            Uint8Array.from() used because ungzip requires Array not String
            ungzip() called with {to=string} option, so resulted as String not Array
    */
    try { // faster (native)
        const cs = new DecompressionStream('gzip');

        const w = cs.writable.getWriter();
        w.write(Uint8Array.from(atob(base64string), c => c.charCodeAt(0)));
        w.close();

        const r = cs.readable.getReader();

        const output = [];
        // let output = new Uint8Array(0);

        while(1) {
            const { value, done } = await r.read();
            if (done || typeof value === 'undefined') {
                break;
            }
            output.push(value);
        }

        let total = 0;
        output.forEach(x => total += x.length);

        let i = 0;
        const u8a = new Uint8Array(total);
        output.forEach((x) => { u8a.set(x, i); i += x.length; });

        return u8toUtf8(u8a);
    } catch { // slower (pako)
        return ungzip(Uint8Array.from(atob(base64string), c => c.charCodeAt(0)), { to: 'string' });
    }
}

// convert Uint8Array to String as is (byte by byte)
// use this helper when you need to pass binary data
// apply() might cause stack overflow, so chunks help
function u8toBytes(u8a) {
    const c = [];
    const CHUNK_SZ = 0x8000;
    for (let i = 0; i < u8a.length; i += CHUNK_SZ) {
        c.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SZ)));
    }
    return c.join('');
}

// convert Uint8Array to Utf8 String using Encoding
// use this helper to encode String after decompression
function u8toUtf8(u8a) {
    return new TextDecoder().decode(u8a);
}

// CompressionStream = DecompressionStream = null; // debug try-catch