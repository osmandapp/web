import { Link, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from '../items/items.module.css';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import React from 'react';

export default function SimpleText({ id, text, maxLines = 2 }) {
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,})/;
    const match = text.match(emailRegex);

    if (match) {
        const [email] = match;
        const [before, after] = text.split(email);

        return (
            <MenuItem id={id} className={styles.item} disableRipple>
                <MenuItemWithLines maxLines={maxLines}>
                    <ListItemText>
                        <Typography>
                            {before}
                            <Link href={`mailto:${email}`} underline="hover">
                                {email}
                            </Link>
                            {after}
                        </Typography>
                    </ListItemText>
                </MenuItemWithLines>
            </MenuItem>
        );
    }

    return (
        <MenuItem id={id} className={styles.item} disableRipple>
            <ListItemText>
                <MenuItemWithLines name={text} maxLines={maxLines} />
            </ListItemText>
        </MenuItem>
    );
}
