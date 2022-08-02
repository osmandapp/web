import {Collapse, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Map} from "@mui/icons-material";
import React, {useState} from "react";
import TrackItem from "./TrackItem";
import {makeStyles} from "@material-ui/core/styles";
import CreatedTrackItem from "./CreatedTrackItem";

const useStyles = makeStyles({
    group: {
        '& li': {
            minHeight: '50px !important'
        }
    }
})


export default function VisibleTrackGroup({visibleTracks}) {

    const classes = useStyles();
    const [visibleTracksOpen, setVisibleTracksOpen] = useState(false);

    function getVisibleTracksLength() {
        let length = 0;
        if (visibleTracks.created || visibleTracks.cloud) {
            if (visibleTracks.created && visibleTracks.created.length > 0) {
                length += visibleTracks.created.length;
            }
            if (visibleTracks.cloud && visibleTracks.cloud.length > 0) {
                length += visibleTracks.cloud.length;
            }
        }
        return length;
    }

    return <div className={classes.group}>
        <MenuItem sx={{ml: 3}} divider onClick={() => setVisibleTracksOpen(!visibleTracksOpen)}>
            <ListItemIcon>
                <Map fontSize="small"/>
            </ListItemIcon>
            <ListItemText> Visible </ListItemText>
            <Typography variant="body2" color="textSecondary">
                {getVisibleTracksLength() > 0 ? `${getVisibleTracksLength()}` : ''}
            </Typography>
            {(visibleTracks.created.length > 0 || visibleTracks.cloud.length > 0) ? <></> : visibleTracksOpen ?
                <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={visibleTracksOpen} timeout="auto" unmountOnExit>
            {visibleTracks.created.length > 0 && visibleTracks.created.map((track, index) => {
                return <CreatedTrackItem key={track + index}
                                         track={track}/>;
            })}
            {visibleTracks.cloud.length > 0 && visibleTracks.cloud.map((track, index) => {
                return <TrackItem key={track + index}
                                  file={track}/>;
            })}
        </Collapse>
    </div>
}