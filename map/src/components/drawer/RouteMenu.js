import React, { useState, useContext, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Settings, RemoveCircle } from '@mui/icons-material';
import {
    ListItemText, Collapse, MenuItem, ListItemIcon, IconButton,
    FormControl, InputLabel, Input, Select, Button, Typography, Link
} from "@mui/material";
import {
    ExpandLess, ExpandMore, Directions
} from '@mui/icons-material';
import AppContext from "../../context/AppContext"
import RouteSettingsDialog from './RouteSettingsDialog';
// import Utils from "../../util/Utils";

const StyledInput = styled('input')({
    display: 'none',
});


function formatRouteInfo(props) {
    let res = ['Route: '];
    if (props?.overall?.distance) {
        let dst = (props.overall.distance / 1000).toFixed(1);
        res.push(<b>{dst + ' km'}</b>);
        res.push(', ');
    }
    if (props?.overall?.time) {
        let hours = (props.overall.time / 3600.0);
        let min = ((hours - Math.floor(hours)) * 60).toFixed(0);
        if (min < 10) {
            min = '0' + min;
        }
        res.push(<b>{Math.floor(hours).toFixed(0) + ':' + min}</b>);
        res.push(', ');
    }
    res[res.length - 1] = '.';
    if (props?.overall?.routingTime) {
        res.push(' Cost: ');
        res.push(props.overall.routingTime.toFixed(0));
    }
    return <>{res}</>;
}
function formatLatLon(pnt) {
    if (!pnt) {
        return '';
    }
    return pnt.lat.toFixed(5) + ", " + pnt.lng.toFixed(5);
}


