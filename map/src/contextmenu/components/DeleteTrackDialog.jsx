import React, {useContext} from 'react';
import {Dialog} from "@material-ui/core";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Button} from "@mui/material";
import AppContext from "../../context/AppContext";
import TracksManager from "../../context/TracksManager";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

export default function DeleteTrackDialog({dialogOpen, setDialogOpen, setShowContextMenu}) {

    const ctx = useContext(AppContext);

    const place = ctx.currentObjectType !== 'cloud_track' ? 'cloud' : ctx.currentObjectType !== 'local_client_track' ? 'local' : '';

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    function deleteCurrentTrack() {
        let currentTrackIndex = ctx.localTracks.findIndex(t => t.name === ctx.selectedGpxFile.name);
        if (currentTrackIndex !== -1) {
            ctx.localTracks.splice(currentTrackIndex, 1);
            ctx.setSelectedGpxFile(null);
            TracksManager.saveTracks(ctx.localTracks);
            ctx.setLocalTracks([...ctx.localTracks]);
            setShowContextMenu(false);
        }
    }

    return (
        <Dialog open={true} onClose={toggleShowDialog}>
            <DialogTitle>Delete track</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {`Are you sure you want to delete ${ctx.selectedGpxFile.name} track from the ${place} tracks?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Close</Button>
                <Button onClick={() => deleteCurrentTrack()}>
                    Delete</Button>
            </DialogActions>
        </Dialog>
    );
}