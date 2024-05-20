import { navigateHash } from '../lib.mjs';

export default async function test({ lat, lon, zoom }) {
    const hash = `#${zoom}/${lat.toFixed(5)}/${lon.toFixed(5)}`;
    await navigateHash(hash);
}