import { apiGet } from '../util/HttpApi';
import { LOGIN_URL, MAIN_URL_WITH_SLASH } from './GlobalManager';

export const FREE_ACCOUNT = 'Free';
export const INIT_LOGIN_STATE = 'INIT';
export const ERROR_EMAIL = 'error_email';
export const ERROR_PASSWORD = 'error_password';
export const ERROR_TOKEN = 'error_token';
export const EMPTY_INPUT = '';

export async function getAccountInfo(setAccountInfo) {
    const resp = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/get-account-info`);
    if (resp.data && resp.data.info) {
        setAccountInfo(resp.data.info);
        return resp.data.info;
    }
}

export function openLoginMenu(ctx, ltx, navigate, location) {
    ctx.setPrevPageUrl({ url: location, active: false });
    navigate({
        pathname: MAIN_URL_WITH_SLASH + LOGIN_URL,
        hash: location.hash,
    });
    ltx.setOpenLoginMenu(true);
}

export function closeLoginMenu(ltx) {
    ltx.setOpenLoginMenu(false);
    ltx.setLoginState({ default: true });
    ltx.setLoginError(null);
}

export const openLogin = (ltx, navigate, reopenLoginDialog = null) => {
    if (reopenLoginDialog) {
        reopenLoginDialog();
        return;
    }
    navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.search + window.location.hash);
    ltx.setLoginState({ login: true });
};

export function createAccount(ltx) {
    ltx.setLoginState({ create: true });
}
