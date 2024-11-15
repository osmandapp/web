import { Box, FormControl, ListItemIcon, ListItemText, MenuItem, Select, SvgIcon, Typography } from '@mui/material';
import styles from './travel.module.css';
import MenuItemWithLines from '../components/MenuItemWithLines';
import React from 'react';
import { useWindowSize } from '../../util/hooks/useWindowSize';

const CustomSelect = ({
    name = null,
    value, // selected value
    onChange, // function to handle value change
    options, // array with data (list items)
    renderLabel,
    renderIcon = () => null,
    handleSelect = () => {}, // custom logic when an item is selected
    showAllOption = false,
    allLabel = 'All',
    menuWidth = '277px',
    hasIcons = true,
    defaultIcon = null,
    mx = '16px',
    my = '16px',
    marginTop = '-50px',
    marginLeft = '45px',
}) => {
    const [, height] = useWindowSize();

    return (
        <Box sx={{ mx: mx, my: my }}>
            <FormControl fullWidth>
                <Select
                    variant="filled"
                    sx={{
                        '& .MuiFilledInput-input': {
                            p: '8px 4px 8px 12px',
                        },
                        maxHeight: '56px',
                    }}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    renderValue={(selected) => {
                        const selectedOption = options.find((option) => option.id === selected);
                        return (
                            <Box className={styles.selectedOption}>
                                {hasIcons ? (
                                    <ListItemIcon sx={{ mt: '8px' }} className={styles.optionIcon}>
                                        {renderIcon(selectedOption)}
                                    </ListItemIcon>
                                ) : (
                                    <SvgIcon
                                        sx={{ mt: '8px' }}
                                        className={styles.optionIcon}
                                        component={defaultIcon}
                                        inheritViewBox
                                    />
                                )}
                                <div>
                                    {name && (
                                        <Typography variant="caption" noWrap>
                                            {name}
                                        </Typography>
                                    )}
                                    <Typography variant="inherit" noWrap>
                                        {renderLabel(selectedOption)}
                                    </Typography>
                                </div>
                            </Box>
                        );
                    }}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                        },
                        transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left',
                        },
                        PaperProps: {
                            style: {
                                minWidth: menuWidth,
                                maxHeight: height - 300,
                                height: height - 300,
                                width: menuWidth,
                                marginTop: marginTop,
                                marginLeft: marginLeft,
                            },
                        },
                    }}
                >
                    {showAllOption && (
                        <MenuItem className={styles.optionItem} value={allLabel}>
                            {allLabel}
                        </MenuItem>
                    )}
                    {options.map((option) => (
                        <MenuItem
                            className={styles.optionItem}
                            key={option.id}
                            value={option.id}
                            onClick={() => handleSelect(option.id)}
                        >
                            {hasIcons && (
                                <ListItemIcon className={styles.optionIcon}>{renderIcon(option)}</ListItemIcon>
                            )}
                            <ListItemText>
                                <MenuItemWithLines name={renderLabel(option)} maxLines={2} />
                            </ListItemText>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default CustomSelect;
