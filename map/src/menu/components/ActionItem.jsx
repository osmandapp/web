import { Icon, ListItem, ListItemText } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import React from 'react';

export default function ActionItem({ item }) {
    return (
        <ListItem className={styles.sortItem}>
            <Icon className={styles.icon}>{item.icon}</Icon>
            <ListItemText className={styles.sortText}>
                {typeof item?.name === 'function' ? item.name() : item?.name}
            </ListItemText>
        </ListItem>
    );
}
