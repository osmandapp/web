import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, CircularProgress, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from './items.module.css';

const getDisplayValue = (value, placeholder) => {
    if (value === null || typeof value === 'undefined') {
        return placeholder;
    }
    return value;
};

export default function SelectItemWithoutOptions({
    title,
    value,
    onClick,
    disabled = false,
    loading = false,
    placeholder = '',
    boldTitle = true,
    endIcon = <ExpandMoreIcon sx={{ color: 'var(--text-secondary)' }} />,
    showValue = true,
}) {
    const displayValue = getDisplayValue(value, placeholder);
    const TitleTypography = (
        <Typography className={boldTitle ? styles.selectTitleText : styles.selectTitleTextNormal}>{title}</Typography>
    );

    return (
        <MenuItem className={styles.item} onClick={onClick} disabled={disabled}>
            <ListItemText disableTypography>
                <Box className={styles.selectItemContent}>
                    <Box className={styles.selectTitleRow}>
                        {TitleTypography}
                        {loading && <CircularProgress size={16} />}
                    </Box>
                    <Box className={styles.selectValueRow}>
                        {showValue && (
                            <Typography variant="body2" className={styles.addInfo} noWrap>
                                {displayValue}
                            </Typography>
                        )}
                        {endIcon}
                    </Box>
                </Box>
            </ListItemText>
        </MenuItem>
    );
}
