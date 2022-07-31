
function resetAllSelectedTracks(tracks) {
    tracks.forEach(function (track) {
        track.selected = false;
    })
}

function getTrackByIndex(tracks, index) {
    tracks.forEach(function (track, i) {
        track.selected = i === index;
    })
}

const DrawerUtils = {
    resetAllSelectedTracks,
    getTrackByIndex
};

export default DrawerUtils;