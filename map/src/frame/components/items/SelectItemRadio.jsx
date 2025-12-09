import React from 'react';
import { Box, ListItemText, MenuItem, Radio, Typography } from '@mui/material';
import styles from './items.module.css';
import DividerWithMargin from '../dividers/DividerWithMargin';

export default function SelectItemRadio({
    title,
    checked = false,
    onSelect,
    disabled = false,
    showDivider = true,
    boldTitle = true,
}) {
    const handleRowClick = () => {
        if (!disabled) {
            onSelect();
        }
    };

    const handleRadioChange = (event) => {
        event.stopPropagation();
        if (!disabled) {
            onSelect();
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
                        <Box className={styles.selectRadioControl}>
                            <Radio checked={!!checked} onChange={handleRadioChange} />
                        </Box>
                    </Box>
                </ListItemText>
            </MenuItem>
            {showDivider && <DividerWithMargin margin={'16px'} />}
        </>
    );
}
