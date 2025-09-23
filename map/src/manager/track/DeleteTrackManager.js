import { isCloudTrack, isLocalTrack, loadShareFiles, OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { apiGet, apiPost } from '../../util/HttpApi';
import { findGroupByName, getAllVisibleFiles } from './TracksManager';
import { refreshGlobalFiles } from './SaveTrackManager';
import { FAVORITE_FILE_TYPE } from '../FavoritesManager';
import isEmpty from 'lodash-es/isEmpty';
import { hideAllVisTracks, showAllVisTracks } from '../../menu/visibletracks/VisibleTracks';
import { deleteSharedWithMe } from '../ShareManager';
import { GPX, updateFileStorage } from '../GlobalManager';
import { deleteLocalTrack } from '../../context/LocalTrackStorage';

export async function deleteTrack({ file, ctx, ltx, shared = false, type = 'GPX' }) {
    if ((isCloudTrack(ctx) || file) && ltx.loginUser) {
        const trackName = file ? file?.name : ctx.selectedGpxFile?.name;
        if (!trackName) {
            return;
        }
        if (shared) {
            await deleteSharedWithMeFile(trackName, type, ctx);
        } else {
            await deleteCloudFile(trackName, type, ctx);
        }
    } else if (isLocalTrack(ctx)) {
        deleteLocalTrack(ctx);
    }
}

async function deleteSharedWithMeFile(name, type, ctx) {
    const res = await deleteSharedWithMe(name, type);
    if (!res) {
        ctx.setTrackErrorMsg({
            title: 'Delete error',
            msg: 'We could not delete the file. Please try again later.',
        });
    } else {
        deleteTracksFromLastGroup(name, ctx, type === FAVORITE_FILE_TYPE);
        await loadShareFiles(ctx.setShareWithMeFiles);
    }
}

async function deleteCloudFile(name, type, ctx) {
    const response = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/delete-file`, '', {
        params: {
            name,
            type,
        },
    });
    if (response.status === 200) {
        ctx.mutateGpxFiles((o) => {
            if (o[name]) {
                o[name].url = null;
                o[name].delete = true; // remove file
            }
        });

        if (type === FAVORITE_FILE_TYPE) {
            refreshGlobalFiles({ ctx, type: OBJECT_TYPE_FAVORITE }).then();
        } else {
            // delete track from ctx.tracksGroups (used in CloudTrackGroup menu)
            deleteTracksFromGroups(name, ctx);

            // delete track from ctx.openGroups
            deleteTracksFromLastGroup(name, ctx);

            // delete track from ctx.listFiles.uniqueFiles
            // used to refresh list-files in TracksManager.saveTrack
            ctx.setListFiles((o) => {
                const index = o.uniqueFiles.findIndex((file) => file.name === name);
                if (index !== -1) {
                    o.uniqueFiles.splice(index, 1);
                    o.uniqueFiles = [...o.uniqueFiles];
                }
                return { ...o };
            });

            ctx.setGpxFiles((o) => {
                if (o[name]) {
                    delete o[name];
                }
                return { ...o };
            });
        }
    }
}

export async function deleteTrackFolder(folder, ctx) {
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/delete-folder`, {
        params: {
            folderName: folder.fullName,
            type: 'GPX',
        },
        dataOnErrors: true,
    });
    if (res && res?.data?.status === 'ok') {
        refreshGlobalFiles({ ctx }).then();
    } else {
        ctx.setTrackErrorMsg({
            title: 'Delete error',
            msg: res.data,
        });
    }
}

export function closeTrack(ctx, file, smartf) {
    const newFile = { ...file, url: null };
    updateFileStorage({ ctx, smartf, type: GPX, file: newFile });
    if (ctx.selectedGpxFile?.name === file.name) {
        ctx.setCurrentObjectType(null);
    }
}

export function hideAllTracks(ctx) {
    if (!isEmpty(ctx.visibleTracks)) {
        const files = getAllVisibleFiles(ctx);
        if (files.length > 0) {
            deleteTracksFromMap(ctx, files);
        }
    }
}

function separateFilesBySource(files, ctx) {
    const cloudFiles = [];
    const sharedFiles = [];
    files.forEach((file) => {
        if (file.url) {
            if (file.sharedWithMe) {
                sharedFiles.push(file);
            } else {
                cloudFiles.push(file);
            }
            if (ctx.selectedGpxFile?.name === file.name) {
                ctx.setCurrentObjectType(null);
            }
        }
    });
    return { cloudFiles, sharedFiles };
}

