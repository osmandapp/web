import React from 'react';
import { MenuItem, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import styles from './items.module.css';

export default function SimpleItemWithSwitch({ icon, text, checked, onChange, id, className, iconClassName }) {
    const handleSwitchChange = (e) => {
        e.stopPropagation();
        onChange(e);
    };

    const handleMenuItemClick = () => {
        onChange();
    };

    return (
        <MenuItem className={className || styles.item} onClick={handleMenuItemClick}>
            <ListItemIcon className={iconClassName || styles.icon}>{icon}</ListItemIcon>
            <ListItemText>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="inherit" noWrap>
                        {text}
                    </Typography>
                    <Switch
                        id={id}
                        checked={checked}
                        onClick={(e) => e.stopPropagation()}
                        onChange={handleSwitchChange}
                    />
                </div>
            </ListItemText>
        </MenuItem>
    );
}
