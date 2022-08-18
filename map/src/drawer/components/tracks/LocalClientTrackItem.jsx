import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import TracksManager from "../../../context/TracksManager";
import Utils from "../../../util/Utils";

export default function LocalClientTrackItem({track, index}) {

    const ctx = useContext(AppContext);
    const [indexTrack, setIndexTrack] = useState(index);

    function enableLayer(visible) {
        if (!visible) {
            deleteTrackFromMap();
        } else {
            addTrackToMap();
        }
        TracksManager.saveTracks(ctx.localClientsTracks);
    }

    function addGpx(track) {
        let selectedTrack = ctx.localClientsTracks[indexTrack];
        selectedTrack.gpx = Utils.getGpx(track);
        ctx.setLocalClientsTracks([
            ...ctx.localClientsTracks.slice(0, indexTrack),
            selectedTrack,
            ...ctx.localClientsTracks.slice(indexTrack + 1, ctx.localClientsTracks.length)
        ]);
    }

    function cleanSelectedTrackIfNeed(currentTrack) {
        if (ctx.selectedGpxFile && ctx.selectedGpxFile.name === currentTrack.name) {
            ctx.setSelectedGpxFile(null);
        }
    }

    function deleteTrackFromMap() {
        let currentTrack = ctx.localClientsTracks[track.index];
        ctx.setCurrentObjectType(null);
        currentTrack.selected = false;
        cleanSelectedTrackIfNeed(currentTrack);
        ctx.setLocalClientsTracks([...ctx.localClientsTracks]);
    }

    function addTrackToMap() {
        ctx.setCurrentObjectType('local_client_track');
        if (indexTrack !== undefined) {
            track.index = indexTrack;
            setIndexTrack(indexTrack);
            ctx.localClientsTracks[indexTrack].selected = true;
            addGpx(track);
        }
        ctx.setSelectedGpxFile(Object.assign({}, track));
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