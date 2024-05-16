import React, { useState, useContext, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Settings, RemoveCircle, Clear } from '@mui/icons-material';
import {
    MenuItem,
    IconButton,
    FormControl,
    InputLabel,
    Input,
    Select,
    Button,
    Typography,
    Link,
    Switch,
    Box,
    Grid,
    ButtonGroup,
} from '@mui/material';
import AppContext, {
    isLocalTrack,
    isCloudTrack,
    isRouteTrack,
    OBJECT_TYPE_NAVIGATION_TRACK,
} from '../../context/AppContext';
import RouteProfileSettings from './RouteProfileSettings';
import { TextField } from '@mui/material/';
import { LatLng } from 'leaflet';
import { makeStyles } from '@material-ui/core/styles';
import styles from './routemenu.module.css';

const StyledInput = styled('input')({
    display: 'none',
});

const useStyles = makeStyles({
    start: {
        '& .MuiFilledInput-root': {
            background: '#aad3df',
        },
    },
    finish: {
        '& .MuiFilledInput-root': {
            background: '#ebdbe8',
        },
    },
});

export function formatRouteInfo(props) {
    let res = ['Route: '];
    if (props?.overall?.distance) {
        let dst = (props.overall.distance / 1000).toFixed(1);
        res.push(<span key="info-dst">{dst + ' km'}</span>);
        res.push(', ');
    }
    if (props?.overall?.time) {
        let hours = props.overall.time / 3600.0;
        let min = ((hours - Math.floor(hours)) * 60).toFixed(0);
        if (min < 10) {
            min = '0' + min;
        }
        res.push(<span key="info-time">{Math.floor(hours).toFixed(0) + ':' + min + ' min'}</span>);
        res.push(', ');
    }
    res[res.length - 1] = '';
    if (props?.overall?.routingTime) {
        res[res.length - 1] = '.';
        res.push(' Cost: ');
        res.push(props.overall.routingTime.toFixed(0));
    }
    return <span id="se-route-info">{res}</span>;
}

function formatLatLon(pnt) {
    if (!pnt) {
        return '';
    }
    return pnt.lat.toFixed(5) + ', ' + pnt.lng.toFixed(5);
}

