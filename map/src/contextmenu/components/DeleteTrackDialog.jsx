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

    const place = ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK ? 'cloud' : ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK ? 'local' : '';

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    function cleanContextMenu() {
        ctx.setSelectedGpxFile({});
        setDialogOpen(false);
        setShowContextMenu(false);
    }

    async function deleteCurrentTrack() {
        if (ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK && ctx.loginUser) {
            let response = await post(`${process.env.REACT_APP_GPX_API}/mapapi/delete-file`, "",
                {
                    params: {
                        name: ctx.selectedGpxFile.name,
                        type: 'GPX'
                    }
                }
            );
            if (response.status === 200) {
                //delete layer
                const newGpxFiles = Object.assign({}, ctx.gpxFiles);
                newGpxFiles[ctx.selectedGpxFile.name].url = null;
                ctx.setGpxFiles(newGpxFiles);
                //delete track from menu
                ctx.gpxFiles.trackGroups.forEach(group => {
                    let currentFile = group.files.findIndex(file =>
                        file.name === ctx.selectedGpxFile.name
                    );
                    if (currentFile !== -1) {
                        group.files.splice(currentFile, 1);
                    }
                })

                cleanContextMenu();
            }

        } else if (ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK) {
            let wasDeleted = TracksManager.deleteLocalTrack(ctx);
            if (wasDeleted) {
                cleanContextMenu();
            }
        }

    }

    return (
        <Dialog open={true} onClose={toggleShowDialog}>
            <DialogTitle>Delete track</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {`Are you sure you want to delete ${TracksManager.prepareName(ctx.selectedGpxFile.name)} track from the ${place} tracks?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Cancel</Button>
                <Button onClick={() => deleteCurrentTrack()}>
                    Delete</Button>
            </DialogActions>
        </Dialog>
    );
}