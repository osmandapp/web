import { apiPost } from '../../util/HttpApi';
import { INFO_FILE_EXT } from './TracksManager';
import { isCloudTrack } from '../../context/AppContext';
import { debouncer } from '../../context/TracksRoutingCache';

/**
 * Update or create track appearance by sending the entire .info file.
 *
 * @param {Object} ctx - AppContext value
 * @param {Object} updatedGpxFile - The full info file object to save
 * @returns {Promise<boolean>} Success status
 */
export async function createOrUpdateInfoFile(updatedGpxFile, infoFileName, infoFile) {
    if (!updatedGpxFile?.name) {
        return false;
    }

    const infoUpdateTime = infoFile?.updatetimems ?? null;

    const jsonString = JSON.stringify(updatedGpxFile.info);
    const convertedData = new TextEncoder().encode(jsonString);
    const zippedResult = require('pako').gzip(convertedData, { to: 'Uint8Array' });
    const convertedZipped = zippedResult.buffer;
    const oMyBlob = new Blob([convertedZipped], { type: 'application/json' });
    const data = new FormData();
    data.append('file', oMyBlob, infoFileName);

    const params =
        infoUpdateTime == null
            ? { name: infoFileName } // updatetime null => create file
            : { name: infoFileName, updatetime: infoUpdateTime }; // updatetime present => update file

    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/update-info`, data, {
        params,
    });

    if (res?.data?.updatetime) {
        if (infoFile) {
            infoFile.updatetimems = res.data.updatetime;
        }
        return true;
    }
    return false;
}

export function updateGroupsVisibility(ctx, groupNames, hidden, debouncerTimer) {
    ctx.setSelectedGpxFile((prevFile) => {
        const updatedPointsGroups = { ...(prevFile?.info?.pointsGroups || prevFile?.pointsGroups || {}) };
        const allGroupNames = groupNames || Object.keys(updatedPointsGroups || {});

        allGroupNames.forEach((groupName) => {
            const group = updatedPointsGroups[groupName] || {};

            updatedPointsGroups[groupName] = {
                ...group,
                ext: {
                    ...group.ext,
                    hidden,
                },
            };
        });

        const updatedGpxFile = {
            ...prevFile,
            info: {
                ...prevFile.info,
                pointsGroups: updatedPointsGroups,
            },
        };

        if (isCloudTrack(ctx)) {
            const infoFileName = updatedGpxFile.name + INFO_FILE_EXT;
            const infoFile = ctx.listFiles.uniqueFiles?.find((file) => file?.name === infoFileName);
            debouncer(
                () => {
                    createOrUpdateInfoFile(updatedGpxFile, infoFileName, infoFile);
                },
                debouncerTimer,
                500
            );
        }

        return updatedGpxFile;
    });
}
