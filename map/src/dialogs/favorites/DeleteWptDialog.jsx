import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TracksManager from '../../manager/track/TracksManager';
import DialogActions from '@mui/material/DialogActions';
import { Button, Dialog } from '@mui/material';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import FavoritesManager from '../../manager/FavoritesManager';
import FavoriteHelper from '../../infoblock/components/favorite/FavoriteHelper';
import PointManager from '../../manager/PointManager';
import { isEmpty } from 'lodash';
import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';

export default function DeleteWptDialog({
    dialogOpen,
    setDialogOpen,
    wpt = null,
    isDetails = false,
    setOpenActions = null,
}) {
    const ctx = useContext(AppContext);

    const useSelected = !isEmpty(ctx.selectedGpxFile) && ctx.selectedGpxFile.markerCurrent;

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    async function deleteWpt() {
        //delete wpt from track
        if (ctx.addFavorite.editTrack) {
            if (ctx.selectedWpt) {
                const lat = ctx.selectedWpt.latlng ? ctx.selectedWpt.latlng.lat : ctx.selectedWpt.lat;
                const lng = ctx.selectedWpt.latlng ? ctx.selectedWpt.latlng.lng : ctx.selectedWpt.lon;
                const ind = ctx.selectedGpxFile.wpts.findIndex((wpt) => wpt.lat === lat && wpt.lon === lng);
                PointManager.deleteWpt(ind, ctx, !isDetails);
                ctx.setSelectedWpt(null);
                if (!isDetails) {
                    ctx.setCreateTrack({ ...ctx.createTrack, cloudAutoSave: true });
                }
            }
        } else {
            //delete favorite point from group
            deleteFavorite().then(() => {
                ctx.setSelectedWpt(null);
                if (!isDetails) {
                    ctx.setInfoBlockWidth(`${MENU_INFO_CLOSE_SIZE}px`);
                }
            });
        }
        setDialogOpen(false);
        if (setOpenActions) {
            setOpenActions(false);
        }
    }

    async function deleteFavorite() {
        const arrWpt = useSelected ? ctx.selectedGpxFile.file.wpts : ctx.favorites.mapObjs[wpt.groupId].wpts;
        const groupName = useSelected ? ctx.selectedGpxFile.nameGroup : wpt.category;
        const id = useSelected ? ctx.selectedGpxFile.id : wpt.groupId;
        const groupFullName = useSelected ? ctx.selectedGpxFile.file.name : wpt.group.file.name;
        const currentWptName = useSelected ? ctx.selectedGpxFile.markerCurrent.title : wpt.name;
        const selectedGroup = useSelected ? ctx.selectedGpxFile : ctx.favorites.groups.find((g) => g.id === id);
        for (let i = 0; i < arrWpt.length; i++) {
            if (arrWpt[i].name === currentWptName) {
                const result = await FavoritesManager.deleteFavorite(
                    arrWpt[i],
                    groupFullName,
                    selectedGroup.file.updatetimems
                );
                //update favorites groups
                if (result) {
                    ctx.favorites.mapObjs[id] = FavoriteHelper.updateGroupObj(ctx.favorites.mapObjs[id], result);
                    ctx.favorites = FavoriteHelper.updateSelectedGroup({
                        favorites: ctx.favorites,
                        selectedGroupName: groupName,
                        result,
                        id,
                    });
                    useSelected &&
                        FavoriteHelper.updateSelectedFile({
                            ctx,
                            result,
                            favoriteName: ctx.selectedGpxFile.markerCurrent.title,
                            selectedGroup,
                            deleted: true,
                        });
                    ctx.setUpdateMarkers({ ...ctx.favorites });
                    closeContextMenu();
                    break;
                }
            }
        }
    }

    function closeContextMenu() {
        setDialogOpen(false);
        ctx.setCurrentObjectType(null);
    }

    function getTitleDialog() {
        return ctx.addFavorite.editTrack ? 'Delete waypoint' : 'Delete favorite';
    }

    function getQuestionDialog() {
        return ctx.addFavorite.editTrack
            ? `Are you sure you want to delete ${wpt.name}?`
            : `Are you sure you want to delete ${TracksManager.prepareName(
                  useSelected ? ctx.selectedGpxFile.markerCurrent.title : wpt.name
              )}?`;
    }

    return (
        <Dialog id="se-delete-fav-dialog" open={true} onClose={toggleShowDialog} onClick={(e) => e.stopPropagation()}>
            <DialogTitle>{getTitleDialog()}</DialogTitle>
            <DialogContent>
                <DialogContentText>{getQuestionDialog()}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button id="se-delete-fav-dialog-submit" onClick={deleteWpt}>
                    Delete
                </Button>
                <Button onClick={toggleShowDialog}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}
