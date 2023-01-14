import AppContext from "../../../context/AppContext";
import {Alert, Button, LinearProgress, ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import React, {useContext, useState} from "react";
import Utils from "../../../util/Utils";
import TrackInfo from "./TrackInfo";
import TracksManager from "../../../context/TracksManager";

export default function CloudTrackItem({file}) {

    const ctx = useContext(AppContext);

    const [loadingTrack, setLoadingTrack] = useState(false);
    const [error, setError] = useState(false);

    async function enableLayer(setProgressVisible, visible) {
        if (!visible) {
            deleteTrackFromMap();
        } else {
            await addTrackToMap(setProgressVisible);
        }
    }

    function deleteTrackFromMap() {
        const newGpxFiles = Object.assign({}, ctx.gpxFiles);
        newGpxFiles[file.name].url = null;
        ctx.setGpxFiles(newGpxFiles);
        if (ctx.selectedGpxFile?.name === file.name) {
            ctx.setCurrentObjectType(null);
        }
    }

    async function addTrackToMap(setProgressVisible) {
        setProgressVisible(true);
        if (file.url) {
            ctx.setSelectedGpxFile(ctx.gpxFiles[file.name]);
        } else {
            let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(file.type)}&name=${encodeURIComponent(file.name)}`;
            const newGpxFiles = Object.assign({}, ctx.gpxFiles);
            newGpxFiles[file.name] = {
                'url': url,
                'clienttimems': file.clienttimems,
                'updatetimems': file.updatetimems,
                'name': file.name};
            let f = await Utils.getFileData(newGpxFiles[file.name]);
            const gpxfile = new File([f], file.name, {
                type: "text/plain",
            });
            let track = await TracksManager.getTrackData(gpxfile);
            setProgressVisible(false);
            if (track) {
                let type = ctx.OBJECT_TYPE_CLOUD_TRACK;
                ctx.setCurrentObjectType(type);
                track.name = file.name;
                Object.keys(track).forEach(t => {
                    newGpxFiles[file.name][`${t}`] = track[t];
                });
                ctx.setGpxFiles(newGpxFiles);
                ctx.setSelectedGpxFile(Object.assign({}, newGpxFiles[file.name]));
            } else {
                setError(true);
            }
        }
    }

    return (<>
        <MenuItem key={file.name} onClick={() => addTrackToMap(ctx.setGpxLoading)}>
            <Tooltip title={<TrackInfo file={file}/>}>
                <ListItemText inset>
                    <Typography variant="inherit" noWrap>
                        {TracksManager.getFileName(file)}
                    </Typography>
                </ListItemText>
            </Tooltip>
            <Switch
                checked={!!ctx.gpxFiles[file.name]?.url}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                    !file.local && enableLayer(setLoadingTrack, e.target.checked)
                }}/>
        </MenuItem>
        {loadingTrack ? <LinearProgress/> : <></>}
        {error && <Alert onClose={() => {
            setError(false)
        }} severity="warning">Something went wrong!</Alert>}
    </>)
}
