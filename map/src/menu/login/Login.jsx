import { AppBar, Box, IconButton, Link, TextField, Toolbar, Typography } from '@mui/material';
import headerStyles from '../trackfavmenu.module.css';
import styles from './login.module.css';
import { closeHeader } from '../actions/HeaderHelper';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { userLogin } from '../../manager/AccountManager';
import i18n from 'i18next';
import { closeLoginMenu, createAccount, EMPTY_INPUT, ERROR_EMAIL, ERROR_PASSWORD } from '../../manager/LoginManager';
import { useTranslation } from 'react-i18next';
import { DELETE_ACCOUNT_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';
import { useNavigate } from 'react-router-dom';
import BlueBtn from '../../frame/components/btns/BlueBtn';
import PrimaryBtn from '../../frame/components/btns/PrimaryBtn';
import LoginContext from '../../context/LoginContext';

export default function Login() {
    const ctx = useContext(AppContext);
    const ctxl = useContext(LoginContext);

    const { t } = useTranslation();
    const lang = i18n.language;
    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState(EMPTY_INPUT);
    const [userPassword, setUserPassword] = useState(EMPTY_INPUT);
    const [error, setError] = useState(EMPTY_INPUT);
    const [emailError, setEmailError] = useState(EMPTY_INPUT);
    const [passwordError, setPasswordError] = useState(EMPTY_INPUT);
    const [tryCookie, setTryCookie] = useState(null); // then try cookie if userEmail is still not set by browser

    useEffect(() => {
        if (ctxl.emailCookie) {
            setTimeout(() => setTryCookie(ctxl.emailCookie), 500); // delay to allow browser auto-login
        }
    }, [ctxl.loginUser]);

    useEffect(() => {
        if (emailError !== EMPTY_INPUT) {
            setPasswordError(EMPTY_INPUT);
        }
    }, [emailError]);

    useEffect(() => {
        if (tryCookie && userEmail === '') {
            setUserEmail(tryCookie);
            setTryCookie(null);
        }
    }, [tryCookie]);

    const handleClose = () => {
        setEmailError(EMPTY_INPUT);
        setUserPassword(EMPTY_INPUT);
        closeLoginMenu(ctxl);
        if (ctxl.wantDeleteAcc) {
            navigate(MAIN_URL_WITH_SLASH + DELETE_ACCOUNT_URL + window.location.search + window.location.hash);
        } else {
            ctx.setPrevPageUrl((prevPageUrl) => ({ ...prevPageUrl, active: true }));
        }
    };

    useEffect(() => {
        if (error) {
            if (error === ERROR_EMAIL) {
                setEmailError(t('web:email_is_not_registered'));
            } else if (error === ERROR_PASSWORD) {
                setPasswordError(t('web:incorrect_password'));
            }
        }
    }, [error]);

    useEffect(() => {
        if (userPassword === EMPTY_INPUT) {
            setPasswordError(EMPTY_INPUT);
        }
    }, [userPassword]);

    async function handleLogin() {
        await userLogin({
            ctxl,
            username: userEmail,
            pwd: userPassword,
            setError,
            handleClose,
            lang,
        });
    }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await handleLogin();
        }
    };

    function openChangeResetPwd() {
        ctxl.setLoginState({ changePwd: true });
    }

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
                            closeLoginMenu(ctxl);
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
                <Typography className={styles.loginText}>{t('web:login_desc')}</Typography>
                <Box className={emailError && styles.errorBack}>
                    <TextField
                        autoFocus
                        margin="dense"
                        onChange={(e) => {
                            if (emailError !== EMPTY_INPUT) {
                                setEmailError(EMPTY_INPUT);
                            }
                            setUserEmail(e.target.value);
                        }}
                        onKeyDown={(e) => handleKeyPress(e)}
                        id="username"
                        label={t('web:user_email')}
                        type="email"
                        fullWidth
                        variant="filled"
                        helperText={emailError ? emailError : EMPTY_INPUT}
                        value={userEmail}
                    />
                    {emailError !== EMPTY_INPUT && (
                        <BlueBtn
                            action={() => createAccount(ctxl)}
                            text={t('web:create_account_btn')}
                            additionalStyle={{ mb: 1.5, mt: 0.5 }}
                            span={true}
                        />
                    )}
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
                        helperText={passwordError ? passwordError : EMPTY_INPUT}
                        error={passwordError.length > 0}
                        value={userPassword ? userPassword : EMPTY_INPUT}
                    />
                </Box>
                <Typography className={styles.loginText}>
                    <Link onClick={openChangeResetPwd} target="_blank" underline="none">
                        {t('web:change_password')}
                    </Link>
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <PrimaryBtn
                        action={handleLogin}
                        id={'se-submit-login'}
                        disabled={userPassword === EMPTY_INPUT || userEmail === EMPTY_INPUT}
                        text={t('shared_string_continue')}
                    />
                </Box>
            </Box>
        </>
    );
}
