import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from '../errors/errors.module.css';
import loginStyles from './login.module.css';
import { ReactComponent as UserAccountIcon } from '../../assets/icons/ic_custom_logo_osmand.svg';
import { useNavigate } from 'react-router-dom';
import { LOGIN_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
export default function EmptyLogin() {
    const ctx = useContext(AppContext);

    const navigate = useNavigate();
    const { t } = useTranslation();

    const openLogin = () => {
        navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.search + window.location.hash);
        ctx.setLoginState({ login: true });
    };

    return (
        <Box className={loginStyles.block}>
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
            <Button className={styles.button} component="span" onClick={openLogin}>
                {t('web:login_btn')}
            </Button>
        </Box>
    );
}
