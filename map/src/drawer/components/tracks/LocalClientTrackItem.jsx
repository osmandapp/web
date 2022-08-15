import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import {BaseBuilder, buildGPX} from "gpx-builder";
import {Metadata, Point} from "gpx-builder/dist/builder/BaseBuilder/models";
import LocalTracksManager from "../../../context/LocalTracksManager";

export default function LocalClientTrackItem({track, index}) {

    const ctx = useContext(AppContext);
    const [indexTrack, setIndexTrack] = useState(index);

    function enableLayer(visible) {
        if (!visible) {
            deleteTrackFromMap();
        } else {
            addTrackToMap();
        }
        LocalTracksManager.saveTracks(ctx.localClientsTracks);
    }

    function addGpx(track) {
        let points = [];
        track.points.forEach(p => points.push(new Point(p.lat, p.lng)));
        const gpxData = new BaseBuilder();
        gpxData.setSegmentPoints(points);
        gpxData.setMetadata(new Metadata({name: 'new'}))
        let newGpx = buildGPX(gpxData.toObject());
        let selectedTrack = ctx.localClientsTracks[indexTrack];
        selectedTrack.gpx = newGpx;
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