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

const GARMIN_ACTIVITY_TYPES_STORAGE_KEY = 'garmin_all_activity_types';

export async function fetchAllGarminActivityTypes(serverVersion) {
    const cached = localStorage.getItem(GARMIN_ACTIVITY_TYPES_STORAGE_KEY);
    if (cached) {
        try {
            const { version, types } = JSON.parse(cached);
            if (version === serverVersion && Array.isArray(types)) {
                return types;
            }
        } catch {
            // corrupted — fall through to fetch
        }
    }
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/garmin/get-activity-types`);
    if (res.ok && Array.isArray(res.data)) {
        localStorage.setItem(
            GARMIN_ACTIVITY_TYPES_STORAGE_KEY,
            JSON.stringify({ version: serverVersion, types: res.data })
        );
        return res.data;
    }
    return [];
}

export async function saveGarminActivityTypes(selectedTypes) {
    const res = await apiPost(
        `${process.env.REACT_APP_USER_API_SITE}/mapapi/garmin/save-activity-types`,
        JSON.stringify(selectedTypes),
        { headers: { 'Content-Type': 'application/json' } }
    );
    return res.ok;
}
