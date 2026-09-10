import {
    changeShareTypeFile,
    deleteSharedWithMe,
    getShareFileInfo,
    saveSharedFileToCloud,
    updateRequests,
    updateUserRequests,
} from '@map/manager/ShareManager';
import { loadShareFiles } from '@map/util/hooks/useInitialFilesLoad';
import { apiGet, apiPost } from '@map/util/HttpApi';
import { findRequest } from '../../util/requests';

const TRACK = { name: 'Folder/Shared.gpx', type: 'GPX', id: 7 };

function response(body) {
    return { ok: true, json: async () => body, text: async () => JSON.stringify(body) };
}

/** get-shared-with-me answers with UserFilesResults, the same shape as list-files. A null stands for a failed request. */
function sharedWithMe({ tracks = { uniqueFiles: [] }, favorites = { uniqueFiles: [] } } = {}) {
    apiGet.mockImplementation(async (url, options) => {
        if (url.endsWith('/share/get-shared-with-me')) {
            const files = options.params.type === 'GPX' ? tracks : favorites;
            return files === null ? { ok: false } : response(files);
        }

        return response({});
    });
}

function shareCtx({ file = TRACK, sharedObj = null } = {}) {
    const ctx = {
        shareFilesCache: {},
        shareFile: { mainFile: file, sharedObj },
        updatedRequestList: [],
        setUpdatedRequestList: jest.fn(),
        setShareFile: jest.fn((update) => {
            ctx.shareFile = typeof update === 'function' ? update(ctx.shareFile) : update;
        }),
    };

    return ctx;
}

describe('loadShareFiles', () => {
    test('shared tracks are stored by name and marked as shared', async () => {
        sharedWithMe({ tracks: { uniqueFiles: [{ name: 'Folder/Shared.gpx', type: 'GPX' }] } });
        const setShareWithMeFiles = jest.fn((update) => update({}));

        await loadShareFiles(setShareWithMeFiles);

        const { tracks } = setShareWithMeFiles.mock.results[0].value;
        expect(tracks['Folder/Shared.gpx']).toMatchObject({ name: 'Folder/Shared.gpx', sharedWithMe: true });
    });

    test('only gpx files become shared tracks', async () => {
        sharedWithMe({
            tracks: {
                uniqueFiles: [
                    { name: 'Shared.gpx', type: 'GPX' },
                    { name: 'Shared.gpx.info', type: 'GPX' },
                ],
            },
        });
        const setShareWithMeFiles = jest.fn((update) => update({}));

        await loadShareFiles(setShareWithMeFiles);

        expect(Object.keys(setShareWithMeFiles.mock.results[0].value.tracks)).toEqual(['Shared.gpx']);
    });

    test('shared favorites are returned marked as shared', async () => {
        sharedWithMe({ favorites: { uniqueFiles: [{ name: 'favorites/fav.gpx', type: 'FAVOURITES' }] } });
        const setShareWithMeFiles = jest.fn((update) => update({}));

        const favorites = await loadShareFiles(setShareWithMeFiles);

        expect(favorites).toEqual([{ name: 'favorites/fav.gpx', type: 'FAVOURITES', sharedWithMe: true }]);
        expect(setShareWithMeFiles.mock.results[0].value.favorites).toHaveLength(1);
    });

    test('nothing shared with the user gives an empty storage', async () => {
        sharedWithMe();
        const setShareWithMeFiles = jest.fn((update) => update({}));

        const favorites = await loadShareFiles(setShareWithMeFiles);

        expect(setShareWithMeFiles.mock.results[0].value.tracks).toEqual({});
        expect(favorites).toEqual([]);
    });

    test('a failed tracks request keeps the shared favorites', async () => {
        sharedWithMe({ tracks: null, favorites: { uniqueFiles: [{ name: 'favorites/fav.gpx' }] } });
        const setShareWithMeFiles = jest.fn((update) => update({}));

        const favorites = await loadShareFiles(setShareWithMeFiles);

        expect(setShareWithMeFiles.mock.results[0].value.tracks).toEqual({});
        expect(favorites.map((f) => f.name)).toEqual(['favorites/fav.gpx']);
    });

    test('a failed favorites request keeps the shared tracks', async () => {
        sharedWithMe({ tracks: { uniqueFiles: [{ name: 'Shared.gpx', type: 'GPX' }] }, favorites: null });
        const setShareWithMeFiles = jest.fn((update) => update({}));

        const favorites = await loadShareFiles(setShareWithMeFiles);

        const stored = setShareWithMeFiles.mock.results[0].value;
        expect(Object.keys(stored.tracks)).toEqual(['Shared.gpx']);
        expect(stored.favorites).toEqual([]);
        expect(favorites).toEqual([]);
    });
});

