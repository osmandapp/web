import React, { useState, useContext } from 'react';
import { Button, Checkbox, TextField, FormControlLabel } from '@mui/material/';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext from "../context/AppContext"
import { useNavigate } from "react-router-dom";
import Utils from "../util/Utils";


async function isRequestOk(response, setEmailError) {
    // console.log(response.ok)
    if (!response.ok) {
        let message = await response.text();
        if (message) {
            try {
                let js = JSON.parse(message);
                message = `An error has occured: ${js.error?.message}`;
            } catch (e) {
            }
        }
        setEmailError(message);
        return null;
    }
    // let message = await response.text();
    // console.log(message);
    // const res = JSON.parse(message);
    const res = await response.json();
    if (res.status !== 'ok') {
        const message = `Unknown error has occured: ${JSON.stringify(res)}`;
        setEmailError(message);
    }
    return res;
}


async function userRegister(username, setEmailError, setState) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'username': username })
    });
    if (await isRequestOk(response, setEmailError)) {
        setState('register-verify');
        setEmailError('');
    }
}

async function userActivate(ctx, username, pwd, token, setEmailError, handleClose) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/activate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'username': username, 'password': pwd, 'token' : token })
    });
    if (await isRequestOk(response, setEmailError)) {
        ctx.setLoginUser(username);
        setEmailError('');
        handleClose();
    }
    return true;
}

async function userLogout(ctx, username, setEmailError, handleClose, setState) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'username': username })
    });
    if (await isRequestOk(response, setEmailError)) {
        setState('login');
        ctx.setLoginUser('');
        setEmailError('');
        handleClose();
    }
}

async function userLogin(ctx, username, pwd, setEmailError, handleClose) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'username': username, 'password': pwd })
    });
    // console.log(response)
    if (await isRequestOk(response, setEmailError)) {
        setEmailError('');
        ctx.setLoginUser(username);
        handleClose();
    }
}


export default function LoginDialog() {
    const ctx = useContext(AppContext);
    const [userEmail, setUserEmail] = useState(ctx.userEmail);
    const [pwd, setPwd] = useState();
    const [code, setCode] = useState();
    const [emailError, setEmailError] = useState('');
    const [state, setState] = useState('login'); // login, register, register-verify
    const navigate = useNavigate();
    const handleClose = () => {
        setEmailError('');
        setPwd('');
        setCode('');
        navigate('/map/');
    };
    const handleLogin = () => {
        if ( state === 'register' ) {
            userRegister(userEmail, setEmailError, setState);
        } else if (state === 'register-verify') {
            userActivate(ctx, userEmail, pwd, code, setEmailError, handleClose);
        } else {
            userLogin(ctx, userEmail, pwd, setEmailError, handleClose);
        }
    }
    
    if (ctx.loginUser) {
        return (
            <Dialog open={true} onClose={handleClose}>
                <DialogTitle>{ctx.loginUser}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You logged in as {ctx.loginUser}.<br />
                        {!ctx.listFiles || !ctx.listFiles.userid ? <></> :
                        <span>
                            Total files: {ctx.listFiles.totalFiles} ({ctx.listFiles.totalFileVersions} including versions).<br />
                            Total files size: {(ctx.listFiles.totalFileSize / 1024.0 / 1024.0).toFixed(1)} MB,
                            cloud storage used: {(ctx.listFiles.totalZipSize / 1024 / 1024.0).toFixed(1)} MB.
                            <br /><br />
                            <a href={`${process.env.REACT_APP_USER_API_SITE}/mapapi/download-backup`} target="_blank" >Download backup ~{(ctx.listFiles.totalUniqueZipSize / 1024 / 1024.0).toFixed(1)} MB</a>
                        </span>
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={(e) => userLogout(ctx, userEmail, setEmailError, handleClose, setState)}>
                        Logout</Button>
                </DialogActions>
            </Dialog>);

    }
    return (
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>{state === 'register' ? 'Register' : (
                state === 'register-verify' ? 'Verify your email' : 'Login'
            )}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {state === 'register-verify' ?
                        `Please check your email, enter new strong password and enter verification code` :
                        `You can login to the website only if you have OsmAnd Pro subscription.
                         Please enter your email below.`
                    }
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
                    id="username"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    helperText={emailError ? emailError : ''}
                    error={emailError.length > 0}
                    value={userEmail ? userEmail : ''}
                >
                </TextField>

                {state === 'register' ? <></> : <TextField
                    margin="dense"
                    onChange={(e) => setPwd(e.target.value)}
                    id="pwd"
                    label={state === 'register-verify' ? "New Password" : "Password"}
                    type="password"
                    fullWidth
                    variant="standard"
                    value={pwd ? pwd : ''}
                ></TextField>
                }
                {state !== 'register-verify' ? <></> : <TextField
                    margin="dense"
                    onChange={(e) => setCode(e.target.value)}
                    id="code"
                    label="Code from Email"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={code}
                ></TextField>
                }
                {state === 'register-verify' ? <></> :
                    <FormControlLabel control={
                        <Checkbox checked={state === 'register'} onChange={(e) =>
                            setState(state === 'login' ? 'register' : 'login')} />}
                        label="Don't have the password or forgot it?" />
                }

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleLogin}>{
                    state === 'register' ? 'Register' : (
                        state === 'register-verify' ? 'Activate' : 'Login' 
                    )}</Button>
            </DialogActions>
        </Dialog>
    );
}