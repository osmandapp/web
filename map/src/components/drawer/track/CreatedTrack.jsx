import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";
import {ListItemText, MenuItem, Typography} from "@mui/material";

export default function CreatedTrack({index, setIndexTrack, track}) {

    const ctx = useContext(AppContext);

    function addTrackToMap(track) {
        setIndexTrack(index);
        ctx.newRoute.pointsList = structuredClone(track);
        ctx.setNewRoute({...ctx.newRoute});
        ctx.editor.showTrack = true;
        if (ctx.editor.deleteRoute) {
            ctx.editor.deleteRoute = false;
        }
        ctx.setEditor({...ctx.editor});
    }

    return <div>
        <MenuItem key={'track._leaflet_id' + index} onClick={() => addTrackToMap(track.track)}>
            <ListItemText inset>
                <Typography variant="inherit" noWrap>
                    {track.name}
                </Typography>
            </ListItemText>
        </MenuItem>
    </div>
}