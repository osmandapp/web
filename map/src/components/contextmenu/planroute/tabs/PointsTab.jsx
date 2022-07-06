import {
    Box,
    IconButton,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import React from "react";
import {
    Cancel, ViewHeadline
} from "@mui/icons-material";
import '../../../../util/Leaflet.Editable.js';


const PointsTab = ({pointsList, setDeletePoint, width}) => {

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
                        setDeletePoint(index)
                    }}>
                        <Cancel fontSize="small"/>
                    </IconButton>
                </ListItemAvatar>
            </MenuItem>)
    }

    return (<Box width={width}>
        {pointsList && pointsList.map((point, index) => {
            return PointRow()({point: point, index: index});
        })}
    </Box>);
};

export default PointsTab;