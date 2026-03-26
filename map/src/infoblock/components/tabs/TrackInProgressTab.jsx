import React from 'react';
import { Box, Icon, ListItemText } from '@mui/material';
import { ReactComponent as EmptyIcon } from '../../../assets/icons/ic_action_track_disabled.svg';
import styles from '../../../menu/errors/errors.module.css';

export default function TrackInProgressTab() {
    return (
        <Box className={styles.block} id="se-track-tab-in-progress">
            <Icon className={styles.icon}>
                <EmptyIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    Track tab is in progress
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    This tab is not implemented yet.
                </ListItemText>
            </Box>
        </Box>
    );
}
