import { isCloudTrack, isLocalTrack, OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { apiGet, apiPost } from '../../util/HttpApi';
import TracksManager, { findGroupByName } from './TracksManager';
import { refreshGlobalFiles } from './SaveTrackManager';
import { FAVORITE_FILE_TYPE } from '../FavoritesManager';
import { cloneDeep } from 'lodash';
import { hideAllVisTracks } from '../../menu/visibletracks/VisibleTracks';

export async function deleteTrack(file, ctx, type = 'GPX') {
    if ((isCloudTrack(ctx) || file) && ctx.loginUser) {
        const trackName = file ? file?.name : ctx.selectedGpxFile?.name;
        const response = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/delete-file`, '', {
            params: {
                name: trackName,
                type: type,
            },
        });
        if (response.status === 200) {
            // delete track in ctx.gpxFiles (processed by CloudTrackLayer)
            const name = trackName;
            ctx.mutateGpxFiles((o) => {
                if (o[name]) {
                    o[name].url = null; // remove layer
                    o[name].delete = true; // remove file
                }
            });

            if (type === FAVORITE_FILE_TYPE) {
                refreshGlobalFiles({ ctx, type: OBJECT_TYPE_FAVORITE }).then();
            } else {
                // delete track from ctx.tracksGroups (used in CloudTrackGroup menu)
                deleteTracksFromGroups(trackName, ctx);

                // delete track from ctx.openGroups
                deleteTracksFromLastGroup(trackName, ctx);

                // delete track from ctx.listFiles.uniqueFiles
                // used to refresh list-files in TracksManager.saveTrack
                ctx.setListFiles((o) => {
                    const index = o.uniqueFiles.findIndex((file) => file.name === trackName);
                    if (index !== -1) {
                        o.uniqueFiles.splice(index, 1);
                        o.uniqueFiles = [...o.uniqueFiles];
                    }
                    return { ...o };
                });
                // update gpxFiles
                ctx.setGpxFiles((o) => {
                    if (o[trackName]) {
                        delete o[trackName];
                    }
                    return { ...o };
                });
            }
        }
    } else if (isLocalTrack(ctx)) {
        TracksManager.deleteLocalTrack(ctx);
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

export function closeTrack(ctx, file) {
    ctx.mutateGpxFiles((o) => (o[file.name].url = null));
    if (ctx.selectedGpxFile?.name === file.name) {
        ctx.setCurrentObjectType(null);
    }
}

export function deleteTracksFromMap(ctx, files) {
    hideAllVisTracks();
    let updatedGpxFiles = cloneDeep(ctx.gpxFiles);
    files.forEach((file) => {
        updatedGpxFiles[file.name].url = null;
        if (ctx.selectedGpxFile?.name === file.name) {
            ctx.setCurrentObjectType(null);
        }
    });
    ctx.setGpxFiles({ ...updatedGpxFiles });
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
            ctx.setTracksGroups([...ctx.tracksGroups]);
        }
    } else {
        const group = findGroupByName(ctx.tracksGroups, '');
        const fileIndexInFiles = group.files.findIndex((file) => file.name === trackName);
        if (fileIndexInFiles !== -1) {
            group.files.splice(fileIndexInFiles, 1);
            ctx.setTracksGroups([...ctx.tracksGroups]);
        }
    }
}

function deleteTracksFromLastGroup(trackName, ctx) {
    if (ctx.openGroups.length > 0) {
        const lastGroup = ctx.openGroups[ctx.openGroups.length - 1];
        const fileIndexInGroupFiles = lastGroup.groupFiles.findIndex((file) => file.name === trackName);
        if (fileIndexInGroupFiles !== -1) {
            lastGroup.groupFiles.splice(fileIndexInGroupFiles, 1);
            lastGroup.realSize--;
        }
        const fileIndexInFiles = lastGroup.files.findIndex((file) => file.name === trackName);
        if (fileIndexInFiles !== -1) {
            lastGroup.files.splice(fileIndexInFiles, 1);
        }
        ctx.setTracksGroups([...ctx.tracksGroups]);
    }
}
