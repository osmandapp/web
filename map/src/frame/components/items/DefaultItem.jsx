import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from './items.module.css';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import React from 'react';

export default function DefaultItem({
    id,
    icon = null,
    name,
    additionalInfo = null,
    rightText = null,
    revertText = false,
    onClick = null,
    maxLines = 2,
    className = '',
}) {
    const textSx = {
        mr: maxLines === 1 ? 7 : 0,
        ...(icon ? {} : { ml: '48px' }),
    };

    const content = revertText ? (
        <>
            <Typography variant="body2" className={styles.addInfo} noWrap>
                {name}
            </Typography>
            {additionalInfo && <MenuItemWithLines name={additionalInfo} maxLines={maxLines} />}
        </>
    ) : (
        <>
            <MenuItemWithLines name={name} maxLines={maxLines} />
            {additionalInfo && (
                <Typography variant="body2" className={styles.addInfo} noWrap>
                    {additionalInfo}
                </Typography>
            )}
        </>
    );

    return (
        <MenuItem id={id} className={`${styles.item} ${className}`} disableRipple onClick={onClick}>
            {icon && <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>}
            <ListItemText sx={textSx}>{content}</ListItemText>
            {rightText != null && rightText !== '' && (
                <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <Typography className={styles.addInfo}>{rightText}</Typography>
                </Box>
            )}
        </MenuItem>
    );
}
