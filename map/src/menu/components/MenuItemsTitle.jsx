import { Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import React from 'react';

export default function MenuItemsTitle({ name, maxLines }) {
    const titleStyle = {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: maxLines,
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap',
    };

    return (
        <div style={titleStyle}>
            <Typography variant="inherit" className={styles.groupName}>
                {name}
            </Typography>
        </div>
    );
}
