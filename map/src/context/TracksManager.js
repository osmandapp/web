import Utils from "../util/Utils";

function loadTracks() {
    return localStorage.getItem('localClientsTracks') !== null ? JSON.parse(localStorage.getItem('localClientsTracks')) : [];
}

function saveTracks(tracks) {
    if (tracks.length > 0) {
        let res = [];
        tracks.forEach(function (track) {
            res.push({
                name: track.name,
                points: track.points,
                selected: false,
                content: track.content,
                gpx: track.gpx,
                srtmSummary: track.srtmSummary,
                summary: track.summary
            })
        })
        localStorage.setItem('localClientsTracks', JSON.stringify(res));
    }
}

function generate(ctx) {
    let name = createName(ctx);
    let points = Utils.getPointsDist(createPoints());
    return {name: name, points: points}
}

function createName(ctx) {
    let date = new Date().toDateString();
    let count = 0;
    let name;
    let maxNumber = 0;
    ctx.localClientsTracks.forEach(t => {
        if (t.name.split(' - ')[0] === date) {
            let sp = parseInt(t.name.split(' - ')[1], 10);
            count++;
            if (sp > maxNumber) {
                maxNumber = sp;
            }
        }
    })
    name = count > 0 ? (date + ' - ' + (count + 1)) : date;
    ctx.localClientsTracks.forEach(t => {
        if (t.name === name) {
            name = date + ' - ' + (maxNumber + 1);
        }
    })

    return name;
}

function createPoints() {
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

    return points;
}

function getFileName(currentFile) {
    let file = Object.assign('', currentFile);
    return prepareName(file.name, file.local);
}

function prepareName(name, local) {
    name = name.replace(/.gpx/, '');
    if (name.includes('/')) {
        return name.split('/')[1]
    } else if (local && name.includes(':')) {
        return name.split(':')[1]
    } else {
        return name;
    }
}

const TracksManager = {
    loadTracks,
    saveTracks,
    generate,
    getFileName,
    prepareName
};

export default TracksManager;