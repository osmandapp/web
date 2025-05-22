import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from './items.module.css';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import React from 'react';

export default function SimpleItemWithRightInfo({ name, id, icon, rightText = null, onClick = null }) {
    return (
        <MenuItem id={id} className={styles.item} disableRipple onClick={onClick}>
            <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>
            <ListItemText>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <MenuItemWithLines name={name} maxLines={2} />
                    {rightText && <Typography className={styles.addInfo}>{rightText}</Typography>}
                </div>
            </ListItemText>
        </MenuItem>
    );
}
