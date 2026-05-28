import { MenuItem, Typography } from '@mui/material';
import React from 'react';
import styles from './titles.module.css';

export default function SubTitleMenu({ text, rightContent }) {
    return (
        <MenuItem sx={{ pointerEvents: rightContent ? 'auto' : 'none' }} className={styles.subtitleItem}>
            <Typography className={styles.subtitle} noWrap sx={{ flex: 1 }}>
                {text}
            </Typography>
            {rightContent}
        </MenuItem>
    );
}
