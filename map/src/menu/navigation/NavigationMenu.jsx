import React, { useState, useContext, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { RemoveCircle, Clear } from '@mui/icons-material';
import {
    MenuItem,
    IconButton,
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography,
    Link,
    Switch,
    Box,
    Grid,
    ButtonGroup,
    TextField,
    AppBar,
    Toolbar,
    Tooltip,
} from '@mui/material';
import AppContext, {
    isLocalTrack,
    isCloudTrack,
    isRouteTrack,
    OBJECT_TYPE_NAVIGATION_TRACK,
} from '../../context/AppContext';
import RouteProfileSettings from './RouteProfileSettings';
import { LatLng } from 'leaflet';
import styles from './routemenu.module.css';
import { convertMeters, getLargeLengthUnit, LARGE_UNIT } from '../settings/units/UnitsConverter';
import i18n from 'i18next';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/ic_action_settings_outlined.svg';
import { ReactComponent as DotsIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import headerStyles from '../trackfavmenu.module.css';
import { HEADER_SIZE } from '../../manager/GlobalManager';
import gStyles from '../gstylesmenu.module.css';
import { closeHeader } from '../actions/HeaderHelper';
import { useTranslation } from 'react-i18next';
import SquareIconBtn from '../../frame/components/btns/SquareIconBtn';
import ProfilesMenu from './ProfilesMenu';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';

const StyledInput = styled('input')({
    display: 'none',
});

const DEFAULT_VISIBLE_PROFILES = ['car', 'bicycle', 'pedestrian', 'motorcycle'];
const MAX_VISIBLE_PROFILES = 4;

export function formatRouteInfo(props, ctx) {
    const res = ['Route: '];
    if (props?.overall?.distance) {
        const dst = convertMeters(props.overall.distance, ctx.unitsSettings.len, LARGE_UNIT).toFixed(1);
        res.push(<span key="info-dst">{dst + ` ${i18n?.t(getLargeLengthUnit(ctx))}`}</span>);
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

export function formatLatLon(pnt) {
    if (!pnt) {
        return '';
    }
    return pnt.lat.toFixed(5) + ', ' + pnt.lng.toFixed(5);
}

export default function NavigationMenu() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const [, height] = useWindowSize();

    const routeObject = ctx.routeObject;

    const startPoint = routeObject.getOption('route.points.start');
    const finishPoint = routeObject.getOption('route.points.finish');
    const viaPoints = routeObject.getOption('route.points.viaPoints');
    const avoidRoads = routeObject.getOption('route.points.avoidRoads');

    const [open, setOpen] = useState(false);
    const [start, setStart] = useState('');
    const [finish, setFinish] = useState('');
    const [openSettings, setOpenSettings] = useState(false);
    const btnFile = useRef();

    const [resetSettings, setResetSettings] = useState(false);

    const [profilesMenuAnchor, setProfilesMenuAnchor] = useState(null);
    const [visibleProfiles, setVisibleProfiles] = useState(ctx.routeVisibleProfiles || DEFAULT_VISIBLE_PROFILES);

    // auto switch between Navigation/Tracks menu
    // additionally, conceal route track from the map
    // additionally, trigger fitBounds (zoom) on route track open
    useEffect(() => {
        if (isRouteTrack(ctx)) {
            setOpen(true);
            routeObject.setOption('route.map.zoom', true);
        } else if (isLocalTrack(ctx) || isCloudTrack(ctx)) {
            setOpen(false);
        }
    }, [ctx.currentObjectType]);

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
        if (startPoint && typeof startPoint == 'object') {
            setStart(formatLatLon(startPoint));
        }
        if (finishPoint && typeof finishPoint == 'object') {
            setFinish(formatLatLon(finishPoint));
        }
    }, [startPoint, finishPoint]);

    function handleCoord(e, setPoint) {
        const latlon = getCoord(e.target.value);
        if (latlon) {
            setPoint(latlon);
        }
    }

    function getCoord(value) {
        const coords = value.trim().split(/[, ]+/);
        if (coords.length === 2) {
            let lat = coords[0];
            let lng = coords[1];
            if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                return new LatLng(lat, lng);
            }
        }
    }

    function keyPress(e, setPoint) {
        const TAB = 9;
        const ENTER = 13;
        if (e.keyCode === TAB || e.keyCode === ENTER) {
            handleCoord(e, setPoint);
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

    function close() {
        setStart('');
        setFinish('');
        routeObject.setOption('route.points.start', null);
        routeObject.setOption('route.points.finish', null);
        routeObject.setOption('route.points.viaPoints', []);
        routeObject.setOption('route.points.avoidRoads', []);
        setResetSettings(true);
        setOpen(false);
        closeHeader({ ctx });
    }

    function handleProfileSelect(profileKey) {
        const newVisibleProfiles = visibleProfiles.filter((key) => key !== profileKey);
        newVisibleProfiles.unshift(profileKey);
        const updatedProfiles = newVisibleProfiles.slice(0, MAX_VISIBLE_PROFILES);
        setVisibleProfiles(updatedProfiles);
        ctx.setRouteVisibleProfiles(updatedProfiles);
        routeObject.onRouterProfileSelected({ profile: profileKey });
    }

    return (
        <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
            <AppBar
                position="static"
                className={headerStyles.appbar}
                sx={{ boxShadow: 'none !important', borderBottom: 'none !important' }}
            >
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" type="button" className={headerStyles.appBarIcon} onClick={close}>
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-configure-map-menu-name" component="div" className={headerStyles.title}>
                        {t('web:navigation_menu_title')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={gStyles.scrollActiveBlock} sx={{ pt: 0, mt: 0 }}>
                <Box className={styles.profileButtonBox}>
                    {visibleProfiles.map((key) => {
                        const profile = routeObject.listProfiles().find((p) => p.key === key);
                        if (!profile) return null;
                        return (
                            <SquareIconBtn
                                key={key}
                                icon={profile.icon}
                                selected={routeObject.getProfile().profile === key}
                                selectedBorderColor={profile.color}
                                onClick={() => routeObject.onRouterProfileSelected({ profile: key })}
                            />
                        );
                    })}
                    <SquareIconBtn
                        key={'dots'}
                        icon={<DotsIcon />}
                        onClick={(e) => setProfilesMenuAnchor(e.currentTarget)}
                    />
                    <Box
                        sx={{
                            ml: 1,
                            width: '1px',
                            height: '36px',
                            backgroundColor: '#E6E6E6',
                        }}
                    />
                    <Tooltip title={t('shared_string_settings')} arrow>
                        <Box>
                            <ActionIconBtn
                                size={'36px'}
                                icon={<SettingsIcon />}
                                onClick={() => {
                                    setOpenSettings(true);
                                }}
                            />
                        </Box>
                    </Tooltip>
                </Box>
                {routeObject.getRouteProps() && (
                    <MenuItem key="routeinfo" sx={{ ml: 1, mr: 1 }} disableRipple={true}>
                        <Typography>{formatRouteInfo(routeObject.getRouteProps(), ctx)}</Typography>
                    </MenuItem>
                )}
                <MenuItem
                    key="start"
                    sx={{
                        ml: 1,
                        mr: 2,
                        mt: 1,
                        '& .MuiFilledInput-root': {
                            background: '#aad3df',
                        },
                    }}
                    disableRipple={true}
                >
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
                            onKeyDown={(e) =>
                                keyPress(e, (point) => routeObject.setOption('route.points.start', point))
                            }
                            value={start}
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
                <MenuItem
                    key="finish"
                    sx={{
                        ml: 1,
                        mr: 2,
                        mt: 1,
                        '& .MuiFilledInput-root': {
                            background: '#ebdbe8',
                        },
                    }}
                    disableRipple={true}
                >
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
                            onKeyDown={(e) =>
                                keyPress(e, (point) => routeObject.setOption('route.points.finish', point))
                            }
                            value={finish}
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
                            <Link
                                target="_blank"
                                rel="noopener"
                                href={'https://openstreetmap.org/way/' + Math.floor(item.id / 64)}
                            >
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
                <Box sx={{ mx: 3, mt: 2 }}>
                    <RouteProfileSettings
                        key="routesettingsembed"
                        embed={true}
                        resetSettings={resetSettings}
                        setResetSettings={setResetSettings}
                    />
                    {routeObject.getRoute() &&
                        routeOptions.map((opt) => (
                            <MenuItem key={'routeopt' + opt} sx={{ ml: 2, mr: 2 }}>
                                <Grid container alignItems="center">
                                    <Grid
                                        item
                                        xs={10}
                                        sx={{ mt: '4px' }}
                                        onClick={() => routeObject.setOption(opt, (o) => !o)}
                                    >
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
                </Box>
                <ButtonGroup variant="text" sx={{ mt: 2, ml: '11px' }}>
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
                {openSettings && (
                    <RouteProfileSettings
                        key="routesettingsdialog"
                        setOpenSettings={setOpenSettings}
                        resetSettings={resetSettings}
                        setResetSettings={setResetSettings}
                    />
                )}
                <ProfilesMenu
                    anchorEl={profilesMenuAnchor}
                    onClose={() => setProfilesMenuAnchor(null)}
                    onProfileSelect={handleProfileSelect}
                    routeObject={routeObject}
                />
            </Box>
        </Box>
    );
}
