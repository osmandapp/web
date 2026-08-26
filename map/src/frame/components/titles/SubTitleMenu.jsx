import { MenuItem, Typography } from '@mui/material';
import React from 'react';
import styles from './titles.module.css';

export default function SubTitleMenu({ text }) {
    return (
        <MenuItem sx={{ pointerEvents: 'none' }} className={styles.subtitleItem}>
            <Typography className={styles.subtitle} noWrap>
                {text}
            </Typography>
        </MenuItem>
    );
}
