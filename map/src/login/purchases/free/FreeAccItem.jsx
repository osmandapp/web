import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import loginStyles from '../../login.module.css';
import styles from '../../../frame/components/items/items.module.css';
import PurchaseStatus from '../PurchaseStatus';
import { ReactComponent as StartIcon } from '../../../assets/icons/ic_action_osmand_start_v2.svg';
import { useTranslation } from 'react-i18next';
import { FREE_ACCOUNT, FREE_ACCOUNT_SUB_TYPE } from '../../../manager/LoginManager';
import { fmt } from '../../../util/dateFmt';

export const FreeAccountObject = (regTime) => ({
    name: FREE_ACCOUNT,
    type: FREE_ACCOUNT_SUB_TYPE,
    state: 'active',
    purchaseTime: regTime,
    store: 'OsmAnd Web',
});

export default function FreeAccItem({ onClick, regTime }) {
    const { t } = useTranslation();

    const purchaseDate = regTime ? fmt.MMMdY(Number(regTime)) : 'N/A';

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
