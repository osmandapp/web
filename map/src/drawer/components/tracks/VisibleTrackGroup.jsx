import {Collapse, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Map} from "@mui/icons-material";
import React, {useState} from "react";
import TrackItem from "./TrackItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    group: {
        '& .MuiMenuItem-root' : {
            minHeight: '50px !important',
            maxHeight: '50px !important',
        }
    }
})


export default function VisibleTrackGroup({visibleTracks}) {

    const classes = useStyles();
    const [visibleTracksOpen, setVisibleTracksOpen] = useState(false);

    function getVisibleTracksLength() {
        let length = 0;
        if (visibleTracks.files && visibleTracks.files.length > 0) {
            length += visibleTracks.files.length;
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
            {(visibleTracks.files.length > 0) ? <></> : visibleTracksOpen ?
                <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={visibleTracksOpen} timeout="auto" unmountOnExit>
            {visibleTracks.files.length > 0 && visibleTracks.files.map((track, index) => {
                return <TrackItem key={track + index}
                                  file={track}/>;
            })}
        </Collapse>
    </div>
}