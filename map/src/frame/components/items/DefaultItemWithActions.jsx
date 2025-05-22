import { IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import { ReactComponent as MenuIcon } from '../../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../../assets/icons/ic_overflow_menu_with_background.svg';
import React, { useState } from 'react';
import styles from '../items/items.module.css';

export default function DefaultItemWithActions({
    id,
    icon,
    name,
    additionalInfo = null,
    anchorEl,
    revertText = false,
}) {
    const [hoverIconInfo, setHoverIconInfo] = useState(false);

    return (
        <MenuItem id={id} className={styles.item} disableRipple>
            <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>
            {revertText ? (
                <ListItemText>
                    <Typography variant="body2" className={styles.addInfo} noWrap>
                        {name}
                    </Typography>
                    {additionalInfo && (
                        <MenuItemWithLines name={additionalInfo} maxLines={2} />
                    )}
                </ListItemText>
            ) : (
                <ListItemText>
                    <MenuItemWithLines name={name} maxLines={2} />
                    {additionalInfo && (
                        <Typography variant="body2" className={styles.addInfo} noWrap>
                            {additionalInfo}
                        </Typography>
                    )}
                </ListItemText>
            )}
            <IconButton
                className={styles.menuIcon}
                onMouseEnter={() => setHoverIconInfo(true)}
                onMouseLeave={() => setHoverIconInfo(false)}
                ref={anchorEl}
            >
                {hoverIconInfo ? <MenuIconHover /> : <MenuIcon />}
            </IconButton>
        </MenuItem>
    );
}
