import headerStyles from '../trackfavmenu.module.css';
import { Alert, AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import styles from './login.module.css';
import { closeHeader } from '../actions/HeaderHelper';
import AppContext from '../../context/AppContext';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyLogin from './EmptyLogin';
import Login from './Login';
import { closeLoginMenu } from '../../manager/LoginManager';
import ChangeResetPwd from './ChangeResetPwd';
import CreateAccount from './CreateAccount';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';

export default function LoginMenu() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash === '#logout' && ctx.loginUser) {
            ctx.setLoginUser(null);
            ctx.setLoginError('You are logged out by server!');
            window.location.hash = ''; // useLocation() is read-only
            navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.hash);
            ctx.setOpenLoginMenu(true);
        }
    }, [location.hash]);

    return (
        <>
            {!ctx.loginUser && (
                <>
                    {ctx.loginState.default && (
                        <>
                            <AppBar position="static" className={headerStyles.appbar}>
                                <Toolbar className={headerStyles.toolbar}>
                                    <IconButton
                                        id={'se-login-menu-close'}
                                        variant="contained"
                                        type="button"
                                        className={styles.closeIcon}
                                        onClick={() => {
                                            closeLoginMenu(ctx);
                                            closeHeader({ ctx });
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <Typography id="se-login-menu-name" component="div" className={headerStyles.title}>
                                        {t('login_account')}
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            {ctx.loginError && (
                                <Alert id="se-alert-login-info" severity="info">
                                    {ctx.loginError}
                                </Alert>
                            )}
                            <EmptyLogin />
                        </>
                    )}
                    {ctx.loginState.login && <Login />}
                    {ctx.loginState.changePwd && <ChangeResetPwd />}
                    {ctx.loginState.create && <CreateAccount />}
                </>
            )}
        </>
    );
}
