import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import loginStyles from '../../login.module.css';
import styles from '../../../frame/components/items/items.module.css';
import PurchaseStatus from '../PurchaseStatus';
import { ReactComponent as StartIcon } from '../../../assets/icons/ic_action_osmand_start_v2.svg';
import { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { FREE_ACCOUNT, FREE_ACCOUNT_SUB_TYPE } from '../../../manager/LoginManager';

export const FreeAccountObject = (regTime) => ({
    name: FREE_ACCOUNT,
    type: FREE_ACCOUNT_SUB_TYPE,
    state: 'active',
    purchaseTime: regTime,
    store: 'OsmAnd Web',
});

export default function FreeAccItem({ onClick, regTime }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const purchaseDate = regTime
        ? format(new Date(parseInt(regTime, 10)), 'MMM d, yyyy', { locale: ctx.dateLocale })
        : 'N/A';

    return (
        <MenuItem disableRipple className={loginStyles.purchaseItem} onClick={onClick} divider>
            <ListItemIcon className={styles.icon}>
                <StartIcon />
            </ListItemIcon>
            <ListItemText>
                <Typography className={loginStyles.purchaseName} noWrap>
                    {FREE_ACCOUNT_SUB_TYPE}
                </Typography>
                <Typography className={loginStyles.purchaseInfo} noWrap>
                    {t('free_account')}
                </Typography>
                <Typography className={loginStyles.purchaseInfo} noWrap>
                    {`${t('shared_string_purchased')}: ${purchaseDate}`}
                </Typography>
                <Box sx={{ mt: '6px' }}>
                    <PurchaseStatus status={'active'} />
                </Box>
            </ListItemText>
        </MenuItem>
    );
}
