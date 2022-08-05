import {Button, Collapse, ListItemIcon, ListItemText, MenuItem, Tooltip, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Map} from "@mui/icons-material";
import React, {useState} from "react";
import CloudTrackItem from "./CloudTrackItem";
import {makeStyles} from "@material-ui/core/styles";
import LocalClientTrackItem from "./LocalClientTrackItem";
import LocalServerTrackItem from "./LocalServerTrackItem";

const useStyles = makeStyles({
    group: {
        '& .MuiMenuItem-root': {
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
        if (visibleTracks.localClient && visibleTracks.localClient.length > 0) {
            length += visibleTracks.localClient.length;
        }
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
            {visibleTracksOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={visibleTracksOpen} timeout="auto" unmountOnExit>
            {visibleTracks.localClient.length > 0 && visibleTracks.localClient.map((track, index) => {
                return <LocalClientTrackItem key={track + index}
                                             track={track}/>;
            })}
            {visibleTracks.files.length > 0 && visibleTracks.files.map((track, index) => {
                return track.local
                    ? <LocalServerTrackItem key={track + index}
                                            file={track}/>
                    : <CloudTrackItem key={track + index}
                                      file={track}/>;
            })}
            {visibleTracks.files.find(f => f.local) &&
                <MenuItem disableRipple={true}>
                    <Tooltip title={
                        <p>
                            For saved tracks
                        </p>
                    }>
                        <Button className={classes.button} variant="contained" component="span" sx={{ml: 2}}
                                onClick={() => window.open(`${process.env.REACT_APP_GPX_API}/gpx/download-obf`)}>
                            Get OBF
                        </Button>
                    </Tooltip>
                </MenuItem>}
        </Collapse>
    </div>
}