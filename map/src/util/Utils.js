import LinearScaleIcon from "@mui/icons-material/LinearScale";
import React from "react";
import TracksManager from "../context/TracksManager";
import { apiGet } from '../login/HttpApiLogout';

async function getFileData(file) {
    let trackData;
    if (file.url.substr(0, 1) === '<') { // direct XML has to start with a <
        trackData = file.url;
    } else {
        let response = await apiGet(file.url, file.urlopts ? file.urlopts : {});
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
                list[index].distance = 0
                list[index].distanceFromStart = 0
            } else {
                let d = getDistance(list[index].lat, list[index].lng, list[index - 1].lat, list[index - 1].lng);
                dist += d;
                list[index].distance = d;
                list[index].distanceFromStart = dist;
            }
        }
    }
    return list;
}

function hexToArgb(hex) {
    hex = hex.replace(/^#/, '');
    let alphaFromHex = 1;

    if (hex.length === 8) {
        alphaFromHex = Number.parseInt(hex.slice(0, 2), 16) / 255;
        hex = hex.slice(2, 8);
    }
    const number = Number.parseInt(hex, 16);
    const red = number >> 16;
    const green = (number >> 8) & 255;
    const blue = number & 255;
    const alpha = alphaFromHex;
    const alphaString = alpha === 1 ? '' : ` / ${Number((alpha * 100).toFixed(2))}%`;
    return `rgb(${red} ${green} ${blue}${alphaString})`;
}

function getProfileIcon(profile, color) {
    if (profile === TracksManager.PROFILE_LINE) {
        return <LinearScaleIcon sx={{ color: color }} fontSize="small"/>
    } else {
        return <img color={color}
                    src={"/map/images/profile_icons/" + profile + ".svg"} height={25} width={25} alt={profile}/>
    }
}

// get: current Object
// set: function setVariabe
// todo: Object to merge with current
// used to update React useState object
// returns merged Object for instant use
// example: mergeStateObject(routeProvider, setRouteProvider, { name: 'osmand' })
export function mergeStateObject(get, set, todo) {
    const merged = Object.assign({}, get, todo);
    set(() => merged); // is really need => ?
    // console.log(merged);
    return merged;
}

/*
    Prepare string with NaN(s) before JSON.parse()

    1) "ele":NaN is converted to "ele":NAN_MARKER
    2) all others NaN are converted to null

    NaN isn't supported by JSON standard
*/
export function quickNaNfix(bad) {
    const ele = '"ele":' + TracksManager.NAN_MARKER; // "ele" to NAN_MARKER (99999)
    const nil = ':null'; // others to null
    // console.log('NaN', bad);
    
    return bad
        .replace(/"ele": ?NaN\b/g, ele)
        .replace(/: ?NaN\b/g, nil);
}

const Utils = {
    // fetchUtil,
    // fetchUtilLoad,
    getFileData,
    getDistance,
    getPointsDist,
    hexToArgb,
    getProfileIcon
};

export default Utils;