import React, { forwardRef, useContext, useState } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as DownloadIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as RenameIcon } from '../../assets/icons/ic_action_edit_outlined.svg';
import { ReactComponent as DuplicateIcon } from '../../assets/icons/ic_action_copy.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/ic_group.svg';
import DeleteTrackDialog from '../../dialogs/tracks/DeleteTrackDialog';
import TracksManager, { DEFAULT_GROUP_NAME, GPX_FILE_EXT } from '../../manager/track/TracksManager';
import RenameDialog from '../../dialogs/tracks/RenameDialog';
import DownloadTrackDialog from '../../dialogs/tracks/DownloadTrackDialog';
import AppContext, { isLocalTrack } from '../../context/AppContext';
import { createTrackFreeName, duplicateTrack, refreshGlobalFiles } from '../../manager/track/SaveTrackManager';
import { useTranslation } from 'react-i18next';
import { getShareFileInfo, saveSharedFileToCloud } from '../../manager/ShareManager';
import MakeTrackVisibleAction from './components/MakeTrackVisibleAction';
import { SHARE_TYPE } from '../share/shareConstants';

const MAKE_VISIBLE = 'makeVisible';
const RENAME = 'rename';
const DUPLICATE = 'duplicate';
const SHARE = 'share';
const DOWNLOAD = 'download';
const DELETE = 'delete';

const LOCAL_ACTIONS = [RENAME];
const CLOUD_ACTIONS = [MAKE_VISIBLE, RENAME, DUPLICATE, SHARE, DOWNLOAD, DELETE];
const SHARE_ACTIONS = [MAKE_VISIBLE, DUPLICATE, DOWNLOAD, DELETE];

const TRACK_ACTION_LISTS = {
    local: LOCAL_ACTIONS,
    cloud: CLOUD_ACTIONS,
    share: SHARE_ACTIONS,
};

function getTrackType(smartf, ctx) {
    if (smartf?.type === SHARE_TYPE) return 'share';
    if (isLocalTrack(ctx)) return 'local';
    return 'cloud';
}

const TrackActions = forwardRef(({ track, setDisplayTrack, setOpenActions, smartf = null }, ref) => {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openRenameDialog, setOpenRenameDialog] = useState(false);
    const [openDownloadDialog, setOpenDownloadDialog] = useState(false);

    const trackType = getTrackType(smartf, ctx);
    const actionList = TRACK_ACTION_LISTS[trackType];
    const isShared = trackType === 'share';

    async function createDuplicateTrack() {
        const parts = track.name.split('/');
        const newName = parts.pop();
        if (isShared) {
            const fileName = createTrackFreeName(
                TracksManager.prepareName(newName),
                ctx.tracksGroups,
                null,
                DEFAULT_GROUP_NAME
            );
            const saved = await saveSharedFileToCloud(track, fileName + GPX_FILE_EXT);
            if (saved) await refreshGlobalFiles({ ctx });
        } else {
            await duplicateTrack(track.name, parts.join('/'), TracksManager.prepareName(newName), ctx).then();
        }
        setOpenActions?.(false);
    }

    const actionHandlers = {
        [MAKE_VISIBLE]: () => (
            <MakeTrackVisibleAction
                ctx={ctx}
                track={track}
                setDisplayTrack={setDisplayTrack}
                setOpenActions={setOpenActions}
                smartf={smartf}
            />
        ),
        [RENAME]: () => (
            <MenuItem
                id={`se-rename-${trackType}-track`}
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
        ),
        [DUPLICATE]: () => (
            <MenuItem
                id={`se-duplicate-${trackType}-track`}
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
        ),
        [SHARE]: () => (
            <MenuItem
                id="se-share-track"
                className={styles.action}
                onClick={() => getShareFileInfo({ file: track, ctx })}
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
        ),
        [DOWNLOAD]: () => (
            <MenuItem className={styles.action} onClick={() => setOpenDownloadDialog(true)}>
                <ListItemIcon className={styles.iconAction}>
                    <DownloadIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="inherit" className={styles.actionName} noWrap>
                        {t('shared_string_download')}
                    </Typography>
                </ListItemText>
            </MenuItem>
        ),
        [DELETE]: () => (
            <MenuItem
                id={`se-delete-${trackType}-track`}
                className={styles.action}
                onClick={() => setOpenDeleteDialog(true)}
            >
                <ListItemIcon className={styles.iconAction}>
                    <DeleteIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="inherit" className={styles.actionName} noWrap>
                        {isShared ? t('shared_string_remove') : t('shared_string_delete')}
                    </Typography>
                </ListItemText>
            </MenuItem>
        ),
    };

    return (
        <>
            <Box ref={ref}>
                <Paper id="se-track-actions" className={styles.actions}>
                    {actionList.map((actionId, index) => (
                        <React.Fragment key={actionId}>
                            {index > 0 && <Divider className={styles.dividerActions} />}
                            {actionHandlers[actionId]?.()}
                        </React.Fragment>
                    ))}
                </Paper>
            </Box>
            {openDeleteDialog && (
                <DeleteTrackDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    file={track}
                    setOpenActions={setOpenActions}
                    shared={isShared}
                />
            )}
            {openRenameDialog && (
                <RenameDialog
                    setOpenDialog={setOpenRenameDialog}
                    track={track}
                    setOpenActions={setOpenActions}
                    isLocalTrack={trackType === 'local'}
                />
            )}
            {openDownloadDialog && (
                <DownloadTrackDialog
                    dialogOpen={openDownloadDialog}
                    setDialogOpen={setOpenDownloadDialog}
                    track={track}
                    sharedFile={isShared}
                    setOpenActions={setOpenActions}
                />
            )}
        </>
    );
});

TrackActions.displayName = 'TrackActions';
export default TrackActions;
