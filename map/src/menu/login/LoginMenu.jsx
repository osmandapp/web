import headerStyles from '../trackfavmenu.module.css';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import styles from './login.module.css';
import { closeHeader } from '../actions/HeaderHelper';
import AppContext from '../../context/AppContext';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyLogin from './EmptyLogin';
import Login from './Login';
import { closeLoginMenu } from '../../manager/LoginManager';

export default function LoginMenu() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const Account = () => {
        return (
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
                <EmptyLogin />
            </>
        );
    };

    return (
        <>
            {!ctx.loginUser && (
                <>
                    {ctx.loginState.login && <Login />}
                    {ctx.loginState.default && <Account />}
                </>
            )}
        </>
    );
}
