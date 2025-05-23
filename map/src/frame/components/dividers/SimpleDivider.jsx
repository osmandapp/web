import styles from './divider.module.css';
import { Divider } from '@mui/material';
import React from 'react';

export default function SimpleDivider() {
    return <Divider className={styles.divider} />;
}
