import {Collapse, ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import {ExpandLess, ExpandMore, Map} from "@mui/icons-material";
import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import TrackItem from "./TrackItem";

export default function VisibleTracks({visibleTracks}) {

    const ctx = useContext(AppContext);

    const [visibleTracksOpen, setVisibleTracksOpen] = useState(false);

    return <>
        <MenuItem sx={{ml: 3}} divider onClick={() => setVisibleTracksOpen(!visibleTracksOpen)}>
            <ListItemIcon>
                <Map fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Visible {visibleTracks && visibleTracks.length > 0 ? `(${visibleTracks.length})` : ''}</ListItemText>
            {ctx.selectedGpxFile === 0 ? <></> : visibleTracksOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={visibleTracksOpen} timeout="auto" unmountOnExit>
            {visibleTracks.length > 0 && visibleTracks.map((track, index) => {
                return <TrackItem key={track + index}
                                  file={track}/>;
            })}
        </Collapse>
    </>
}