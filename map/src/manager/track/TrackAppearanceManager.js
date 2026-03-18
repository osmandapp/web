import { apiPost } from '../../util/HttpApi';
import { INFO_FILE_EXT } from './TracksManager';

/**
 * Update track appearance by sending the entire .info file.
 *
 * @param {Object} updatedGpxFile - The full info file object to save
 * @returns {Promise<boolean>} Success status
 */
export async function updateInfoFile(updatedGpxFile) {
    if (!updatedGpxFile?.name) {
        return false;
    }

    const jsonString = JSON.stringify(updatedGpxFile.info);
    const convertedData = new TextEncoder().encode(jsonString);
    const zippedResult = require('pako').gzip(convertedData, { to: 'Uint8Array' });
    const convertedZipped = zippedResult.buffer;
    const oMyBlob = new Blob([convertedZipped], { type: 'application/json' });
    const data = new FormData();
    const infoFileName = updatedGpxFile.name + INFO_FILE_EXT;
    data.append('file', oMyBlob, infoFileName);

    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/update-info`, data, {
        params: {
            name: infoFileName,
        },
    });

    return res?.data?.status === 'ok';
}
