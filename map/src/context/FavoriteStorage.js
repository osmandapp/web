const DB_NAME = 'OsmAndDB';
const STORE_NAME = 'favorites';
const DEBUG = false;

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

export function getFavoriteFromDB(id) {
    return new Promise(async (resolve, reject) => {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(id);

        request.onsuccess = () => {
            DEBUG && console.log(`✅ Favorite loaded from DB: ID = ${id}`);
            resolve(request.result?.data || null);
        };
        request.onerror = () => {
            DEBUG && console.error(`❌ Error getting favorite from DB: ID = ${id}`);
            reject('Error getting favorite from DB');
        };
    });
}

export function saveFavoriteToDB(id, data) {
    return new Promise(async (resolve, reject) => {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put({ id, data });

        request.onsuccess = () => {
            DEBUG && console.log(`✅ Favorite saved in DB: ID = ${id}`);
            resolve(true);
        };
        request.onerror = () => {
            DEBUG && console.error(`❌ Error saving favorite to DB: ID = ${id}`);
            reject('Error saving favorite to DB');
        };
    });
}

export function deleteFavoriteFromDB(id) {
    return new Promise(async (resolve, reject) => {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(id);

        request.onsuccess = () => {
            DEBUG && console.log(`🗑️ Favorite deleted from DB: ID = ${id}`);
            resolve(true);
        };
        request.onerror = () => {
            DEBUG && console.error(`❌ Error deleting favorite from DB: ID = ${id}`);
            reject('Error deleting favorite from DB');
        };
    });
}

export function deleteAllFavoritesFromDB() {
    return new Promise(async (resolve, reject) => {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.clear();

        request.onsuccess = () => {
            DEBUG && console.log(`🧹 All favorites cleared from DB`);
            resolve(true);
        };
        request.onerror = () => {
            DEBUG && console.error(`❌ Error clearing favorites from DB`);
            reject('Error clearing favorites from DB');
        };
    });
}

export async function loadFavoritesFromStorage(setLoading) {
    let favorites = [];
    setLoading(true);

    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    return new Promise((resolve) => {
        request.onsuccess = function () {
            favorites = request.result.map((record) => record.data);
            setLoading(false);
            resolve(favorites);
        };
        request.onerror = function () {
            DEBUG && console.error(`❌ Error loading favorites from DB`);
            setLoading(false);
            resolve([]);
        };
    });
}
