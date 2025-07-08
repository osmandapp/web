import headerStyles from '../menu/trackfavmenu.module.css';
import { Alert, IconButton, Tooltip } from '@mui/material';
import { closeHeader } from '../menu/actions/HeaderHelper';
import AppContext from '../context/AppContext';
import LoginContext from '../context/LoginContext';
import { ReactComponent as LogoutIcon } from '../assets/icons/ic_action_logout.svg';
import { ReactComponent as UserIcon } from '../assets/icons/ic_action_user_account.svg';
import { ReactComponent as CloudIcon } from '../assets/icons/ic_action_cloud.svg';
import { ReactComponent as PurchasesIcon } from '../assets/icons/ic_action_purchases_outlined.svg';
import { ReactComponent as DeleteIcon } from '../assets/icons/ic_action_user_account_delete.svg';
import { ReactComponent as GiftIcon } from '../assets/icons/ic_action_gift_colored_red.svg';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyLogin from './EmptyLogin';
import Login from './Login';
import { closeLoginMenu, FREE_ACCOUNT, FREE_ACCOUNT_SUB_TYPE } from '../manager/LoginManager';
import ChangeResetPwd from './ChangeResetPwd';
import CreateAccount from './CreateAccount';
import { Outlet, useLocation, useNavigate, useOutlet } from 'react-router-dom';
import { LOGIN_URL, MAIN_URL_WITH_SLASH, PURCHASES_URL } from '../manager/GlobalManager';
import { userLogout } from '../manager/AccountManager';
import i18n from 'i18next';
import DefaultItemWithActions from '../frame/components/items/DefaultItemWithActions';
import ThickDivider from '../frame/components/dividers/ThickDivider';
import SubTitleMenu from '../frame/components/titles/SubTitleMenu';
import SimpleItemWithRightInfo from '../frame/components/items/SimpleItemWithRightInfo';
import ColorBlock from '../frame/components/other/ColorBlock';
import DefaultItem from '../frame/components/items/DefaultItem';
import AccountActions from '../menu/actions/AccountActions';
import ChangeEmailDialog from './dialogs/ChangeEmailDialog';
import DeleteAccountDialog from './dialogs/DeleteAccountDialog';
import AppBarWithBtns from '../frame/components/header/AppBarWithBtns';
import CloudInfo from './CloudInfo';
import DeveloperArea from './DeveloperArea';
import { getStatus } from './purchases/PurchaseManager';
import DividerWithMargin from '../frame/components/dividers/DividerWithMargin';

export function getAccountType({ account = null, name = null }) {
    if (account && account === FREE_ACCOUNT) {
        return FREE_ACCOUNT_SUB_TYPE;
    }
    return name ?? FREE_ACCOUNT_SUB_TYPE;
}

