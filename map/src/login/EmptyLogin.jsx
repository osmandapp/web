import { Box, Icon, ListItemText } from '@mui/material';
import styles from '../menu/errors/errors.module.css';
import loginStyles from './login.module.css';
import { ReactComponent as UserAccountIcon } from '../assets/icons/ic_custom_logo_osmand.svg';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { createAccount, openLogin } from '../manager/LoginManager';
import LoginContext from '../context/LoginContext';
import AppContext from '../context/AppContext';
import GrayBtnWithBlueHover from '../frame/components/btns/GrayBtnWithBlueHover';

export default function EmptyLogin({
    description = 'web:empty_login_desc',
    setOpenLoginDialog = null,
    setOpenCreateAccountDialog = null,
}) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <Box
            id="se-empty-login-page"
            className={setOpenLoginDialog && setOpenCreateAccountDialog ? loginStyles.dialogBlock : loginStyles.block}
        >
            <Icon className={loginStyles.logoIcon}>
                <UserAccountIcon />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    {t('web:OsmAnd_account')}
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    {t(description)}
                </ListItemText>
            </Box>
            <GrayBtnWithBlueHover
                id="se-login-btn"
                action={() => {
                    if (setOpenLoginDialog) {
                        setOpenLoginDialog(true);
                    } else {
                        openLogin(ltx, navigate);
                    }
                }}
                text={t('web:login_btn')}
            />
            <GrayBtnWithBlueHover
                action={() => {
                    if (setOpenCreateAccountDialog) {
                        setOpenCreateAccountDialog(true);
                    } else {
                        createAccount(ctx, ltx, navigate);
                    }
                }}
                text={t('web:create_account_btn')}
                additionalStyle={{ mt: 1.5 }}
            />
        </Box>
    );
}
