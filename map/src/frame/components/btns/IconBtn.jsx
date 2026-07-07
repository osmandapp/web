import { IconButton } from '@mui/material';
import React from 'react';
import styles from './buttons.module.css';

export default function IconBtn({ active = false, className = '', children, ...props }) {
    const combined = [styles.iconBtn, active && styles.iconBtnActive, className].filter(Boolean).join(' ');

    return (
        <IconButton className={combined} {...props}>
            {children}
        </IconButton>
    );
}
