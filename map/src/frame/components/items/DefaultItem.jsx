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
    maxLines = 2,
}) {
    const textSx = {
        mr: maxLines === 1 ? 7 : 0,
        ...(icon ? {} : { ml: '48px' }),
    };

    return (
        <MenuItem id={id} className={styles.item} disableRipple onClick={onClick}>
            {icon && <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>}
            {revertText ? (
                <ListItemText sx={textSx}>
                    <Typography variant="body2" className={styles.addInfo} noWrap>
                        {name}
                    </Typography>
                    {additionalInfo && <MenuItemWithLines name={additionalInfo} maxLines={maxLines} />}
                </ListItemText>
            ) : (
                <ListItemText sx={textSx}>
                    <MenuItemWithLines name={name} maxLines={maxLines} />
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
