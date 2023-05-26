import React, {useState, useContext, useEffect} from 'react';
import {Button, Checkbox, TextField, FormControlLabel} from '@mui/material/';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext from "../context/AppContext"
import {useNavigate} from "react-router-dom";
import Utils from "../util/Utils";
import {Box, Divider, Grid, IconButton, Link, ListItemText, MenuItem, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";
import {post, get} from "axios";
import {makeStyles} from "@material-ui/core/styles";


async function isRequestOk(response, setEmailError) {
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
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'username': username})
    });
    if (await isRequestOk(response, setEmailError)) {
        setState('register-verify');
        setEmailError('');
    }
}

async function userActivate(ctx, username, pwd, token, setEmailError, handleClose) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/activate`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'username': username, 'password': pwd, 'token': token})
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
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'username': username})
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
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'username': username, 'password': pwd})
    });
    if (await isRequestOk(response, setEmailError)) {
        setEmailError('');
        ctx.setLoginUser(username);
        handleClose();
    }
}

const useStyles = makeStyles(() => ({
    paper: {minWidth: "100vh"},
}));


export default function LoginDialog() {

    const ctx = useContext(AppContext);
    const classes = useStyles();

    const [userEmail, setUserEmail] = useState(ctx.userEmail);
    const [pwd, setPwd] = useState();
    const [code, setCode] = useState();
    const [emailError, setEmailError] = useState('');
    const [state, setState] = useState('login'); // login, register, register-verify
    const [openDangerousArea, setOpenDangerousArea] = useState(false);
    const [deleteAccountFlag, setDeleteAccountFlag] = useState(false);
    const [userEmailConfirmDelete, setUserEmailConfirmDelete] = useState(null);
    const [accountInfo, setAccountInfo] = useState(null);

    const navigate = useNavigate();

    const toggleOpenDangerousArea = () => {
        setOpenDangerousArea(!openDangerousArea);
        setDeleteAccountFlag(false);
        setEmailError('');
    };

    const handleClose = () => {
        setEmailError('');
        setPwd('');
        setCode('');
        navigate('/map/');
    };
    const handleLogin = () => {
        if (state === 'register') {
            userRegister(userEmail, setEmailError, setState);
        } else if (state === 'register-verify') {
            userActivate(ctx, userEmail, pwd, code, setEmailError, handleClose);
        } else {
            userLogin(ctx, userEmail, pwd, setEmailError, handleClose);
        }
    }

    useEffect(() => {
        if (ctx.loginUser && ctx.loginUser !== '') {
            getAccountInfo().then();
        }
    }, [ctx.loginUser]);

    async function getAccountInfo() {
        const resp = await get(`${process.env.REACT_APP_USER_API_SITE}/mapapi/get-account-info`);
        if (resp.data) {
            setAccountInfo(resp.data.info);
        }
    }

    function isValidEmail(email) {
        return email !== null && email.length >= 3 && email.length < 320;
    }

    async function deleteAccount(email) {
        if (isValidEmail(email)) {
            const resp = await post(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/delete-account`, email,
                {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).catch((error) => setEmailError(error.response.data));

            if (resp?.status === 200) {
                setEmailError('');
                setState('login');
                ctx.setLoginUser(null);
                handleClose();
                toggleOpenDangerousArea();
            }
        } else {
            setEmailError("Please enter valid email");
        }
    }

    if (ctx.loginUser) {
        return (
            <Dialog classes={{paper: classes.paper}} open={true} onClose={handleClose}>
                <DialogTitle>{ctx.loginUser}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Divider/>
                        {!ctx.listFiles || !ctx.listFiles.userid ? <></> :
                            <div>
                                <Typography variant="h6" noWrap>
                                    {`Files info:`}
                                </Typography>
                                <MenuItem>
                                    <ListItemText>
                                        <Typography sx={{ml: 1}} variant="body2" noWrap>
                                            {`Total files: ${ctx.listFiles.totalFiles} (${ctx.listFiles.totalFileVersions} including versions)`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem sx={{mt: -1}}>
                                    <ListItemText>
                                        <Typography sx={{ml: 1}} variant="body2" noWrap>
                                            {`Total files size: ${(ctx.listFiles.totalFileSize / 1024.0 / 1024.0).toFixed(1)} MB`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem sx={{mt: -1}}>
                                    <ListItemText>
                                        <Typography sx={{ml: 1}} variant="body2" noWrap>
                                            {`Cloud storage used: ${(ctx.listFiles.totalZipSize / 1024 / 1024.0).toFixed(1)} MB`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <Link sx={{fontSize: "10pt"}}
                                      href={`${process.env.REACT_APP_USER_API_SITE}/mapapi/download-backup`}
                                      target="_blank">Download backup
                                    ~{(ctx.listFiles.totalUniqueZipSize / 1024 / 1024.0).toFixed(1)} MB
                                </Link>
                            </div>
                        }
                        <Divider sx={{mt: 1}}/>
                        {accountInfo && <div>
                            <Typography variant="h6" noWrap>
                                {`Account info:`}
                            </Typography>
                            <MenuItem>
                                <ListItemText>
                                    <Typography sx={{ml: 1}} variant="body2" noWrap>
                                        {`Subscription: ${accountInfo.account} `}
                                        {accountInfo.type && `(type: ${accountInfo.type})`}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                            {accountInfo.startTime && accountInfo.expireTime && <>
                                <MenuItem sx={{mt: -1}}>
                                    <ListItemText>
                                        <Typography sx={{ml: 1}} variant="body2" noWrap>
                                            {`Start time: ${accountInfo.startTime}`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem sx={{mt: -1}}>
                                    <ListItemText>
                                        <Typography sx={{ml: 1}} variant="body2" noWrap>
                                            {`Expire time: ${accountInfo.expireTime}`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                            </>}
                        </div>}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link sx={{marginRight: "auto", fontSize: "10pt", ml: 2, color: '#ff595e'}}
                          href="#"
                          color="inherit"
                          onClick={toggleOpenDangerousArea}>
                        Dangerous area
                    </Link>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={(e) => userLogout(ctx, userEmail, setEmailError, handleClose, setState)}>
                        Logout</Button>
                </DialogActions>
                {openDangerousArea && <Box
                    sx={{mb: 2}}>
                    <Button
                        variant="contained"
                        component="span"
                        sx={{backgroundColor: '#ff595e !important', ml: 2}}
                        onClick={() => setDeleteAccountFlag(true)}>
                        Delete your account
                    </Button>
                    {deleteAccountFlag &&
                        <Dialog open={true} onClose={() => setDeleteAccountFlag(false)}>
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
                                    onClick={() => deleteAccount(userEmailConfirmDelete)}>
                                    Delete this account
                                </Button>
                            </DialogActions>
                        </Dialog>}
                </Box>}
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
                            setState(state === 'login' ? 'register' : 'login')}/>}
                                      label="Don't have the password or forgot it?"/>
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