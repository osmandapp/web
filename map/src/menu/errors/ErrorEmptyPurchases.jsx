import { Box, Icon, ListItemText } from '@mui/material';
import loginStyles from '../../login/login.module.css';
import styles from './errors.module.css';
import { ReactComponent as PurchasesIcon } from '../../assets/icons/ic_action_purchases_outlined.svg';

export default function ErrorEmptyPurchases() {
    return (
        <Box id="se-empty-login-page" className={loginStyles.block}>
            <Icon className={styles.icon}>
                <PurchasesIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    {'You don’t have any purchases'}
                </ListItemText>
            </Box>
        </Box>
    );
}
