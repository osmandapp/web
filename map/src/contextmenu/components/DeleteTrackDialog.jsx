import React, {useContext} from 'react';
import {Dialog} from "@material-ui/core";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Button} from "@mui/material";
import AppContext from "../../context/AppContext";
import TracksManager from "../../context/TracksManager";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import {post} from "axios";

export default function DeleteTrackDialog({dialogOpen, setDialogOpen, setShowContextMenu}) {

    const ctx = useContext(AppContext);

    const place = ctx.currentObjectType !== 'cloud_track' ? 'cloud' : ctx.currentObjectType !== 'local_client_track' ? 'local' : '';

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    async function deleteCurrentTrack() {
        if (ctx.currentObjectType === 'cloud_track' && ctx.loginUser) {
            setShowContextMenu(false);
            const newGpxFiles = Object.assign({}, ctx.gpxFiles);
            newGpxFiles[ctx.selectedGpxFile.name].url = null;
            ctx.setGpxFiles(newGpxFiles);

            ctx.gpxFiles.trackGroups.forEach(group => {
                let currentFile = group.files.findIndex(file =>
                    file.name === ctx.selectedGpxFile.name
                );
                if (currentFile !== 1) {
                    group.files.splice(currentFile, 1);
                }
            })

            ctx.setSelectedGpxFile(null);
            setDialogOpen(false);
            await post(`${process.env.REACT_APP_GPX_API}/mapapi/delete-file`, "",
                {
                    params: {
                        name: ctx.selectedGpxFile.name,
                        type: 'gpx',
                    }
                }
            );

        } else if (ctx.currentObjectType === 'local_client_track') {
            let currentTrackIndex = ctx.localTracks.findIndex(t => t.name === ctx.selectedGpxFile.name);
            if (currentTrackIndex !== -1) {
                ctx.localTracks.splice(currentTrackIndex, 1);
                ctx.setSelectedGpxFile(null);
                TracksManager.saveTracks(ctx.localTracks);
                ctx.setLocalTracks([...ctx.localTracks]);
                setShowContextMenu(false);
                setDialogOpen(false);
            }
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