import {Box, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import React, {useContext} from "react";
import {ViewHeadline} from "@mui/icons-material";
import AppContext from "../../../context/AppContext";


const PointsTab = ({width}) => {

    const ctx = useContext(AppContext);

    const PointRow = () => ({point, index}) => {
        return (
            <MenuItem key={index} divider>
                <ListItemIcon>
                    <ViewHeadline fontSize="small"/>
                </ListItemIcon>
                <ListItemText >
                    <Typography variant="inherit" noWrap>
                        Point - {index + 1}<br/>
                        {point.dist === 0 ? "start" : Math.round(point.dist / 100) / 10.0 + " km"}
                    </Typography>
                </ListItemText>
            </MenuItem>)
    }


    return (<Box width={width}>
        <div style={{maxHeight: 300, overflow: 'auto'}}>
            {ctx.selectedGpxFile && ctx.selectedGpxFile.points.map((point, index) => {
                return PointRow()({point: point, index: index});
            })}
        </div>
    </Box>);
};

export default PointsTab;