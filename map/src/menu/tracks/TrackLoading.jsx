import styles from '../trackfavmenu.module.css';
import { CircularProgress, IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';

export default function TrackLoading({ name }) {
    return (
        <MenuItem className={styles.item} divider id={'se-import-loading-' + name}>
            <ListItemIcon className={styles.icon}>
                <TrackIcon />
            </ListItemIcon>
            <ListItemText>
                <Typography variant="inherit" className={styles.groupName} noWrap>
                    {name}
                </Typography>
                <Typography variant="body2" className={styles.groupInfo} noWrap>
                    Importing...
                </Typography>
            </ListItemText>
            <IconButton className={styles.sortIcon}>
                <CircularProgress size={24} />
            </IconButton>
        </MenuItem>
    );
}
