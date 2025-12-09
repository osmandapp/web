import { Divider } from '@mui/material';
import styles from './divider.module.css';
import React from 'react';

export default function DividerWithMargin({ margin = '55px', dashed = false, id }) {
    return (
        <Divider
            id={id}
            className={styles.divider}
            sx={{
                ml: margin,
                ...(dashed && { border: 'none', borderTop: '1px dashed #ccc' }),
            }}
        />
    );
}
