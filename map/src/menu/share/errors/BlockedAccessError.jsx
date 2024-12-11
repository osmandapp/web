import { Box, Icon, ListItemText } from '@mui/material';
import styles from '../../errors/errors.module.css';
import React from 'react';
import { ReactComponent as AccessIcon } from '../../../assets/icons/ic_action_lock.svg';

export default function BlockedAccessError() {
    return (
        <Box className={styles.block}>
            <Icon className={styles.icon}>
                <AccessIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    Access denied
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    The owner refused you access request
                </ListItemText>
            </Box>
        </Box>
    );
}
