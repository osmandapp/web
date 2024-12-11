import React from 'react';
import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from '../../errors/errors.module.css';
import { ReactComponent as AccessIcon } from '../../../assets/icons/ic_action_lock.svg';
import buttonStyles from '../../login/login.module.css';

export default function RequestAccessError({ sendRequest }) {
    return (
        <Box className={styles.block}>
            <Icon className={styles.icon}>
                <AccessIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    You don’t have access to this file
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    You need to create a username for your profile to request access to this file. It will be visible to
                    the file owner.
                </ListItemText>
                <Button component="span" className={buttonStyles.blueButton} onClick={sendRequest}>
                    Request access
                </Button>
            </Box>
        </Box>
    );
}
