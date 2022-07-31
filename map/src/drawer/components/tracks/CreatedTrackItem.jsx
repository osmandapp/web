import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";
import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";
import CreatedTrackUtils from "../../util/CreatedTrackUtils";

export default function CreatedTrackItem({index, setIndexTrack, track}) {

    const ctx = useContext(AppContext);

    function enableLayer(item, ctx, visible) {
        if (!visible) {
            CreatedTrackUtils.resetAllSelectedTracks(ctx.createdTracks);
        } else {
            CreatedTrackUtils.getTrackByIndex(ctx.createdTracks, index);
            ctx.createdTracks.forEach(function (track) {
                track.isNew = false;
            })
            setIndexTrack(index);
        }
        ctx.setCreatedTracks([...ctx.createdTracks]);
    }

    return <div>
        <MenuItem key={'track._leaflet_id' + index} onClick={() => {
            CreatedTrackUtils.getTrackByIndex(ctx.createdTracks, index);
            ctx.setCreatedTracks([...ctx.createdTracks]);
            setIndexTrack(index);
        }}>
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
                    enableLayer(track, ctx, e.target.checked)
                }}/>
        </MenuItem>
    </div>
}