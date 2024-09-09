import { ListItemButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import styles from '../mainmenu.module.css';
import { Person } from '@mui/icons-material';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { INIT_LOGIN_STATE, openLoginMenu } from '../../manager/LoginManager';

export default function LoginButton({ openMainMenu }) {
    const ctx = useContext(AppContext);
    const navigate = useNavigate();

    const { t } = useTranslation();

    const openLogin = () => {
        openLoginMenu(ctx, navigate);
    };

    return (
        <MenuItem
            id={'se-open-login-button'}
            key={'Profile'}
            sx={{
                minHeight: 'var(--profile-menu-button-height)',
                maxHeight: 'var(--profile-menu-button-height)',
            }}
            onClick={openLogin}
        >
            <ListItemButton
                id={ctx.loginUser && ctx.loginUser !== INIT_LOGIN_STATE ? 'se-logout-button' : 'se-login-button'}
                className={styles.profileButton}
                sx={{
                    justifyContent: openMainMenu ? 'initial' : 'center',
                }}
            >
                <ListItemIcon
                    sx={{
                        justifyContent: 'center',
                        ml: openMainMenu ? '-14px' : 0,
                    }}
                >
                    <Person />
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
                            {ctx.loginUser && ctx.loginUser !== INIT_LOGIN_STATE ? t('login_account') : t('user_login')}
                        </ListItemText>
                        {ctx.loginUser && ctx.loginUser !== INIT_LOGIN_STATE && (
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
                                {ctx.loginUser}
                            </ListItemText>
                        )}
                    </div>
                )}
            </ListItemButton>
        </MenuItem>
    );
}