export default function RouteMenu() {
    const ctx = useContext(AppContext);
    const [open, setOpen] = useState(true);
    const [openSettings, setOpenSettings] = useState(false);
    const btnFile = useRef();
    useEffect(() => {
        if (!ctx.routeTrackFile) {
            if (btnFile.current) {
                btnFile.current.value = "";
            }
        }
    }, [ctx.routeTrackFile])
    if (!ctx.startPoint && !ctx.endPoint) {
        return <></>;
    }
    return <>
        {openSettings && <RouteSettingsDialog key='routesettingsdialog' setOpenSettings={setOpenSettings}/>}
        <MenuItem key='routeTop' sx={{ mb: 1 }} onClick={(e) => setOpen(!open)}>
            <ListItemIcon>
                <Directions fontSize="small" />
            </ListItemIcon>
            <ListItemText>Route</ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
        </MenuItem>

        <Collapse in={open} timeout="auto" unmountOnExit>        
            <MenuItem key='routeprofile' sx={{ ml: 1, mr: 2 }} disableRipple={true}>
                <FormControl fullWidth>
                    <InputLabel id="route-mode-label">Route profile</InputLabel>
                    <Select
                        labelid="route-mode-label"
                        label="Route profile"
                        value={ctx.routeMode.mode}
                        onChange={(e) => ctx.setRouteMode({ 
                            mode: e.target.value, modes: ctx.routeMode.modes,
                            opts: ctx.routeMode.modes[e.target.value]?.params})}
                    >
                        {Object.entries(ctx.routeMode.modes).map(([key, vl]) => 
                            <MenuItem key={key} value={key}>{vl.name}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <IconButton sx={{ ml: 1 }} onClick={() => {setOpenSettings(true)}} >
                    <Settings fontSize="small" />
                </IconButton>
            </MenuItem>
            {ctx?.routeData?.props && <MenuItem key='routeinfo' sx={{ ml: 1, mr: 1 }} disableRipple={true}>
                <Typography>{formatRouteInfo(ctx?.routeData?.props)}</Typography>
            </MenuItem>
            }
            {!ctx.routeTrackFile && ctx.startPoint && <MenuItem key='start' sx={{ ml: 2, mr: 2, mt: 1 }} disableRipple={true}>
                <FormControl fullWidth>
                    <InputLabel id="start-point-label">Start point</InputLabel>
                    <Input 
                        labelid="start-point-label"
                        label="Start"
                        value={formatLatLon(ctx.startPoint)} >
                    </Input>
                </FormControl>
                <IconButton sx={{ ml: 1 }} onClick={() => { { ctx.setStartPoint(null); ctx.setRouteData(null); } }} >
                    <RemoveCircle fontSize="small" />
                </IconButton>
            </MenuItem>}
            {ctx.interPoints.map((item, ind) => (
                <MenuItem key={"inter"+(ind+1)} sx={{ ml: 2, mr: 2, mt: 1 }} disableRipple={true}>
                    <FormControl fullWidth>
                        <InputLabel id="inter-point-label">Intermediate {ind+1}</InputLabel>
                        <Input
                            labelid="inter-point-label"
                            label="Intermediate"
                            value={formatLatLon(item)} >
                        </Input>
                    </FormControl>
                    <IconButton sx={{ ml: 1 }} onClick={() => {
                        let newinter = Object.assign([], ctx.interPoints);
                        newinter.splice(ind, 1);
                        ctx.setInterPoints(newinter);
                    }} >
                        <RemoveCircle fontSize="small" />
                    </IconButton>
                </MenuItem>
            ))}
            {!ctx.routeTrackFile && ctx.endPoint && <MenuItem key='end' sx={{ ml: 2, mr: 2, mt: 1 }} disableRipple={true}>
                <FormControl fullWidth>
                    <InputLabel id="end-point-label">End point</InputLabel>
                    <Input
                        labelid="end-point-label"
                        label="End"
                        value={formatLatLon(ctx.endPoint)} >
                    </Input>
                </FormControl>
                <IconButton sx={{ ml: 1 }} onClick={() => { ctx.setEndPoint(null); ctx.setRouteData(null); }} >
                    <RemoveCircle fontSize="small" />
                </IconButton>
            </MenuItem>}
            {ctx.avoidRoads.map((item, ind) => (
                <MenuItem key={"avoid_" + (ind + 1)} sx={{ ml: 2, mr: 2, mt: 1 }} disableRipple={true}>
                    <FormControl fullWidth>
                        <Link target="_blank" rel="noopener"
                            href={"https://openstreetmap.org/way/" + (item.id / 64)}>Avoid {item.name}</Link>
                    </FormControl>
                    <IconButton sx={{ ml: 1 }} onClick={() => {
                        let newinter = Object.assign([], ctx.interPoints);
                        newinter.splice(ind, 1);
                        ctx.setAvoidRoads(newinter);
                    }} >
                        <RemoveCircle fontSize="small" />
                    </IconButton>
                </MenuItem>
            ))}
            {ctx.routeTrackFile && <MenuItem key='routetrack' sx={{ ml: 2, mr: 2, mt: 1 }} disableRipple={true}>
                <FormControl fullWidth>
                    <InputLabel id="track-file-label">Selected track</InputLabel>
                    <Input
                        labelid="track-file-label"
                        label="Track"
                        value={ctx.routeTrackFile.name} >
                    </Input>
                </FormControl>
                <IconButton sx={{ ml: 1 }} onClick={() => { 
                    ctx.setRouteTrackFile(null); 
                    ctx.setRouteData(null); 
                    ctx.setEndPoint(null);
                    ctx.setStartPoint(null);
                    }} >
                    <RemoveCircle fontSize="small" />
                </IconButton>
            </MenuItem>}
            <MenuItem key='uploadroute' disableRipple={true}>
                <label htmlFor="contained-button-file" >
                    <StyledInput ref={btnFile} accept=".gpx" id="contained-button-file" type="file" 
                        onChange={(e) => ctx.setRouteTrackFile(e.target.files[0])} />
                    <Button variant="contained" component="span" sx={{ ml: 3 }}>
                        Select Track
                    </Button>
                </label>
            </MenuItem>
      
        </Collapse>
    </>;

}