export default function RouteMenu() {
    const ctx = useContext(AppContext);

    const routeObject = ctx.routeObject;

    const startPoint = routeObject.getOption('route.points.start');
    const finishPoint = routeObject.getOption('route.points.finish');
    const viaPoints = routeObject.getOption('route.points.viaPoints');
    const avoidRoads = routeObject.getOption('route.points.avoidRoads');

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [start, setStart] = useState('');
    const [finish, setFinish] = useState('');
    const [openSettings, setOpenSettings] = useState(false);
    const btnFile = useRef();

    // auto switch between Navigation/Tracks menu
    // additionally, conceal route track from the map
    // additionally, trigger fitBounds (zoom) on route track open
    useEffect(() => {
        if (isRouteTrack(ctx)) {
            setOpen(true);
            routeObject.setOption('route.map.zoom', true);
        } else if (isLocalTrack(ctx) || isCloudTrack(ctx)) {
            setOpen(false);
            ctx.routeObject.setOption('route.map.conceal', true);
        }
    }, [ctx.currentObjectType]);

    // This block was used for 2 actions:
    // restore Navigation layer on the map (because Track Editor kills all "foreign" layers) -
    // restoration was done by "reset" currentGpxFile with putRoute() -- please check is Navigation track (layer) really
    // back when you switch back to Navigation menu after editing Local track
    // second action is Zoom-on map Navigation track when you open Navigation menu
    // Commenting this block breaks previously accepted task (Navigation menu changes).

    // // auto zoom once Navigation menu open
    // // additionally, trigger fitBounds (zoom) always on menu open
    // // optionally, re-convert (get->put) to switch to route object type
    // useEffect(() => {
    //     const route = routeObject.getRoute();
    //     if (open && route) {
    //         if (isRouteTrack(ctx) === false) {
    //             routeObject.putRoute({ route: routeObject.getRoute() });
    //         } else {
    //             routeObject.setOption('route.map.zoom', true);
    //         }
    //     }
    // }, [open]);

    useEffect(() => {
        openSettings ? routeObject.onOpenSettings() : routeObject.onCloseSettings();
    }, [openSettings]);

    useEffect(() => {
        if (!ctx.routeTrackFile) {
            if (btnFile.current) {
                btnFile.current.value = '';
            }
        }
    }, [ctx.routeTrackFile]);

    useEffect(() => {
        if ((startPoint || finishPoint) && !open) {
            setOpen(true);
        }
    }, [startPoint, finishPoint]);

    function handleCoord(e, setPoint) {
        let value = e.target.value;
        let latlon = getCoord(value.replace(/[,%]/g, ''));
        if (latlon) {
            setPoint(latlon);
        }
    }

    function getCoord(value) {
        let coords = value.trim().split(' ');
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

    const { type, profile } = routeObject.getProfile();

    const routeOptions =
        ctx.develFeatures && type === 'osrm'
            ? ['route.map.hidePoints', 'route.map.forceApproximation'] // OSRM-only option (forceApproximation)
            : ['route.map.hidePoints']; // default

    function openInfoBlock() {
        const route = routeObject.getRoute();
        if (route) {
            if (isRouteTrack(ctx) === false) {
                const { track } = routeObject.putRoute({ route: routeObject.getRoute() }); // get track instantly
                ctx.setCurrentObjectType(OBJECT_TYPE_NAVIGATION_TRACK);
                ctx.setSelectedGpxFile(track);
                ctx.setUpdateInfoBlock(true);
            }
        }
    }

    return (
        <>
            <MenuItem key="routeprofile" sx={{ ml: 1, mr: 2, mt: 1 }} disableRipple={true}>
                <FormControl fullWidth>
                    <InputLabel id="route-mode-label">{`Route profile (${type})`}</InputLabel>
                    <Select
                        id="se-route-select"
                        labelid="route-mode-label"
                        label={`Route profile (${type})`}
                        value={profile}
                        onChange={(e) => routeObject.onRouterProfileSelected({ profile: e.target.value })}
                    >
                        {routeObject.listProfiles().map(({ key, name, icon }) => (
                            <MenuItem id={'se-route-profile-' + key} key={key} value={key}>
                                <Box display="flex" width="100%" alignItems="center">
                                    <Box display="flex" width={25} justifyContent="center" alignItems="center">
                                        {icon}
                                    </Box>
                                    <Box display="flex" sx={{ ml: 1 }}>
                                        <Box sx={{ mt: '3px' }}>{name}</Box>
                                    </Box>
                                </Box>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <IconButton
                    sx={{ ml: 1 }}
                    onClick={() => {
                        setOpenSettings(true);
                    }}
                >
                    <Settings fontSize="small" />
                </IconButton>
            </MenuItem>
            {routeObject.getRouteProps() && (
                <MenuItem key="routeinfo" sx={{ ml: 1, mr: 1 }} disableRipple={true}>
                    <Typography>{formatRouteInfo(routeObject.getRouteProps())}</Typography>
                </MenuItem>
            )}
            <MenuItem key="start" sx={{ ml: 1, mr: 2, mt: 1 }} className={classes.start} disableRipple={true}>
                <FormControl fullWidth>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            setStart(e.target.value);
                        }}
                        id="se-route-start-point"
                        labelid="start-point-label"
                        variant="filled"
                        label="Start"
                        onKeyDown={(e) => keyPress(e, (point) => routeObject.setOption('route.points.start', point))}
                        value={getInputValue(start, setStart, startPoint)}
                    ></TextField>
                </FormControl>
                <IconButton
                    sx={{ ml: 1 }}
                    id="se-clear-route-start-point"
                    onClick={() => {
                        setStart('');
                        routeObject.setOption('route.points.start', null);
                        routeObject.resetRoute();
                    }}
                >
                    <Clear fontSize="small" />
                </IconButton>
            </MenuItem>
            {viaPoints.map((item, ind) => (
                <MenuItem key={'via' + (ind + 1)} sx={{ ml: 1, mr: 2, mt: 1 }} disableRipple={true}>
                    <FormControl fullWidth>
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            labelid="via-point-label"
                            label={'Via ' + (ind + 1)}
                            variant="filled"
                            value={formatLatLon(item)}
                        ></TextField>
                    </FormControl>
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={() => {
                            const newViaPoints = Object.assign([], viaPoints);
                            newViaPoints.splice(ind, 1);
                            routeObject.setOption('route.points.viaPoints', newViaPoints);
                        }}
                    >
                        <RemoveCircle fontSize="small" />
                    </IconButton>
                </MenuItem>
            ))}
            <MenuItem key="finish" sx={{ ml: 1, mr: 2, mt: 1 }} className={classes.finish} disableRipple={true}>
                <FormControl fullWidth>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            setFinish(e.target.value);
                        }}
                        id="se-route-finish-point"
                        labelid="finish-point-label"
                        variant="filled"
                        label="Finish"
                        onKeyDown={(e) => keyPress(e, (point) => routeObject.setOption('route.points.finish', point))}
                        value={getInputValue(finish, setFinish, finishPoint)}
                    ></TextField>
                </FormControl>
                <IconButton
                    sx={{ ml: 1 }}
                    id="se-clear-route-finish-point"
                    onClick={() => {
                        setFinish('');
                        routeObject.setOption('route.points.finish', null);
                        routeObject.resetRoute();
                    }}
                >
                    <Clear fontSize="small" />
                </IconButton>
            </MenuItem>
            {avoidRoads.map((item, ind) => (
                <MenuItem key={'avoid_' + (ind + 1)} sx={{ ml: 1, mr: 2, mt: 1 }} disableRipple={true}>
                    <FormControl fullWidth>
                        <Link target="_blank" rel="noopener" href={'https://openstreetmap.org/way/' + item.id / 64}>
                            Avoid {item.name}
                        </Link>
                    </FormControl>
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={() => {
                            const newAvoidRoads = Object.assign([], avoidRoads);
                            newAvoidRoads.splice(ind, 1);
                            routeObject.setOption('route.points.avoidRoads', newAvoidRoads);
                        }}
                    >
                        <RemoveCircle fontSize="small" />
                    </IconButton>
                </MenuItem>
            ))}
            {ctx.routeTrackFile && (
                <MenuItem key="routetrack" sx={{ ml: 1, mr: 2, mt: 1 }} disableRipple={true}>
                    <FormControl fullWidth>
                        <InputLabel id="track-file-label">Selected track</InputLabel>
                        <Input labelid="track-file-label" label="Track" value={ctx.routeTrackFile.name}></Input>
                    </FormControl>
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={() => {
                            routeObject.resetRoute();
                            ctx.setRouteTrackFile(null);
                            routeObject.setOption('route.points.start', null);
                            routeObject.setOption('route.points.finish', null);
                        }}
                    >
                        <RemoveCircle fontSize="small" />
                    </IconButton>
                </MenuItem>
            )}
            {ctx.develFeatures && <RouteProfileSettings key="routesettingsembed" embed={true} />}
            {routeObject.getRoute() &&
                routeOptions.map((opt) => (
                    <MenuItem key={'routeopt' + opt} sx={{ ml: 2, mr: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs={10} sx={{ mt: '4px' }} onClick={() => routeObject.setOption(opt, (o) => !o)}>
                                {routeObject.getOptionText(opt)}
                            </Grid>
                            <Grid item xs={2}>
                                <Switch
                                    checked={routeObject.getOption(opt)}
                                    onChange={(e) => routeObject.setOption(opt, e.target.checked)}
                                />
                            </Grid>
                        </Grid>
                    </MenuItem>
                ))}
            <ButtonGroup variant="text" sx={{ mt: 1, ml: 1 }}>
                <label htmlFor="contained-button-route">
                    <StyledInput
                        ref={btnFile}
                        accept=".gpx"
                        id="contained-button-route"
                        type="file"
                        onChange={(e) => ctx.setRouteTrackFile(e.target.files[0])}
                    />
                    <Button component="span" variant="contained" className={styles.smallButton}>
                        Approximate GPX
                    </Button>
                </label>
                {routeObject.getRoute() && (
                    <Button
                        id="se-route-more-information"
                        variant="contained"
                        component="span"
                        className={styles.smallButton}
                        onClick={openInfoBlock}
                    >
                        More information
                    </Button>
                )}
            </ButtonGroup>
            <MenuItem divider={true} />
            {openSettings && <RouteProfileSettings key="routesettingsdialog" setOpenSettings={setOpenSettings} />}
        </>
    );
}
