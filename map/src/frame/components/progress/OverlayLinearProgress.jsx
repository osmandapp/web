import { Box, LinearProgress } from '@mui/material';
import React from 'react';
import styles from './progress.module.css';

export default function OverlayLinearProgress({ id, ...props }) {
    return (
        <Box className={styles.anchor}>
            <Box className={styles.bar}>
                <LinearProgress id={id} {...props} />
            </Box>
        </Box>
    );
}