describe('getShareFileInfo', () => {
    test('a file that is not shared is not requested', async () => {
        const ctx = shareCtx();

        await getShareFileInfo({ file: TRACK, ctx });

        expect(apiGet).not.toHaveBeenCalled();
        expect(ctx.shareFile).toEqual({ mainFile: TRACK, sharedObj: null });
    });

    test('the share info of a shared file is loaded', async () => {
        const file = { ...TRACK, details: { share: true } };
        const ctx = shareCtx({ file });
        apiGet.mockResolvedValue(response({ file: { id: 7 } }));

        await getShareFileInfo({ file, ctx });

        const { options } = findRequest(apiGet, '/share/get-share-file-info');
        expect(options.params).toEqual({ fileName: file.name, fileType: 'GPX', createIfNotExists: true });
        expect(ctx.shareFile.sharedObj).toEqual({ file: { id: 7 } });
    });
});

describe('changeShareTypeFile', () => {
    test('the new access type is sent and the file is updated', async () => {
        const ctx = shareCtx({ sharedObj: { file: { id: 7, shareType: 'private' } } });
        apiGet.mockResolvedValue(response({ id: 7, shareType: 'public' }));

        await changeShareTypeFile({ file: TRACK, shareType: 'public', ctx });

        const { options } = findRequest(apiGet, '/share/change-share-type');
        expect(options.params).toEqual({
            filePath: TRACK.name,
            fileType: 'GPX',
            shareType: 'public',
            createIfNotExists: true,
        });
        expect(ctx.shareFile.sharedObj.file).toEqual({ id: 7, shareType: 'public' });
    });

    test('a file deleted meanwhile drops the share info', async () => {
        const ctx = shareCtx({ sharedObj: { file: { id: 7 } } });
        apiGet.mockResolvedValue({ ok: true, text: async () => 'file was deleted' });

        await changeShareTypeFile({ file: TRACK, shareType: 'public', ctx });

        expect(ctx.shareFile).toEqual({ mainFile: TRACK, sharedObj: null });
    });
});

describe('access requests', () => {
    test('the requests are sent as a map of id to access type', async () => {
        apiPost.mockResolvedValue(response({ id: 7 }));

        await updateRequests(
            [
                { id: 1, type: 'approved' },
                { id: 2, type: 'blocked' },
            ],
            7
        );

        const { body, options } = findRequest(apiPost, '/share/update-requests');
        expect(body).toEqual({ 1: 'approved', 2: 'blocked' });
        expect(options.params).toEqual({ fileId: 7 });
    });

    test('the updated file replaces the current one and the list is cleared', async () => {
        const ctx = shareCtx({ sharedObj: { file: { id: 7 } } });
        ctx.updatedRequestList = [{ id: 1, type: 'approved' }];
        apiPost.mockResolvedValue(response({ id: 7, requests: [] }));

        await updateUserRequests(ctx);

        expect(ctx.setUpdatedRequestList).toHaveBeenCalledWith([]);
        expect(ctx.shareFile.sharedObj.file).toEqual({ id: 7, requests: [] });
    });

    test('an empty list is not sent', async () => {
        await updateUserRequests(shareCtx());

        expect(apiPost).not.toHaveBeenCalled();
    });
});

describe('shared files of other users', () => {
    test('a file is removed from the shared with me list', async () => {
        apiPost.mockResolvedValue({ ok: true });

        expect(await deleteSharedWithMe(TRACK.name, 'GPX')).toBe(true);
        const { body, options } = findRequest(apiPost, '/share/remove-shared-with-me-file');
        expect(body).toBe(TRACK.name);
        expect(options.params).toEqual({ type: 'GPX' });
    });

    test('a failed removal is reported', async () => {
        apiPost.mockResolvedValue({ ok: false });

        expect(await deleteSharedWithMe(TRACK.name, 'GPX')).toBe(false);
    });

    test('a shared file is saved to the cloud under a new name', async () => {
        apiPost.mockResolvedValue({ ok: true });

        await saveSharedFileToCloud(TRACK, 'Folder/My copy.gpx');

        const { body, options } = findRequest(apiPost, '/share/save-shared-file');
        expect(body).toEqual([TRACK.name, 'Folder/My copy.gpx']);
        expect(options.params).toEqual({ type: 'GPX' });
    });
});
