import {Collapse, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Map} from "@mui/icons-material";
import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import TrackItem from "./TrackItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    group: {
        '& li': {
            minHeight: '50px !important'
        }
    }
})


export default function VisibleTrackGroup({visibleTracks}) {

    const ctx = useContext(AppContext);

    const classes = useStyles();

    const [visibleTracksOpen, setVisibleTracksOpen] = useState(false);


    return <div className={classes.group}>
        <MenuItem sx={{ml: 3}} divider onClick={() => setVisibleTracksOpen(!visibleTracksOpen)}>
            <ListItemIcon>
                <Map fontSize="small"/>
            </ListItemIcon>
            <ListItemText> Visible </ListItemText>
            <Typography variant="body2" color="textSecondary">
                {visibleTracks && visibleTracks.length > 0 ? `${visibleTracks.length}` : ''}
            </Typography>
            {ctx.selectedGpxFile === 0 ? <></> : visibleTracksOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={visibleTracksOpen} timeout="auto" unmountOnExit>
            {visibleTracks.length > 0 && visibleTracks.map((track, index) => {
                return <TrackItem key={track + index}
                                  file={track}/>;
            })}
        </Collapse>
    </div>
}