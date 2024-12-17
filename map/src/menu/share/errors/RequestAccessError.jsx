import React from 'react';
import { Box, Button, Icon, ListItemText, TextField } from '@mui/material';
import styles from '../../errors/errors.module.css';
import { ReactComponent as AccessIcon } from '../../../assets/icons/ic_action_lock.svg';
import buttonStyles from '../../login/login.module.css';

export default function RequestAccessError({ sendRequest, userName, setUserName }) {
    return (
        <Box>
            <Box className={styles.block}>
                <Icon className={styles.icon}>
                    <AccessIcon className={styles.icon} />
                </Icon>
                <Box className={styles.info}>
                    <ListItemText disableTypography={true} className={styles.title}>
                        You don’t have access to this file
                    </ListItemText>
                    <ListItemText disableTypography={true} className={styles.text}>
                        You need to create a username for your profile to request access to this file. It will be
                        visible to the file owner.
                    </ListItemText>
                </Box>
            </Box>
            <TextField
                sx={{ mt: '-17px' }}
                margin="dense"
                onChange={(e) => setUserName(e.target.value)}
                id="username"
                label={'User name'}
                type="email"
                fullWidth
                variant="filled"
                value={userName}
            />
            <Button
                sx={{ mt: '19px', color: !userName && '#727272 !important' }}
                component="span"
                disabled={!userName}
                className={buttonStyles.blueButton}
                onClick={sendRequest}
            >
                Request access
            </Button>
        </Box>
    );
}
