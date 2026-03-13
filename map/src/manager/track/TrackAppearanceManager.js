import { apiPost } from '../../util/HttpApi';
import { INFO_FILE_EXT } from './TracksManager';

/**
 * Update .info file with partial data (only changed fields).
 *
 * @param {Object} updatedInfoFile - The GPX file object
 * @param {Object} diff - Partial info object with only changed fields
 * @returns {Promise<boolean>} Success status
 */
export async function updateInfoFile(updatedInfoFile, diff) {
    if (!updatedInfoFile?.name || !diff || Object.keys(diff).length === 0) {
        return false;
    }

    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/update-info`, diff, {
        params: {
            name: updatedInfoFile.name + INFO_FILE_EXT,
        },
    });

    return res?.data?.status === 'ok';
}
