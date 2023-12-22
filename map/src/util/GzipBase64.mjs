import { gzip, ungzip } from 'pako';

/*
    TODO: localStorageAvailableBytes()
    TODO: compressBlob() / decompressBlob()
    TODO: apply native Compression API (again)

    Exports:

        async compressFromJSON(input: Object) -- return: String -- compress JSON-object to gzipped base64-string
        async compressFromString(input: String) -- return: String -- compress string to gzipped base64-string

        async decompressToJSON(input: String) -- return: Object -- decompress base64-string to JSON-object
        async decompressToString(input: String) -- return: String -- decompress base64-string to string

*/

export async function compressFromJSON(obj) {
    return compressToBase64(JSON.stringify(obj));
}

export async function compressFromString(str) {
    return compressToBase64(str);
}

export async function decompressToJSON(str) {
    if (str) {
        return JSON.parse(await decompressFromBase64(str));
    } else {
        return null;
    }
}

export async function decompressToString(str) {
    return decompressFromBase64(str);
}

async function compressToBase64(input) {
    /*
        input: String (uncompressed data)

        return: String (compressed data wrapped with base64)

        pako notes:
            u8toBytes() used to chunk-convert uint-array to binary string
    */

    return btoa(u8toBytes(gzip(input)));
}

async function decompressFromBase64(base64string) {
    /*
        base64string: String (compressed/wrapped data)

        return: String (uncompressed data)

        pako notes:
            Uint8Array.from() used because ungzip requires Array not String
            ungzip() called with {to=string} option, so resulted as String not Array
    */
    return ungzip(
        Uint8Array.from(atob(base64string), (c) => c.charCodeAt(0)),
        { to: 'string' }
    );
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
// function u8toUtf8(u8a) {
//     return new TextDecoder().decode(u8a);
// }
