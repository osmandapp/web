import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import React, {useContext} from "react";
import TrackInfo from "./TrackInfo";
import TrackUtils from "../../util/TrackUtils";
import AppContext from "../../../context/AppContext";

export default function LocalServerTrackItem({file}) {

    const ctx = useContext(AppContext);

    function enableLayer(setProgressVisible, visible) {
        if (!visible) {
            deleteTrackFromMap();
        } else {
            addTrackToMap();
        }
    }

    function addTrackToMap() {
        const newGpxFiles = Object.assign({}, ctx.gpxFiles);
        newGpxFiles[file.name].url = file.localContent;
        newGpxFiles[file.name].urlopts = {credentials: 'include'}
        ctx.setSelectedGpxFile(file);
        ctx.setContextMenuObjectType('track');

        ctx.setGpxFiles(newGpxFiles);
    }

    function deleteTrackFromMap() {
        const newGpxFiles = Object.assign({}, ctx.gpxFiles);
        newGpxFiles[file.name].url = null;
        if (ctx.selectedGpxFile?.name === file.name) {
            ctx.setContextMenuObjectType(null);
        }
        ctx.setGpxFiles(newGpxFiles);
    }

    return (
        <MenuItem key={file.name} onClick={() => addTrackToMap()}>
            <Tooltip title={<TrackInfo file={file}/>}>
                <ListItemText inset>
                    <Typography variant="inherit" noWrap>
                        {TrackUtils.getFileName(file)}
                    </Typography>
                </ListItemText>
            </Tooltip>
            <Switch
                checked={!!ctx.gpxFiles[file.name]?.url}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                    file.local && enableLayer(ctx.setGpxLoading, e.target.checked)
                }}/>
        </MenuItem>)
}