import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";
import {ListItemText, MenuItem, Switch, Tooltip, Typography} from "@mui/material";

export default function EditTrack({index, setIndexTrack, track}) {

    const ctx = useContext(AppContext);

    function enableLayer(item, ctx, visible) {
        if (!visible) {
            ctx.setSelectedEditTrack(null);
        } else {
            ctx.setSelectedEditTrack(structuredClone(track));
            setIndexTrack(index);
        }
    }

    return <div>
        <MenuItem key={'track._leaflet_id' + index} onClick={() => {
            ctx.setSelectedEditTrack(track);
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
            <Switch
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                    enableLayer(track, ctx, e.target.checked)
                }}/>
        </MenuItem>
    </div>
}