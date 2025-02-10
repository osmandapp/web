export function trackWasChanged(localTracks, track) {
    return localTracks.find((t) => t.name === track.name)?.updated;
}

export function isNewTrack(localTracks, track) {
    return !localTracks.find((t) => t.name === track.name);
}