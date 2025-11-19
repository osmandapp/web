import React from 'react';
import { Box, ListItemText, MenuItem, Switch, Typography } from '@mui/material';
import styles from './items.module.css';
import DividerWithMargin from '../dividers/DividerWithMargin';

export default function SelectItemBoolean({
    title,
    checked = false,
    onToggle,
    disabled = false,
    showDivider = true,
    boldTitle = true,
}) {
    const handleRowClick = () => {
        if (!disabled) {
            onToggle?.(!checked);
        }
    };

    const handleSwitchChange = (event) => {
        event.stopPropagation();
        if (!disabled) {
            onToggle?.(event.target.checked);
        }
    };

    return (
        <>
            <MenuItem className={styles.item} onClick={handleRowClick} disabled={disabled}>
                <ListItemText disableTypography>
                    <Box className={styles.selectItemContent}>
                        <Typography className={boldTitle ? styles.selectTitleText : styles.selectTitleTextNormal}>
                            {title}
                        </Typography>
                        <Box className={styles.selectBooleanControl}>
                            <Switch edge="end" checked={!!checked} onChange={handleSwitchChange} />
                        </Box>
                    </Box>
                </ListItemText>
            </MenuItem>
            {showDivider && <DividerWithMargin margin={'16px'} />}
        </>
    );
}
