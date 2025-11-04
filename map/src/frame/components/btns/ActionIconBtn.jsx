import styles from './buttons.module.css';
import { IconButton } from '@mui/material';
import React from 'react';

export default function ActionIconBtn({ icon, onClick, size = null }) {
    return (
        <IconButton
            sx={{ padding: '6px', ...(size && { width: size, height: size }) }}
            variant="contained"
            type="button"
            className={styles.actionIcon}
            onClick={onClick}
        >
            {icon}
        </IconButton>
    );
}
