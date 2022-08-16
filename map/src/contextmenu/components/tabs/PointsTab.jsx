import {Box, IconButton, ListItemAvatar, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import React, {useContext} from "react";
import {Cancel, ViewHeadline} from "@mui/icons-material";
import AppContext from "../../../context/AppContext";
import Utils from "../../../util/Utils";
import LocalTracksManager from "../../../context/LocalTracksManager";


const PointsTab = ({width}) => {

    const ctx = useContext(AppContext);

    function showPointOnMap(point) {
        ctx.selectedGpxFile.showPoint = point;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function deletePoint(index) {
        let currentTrack = ctx.localClientsTracks.find(t => t.name === ctx.selectedGpxFile.name);
        currentTrack.points.splice(index, 1);
        updateTrack(currentTrack);
        LocalTracksManager.saveTracks(ctx.localClientsTracks);
    }

    function updateTrack(currentTrack) {
        currentTrack.points = Utils.getPointsDist(currentTrack.points);
        currentTrack.gpx = Utils.getGpx(currentTrack);
        ctx.setLocalClientsTracks([...ctx.localClientsTracks]);
    }

    const PointRow = () => ({point, index}) => {
        return (
            <MenuItem key={index} divider onClick={() => showPointOnMap(point)}>
                <ListItemIcon>
                    <ViewHeadline fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="inherit" noWrap>
                        Point - {index + 1}<br/>
                        {point.dist === 0 ? "start" : Math.round(point.dist / 100) / 10.0 + " km"}
                    </Typography>
                </ListItemText>
                <ListItemAvatar>
                    <IconButton x={{mr: 1}} onClick={(e) => {
                        e.stopPropagation();
                        deletePoint(index)
                    }}>
                        <Cancel fontSize="small"/>
                    </IconButton>
                </ListItemAvatar>
            </MenuItem>)
    }


    return (<Box width={width}>
        <div style={{maxHeight: '50vh', overflow: 'auto'}}>
            {ctx.selectedGpxFile && ctx.selectedGpxFile.points && ctx.selectedGpxFile.points.map((point, index) => {
                return PointRow()({point: point, index: index});
            })}
        </div>
    </Box>);
};

export default PointsTab;