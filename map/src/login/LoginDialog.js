import React, {useState, useContext, useEffect} from 'react';
import {Button, Checkbox, TextField, FormControlLabel} from '@mui/material/';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext from "../context/AppContext"
import { useNavigate, useLocation } from "react-router-dom";
import {Box, Divider, Link, ListItemText, MenuItem, Typography} from "@mui/material";
import { apiGet } from '../util/HttpApi';
import {makeStyles} from "@material-ui/core/styles";
import DeleteAccountDialog from "./DeleteAccountDialog";
import AccountManager from "../context/AccountManager";
import ChangeEmailDialog from "./ChangeEmailDialog";
import DownloadBackupDialog from "./DownloadBackupDialog";

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
    const [changeEmailFlag, setChangeEmailFlag] = useState(false);
    const [accountInfo, setAccountInfo] = useState(null);
    const [openDownloadBackupDialog, setOpenDownloadBackupDialog] = useState(false);

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
            AccountManager.userRegister(userEmail, setEmailError, setState).then();
        } else if (state === 'register-verify') {
            AccountManager.userActivate(ctx, userEmail, pwd, code, setEmailError, handleClose).then();
        } else {
            AccountManager.userLogin(ctx, userEmail, pwd, setEmailError, handleClose).then();
        }
    }

    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#logout' && ctx.loginUser) {
            setState('login');
            ctx.setLoginUser('');
            setEmailError('You are logged out by server!');
            window.location.hash = ''; // useLocation() is read-only
        }
    }, [location.hash]);

    useEffect(() => {
        if (ctx.loginUser && ctx.loginUser !== '') {
            getAccountInfo().then();
        } else {
            if (ctx.useEmail) {
                setUserEmail(ctx.userEmail);
            }
        }
    }, [ctx.loginUser]);

    async function getAccountInfo() {
        const resp = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/get-account-info`);
        if (resp.data) {
            setAccountInfo(resp.data.info);
        }
    }

    if (ctx.loginUser) {
        return (
            <Dialog classes={{paper: classes.paper}} open={true} onClose={handleClose}>
                <DialogTitle sx={{color: '#f8931d'}}>{ctx.loginUser}</DialogTitle>
                <DialogContent>
                    <DialogContentText component={'span'}>
                        <Divider/>
                        {!ctx.listFiles || !ctx.listFiles.userid ? <></> :
                            <>
                                <Typography component={'span'} variant="h6" noWrap>
                                    {`Files info:`}
                                </Typography>
                                <MenuItem>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ml: 1}} variant="body2" noWrap>
                                            {`Total files: ${ctx.listFiles.totalFiles} (${ctx.listFiles.totalFileVersions} including versions)`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem sx={{mt: -1}}>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ml: 1}} variant="body2" noWrap>
                                            {`Total files size: ${(ctx.listFiles.totalFileSize / 1024.0 / 1024.0).toFixed(1)} MB`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem sx={{mt: -1}}>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ml: 1}} variant="body2" noWrap>
                                            {`Cloud storage used: ${(ctx.listFiles.totalZipSize / 1024 / 1024.0).toFixed(1)} MB`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <Button
                                    onClick={() => setOpenDownloadBackupDialog(true)}>
                                    Download backup
                                </Button>
                            </>
                        }
                        <Divider sx={{mt: 1}}/>
                        {accountInfo && <>
                            <Typography component={'span'} variant="h6" noWrap>
                                {`Account info:`}
                            </Typography>
                            <MenuItem>
                                <ListItemText>
                                    <Typography component={'span'} sx={{ml: 1}} variant="body2" noWrap>
                                        {`Subscription: ${accountInfo.account} `}
                                        {accountInfo.type && `(type: ${accountInfo.type})`}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                            {accountInfo.startTime && accountInfo.expireTime && <>
                                <MenuItem sx={{mt: -1}}>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ml: 1}} variant="body2" noWrap>
                                            {`Start time: ${accountInfo.startTime}`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem sx={{mt: -1}}>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ml: 1}} variant="body2" noWrap>
                                            {`Expire time: ${accountInfo.expireTime}`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                            </>}
                        </>}
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
                    <Button
                        onClick={() => AccountManager.userLogout(ctx, userEmail, setEmailError, handleClose, setState)}>
                        Logout
                    </Button>
                </DialogActions>
                {openDangerousArea && <Divider sx={{mb: 2, ml: 3, mr: 3, bgcolor: '#ff595e'}}/>}
                {openDangerousArea && <Box sx={{mb: 2}}>
                    <Button
                        variant="contained"
                        component="span"
                        sx={{backgroundColor: '#ff595e !important', ml: 3}}
                        onClick={() => {
                            setDeleteAccountFlag(true);
                            AccountManager.sendCode(ctx.loginUser).then();
                        }}>
                        Delete your account
                    </Button>
                    <Link sx={{marginRight: "auto", fontSize: "10pt", ml: 2, color: '#ff595e'}}
                          href="#"
                          color="inherit"
                          onClick={() => {
                              setChangeEmailFlag(true);
                              AccountManager.sendCode(ctx.loginUser).then();
                          }}>
                        Change email
                    </Link>
                    {deleteAccountFlag && <DeleteAccountDialog setDeleteAccountFlag={setDeleteAccountFlag}/>}
                    {changeEmailFlag && <ChangeEmailDialog setChangeEmailFlag={setChangeEmailFlag}/>}
                </Box>}
                {openDownloadBackupDialog &&
                    <DownloadBackupDialog
                        openDownloadBackupDialog={openDownloadBackupDialog}
                        setOpenDownloadBackupDialog={setOpenDownloadBackupDialog}/>}
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
                    value={userEmail ? userEmail : ctx.userEmail}
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
                    )}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
