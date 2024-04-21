import { Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import React from 'react';

const MenuItemsTitle = React.forwardRef((props, ref) => {
    const { name = null, children = null, maxLines, className = null, ...otherProps } = props;
    const titleStyle = {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: maxLines,
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap',
    };

    return (
        <div style={titleStyle} ref={ref} {...otherProps}>
            {name ? (
                <Typography variant="inherit" className={className ?? styles.groupName}>
                    {name}
                </Typography>
            ) : (
                children
            )}
        </div>
    );
});

export default MenuItemsTitle;
