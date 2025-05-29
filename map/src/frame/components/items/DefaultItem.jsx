import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from './items.module.css';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import React from 'react';

export default function DefaultItem({
    id,
    icon = null,
    name,
    additionalInfo = null,
    revertText = false,
    onClick = null,
}) {
    return (
        <MenuItem id={id} className={styles.item} disableRipple onClick={onClick}>
            {icon && <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>}
            {revertText ? (
                <ListItemText sx={!icon ? { marginLeft: '48px' } : {}}>
                    <Typography variant="body2" className={styles.addInfo} noWrap>
                        {name}
                    </Typography>
                    {additionalInfo && <MenuItemWithLines name={additionalInfo} maxLines={2} />}
                </ListItemText>
            ) : (
                <ListItemText sx={!icon ? { marginLeft: '48px' } : {}}>
                    <MenuItemWithLines name={name} maxLines={2} />
                    {additionalInfo && (
                        <Typography variant="body2" className={styles.addInfo} noWrap>
                            {additionalInfo}
                        </Typography>
                    )}
                </ListItemText>
            )}
        </MenuItem>
    );
}
