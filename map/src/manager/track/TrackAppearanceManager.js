import { apiPost } from '../../util/HttpApi';
import { INFO_FILE_EXT } from './TracksManager';

/**
 * Update track appearance by sending the entire .info file.
 *
 * @param {Object} ctx - AppContext value
 * @param {Object} updatedGpxFile - The full info file object to save
 * @returns {Promise<boolean>} Success status
 */
export async function updateInfoFile(ctx, updatedGpxFile) {
    if (!updatedGpxFile?.name) {
        return false;
    }

    const infoFileName = updatedGpxFile.name + INFO_FILE_EXT;
    const infoFile = ctx?.listFiles?.uniqueFiles?.find((file) => file?.name === infoFileName);
    const infoUpdateTime = infoFile?.updatetimems ?? null;
    const jsonString = JSON.stringify(updatedGpxFile.info);
    const convertedData = new TextEncoder().encode(jsonString);
    const zippedResult = require('pako').gzip(convertedData, { to: 'Uint8Array' });
    const convertedZipped = zippedResult.buffer;
    const oMyBlob = new Blob([convertedZipped], { type: 'application/json' });
    const data = new FormData();
    data.append('file', oMyBlob, infoFileName);

    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/update-info`, data, {
        params: {
            name: infoFileName,
            updatetime: infoUpdateTime,
        },
    });

    if (res?.data?.status === 'ok' && res.data.updatetime) {
        infoFile.updatetimems = res.data.updatetime;
        return true;
    }
    return false;
}
