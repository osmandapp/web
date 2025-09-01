import { ListItemButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import styles from '../menu/mainmenu.module.css';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { closeLoginMenu, INIT_LOGIN_STATE, openLoginMenu } from '../manager/LoginManager';
import { ReactComponent as PersonIcon } from '../assets/icons/ic_action_user_account.svg';
import { MAIN_URL_WITH_SLASH } from '../manager/GlobalManager';
import LoginContext from '../context/LoginContext';
import { closeSubPages } from '../menu/MainMenu';

export default function LoginButton({ openMainMenu, setMenuInfo, setShowInfoBlock }) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const navigate = useNavigate();
    const location = useLocation();

    const { t } = useTranslation();

    const openLogin = () => {
        clearPrevState();
        if (ltx.openLoginMenu) {
            closeLoginMenu(ltx);
            navigate({
                pathname: MAIN_URL_WITH_SLASH,
                hash: location.hash,
            });
        } else {
            openLoginMenu(ctx, ltx, navigate, location);
            closeSubPages({ ctx, ltx, closeLogin: false });
            setMenuInfo(null);
            setShowInfoBlock(false);
        }
    };

    function clearPrevState() {
        if (ctx.searchSettings.showExploreMarkers) {
            ctx.setSearchSettings({ ...ctx.searchSettings, showExploreMarkers: false });
        }
        ctx.setCurrentObjectType(null);
    }

    function setMenuStyles() {
        let res = [];
        //close
        !openMainMenu && res.push(styles.menuItemClose);
        //open
        openMainMenu && res.push(styles.menuItemOpen);
        //selected
        ltx.openLoginMenu && res.push(styles.menuItemSelected);

        return res.join(' ');
    }

    return (
        <MenuItem
            id={'se-open-login-button'}
            key={'Profile'}
            className={setMenuStyles()}
            sx={{
                minHeight: 'var(--profile-menu-button-height)',
                maxHeight: 'var(--profile-menu-button-height)',
            }}
            onClick={openLogin}
        >
            <ListItemButton
                id={ltx.loginUser && ltx.isLoggedIn() ? 'se-logout-button' : 'se-login-button'}
                className={styles.profileButton}
                sx={{
                    justifyContent: openMainMenu ? 'initial' : 'center',
                    p: '30px',
                    ml: '-15px',
                    mr: openMainMenu ? '-15px' : '0px',
                }}
            >
                <ListItemIcon
                    className={styles.profileIcon}
                    sx={{
                        justifyContent: 'center',
                        ml: openMainMenu ? '-12px' : 0,
                    }}
                >
                    <PersonIcon />
                </ListItemIcon>
                {openMainMenu && (
                    <div>
                        <ListItemText
                            sx={{
                                opacity: openMainMenu ? 1 : 0,
                                pl: openMainMenu ? 1 : 0,
                                fontSize: 14,
                                color: '#237bff',
                                textTransform: 'none !important',
                                '& .MuiTypography-root': {
                                    fontSize: '14px',
                                },
                            }}
                        >
                            {ltx.isLoggedIn() ? t('login_account') : t('user_login')}
                        </ListItemText>
                        {ltx.isLoggedIn() && (
                            <ListItemText
                                className={styles.profileLogin}
                                sx={{
                                    opacity: openMainMenu ? 1 : 0,
                                    pl: openMainMenu ? 1 : 0,
                                    '& .MuiTypography-root': {
                                        fontSize: '14px',
                                        textOverflow: 'ellipsis !important',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden !important',
                                    },
                                }}
                            >
                                {ltx.loginUser}
                            </ListItemText>
                        )}
                    </div>
                )}
            </ListItemButton>
        </MenuItem>
    );
}
