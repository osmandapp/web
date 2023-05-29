import {Button, Grid, IconButton, TextField} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import {Close} from "@mui/icons-material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import React, {useContext, useState} from "react";
import AccountManager from "../context/AccountManager";
import AppContext from "../context/AppContext";

export default function DeleteAccountDialog({setDeleteAccountFlag, emailError, setEmailError, setState, handleClose, toggleOpenDangerousArea}) {

    const ctx = useContext(AppContext);

    const [userEmailConfirmDelete, setUserEmailConfirmDelete] = useState(null);

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
                We will immediately delete all of your files from cloud. All paid features will be
                disabled.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                onChange={(e) => {
                    if (emailError !== '') {
                        setEmailError('')
                    }
                    setUserEmailConfirmDelete(e.target.value);
                }}
                id="username-delete"
                label="Your email address"
                type="email"
                fullWidth
                variant="standard"
                helperText={emailError ? emailError : ''}
                error={emailError.length > 0}
                value={userEmailConfirmDelete ? userEmailConfirmDelete : ''}
            >
            </TextField>
        </DialogContent>
        <DialogActions>
            <Button
                variant="contained"
                component="span"
                sx={{backgroundColor: '#ff595e !important', ml: 2}}
                onClick={() => AccountManager.deleteAccount(userEmailConfirmDelete, setEmailError, setState, handleClose, ctx, toggleOpenDangerousArea)}>
                Delete this account
            </Button>
        </DialogActions>
    </Dialog>
}