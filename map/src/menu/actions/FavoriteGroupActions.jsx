import React, { forwardRef, useState } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../tracks/trackmenu.module.css';
import { ReactComponent as DownloadIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as RenameIcon } from '../../assets/icons/ic_action_edit_outlined.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as ShowOnMapIcon } from '../../assets/icons/ic_show_on_map_outlined.svg';
import DeleteFolderDialog from '../../dialogs/tracks/DeleteFolderDialog';
import Utils from '../../util/Utils';
import RenameFavDialog from '../../dialogs/favorites/RenameFavDialog';

const FavoriteGroupActions = forwardRef(({ group, setOpenActions, setProcessDownload }, ref) => {
    const [openRenameDialog, setOpenRenameDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    function showOnMap() {
        //show switch, tap on switch Enable or Disable folder visibility on the map
    }

    const downloadFavGroup = async () => {
        setProcessDownload(true);
        if (!group.url) {
            group.url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(
                group.file.type
            )}&name=${encodeURIComponent(group.file.name)}`;
        }
        let f = await Utils.getFileData(group);
        if (f) {
            setProcessDownload(false);
            const favoriteFile = new File([f], group.file.name, {
                type: 'text/plain',
            });
            const url = document.createElement('a');
            url.href = URL.createObjectURL(new Blob([favoriteFile]));
            url.download = group.file.name;
            url.click();
        }
    };

    return (
        <>
            <Box ref={ref}>
                <Paper id="se-favorite-folder-actions" className={styles.actions}>
                    <MenuItem className={styles.action} onClick={() => showOnMap()}>
                        <ListItemIcon className={styles.iconAction}>
                            <ShowOnMapIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                Show on map
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <Divider className={styles.dividerActions} />
                    <MenuItem
                        id="se-folder-actions-rename"
                        className={styles.action}
                        onClick={() => setOpenRenameDialog(true)}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <RenameIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                Rename
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <Divider className={styles.dividerActions} />
                    <MenuItem
                        className={styles.action}
                        onClick={() => {
                            downloadFavGroup().then();
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <DownloadIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                Download
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <Divider className={styles.dividerActions} />
                    <MenuItem
                        id="se-favoritre-folder-actions-delete"
                        className={styles.action}
                        onClick={() => setOpenDeleteDialog(true)}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                Delete
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                </Paper>
            </Box>
            {openRenameDialog && (
                <RenameFavDialog setOpenDialog={setOpenRenameDialog} group={group} setOpenActions={setOpenActions} />
            )}
            {openDeleteDialog && (
                <DeleteFolderDialog
                    setOpenDialog={setOpenDeleteDialog}
                    folder={group}
                    setOpenActions={setOpenActions}
                />
            )}
        </>
    );
});

FavoriteGroupActions.displayName = 'FavoriteGroupActions';
export default FavoriteGroupActions;
