import { Divider } from '@mui/material';
import styles from './divider.module.css';
import React from 'react';

export default function ThickDivider({ height = '16px' }) {
    return <Divider className={styles.thickDivider} sx={{ height: height }} />;
}
