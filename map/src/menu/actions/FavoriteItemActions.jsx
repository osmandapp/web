import React, { forwardRef, useContext, useState } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../tracks/trackmenu.module.css';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as RenameIcon } from '../../assets/icons/ic_action_edit_outlined.svg';
import EditFavoriteDialog from '../../dialogs/favorites/EditFavoriteDialog';
import DeleteFavoriteDialog from '../../dialogs/favorites/DeleteFavoriteDialog';
import FavoritesManager, {
    isNoValue,
    prepareBackground,
    prepareColor,
    prepareIcon,
} from '../../manager/FavoritesManager';
import AppContext from '../../context/AppContext';

const FavoriteItemActions = forwardRef(({ marker, group, setOpenActions }, ref) => {
    const ctx = useContext(AppContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const favorite = getFavorite();

    function getFavorite() {
        const wptInd = ctx.favorites[group.name].wpts.findIndex((wpt) => wpt.name === marker.title);
        const wpt = ctx.favorites[group.name].wpts[wptInd];
        if (wpt) {
            return {
                name: wpt.name,
                desc: isNoValue(wpt.desc) ? '' : wpt.desc,
                comment: wpt.ext.comment,
                address: isNoValue(wpt.address) ? '' : wpt.address,
                category: wpt.category ? wpt.category : FavoritesManager.DEFAULT_GROUP_NAME,
                background: prepareBackground(wpt.background),
                color: prepareColor(wpt.color),
                icon: prepareIcon(wpt.icon),
                lat: wpt.ext.lat,
                lon: wpt.ext.lon,
                time: wpt.ext.time,
                marker: wpt,
                ind: wptInd,
                group: group,
            };
        } else {
            return null;
        }
    }

    return (
        <>
            <Box ref={ref}>
                <Paper id="se-fav-item-actions" className={styles.actions}>
                    <MenuItem id={'se-edit-fav-item'} className={styles.action} onClick={() => setOpenEditDialog(true)}>
                        <ListItemIcon className={styles.iconAction}>
                            <RenameIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                Edit
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <Divider className={styles.dividerActions} />
                    <MenuItem
                        id={'se-delete-fav-item'}
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
            {openDeleteDialog && (
                <DeleteFavoriteDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    wpt={favorite}
                    setOpenActions={setOpenActions}
                />
            )}
            {openEditDialog && (
                <EditFavoriteDialog
                    wpt={favorite}
                    editFavoritesDialogOpen={openEditDialog}
                    setEditFavoritesDialogOpen={setOpenEditDialog}
                    deleteFavoritesDialogOpen={openDeleteDialog}
                    setDeleteFavoritesDialogOpen={setOpenDeleteDialog}
                    setOpenActions={setOpenActions}
                />
            )}
        </>
    );
});

FavoriteItemActions.displayName = 'FavoriteItemActions';
export default FavoriteItemActions;
