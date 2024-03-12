import { apiGet, apiPost } from '../util/HttpApi';

export const LOGIN_LOGOUT_URL = '/map/loginForm#logout'; // lose window.location.search/window.location.hash

const CHANGE_EMAIL_MSG = 'change';
const DELETE_EMAIL_MSG = 'delete';
const DEFAULT_AUTH_API_LANG = 'en';

async function userRegister({ username, setEmailError, setState, lang = DEFAULT_AUTH_API_LANG }) {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.toLowerCase() }),
        params: { lang },
    });
    if (await isRequestOk(response, setEmailError)) {
        setState('register-verify');
        setEmailError('');
    }
}

async function userActivate({ ctx, username, pwd, token, setEmailError, handleClose, lang = DEFAULT_AUTH_API_LANG }) {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/activate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.toLowerCase(), password: pwd, token: token, lang }),
    });
    if (await isRequestOk(response, setEmailError)) {
        ctx.setLoginUser(username);
        setEmailError('');
        handleClose();
    }
    return true;
}

async function userLogin({ ctx, username, pwd, setEmailError, handleClose, lang = DEFAULT_AUTH_API_LANG }) {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.toLowerCase(), password: pwd, lang }),
    });
    if (await isRequestOk(response, setEmailError)) {
        setEmailError('');
        ctx.setLoginUser(username);
        ctx.setEmailCookie(username, { days: 30, SameSite: 'Strict' }); // for next login
        handleClose();
    }
}

async function userLogout({ ctx, username, setEmailError, handleClose, setState, lang = DEFAULT_AUTH_API_LANG }) {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.toLowerCase(), lang }),
    });
    if (await isRequestOk(response, setEmailError)) {
        setState('login');
        ctx.setLoginUser('');
        setEmailError('');
        handleClose();
    }
}

async function deleteAccount({ userEmail, code, setEmailError, setAccountDeleted }) {
    if (isValidEmail(userEmail)) {
        const resp = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/delete-account`, '', {
            throwErrors: true,
            dataOnErrors: true,
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                token: code,
            },
        }).catch((error) => setEmailError(error.response.data));

        if (resp?.status === 200) {
            setAccountDeleted(true);
        }
    } else {
        setEmailError('Please enter valid email');
    }
}

function isValidEmail(email) {
    return email !== null && email.length >= 3 && email.length < 320;
}

async function isRequestOk(response, setEmailError) {
    if (!response.ok) {
        let message = await response.text();
        if (message) {
            try {
                let js = JSON.parse(message);
                message = `An error has occured: ${js.error?.message}`;
            } catch (e) {
                console.error('isRequestOk', e);
            }
        }
        setEmailError(message);
        return null;
    }
    const res = await response.json();
    if (res.status !== 'ok') {
        const message = `Unknown error has occured: ${JSON.stringify(res)}`;
        setEmailError(message);
    }
    return res;
}

async function sendCode({ action, setEmailError = null, lang = DEFAULT_AUTH_API_LANG }) {
    const resp = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/send-code`, '', {
        throwErrors: true,
        dataOnErrors: true,
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            lang,
            action,
        },
    }).catch((error) => {
        setEmailError && setEmailError(error.response.data);
    });
    if (resp?.status === 200) {
        return true;
    }
}

async function sendCodeToNewEmail({ email, action, setEmailError = null, lang = DEFAULT_AUTH_API_LANG, code }) {
    const resp = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/send-code-to-new-email`, '', {
        throwErrors: true,
        dataOnErrors: true,
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            email: email.toLowerCase(),
            code,
            action,
            lang,
        },
    }).catch((error) => {
        setEmailError && setEmailError(error.response.data);
    });
    if (resp?.status === 200) {
        return true;
    }
}

async function changeEmail({ email, token, setEmailError, lang = DEFAULT_AUTH_API_LANG }) {
    const data = {
        username: email.toLowerCase(),
        password: null,
        token: token,
        lang,
    };
    const resp = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/change-email`, data, {
        throwErrors: true,
        dataOnErrors: true,
        headers: {
            'Content-Type': 'application/json',
        },
    }).catch((error) => setEmailError(error.response.data));
    if (resp?.status === 200) {
        return true;
    }
}

const AccountManager = {
    deleteAccount,
    userRegister,
    userActivate,
    userLogin,
    userLogout,
    sendCode,
    sendCodeToNewEmail,
    changeEmail,
    CHANGE_EMAIL_MSG: CHANGE_EMAIL_MSG,
    DELETE_EMAIL_MSG: DELETE_EMAIL_MSG,
    LOGIN_LOGOUT_URL,
};

export default AccountManager;
