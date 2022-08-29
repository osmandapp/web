import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import TracksManager from "../../../context/TracksManager";
import GPXCreator from "../../../util/GPXCreator";

export default function LocalTrackItem({track, index}) {

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

    function addGpx(track, selectedTrack) {
        if (!selectedTrack.gpx) {
            selectedTrack.gpx = GPXCreator.createGpx(track);
            ctx.setLocalClientsTracks([
                ...ctx.localClientsTracks.slice(0, indexTrack),
                selectedTrack,
                ...ctx.localClientsTracks.slice(indexTrack + 1, ctx.localClientsTracks.length)
            ]);
        }
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
            let selectedTrack = ctx.localClientsTracks[indexTrack];
            track.index = indexTrack;
            setIndexTrack(indexTrack);
            selectedTrack.selected = true;
            if (!selectedTrack.gpx) {
                addGpx(track, selectedTrack);
            } else {
                ctx.setLocalClientsTracks([...ctx.localClientsTracks]);
            }
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
                        {track.name}
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