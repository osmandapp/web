import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from '../errors/errors.module.css';
import loginStyles from './login.module.css';
import { ReactComponent as UserAccountIcon } from '../../assets/icons/ic_custom_logo_osmand.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { createAccount, openLogin } from '../../manager/LoginManager';
import LoginContext from '../../context/LoginContext';

export default function EmptyLogin() {
    const ctxl = useContext(LoginContext);

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
            <Button
                id="se-login-btn"
                className={styles.button}
                component="span"
                onClick={() => openLogin(ctxl, navigate)}
            >
                {t('web:login_btn')}
            </Button>
            <Button sx={{ mt: 1.5 }} className={styles.button} component="span" onClick={() => createAccount(ctxl)}>
                {t('web:create_account_btn')}
            </Button>
        </Box>
    );
}
