import styles from '../../frame/components/items/items.module.css';
import loginStyles from '../../login/login.module.css';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ReactComponent as OsmAndProIcon } from '../../assets/icons/ic_action_osmand_pro_logo_colored.svg';
import { ReactComponent as OsmAndLiveIcon } from '../../assets/icons/ic_action_subscription_osmand_live.svg';
import { ReactComponent as OsmAndMapsIcon } from '../../assets/icons/ic_action_osmand_maps_plus.svg';
import PurchaseStatus from './PurchaseStatus';
import { useTranslation } from 'react-i18next';
import { formatString } from '../../manager/SettingsManager';
import { format } from 'date-fns';
import AppContext from '../../context/AppContext';

export const typeMap = {
    monthly: 'monthly_subscription',
    annual: 'annual_subscription',
    inapp: 'in_app_purchase_desc',
    free: 'free_account',
};

const subIconMap = {
    'OsmAnd Start': <OsmAndMapsIcon />,
    'OsmAnd Pro': <OsmAndProIcon />,
    'OsmAnd Live': <OsmAndLiveIcon />,
    'OsmAnd Maps+': <OsmAndMapsIcon />,
};

export default function SubscriptionItem({ id, onClick, name, type, state, billingDate = null }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const billingDateFormatted = billingDate
        ? format(new Date(parseInt(billingDate, 10)), 'MMM d, yyyy', { locale: ctx.dateLocale })
        : 'N/A';
    const billingDateString = formatString(t('next_billing_date'), [billingDateFormatted]);

    return (
        <MenuItem
            id={`se-subs-item-${id}`}
            disableRipple
            className={loginStyles.purchaseItem}
            onClick={onClick}
            divider
        >
            <ListItemIcon className={styles.icon}>{subIconMap[name] || <OsmAndProIcon />}</ListItemIcon>
            <ListItemText>
                <Typography className={loginStyles.purchaseName} noWrap>
                    {name}
                </Typography>
                <Typography className={loginStyles.purchaseInfo} noWrap>
                    {typeMap[type] ? t(typeMap[type]) : type}
                </Typography>
                <Typography className={loginStyles.purchaseInfo} noWrap>
                    {billingDateString}
                </Typography>
                <Box sx={{ mt: '6px' }}>
                    <PurchaseStatus status={state} />
                </Box>
            </ListItemText>
        </MenuItem>
    );
}
