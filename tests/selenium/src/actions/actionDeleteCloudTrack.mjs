import { deleteTrack } from '../lib.mjs';

export default async function test(tracks) {
    for (let i = 0; i < tracks.length; i++) {
        const { name } = tracks[i];
        await deleteTrack(name);
    }
}
