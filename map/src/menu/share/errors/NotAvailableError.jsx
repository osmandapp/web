import { Box, Icon, ListItemText } from '@mui/material';
import styles from '../../errors/errors.module.css';
import React from 'react';
import { ReactComponent as NotAvailableIcon } from '../../../assets/icons/ic_action_file_unknown.svg';

export default function NotAvailableError() {
    return (
        <Box className={styles.block}>
            <Icon className={styles.icon}>
                <NotAvailableIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    Not available
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    The file or folder is no longer available.
                </ListItemText>
            </Box>
        </Box>
    );
}
