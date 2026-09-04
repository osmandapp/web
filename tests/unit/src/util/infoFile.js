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

/** Read what the app has actually uploaded to /mapapi/update-info (gzipped JSON inside FormData). */
export async function readUploadedInfo(apiPost, endpoint = '/mapapi/update-info') {
    const { url, body, options } = findRequest(apiPost, endpoint);
    const buffer = await readBlob(body.get('file'));
    const info = JSON.parse(gunzipSync(Buffer.from(buffer)).toString('utf-8'));

    return { url, params: options.params, info };
}
