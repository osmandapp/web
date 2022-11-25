import React, {useContext, useState} from 'react';
import {Dialog} from "@material-ui/core";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {
    Autocomplete,
    Button,
    createFilterOptions,
    TextField
} from "@mui/material";
import AppContext from "../../context/AppContext";
import TracksManager from "../../context/TracksManager";
import {post} from "axios";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import Utils from "../../util/Utils";


export default function SaveTrackDialog() {

    const ctx = useContext(AppContext);

    const [folder, setFolder] = useState("Tracks");
    const [fileName, setFileName] = useState(ctx.selectedGpxFile.name);
    const [dialogOpen, setDialogOpen] = useState(ctx.selectedGpxFile.save);

    let folders = ctx.gpxFiles.trackGroups.map(group => (
            {
                title: group.name
            }
        )
    );

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
        ctx.selectedGpxFile.save = !ctx.selectedGpxFile.save;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    };

    const getFolderName = (folder) => {
        if (folder === null) {
            return null;
        } else {
            if (typeof folder === 'string') {
                return folder;
            }
            if (folder.inputValue) {
                return folder.inputValue;
            }
            return folder.title;
        }
    }

    const filter = createFilterOptions();

    async function saveTrack() {
        toggleShowDialog();
        let currentFolder = getFolderName(folder);
        if (ctx.loginUser) {
            let gpx = await TracksManager.getGpxTrack(ctx);
            if (gpx) {
                let convertedData = new TextEncoder().encode(gpx.data);
                let zippedResult = require('pako').gzip(convertedData, {to: "Uint8Array"});
                let convertedZipped = zippedResult.buffer;
                let oMyBlob = new Blob([convertedZipped], {type: "gpx"});
                let file = new FormData();
                file.append('file', oMyBlob, ctx.selectedGpxFile.name);

                const respUpload = await post(`${process.env.REACT_APP_GPX_API}/mapapi/upload-file`, file,
                    {
                        params: {
                            name: currentFolder + "/" + fileName + ".gpx",
                            type: 'gpx',
                        }
                    }
                );
                if (respUpload) {
                    const respGetFiles = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
                    const res = await respGetFiles.json();
                    ctx.setListFiles(res);
                }
            }
        }
    }


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
                    error={fileName === ""}
                    helperText={fileName === "" ? 'Empty name!' : ' '}
                    variant="standard"
                    value={fileName ? fileName : ''}
                >
                </TextField>
                <Autocomplete
                    value={folder}
                    onChange={(event, newValue) => {
                        setFolder(newValue);
                    }}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);
                        const {inputValue} = params;
                        const isExisting = options.some((option) => inputValue === option.title);
                        if (inputValue !== '' && !isExisting) {
                            filtered.push({
                                inputValue,
                                title: `Add "${inputValue}"`,
                            });
                        }
                        return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="folder"
                    options={folders}
                    getOptionLabel={(option) => getFolderName(option)}
                    renderOption={(props, option) => <li {...props}>{option.title}</li>}
                    freeSolo
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Folder"
                            error={folder == null}
                            helperText={folder == null ? 'Empty folder!' : ' '}/>
                    )}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Cancel</Button>
                <Button disabled={getFolderName(folder) === null || fileName === ""} onClick={() => saveTrack()}>
                    Save</Button>
            </DialogActions>
        </Dialog>
    );
}