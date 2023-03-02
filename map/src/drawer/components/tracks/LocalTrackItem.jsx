import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import TracksManager from "../../../context/TracksManager";
import _ from "lodash";

export default function LocalTrackItem({track, index}) {

    const ctx = useContext(AppContext);
    const [indexTrack, setIndexTrack] = useState(index);

    function enableLayer(visible) {
        if (!visible) {
            deleteTrackFromMap();
        } else {
            addTrackToMap();
        }
        TracksManager.saveTracks(ctx.localTracks, ctx);
    }

    function cleanSelectedTrackIfNeed(currentTrack) {
        if (ctx.selectedGpxFile && ctx.selectedGpxFile.name === currentTrack.name) {
            if (ctx.createTrack) {
                ctx.createTrack.enable = false;
                ctx.createTrack.clear = true;
                ctx.setCreateTrack({...ctx.createTrack});
            }
        }
    }

    function deleteTrackFromMap() {
        let currentTrack = ctx.localTracks[track.index];
        currentTrack.selected = false;
        cleanSelectedTrackIfNeed(currentTrack);
        ctx.setLocalTracks([...ctx.localTracks]);
    }

    function addTrackToMap() {
        let type = ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;
        ctx.setCurrentObjectType(type);
        if (indexTrack !== undefined) {
            startEdit();
            addSelectedTack();
            ctx.setLocalTracks([...ctx.localTracks]);
        }
    }

    function addSelectedTack() {
        let selectedTrack = ctx.localTracks[indexTrack];
        track.index = indexTrack;
        setIndexTrack(indexTrack);
        selectedTrack.selected = true;
        ctx.selectedGpxFile.zoom = true;
        selectedTrack.updateLayers = false;
        ctx.setSelectedGpxFile(selectedTrack);
    }

    function startEdit() {
        if (ctx.createTrack?.enable) {
            ctx.setCreateTrack({
                enable: true,
                edit: true,
                closePrev: {
                    file: _.cloneDeep(ctx.selectedGpxFile)
                }
            })
        } else {
            ctx.setCreateTrack({
                enable: true,
                edit: true
            })
        }
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
            <Switch checked={track.selected === true || ctx.selectedGpxFile?.name === track.name}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                        enableLayer(e.target.checked);
                    }}/>
        </MenuItem>
    </div>
}