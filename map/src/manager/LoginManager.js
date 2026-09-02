import { apiGet } from '../util/HttpApi';
import { LOGIN_URL, MAIN_URL_WITH_SLASH } from './GlobalManager';

export const FREE_ACCOUNT = 'Free';
export const FREE_ACCOUNT_SUB_TYPE = 'OsmAnd Start';
export const INIT_LOGIN_STATE = 'INIT';
export const ERROR_EMAIL = 'error_email';
export const ERROR_PASSWORD = 'error_password';
export const ERROR_TOKEN = 'error_token';
export const EMPTY_INPUT = '';

export async function getAccountInfo(setAccountInfo) {
    const resp = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/get-account-info`);
    if (resp.data?.info) {
        setAccountInfo(resp.data.info);
        return resp.data.info;
    }
}

// saves the page the login was opened from, to return there after login
function savePrevPageUrl(ctx) {
    const { pathname, search, hash } = globalThis.location;
    if (pathname.startsWith(MAIN_URL_WITH_SLASH + LOGIN_URL)) {
        return; // already on the login page, keep the stored source page
    }
    ctx.setPrevPageUrl({ url: { pathname, search, hash }, active: false });
}

export function openLoginMenu({ ctx, ltx, navigate, location }) {
    savePrevPageUrl(ctx);
    ctx.setOpenNavigationSettings(false);
    navigate({
        pathname: MAIN_URL_WITH_SLASH + LOGIN_URL,
        search: location.search,
        hash: location.hash,
    });
    ltx.setOpenLoginMenu(true);
}

export function closeLoginMenu(ltx) {
    ltx.setOpenLoginMenu(false);
    ltx.setLoginState({ default: true });
    ltx.setLoginError(null);
}

export const openLogin = ({ ctx, ltx, navigate, reopenLoginDialog = null }) => {
    if (reopenLoginDialog) {
        reopenLoginDialog();
        return;
    }
    savePrevPageUrl(ctx);
    navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.search + window.location.hash);
    ltx.setLoginState({ login: true });
};

export function createAccount({ ctx, ltx, navigate }) {
    savePrevPageUrl(ctx);
    navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.search + window.location.hash);
    ltx.setLoginState({ create: true });
}
