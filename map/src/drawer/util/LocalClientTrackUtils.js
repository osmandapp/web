function unselectedTrack(tracks, track) {
    tracks[track.index].selected = false;
}

function unselectedAllTrack(tracks) {
    tracks.forEach(t => t.selected = false);
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
        localStorage.setItem('localClientsTracks', JSON.stringify(res));
    }
}

function generateNewTrack(ctx) {
    let name = new Date().toDateString();
    let count = 0;
    ctx.localClientsTracks.forEach(t => {
        if (t.name.split('(')[0] === name) {
            count++;
        }
    })
    if (count > 0) {
        name = name + '(' + count + ')';
    }

    let points = [];
    let prevPoint;
    for (let i = 1; i <= 10; i++) {
        let lat;
        let lng;
        if (!prevPoint) {
            lat = Math.floor(Math.random() * (Math.floor(48.305) - Math.ceil(51.543))) + Math.ceil(51.543);
            lng = Math.floor(Math.random() * (Math.floor(37.749) - Math.ceil(24.664))) + Math.ceil(24.664);
        } else {
            lat = Math.floor(Math.random() * (Math.floor(prevPoint.lat - 2) - Math.ceil(prevPoint.lat + 2))) + Math.ceil(prevPoint.lat + 2);
            lng = Math.floor(Math.random() * (Math.floor(prevPoint.lng - 2) - Math.ceil(prevPoint.lng + 2))) + Math.ceil(prevPoint.lng + 2);
        }
        prevPoint = {lat: lat, lng: lng};
        points.push({lat: lat, lng: lng})
    }

    return {name: name, points: points}
}

const LocalClientTrackUtils = {
    selectedTrack,
    unselectedTrack,
    unselectedAllTrack,
    saveToLocalStorage,
    generateNewTrack
};

export default LocalClientTrackUtils;