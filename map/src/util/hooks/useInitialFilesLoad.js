import { useEffect } from 'react';
import isEmpty from 'lodash-es/isEmpty';
import { apiGet } from '../HttpApi';
import TracksManager, {
    getGpxFiles,
    filterRegularFolders,
    GPX_FILE_EXT,
    INFO_FILE_EXT,
    preparedGpxFile,
    TRACK_VISIBLE_FLAG,
    EMPTY_FILE_NAME,
} from '../../manager/track/TracksManager';
import { addOpenedFavoriteGroups } from '../../manager/FavoritesManager';
import { getShareWithMe } from '../../manager/ShareManager';
import { FAVOURITES, GPX } from '../../manager/GlobalManager';
import { SMART_TYPE } from '../../menu/share/shareConstants';
import { findInfoFile } from '../../manager/track/TrackAppearanceManager';
import Utils from '../Utils';
import { INIT_LOGIN_STATE } from '../../manager/LoginManager';

/**
 * Merges refreshed .info file payloads from list-files refresh into loaded GPX entries and the selected track.
 */
export function applyRefreshedInfoFilesToGpx(updatedData, setGpxFiles, setSelectedGpxFile) {
    const infoFilesFromRefresh = updatedData.filter((r) => r.name?.toLowerCase().endsWith(INFO_FILE_EXT));
    if (infoFilesFromRefresh.length === 0) return;

    setGpxFiles((prev) => {
        if (isEmpty(prev)) return prev;
        let next = null;
        for (const [gpxName, file] of Object.entries(prev)) {
            const infoRow = infoFilesFromRefresh.find((r) => r.name === gpxName + INFO_FILE_EXT);
            if (!infoRow) continue;
            const data = infoRow.details?.data ?? {};
            next = next ?? { ...prev };
            next[gpxName] = {
                ...file,
                info: { ...file.info, ...data },
                cloudRedrawWpts: true,
            };
        }
        return next ?? prev;
    });

    // Read selectedGpxFile via setter callback to merge .info into the currently open track.
    setSelectedGpxFile((track) => {
        if (!track || track.infoChanged || !track.name) return track;
        const infoRow = infoFilesFromRefresh.find((r) => r.name === track.name + INFO_FILE_EXT);
        const data = infoRow?.details?.data;
        if (data == null) return track;
        return { ...track, info: { ...track.info, ...data }, cloudRedrawWpts: true };
    });
}

/**
 * Filters files that need detail updates and sets them for processing.
 * Returns true if any files need updates.
 */
export function getFilesForUpdateDetails(files, setUpdateFiles) {
    const filesToUpdate = files
        .filter((f) => f.details?.update && f.type === GPX && isFileWithDetails(f.name))
        .map((f) => ({
            name: f.name,
            type: f.type,
            isError: !!f.details.error,
            time: f.details.updatetime,
        }));
    if (filesToUpdate.length > 0) {
        setUpdateFiles(filesToUpdate);
    }
    return filesToUpdate.length > 0;
}

/**
 * Loads and sets shared files (tracks and favorites) from other users.
 * Returns array of favorite files marked as shared.
 */
export async function loadShareFiles(setShareWithMeFiles) {
    const tracks = await getShareWithMe({ type: GPX });
    const favorites = await getShareWithMe({ type: FAVOURITES });
    const preparedTracks =
        tracks.length === 0
            ? {}
            : Object.fromEntries(
                  getGpxFiles(tracks).map((t) => {
                      return [t.name, { ...t, sharedWithMe: true }];
                  })
              );
    setShareWithMeFiles((prev) => ({
        ...prev,
        tracks: preparedTracks,
        favorites: favorites?.uniqueFiles,
    }));
    return favorites?.uniqueFiles.map((f) => {
        return {
            ...f,
            sharedWithMe: true,
        };
    });
}

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

/**
 * Custom hook that handles initial loading of cloud files when user logs in.
 * Fetches user's tracks, favorites, smart folders, and shared files.
 * Restores previously visible tracks from localStorage.
 * Only triggers when loginUser changes.
 */
