import { Box, Icon, ListItemText } from '@mui/material';
import styles from '../menu/errors/errors.module.css';
import loginStyles from './login.module.css';
import { ReactComponent as UserAccountIcon } from '../assets/icons/ic_custom_logo_osmand.svg';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { createAccount, openLogin } from '../manager/LoginManager';
import LoginContext from '../context/LoginContext';
import GrayBtnWithBlueHover from '../frame/components/btns/GrayBtnWithBlueHover';

export default function EmptyLogin() {
    const ltx = useContext(LoginContext);

    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <Box id="se-empty-login-page" className={loginStyles.block}>
            <Icon className={loginStyles.logoIcon}>
                <UserAccountIcon />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    {t('web:OsmAnd_account')}
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    {t('web:empty_login_desc')}
                </ListItemText>
            </Box>
            <GrayBtnWithBlueHover id="se-login-btn" action={() => openLogin(ltx, navigate)} text={t('web:login_btn')} />
            <GrayBtnWithBlueHover
                action={() => createAccount(ltx)}
                text={t('web:create_account_btn')}
                additionalStyle={{ mt: 1.5 }}
            />
        </Box>
    );
}
