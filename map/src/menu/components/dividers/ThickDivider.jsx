import { Divider } from '@mui/material';
import styles from './divider.module.css';
import React from 'react';

export default function ThickDivider({ height = '16px', mt = null, mb = null }) {
    return (
        <Divider
            className={styles.thickDivider}
            style={{
                height,
                ...(mt !== null ? { marginTop: mt } : {}),
                ...(mb !== null ? { marginBottom: mb } : {}),
            }}
        />
    );
}
