import { deleteTrack } from '../util.mjs';

export default async function test(tracks) {
    for (let i = 0; i < tracks.length; i++) {
        const { name } = tracks[i];
        await deleteTrack(name);
    }
}
