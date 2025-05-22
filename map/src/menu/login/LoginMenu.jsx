import headerStyles from '../trackfavmenu.module.css';
import { Alert, AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import styles from './login.module.css';
import { closeHeader } from '../actions/HeaderHelper';
import AppContext from '../../context/AppContext';
import LoginContext from '../../context/LoginContext';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/ic_action_logout.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/ic_action_user_account.svg';
import { ReactComponent as CloudIcon } from '../../assets/icons/ic_action_cloud.svg';
import { ReactComponent as PurchasesIcon } from '../../assets/icons/ic_action_purchases_outlined.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_user_account_delete.svg';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyLogin from './EmptyLogin';
import Login from './Login';
import { closeLoginMenu, FREE_ACCOUNT } from '../../manager/LoginManager';
import ChangeResetPwd from './ChangeResetPwd';
import CreateAccount from './CreateAccount';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';
import { userLogout } from '../../manager/AccountManager';
import i18n from 'i18next';
import DefaultItemWithActions from '../../frame/components/items/DefaultItemWithActions';
import ThickDivider from '../components/dividers/ThickDivider';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import SimpleItemWithRightInfo from '../../frame/components/items/SimpleItemWithRightInfo';
import ColorBlock from '../../frame/components/other/ColorBlock';
import DefaultItem from '../../frame/components/items/DefaultItem';
import AccountActions from '../actions/AccountActions';
import ChangeEmailDialog from '../../login/ChangeEmailDialog';
import DeleteAccountDialog from '../../login/DeleteAccountDialog';

export default function LoginMenu() {
    const ctx = useContext(AppContext);
    const ctxl = useContext(LoginContext);

    const lang = i18n.language;
    const anchorEl = useRef(null);

    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const [deleteAccountFlag, setDeleteAccountFlag] = useState(false);

    useEffect(() => {
        if (location.hash === '#logout' && ctxl.loginUser) {
            ctxl.setLoginUser(null);
            ctxl.setLoginError('You are logged out by server!');
            window.location.hash = ''; // useLocation() is read-only
            navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.hash);
            ctxl.setOpenLoginMenu(true);
        }
    }, [location.hash]);

    const handleClose = () => {
        ctx.setPrevPageUrl((prevPageUrl) => ({ ...prevPageUrl, active: true }));
    };

    function getAccountType(type) {
        return type === FREE_ACCOUNT ? 'OsmAnd Start' : type;
    }

    const cloudSize = `${(ctx.listFiles?.totalZipSize / 1024 / 1024.0).toFixed(1)} MB`;
    const mainSubscription = () => {
        if (!ctxl.accountInfo) {
            return '';
        }
        let status;
        status = new Date(parseInt(ctxl.accountInfo.expireTime, 10)).getTime() > Date.now() ? 'Active' : 'Expired';
        status = status ? status + ' · ' : '';
        return status + getAccountType(ctxl.accountInfo.account);
    };

    return (
        <>
            {ctxl.loginState.default && (
                <>
                    <AppBar position="static" className={headerStyles.appbar}>
                        <Toolbar className={headerStyles.toolbar}>
                            <IconButton
                                id={'se-login-menu-close'}
                                variant="contained"
                                type="button"
                                className={styles.closeIcon}
                                onClick={() => {
                                    closeLoginMenu(ctxl);
                                    closeHeader({ ctx });
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography id="se-login-menu-name" component="div" className={headerStyles.title}>
                                {'OsmAnd ' + t('login_account')}
                            </Typography>
                            {ctxl.loginUser && (
                                <Tooltip arrow placement="bottom-end" title={'Logout'}>
                                    <span>
                                        <IconButton
                                            variant="contained"
                                            type="button"
                                            className={headerStyles.appBarIcon}
                                            id="se-logout-btn"
                                            onClick={() =>
                                                userLogout({
                                                    ctxl,
                                                    username: ctxl.loginUser,
                                                    handleClose,
                                                    lang,
                                                })
                                            }
                                        >
                                            <LogoutIcon />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                            )}
                        </Toolbar>
                    </AppBar>
                    {!ctxl.loginUser ? (
                        <EmptyLogin />
                    ) : (
                        <>
                            <DefaultItemWithActions
                                icon={<UserIcon />}
                                name={'Email'}
                                additionalInfo={ctxl.loginUser}
                                anchorEl={anchorEl}
                                revertText={true}
                                actions={<AccountActions />}
                            />
                            <ThickDivider mt={'0px'} mb={'0px'} />
                            <SubTitleMenu text={'My data'} />
                            <SimpleItemWithRightInfo
                                name={t('osmand_cloud')}
                                icon={<CloudIcon />}
                                rightText={cloudSize}
                            />
                            <ThickDivider mt={'0px'} mb={'0px'} />
                            <SubTitleMenu text={'Payments and Purchases'} />
                            <DefaultItem
                                icon={<PurchasesIcon />}
                                name={t('purchases')}
                                additionalInfo={mainSubscription()}
                            />
                            <ThickDivider mt={'0px'} mb={'0px'} />
                            <SimpleItemWithRightInfo
                                name={t('delete_account')}
                                icon={<DeleteIcon />}
                                onClick={() => {
                                    setDeleteAccountFlag(true);
                                }}
                            />
                            <ColorBlock color={'#f0f0f0'} />
                        </>
                    )}
                    {ctxl.loginError && (
                        <Alert id="se-alert-login-info" severity="info">
                            {ctxl.loginError}
                        </Alert>
                    )}
                </>
            )}
            {ctxl.loginState.login && <Login />}
            {ctxl.loginState.changePwd && <ChangeResetPwd />}
            {ctxl.loginState.create && <CreateAccount />}
            {ctxl.openChangeEmailDialog && (
                <ChangeEmailDialog setOpenChangeEmailDialog={ctxl.setOpenChangeEmailDialog} />
            )}
            {deleteAccountFlag && <DeleteAccountDialog setDeleteAccountFlag={setDeleteAccountFlag} />}
        </>
    );
}
