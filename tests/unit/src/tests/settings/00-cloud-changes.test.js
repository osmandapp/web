import {
    deleteFile,
    deleteFileAllVersions,
    deleteFileVersion,
    emptyTrash,
    formatString,
    isFileRestrictedForDownload,
    restoreFile,
} from '@map/manager/SettingsManager';
import { apiGet, apiPost } from '@map/util/HttpApi';
import { findRequest } from '../../util/requests';

const version = (name, updatetimems) => ({ id: `${name}-${updatetimems}`, name, type: 'GPX', updatetimems });
const month = (date) => ({ type: 'month', date, id: `month-${date}` });
const row = (file, isLast = false) => ({ type: 'file', file, id: file.id, isLast });

// the changes list as CloudSettings builds it: a month header, then its versions, newest first
const SEP = version('Sep.gpx', 3000);
const AUG_NEW = version('Aug.gpx', 2000);
const AUG_OLD = version('Aug.gpx', 1000);
const changes = () => [month('Sep'), row(SEP, true), month('Aug'), row(AUG_NEW), row(AUG_OLD, true)];

function list() {
    const state = { changes: changes() };
    state.setChanges = jest.fn((next) => (state.changes = next));

    return state;
}

const ids = (state) => state.changes.map((c) => c.id);

test('a deleted version leaves the list together with the month it was alone in', async () => {
    apiPost.mockResolvedValue({ status: 200 });
    const state = list();

    await deleteFileVersion({ file: SEP, ...state });

    expect(findRequest(apiPost, '/mapapi/delete-file-version').options.params).toEqual({
        name: 'Sep.gpx',
        type: 'GPX',
        updatetime: 3000,
    });
    expect(ids(state)).toEqual(['month-Aug', AUG_NEW.id, AUG_OLD.id]);
});

test('all versions of a file go at once, a single file is deleted by its id', async () => {
    apiGet.mockResolvedValue({ status: 200 });
    apiPost.mockResolvedValue({ status: 200 });
    const state = list();

    await deleteFileAllVersions({ file: AUG_NEW, ...state, isTrash: true });

    expect(findRequest(apiGet, '/mapapi/delete-file-all-versions').options.params).toEqual({
        name: 'Aug.gpx',
        type: 'GPX',
        updatetime: 2000,
        isTrash: true,
    });
    expect(ids(state)).toEqual(['month-Sep', SEP.id]);

    await deleteFile({ file: SEP, ...state });

    expect(findRequest(apiPost, '/mapapi/delete-file').options.params).toEqual({ name: 'Sep.gpx', type: 'GPX' });
    expect(ids(state)).toEqual(['month-Sep']);
});

test('a restored version appears on top of the list, a file restored from the trash leaves it', async () => {
    const restored = version('Aug.gpx', 4000);
    apiGet.mockResolvedValue({ status: 200, data: restored });
    const state = list();

    await restoreFile({ file: AUG_OLD, ctx: {}, ...state });

    expect(findRequest(apiGet, '/mapapi/restore-file').options.params).toEqual({
        name: 'Aug.gpx',
        type: 'GPX',
        updatetime: 1000,
    });
    expect(ids(state)).toEqual(['month-Sep', restored.id, SEP.id, 'month-Aug', AUG_NEW.id, AUG_OLD.id]);
    expect(state.changes[1]).toEqual({ file: restored, type: 'file', isLast: false, id: restored.id });

    const trash = list();
    await restoreFile({ file: SEP, ctx: {}, ...trash, fromTrash: true });
    expect(ids(trash)).toEqual(['month-Aug', AUG_NEW.id, AUG_OLD.id]);

    apiGet.mockResolvedValue({ status: 400, data: 'not found' });
    const ctx = { setRoutingErrorMsg: jest.fn() };
    await restoreFile({ file: SEP, ctx, ...list() });
    expect(ctx.setRoutingErrorMsg).toHaveBeenCalledWith('not found');
});

test('emptying the trash sends every file of the list', async () => {
    apiPost.mockResolvedValue({ status: 200 });
    const state = list();

    await emptyTrash({ ctx: {}, ...state });

    const { body } = findRequest(apiPost, '/mapapi/empty-trash');
    expect(body).toEqual([
        { name: 'Sep.gpx', type: 'GPX', updatetime: 3000 },
        { name: 'Aug.gpx', type: 'GPX', updatetime: 2000 },
        { name: 'Aug.gpx', type: 'GPX', updatetime: 1000 },
    ]);
    expect(state.changes).toEqual([]);
});

test('a translation with android placeholders, and the files the server does not give back', () => {
    expect(formatString('Delete \\"%1$s\\" from \\"%2$s\\"?', ['Track', 'Folder'])).toBe(
        'Delete "Track" from "Folder"?'
    );
    // maps are served from the common server files, not from the user storage
    expect(isFileRestrictedForDownload({ type: 'FILE', name: 'Ukraine.obf' })).toBe(true);
    expect(isFileRestrictedForDownload({ type: 'file', name: 'tiles.sqlitedb' })).toBe(true);
    expect(isFileRestrictedForDownload({ type: 'GPX', name: 'Track.gpx' })).toBe(false);
});
