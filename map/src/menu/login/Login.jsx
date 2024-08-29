import { AppBar, Box, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import headerStyles from '../trackfavmenu.module.css';
import styles from './login.module.css';
import { closeHeader } from '../actions/HeaderHelper';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import AccountManager from '../../manager/AccountManager';
import i18n from 'i18next';
import { closeLoginMenu } from '../../manager/LoginManager';
import { useTranslation } from 'react-i18next';

export default function Login() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const lang = i18n.language;

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleClose = () => {
        setEmailError('');
        setUserPassword('');
        ctx.setPrevPageUrl((prevPageUrl) => ({ ...prevPageUrl, active: true }));
    };

    useEffect(() => {
        if (error) {
            if (error === 'error_email') {
                setEmailError(t('web:email_is_not_registered'));
            } else if (error === 'error_password') {
                setPasswordError(t('web:incorrect_password'));
            }
        }
    }, [error]);

    useEffect(() => {
        if (userPassword === '') {
            setPasswordError('');
        }
    }, [userPassword]);

    async function handleLogin() {
        await AccountManager.userLogin({
            ctx,
            username: userEmail,
            pwd: userPassword,
            setEmailError: setError,
            handleClose,
            lang,
        }).then(() => {
            closeLoginMenu(ctx);
        });
    }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await handleLogin();
        }
    };

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
                            ctx.setOpenLoginMenu(false);
                            ctx.setLoginState({ default: true });
                            closeHeader({ ctx });
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-login-menu-name" component="div" className={headerStyles.title}>
                        {t('user_login')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ mx: 2, my: 1 }}>
                <Typography className={styles.loginDesc}>{t('web:login_desc')}</Typography>
                <Box className={emailError && styles.errorBack}>
                    <TextField
                        autoFocus
                        margin="dense"
                        onChange={(e) => {
                            if (emailError !== '') {
                                setEmailError('');
                            }
                            setUserEmail(e.target.value);
                        }}
                        onKeyDown={(e) => handleKeyPress(e)}
                        id="username"
                        label={t('web:user_email')}
                        type="email"
                        fullWidth
                        variant="filled"
                        helperText={emailError ? emailError : ''}
                        value={userEmail}
                    />
                </Box>
                <Box className={passwordError && styles.errorBack}>
                    <TextField
                        margin="dense"
                        onChange={(e) => setUserPassword(e.target.value)}
                        onKeyDown={(e) => handleKeyPress(e)}
                        id="pwd"
                        label={t('user_password')}
                        type="password"
                        fullWidth
                        variant="filled"
                        helperText={passwordError ? passwordError : ''}
                        error={passwordError.length > 0}
                        value={userPassword ? userPassword : ''}
                    />
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Button
                        disabled={userPassword === '' || userEmail === ''}
                        className={styles.button}
                        onClick={handleLogin}
                    >
                        {t('shared_string_continue')}
                    </Button>
                </Box>
            </Box>
        </>
    );
}
