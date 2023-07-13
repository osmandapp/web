import {Button, Grid, IconButton, TextField} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import {Close} from "@mui/icons-material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import React, {useContext, useEffect, useState} from "react";
import AccountManager from "../context/AccountManager";
import AppContext from "../context/AppContext";
import {useNavigate} from "react-router-dom";

export default function DeleteAccountDialog({setDeleteAccountFlag}) {

    const ctx = useContext(AppContext);
    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState(null);
    const [code, setCode] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [accountDeleted, setAccountDeleted] = useState(false);

    useEffect(() => {
        if (accountDeleted) {
            ctx.setUserEmail('');
            ctx.setLoginUser(null);
            navigate('/map/loginForm' + window.location.search + window.location.hash);
        }
    }, [accountDeleted]);


    return <Dialog open={true} onClose={() => setDeleteAccountFlag(false)}>
        <Grid container spacing={2}>
            <Grid item xs={11} sx={{mb: -3}}>
                <DialogTitle>Are you sure you want to do this?</DialogTitle>
            </Grid>
            <Grid item xs={1} sx={{ml: -2, mt: 1}}>
                <IconButton
                    variant="contained"
                    type="button"
                    onClick={() => {
                        setEmailError('');
                        setDeleteAccountFlag(false);
                    }}
                >
                    <Close fontSize="small"/>
                </IconButton>
            </Grid>
        </Grid>
        <DialogContent>
            <DialogContentText>
                Deletes all your data and account details from OsmAnd Cloud. Secondary devices will lose access to paid features.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                onChange={(e) => {
                    if (emailError !== '') {
                        setEmailError('')
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
            >
            </TextField>
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
                sx={{backgroundColor: '#ff595e !important', ml: 2}}
                onClick={() => AccountManager.deleteAccount(userEmail, code, setEmailError, setAccountDeleted)}>
                Delete this account
            </Button>
        </DialogActions>
    </Dialog>
}