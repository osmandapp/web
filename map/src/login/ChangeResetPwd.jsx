import headerStyles from '../menu/trackfavmenu.module.css';
import {
    AppBar,
    Box,
    Button,
    Icon,
    IconButton,
    InputAdornment,
    ListItemText,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material';
import styles from './login.module.css';
import errorStyles from '../menu/errors/errors.module.css';
import { closeHeader } from '../menu/actions/HeaderHelper';
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as CloseIcon } from '../assets/icons/ic_action_close.svg';
import { ReactComponent as UserPasswordIcon } from '../assets/icons/ic_action_user_password.svg';
import AppContext from '../context/AppContext';
import { closeLoginMenu, EMPTY_INPUT, ERROR_EMAIL, ERROR_TOKEN, openLogin } from '../manager/LoginManager';
import { useTranslation } from 'react-i18next';
import { userActivate, userRegisterAndSendCode } from '../manager/AccountManager';
import i18n from 'i18next';
import loginStyles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { usePasswordValidation } from '../util/hooks/usePasswordValidation';
import PrimaryBtn from '../frame/components/btns/PrimaryBtn';
import LoginContext from '../context/LoginContext';

export default function ChangeResetPwd() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();
    const navigate = useNavigate();
    const lang = i18n.language;

    const [userEmail, setUserEmail] = useState(EMPTY_INPUT);
    const [emailError, setEmailError] = useState(EMPTY_INPUT);
    const [userPassword1, setUserPassword1] = useState(EMPTY_INPUT);
    const [userPassword2, setUserPassword2] = useState(EMPTY_INPUT);
    const [openCodeInput, setOpenCodeInput] = useState(false);
    const [code, setCode] = useState(EMPTY_INPUT);
    const [resetPasswordError, setResetPasswordError] = useState(EMPTY_INPUT);
    const [openResetStatus, setOpenResetStatus] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [codeError, setCodeError] = useState(EMPTY_INPUT);
    const [checkReset, setCheckReset] = useState(false);

    const passwordError = usePasswordValidation(userPassword1, userPassword2);

    const handleEmailChange = (e) => {
        if (emailError !== EMPTY_INPUT) {
            setEmailError(EMPTY_INPUT);
        }
        setUserEmail(e.target.value);
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handlePassword1Change = (e) => {
        setUserPassword1(e.target.value);
    };

    const handlePassword2Change = (e) => {
        setUserPassword2(e.target.value);
    };

    const handleClickShowPassword1 = () => {
        setShowPassword1(!showPassword1);
    };

    const handleMouseDownPassword1 = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword2 = () => {
        setShowPassword2(!showPassword2);
    };

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (emailError === ERROR_EMAIL) {
            setEmailError(t('web:email_is_not_registered'));
        }
        if (emailError && emailError !== EMPTY_INPUT) {
            setOpenCodeInput(false);
        }
    }, [emailError]);

    useEffect(() => {
        if (checkReset) {
            if (resetPasswordError === ERROR_TOKEN) {
                setCodeError(t('web:expired_code'));
                setCheckReset(false);
            } else {
                setOpenCodeInput(false);
                setOpenResetStatus(true);
            }
        }
    }, [checkReset]);

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await sendVerificationCode();
        }
    };

    async function sendVerificationCode() {
        await userRegisterAndSendCode({ username: userEmail, setError: setEmailError, lang }).then(() => {
            setOpenCodeInput(true);
        });
    }

    async function handleResetPassword() {
        setCodeError(EMPTY_INPUT);
        await userActivate({
            username: userEmail,
            pwd: userPassword1,
            token: code,
            setError: setResetPasswordError,
            lang,
        }).then(() => {
            setCheckReset(true);
        });
    }

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        id={'se-change-pwd-menu-close'}
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => {
                            closeLoginMenu(ltx);
                            closeHeader({ ctx });
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-change-pwd-menu-name" component="div" className={headerStyles.title}>
                        {t('web:change_reset_password')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ mx: 2, my: 1 }}>
                {!openResetStatus && !openCodeInput && (
                    <>
                        <Typography className={styles.loginText}>{t('web:enter_email')}</Typography>
                        <Box className={emailError && styles.errorBack}>
                            <TextField
                                autoFocus
                                margin="dense"
                                onChange={handleEmailChange}
                                onKeyDown={(e) => handleKeyPress(e)}
                                id="username"
                                label={t('web:user_email')}
                                type="email"
                                fullWidth
                                variant="filled"
                                helperText={emailError ? emailError : EMPTY_INPUT}
                                value={userEmail}
                            />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <PrimaryBtn
                                action={sendVerificationCode}
                                disabled={userEmail === ''}
                                text={t('shared_string_continue')}
                            />
                        </Box>
                    </>
                )}
                {openCodeInput && !emailError && (
                    <>
                        <Typography className={styles.loginText}>
                            {t('web:send_code_desc').split('%1$s')[0]}
                            <span style={{ color: '#212121' }}>{userEmail}</span>
                            {t('web:send_code_desc').split('%1$s')[1]}
                        </Typography>
                        <Box className={codeError && styles.errorBack}>
                            <TextField
                                margin="dense"
                                onChange={handleCodeChange}
                                id="code"
                                label={t('web:verification_code')}
                                fullWidth
                                variant="filled"
                                value={code ? code : EMPTY_INPUT}
                                helperText={codeError ? codeError : EMPTY_INPUT}
                            />
                        </Box>
                        <Box sx={{ mt: '12px' }}>
                            <Typography className={styles.title} noWrap>
                                {t('user_password')}
                            </Typography>
                            <Typography className={styles.loginText}>{t('web:min_8_symbols')}</Typography>
                        </Box>
                        <Box className={passwordError && styles.errorBack}>
                            <TextField
                                margin="dense"
                                onChange={handlePassword1Change}
                                id="pwd1"
                                label={t('web:new_password')}
                                type={showPassword1 ? 'text' : 'password'}
                                fullWidth
                                variant="filled"
                                value={userPassword1 ? userPassword1 : EMPTY_INPUT}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword1}
                                                onMouseDown={handleMouseDownPassword1}
                                            >
                                                {showPassword1 ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                margin="dense"
                                onChange={handlePassword2Change}
                                id="pwd2"
                                label={t('web:repeat_password')}
                                type={showPassword2 ? 'text' : 'password'}
                                fullWidth
                                variant="filled"
                                helperText={passwordError ? passwordError : EMPTY_INPUT}
                                error={passwordError.length > 0}
                                value={userPassword2 ? userPassword2 : EMPTY_INPUT}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword2}
                                                onMouseDown={handleMouseDownPassword2}
                                            >
                                                {showPassword2 ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <PrimaryBtn
                                action={handleResetPassword}
                                disabled={
                                    userPassword1 === EMPTY_INPUT ||
                                    userPassword2 === EMPTY_INPUT ||
                                    code === EMPTY_INPUT ||
                                    passwordError !== EMPTY_INPUT
                                }
                                text={t('web:change_password_btn')}
                            />
                        </Box>
                    </>
                )}
                {openResetStatus && (
                    <>
                        <Box className={loginStyles.block}>
                            <Icon className={loginStyles.icon}>
                                <UserPasswordIcon />
                            </Icon>
                            <Box className={errorStyles.info}>
                                <ListItemText disableTypography={true} className={errorStyles.title}>
                                    {resetPasswordError
                                        ? t('web:password_change_error')
                                        : t('web:password_changed_successfully')}
                                </ListItemText>
                                <ListItemText disableTypography={true} className={errorStyles.text}>
                                    {resetPasswordError
                                        ? t('web:password_change_error_desc')
                                        : t('web:password_change_success_desc')}
                                </ListItemText>
                            </Box>
                            <Button
                                className={errorStyles.button}
                                component="span"
                                onClick={() => openLogin(ltx, navigate)}
                            >
                                {t('web:login_btn')}
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </>
    );
}
