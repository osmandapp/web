import React from 'react';
import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { ReactComponent as ChevronIcon } from '../../../assets/icons/ic_action_arrow_up.svg';
import styles from './items.module.css';

export default function ChevronItem({ id, icon = null, title, value, onClick, disabled = false }) {
    return (
        <MenuItem id={id} className={`${styles.item} ${styles.itemChevron}`} onClick={onClick} disabled={disabled}>
            {icon && <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>}
            <ListItemText>
                <Typography className={styles.mainText}>{title}</Typography>
            </ListItemText>
            <div className={styles.itemChevronRight}>
                {value !== undefined && <Typography className={styles.addInfo}>{value}</Typography>}
                <ChevronIcon className={styles.sectionRowChevron} />
            </div>
        </MenuItem>
    );
}
