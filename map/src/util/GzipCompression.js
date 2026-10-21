import { gzip } from 'pako';

/*
    Binary compression utilities using pako (gzip)

    Exports:
    
        compressJSONToBlob(input: Object) -- return: Blob -- compress JSON-object to gzipped binary blob
        compressStringToBlob(input: String) -- return: Blob -- compress string to gzipped binary blob
        compressFileToBlob(input: File) -- return: Promise<Blob> -- compress file contents to gzipped binary blob
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
 * Compress the contents of a file to a gzipped Blob
 * @param {File} file - File to compress
 * @returns {Promise<Blob>} - Compressed binary blob with type 'application/gzip'
 */
export async function compressFileToBlob(file) {
    return compressToBlob(new Uint8Array(await file.arrayBuffer()));
}

/**
 * Internal function to compress string or binary data to a Blob
 * @param {string|Uint8Array} input - Data to compress
 * @returns {Blob} - Compressed binary blob
 */
function compressToBlob(input) {
    const compressed = gzip(input);
    return new Blob([compressed], { type: 'application/gzip' });
}
