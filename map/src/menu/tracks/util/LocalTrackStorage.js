import { addDistance, NAN_MARKER, prepareLocalTrack, TRACK_VISIBLE_FLAG } from '../../../manager/track/TracksManager';
import _ from 'lodash';

const DB_NAME = 'TracksDB';
const STORE_NAME = 'local_tracks';

const DEBUG = false;

// create indexedDB
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        };

        request.onsuccess = function (event) {
            resolve(event.target.result);
        };

        request.onerror = function (event) {
            reject('IndexedDB error: ' + event.target.error);
        };
    });
}

function getTrackFromDB(id) {
    return new Promise(async (resolve, reject) => {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(id);

        request.onsuccess = () => {
            DEBUG && console.log(`✅ Track loaded from DB: ID = ${id}`);
            resolve(request.result?.data || null);
        };
        request.onerror = () => {
            DEBUG && console.error(`❌ Error getting track from DB: ID = ${id}`);
            reject('Error getting track from DB');
        };
    });
}

function saveTrackToDB(id, data) {
    return new Promise(async (resolve, reject) => {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put({ id, data });

        request.onsuccess = () => {
            DEBUG && console.log(`✅ Track saved in DB: ID = ${id}, Size = ${data.length}`);
            resolve(true);
        };
        request.onerror = () => {
            DEBUG && console.error(`❌ Error saving track to DB: ID = ${id}`);
            reject('Error saving track to DB');
        };
    });
}

function deleteTrackFromDB(id) {
    return new Promise(async (resolve, reject) => {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(id);

        request.onsuccess = () => {
            DEBUG && console.log(`🗑️ Track deleted from DB: ID = ${id}`);
            resolve(true);
        };
        request.onerror = () => {
            DEBUG && console.error(`❌ Error deleting track from DB: ID = ${id}`);
            reject('Error deleting track from DB');
        };
    });
}

function deleteAllTracksFromDB() {
    return new Promise(async (resolve, reject) => {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.clear();

        request.onsuccess = () => {
            DEBUG && console.log(`🧹 All tracks cleared from DB`);
            resolve(true);
        };
        request.onerror = () => {
            DEBUG && console.error(`❌ Error clearing tracks from DB`);
            reject('Error clearing tracks from DB');
        };
    });
}

export async function loadLocalTracksFromStorage(setLoading) {
    let localTracks = [];
    setLoading(true);

    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    return new Promise((resolve) => {
        request.onsuccess = async function () {
            for (let record of request.result) {
                try {
                    const json = record.data;
                    if (json) {
                        fixNanEleWpt(json);
                        localTracks[record.id] = json;
                        DEBUG && console.log(`✅ Loaded Track ID = ${record.id}:`, json);
                    } else {
                        DEBUG && console.error(`⚠️ Empty track found: ${record.id}`);
                        await deleteTrackFromDB(record.id);
                    }
                } catch {
                    DEBUG && console.error(`❌ Error decompressing track: ${record.id}`);
                    await deleteTrackFromDB(record.id);
                }
            }
            localTracks = fixLocalTracks(localTracks); // fix holes
            localTracks = openVisibleTracks(localTracks); // mark visible
            setLoading(false);
            resolve(localTracks);
        };
        request.onerror = function () {
            DEBUG && console.error(`❌ Error loading tracks from DB`);
            setLoading(false);
            resolve([]);
        };
    });
}

export function saveTrackToLocalStorage({ ctx, track }) {
    const localTracks = ctx.localTracks;
    let currentTrackIndex = localTracks.findIndex((t) => t.name === track.name);

    if (currentTrackIndex === -1) {
        currentTrackIndex = localTracks.push(track) - 1;
        ctx.setLocalTracks([...localTracks]);
    }

    const res = prepareLocalTrack(track);
    saveTrackToDB(currentTrackIndex, res).then();
}

async function updateStoredLocalTracks(tracks) {
    for (let track of tracks) {
        let res = prepareLocalTrack(track);
        if (res) {
            await deleteAllTracksFromDB();
            await saveTrackToDB(_.indexOf(tracks, track), res);
        }
    }
}

export function deleteLocalTrack(ctx) {
    const currentTrackIndex = ctx.localTracks.findIndex((t) => t.name === ctx.selectedGpxFile.name);
    if (currentTrackIndex !== -1) {
        deleteTrackFromDB(currentTrackIndex).then(() => {
            ctx.localTracks.splice(currentTrackIndex, 1);
            ctx.setLocalTracks([...ctx.localTracks]);
        });
    }
}

export function clearAllLocalTracks(ctx) {
    if (ctx.localTracks.find((t) => t.name === ctx.selectedGpxFile.name)) {
        ctx.setSelectedGpxFile({});
    }
    ctx.setLocalTracks([]);
    deleteAllTracksFromDB().then();
}

function fixLocalTracks(localTracks) {
    if (localTracks && localTracks.length !== Object.keys(localTracks).length) {
        DEBUG && console.error('loadTracks localTrack_0 (hole) localTrack_X workaround');
        const fixTracks = [];
        localTracks.forEach((t) => fixTracks.push(t));
        updateStoredLocalTracks(fixTracks).then();
        localTracks = fixTracks;
    }
    return localTracks;
}

function openVisibleTracks(localTracks) {
    let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
    if (savedVisible?.local) {
        for (const local of savedVisible.local) {
            for (let f of localTracks) {
                if (f.name === local.name) {
                    if (Date.now() - local.addTime < HOURS_24_MS) {
                        addDistance(f); // recalc-distance-local-visible
                        f.selected = true;
                    } else {
                        f.selected = false;
                    }
                }
            }
        }
    }
    return localTracks;
}

function fixNanEleWpt(obj) {
    obj.wpts?.forEach((wpt) => {
        if (wpt?.ele === NAN_MARKER) {
            wpt.ele = null;
        }
        if (wpt?.ext?.ele === NAN_MARKER) {
            wpt.ext.ele = null;
        }
    });
}
