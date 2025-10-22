import { gzip } from 'pako';

/*
    Binary compression utilities using pako (gzip)

    Exports:
    
        compressJSONToBlob(input: Object) -- return: Blob -- compress JSON-object to gzipped binary blob
        compressStringToBlob(input: String) -- return: Blob -- compress string to gzipped binary blob
*/

/**
 * Compress a JSON object to a gzipped Blob
 * @param {Object} obj - JSON object to compress
 * @returns {Blob} - Compressed binary blob with type 'application/gzip'
 */
export function compressJSONToBlob(obj) {
    return compressToBlob(JSON.stringify(obj));
}

/**
 * Compress a string to a gzipped Blob
 * @param {string} str - String to compress
 * @returns {Blob} - Compressed binary blob with type 'application/gzip'
 */
export function compressStringToBlob(str) {
    return compressToBlob(str);
}

/**
 * Internal function to compress string data to a Blob
 * @param {string} input - String data to compress
 * @returns {Blob} - Compressed binary blob
 */
function compressToBlob(input) {
    const compressed = gzip(input);
    return new Blob([compressed], { type: 'application/gzip' });
}
