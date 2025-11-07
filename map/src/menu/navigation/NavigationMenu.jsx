import React, { useState, useContext, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { RemoveCircle } from '@mui/icons-material';
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
    AppBar,
    Toolbar,
    Tooltip,
} from '@mui/material';
import AppContext, { isRouteTrack, OBJECT_TYPE_NAVIGATION_TRACK } from '../../context/AppContext';
import RouteProfileSettings from './RouteProfileSettings';
import styles from './routemenu.module.css';
import { convertMeters, getLargeLengthUnit, LARGE_UNIT } from '../settings/units/UnitsConverter';
import i18n from 'i18next';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/ic_action_settings_outlined.svg';
import { ReactComponent as DotsIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/ic_action_point_destination.svg';
import { ReactComponent as AttachIcon } from '../../assets/icons/ic_action_attach_track.svg';
import headerStyles from '../trackfavmenu.module.css';
import { HEADER_SIZE } from '../../manager/GlobalManager';
import gStyles from '../gstylesmenu.module.css';
import { closeHeader } from '../actions/HeaderHelper';
import { Trans, useTranslation } from 'react-i18next';
import SquareIconBtn from '../../frame/components/btns/SquareIconBtn';
import ProfilesMenu from './ProfilesMenu';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import NavigationPointsManager from './NavigationPointsManager';
import {
    DEFAULT_VISIBLE_PROFILES,
    ROUTE_POINTS_START,
    ROUTE_POINTS_FINISH,
    ROUTE_POINTS_VIA,
    ROUTE_POINTS_AVOID_ROADS,
} from '../../store/geoRouter/profileConstants';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import TextWithLeftIcon from '../../frame/components/other/TextWithLeftIcon';
import TextLeftIconBtn from '../../frame/components/other/TextLeftIconBtn';

const StyledInput = styled('input')({
    display: 'none',
});

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

export default function NavigationMenu() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const [, height] = useWindowSize();

    const routeObject = ctx.routeObject;

    const avoidRoads = routeObject.getOption(ROUTE_POINTS_AVOID_ROADS);

    const [openSettings, setOpenSettings] = useState(false);
    const btnFile = useRef();

    const [resetSettings, setResetSettings] = useState(false);

    const [profilesMenuAnchor, setProfilesMenuAnchor] = useState(null);
    const [visibleProfiles, setVisibleProfiles] = useState(ctx.routeVisibleProfiles || DEFAULT_VISIBLE_PROFILES);

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

    const { type } = routeObject.getProfile();

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
        routeObject.setOption(ROUTE_POINTS_START, null);
        routeObject.setOption(ROUTE_POINTS_FINISH, null);
        routeObject.setOption(ROUTE_POINTS_VIA, []);
        routeObject.setOption(ROUTE_POINTS_AVOID_ROADS, []);

        setResetSettings(true);
        closeHeader({ ctx });
    }

    function handleProfileSelect(profileKey) {
        if (visibleProfiles.includes(profileKey)) {
            routeObject.onRouterProfileSelected({ profile: profileKey });
            return;
        }

        // Move to first position
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
                                index={key}
                                key={key}
                                id={`se-route-profile-${key}`}
                                icon={profile.icon}
                                selected={routeObject.getProfile().profile === key}
                                selectedBorderColor={profile.color}
                                onClick={() => routeObject.onRouterProfileSelected({ profile: key })}
                            />
                        );
                    })}
                    <SquareIconBtn
                        key={'dots'}
                        id="se-route-profile-dots"
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
                <NavigationPointsManager routeObject={routeObject} />
                {!routeObject.getOption(ROUTE_POINTS_START) && !routeObject.getOption(ROUTE_POINTS_FINISH) && (
                    <>
                        <ThickDivider />
                        <TextWithLeftIcon
                            icon={<InfoIcon />}
                            text={<Trans i18nKey="web:navigation_tips" components={{ strong: <strong /> }} />}
                        />
                        <ThickDivider mt={0} mb={0} />
                        <TextLeftIconBtn
                            icon={<AttachIcon />}
                            text={'Attach to the roads'}
                            desc={'OsmAnd will match your track to nearby roads for enhanced turn-by-turn guidance.'}
                            btnText={'Select track'}
                            onClick={() => btnFile.current?.click()}
                        />
                        <StyledInput
                            ref={btnFile}
                            accept=".gpx"
                            id="contained-button-route"
                            type="file"
                            onChange={(e) => ctx.setRouteTrackFile(e.target.files[0])}
                        />
                        <ThickDivider />
                    </>
                )}
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
                                routeObject.setOption(ROUTE_POINTS_AVOID_ROADS, newAvoidRoads);
                            }}
                        >
                            <RemoveCircle fontSize="small" />
                        </IconButton>
                    </MenuItem>
                ))}
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
                {routeObject.getRouteProps() && (
                    <MenuItem key="routeinfo" sx={{ ml: 1, mr: 1 }} disableRipple={true}>
                        <Typography>{formatRouteInfo(routeObject.getRouteProps(), ctx)}</Typography>
                    </MenuItem>
                )}
                <ButtonGroup variant="text" sx={{ mt: 2, ml: '11px' }}>
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
                                routeObject.setOption(ROUTE_POINTS_START, null);
                                routeObject.setOption(ROUTE_POINTS_FINISH, null);
                            }}
                        >
                            <RemoveCircle fontSize="small" />
                        </IconButton>
                    </MenuItem>
                )}
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
