import React, {useState, useContext, useEffect, useRef} from 'react';
import {styled} from '@mui/material/styles';
import {Settings, RemoveCircle} from '@mui/icons-material';
import {
    ListItemText, Collapse, MenuItem, ListItemIcon, IconButton,
    FormControl, InputLabel, Input, Select, Button, Typography, Link, Autocomplete
} from "@mui/material";
import {
    ExpandLess, ExpandMore, Directions
} from '@mui/icons-material';
import AppContext from "../../../context/AppContext"
import RouteSettingsDialog from './RouteSettingsDialog';
import {TextField} from "@mui/material/";
import {LatLng} from "leaflet";
import {makeStyles} from "@material-ui/core/styles";

const StyledInput = styled('input')({
    display: 'none',
});

const useStyles = makeStyles({
    start: {
        '& .MuiFilledInput-root': {
            background: '#aad3df'
        }
    },
    end: {
        '& .MuiFilledInput-root': {
            background: '#ebdbe8'
        }
    }
})


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

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [openSettings, setOpenSettings] = useState(false);
    const btnFile = useRef();

    useEffect(() => {
        if (!ctx.routeTrackFile) {
            if (btnFile.current) {
                btnFile.current.value = "";
            }
        }
    }, [ctx.routeTrackFile])

    useEffect(() => {
        if ((ctx.startPoint || ctx.endPoint) && !open) {
            setOpen(true);
        }
    }, [ctx.startPoint, ctx.endPoint])

    function handleCoord(e, setPoint) {
        let value = e.target.value;
        let latlon = getCoord(value.replace(/[,%]/g, ''));
        if (latlon) {
            setPoint(latlon);
        }
    }

    function getCoord(value) {
        let coords = value.trim().split(" ");
        if (coords.length === 2) {
            let lat = coords[0];
            let lng = coords[1];
            if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                return new LatLng(lat, lng);
            }
        }
    }

    function keyPress(e, setPoint) {
        if (e.keyCode === 13) {
            handleCoord(e, setPoint);
        }
    }

    function getInputValue(fieldValue, setFieldValue, point) {
        if (point) {
            if (typeof point === 'object') {
                return formatLatLon(point);
            }
        } else {
            return fieldValue;
        }
    }


    return <>
        {openSettings &&
            <RouteSettingsDialog key='routesettingsdialog' setOpenSettings={setOpenSettings} profile={ctx.routeMode}
                                 setProfile={ctx.setRouteMode} useDev={true}/>}
        <MenuItem key='routeTop' sx={{mb: 1}} onClick={() => setOpen(!open)}>
            <ListItemIcon>
                <Directions fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Route</ListItemText>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
            <MenuItem key='routeprofile' sx={{ml: 1, mr: 2}} disableRipple={true}>
                <FormControl fullWidth>
                    <InputLabel id="route-mode-label">Route profile</InputLabel>
                    <Select
                        labelid="route-mode-label"
                        label="Route profile"
                        value={ctx.routeMode.mode}
                        onChange={(e) => ctx.setRouteMode({
                            mode: e.target.value, modes: ctx.routeMode.modes,
                            opts: ctx.routeMode.modes[e.target.value]?.params
                        })}
                    >
                        {Object.entries(ctx.routeMode.modes).map(([key, vl]) =>
                            <MenuItem key={key} value={key}>{vl.name}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <IconButton sx={{ml: 1}} onClick={() => {
                    setOpenSettings(true)
                }}>
                    <Settings fontSize="small"/>
                </IconButton>
            </MenuItem>
            {ctx?.routeData?.props && <MenuItem key='routeinfo' sx={{ml: 1, mr: 1}} disableRipple={true}>
                <Typography>{formatRouteInfo(ctx?.routeData?.props)}</Typography>
            </MenuItem>
            }
            <MenuItem key='start' sx={{ml: 2, mr: 2, mt: 1}} className={classes.start} disableRipple={true}>
                <FormControl fullWidth>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            setStart(e.target.value);
                        }}
                        labelid="start-point-label"
                        variant="filled"
                        label="Start"
                        onKeyDown={(e) => keyPress(e, ctx.setStartPoint)}
                        value={getInputValue(start, setStart, ctx.startPoint)}>
                    </TextField>
                </FormControl>
                <IconButton sx={{ml: 1}}
                            onClick={() => {
                                setStart('');
                                ctx.setStartPoint(null);
                                ctx.setRouteData(null);
                            }
                            }>
                    <RemoveCircle fontSize="small"/>
                </IconButton>
            </MenuItem>
            {ctx.interPoints.map((item, ind) => (
                <MenuItem key={"inter" + (ind + 1)} sx={{ml: 2, mr: 2, mt: 1}} disableRipple={true}>
                    <FormControl fullWidth>
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            labelid="inter-point-label"
                            label={"Intermediate " + (ind + 1)}
                            variant="filled"
                            value={formatLatLon(item)}>
                        </TextField>
                    </FormControl>
                    <IconButton sx={{ml: 1}} onClick={() => {
                        let newinter = Object.assign([], ctx.interPoints);
                        newinter.splice(ind, 1);
                        ctx.setInterPoints(newinter);
                    }}>
                        <RemoveCircle fontSize="small"/>
                    </IconButton>
                </MenuItem>
            ))}
            <MenuItem key='end' sx={{ml: 2, mr: 2, mt: 1}} className={classes.end} disableRipple={true}>
                <FormControl fullWidth>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            setEnd(e.target.value);
                        }}
                        labelid="end-point-label"
                        variant="filled"
                        label="End"
                        onKeyDown={(e) => keyPress(e, ctx.setEndPoint)}
                        value={getInputValue(end, setEnd, ctx.endPoint)}>
                    </TextField>
                </FormControl>
                <IconButton sx={{ml: 1}} onClick={() => {
                    setEnd('');
                    ctx.setEndPoint(null);
                    ctx.setRouteData(null);
                }}>
                    <RemoveCircle fontSize="small"/>
                </IconButton>
            </MenuItem>
            {ctx.avoidRoads.map((item, ind) => (
                <MenuItem key={"avoid_" + (ind + 1)} sx={{ml: 2, mr: 2, mt: 1}} disableRipple={true}>
                    <FormControl fullWidth>
                        <Link target="_blank" rel="noopener"
                              href={"https://openstreetmap.org/way/" + (item.id / 64)}>Avoid {item.name}</Link>
                    </FormControl>
                    <IconButton sx={{ml: 1}} onClick={() => {
                        let navoidRoads = Object.assign([], ctx.avoidRoads);
                        navoidRoads.splice(ind, 1);
                        ctx.setAvoidRoads(navoidRoads);
                    }}>
                        <RemoveCircle fontSize="small"/>
                    </IconButton>
                </MenuItem>
            ))}
            {ctx.routeTrackFile && <MenuItem key='routetrack' sx={{ml: 2, mr: 2, mt: 1}} disableRipple={true}>
                <FormControl fullWidth>
                    <InputLabel id="track-file-label">Selected track</InputLabel>
                    <Input
                        labelid="track-file-label"
                        label="Track"
                        value={ctx.routeTrackFile.name}>
                    </Input>
                </FormControl>
                <IconButton sx={{ml: 1}} onClick={() => {
                    ctx.setRouteTrackFile(null);
                    ctx.setRouteData(null);
                    ctx.setEndPoint(null);
                    ctx.setStartPoint(null);
                }}>
                    <RemoveCircle fontSize="small"/>
                </IconButton>
            </MenuItem>}
            <MenuItem key='uploadroute' disableRipple={true}>
                <label htmlFor="contained-button-file">
                    <StyledInput ref={btnFile} accept=".gpx" id="contained-button-file" type="file"
                                 onChange={(e) => ctx.setRouteTrackFile(e.target.files[0])}/>
                    <Button variant="contained" component="span" sx={{ml: 2}}>
                        Select Track
                    </Button>
                </label>
            </MenuItem>

        </Collapse>
    </>;

}
