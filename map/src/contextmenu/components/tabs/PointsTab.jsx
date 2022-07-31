import {
    Box,
    IconButton,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import React, {useContext} from "react";
import {
    Cancel, ViewHeadline
} from "@mui/icons-material";
import '../../../util/Leaflet.Editable.js';
import AppContext from "../../../context/AppContext";
import EditTrackAction from "../../../data/tracks/editTrack/EditTrackAction";


const PointsTab = ({width}) => {

    const ctx = useContext(AppContext);

    const PointRow = () => ({point, index}) => {
        return (
            <MenuItem sx={{ml: 3}} key={index} divider>
                <ListItemIcon>
                    <ViewHeadline fontSize="small"/>
                </ListItemIcon>
                <ListItemText inset>
                    <Typography variant="inherit" noWrap>
                        Point - {index + 1}<br/>
                        {point.dist === 0 ? "start" : Math.trunc(point.dist) + " m"}
                    </Typography>
                </ListItemText>
                <ListItemAvatar>
                    <IconButton x={{mr: 1}} onClick={() => {
                        ctx.currentlyEditTrackDispatch({
                            type: EditTrackAction.deletePoint,
                            index: index,
                        })
                    }}>
                        <Cancel fontSize="small"/>
                    </IconButton>
                </ListItemAvatar>
            </MenuItem>)
    }

    return (<Box width={width}>
        {ctx.currentlyEditTrack.pointsList && ctx.currentlyEditTrack.pointsList.map((point, index) => {
            return PointRow()({point: point, index: index});
        })}
    </Box>);
};

export default PointsTab;