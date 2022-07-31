import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Button, TextField} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import {useContext, useEffect, useRef, useState} from "react";
import {BaseBuilder, buildGPX} from "gpx-builder";
import {Metadata} from "gpx-builder/dist/builder/BaseBuilder/models";
import Utils from "../../util/Utils";
import AppContext from "../../context/AppContext";
import LocalTrackUtils from "../../drawer/util/LocalTrackUtils";

export default function SaveRouteDialog({open, setOpen}) {

    const ctx = useContext(AppContext);
    const valueRef = useRef('');
    const [newFileName, setNewFileName] = useState('');
    const [nameError, setNameError] = useState(null);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (handleClose) => {
        let name = valueRef.current.value;
        let localGpxFiles = LocalTrackUtils.getTrackList(ctx.gpxFiles);
        let alreadyExists;
        localGpxFiles.forEach(file => {
            if (file.name.replace(/local:/g,'').replace(/.gpx/g,'') === name) {
                setNameError("This filename already exists");
                alreadyExists = true;
            }
        })
        if (!alreadyExists) {
            setNewFileName(valueRef.current.value);
            handleClose();
        }
    };

    //create gpx
    useEffect(() => {
        if (newFileName !== '') {
            const {Point} = BaseBuilder.MODELS;
            let points = [];
            ctx.currentlyEditTrack.pointsList.forEach(p => points.push(new Point(p.lat, p.lng)));
            const gpxData = new BaseBuilder();
            gpxData.setSegmentPoints(points);
            gpxData.setMetadata(new Metadata({name: 'new'}))
            let newGpx = buildGPX(gpxData.toObject());
            const file = new File([newGpx], newFileName + ".gpx", {
                type: "application/gpx+xml",
            });
            let gpxLayer = {};
            gpxLayer.name = 'local:' + file.name;
            gpxLayer.localContent = `${process.env.REACT_APP_GPX_API}/gpx/get-gpx-file?name=` + encodeURIComponent(file.name);
            gpxLayer.local = true;
            Utils.uploadFile(ctx.gpxFiles, ctx.setGpxFiles, ctx, gpxLayer, file).then();
        }
    }, [newFileName, setNewFileName]);

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create gpx file</DialogTitle>
            <DialogContent>
                <TextField
                    inputRef={valueRef}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="File name"
                    type="name"
                    fullWidth
                    variant="standard"
                    error={nameError !== null}
                    helperText={nameError ? nameError : ''}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => handleSave(handleClose)}>Save</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}