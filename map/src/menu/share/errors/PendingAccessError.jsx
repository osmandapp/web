import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from '../../errors/errors.module.css';
import buttonStyles from '../../login/login.module.css';
import React from 'react';
import { ReactComponent as AccessIcon } from '../../../assets/icons/ic_action_sand_clock.svg';

export default function PendingAccessError() {
    return (
        <Box className={styles.block}>
            <Icon className={styles.icon}>
                <AccessIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    Access requested
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    You need to wait until the file owner approves your request.
                </ListItemText>
                <Button component="span" className={buttonStyles.blueButton} disabled={true}>
                    Request access
                </Button>
            </Box>
        </Box>
    );
}