export function useInitialFilesLoad({
    loginUser,
    listFiles,
    setListFiles,
    gpxFiles,
    setGpxFiles,
    setFavorites,
    setUpdateMarkers,
    setProcessingGroups,
    setVisibleTracks,
    setShareWithMeFiles,
    setTracksGroups,
    setSmartFoldersCache,
    setUpdateFiles,
    setSmartFoldersLoading,
    setGpxLoading,
}) {
    useEffect(() => {
        if (loginUser !== INIT_LOGIN_STATE) {
            setGpxLoading(true);

            if (loginUser !== listFiles.loginUser) {
                if (!loginUser) {
                    setListFiles({});
                    setFavorites({});
                    setGpxLoading(false);
                } else {
                    apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {})
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            }
                            return null;
                        })
                        .then(async (res) => {
                            if (res) {
                                res.loginUser = loginUser;
                                res.totalUniqueZipSize = 0;
                                res.uniqueFiles.forEach((f) => {
                                    res.totalUniqueZipSize += f.zipSize;
                                });
                                const hasUpdateFiles = getFilesForUpdateDetails(res.uniqueFiles, setUpdateFiles);
                                setListFiles(res);
                                if (!hasUpdateFiles) {
                                    setSmartFoldersLoading(true);
                                    loadSmartFolders(setTracksGroups, setSmartFoldersCache)
                                        .then(() => {
                                            setSmartFoldersLoading(false);
                                        })
                                        .catch(() => {
                                            setSmartFoldersLoading(false);
                                        });
                                }
                                const favFiles = await loadShareFiles(setShareWithMeFiles);
                                const ownFavorites = TracksManager.getFavoriteGroups(res);
                                const allFavorites = [...ownFavorites, ...favFiles];
                                await Promise.all([
                                    addOpenedTracks(getGpxFiles(res), gpxFiles, setGpxFiles, setVisibleTracks, res),
                                    addOpenedFavoriteGroups(allFavorites, setUpdateMarkers, setProcessingGroups),
                                ]);
                            }
                        })
                        .finally(() => {
                            setGpxLoading(false);
                        });
                }
            } else {
                setGpxLoading(false);
            }
        }
    }, [loginUser]);
}

async function getSmartFolders() {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/get-smart-folders`, {});
    return response?.data || null;
}

function isFileWithDetails(fileName) {
    const fileNameLC = fileName.toLowerCase();
    return (
        (fileNameLC.endsWith(GPX_FILE_EXT) || fileNameLC.endsWith(INFO_FILE_EXT)) &&
        !fileNameLC.endsWith(EMPTY_FILE_NAME)
    );
}

async function addOpenedTracks(files, gpxFiles, setGpxFiles, setVisibleTracks, listFiles) {
    const promises = [];
    const newGpxFiles = Object.assign({}, gpxFiles);

    let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));

    let newVisFiles = {
        old: [],
        new: [],
    };

    let newVisFilesNames = {
        old: savedVisible?.old ? savedVisible?.old : [],
        new: [],
        open: [],
    };

    let newSelectedFiles = [];
    let oldSelectedFiles = [];
    if (savedVisible?.new && savedVisible.new.length > 0) {
        savedVisible.new.forEach((name) => {
            if (savedVisible.open.includes(name)) {
                newVisFilesNames.new.push(name);
                newVisFilesNames.open.push(name);
            } else {
                newVisFilesNames.old.push(name);
            }
        });

        newVisFilesNames.new.forEach((name) => {
            const matchingFileInd = files.findIndex((f) => f.name === name);
            if (matchingFileInd !== -1) {
                newSelectedFiles.push(matchingFileInd);
            }
        });
    }
    newVisFilesNames.old = newVisFilesNames?.old.splice(-10);
    newVisFilesNames.old.forEach((name) => {
        const matchingFileInd = files.findIndex((f) => f.name === name);
        if (matchingFileInd !== -1) {
            oldSelectedFiles.push(matchingFileInd);
        }
    });

    for (let ind of oldSelectedFiles) {
        let file = files[ind];
        newGpxFiles[file.name] = {
            url: null,
            clienttimems: file.clienttimems,
            updatetimems: file.updatetimems,
            showOnMap: false,
            name: file.name,
            type: 'GPX',
        };
        newVisFiles.old.push(newGpxFiles[file.name]);
    }

    for (let ind of newSelectedFiles) {
        const file = files[ind];
        let oneGpxFile = preparedGpxFile({ file });
        oneGpxFile.showOnMap = true;
        newGpxFiles[file.name] = oneGpxFile;
        let f = await Utils.getFileData(newGpxFiles[file.name]);
        const gpxfile = new File([f], file.name, {
            type: 'text/plain',
        });

        promises.push(
            TracksManager.getTrackData(gpxfile).then(async (track) => {
                if (!track) return;
                track.name = file.name;
                const infoFile = findInfoFile({ listFiles }, file.name);
                track.info = infoFile?.details?.data;
                Object.keys(track).forEach((t) => {
                    newGpxFiles[file.name][t] = track[t];
                });
                newVisFiles.new.push(newGpxFiles[file.name]);
            })
        );
    }

    await Promise.all(promises).then(() => {
        setGpxFiles(newGpxFiles);
        setVisibleTracks(newVisFiles);
    });

    localStorage.setItem(TRACK_VISIBLE_FLAG, JSON.stringify(newVisFilesNames));
}
