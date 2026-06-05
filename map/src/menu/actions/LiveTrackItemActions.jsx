import React, { forwardRef, useContext } from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/ic_action_remove_outlined.svg';
import { ReactComponent as LocationOffIcon } from '../../assets/icons/ic_action_location_off.svg';
import { ReactComponent as LocationOnIcon } from '../../assets/icons/ic_action_my_location.svg';
import { ReactComponent as ShareLinkIcon } from '../../assets/icons/ic_action_link.svg';
import { ReactComponent as RegenerateIcon } from '../../assets/icons/ic_action_update.svg';
import styles from '../trackfavmenu.module.css';

const LiveTrackItemActions = forwardRef(
    (
        {
            isOwner,
            isSharing,
            isParticipant,
            handleOwnerSharingAction,
            handleParticipantStop,
            handleRemoveBookmark,
            handleDeleteForAll,
            handleCopyShareLink,
            handleRegenerate,
            hasShareLink,
        },
        ref
    ) => {
        const ctx = useContext(AppContext);
        const { t } = useTranslation();

        const ownerSharingLabel =
            !isSharing && !ctx.isMyBroadcastPaused
                ? 'web:live_track_start_sharing'
                : ctx.isMyBroadcastPaused
                  ? 'web:live_track_resume_sharing'
                  : 'web:live_track_pause_sharing';

        const ownerSharingIcon =
            (!isSharing && !ctx.isMyBroadcastPaused) || ctx.isMyBroadcastPaused ? <LocationOnIcon /> : <LocationOffIcon />;

        return (
            <Box ref={ref}>
                <Paper id="se-live-track-item-actions" className={styles.actions}>
                    {/* Owner: always show sharing control (start / pause / resume) */}
                    {isOwner && (
                        <MenuItem
                            id="se-live-track-item-actions-pause"
                            className={styles.action}
                            onClick={handleOwnerSharingAction}
                        >
                            <ListItemIcon className={styles.iconAction}>{ownerSharingIcon}</ListItemIcon>
                            <ListItemText>
                                <Typography className={styles.actionName} noWrap>
                                    {t(ownerSharingLabel)}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {/* Participant (non-owner): stop sharing own location */}
                    {isParticipant && (
                        <MenuItem
                            id="se-live-track-item-actions-stop"
                            className={styles.action}
                            onClick={handleParticipantStop}
                        >
                            <ListItemIcon className={styles.iconAction}>
                                <LocationOffIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography className={styles.actionName} noWrap>
                                    {t('web:live_track_stop_sharing')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {/* Owner: copy share link (only if key is available) */}
                    {isOwner && hasShareLink && (
                        <MenuItem
                            id="se-live-track-item-actions-copy-link"
                            className={styles.action}
                            onClick={handleCopyShareLink}
                        >
                            <ListItemIcon className={styles.iconAction}>
                                <ShareLinkIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography className={styles.actionName} noWrap>
                                    {t('web:live_track_copy_share_link')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {/* Owner: regenerate the key — new permanent link, old one revoked */}
                    {isOwner && (
                        <MenuItem
                            id="se-live-track-item-actions-regenerate"
                            className={styles.action}
                            onClick={handleRegenerate}
                        >
                            <ListItemIcon className={styles.iconAction}>
                                <RegenerateIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography className={styles.actionName} noWrap>
                                    {t('web:live_track_regenerate_link')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {/* Everyone: remove from bookmarks */}
                    <MenuItem
                        id="se-live-track-item-actions-remove-bookmark"
                        className={styles.action}
                        onClick={handleRemoveBookmark}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <RemoveIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography className={styles.actionName} noWrap>
                                {t('web:live_track_remove_bookmark')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    {/* Owner only: delete translation for all */}
                    {isOwner && (
                        <MenuItem
                            id="se-live-track-item-actions-delete"
                            className={styles.action}
                            onClick={handleDeleteForAll}
                        >
                            <ListItemIcon className={styles.iconAction}>
                                <DeleteIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography className={styles.actionName} noWrap>
                                    {t('web:live_track_delete_for_all')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                </Paper>
            </Box>
        );
    }
);
LiveTrackItemActions.displayName = 'LiveTrackItemActions';

export default LiveTrackItemActions;
