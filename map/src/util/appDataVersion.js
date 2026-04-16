export const APP_DATA_VERSION = 3;
export const FAVORITES_IDB_DATA_VERSION = 3;
export const TRACKS_IDB_DATA_VERSION = 4;

export const IDB_VERSION_APP = 'app';
export const IDB_VERSION_FAVORITES = 'favorites';
export const IDB_VERSION_LOCAL_TRACKS = 'local_tracks';

export const IDB_VERSIONS_STORAGE_KEY = 'osmand_idb_data_versions';

export const FAVORITES_DB_NAME = 'OsmAndDB';
export const TRACKS_DB_NAME = 'TracksDB';

export async function ensureAppDataVersion() {
    if (typeof localStorage === 'undefined') {
        return;
    }

    const state = loadPersistedVersionState();

    if (state?.[IDB_VERSION_APP] !== APP_DATA_VERSION) {
        try {
            await deleteBothAppDatabases();
            writeState(defaultState());
        } catch (e) {
            console.error('appDataVersion: failed to clear IndexedDB (full reset)', e);
        }
        return;
    }

    await clearIndexedDbIfVersionOutdated(IDB_VERSION_FAVORITES, FAVORITES_IDB_DATA_VERSION, FAVORITES_DB_NAME);
    await clearIndexedDbIfVersionOutdated(IDB_VERSION_LOCAL_TRACKS, TRACKS_IDB_DATA_VERSION, TRACKS_DB_NAME);
}

function deleteDatabase(name) {
    return new Promise((resolve, reject) => {
        if (typeof indexedDB === 'undefined') {
            resolve();
            return;
        }
        const req = indexedDB.deleteDatabase(name);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
        req.onblocked = () => {};
    });
}

function deleteBothAppDatabases() {
    return Promise.all([deleteDatabase(FAVORITES_DB_NAME), deleteDatabase(TRACKS_DB_NAME)]);
}

function defaultState() {
    return {
        [IDB_VERSION_APP]: APP_DATA_VERSION,
        [IDB_VERSION_FAVORITES]: FAVORITES_IDB_DATA_VERSION,
        [IDB_VERSION_LOCAL_TRACKS]: TRACKS_IDB_DATA_VERSION,
    };
}

function writeState(state) {
    localStorage.setItem(IDB_VERSIONS_STORAGE_KEY, JSON.stringify(state));
}

function parseState(raw) {
    try {
        const o = JSON.parse(raw);
        if (typeof o !== 'object' || o === null) {
            return null;
        }
        const app = Number(o[IDB_VERSION_APP]);
        const favorites = Number(o[IDB_VERSION_FAVORITES]);
        const localTracksVersion = Number(o[IDB_VERSION_LOCAL_TRACKS]);
        if (!Number.isFinite(app) || !Number.isFinite(favorites) || !Number.isFinite(localTracksVersion)) {
            return null;
        }
        return {
            [IDB_VERSION_APP]: app,
            [IDB_VERSION_FAVORITES]: favorites,
            [IDB_VERSION_LOCAL_TRACKS]: localTracksVersion,
        };
    } catch {
        return null;
    }
}

function loadPersistedVersionState() {
    const raw = localStorage.getItem(IDB_VERSIONS_STORAGE_KEY);
    const parsed = raw ? parseState(raw) : null;
    if (parsed) {
        return parsed;
    }
    if (raw) {
        localStorage.removeItem(IDB_VERSIONS_STORAGE_KEY);
    }
    return null;
}

async function clearIndexedDbIfVersionOutdated(versionField, codeVersion, dbName) {
    const raw = localStorage.getItem(IDB_VERSIONS_STORAGE_KEY);
    const persisted = parseState(raw) ?? defaultState();
    if (persisted[versionField] === codeVersion) {
        return;
    }
    try {
        await deleteDatabase(dbName);
        writeState({ ...persisted, [versionField]: codeVersion });
    } catch (e) {
        console.error(`appDataVersion: failed to clear IndexedDB (${versionField})`, e);
    }
}
