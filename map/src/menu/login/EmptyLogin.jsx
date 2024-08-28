import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from '../errors/errors.module.css';
import loginStyles from './login.module.css';
import { ReactComponent as UserAccountIcon } from '../../assets/icons/ic_custom_logo_osmand.svg';
import { useNavigate } from 'react-router-dom';
import { LOGIN_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
export default function EmptyLogin() {
    const ctx = useContext(AppContext);

    const navigate = useNavigate();

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
                    OsmAnd Account
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    Create or log in to your OsmAnd account to manage your tracks and favorites across all your devices.
                </ListItemText>
            </Box>
            <Button className={styles.button} component="span" onClick={openLogin}>
                Log in
            </Button>
        </Box>
    );
}
