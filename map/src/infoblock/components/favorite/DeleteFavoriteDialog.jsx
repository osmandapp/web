import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TracksManager from '../../../manager/TracksManager';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import FavoritesManager from '../../../manager/FavoritesManager';
import FavoriteHelper from './FavoriteHelper';
import PointManager from '../../../manager/PointManager';

export default function DeleteFavoriteDialog({ dialogOpen, setDialogOpen, wpt }) {
    const ctx = useContext(AppContext);

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    async function deleteWpt() {
        if (ctx.addFavorite.editTrack) {
            if (ctx.selectedWpt) {
                const lat = ctx.selectedWpt.latlng ? ctx.selectedWpt.latlng.lat : ctx.selectedWpt.wpt.lat;
                const lng = ctx.selectedWpt.latlng ? ctx.selectedWpt.latlng.lng : ctx.selectedWpt.wpt.lon;
                const ind = ctx.selectedGpxFile.wpts.findIndex((wpt) => wpt.lat === lat && wpt.lon === lng);
                PointManager.deleteWpt(ind, ctx);
                setDialogOpen(false);
                ctx.setSelectedWpt(null);
            }
        } else {
            deleteFavorite().then();
        }
    }

    async function deleteFavorite() {
        for (let i = 0; i < ctx.selectedGpxFile.file.wpts.length; i++) {
            if (ctx.selectedGpxFile.file.wpts[i].name === ctx.selectedGpxFile.markerCurrent.title) {
                let result = await FavoritesManager.deleteFavorite(
                    ctx.selectedGpxFile.file.wpts[i],
                    ctx.selectedGpxFile.file.name,
                    ctx.favorites[ctx.selectedGpxFile.nameGroup].updatetimems
                );
                if (result) {
                    ctx.favorites[ctx.selectedGpxFile.nameGroup] = FavoriteHelper.updateGroupObj(
                        ctx.favorites[ctx.selectedGpxFile.nameGroup],
                        result
                    );
                    ctx.favorites = FavoriteHelper.updateSelectedGroup(
                        ctx.favorites,
                        ctx.selectedGpxFile.nameGroup,
                        result
                    );
                    FavoriteHelper.updateSelectedFile(
                        ctx,
                        ctx.favorites,
                        result,
                        ctx.selectedGpxFile.markerCurrent.title,
                        ctx.selectedGpxFile.nameGroup,
                        true
                    );
                    ctx.setFavorites({ ...ctx.favorites });
                    closeContextMenu();
                    break;
                }
            }
        }
    }

    function closeContextMenu() {
        setDialogOpen(false);
        console.log(true);
        ctx.setCurrentObjectType(null);
    }

    function getTitleDialog() {
        return ctx.addFavorite.editTrack ? 'Delete waypoint' : 'Delete favorite';
    }

    function getQuestionDialog() {
        return ctx.addFavorite.editTrack
            ? `Are you sure you want to delete ${wpt.name}?`
            : `Are you sure you want to delete ${TracksManager.prepareName(ctx.selectedGpxFile.markerCurrent.title)}?`;
    }

    return (
        <Dialog open={true} onClose={toggleShowDialog}>
            <DialogTitle>{getTitleDialog()}</DialogTitle>
            <DialogContent>
                <DialogContentText>{getQuestionDialog()}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => deleteWpt()}>Delete</Button>
                <Button onClick={toggleShowDialog}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}
