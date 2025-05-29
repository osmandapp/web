import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import styles from './items.module.css';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import React from 'react';

export default function SimpleItem({ maxLines = 2, text, id, onClick = null, ml = null, isMain = true }) {
    return (
        <MenuItem id={id} className={styles.item} disableRipple onClick={onClick}>
            {ml && <ListItemIcon className={styles.icon} sx={{ visibility: 'hidden' }} />}
            <ListItemText>
                <MenuItemWithLines name={text} maxLines={maxLines} className={!isMain ? styles.addText : undefined} />
            </ListItemText>
        </MenuItem>
    );
}
