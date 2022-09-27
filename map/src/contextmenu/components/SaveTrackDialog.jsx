import React, {useContext, useState} from 'react';
import {Dialog} from "@material-ui/core";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Button, FormControl, InputLabel, MenuItem, NativeSelect, TextField} from "@mui/material";
import AppContext from "../../context/AppContext";
import TracksManager from "../../context/TracksManager";
import {post} from "axios";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

export default function SaveTrackDialog() {

    const ctx = useContext(AppContext);

    const [folder, setFolder] = useState("Tracks");
    const [fileName, setFileName] = useState(ctx.selectedGpxFile.name);
    const [dialogOpen, setDialogOpen] = useState(ctx.selectedGpxFile.save);

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
        ctx.selectedGpxFile.save = !ctx.selectedGpxFile.save;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    };

    async function saveTrack() {
        toggleShowDialog();
        if (ctx.loginUser) {
            let gpx = await TracksManager.getGpxTrack(ctx);
            if (gpx) {
                let convertedData = new TextEncoder().encode(gpx.data);
                let zippedResult = require('pako').gzip(convertedData, {to: "Uint8Array"});
                let convertedZipped = zippedResult.buffer;
                let oMyBlob = new Blob([convertedZipped], {type: "gpx"});
                let file = new FormData();
                file.append('file', oMyBlob, ctx.selectedGpxFile.name);

                await post(`${process.env.REACT_APP_GPX_API}/mapapi/upload-file`, file,
                    {
                        params: {
                            name: folder + "/" + fileName + ".gpx",
                            type: 'gpx',
                        }
                    }
                );
            }
        }
    }

    const handleChange = (event) => {
        setFolder(event.target.value);
    };

    return (
        <Dialog open={true} onClose={toggleShowDialog}>
            <DialogTitle>Save track</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {`Are you sure you want to save the track to the cloud tracks?`}
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    onChange={(e) => {
                        setFileName(e.target.value);
                    }}
                    label="Name"
                    id="fileName"
                    type="fileName"
                    fullWidth
                    variant="standard"
                    value={fileName ? fileName : ''}
                >
                </TextField>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">Select group</InputLabel>
                    <NativeSelect
                        defaultValue={"Tracks"}
                        value={folder}
                        onChange={(e) =>handleChange(e)}
                    >
                        {ctx.gpxFiles.trackGroups && ctx.gpxFiles.trackGroups.map((group) => (
                            <option
                                key={group.name}
                                value={group.name}>
                                {group.name}
                            </option>
                        ))}
                    }
                    </NativeSelect>
                </FormControl>
                <TextField
                    autoFocus
                    margin="dense"
                    onChange={(e) => {
                        setFolder(e.target.value);
                    }}
                    id="folder"
                    label="New group"
                    type="folder"
                    fullWidth
                    variant="standard"
                >
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Close</Button>
                <Button onClick={() => saveTrack()}>
                    Save</Button>
            </DialogActions>
        </Dialog>
    );
}