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
    rightSlot = null,
    revertText = false,
    onClick = null,
    maxLines = 2,
    className = '',
    component = undefined,
}) {
    const textSx = {
        mr: maxLines === 1 ? 7 : 0,
        ...(icon ? {} : { ml: '48px' }),
        ...(rightSlot ? { flex: '1 1 auto', minWidth: 0 } : {}),
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

    const showRightTypography = rightSlot == null && rightText != null && rightText !== '';
    const showRightSlot = rightSlot != null;

    return (
        <MenuItem
            id={id}
            className={`${styles.item} ${className}`}
            disableRipple
            onClick={onClick}
            {...(component ? { component } : {})}
        >
            {icon && <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>}
            <ListItemText sx={textSx}>{content}</ListItemText>
            {showRightTypography && (
                <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <Typography className={styles.addInfo}>{rightText}</Typography>
                </Box>
            )}
            {showRightSlot && <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{rightSlot}</Box>}
        </MenuItem>
    );
}
