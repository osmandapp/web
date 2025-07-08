import { NAN_MARKER } from '../manager/track/TracksManager';
import { apiGet } from '../util/HttpApi';
import { useState } from 'react';

/**
 * seleniumUpdateActivity()
 *
 * Update global Activity Timestamp for Selenium.
 * Timestamp is used by Selenium to detect site's idle.
 * Call this function at begin/end of heavy/long/regular process.
 * Example: AppContext and httpApi are main candidates to be "timestamped".
 */
export function seleniumUpdateActivity() {
    window.seActivityTimestamp = Date.now();
}

/**
 * effectDebouncer() used to release render-ticks in UI-thread
 *
 * Example:
 *
 * const timer = useRef(null);
 * const [trigger, setTrigger] = useState(0);
 * useEffect(effectDebouncer(...), [..., trigger]);
 *
 * trigger will be activated by setTimeout to invoke useEffect
 *
 * effect() should return false if there is nothing done
 * timer/setTrigger won't be activated if effect() return false
 */
export function effectDebouncer({ delay, timerRef, setTrigger, effect }) {
    if (timerRef.current <= 0) {
        if (effect()) {
            timerRef.current = setTimeout(() => {
                timerRef.current = null; // reset timer for next run
                setTrigger((o) => o + 1); // increase trigger (invoke useEffect)
            }, delay);
        }
    }
}

/**
 * Mutation-compatible wrapper over useState(object)
 * Create object copy -> Apply callback() -> Call setter()
 *
 * Example:
 *
 * const [showPoints, mutateShowPoints] = useMutator({ points: true, wpts: true });
 *
 * mutateShowPoints((next) => (next.points = !next.points)) // functional way
 * mutateShowPoints({ points: true, wpts: true }) // classic way supported
 */
export function useMutator(init) {
    const [state, setter] = useState(init);
    const mutator = (update) => {
        if (update && typeof update === 'function') {
            setter((previous) => {
                const proto = (instance) => Object.create(Object.getPrototypeOf(instance));
                const next = Object.assign(proto(previous), previous);
                update(next); // callback
                return next;
            });
            return;
        } else {
            setter(() => update);
        }
    };
    return [state, mutator, setter];
}

async function getFileData(file) {
    let trackData;
    if (file.url.substr(0, 1) === '<') {
        // direct XML has to start with a <
        trackData = file.url;
    } else {
        const response = await apiGet(file.url, file.urlopts ? file.urlopts : {});
        if (response.ok) {
            trackData = await response.text();
        } else {
            trackData = '<gpx version="1.1" />';
        }
    }
    return trackData;
}

// get .info json
async function getFileInfo(file) {
    let info;
    const response = await apiGet(file.infoUrl, {});
    if (response.ok) {
        if (response.data?.length > 0) {
            info = await response.json();
        }
    }
    return info;
}

export const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6372.8; // for haversine use R = 6372.8 km instead of 6371 km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const sinHalfLat = Math.sin(dLat / 2);
    const sinHalfLon = Math.sin(dLon / 2);
    const a = sinHalfLat * sinHalfLat + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * sinHalfLon * sinHalfLon;
    // return parseFloat(Number(2 * R * 1000 * Math.asin(Math.sqrt(a))).toFixed(2)); // precision 1 cm (slow - avoid it)
    return 2 * R * 1000 * Math.asin(Math.sqrt(a));
};

export const getBearing = (fromLat, fromLng, toLat, toLng) => {
    const toDeg = (r) => (r * 180) / Math.PI;
    const lat1 = toRadians(fromLat),
        lat2 = toRadians(toLat),
        dLng = toRadians(toLng - fromLng);
    const y = Math.sin(dLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);

    return (toDeg(Math.atan2(y, x)) + 360) % 360; // clockwise degrees
};

const toRadians = (angdeg) => {
    return (angdeg / 180.0) * Math.PI;
};

function getPointsDist(list) {
    let dist = 0;
    if (list.length > 0) {
        for (let index = 0; index < list.length; ++index) {
            if (index === 0) {
                list[index].distance = 0;
                list[index].distanceSegment = 0;
            } else {
                let d = getDistance(list[index].lat, list[index].lng, list[index - 1].lat, list[index - 1].lng);
                dist += d;
                list[index].distance = d;
                list[index].distanceSegment = dist;
            }
        }
    }
    return list;
}

