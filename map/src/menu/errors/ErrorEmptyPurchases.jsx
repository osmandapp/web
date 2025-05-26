import { Box, Icon, ListItemText } from '@mui/material';
import loginStyles from '../../login/login.module.css';
import styles from './errors.module.css';
import { ReactComponent as PurchasesIcon } from '../../assets/icons/ic_action_purchases_outlined.svg';
import { useTranslation } from 'react-i18next';

export default function ErrorEmptyPurchases() {
    const { t } = useTranslation();

    return (
        <Box id="se-empty-login-page" className={loginStyles.block}>
            <Icon className={styles.icon}>
                <PurchasesIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    {t('no_purchases')}
                </ListItemText>
            </Box>
        </Box>
    );
}
