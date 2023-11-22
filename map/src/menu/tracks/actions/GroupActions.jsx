import React, { forwardRef, useState } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackmenu.module.css';
import { ReactComponent as TimeIcon } from '../../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as RenameIcon } from '../../../assets/icons/ic_action_edit_outlined.svg';
import GpxCollection from '../GpxCollection';
import RenameDialog from '../../../dialogs/tracks/RenameDialog';

const GroupActions = forwardRef(({ group, setOpenActions, setProcessDownloadObf }, ref) => {
    const [newCollection, setNewCollection] = useState([]);
    const [openRenameDialog, setOpenRenameDialog] = useState(false);

    return (
        <>
            <Box ref={ref}>
                <Paper className={styles.actions}>
                    <MenuItem
                        disabled={group.realSize === 0}
                        className={styles.action}
                        onClick={() => {
                            setNewCollection(group.files);
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <TimeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                Download as OBF Collection
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <Divider className={styles.dividerActions} />
                    <MenuItem className={styles.action} onClick={() => setOpenRenameDialog(true)}>
                        <ListItemIcon className={styles.iconAction}>
                            <RenameIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                Rename
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                </Paper>
            </Box>
            {newCollection.length > 0 && (
                <GpxCollection tracks={newCollection} setProcessDownload={setProcessDownloadObf} />
            )}
            {openRenameDialog && (
                <RenameDialog setOpenDialog={setOpenRenameDialog} group={group} setOpenActions={setOpenActions} />
            )}
        </>
    );
});

GroupActions.displayName = 'GroupActions';
export default GroupActions;
