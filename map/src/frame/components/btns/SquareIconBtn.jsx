import { Button, Icon } from '@mui/material';
import React from 'react';
import styles from './buttons.module.css';

export default function SquareIconBtn({
    index,
    disabled = false,
    onClick,
    icon,
    selected = false,
    iconColor = 'var(--selected-color)',
    selectedIconColor = 'var(--text-primary)',
    borderColor = '#cccccc',
    selectedBorderColor = 'var(--selected-color)',
}) {
    return (
        <Button
            key={index}
            className={`${styles.squareIconBtn} ${selected ? styles.selected : ''}`}
            disabled={disabled}
            onClick={onClick}
            sx={{
                borderColor: selected ? selectedBorderColor : borderColor,
            }}
        >
            <Icon
                className={`${styles.squareIconBtnIcon}`}
                sx={{
                    '& svg, & path': {
                        fill: disabled ? 'var(--svg-icon-color)' : selected ? selectedIconColor : iconColor,
                    },
                }}
            >
                {icon}
            </Icon>
        </Button>
    );
}
