import styles from './buttons.module.css';
import { IconButton } from '@mui/material';
import React from 'react';

export default function ActionIconBtn({
    id = null,
    icon,
    activeIcon = null,
    onClick,
    size = null,
    iconColor = null,
    className = '',
    ...props
}) {
    const finalClassName = [styles.actionIcon, activeIcon && styles.actionIconWithActive, className]
        .filter(Boolean)
        .join(' ');

    return (
        <IconButton
            id={id}
            disableRipple
            sx={{
                padding: '6px',
                position: 'relative',
                ...(size && { width: size, height: size }),
                '&:hover': {
                    backgroundColor: '#f0f0f0 !important',
                    ...(iconColor && {
                        '& svg, & path': {
                            fill: iconColor,
                        },
                    }),
                },
                '&:active': {
                    backgroundColor: '#deebff !important',
                    ...(iconColor && {
                        '& svg, & path': {
                            fill: iconColor,
                        },
                    }),
                },
            }}
            variant="contained"
            type="button"
            className={finalClassName}
            onClick={onClick}
            {...props}
        >
            {activeIcon ? (
                <div className={styles.iconContainer}>
                    <span className={styles.defaultIcon}>{icon}</span>
                    <span className={styles.activeIcon}>{activeIcon}</span>
                </div>
            ) : (
                icon
            )}
        </IconButton>
    );
}
