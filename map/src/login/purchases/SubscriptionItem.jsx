import styles from '../../frame/components/items/items.module.css';
import loginStyles from '../../login/login.module.css';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as SubsIcon } from '../../assets/icons/ic_action_osmand_pro_logo_colored.svg';
import PurchaseStatus from './PurchaseStatus';

const typeMap = {
    monthly: 'Monthly subscription',
    annual: 'Annual subscription',
};

export default function SubscriptionItem({ id, onClick, name, type, state, billingDate = null }) {
    return (
        <MenuItem
            id={`se-subs-item-${id}`}
            disableRipple
            className={loginStyles.purchaseItem}
            onClick={onClick}
            divider
        >
            <ListItemIcon className={styles.icon}>
                <SubsIcon />
            </ListItemIcon>
            <ListItemText>
                <Typography className={loginStyles.purchaseName} noWrap>
                    {name}
                </Typography>
                <Typography className={loginStyles.purchaseInfo} noWrap>
                    {typeMap[type] ?? type}
                </Typography>
                <Typography className={loginStyles.purchaseInfo} noWrap>
                    {`Next billing date: ${billingDate ?? 'N/A'}`}
                </Typography>
                <Box sx={{ mt: '6px' }}>
                    <PurchaseStatus status={state} />
                </Box>
            </ListItemText>
        </MenuItem>
    );
}
