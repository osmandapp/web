import { ListItemButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import styles from '../menu/mainmenu.module.css';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { closeLoginMenu, INIT_LOGIN_STATE, openLoginMenu } from '../manager/LoginManager';
import { ReactComponent as PersonIcon } from '../assets/icons/ic_action_user_account.svg';
import { MAIN_URL_WITH_SLASH } from '../manager/GlobalManager';
import LoginContext from '../context/LoginContext';

export default function LoginButton({ openMainMenu, setMenuInfo }) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const navigate = useNavigate();

    const { t } = useTranslation();

    const openLogin = () => {
        if (ltx.openLoginMenu) {
            closeLoginMenu(ltx);
            navigate(MAIN_URL_WITH_SLASH + location.hash);
        } else {
            openLoginMenu(ctx, ltx, navigate);
            setMenuInfo(null);
        }
    };

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
                id={ltx.loginUser && ltx.loginUser !== INIT_LOGIN_STATE ? 'se-logout-button' : 'se-login-button'}
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
                            {ltx.loginUser && ltx.loginUser !== INIT_LOGIN_STATE ? t('login_account') : t('user_login')}
                        </ListItemText>
                        {ltx.loginUser && ltx.loginUser !== INIT_LOGIN_STATE && (
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
