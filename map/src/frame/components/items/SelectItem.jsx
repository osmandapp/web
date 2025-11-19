import React, { useMemo, useRef, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, CircularProgress, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from './items.module.css';
import { useTranslation } from 'react-i18next';
import ActionsMenu from '../../../menu/actions/ActionsMenu';
import DividerWithMargin from '../dividers/DividerWithMargin';

const defaultGetOptionValue = (option) => {
    if (typeof option === 'string') {
        return option;
    }
    return option?.value ?? option?.key ?? option?.id ?? option;
};

const defaultGetOptionLabel = (option) => {
    if (typeof option === 'string') {
        return option;
    }
    return option?.label ?? option?.name ?? option?.title ?? option?.value ?? option;
};

export default function SelectItem({
    title,
    value,
    options = [],
    onSelect,
    disabled = false,
    loading = false,
    placeholder,
    getOptionLabel = defaultGetOptionLabel,
    getOptionValue = defaultGetOptionValue,
    boldTitle = true,
    showDivider = true,
}) {
    const { t } = useTranslation();
    const [openMenu, setOpenMenu] = useState(false);
    const anchorRef = useRef(null);

    const normalizedOptions = useMemo(() => {
        return options.map((option) => ({
            raw: option,
            value: getOptionValue(option),
            label: getOptionLabel(option),
        }));
    }, [options, getOptionLabel, getOptionValue]);

    const currentLabel = useMemo(() => {
        const found = normalizedOptions.find((option) => option.value === value);
        return found?.label;
    }, [normalizedOptions, value]);

    const handleButtonClick = () => {
        if (!disabled) {
            setOpenMenu(true);
        }
    };

    const handleSelect = (option) => {
        onSelect?.(option.value, option.raw);
        setOpenMenu(false);
    };

    const displayValue = currentLabel || placeholder || t('shared_string_none');

    return (
        <>
            <MenuItem className={styles.item} onClick={handleButtonClick} disabled={disabled}>
                <ListItemText disableTypography>
                    <Box className={styles.selectItemContent}>
                        <Box className={styles.selectTitleRow}>
                            <Typography className={boldTitle ? styles.selectTitleText : styles.selectTitleTextNormal}>
                                {title}
                            </Typography>
                            {loading && <CircularProgress size={16} />}
                        </Box>
                        <Box className={styles.selectValueRow}>
                            <Typography variant="body2" className={styles.addInfo} noWrap>
                                {displayValue}
                            </Typography>
                            <ExpandMoreIcon sx={{ color: 'var(--text-secondary)' }} ref={anchorRef} />
                        </Box>
                    </Box>
                </ListItemText>
            </MenuItem>
            {showDivider && <DividerWithMargin margin="16px" />}
            <ActionsMenu
                open={openMenu}
                setOpen={setOpenMenu}
                anchorEl={anchorRef}
                actions={
                    <Box>
                        <Paper>
                            {normalizedOptions.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    divider={option.raw?.divider}
                                    selected={option.value === value}
                                    onClick={() => handleSelect(option)}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Paper>
                    </Box>
                }
            />
        </>
    );
}
