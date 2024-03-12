import { Button, Grid, IconButton, TextField } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { Close } from '@mui/icons-material';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import React, { useContext, useEffect, useState } from 'react';
import AccountManager from '../manager/AccountManager';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function DeleteAccountDialog({ setDeleteAccountFlag }) {
    const ctx = useContext(AppContext);
    const navigate = useNavigate();

    const { i18n } = useTranslation();
    const lang = i18n.language;

    const [userEmail, setUserEmail] = useState(null);
    const [code, setCode] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [accountDeleted, setAccountDeleted] = useState(false);

    useEffect(() => {
        if (accountDeleted) {
            ctx.setEmailCookie('');
            ctx.setLoginUser(null);
            navigate('/map/loginForm' + window.location.search + window.location.hash);
        }
    }, [accountDeleted]);

    function checkLogin() {
        if (ctx.loginUser) {
            return true;
        } else {
            if (ctx.loginUser !== 'INIT') {
                ctx.setWantDeleteAcc(true);
                navigate('/map/loginForm' + window.location.search + window.location.hash);
            }
        }
    }

    useEffect(() => {
        const loggedIn = checkLogin();
        if (loggedIn) {
            if (ctx.loginUser !== 'INIT') {
                AccountManager.sendCode({
                    email: ctx.loginUser,
                    action: AccountManager.DELETE_EMAIL_MSG,
                    lang,
                }).then();
            }
        }
    }, [ctx.loginUser]);

    function close() {
        if (setDeleteAccountFlag) {
            setDeleteAccountFlag(false);
        } else {
            ctx.setWantDeleteAcc(false);
            navigate('/map/' + window.location.search + window.location.hash);
        }
    }

    return (
        ctx.loginUser &&
        ctx.loginUser !== 'INIT' && (
            <Dialog open={true} onClose={close}>
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
                                if (userEmail !== ctx.loginUser) {
                                    setEmailError('Email does not match');
                                } else {
                                    AccountManager.deleteAccount({
                                        userEmail,
                                        code,
                                        setEmailError,
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
