import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import loginStyles from '../login.module.css';
import styles from '../../frame/components/items/items.module.css';
import PurchaseStatus from './PurchaseStatus';
import React from 'react';
import { ReactComponent as InappIcon } from '../../assets/icons/ic_action_osmand_maps_plus.svg';
import { useTranslation } from 'react-i18next';
import { typeMap } from './SubscriptionItem';
import { fmt } from '../../util/dateFmt';

export default function InAppItem({ id, onClick, name, purchaseTime }) {
    const { t } = useTranslation();

    const purchaseDate = purchaseTime ? fmt.MMMdY(Number(purchaseTime)) : 'N/A';

    return (
        <MenuItem
            id={`se-inapp-item-${id}`}
            disableRipple
            className={loginStyles.purchaseItem}
            onClick={onClick}
            divider
        >
            <ListItemIcon className={styles.icon}>
                <InappIcon />
            </ListItemIcon>
            <ListItemText>
                <Typography className={loginStyles.purchaseName} noWrap>
                    {name}
                </Typography>
                <Typography className={loginStyles.purchaseInfo} noWrap>
                    {t(typeMap['inapp'])}
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
