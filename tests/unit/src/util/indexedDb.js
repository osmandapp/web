/** Minimal indexedDB fake: records the names of the deleted databases. */
export function fakeIndexedDb() {
    const deleted = [];
    global.indexedDB = {
        deleteDatabase: (name) => {
            deleted.push(name);
            const request = {};
            // the caller assigns onsuccess after this returns, so fire it on the microtask queue
            queueMicrotask(() => request.onsuccess?.());

            return request;
        },
    };

    return deleted;
}

/**
 * indexedDB fake with one working object store, enough for the local tracks storage.
 * Returns the store itself as a Map of id -> record, to set it up and to read it back.
 */
export function fakeTracksDb(records = new Map()) {
    // the callers read the result either from the request itself or from the event
    const request = (result) => {
        const req = { result };
        queueMicrotask(() => req.onsuccess?.({ target: { result } }));

        return req;
    };

    const store = {
        get: (id) => request({ id, data: records.get(id) }),
        getAll: () => request([...records.entries()].map(([id, data]) => ({ id, data }))),
        put: ({ id, data }) => request(records.set(id, data)),
        delete: (id) => request(records.delete(id)),
        clear: () => request(records.clear()),
    };

    const db = {
        objectStoreNames: { contains: () => true },
        transaction: () => ({ objectStore: () => store }),
    };

    global.indexedDB = { open: () => request(db) };

    return records;
}

export function removeIndexedDb() {
    delete global.indexedDB;
}
