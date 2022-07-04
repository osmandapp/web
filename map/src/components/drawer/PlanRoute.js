import React, {useContext, useState} from 'react';
import {Collapse, ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import {AltRoute, ExpandLess, ExpandMore, FileDownload, Folder, RouteOutlined} from "@mui/icons-material";
import AppContext from "../../context/AppContext";

export default function PlanRoute() {

    const ctx = useContext(AppContext);
    const [planRouteOpen, setPlanRouteOpen] = useState(false);

    const togglePlanRouteVisible = () => {
        setPlanRouteOpen((prev) => !prev);
    };

    return <>
        <MenuItem sx={{mb: 1}} onClick={togglePlanRouteVisible}>
            <ListItemIcon>
                <AltRoute fontSize="small"/>
            </ListItemIcon>
            <ListItemText> PlanRoute </ListItemText>
            {planRouteOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={planRouteOpen} timeout="auto" unmountOnExit>
            <MenuItem sx={{ml: 3, mr: 2}} onClick={() => ctx.setPlanRoute((prev) => !prev)}>
                <ListItemIcon>
                    <RouteOutlined fontSize="small"/>
                </ListItemIcon>
                <ListItemText> Create new route </ListItemText>
            </MenuItem>
            <MenuItem sx={{ml: 3, mr: 2}}>
                <ListItemIcon>
                    <Folder fontSize="small"/>
                </ListItemIcon>
                <ListItemText> Open existing track </ListItemText>
            </MenuItem>
            <MenuItem sx={{ml: 3, mr: 2}}>
                <ListItemIcon>
                    <FileDownload fontSize="small"/>
                </ListItemIcon>
                <ListItemText> Import track </ListItemText>
            </MenuItem>
        </Collapse>
    </>;
}