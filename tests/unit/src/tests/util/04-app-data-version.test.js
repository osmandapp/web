import {
    APP_DATA_VERSION,
    FAVORITES_DB_NAME,
    FAVORITES_IDB_DATA_VERSION,
    IDB_VERSIONS_STORAGE_KEY,
    IDB_VERSION_APP,
    IDB_VERSION_FAVORITES,
    IDB_VERSION_LOCAL_TRACKS,
    TRACKS_DB_NAME,
    TRACKS_IDB_DATA_VERSION,
    ensureAppDataVersion,
} from '@map/util/appDataVersion';
import { fakeIndexedDb, removeIndexedDb } from '../../util/indexedDb';

const CURRENT_STATE = {
    [IDB_VERSION_APP]: APP_DATA_VERSION,
    [IDB_VERSION_FAVORITES]: FAVORITES_IDB_DATA_VERSION,
    [IDB_VERSION_LOCAL_TRACKS]: TRACKS_IDB_DATA_VERSION,
};

let deleted;

function storedState() {
    return JSON.parse(localStorage.getItem(IDB_VERSIONS_STORAGE_KEY));
}

function setStoredState(value) {
    localStorage.setItem(IDB_VERSIONS_STORAGE_KEY, typeof value === 'string' ? value : JSON.stringify(value));
}

beforeEach(() => {
    localStorage.clear();
    deleted = fakeIndexedDb();
});

afterEach(() => {
    removeIndexedDb();
});

test('first run: both databases are cleared and the current versions are stored', async () => {
    await ensureAppDataVersion();

    expect(deleted).toEqual(expect.arrayContaining([FAVORITES_DB_NAME, TRACKS_DB_NAME]));
    expect(deleted).toHaveLength(2);
    expect(storedState()).toEqual(CURRENT_STATE);
});

test('everything is up to date: nothing is cleared', async () => {
    setStoredState(CURRENT_STATE);

    await ensureAppDataVersion();

    expect(deleted).toEqual([]);
    expect(storedState()).toEqual(CURRENT_STATE);
});

test('outdated app version resets both databases', async () => {
    setStoredState({ ...CURRENT_STATE, [IDB_VERSION_APP]: APP_DATA_VERSION - 1 });

    await ensureAppDataVersion();

    expect(deleted).toHaveLength(2);
    expect(storedState()).toEqual(CURRENT_STATE);
});

test('outdated favorites version clears only that database', async () => {
    setStoredState({ ...CURRENT_STATE, [IDB_VERSION_FAVORITES]: FAVORITES_IDB_DATA_VERSION - 1 });

    await ensureAppDataVersion();

    expect(deleted).toEqual([FAVORITES_DB_NAME]);
    expect(storedState()).toEqual(CURRENT_STATE);
});

test('outdated tracks version clears only that database', async () => {
    setStoredState({ ...CURRENT_STATE, [IDB_VERSION_LOCAL_TRACKS]: TRACKS_IDB_DATA_VERSION - 1 });

    await ensureAppDataVersion();

    expect(deleted).toEqual([TRACKS_DB_NAME]);
    expect(storedState()).toEqual(CURRENT_STATE);
});

test('broken json is treated as no state at all', async () => {
    setStoredState('{not json');

    await ensureAppDataVersion();

    expect(deleted).toHaveLength(2);
    expect(storedState()).toEqual(CURRENT_STATE);
});

test('a state with a missing field is not trusted', async () => {
    setStoredState({ [IDB_VERSION_APP]: APP_DATA_VERSION });

    await ensureAppDataVersion();

    expect(deleted).toHaveLength(2);
    expect(storedState()).toEqual(CURRENT_STATE);
});

test('no indexedDB at all: the state is still stored', async () => {
    removeIndexedDb();

    await ensureAppDataVersion();

    expect(storedState()).toEqual(CURRENT_STATE);
});
