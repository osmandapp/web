import { apiGet, apiPost } from '../../util/HttpApi';

export const GARMIN_FOLDER_NAME = 'Garmin Connect';

export async function fetchGarminStatus() {
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/garmin/status`);
    return res.ok && res.data != null ? res.data : { linked: false };
}

export async function disconnectGarmin() {
    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/garmin/disconnect`, '', {
        redirect: 'follow',
    });
    return res.ok;
}
