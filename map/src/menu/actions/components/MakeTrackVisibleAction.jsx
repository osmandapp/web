import { getFileStorage, GPX } from '../../../manager/GlobalManager';
import { ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from '../../trackfavmenu.module.css';
import React from 'react';
import { ReactComponent as MakeTrackVisible } from '../../../assets/icons/ic_action_show_outlined.svg';
import { ReactComponent as HideTrackVisible } from '../../../assets/icons/ic_action_hide_outlined.svg';

export default function MakeTrackVisibleAction({ ctx, track, setDisplayTrack, setOpenActions, smartf = null }) {
    const files = getFileStorage({ ctx, smartf, type: GPX });

    return files[track.name]?.showOnMap ? (
        <MenuItem
            id="se-hide-track-action"
            className={styles.action}
            onClick={() => {
                setDisplayTrack(false);
                setOpenActions(false);
            }}
        >
            <ListItemIcon className={styles.iconAction}>
                <HideTrackVisible />
            </ListItemIcon>
            <ListItemText>
                <Typography variant="inherit" className={styles.actionName} noWrap>
                    Hide track
                </Typography>
            </ListItemText>
        </MenuItem>
    ) : (
        <MenuItem
            id="se-show-track-action"
            className={styles.action}
            onClick={() => {
                setDisplayTrack(true);
                setOpenActions(false);
            }}
        >
            <ListItemIcon className={styles.iconAction}>
                <MakeTrackVisible />
            </ListItemIcon>
            <ListItemText>
                <Typography variant="inherit" className={styles.actionName} noWrap>
                    Make track visible
                </Typography>
            </ListItemText>
        </MenuItem>
    );
}
