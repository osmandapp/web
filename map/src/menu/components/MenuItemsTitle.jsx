import { Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import React from 'react';

export default function MenuItemsTitle({ name = null, children = null, maxLines, className = null }) {
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
            {name ? (
                <Typography variant="inherit" className={className ?? styles.groupName}>
                    {name}
                </Typography>
            ) : (
                children
            )}
        </div>
    );
}
