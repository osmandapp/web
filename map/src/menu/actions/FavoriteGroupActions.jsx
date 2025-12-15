import React, { forwardRef, useContext, useState } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Switch, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as DownloadIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as RenameIcon } from '../../assets/icons/ic_action_edit_outlined.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as ShowOnMapIcon } from '../../assets/icons/ic_show_on_map_outlined.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/ic_group.svg';
import { ReactComponent as PinnedIcon } from '../../assets/icons/ic_action_drawing_pin.svg';
import { ReactComponent as UnpinnedIcon } from '../../assets/icons/ic_action_drawing_pin_disable.svg';
import Utils from '../../util/Utils';
import RenameFavDialog from '../../dialogs/favorites/RenameFavDialog';
import DeleteFavGroupDialog from '../../dialogs/favorites/DeleteFavGroupDialog';
import AppContext from '../../context/AppContext';
import {
    updateAllFavorites,
    updateFavoriteGroup,
    updateFavoriteGroups,
    normalizeBoolean,
    DEFAULT_FAV_GROUP_NAME,
    DEFAULT_GROUP_NAME_POINTS_GROUPS,
} from '../../manager/FavoritesManager';
import { useTranslation } from 'react-i18next';
import { getShareFileInfo } from '../../manager/ShareManager';
import { SHARE_TYPE } from '../share/shareConstants';

const FavoriteGroupActions = forwardRef(({ group, setOpenActions, setProcessDownload, smartf = null }, ref) => {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const [openRenameDialog, setOpenRenameDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const sharedFile = smartf?.type === SHARE_TYPE;

    function showOnMap(hidden) {
        ctx.setFavLoading(true);
        updateGroup(group, hidden);
        if (setOpenActions) {
            setOpenActions(false);
        }
    }

    async function togglePinned() {
        const newPinnedState = group.pinned !== 'true';
        const newPinnedString = normalizeBoolean(newPinnedState);
        const prevGroups = [...ctx.favorites.groups];
        const updatedGroups = ctx.favorites.groups.map((g) => {
            if (g.id === group.id) {
                return { ...g, pinned: newPinnedString };
            }
            return g;
        });
        ctx.setFavorites((prev) => ({ ...prev, groups: updatedGroups }));
        if (setOpenActions) {
            setOpenActions(false);
        }

        try {
            const pointsGroup = updatedGroups.find((g) => g.id === group.id);
            const groupName =
                pointsGroup.name === DEFAULT_FAV_GROUP_NAME ? DEFAULT_GROUP_NAME_POINTS_GROUPS : pointsGroup.name;
            let updatedPointsGroups = { ...pointsGroup.pointsGroups };
            if (!updatedPointsGroups[groupName]) {
                updatedPointsGroups[groupName] = {};
            }
            updatedPointsGroups[groupName].pinned = newPinnedString;

            const data = {
                pointsGroups: updatedPointsGroups,
            };
            const result = await updateFavoriteGroup(data, group);
            if (result) {
                let syncedPinned = newPinnedString;
                if (result.data?.pointsGroups) {
                    const groupEntry = result.data.pointsGroups[groupName];
                    if (groupEntry) {
                        const pinnedValue = groupEntry.pinned;
                        if (pinnedValue !== undefined) {
                            syncedPinned = pinnedValue;
                        }
                    }
                }

                ctx.setFavorites((prev) => {
                    const syncedGroups = prev.groups.map((g) => {
                        if (g.id === group.id) {
                            return {
                                ...g,
                                pinned: normalizeBoolean(syncedPinned),
                                updatetimems: result.updatetimems ?? g.updatetimems,
                                clienttimems: result.clienttimems ?? g.clienttimems,
                            };
                        }
                        return g;
                    });
                    return { ...prev, groups: syncedGroups };
                });
            }
        } catch (e) {
            ctx.setFavorites((prev) => ({ ...prev, groups: prevGroups }));
        }
    }

    async function updateGroup(group, hidden) {
        let groupObj = ctx.favorites.mapObjs[group.id];
        let data = [];
        groupObj.wpts.forEach((wpt) => {
            const newHiddenValue = !hidden;
            wpt.hidden = newHiddenValue ? 'true' : 'false';
            data.push(JSON.stringify(wpt));
        });

        let result = await updateAllFavorites(group, data, true);

        if (result) {
            updateFavoriteGroups({
                result,
                selectedGroupId: group.id,
                ctx,
            });
        }
    }

    const downloadFavGroup = async (sharedFile) => {
        setProcessDownload(true);
        if (!group.url) {
            group.url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(
                group.file.type
            )}&name=${encodeURIComponent(group.file.name)}&shared=${sharedFile ? 'true' : 'false'}`;
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
                    {!sharedFile && (
                        <MenuItem className={styles.action}>
                            <ListItemIcon className={styles.iconAction}>
                                <ShowOnMapIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="inherit" className={styles.actionName} noWrap>
                                        {t('shared_string_show_on_map')}
                                    </Typography>
                                    <Switch
                                        id="se-favorite-folder-actions-show-on-map"
                                        checked={group.hidden !== 'true'}
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={(e) => showOnMap(e.target.checked)}
                                    />
                                </div>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {!sharedFile && <Divider className={styles.dividerActions} />}
                    {!sharedFile && (
                        <MenuItem
                            id="se-favorite-folder-actions-pinned"
                            className={styles.action}
                            onClick={togglePinned}
                        >
                            <ListItemIcon className={styles.iconAction}>
                                {group.pinned === 'true' ? <UnpinnedIcon /> : <PinnedIcon />}
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="inherit" className={styles.actionName} noWrap>
                                    {group.pinned === 'true'
                                        ? t('web:shared_string_unpin_folder')
                                        : t('web:shared_string_pin_folder')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {!sharedFile && <Divider className={styles.dividerActions} />}
                    {!sharedFile && (
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
                                    {t('shared_string_rename')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {!sharedFile && <Divider className={styles.dividerActions} />}
                    {!sharedFile && (
                        <MenuItem
                            id={'se-share-favorite-folder'}
                            className={styles.action}
                            onClick={() => getShareFileInfo({ file: group.file, ctx })}
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
                    )}
                    <MenuItem
                        className={styles.action}
                        onClick={() => {
                            downloadFavGroup(sharedFile).then();
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
                        id="se-favorite-folder-actions-delete"
                        className={styles.action}
                        onClick={() => setOpenDeleteDialog(true)}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {sharedFile ? t('shared_string_remove') : t('shared_string_delete')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                </Paper>
            </Box>
            {openRenameDialog && (
                <RenameFavDialog setOpenDialog={setOpenRenameDialog} group={group} setOpenActions={setOpenActions} />
            )}
            {openDeleteDialog && (
                <DeleteFavGroupDialog
                    setOpenDialog={setOpenDeleteDialog}
                    group={group}
                    setOpenActions={setOpenActions}
                    shared={sharedFile}
                />
            )}
        </>
    );
});

FavoriteGroupActions.displayName = 'FavoriteGroupActions';
export default FavoriteGroupActions;
