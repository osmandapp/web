import React, { forwardRef, useContext, useState } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Switch, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as DownloadIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as RenameIcon } from '../../assets/icons/ic_action_edit_outlined.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as ShowOnMapIcon } from '../../assets/icons/ic_show_on_map_outlined.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/ic_group.svg';
import Utils from '../../util/Utils';
import RenameFavDialog from '../../dialogs/favorites/RenameFavDialog';
import DeleteFavGroupDialog from '../../dialogs/favorites/DeleteFavGroupDialog';
import AppContext from '../../context/AppContext';
import { updateAllFavorites, updateFavoriteGroups } from '../../manager/FavoritesManager';
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
