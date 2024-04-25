import Utils, { isToday, isYesterday, quickNaNfix } from '../util/Utils';
import TracksManager, { GPX_FILE_TYPE } from './track/TracksManager';
import { FAVORITE_FILE_TYPE, prepareFavGroupName } from './FavoritesManager';
import React from 'react';
import { ReactComponent as TrackIcon } from '../assets/icons/ic_action_polygom_dark.svg';
import { ReactComponent as FolderIcon } from '../assets/icons/ic_action_folder.svg';
import { ReactComponent as OtherTypesIcon } from '../assets/icons/ic_map_configure_map.svg';
import i18n from '../i18n';
import { apiGet, apiPost } from '../util/HttpApi';
import { refreshGlobalFiles } from './track/SaveTrackManager';

// Defines item size based on its type, necessary for layout before content is loaded.
// Pre-set constants are used for lazy loading to ensure placeholders match the final content height.
// This approach prevents layout shifts as items load in view.
export function getFileItemSize(item, fileName) {
    if (item.type === 'month') {
        return 'var(--base-title-size)';
    } else {
        const maxLines = fileName?.length > 27 ? 2 : 1;
        return maxLines === 1 ? 'var(--menu-item-size)' : 'var(--menu-item-2-lines-size)';
    }
}

export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { hour: 'numeric', minute: 'numeric' };
    if (isYesterday(date)) {
        return i18n.t('yesterday') + ', ' + date.toLocaleString(i18n.language, options);
    }
    if (isToday(date)) {
        return i18n.t('today') + ', ' + date.toLocaleString(i18n.language, options);
    }
    options.day = 'numeric';
    options.month = 'short';

    return date.toLocaleString(i18n.language, options);
};

export function getItemIcon(file) {
    if (file?.type === GPX_FILE_TYPE) {
        return <TrackIcon />;
    } else if (file?.type === FAVORITE_FILE_TYPE) {
        const groupName = prepareFavGroupName(file.name);
        const groups = file.details?.pointGroups ? JSON.parse(quickNaNfix(file.details?.pointGroups)) : null;
        if (!groups) {
            return <FolderIcon />;
        }
        const color = groups[groupName]?.color;
        if (!color) {
            return <FolderIcon />;
        }
        return <FolderIcon style={{ fill: color }} />;
    } else {
        return <OtherTypesIcon />;
    }
}

export const downloadFile = async (file) => {
    let urlFile;
    if (file.zipSize <= 0) {
        // download previous version
        urlFile = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file-from-prev-version`;
    } else {
        // download current version
        urlFile = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file`;
    }
    const fileRequest = {
        url: urlFile,
        urlopts: {
            params: {
                name: file.name,
                type: file.type,
                updatetime: file.updatetimems,
            },
        },
    };
    const data = await Utils.getFileData(fileRequest);
    let name;
    let type;
    if (file.type === GPX_FILE_TYPE) {
        name = TracksManager.prepareName(file.name);
        type = '.' + GPX_FILE_TYPE.toLowerCase();
    } else {
        name = file.name;
        type = '';
    }

    if (data) {
        const url = document.createElement('a');
        url.href = URL.createObjectURL(new Blob([data]));
        url.download = name + type;
        url.click();
    }
};

export async function deleteFileVersion({ file, changes, setChanges }) {
    const response = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/delete-file-version`, '', {
        params: {
            name: file.name,
            type: file.type,
            updatetime: file.updatetimems,
        },
    });
    if (response.status === 200) {
        changes = deleteVersionsFromMenu({ changes, id: file.id });
        setChanges(changes);
    }
}

export async function deleteFileAllVersions({ file, changes, setChanges, isTrash = false }) {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/delete-file-all-versions`, {
        params: {
            name: file.name,
            type: file.type,
            updatetime: file.updatetimems,
            isTrash: isTrash,
        },
    });
    if (response.status === 200) {
        changes = deleteVersionsFromMenu({ changes, name: file.name });
        setChanges(changes);
    }
}

export async function deleteFile({ file, changes, setChanges }) {
    const response = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/delete-file`, '', {
        params: {
            name: file.name,
            type: file.type,
        },
    });
    if (response.status === 200) {
        changes = changes.filter((f) => f.id !== file.id);
        setChanges(changes);
    }
}

export async function restoreFile({ file, ctx, changes, setChanges, fromTrash = false }) {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/restore-file`, {
        params: {
            name: file.name,
            type: file.type,
            updatetime: file.updatetimems,
        },
        dataOnErrors: true,
    });
    if (response.status === 200) {
        const newVersion = {
            file: response.data,
            type: 'file',
            isLast: false,
            id: response.data.id,
        };
        if (fromTrash) {
            changes = deleteVersionsFromMenu({ changes, id: file.id });
            setChanges(changes);
        } else {
            const fileIndex = changes.findIndex((change) => change.type === 'file');
            let newChanges = [];
            if (fileIndex === -1) {
                newChanges = [...changes, newVersion];
            } else {
                newChanges = [...changes.slice(0, fileIndex), newVersion, ...changes.slice(fileIndex)];
            }
            setChanges(newChanges);
        }
    } else {
        ctx.setRoutingErrorMsg(response.data);
    }
}

export async function emptyTrash({ ctx, changes, setChanges }) {
    const files = changes
        .filter((change) => change.file && change.type === 'file')
        .map((change) => ({
            name: change.file.name,
            type: change.file.type,
            updatetime: change.file.updatetimems,
        }));
    const response = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/empty-trash`, files, {
        dataOnErrors: true,
    });
    if (response.status === 200) {
        setChanges([]);
    } else {
        ctx.setRoutingErrorMsg(response.data);
    }
}

function deleteVersionsFromMenu({ changes, name = null, id = null }) {
    changes = changes.filter((f) => {
        if (f.file) {
            if (name) {
                return f.file.name !== name;
            }
            if (id) {
                return f.id !== id;
            }
        }
        return true;
    });
    changes = changes.filter((f, index) => {
        if (f.type === 'month') {
            const nextFileIndex = changes.slice(index + 1).findIndex((f) => f.type === 'file');
            return nextFileIndex !== -1;
        }
        return true;
    });
    return changes;
}

export function formatString(templateString, replacements) {
    // First, remove all unnecessary escape characters from the string
    templateString = templateString.replace(/\\+/g, '');

    // Inserts parameters into a string, e.g., formatString("Delete \\\"%1$s\\\" permanently?", ["File.txt"]) -> "Delete "File.txt" permanently?"
    return templateString.replace(/%\d\$s/g, function (match) {
        let index = parseInt(match.replace('%', '').replace('$s', ''), 10) - 1;
        return replacements[index];
    });
}

export function isFileRestrictedForDownload(file) {
    return (
        file.type.toLowerCase() === 'file' &&
        (file.name.toLowerCase().endsWith('.obf') ||
            file.name.toLowerCase().endsWith('.sqlitedb') ||
            file.name.toLowerCase().endsWith('.tif'))
    );
}

export function closeCloudSettings(openCloudSettings, setOpenCloudSettings, ctx) {
    if (openCloudSettings) {
        setOpenCloudSettings(false);
        refreshGlobalFiles({ ctx }).then();
    }
}
