import { apiPost } from '../../util/HttpApi';
import { INFO_FILE_EXT } from './TracksManager';

export async function saveInfoFile(selectedGpxFile) {
    const pointsGroups = selectedGpxFile?.info?.pointsGroups;
    if (!pointsGroups) {
        return;
    }

    const cleanedPointsGroups = {};

    Object.keys(pointsGroups).forEach((groupName) => {
        const { points, ...groupWithoutPoints } = pointsGroups[groupName];

        if (groupWithoutPoints.ext?.points) {
            const { points: extPoints, ...extWithoutPoints } = groupWithoutPoints.ext;
            groupWithoutPoints.ext = extWithoutPoints;
        }

        cleanedPointsGroups[groupName] = groupWithoutPoints;
    });

    const infoData = {
        ...selectedGpxFile.info,
        pointsGroups: cleanedPointsGroups,
    };

    const jsonString = JSON.stringify(infoData);
    const convertedData = new TextEncoder().encode(jsonString);
    const zippedResult = require('pako').gzip(convertedData, { to: 'Uint8Array' });
    const convertedZipped = zippedResult.buffer;
    const oMyBlob = new Blob([convertedZipped], { type: 'application/json' });

    const data = new FormData();
    const infoFileName = selectedGpxFile.name + INFO_FILE_EXT;
    data.append('file', oMyBlob, infoFileName);

    const params = {
        type: 'GPX',
        name: infoFileName,
    };

    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/upload-file`, data, { params });

    return res?.data?.status === 'ok';
}