export function deleteTracksFromMap(ctx, files) {
    if (!files || files.length === 0) return;

    hideAllVisTracks();

    const { cloudFiles, sharedFiles } = separateFilesBySource(files, ctx);

    if (cloudFiles.length > 0) {
        ctx.setGpxFiles((prevFiles) => ({
            ...prevFiles,
            ...cloudFiles.reduce((updatedFiles, file) => {
                if (prevFiles[file.name]) {
                    updatedFiles[file.name] = {
                        ...prevFiles[file.name],
                        url: null,
                    };
                }
                return updatedFiles;
            }, {}),
        }));
    }
    if (sharedFiles.length > 0) {
        ctx.setShareWithMeFiles((prevFiles) => ({
            ...prevFiles,
            tracks: {
                ...prevFiles.tracks,
                ...sharedFiles.reduce((updatedTracks, file) => {
                    if (prevFiles.tracks[file.name]) {
                        updatedTracks[file.name] = {
                            ...prevFiles.tracks[file.name],
                            url: null,
                        };
                    }
                    return updatedTracks;
                }, {}),
            },
        }));
    }
}

export function showAllVisibleTracks(ctx) {
    const files = getAllVisibleFiles(ctx);
    if (!files || files.length === 0) return;

    showAllVisTracks();

    const { cloudFiles, sharedFiles } = separateFilesBySource(files, ctx);
    if (cloudFiles.length > 0) {
        ctx.setGpxFiles((prevFiles) => ({
            ...prevFiles,
            ...cloudFiles.reduce((updatedFiles, file) => {
                if (prevFiles[file.name]) {
                    updatedFiles[file.name] = {
                        ...prevFiles[file.name],
                        showOnMap: true,
                        visible: true,
                        url: file.url,
                    };
                }
                return updatedFiles;
            }, {}),
        }));
    }

    if (sharedFiles.length > 0) {
        ctx.setShareWithMeFiles((prevFiles) => ({
            ...prevFiles,
            tracks: {
                ...prevFiles.tracks,
                ...sharedFiles.reduce((updatedTracks, file) => {
                    if (prevFiles.tracks[file.name]) {
                        updatedTracks[file.name] = {
                            ...prevFiles.tracks[file.name],
                            showOnMap: true,
                            visible: true,
                            url: file.url,
                        };
                    }
                    return updatedTracks;
                }, {}),
            },
        }));
    }
}

function deleteTracksFromGroups(trackName, ctx) {
    const parts = trackName.split('/');
    if (parts.length > 1) {
        const pathToGroup = parts.slice(0, -1).join('/');
        const group = findGroupByName(ctx.tracksGroups, pathToGroup);
        if (group) {
            const fileWithoutGroup = parts[parts.length - 1];
            const fileIndexInGroupFiles = group.groupFiles.findIndex((file) => file.name === fileWithoutGroup);
            if (fileIndexInGroupFiles !== -1) {
                group.groupFiles.splice(fileIndexInGroupFiles, 1);
                group.realSize--;
            }
            const fileIndexInFiles = group.files.findIndex((file) => file.name === fileWithoutGroup);
            if (fileIndexInFiles !== -1) {
                group.files.splice(fileIndexInFiles, 1);
            }
        }
    } else {
        const group = findGroupByName(ctx.tracksGroups, '');
        const fileIndexInFiles = group.files.findIndex((file) => file.name === trackName);
        if (fileIndexInFiles !== -1) {
            group.files.splice(fileIndexInFiles, 1);
        }
    }
    ctx.setTracksGroups([...ctx.tracksGroups]);
}

function deleteTracksFromLastGroup(trackName, ctx, isFavorite = false) {
    if (ctx.openGroups.length > 0) {
        const lastGroup = ctx.openGroups[ctx.openGroups.length - 1];
        if (isFavorite) {
            const fileIndexInGroupFiles = lastGroup.files.findIndex((file) => file.file.name === trackName);
            if (fileIndexInGroupFiles !== -1) {
                lastGroup.files.splice(fileIndexInGroupFiles, 1);
                ctx.setOpenGroups((prev) => {
                    const updatedOpenGroups = [...prev];
                    updatedOpenGroups[updatedOpenGroups.length - 1] = lastGroup;
                    return updatedOpenGroups;
                });
                return;
            }
        }
        if (lastGroup.groupFiles) {
            const fileIndexInGroupFiles = lastGroup.groupFiles.findIndex((file) => file.name === trackName);
            if (fileIndexInGroupFiles !== -1) {
                lastGroup.groupFiles.splice(fileIndexInGroupFiles, 1);
                lastGroup.realSize--;
            }
        }
        if (lastGroup.files) {
            const fileIndexInFiles = lastGroup.files.findIndex((file) => file.name === trackName);
            if (fileIndexInFiles !== -1) {
                lastGroup.files.splice(fileIndexInFiles, 1);
            }
        }

        // update tracksGroups and after update openGroups in TrackGroupFolder
        ctx.setTracksGroups([...ctx.tracksGroups]);
    }
}
