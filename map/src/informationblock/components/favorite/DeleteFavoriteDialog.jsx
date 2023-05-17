import {Dialog} from "@material-ui/core";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TracksManager from "../../../context/TracksManager";
import DialogActions from "@mui/material/DialogActions";
import {Button} from "@mui/material";
import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";
import FavoritesManager from "../../../context/FavoritesManager";
import FavoriteHelper from "./FavoriteHelper";

export default function DeleteFavoriteDialog({dialogOpen, setDialogOpen}) {

    const ctx = useContext(AppContext);

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    async function deleteFavorite() {
        for (let i = 0; i < ctx.selectedGpxFile.file.wpts.length; i++) {
            if (ctx.selectedGpxFile.file.wpts[i].name === ctx.selectedGpxFile.markerCurrent.title) {
                let result = await FavoritesManager.deleteFavorite(
                    ctx.selectedGpxFile.file.wpts[i],
                    ctx.selectedGpxFile.file.name,
                    ctx.favorites[ctx.selectedGpxFile.nameGroup].updatetimems)
                if (result) {
                    ctx.favorites[ctx.selectedGpxFile.nameGroup] = FavoriteHelper.updateGroupObj(ctx.favorites[ctx.selectedGpxFile.nameGroup], result);
                    ctx.favorites = FavoriteHelper.updateSelectedGroup(ctx.favorites, ctx.selectedGpxFile.nameGroup, result);
                    FavoriteHelper.updateSelectedFile(ctx, ctx.favorites, result, ctx.selectedGpxFile.markerCurrent.title, ctx.selectedGpxFile.nameGroup, true);
                    ctx.setFavorites({...ctx.favorites});
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

    return (
        <Dialog open={true} onClose={toggleShowDialog}>
            <DialogTitle>Delete favorite</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {`Are you sure you want to delete ${TracksManager.prepareName(ctx.selectedGpxFile.markerCurrent.title)}?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => deleteFavorite()}>
                    Delete</Button>
                <Button onClick={toggleShowDialog}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}