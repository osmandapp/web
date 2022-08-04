function loadTracks() {
    return localStorage.getItem('localClientsTracks') !== null ? JSON.parse(localStorage.getItem('localClientsTracks')) : [];
}

function saveTracks(tracks) {
    if (tracks.length > 0) {
        let res = [];
        tracks.forEach(function (track) {
            res.push({name: track.name, points: track.points, selected: false, gpx: track.gpx})
        })
        localStorage.setItem('localClientsTracks', JSON.stringify(res));
    }
}

const LocalTracksStorage = {
    loadTracks,
    saveTracks
};

export default LocalTracksStorage;