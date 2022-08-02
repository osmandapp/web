import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import CreatedTrackUtils from "../../util/CreatedTrackUtils";
import {BaseBuilder, buildGPX} from "gpx-builder";
import {Metadata, Point} from "gpx-builder/dist/builder/BaseBuilder/models";

export default function CreatedTrackItem({track, index}) {

    const ctx = useContext(AppContext);
    const [indexTrack, setIndexTrack] = useState(index);

    function enableLayer(item, ctx, visible) {
        if (!visible) {
            CreatedTrackUtils.unselectedTrack(ctx.createdTracks, item);
            ctx.setCreatedTracks([...ctx.createdTracks]);
        } else {
            track.index = indexTrack;
            setIndexTrack(indexTrack);
            CreatedTrackUtils.selectedTrack(ctx.createdTracks, indexTrack);
            addGpx(track);
            ctx.setContextMenuObjectType(null);
        }
        CreatedTrackUtils.saveToLocalStorage(ctx.createdTracks);
    }

    function addGpx(track) {
        let points = [];
        track.points.forEach(p => points.push(new Point(p.lat, p.lng)));
        const gpxData = new BaseBuilder();
        gpxData.setSegmentPoints(points);
        gpxData.setMetadata(new Metadata({name: 'new'}))
        let newGpx = buildGPX(gpxData.toObject());
        let selectedTrack = ctx.createdTracks[indexTrack];
        selectedTrack.gpx = newGpx;
        ctx.setCreatedTracks([
            ...ctx.createdTracks.slice(0, indexTrack),
            selectedTrack,
            ...ctx.createdTracks.slice(indexTrack + 1, ctx.createdTracks.length)
        ]);
    }

    function chooseTrack() {
        CreatedTrackUtils.selectedTrack(ctx.createdTracks, indexTrack);
        ctx.setCreatedTracks([...ctx.createdTracks]);
        setIndexTrack(indexTrack);
    }

    return <div>
        <MenuItem key={'track._leaflet_id' + indexTrack} onClick={() => chooseTrack()}>
            <Tooltip title={<div>
                {track.name}
            </div>}>
                <ListItemText inset>
                    <Typography variant="inherit" noWrap>
                        {"*" + track.name}
                    </Typography>
                </ListItemText>
            </Tooltip>
            <Switch checked={track.selected === true}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                        enableLayer(track, ctx, e.target.checked)
                    }}/>
        </MenuItem>
    </div>
}