import { apiGet } from '../util/HttpApi';
import { filterRegularFolders } from './track/TracksManager';
import { updateSortList } from '../menu/actions/SortActions';
import { SMART_TYPE } from '../menu/share/shareConstants';

/**
 * Fetches smart folders from the server and adds them to tracks groups.
 * Clears the smart folders cache before loading.
 */
export async function loadSmartFolders(setTracksGroups, setSmartFoldersCache) {
    const res = await getSmartFolders();
    setSmartFoldersCache({});
    const smartFolderGroups = (res ?? []).map((smartFolder) => {
        return {
            name: smartFolder.name,
            fullName: smartFolder.name,
            type: SMART_TYPE,
            subfolders: [],
            groupFiles: [],
            files: [],
            realSize: smartFolder.userFilePaths?.length ?? 0,
            lastModifiedMs: smartFolder.creationTime,
            lastModifiedDate: null,
            userFilePaths: smartFolder.userFilePaths ?? [],
        };
    });

    setTracksGroups((prev) => {
        const regularFolders = filterRegularFolders(prev);
        return [...regularFolders, ...smartFolderGroups];
    });
}

/**
 * Populates a smart folder with its actual file objects from the file list.
 * Uses caching to avoid redundant processing. Returns the populated folder.
 */
export function populateSmartFolderFiles(smartFolder, listFiles, smartFoldersCache, setSmartFoldersCache) {
    const filesArray = [];
    const cached = smartFoldersCache?.[smartFolder.name];
    if (cached) {
        return cached;
    }
    (smartFolder.userFilePaths ?? []).forEach((path) => {
        const file = listFiles?.find((f) => f.name === path);
        if (file) {
            filesArray.push({ ...file, smartFolder: true });
        }
    });
    const populated = {
        ...smartFolder,
        groupFiles: filesArray,
        files: filesArray,
        realSize: filesArray.length,
    };
    setSmartFoldersCache((prev) => ({ ...prev, [smartFolder.name]: populated }));
    return populated;
}

async function getSmartFolders() {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/get-smart-folders`, {});
    return response?.data || null;
}

export async function deleteSmartFolder(folder, ctx) {
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/delete-smart-folder`, {
        params: {
            folderName: folder.fullName,
        },
        dataOnErrors: true,
    });
    if (res && res?.data?.status === 'ok') {
        await loadSmartFolders(ctx.setTracksGroups, ctx.setSmartFoldersCache);
    } else {
        ctx.setTrackErrorMsg({
            title: 'Delete error',
            msg: res.data,
        });
    }
}

export async function renameSmartFolder(folder, newName, ctx) {
    const newFolderName = folder.fullName.replace(folder.name, newName);
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/rename-smart-folder`, {
        params: {
            folderName: folder.fullName,
            newFolderName: newFolderName,
        },
        dataOnErrors: true,
    });
    if (res && res?.data?.status === 'ok') {
        updateSortList({ oldName: folder.fullName, newName: newFolderName, isTracks: true, ctx });
        await loadSmartFolders(ctx.setTracksGroups, ctx.setSmartFoldersCache);
    } else {
        ctx.setTrackErrorMsg({
            title: 'Duplicate error',
            msg: res.data,
        });
    }
}
