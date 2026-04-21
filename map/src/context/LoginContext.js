import React, { useEffect, useState } from 'react';
import { getAccountInfo, INIT_LOGIN_STATE, FREE_ACCOUNT } from '../manager/LoginManager';
import { apiGet } from '../util/HttpApi';
import useCookie from 'react-use-cookie';

const LoginContext = React.createContext();

async function syncSessionFromServer({ setLoginUser, setLoginRoles, setEmailCookie, setAccountInfo }) {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/info`, {
        method: 'GET',
    });
    if (response.data) {
        const user = await response.json();
        const newUser = user?.username;
        const roles = user?.roles || null;

        if (newUser) {
            await getAccountInfo(setAccountInfo);
        }

        if (INIT_LOGIN_STATE !== newUser) {
            if (newUser) {
                setEmailCookie(newUser, { days: 30, SameSite: 'Strict' });
            }
            setLoginUser(newUser);
            setLoginRoles(roles);
        }
    } else {
        setLoginUser(null);
        setLoginRoles(null);
    }
}

export const LoginContextProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState(INIT_LOGIN_STATE);
    const [loginRoles, setLoginRoles] = useState(null);
    const [openLoginMenu, setOpenLoginMenu] = useState(false);
    const [loginState, setLoginState] = useState({ default: true });
    const [accountInfo, setAccountInfo] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const [openChangeEmailDialog, setOpenChangeEmailDialog] = useState(false);
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const [completePurchase, setCompletePurchase] = useState(false);
    // cookie to store email logged in
    const [emailCookie, setEmailCookie] = useCookie('email', '');

    const isLoggedIn = () => Boolean(loginUser && loginUser !== INIT_LOGIN_STATE);
    const isProAccount = () => isLoggedIn() && accountInfo?.account !== FREE_ACCOUNT;

    useEffect(() => {
        syncSessionFromServer({
            setLoginUser,
            setLoginRoles,
            setEmailCookie,
            setAccountInfo,
        }).then();
    }, []);

    useEffect(() => {
        if (!loginUser || loginUser === INIT_LOGIN_STATE) {
            return;
        }
        if (accountInfo) {
            return;
        }
        getAccountInfo(setAccountInfo).then();
    }, [loginUser]);

    return (
        <LoginContext.Provider
            value={{
                loginUser,
                setLoginUser,
                loginRoles,
                setLoginRoles,
                openLoginMenu,
                setOpenLoginMenu,
                loginState,
                setLoginState,
                accountInfo,
                setAccountInfo,
                loginError,
                setLoginError,
                openChangeEmailDialog,
                setOpenChangeEmailDialog,
                emailCookie,
                setEmailCookie,
                openLoginDialog,
                setOpenLoginDialog,
                completePurchase,
                setCompletePurchase,
                isLoggedIn,
                isProAccount,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginContext;
