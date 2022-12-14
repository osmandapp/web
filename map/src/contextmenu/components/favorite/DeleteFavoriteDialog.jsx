import {Dialog} from "@material-ui/core";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TracksManager from "../../../context/TracksManager";
import DialogActions from "@mui/material/DialogActions";
import {Button} from "@mui/material";
import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";

export default function DeleteFavoriteDialog({dialogOpen, setDialogOpen}) {

    const ctx = useContext(AppContext);

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    function deleteFavorite() {
        for (let i = 0; i < ctx.selectedGpxFile.file.wpts.length; i++) {
            if (ctx.selectedGpxFile.file.wpts[i].name === ctx.selectedGpxFile.markerCurrent.title) {
                ctx.selectedGpxFile.file.wpts.splice(i, 1);
                let currentFolder = ctx.selectedGpxFile.file.name;
                let fileName = ctx.selectedGpxFile.name;
                let deleted = TracksManager.saveTrack(ctx, currentFolder, fileName, TracksManager.FAVORITE_FILE_TYPE, null, true);
                if (deleted) {
                    disableSelectedMarker();
                    updateGroupMarkers();
                    closeContextMenu();
                    break;
                }
            }
        }
    }

    function disableSelectedMarker() {
        ctx.selectedGpxFile.markerPrev = ctx.selectedGpxFile.markerCurrent;
        delete ctx.selectedGpxFile.markerCurrent;
        ctx.selectedGpxFile.editFavorite = true;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function updateGroupMarkers() {
        delete ctx.favorites[ctx.selectedGpxFile.nameGroup].markers;
        ctx.setFavorites({...ctx.favorites});
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