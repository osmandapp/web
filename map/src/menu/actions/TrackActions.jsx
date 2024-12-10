import React, { forwardRef, useContext, useState } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as DownloadIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as RenameIcon } from '../../assets/icons/ic_action_edit_outlined.svg';
import { ReactComponent as DuplicateIcon } from '../../assets/icons/ic_action_copy.svg';
import { ReactComponent as MakeTrackVisible } from '../../assets/icons/ic_action_show_outlined.svg';
import { ReactComponent as HideTrackVisible } from '../../assets/icons/ic_action_hide_outlined.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/ic_group.svg';
import DeleteTrackDialog from '../../dialogs/tracks/DeleteTrackDialog';
import TracksManager, { downloadGpx } from '../../manager/track/TracksManager';
import RenameDialog from '../../dialogs/tracks/RenameDialog';
import AppContext from '../../context/AppContext';
import { duplicateTrack } from '../../manager/track/SaveTrackManager';
import { useTranslation } from 'react-i18next';
import { openShareFileMenu } from '../../manager/ShareManager';

const TrackActions = forwardRef(({ track, setDisplayTrack, setOpenActions }, ref) => {
    const ctx = useContext(AppContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openRenameDialog, setOpenRenameDialog] = useState(false);
    const { t } = useTranslation();

    async function createDuplicateTrack() {
        const parts = track.name.split('/');
        const newName = parts.pop();
        await duplicateTrack(track.name, parts.join('/'), TracksManager.prepareName(newName), ctx).then();
        if (setOpenActions) {
            setOpenActions(false);
        }
    }

    const MakeTrackVisibleAction = () => {
        return ctx.gpxFiles[track.name]?.showOnMap ? (
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
    };

    return (
        <>
            <Box ref={ref}>
                <Paper id="se-track-actions" className={styles.actions}>
                    <MakeTrackVisibleAction />
                    <Divider className={styles.dividerActions} />
                    <MenuItem
                        id={'se-rename-cloud-track'}
                        className={styles.action}
                        onClick={() => setOpenRenameDialog(true)}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <RenameIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('shared_string_rename')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <Divider className={styles.dividerActions} />
                    <MenuItem
                        id={'se-duplicate-cloud-track'}
                        className={styles.action}
                        onClick={() => createDuplicateTrack()}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <DuplicateIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('shared_string_duplicate')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <Divider className={styles.dividerActions} />
                    <MenuItem
                        id={'se-share-track'}
                        className={styles.action}
                        onClick={() => openShareFileMenu({ file: track, ctx })}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <ShareIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('shared_string_share')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem
                        className={styles.action}
                        onClick={() => {
                            downloadGpx(track).then();
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <DownloadIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('shared_string_download')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <Divider className={styles.dividerActions} />
                    <MenuItem
                        id={'se-delete-cloud-track'}
                        className={styles.action}
                        onClick={() => setOpenDeleteDialog(true)}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('shared_string_delete')}
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
            {openRenameDialog && (
                <RenameDialog setOpenDialog={setOpenRenameDialog} track={track} setOpenActions={setOpenActions} />
            )}
        </>
    );
});

TrackActions.displayName = 'TrackActions';
export default TrackActions;
