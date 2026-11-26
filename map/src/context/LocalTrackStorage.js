import { addDistance, NAN_MARKER, prepareLocalTrack, TRACK_VISIBLE_FLAG } from '../manager/track/TracksManager';
import { TRACKS_DB_NAME } from '../util/appDataVersion';

const STORE_NAME = 'local_tracks';

const savedDataByTrack = new WeakMap();

const DEBUG = false;

// create indexedDB
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(TRACKS_DB_NAME, 1);

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

async function replaceAllTracksInDB(records) {
    const db = await openDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        store.clear();
        records.forEach((record) => store.put(record));

        transaction.oncomplete = () => {
            DEBUG && console.log(`✅ Tracks replaced in DB: ${records.length}`);
            resolve(true);
        };
        transaction.onabort = () => {
            DEBUG && console.error(`❌ Error replacing tracks in DB`);
            reject('Error replacing tracks in DB');
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
            const sorted = [...request.result].sort((a, b) => Number(a.id) - Number(b.id));
            for (const record of sorted) {
                try {
                    const json = record.data;
                    if (!json || typeof json.name !== 'string' || json.name.trim() === '') {
                        DEBUG && console.error('Invalid or nameless local track skipped, old id', record.id);
                        continue;
                    }
                    fixNanEleWpt(json);
                    json.analysisPoints = json.points;
                    localTracks.push(json);
                    DEBUG && console.log('Loaded local track (old id ' + record.id + '):', json.name);
                } catch {
                    DEBUG && console.error('Error loading track', record.id);
                }
            }
            localTracks = openVisibleTracks(localTracks); // mark visible
            try {
                await updateStoredLocalTracks(localTracks);
            } catch (e) {
                DEBUG && console.error('Failed to compact local tracks DB after load', e);
            }
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

export function saveTrackToLocalStorage({ ctx, track, writeToDB = true }) {
    const localTracks = ctx.localTracks;
    if (!track?.name) {
        ctx.setRoutingErrorMsg('⚠️ Cannot save nameless local track.');
        return;
    }
    let currentTrackIndex = localTracks.findIndex((t) => t?.name && track?.name && t.name === track.name);
    const savedBefore = savedDataByTrack.get(localTracks[currentTrackIndex]);
    const copy = { ...track };

    if (currentTrackIndex === -1) {
        currentTrackIndex = localTracks.push(copy) - 1;
        ctx.setLocalTracks([...localTracks]);
    } else {
        localTracks[currentTrackIndex] = copy;
    }
    if (!writeToDB) {
        return;
    }

    const res = prepareLocalTrack(track);
    const savedData = getSavedData(track, res);
    savedDataByTrack.set(copy, savedData);
    if (isSameSavedData(savedBefore, savedData)) {
        return;
    }

    saveTrackToDB(currentTrackIndex, res)
        .then()
        .catch(() =>
            ctx.setRoutingErrorMsg('⚠️ Failed to save the local track. Please check your storage space or try again.')
        );
}

function getSavedData(track, record) {
    return {
        points: track.points,
        analysis: track.analysis,
        fields: JSON.stringify({ ...record, points: undefined, analysis: undefined }),
    };
}

function isSameSavedData(saved, data) {
    if (!saved) {
        return false;
    }

    return saved.points === data.points && saved.analysis === data.analysis && saved.fields === data.fields;
}

async function updateStoredLocalTracks(tracks) {
    const records = [];
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        if (!track?.name || typeof track.name !== 'string' || track.name.trim() === '') {
            continue;
        }
        const res = prepareLocalTrack(track);
        if (res?.name) {
            records.push({ id: i, data: res });
        }
    }
    await replaceAllTracksInDB(records);
}

export function deleteLocalTrack(ctx, index = -1) {
    const currentTrackIndex =
        index !== -1 ? index : ctx.localTracks.findIndex((t) => t?.name === ctx.selectedGpxFile?.name);
    if (currentTrackIndex !== -1) {
        deleteLocalTracksByIndexes(ctx, [currentTrackIndex]);
    }
}

export function deleteLocalTracksByIndexes(ctx, indexes = []) {
    if (!indexes?.length) return;

    const toDelete = new Set([...indexes].filter((n) => Number.isInteger(n) && n >= 0));

    ctx.setLocalTracks((prev) => {
        // { oldId, newId, track }
        const moves = [];

        const next = [];

        for (let oldId = 0; oldId < prev.length; oldId++) {
            if (toDelete.has(oldId)) continue; // skip deleted

            const track = prev[oldId];
            const newId = next.length; // position in the new array
            next.push(track);

            if (newId !== oldId) {
                moves.push({ oldId, newId, track });
            }
        }

        (async () => {
            try {
                // save moved tracks with new ids
                for (const { newId, track } of moves) {
                    const res = prepareLocalTrack(track);
                    if (res) {
                        await saveTrackToDB(newId, res);
                    }
                }

                // the ids past the new length are free after the tracks left were saved over the first ones
                for (let id = next.length; id < prev.length; id++) {
                    await deleteTrackFromDB(id);
                }
            } catch (e) {
                DEBUG && console.error('Failed to delete selected local tracks', e);
            }
        })();

        return next;
    });
}

export function clearAllLocalTracks(ctx) {
    let localTracks = ctx.localTracks;
    localTracks = localTracks.filter((t, idx) => {
        if (!t?.name) {
            deleteTrackFromDB(idx).then(() => {
                DEBUG && console.log(`Removed nameless local track at index ${idx}`);
            });
            return false;
        }
        return true;
    });

    if (localTracks.find((t) => t?.name === ctx.selectedGpxFile?.name)) {
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
                if (f?.name === local.name) {
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
