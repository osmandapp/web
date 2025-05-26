import { Button, Grid, IconButton, TextField } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { Close } from '@mui/icons-material';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import React, { useContext, useEffect, useState } from 'react';
import AccountManager, { sendCode } from '../../manager/AccountManager';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LOGIN_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';
import { INIT_LOGIN_STATE } from '../../manager/LoginManager';
import LoginContext from '../../context/LoginContext';

export default function DeleteAccountDialog({ setDeleteAccountFlag }) {
    const ltx = useContext(LoginContext);
    const navigate = useNavigate();

    const { i18n } = useTranslation();
    const lang = i18n.language;

    const [userEmail, setUserEmail] = useState(null);
    const [code, setCode] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [accountDeleted, setAccountDeleted] = useState(false);

    useEffect(() => {
        if (accountDeleted) {
            ltx.setEmailCookie('');
            ltx.setLoginUser(null);
            navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.search + window.location.hash);
        }
    }, [accountDeleted]);

    function checkLogin() {
        if (ltx.loginUser) {
            return true;
        } else {
            if (ltx.loginUser !== INIT_LOGIN_STATE) {
                ltx.setWantDeleteAcc(true);
                navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.hash);
                ltx.setOpenLoginMenu(true);
            }
        }
    }

    useEffect(() => {
        const loggedIn = checkLogin();
        if (loggedIn) {
            if (ltx.loginUser !== INIT_LOGIN_STATE) {
                sendCode({
                    email: ltx.loginUser,
                    action: AccountManager.DELETE_EMAIL_MSG,
                    lang,
                }).then();
            }
        }
    }, [ltx.loginUser]);

    function close() {
        if (setDeleteAccountFlag) {
            setDeleteAccountFlag(false);
        } else {
            ltx.setWantDeleteAcc(false);
            navigate('/map/' + window.location.search + window.location.hash);
        }
    }

    return (
        ltx.loginUser &&
        ltx.loginUser !== INIT_LOGIN_STATE && (
            <Dialog id="se-delete-account-dialog" open={true} onClose={close}>
                <Grid container spacing={2}>
                    <Grid item xs={11} sx={{ mb: -3 }}>
                        <DialogTitle>Are you sure you want to do this?</DialogTitle>
                    </Grid>
                    <Grid item xs={1} sx={{ ml: -2, mt: 1 }}>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                setEmailError('');
                                close();
                            }}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
                <DialogContent>
                    <DialogContentText>
                        Deletes all your data and account details from OsmAnd Cloud. Secondary devices will lose access
                        to paid features.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        onChange={(e) => {
                            if (emailError !== '') {
                                setEmailError('');
                            }
                            setUserEmail(e.target.value);
                        }}
                        id="username-delete"
                        label="Your email address"
                        type="email"
                        fullWidth
                        variant="standard"
                        helperText={emailError ? emailError : ''}
                        error={emailError.length > 0}
                        value={userEmail ? userEmail : ''}
                    ></TextField>
                    <TextField
                        margin="dense"
                        onChange={(e) => {
                            setEmailError('');
                            setCode(e.target.value);
                        }}
                        id="code"
                        label="Code from Email"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={code ?? ''}
                    ></TextField>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        component="span"
                        sx={{ backgroundColor: '#ff595e !important', ml: 2 }}
                        onClick={() => {
                            if (userEmail) {
                                if (userEmail !== ltx.loginUser) {
                                    setEmailError('Email does not match');
                                } else {
                                    AccountManager.deleteAccount({
                                        userEmail,
                                        code,
                                        setError: setEmailError,
                                        setAccountDeleted,
                                        lang,
                                    }).then();
                                }
                            }
                        }}
                    >
                        Delete this account
                    </Button>
                </DialogActions>
            </Dialog>
        )
    );
}
