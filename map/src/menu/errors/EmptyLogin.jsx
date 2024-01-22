import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from './errors.module.css';
import { ReactComponent as UserAccountIcon } from '../../assets/icons/ic_action_user_account.svg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function EmptyLogin() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const openLogin = () => {
        navigate('/map/loginForm' + window.location.search + window.location.hash);
    };

    return (
        <Box className={styles.block}>
            <Icon className={styles.icon}>
                <UserAccountIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    OsmAnd Account
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    Manage your data across devices with an OsmAnd account.
                </ListItemText>
            </Box>
            <Button className={styles.button} component="span" onClick={openLogin}>
                {t('user_login')}
            </Button>
        </Box>
    );
}
