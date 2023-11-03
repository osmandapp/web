import React, { forwardRef, useState } from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackmenu.module.css';
import { ReactComponent as ShowOnMapIcon } from '../../../assets/icons/ic_show_on_map_outlined.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/ic_action_delete_outlined.svg';
import DeleteTrackDialog from '../../../infoblock/components/track/dialogs/DeleteTrackDialog';
import Utils from '../../../util/Utils';
import TracksManager from '../../../manager/TracksManager';

const TrackActions = forwardRef(({ track, setShowTrack, setOpenActions }, ref) => {
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const downloadGpx = async () => {
        const urlFile = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file`;
        const qs = `?type=${encodeURIComponent(track.type)}&name=${encodeURIComponent(track.name)}`;
        const oneGpxFile = {
            url: urlFile + qs,
            clienttimems: track.clienttimems,
            updatetimems: track.updatetimems,
            name: track.name,
            type: 'GPX',
        };
        const data = await Utils.getFileData(oneGpxFile);
        if (data) {
            const url = document.createElement('a');
            url.href = URL.createObjectURL(new Blob([data]));
            url.download = `${TracksManager.prepareName(track.name)}.gpx`;
            url.click();
        }
    };

    return (
        <>
            <Box className={styles.actions} ref={ref}>
                <Paper>
                    <MenuItem
                        divider
                        className={styles.groupAction}
                        onClick={() => {
                            setShowTrack(true);
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconGroupActions}>
                            <ShowOnMapIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.groupName} noWrap>
                                Show on map
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem
                        divider
                        className={styles.groupAction}
                        onClick={() => {
                            downloadGpx();
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconGroupActions}>
                            <DownloadIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.groupName} noWrap>
                                Download
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem divider className={styles.groupAction} onClick={() => setOpenDeleteDialog(true)}>
                        <ListItemIcon className={styles.iconGroupActions}>
                            <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.groupName} noWrap>
                                Delete
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                </Paper>
            </Box>
            {openDeleteDialog && (
                <DeleteTrackDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    file={track}
                    setOpenActions={setOpenActions}
                />
            )}
        </>
    );
});

TrackActions.displayName = 'TrackActions';
export default TrackActions;
