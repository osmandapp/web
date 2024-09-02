import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from '../errors/errors.module.css';
import loginStyles from './login.module.css';
import { ReactComponent as UserAccountIcon } from '../../assets/icons/ic_custom_logo_osmand.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { openLogin } from '../../manager/LoginManager';

export default function EmptyLogin() {
    const ctx = useContext(AppContext);

    const navigate = useNavigate();
    const { t } = useTranslation();

    function createAccount() {
        ctx.setLoginState({ create: true });
    }

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
                onClick={() => openLogin(ctx, navigate)}
            >
                {t('web:login_btn')}
            </Button>
            <Button sx={{ mt: 1.5 }} className={styles.button} component="span" onClick={createAccount}>
                {t('web:create_account_btn')}
            </Button>
        </Box>
    );
}
