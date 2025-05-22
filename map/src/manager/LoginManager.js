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
    if (resp.data) {
        setAccountInfo(resp.data.info);
    }
}

export function openLoginMenu(ctx, ctxl, navigate) {
    ctx.setPrevPageUrl({ url: location, active: false });
    navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.hash);
    ctxl.setOpenLoginMenu(true);
}

export function closeLoginMenu(ctxl) {
    ctxl.setOpenLoginMenu(false);
    ctxl.setLoginState({ default: true });
    ctxl.setLoginError(null);
}

export const openLogin = (ctxl, navigate) => {
    navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.search + window.location.hash);
    ctxl.setLoginState({ login: true });
};

export function createAccount(ctxl) {
    ctxl.setLoginState({ create: true });
}
