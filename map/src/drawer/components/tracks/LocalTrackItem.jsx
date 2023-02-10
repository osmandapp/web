import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import TracksManager from "../../../context/TracksManager";

export default function LocalTrackItem({track, index}) {

    const ctx = useContext(AppContext);
    const [indexTrack, setIndexTrack] = useState(index);

    function enableLayer(visible) {
        if (!visible) {
            deleteTrackFromMap();
        } else {
            addTrackToMap();
        }
        TracksManager.saveTracks(ctx.localTracks);
    }

    function cleanSelectedTrackIfNeed(currentTrack) {
        if (ctx.selectedGpxFile && ctx.selectedGpxFile.name === currentTrack.name) {
            ctx.setSelectedGpxFile({});
        }
    }

    function deleteTrackFromMap() {
        let currentTrack = ctx.localTracks[track.index];
        ctx.setCurrentObjectType(null);
        currentTrack.selected = false;
        cleanSelectedTrackIfNeed(currentTrack);
        ctx.setLocalTracks([...ctx.localTracks]);
    }

    function addTrackToMap() {
        let type = ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;
        ctx.setCurrentObjectType(type);
        if (indexTrack !== undefined) {
            addSelectedTack();
            startEdit();
            ctx.setLocalTracks([...ctx.localTracks]);
        }
    }

    function addSelectedTack() {
        let selectedTrack = ctx.localTracks[indexTrack];
        track.index = indexTrack;
        setIndexTrack(indexTrack);
        selectedTrack.selected = true;
        selectedTrack.updateLayers = false;
        ctx.setSelectedGpxFile(selectedTrack);
    }

    function startEdit() {
        ctx.setCreateTrack({
            enable: true,
            edit: true
        })
    }

    return <div>
        <MenuItem key={'track._leaflet_id' + indexTrack} onClick={() => addTrackToMap()}>
            <Tooltip title={<div>
                {track.name}
            </div>}>
                <ListItemText inset>
                    <Typography variant="inherit" noWrap>
                        {"* " + track.name}
                    </Typography>
                </ListItemText>
            </Tooltip>
            <Switch checked={track.selected === true}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                        enableLayer(e.target.checked)
                    }}/>
        </MenuItem>
    </div>
}