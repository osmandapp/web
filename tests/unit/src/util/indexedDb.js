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

export function removeIndexedDb() {
    delete global.indexedDB;
}
