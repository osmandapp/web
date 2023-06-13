import {post} from "axios";
import Utils from "../util/Utils";


async function userRegister(username, setEmailError, setState) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'username': username})
    });
    if (await isRequestOk(response, setEmailError)) {
        setState('register-verify');
        setEmailError('');
    }
}

async function userActivate(ctx, username, pwd, token, setEmailError, handleClose) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/activate`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'username': username, 'password': pwd, 'token': token})
    });
    if (await isRequestOk(response, setEmailError)) {
        ctx.setLoginUser(username);
        setEmailError('');
        handleClose();
    }
    return true;
}

async function userLogin(ctx, username, pwd, setEmailError, handleClose) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'username': username, 'password': pwd})
    });
    if (await isRequestOk(response, setEmailError)) {
        setEmailError('');
        ctx.setLoginUser(username);
        handleClose();
    }
}

async function userLogout(ctx, username, setEmailError, handleClose, setState) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/logout`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'username': username})
    });
    if (await isRequestOk(response, setEmailError)) {
        setState('login');
        ctx.setLoginUser('');
        setEmailError('');
        handleClose();
    }
}

async function deleteAccount(userEmail, code, setEmailError, ctx) {
    if (isValidEmail(userEmail)) {
        const data = {
            username: userEmail,
            password: null,
            token: code
        }
        const resp = await post(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/delete-account`, data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).catch((error) => setEmailError(error.response.data));

        if (resp?.status === 200) {
            ctx.setUserEmail('');
            ctx.setLoginUser(null);
        }
    } else {
        setEmailError("Please enter valid email");
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

async function sendCode(email, setEmailError) {
    const resp = await post(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/send-code`, email,
        {
            headers: {
                'Content-Type': 'text/plain'
            }
        }).catch((error) => {
            setEmailError(error.response.data)
    });
    if (resp?.status === 200) {
        return true;
    }
}

async function confirmCode(email, code, setEmailError) {
    const resp = await post(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/confirm-code`, code,
        {
            headers: {
                'Content-Type': 'text/plain'
            }
        }).catch((error) => setEmailError(error.response.data));;
    if (resp?.status === 200) {
        return true;
    }
}

async function changeEmail(email, token, setEmailError) {
    const data = {
        username: email,
        password: null,
        token: token
    }
    const resp = await post(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/change-email`, data,
        {
            headers: {
                'Content-Type': 'application/json'
            }
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
    confirmCode,
    changeEmail
}

export default AccountManager;