import AppContext from "../../../context/AppContext";
import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import React, {useContext} from "react";
import Utils from "../../../util/Utils";
import TrackInfo from "./TrackInfo";
import TracksManager from "../../../context/TracksManager";

export default function CloudTrackItem({file}) {

    const ctx = useContext(AppContext);

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
        ctx.setCurrentObjectType('cloud_track');
        if (file.url) {
            ctx.setSelectedGpxFile(ctx.gpxFiles[file.name]);
        } else {
            let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(file.type)}&name=${encodeURIComponent(file.name)}`;
            const newGpxFiles = Object.assign({}, ctx.gpxFiles);
            newGpxFiles[file.name] = {'url': url, 'clienttimems': file.clienttimems, 'name': file.name};
            ctx.setGpxFiles(newGpxFiles);
            if (file.details?.analysis) {
                newGpxFiles[file.name].summary = file.details.analysis;
            }

            //loadGpxInfo
            let gpxInfoUrl = `${process.env.REACT_APP_USER_API_SITE}/mapapi/get-gpx-info?type=${encodeURIComponent(file.type)}&name=${encodeURIComponent(file.name)}`;
            const gpxInfo = await Utils.fetchUtilLoad(gpxInfoUrl, {}, setProgressVisible);
            if (gpxInfo.ok) {
                let data = await gpxInfo.json();
                newGpxFiles[file.name].summary = data.info;
                setProgressVisible(false);
            }

            //loadSrtmGpxInfo
            let srtmGpxInfoUrl = `${process.env.REACT_APP_USER_API_SITE}/mapapi/get-srtm-gpx-info?type=${encodeURIComponent(file.type)}&name=${encodeURIComponent(file.name)}`;
            const srtmGpxInfo = await Utils.fetchUtilLoad(srtmGpxInfoUrl, {}, setProgressVisible);
            if (srtmGpxInfo.ok) {
                let data = await srtmGpxInfo.json();
                newGpxFiles[file.name].srtmSummary = data.info;
                setProgressVisible(false);
            }
            //ctx.setSelectedGpxFile(newGpxFiles[file.name]);
            ctx.setSelectedGpxFile(Object.assign({}, newGpxFiles[file.name]));
        }
    }

    return (
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
                    !file.local && enableLayer(ctx.setGpxLoading, e.target.checked)
                }}/>
        </MenuItem>)
}
