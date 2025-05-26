import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import loginStyles from '../login.module.css';
import styles from '../../frame/components/items/items.module.css';
import PurchaseStatus from './PurchaseStatus';
import React from 'react';
import { ReactComponent as InappIcon } from '../../assets/icons/ic_action_osmand_maps_plus.svg';
import * as locales from 'date-fns/locale';
import i18n from 'i18next';
import { format } from 'date-fns';

export default function InAppItem({ id, onClick, name, purchaseTime }) {
    const type = 'One-time payment';
    const locale = locales[i18n.language] || locales.enUS;
    const purchaseDate = purchaseTime ? format(new Date(parseInt(purchaseTime, 10)), 'MMM d, yyyy', { locale }) : 'N/A';

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
                    {type}
                </Typography>
                <Typography className={loginStyles.purchaseInfo} noWrap>
                    {`Purchased: ${purchaseDate}`}
                </Typography>
                <Box sx={{ mt: '6px' }}>
                    <PurchaseStatus status={'active'} />
                </Box>
            </ListItemText>
        </MenuItem>
    );
}
