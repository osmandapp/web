import { gunzipSync } from 'node:zlib';
import { findRequest } from './requests';

/** jsdom Blob has no arrayBuffer() */
function readBlob(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
    });
}

/** Read the gzipped JSON the app has sent as a request body. */
export async function readGzipJson(blob) {
    const buffer = await readBlob(blob);

    return JSON.parse(gunzipSync(Buffer.from(buffer)).toString('utf-8'));
}

/** Read what the app has actually uploaded to /mapapi/update-info (gzipped JSON inside FormData). */
export async function readUploadedInfo(apiPost, endpoint = '/mapapi/update-info') {
    const { url, body, options } = findRequest(apiPost, endpoint);
    const info = await readGzipJson(body.get('file'));

    return { url, params: options.params, info };
}
