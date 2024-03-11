import Dialog from '@mui/material/Dialog';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { Close } from '@mui/icons-material';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import AccountManager from '../manager/AccountManager';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '../util/hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

export default function ChangeEmailDialog({ setChangeEmailFlag }) {
    const ctx = useContext(AppContext);
    const navigate = useNavigate();

    const { i18n } = useTranslation();
    const lang = i18n.language;

    const [width] = useWindowSize();
    const widthDialog = width / 2 < 450 ? width * 0.75 : width / 2;
    const useStyles = makeStyles(() => ({
        paper: { maxWidth: `${widthDialog}px`, minWidth: `${widthDialog}px` },
    }));

    const classes = useStyles();

    const [newEmail, setNewEmail] = useState(null);
    const [oldCode, setOldCode] = useState(null);
    const [newCode, setNewCode] = useState(null);
    const [oldCodeConfirmed, setOldCodeConfirmed] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [emailChanged, setEmailChanged] = useState(false);

    function handleNext() {
        setEmailError('');
        if (oldCode && newEmail && !oldCodeConfirmed) {
            AccountManager.sendCodeToNewEmail({
                email: newEmail,
                action: AccountManager.CHANGE_EMAIL_MSG,
                setEmailError,
                lang,
                code: oldCode,
            }).then((sent) => {
                if (sent) {
                    setOldCodeConfirmed(true);
                    setOldCode(null);
                }
            });
        } else if (oldCodeConfirmed) {
            AccountManager.changeEmail({ email: newEmail, token: newCode, setEmailError, lang }).then((changed) => {
                if (changed) {
                    setEmailChanged(true);
                }
            });
        }
    }

    function getMsg() {
        if (!oldCodeConfirmed) {
            return `Please enter verification code which was sent to your current email`;
        } else {
            return `Please enter your new email`;
        }
    }

    return (
        <>
            <Dialog classes={{ paper: classes.paper }} open={true} onClose={() => setChangeEmailFlag(false)}>
                <Grid container spacing={2}>
                    <Grid item xs={11} sx={{ mb: -3 }}>
                        <DialogTitle>Change email</DialogTitle>
                    </Grid>
                    <Grid item xs={1} sx={{ ml: -2, mt: 1 }}>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                setEmailError('');
                                setChangeEmailFlag(false);
                            }}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
                <DialogContent>
                    <DialogContentText>{getMsg()}</DialogContentText>
                    {newEmail && oldCodeConfirmed && (
                        <Typography variant="body2" noWrap>
                            {`New email: ${newEmail}`}
                        </Typography>
                    )}
                    <TextField
                        margin="dense"
                        onChange={(e) => {
                            oldCodeConfirmed ? setNewCode(e.target.value) : setOldCode(e.target.value);
                        }}
                        id="code"
                        label={`Code from ${newEmail && oldCodeConfirmed ? 'New' : 'Old'} Email`}
                        type="text"
                        fullWidth
                        variant="standard"
                        value={(newEmail && oldCodeConfirmed ? newCode : oldCode) ?? ''}
                        helperText={emailError ? emailError : ''}
                        error={emailError.length > 0}
                    ></TextField>
                    {!oldCodeConfirmed && (
                        <TextField
                            margin="dense"
                            onChange={(e) => {
                                setNewEmail(e.target.value);
                            }}
                            id="pwd"
                            label="New Email"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={newEmail ? newEmail : ''}
                            helperText={emailError ? emailError : ''}
                            error={emailError.length > 0}
                        ></TextField>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setChangeEmailFlag(false)}>Cancel</Button>
                    <Button disabled={emailError !== ''} onClick={handleNext}>
                        {oldCodeConfirmed ? 'Finish' : 'Next'}
                    </Button>
                </DialogActions>
            </Dialog>
            {emailChanged && (
                <Dialog classes={{ paper: classes.paper }} open={true} onClose={() => setChangeEmailFlag(false)}>
                    <Grid container spacing={2}>
                        <Grid item xs={11} sx={{ mb: -3 }}>
                            <DialogTitle>Email changed succesfully</DialogTitle>
                        </Grid>
                        <Grid item xs={1} sx={{ ml: -2, mt: 1 }}>
                            <IconButton
                                variant="contained"
                                type="button"
                                onClick={() => {
                                    setEmailError('');
                                    setChangeEmailFlag(false);
                                    setEmailChanged(false);
                                    ctx.setLoginUser(null);
                                    ctx.setEmailCookie('');
                                    navigate('/map/' + window.location.search + window.location.hash);
                                }}
                            >
                                <Close fontSize="small" />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <DialogContent>
                        {newEmail && (
                            <Typography variant="body2" noWrap>
                                {`New email: ${newEmail}`}
                            </Typography>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setChangeEmailFlag(false)}>Cancel</Button>
                        <Button
                            onClick={() => {
                                ctx.setLoginUser(null);
                                ctx.setEmailCookie(newEmail, { days: 30, SameSite: 'Strict' });
                            }}
                        >
                            Login using new credentials
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
}
