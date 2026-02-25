import styles from '../items/items.module.css';
import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React from 'react';

export default function TextWithLeftIcon({ icon, text, onClick }) {
    return (
        <MenuItem
            className={`${styles.tipsItem} ${onClick ? styles.tipsItemClickable : ''}`}
            disableRipple
            disableTouchRipple
            onClick={onClick ?? ((e) => e.preventDefault())}
        >
            <ListItemIcon className={styles.tipsIcon}>{icon}</ListItemIcon>
            <ListItemText className={styles.mainText}>
                <Typography whiteSpace="normal">{text}</Typography>
            </ListItemText>
        </MenuItem>
    );
}