export default function LoginMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const lang = i18n.language;
    const anchorEl = useRef(null);
    const outlet = useOutlet();

    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const [deleteAccountFlag, setDeleteAccountFlag] = useState(false);
    const [openCloudInfo, setOpenCloudInfo] = useState(false);
    const [showDeveloperArea, setShowDeveloperArea] = useState(false);
    const [showGift, setShowGift] = useState(false);

    const clickHandler = (event) => {
        if (event.detail % 3 === 0) {
            ctx.setDevelFeatures(!ctx.develFeatures);
        }
    };

    useEffect(() => {
        const inAppPurchases = ltx.accountInfo?.inAppPurchases && JSON.parse(ltx.accountInfo.inAppPurchases);
        if (inAppPurchases && inAppPurchases.length > 0) {
            const hasGift = inAppPurchases.some((purchase) => purchase.sku.includes('osmand_pro_xv'));
            setShowGift(hasGift);
        }
    }, [ltx.accountInfo]);

    useEffect(() => {
        if (ltx.loginRoles && (ltx.loginRoles.includes('ROLE_ADMIN') || ltx.loginRoles.includes('ROLE_SUPPORT'))) {
            setShowDeveloperArea(true);
        } else {
            setShowDeveloperArea(false);
        }
    }, [ltx.loginRoles]);

    useEffect(() => {
        if (location.hash === '#logout' && ltx.loginUser) {
            ltx.setLoginUser(null);
            ltx.setLoginError('You are logged out by server!');
            window.location.hash = ''; // useLocation() is read-only
            navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.hash);
            ltx.setOpenLoginMenu(true);
        }
    }, [location.hash]);

    const handleClose = () => {
        ctx.setPrevPageUrl((prevPageUrl) => ({ ...prevPageUrl, active: true }));
    };

    const cloudSize = `${(ctx.listFiles?.totalZipSize / 1024 / 1024.0).toFixed(1)} MB`;
    const mainSubscription = () => {
        if (!ltx.accountInfo) {
            return FREE_ACCOUNT_SUB_TYPE;
        }
        const status = ltx.accountInfo.state ? getStatus(ltx.accountInfo.state, t) + ' · ' : '';
        const type = getAccountType({ account: ltx.accountInfo.account, name: ltx.accountInfo.name }) || '';
        return status + type;
    };

    function close() {
        closeLoginMenu(ltx);
        closeHeader({ ctx });
        navigate({
            pathname: MAIN_URL_WITH_SLASH,
            hash: location.hash,
        });
    }

    return (
        <>
            {openCloudInfo && <CloudInfo setOpenCloudInfo={setOpenCloudInfo} />}
            <Outlet />
            {ltx.loginState.default && !openCloudInfo && !outlet && (
                <>
                    <AppBarWithBtns
                        id={'login-menu'}
                        header={'OsmAnd ' + t('login_account')}
                        leftBtnAction={close}
                        rightBtns={
                            <>
                                {ltx.loginUser && (
                                    <Tooltip arrow placement="bottom-end" title={'Logout'}>
                                        <span>
                                            <IconButton
                                                variant="contained"
                                                type="button"
                                                className={headerStyles.appBarIcon}
                                                id="se-logout-btn"
                                                onClick={() =>
                                                    userLogout({
                                                        ltx: ltx,
                                                        username: ltx.loginUser,
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
                            </>
                        }
                    />
                    {!ltx.loginUser ? (
                        <EmptyLogin />
                    ) : (
                        <>
                            <DefaultItemWithActions
                                id={'se-login-menu-user-item'}
                                onClick={clickHandler}
                                icon={<UserIcon />}
                                name={`Email ${ctx.develFeatures ? ' :-)' : ''}`}
                                additionalInfo={ltx.loginUser}
                                anchorEl={anchorEl}
                                revertText={true}
                                actions={<AccountActions />}
                            />
                            <ThickDivider mt={'0px'} mb={'0px'} />
                            {showDeveloperArea && <DeveloperArea />}
                            <SubTitleMenu text={t('web:my_data')} />
                            <SimpleItemWithRightInfo
                                id={'se-login-menu-osmand-cloud-item'}
                                name={t('osmand_cloud')}
                                icon={<CloudIcon />}
                                rightText={cloudSize}
                                onClick={() => {
                                    setOpenCloudInfo(true);
                                }}
                            />
                            <ThickDivider mt={'0px'} mb={'0px'} />
                            <SubTitleMenu text={t('web:payments_and_purchases')} />
                            <DefaultItem
                                id={'se-login-menu-osmand-purchases'}
                                icon={<PurchasesIcon />}
                                name={t('purchases')}
                                additionalInfo={mainSubscription()}
                                onClick={() => {
                                    navigate({
                                        pathname: PURCHASES_URL,
                                        hash: location.hash,
                                    });
                                }}
                            />
                            {showGift && (
                                <>
                                    <DividerWithMargin margin={'64px'} />
                                    <DefaultItem
                                        icon={<GiftIcon />}
                                        name={t('web:receive_gift')}
                                        onClick={() => {
                                            window.open('https://forms.gle/N3ixo7uQTRD3vZ4S7', '_blank');
                                        }}
                                    />
                                </>
                            )}
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
                    {ltx.loginError && (
                        <Alert id="se-alert-login-info" severity="info">
                            {ltx.loginError}
                        </Alert>
                    )}
                </>
            )}
            {ltx.loginState.login && <Login />}
            {ltx.loginState.changePwd && <ChangeResetPwd />}
            {ltx.loginState.create && <CreateAccount />}
            {ltx.openChangeEmailDialog && <ChangeEmailDialog setOpenChangeEmailDialog={ltx.setOpenChangeEmailDialog} />}
            {deleteAccountFlag && <DeleteAccountDialog setDeleteAccountFlag={setDeleteAccountFlag} />}
        </>
    );
}
