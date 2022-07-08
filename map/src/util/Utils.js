async function fetchUtil(url, options) {

    const fetchData = async () => {
        return await fetch(url, options);
    };

    const response = await fetchData()
        .then(function (result) {
            return result;
        });

    if (response.redirected) {
        window.location.href = response.url;
    }

    return response;
}

async function fetchUtilLoad(url, options, setProgressVisible) {

    setProgressVisible(true);

    const fetchData = async () => {
        return await fetch(url, options);
    };

    const response = await fetchData()
        .then(function (result) {
            return result;
        });

    if (response.redirected) {
        setProgressVisible(false);
        window.location.href = response.url;
    }

    return response;
}

async function getFileData(file) {
    let trackData;
    if (file.url.substr(0, 1) === '<') { // direct XML has to start with a <
        trackData = file.url;
    } else {
        let response = await fetchUtil(file.url, file.urlopts ? file.urlopts : {});
        if (response.ok) {
            trackData = await response.text();
        } else {
            trackData = '<gpx version="1.1" />'
        }
    }
    return trackData;
}

const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6372.8; // for haversine use R = 6372.8 km instead of 6371 km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    //double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    //return R * c * 1000;
    // simplyfy haversine:
    return (2 * R * 1000 * Math.asin(Math.sqrt(a)));
}

const toRadians = (angdeg) => {
    return angdeg / 180.0 * Math.PI;
}

function getPointsDist(list) {
    let dist = 0;
    if (list.length > 0) {
        for (let index = 0; index < list.length; ++index) {
            if (index === 0) {
                list[index].dist = 0
            } else {
                let d = getDistance(list[index].lat, list[index].lng, list[index - 1].lat, list[index - 1].lng);
                dist += d;
                list[index].dist = dist;
            }
        }
    }
    return list;
}

function removeDuplicatesPoints(list) {
    return list.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.lat === value.lat && t.lng === value.lng
            ))
    )
}

async function uploadFile(gpxFiles, setGpxFiles, ctx, gpxLayer, file) {
    let formData = new FormData();
    formData.append('file', file);
    const response = await fetchUtil(`${process.env.REACT_APP_GPX_API}/gpx/upload-session-gpx`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    });
    if (response.ok) {
        let data = await response.json();
        let newinfo = Object.assign({}, gpxFiles);
        if (data.info) {
            gpxLayer.summary = data.info.analysis;
            gpxLayer.srtmSummary = data.info.srtmAnalysis;
        }
        newinfo[gpxLayer.name] = gpxLayer;
        gpxFiles[gpxLayer.name] = gpxLayer;
        setGpxFiles(newinfo);
        updateTextInfo(gpxFiles, ctx);
    } else {
        let message = await response.text();
        alert(message);
    }
}

function updateTextInfo(gpxFiles, ctx) {
    // Local GPX files: undefined tracks, NaN km, undefined wpts
    let dist = 0;
    let tracks = 0;
    let wpts = 0;
    Object.values(gpxFiles).forEach((item) => {
        if (item.local === true && item.summary) {
            if (item.summary.totalTracks) {
                tracks += item.summary.totalTracks;
            }
            if (item.summary.wptPoints) {
                wpts += item.summary.wptPoints;
            }
            if (item.summary.totalDistance) {
                dist += item.summary.totalDistance;
            }
        }
    });
    ctx.setAppText(`Local GPX files: ${tracks} tracks, ${(dist / 1000.0).toFixed(1)} km, ${wpts} wpts`)
}

export default {
    fetchUtil,
    fetchUtilLoad,
    getFileData,
    getDistance,
    getPointsDist,
    removeDuplicatesPoints,
    uploadFile
}