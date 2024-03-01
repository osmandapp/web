import React, { useState, useContext, useEffect } from 'react';
import { Button, Checkbox, TextField, FormControlLabel } from '@mui/material/';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext from '../context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Divider, Link, ListItemText, MenuItem, Typography } from '@mui/material';
import DeleteAccountDialog from './DeleteAccountDialog';
import AccountManager from '../manager/AccountManager';
import ChangeEmailDialog from './ChangeEmailDialog';
import DownloadBackupDialog from './DownloadBackupDialog';
import { useWindowSize } from '../util/hooks/useWindowSize';
import { makeStyles } from '@material-ui/core/styles';
import { FREE_ACCOUNT, getAccountInfo } from '../manager/LoginManager';
import { useTranslation } from 'react-i18next';

export default function LoginDialog() {
    const ctx = useContext(AppContext);
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const [width] = useWindowSize();
    const widthDialog = width / 2 < 450 ? width * 0.75 : width / 2;

    const useStyles = makeStyles(() => ({
        paper: { maxWidth: `${widthDialog}px`, minWidth: `${widthDialog}px` },
    }));

    const classes = useStyles();

    const [userEmail, setUserEmail] = useState(''); // first, use empty to allow browser to use auto-login
    const [tryCookie, setTryCookie] = useState(null); // then try cookie if userEmail is still not set by browser

    const [pwd, setPwd] = useState();
    const [code, setCode] = useState();
    const [emailError, setEmailError] = useState(ctx.wantDeleteAcc ? 'Please log in to delete your account.' : '');
    const [state, setState] = useState('login'); // login, register, register-verify
    const [openDangerousArea, setOpenDangerousArea] = useState(false);
    const [deleteAccountFlag, setDeleteAccountFlag] = useState(false);
    const [changeEmailFlag, setChangeEmailFlag] = useState(false);
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
        if (ctx.wantDeleteAcc) {
            navigate('/map/delete-account' + window.location.search + window.location.hash);
        } else {
            navigate('/map/' + window.location.search + window.location.hash);
        }
    };

    const сloseDialog = () => {
        setEmailError('');
        setPwd('');
        setCode('');
        navigate('/map/' + window.location.search + window.location.hash);
    };

    const handleLogin = () => {
        if (state === 'register') {
            AccountManager.userRegister({ username: userEmail, setEmailError, setState, lang }).then();
        } else if (state === 'register-verify') {
            AccountManager.userActivate({
                ctx,
                username: userEmail,
                pwd,
                token: code,
                setEmailError,
                handleClose,
                lang,
            }).then();
        } else {
            if (userEmail) {
                AccountManager.userLogin({ ctx, username: userEmail, pwd, setEmailError, handleClose, lang }).then();
            }
        }
    };

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
        if (ctx.loginUser && ctx.loginUser !== '' && ctx.loginUser !== 'INIT') {
            getAccountInfo(ctx.setAccountInfo).then();
        } else {
            if (ctx.emailCookie) {
                setTimeout(() => setTryCookie(ctx.emailCookie), 500); // delay to allow browser auto-login
            }
        }
    }, [ctx.loginUser]);

    useEffect(() => {
        if (tryCookie && userEmail === '') {
            setUserEmail(tryCookie);
            setTryCookie(null);
        }
    }, [tryCookie]);

    const clickHandler = (event) => {
        if (event.detail % 3 === 0) {
            ctx.setDevelFeatures(!ctx.develFeatures);
        }
    };

    function getAccountType(type) {
        return type === FREE_ACCOUNT ? 'OsmAnd Start' : type;
    }

    if (ctx.loginUser) {
        return (
            <Dialog classes={{ paper: classes.paper }} open={true} onClose={handleClose}>
                <DialogTitle sx={{ color: '#f8931d' }} onClick={clickHandler}>
                    {ctx.loginUser} {ctx.develFeatures && ' :-)'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText component={'span'}>
                        <Divider />
                        {!ctx.listFiles || !ctx.listFiles.userid ? (
                            <></>
                        ) : (
                            <>
                                <Typography component={'span'} variant="h6" noWrap>
                                    {`Files info:`}
                                </Typography>
                                <MenuItem>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                            {`Total files: ${ctx.listFiles.totalFiles} (${ctx.listFiles.totalFileVersions} including versions)`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem sx={{ mt: -1 }}>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                            {`Total files size: ${(
                                                ctx.listFiles.totalFileSize /
                                                1024.0 /
                                                1024.0
                                            ).toFixed(1)} MB`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem sx={{ mt: -1 }}>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                            {`Cloud storage used: ${(
                                                ctx.listFiles.totalZipSize /
                                                1024 /
                                                1024.0
                                            ).toFixed(1)} MB ${
                                                ctx.accountInfo && `of ${ctx.accountInfo.maxAccSize / (1024 * 1024)} MB`
                                            }`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <Button onClick={() => setOpenDownloadBackupDialog(true)}>Download backup</Button>
                            </>
                        )}
                        <Divider sx={{ mt: 1 }} />
                        {ctx.accountInfo && (
                            <>
                                <Typography component={'span'} variant="h6" noWrap>
                                    {`Account info:`}
                                </Typography>
                                <MenuItem>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                            {`Subscription: ${getAccountType(ctx.accountInfo.account)} `}
                                            {ctx.accountInfo.type && `(type: ${ctx.accountInfo.type})`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                {ctx.accountInfo.startTime && ctx.accountInfo.expireTime && (
                                    <>
                                        <MenuItem sx={{ mt: -1 }}>
                                            <ListItemText>
                                                <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                                    {`Start time: ${ctx.accountInfo.startTime}`}
                                                </Typography>
                                            </ListItemText>
                                        </MenuItem>
                                        <MenuItem sx={{ mt: -1 }}>
                                            <ListItemText>
                                                <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                                    {`Expire time: ${ctx.accountInfo.expireTime}`}
                                                </Typography>
                                            </ListItemText>
                                        </MenuItem>
                                    </>
                                )}
                            </>
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link
                        sx={{ marginRight: 'auto', fontSize: '10pt', ml: 2, color: '#ff595e' }}
                        href="#"
                        color="inherit"
                        onClick={toggleOpenDangerousArea}
                    >
                        Dangerous area
                    </Link>
                    <Button onClick={handleClose}>Close</Button>
                    <Button
                        onClick={() =>
                            AccountManager.userLogout({
                                ctx,
                                username: userEmail,
                                setEmailError,
                                handleClose,
                                setState,
                                lang,
                            })
                        }
                    >
                        Logout
                    </Button>
                </DialogActions>
                {openDangerousArea && <Divider sx={{ mb: 2, ml: 3, mr: 3, bgcolor: '#ff595e' }} />}
                {openDangerousArea && (
                    <Box sx={{ mb: 2 }}>
                        <Button
                            variant="contained"
                            component="span"
                            sx={{ backgroundColor: '#ff595e !important', ml: 3, mb: '10px' }}
                            onClick={() => {
                                setDeleteAccountFlag(true);
                            }}
                        >
                            Delete your account
                        </Button>
                        <Link
                            sx={{
                                mr: 'auto',
                                ml: '25px',
                                fontSize: '10pt',
                                color: '#ff595e',
                                whiteSpace: 'nowrap',
                            }}
                            href="#"
                            color="inherit"
                            onClick={() => {
                                setChangeEmailFlag(true);
                                AccountManager.sendCode({
                                    action: AccountManager.CHANGE_EMAIL_MSG,
                                    setEmailError,
                                    lang,
                                }).then();
                            }}
                        >
                            Change email
                        </Link>
                        {deleteAccountFlag && <DeleteAccountDialog setDeleteAccountFlag={setDeleteAccountFlag} />}
                        {changeEmailFlag && <ChangeEmailDialog setChangeEmailFlag={setChangeEmailFlag} />}
                    </Box>
                )}
                {openDownloadBackupDialog && (
                    <DownloadBackupDialog
                        openDownloadBackupDialog={openDownloadBackupDialog}
                        setOpenDownloadBackupDialog={setOpenDownloadBackupDialog}
                        widthDialog={widthDialog}
                    />
                )}
            </Dialog>
        );
    }
    return (
        <Dialog classes={{ paper: classes.paper }} open={true} onClose={handleClose}>
            <DialogTitle>
                {state === 'register'
                    ? 'Register'
                    : state === 'register-verify'
                      ? 'Verify your email'
                      : t('user_login')}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {state === 'register-verify'
                        ? `Please check your email, enter new strong password and enter verification code`
                        : `You can login to the website only if you have registered OsmAnd cloud account: "OsmAnd Pro" or "OsmAnd start". Please enter your email below.`}
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
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    id="username"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    helperText={emailError ? emailError : ''}
                    error={emailError.length > 0}
                    value={userEmail}
                ></TextField>

                {state === 'register' ? (
                    <></>
                ) : (
                    <TextField
                        margin="dense"
                        onChange={(e) => setPwd(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                        id="pwd"
                        label={state === 'register-verify' ? 'New Password' : 'Password'}
                        type="password"
                        fullWidth
                        variant="standard"
                        value={pwd ? pwd : ''}
                    ></TextField>
                )}
                {state !== 'register-verify' ? (
                    <></>
                ) : (
                    <TextField
                        margin="dense"
                        onChange={(e) => setCode(e.target.value)}
                        id="code"
                        label="Code from Email"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={code ?? ''}
                    ></TextField>
                )}
                {state === 'register-verify' ? (
                    <></>
                ) : (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state === 'register'}
                                onChange={() => setState(state === 'login' ? 'register' : 'login')}
                            />
                        }
                        label="Don't have the password or forgot it?"
                    />
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={сloseDialog}>Cancel</Button>
                <Button id="se-submit-login" onClick={handleLogin}>
                    {state === 'register' ? 'Register' : state === 'register-verify' ? 'Activate' : 'Login'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
