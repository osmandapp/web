import React, { useEffect, useMemo, useState } from 'react';
import { getAccountInfo, INIT_LOGIN_STATE } from '../manager/LoginManager';
import { apiGet } from '../util/HttpApi';
import useCookie from 'react-use-cookie';

const LoginContext = React.createContext();

export const LoginContextProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState(INIT_LOGIN_STATE);
    const [loginRoles, setLoginRoles] = useState(null);
    const [openLoginMenu, setOpenLoginMenu] = useState(false);
    const [loginState, setLoginState] = useState({ default: true });
    const [accountInfo, setAccountInfo] = useState(null);
    const [wantDeleteAcc, setWantDeleteAcc] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [openChangeEmailDialog, setOpenChangeEmailDialog] = useState(false);
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const [completePurchase, setCompletePurchase] = useState(false);
    // cookie to store email logged in
    const [emailCookie, setEmailCookie] = useCookie('email', '');

    const isLoggedIn = () => Boolean(loginUser && loginUser !== INIT_LOGIN_STATE);

    useEffect(() => {
        checkUserLogin(loginUser, setLoginUser, emailCookie, setEmailCookie, setAccountInfo).then();
    }, [loginUser]);

    useEffect(() => {
        if (wantDeleteAcc) {
            setLoginError('Please log in to delete your account.');
        } else {
            setLoginError(null);
        }
    }, [wantDeleteAcc]);

    async function checkUserLogin(loginUser, setLoginUser, emailCookie, setEmailCookie, setAccountInfo) {
        const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/info`, {
            method: 'GET',
        });
        if (response.data) {
            if (loginUser !== INIT_LOGIN_STATE) {
                await getAccountInfo(setAccountInfo);
            }
            const user = await response.json();
            const newUser = user?.username;
            const roles = user?.roles || null;

            if (loginUser !== newUser) {
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
                wantDeleteAcc,
                setWantDeleteAcc,
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
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginContext;
