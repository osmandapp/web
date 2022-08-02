function unselectedTrack(tracks, track) {
    tracks[track.index].selected = false;
}

function selectedTrack(tracks, index) {
    tracks[index].selected = true;
}

function saveToLocalStorage(tracks) {
    if (tracks.length > 0) {
        let res = [];
        tracks.forEach(function (track) {
            res.push({name: track.name, points: track.points, selected: false, gpx: track.gpx})
        })
        localStorage.setItem('createdTracks', JSON.stringify(res));
    }
}

const CreatedTrackUtils = {
    selectedTrack,
    unselectedTrack,
    saveToLocalStorage
};

export default CreatedTrackUtils;