function hexToRgba(hex) {
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

function numberToRgba(argb) {
    // >>> 0 turns it into an unsigned 32-bit (e.g. -15679248)
    const u = argb >>> 0;
    const a = (u >>> 24) & 0xff;
    const r = (u >>> 16) & 0xff;
    const g = (u >>> 8) & 0xff;
    const b = u & 0xff;

    const alpha = a / 255;
    const alphaString = alpha === 1 ? '' : ` / ${(alpha * 100).toFixed(2)}%`;

    return `rgb(${r} ${g} ${b}${alphaString})`;
}

export function formatMeters(m) {
    if (m < 1000) {
        const meters = Number(m).toFixed(0);
        return `${meters} m`;
    } else {
        const km = Number(m / 1000).toFixed(2);
        return `${km} km`;
    }
}

export function toHHMMSS(time) {
    const timeInSeconds = time / 1000;
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    let seconds = (timeInSeconds - hours * 3600 - minutes * 60).toFixed(2);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
}

/*
    Prepare string with NaN/Infinity before JSON.parse()

    1) convert "ele":99999(.0)? (NAN_MARKER) to "ele":null
    2) convert all the :NaN to :null (incl."ele":NaN)
    3) *speed-Infinity is converted to null

    NaN and Infinity aren't supported by JSON standard
*/
export function quickNaNfix(badString) {
    const eleFixNaN = new RegExp('"ele": ?' + NAN_MARKER + '(.0)?\\b', 'g');
    const ele = '"ele":null'; // "ele":NAN_MARKER -> "ele":null
    const nil = ':null'; // all NaN(s) incl "ele":NaN -> null

    return badString
        .replace(eleFixNaN, ele)
        .replace(/: ?NaN\b/g, nil)
        .replace(/"speed": ?Infinity\b/g, '"speed":null')
        .replace(/"avgSpeed": ?Infinity\b/g, '"avgSpeed":null')
        .replace(/"maxSpeed": ?Infinity\b/g, '"maxSpeed":null');
}

/*
    Copy simple (JSON) objects, faster than _.cloneDeep()
    Don't use on objects with circular structure (such as layers)
*/
export function copyObj(obj) {
    return typeof obj === 'object' ? JSON.parse(JSON.stringify(obj)) : obj;
}

// Used ONLY when creating a new file
export function sanitizedFileName(filename, isFavoriteGroup = false) {
    const truncate = (sanitized, length) => {
        const uint8Array = new TextEncoder().encode(sanitized);
        const truncated = uint8Array.slice(0, length);
        return new TextDecoder().decode(truncated);
    };

    const newlineRe = /\n/g;
    // Note: It is allowed to use / in favorite file names
    const illegalRe = isFavoriteGroup ? /[\?<>\\\*\|"]/g : /[\/\?<>\\:\*\|"]/g;
    const controlRe = /[\x00-\x1f\x80-\x9f]/g;
    const reservedRe = /^\.+$/;
    const unixRe = /[\`\'\$\{\}\[\]\(\)]/g;
    const windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
    const spacesRe = / +/g;

    const empty = '';
    const space = ' ';

    return truncate(
        filename
            .replace(newlineRe, empty) // newline -> empty (better handle Enter key in inputs)
            .replace(illegalRe, space) // illegal chars in filename such as: / ? < > : * | "
            .replace(controlRe, space) // control chars (0x00-0x1F + second part of ASCII)
            .replace(reservedRe, space) // dot-only reserved names such as: . ..
            .replace(unixRe, space) // Unix better-to-avoid chars (' ` $, etc)
            .replace(windowsReservedRe, space) // Windows reserved filenames
            .replace(spacesRe, space) // finally, remove double-spaces
            .trim(), // drop start/finish spaces
        255
    );
}

/**
 * Measure performance of f() function.
 * Used internally for developing purposes only.
 *
 * By default, run f() in a cycle within 1000 ms duration.
 * Finally, calculate and log performance (runs per 1 second).
 *
 * Return result of the latest run of f()
 *
 * Examples:
 *
 * getPoints().forEach(...) // usual call
 * measure(getPoints).forEach(...) // measure performance
 *
 * const md5 = digest(string) // usual
 * const md5 = measure(() => digest(string), 'md5-test') // measure
 */
export function measure(f, tag, ms = 1000) {
    let counter = 0;
    let result = null;
    const started = Date.now();
    do {
        counter++;
        result = f();
    } while (Date.now() < started + ms);
    const delta = Date.now() - started;
    console.debug(
        tag ?? f.name,
        '~',
        parseFloat(Number(counter * (ms / delta) * (1000 / ms)).toFixed(2)),
        'per second'
    );
    return result;
}

export const isYesterday = (date) => {
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    return (
        date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear()
    );
};

export const isToday = (date) => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
};

export function areSetsEqual(set1, set2) {
    if (set1 === set2) {
        return true;
    }
    if (set1 === null || set2 === null) {
        return false;
    }
    if (set1.size !== set2.size) {
        return false;
    }
    for (let item of set1) {
        if (!set2.has(item)) {
            return false;
        }
    }
    return true;
}

export function createUrlParams(params) {
    let pretty = new URLSearchParams(Object.entries(params))
        .toString()
        .replaceAll('%2C', ',')
        .replaceAll('%3A', ':')
        .replaceAll('%3B', ';');
    if (Object.keys(pretty).length > 0) {
        pretty = '?' + pretty;
    }
    return pretty;
}

export function encodeString(str) {
    if (typeof str !== 'string') {
        console.error('Invalid input to encodeString:', str);
        return null;
    }
    try {
        const bytes = new TextEncoder().encode(str);
        return btoa(String.fromCharCode(...bytes));
    } catch (error) {
        console.error('Failed to encode string:', error);
        return null;
    }
}

export function decodeString(str) {
    try {
        const bytes = atob(str);
        return new TextDecoder().decode(Uint8Array.from(bytes, (c) => c.charCodeAt(0)));
    } catch (error) {
        console.error('Failed to decode string:', error);
        return null;
    }
}

const Utils = {
    getFileData,
    getFileInfo,
    getDistance,
    getBearing,
    getPointsDist,
    hexToRgba,
    numberToRgba,
};

export default Utils;
