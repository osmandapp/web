import { apiGet } from '../util/HttpApi';

export const FREE_ACCOUNT = 'Free';

export async function getAccountInfo(setAccountInfo) {
    const resp = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/get-account-info`);
    if (resp.data) {
        setAccountInfo(resp.data.info);
    }
}
