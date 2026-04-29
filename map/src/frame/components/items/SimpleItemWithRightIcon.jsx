import React from 'react';
import { Box, ListItemText, MenuItem } from '@mui/material';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import styles from './items.module.css';

export default function SimpleItemWithRightIcon({ id, name, rightIcon = null, onClick = null, maxLines = 1 }) {
    return (
        <MenuItem id={id} className={styles.itemWithRightIcon} disableRipple onClick={onClick}>
            <ListItemText className={styles.itemWithRightIconText}>
                <MenuItemWithLines name={name} maxLines={maxLines} />
            </ListItemText>
            {rightIcon && <Box className={styles.itemRightIconBox}>{rightIcon}</Box>}
        </MenuItem>
    );
}
