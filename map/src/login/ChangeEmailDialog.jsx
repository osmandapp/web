import Dialog from "@mui/material/Dialog";
import {Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import {Close} from "@mui/icons-material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import AccountManager from "../context/AccountManager";
import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppContext from "../context/AppContext";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles(() => ({
    paper: {minWidth: "100vh"},
}));
export default function ChangeEmailDialog({setChangeEmailFlag}) {

    const ctx = useContext(AppContext);
    const navigate = useNavigate();
    const classes = useStyles();

    const [newEmail, setNewEmail] = useState(null);
    const [code, setCode] = useState(null);
    const [codeConfirmed, setCodeConfirmed] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [emailChanged, setEmailChanged] = useState(false);


    function handleNext() {
        setEmailError("");
        if (code && !newEmail) {
            AccountManager.confirmCode(newEmail, code, setEmailError).then((confirm) => {
                if (confirm) {
                    setCode(null);
                    setCodeConfirmed(true);
                }
            })
        } else if (!code && newEmail) {
            AccountManager.sendCode(newEmail, AccountManager.CHANGE_EMAIL_MSG, setEmailError).then((sent) => {
                if (sent) {
                    setCodeConfirmed(false);
                }
            });
        } else if (code && newEmail) {
            AccountManager.changeEmail(newEmail, code, setEmailError).then((changed) => {
                if (changed) {
                    setEmailChanged(true);
                }
            })
        }
    }

    function getMsg() {
        if (newEmail) {
            if (!codeConfirmed) {
                return `Please enter verification code which was sent to your new email`;
            }
        } else {
            if (!codeConfirmed) {
                return `Please enter verification code which was sent to your current email`;
            } else {
                return `Please enter your new email`;
            }
        }
    }

    return <>
        <Dialog classes={{paper: classes.paper}} open={true} onClose={() => setChangeEmailFlag(false)}>
            <Grid container spacing={2}>
                <Grid item xs={11} sx={{mb: -3}}>
                    <DialogTitle>Change email</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ml: -2, mt: 1}}>
                    <IconButton
                        variant="contained"
                        type="button"
                        onClick={() => {
                            setEmailError('');
                            setChangeEmailFlag(false);
                        }}
                    >
                        <Close fontSize="small"/>
                    </IconButton>
                </Grid>
            </Grid>
            <DialogContent>
                <DialogContentText>
                    {getMsg()}
                </DialogContentText>
                {(codeConfirmed) && <TextField
                    margin="dense"
                    onChange={(e) => {
                        setEmailError('');
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
                ></TextField>}
                {newEmail && !codeConfirmed && <Typography variant="body2" noWrap>
                    {`New email: ${newEmail}`}
                </Typography>}
                {!codeConfirmed && <TextField
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
                    helperText={emailError ? emailError : ''}
                    error={emailError.length > 0}
                ></TextField>}

            </DialogContent>
            <DialogActions>
                <Button onClick={() => setChangeEmailFlag(false)}>Cancel</Button>
                <Button disabled={emailError !== ''}
                        onClick={handleNext}>{code && newEmail ? 'Finish' : 'Next'}</Button>
            </DialogActions>
        </Dialog>
        {emailChanged && <Dialog classes={{paper: classes.paper}} open={true} onClose={() => setChangeEmailFlag(false)}>
            <Grid container spacing={2}>
                <Grid item xs={11} sx={{mb: -3}}>
                    <DialogTitle>Email changed succesfully</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ml: -2, mt: 1}}>
                    <IconButton
                        variant="contained"
                        type="button"
                        onClick={() => {
                            setEmailError('');
                            setChangeEmailFlag(false);
                            setEmailChanged(false);
                            ctx.setLoginUser(null);
                            ctx.setUserEmail('');
                            navigate('/map/' + window.location.search + window.location.hash);
                        }}
                    >
                        <Close fontSize="small"/>
                    </IconButton>
                </Grid>
            </Grid>
            <DialogContent>
                {newEmail && <Typography variant="body2" noWrap>
                    {`New email: ${newEmail}`}
                </Typography>}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setChangeEmailFlag(false)}>Cancel</Button>
                <Button onClick={() => {
                    ctx.setLoginUser(null);
                    ctx.setUserEmail(newEmail, {days: 30, SameSite: 'Strict'});
                }
                }>Login using new credentials
                </Button>
            </DialogActions>
        </Dialog>}
    </>
}