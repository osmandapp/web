import React, { useState, useContext, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Tooltip, CircularProgress } from '@mui/material';
import AppContext, { isRouteTrack, OBJECT_TYPE_NAVIGATION_TRACK } from '../../context/AppContext';
import styles from './routemenu.module.css';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { ReactComponent as SettingsIcon } from '../../assets/icons/ic_action_settings_outlined.svg';
import { ReactComponent as DotsIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/ic_action_point_destination.svg';
import { ReactComponent as AttachIcon } from '../../assets/icons/ic_action_attach_track.svg';
import { ReactComponent as WarningIcon } from '../../assets/icons/ic_action_warning_yellow_colored.svg';
import { ReactComponent as SaveLocalIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as SaveCloudIcon } from '../../assets/icons/ic_action_folder_import_outlined.svg';
import { HEADER_SIZE, PRICING_URL } from '../../manager/GlobalManager';
import { useNavigate, useLocation } from 'react-router-dom';
import gStyles from '../gstylesmenu.module.css';
import { closeHeader } from '../actions/HeaderHelper';
import { Trans, useTranslation } from 'react-i18next';
import SquareIconBtn from '../../frame/components/btns/SquareIconBtn';
import ProfilesMenu from './ProfilesMenu';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import NavigationPointsManager from './NavigationPointsManager';
import RouteSummaryCard from './RouteSummaryCard';
import TextLeftIconBtn from '../../frame/components/other/TextLeftIconBtn';
import { abortApiRequest } from '../../util/HttpApi';
import { NAVIGATION_ROUTE_ABORT_KEY } from '../../store/geoRouter/legacy/calculateRoute';
import LoginContext from '../../context/LoginContext';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import { isEmptyTrack, GPX_FILE_TYPE } from '../../manager/track/TracksManager';
import DownloadTrackDialog from '../../dialogs/tracks/DownloadTrackDialog';
import {
    DEFAULT_VISIBLE_PROFILES,
    ROUTE_POINTS_START,
    ROUTE_POINTS_FINISH,
    ROUTE_POINTS_VIA,
    ROUTE_POINTS_AVOID_ROADS,
    PROFILE_LINE,
    PROFILE_RESCUETRACK,
} from '../../store/geoRouter/profileConstants';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import TextWithLeftIcon from '../../frame/components/other/TextWithLeftIcon';
import ColorBlock from '../../frame/components/other/ColorBlock';
import SelectedTrackRow from './SelectedTrackRow';
import SaveTrackDialog from '../../dialogs/tracks/SaveTrackDialog';
import HeaderNoUnderline from '../../frame/components/header/HeaderNoUnderline';
import NavigationSettings from './NavigationSettings';
import AvoidRoadsList from './AvoidRoadsList';

export const COLOR_BTN_BLUE = '#237BFF';
export const COLOR_BTN_RED = '#E71D36';

const StyledInput = styled('input')({
    display: 'none',
});

const MAX_VISIBLE_PROFILES = 4;

export default function NavigationMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const [, height] = useWindowSize();

    const navObject = ctx.navigationObject;

    const [openSettings, setOpenSettings] = useState(false);
    const btnFile = useRef();

    const avoidRoads = navObject.getOption(ROUTE_POINTS_AVOID_ROADS);

    useEffect(() => {
        ctx.setOpenNavigationSettings(openSettings);
    }, [openSettings]);

    useEffect(() => {
        if (!ctx.openNavigationSettings) {
            setOpenSettings(false);
        }
    }, [ctx.openNavigationSettings]);

    const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);
    const [downloadTrack, setDownloadTrack] = useState(null);
    const [cloudTrack, setCloudTrack] = useState(null);

    const [resetSettings, setResetSettings] = useState(false);

    const [profilesMenuAnchor, setProfilesMenuAnchor] = useState(null);
    const [visibleProfiles, setVisibleProfiles] = useState(ctx.routeVisibleProfiles || DEFAULT_VISIBLE_PROFILES);
    const [profilesReady, setProfilesReady] = useState(false);

    useEffect(() => {
        const searchParams = new URLSearchParams(globalThis.location.search);
        const urlProfile = searchParams.get('profile');
        if (!urlProfile) {
            setProfilesReady(true);
            return;
        }
        const profile = navObject.listProfiles().find((p) => p.key === urlProfile);
        if (!profile) {
            return;
        }

        if (urlProfile && !visibleProfiles.includes(urlProfile)) {
            const newVisibleProfiles = visibleProfiles.filter((key) => key !== urlProfile);
            newVisibleProfiles.unshift(urlProfile);
            const updatedProfiles = newVisibleProfiles.slice(0, MAX_VISIBLE_PROFILES);
            setVisibleProfiles(updatedProfiles);
            ctx.setRouteVisibleProfiles(updatedProfiles);
        }
        setProfilesReady(true);
    }, [navObject.listProfiles()]);

    useEffect(() => {
        if (!ctx.routeTrackFile) {
            if (btnFile.current) {
                btnFile.current.value = '';
            }
        }
    }, [ctx.routeTrackFile]);

    function openInfoBlock() {
        const route = navObject.getRoute();
        if (route) {
            if (isRouteTrack(ctx) === false) {
                const { track } = navObject.putRoute({ route: navObject.getRoute() }); // get track instantly
                ctx.setCurrentObjectType(OBJECT_TYPE_NAVIGATION_TRACK);
                navObject.setOption('route.map.zoom', true);
                ctx.setSelectedGpxFile(track);
                ctx.setUpdateInfoBlock(true);
            }
        }
        // Close navigation settings when opening route details
        if (openSettings) {
            setOpenSettings(false);
        }
        ctx.setOpenNavigationSettings(false);
    }

    function close() {
        if (openSettings) {
            setOpenSettings(false);
        }
        navObject.setOption(ROUTE_POINTS_START, null);
        navObject.setOption(ROUTE_POINTS_FINISH, null);
        navObject.setOption(ROUTE_POINTS_VIA, []);
        ctx.setViaInputsCount(0);
        navObject.setOption(ROUTE_POINTS_AVOID_ROADS, []);
        navObject.resetRoute();

        setResetSettings(true);
        closeHeader({ ctx });
    }

    function handleProfileSelect(profileKey) {
        if (visibleProfiles.includes(profileKey)) {
            navObject.onRouterProfileSelected({ profile: profileKey });
            return;
        }

        // Move to first position
        const newVisibleProfiles = visibleProfiles.filter((key) => key !== profileKey);
        newVisibleProfiles.unshift(profileKey);
        const updatedProfiles = newVisibleProfiles.slice(0, MAX_VISIBLE_PROFILES);
        setVisibleProfiles(updatedProfiles);
        ctx.setRouteVisibleProfiles(updatedProfiles);
        navObject.onRouterProfileSelected({ profile: profileKey });
    }

    function handleCancelRouteCalculation() {
        navObject.resetRoute();
        ctx.setRoutingErrorMsg(null);
        abortApiRequest(NAVIGATION_ROUTE_ABORT_KEY);
        ctx.setNavigationRoutingInProgress(false);
    }

    const routeTrack = navObject.getTrack();
    const hasRouteTrack = routeTrack && !isEmptyTrack(routeTrack);

    function showRouteSummary() {
        if (ctx.routeTrackFile) {
            return true;
        }
        if (
            navObject.getProfile()?.profile === PROFILE_LINE ||
            navObject.getProfile()?.profile.startsWith(PROFILE_RESCUETRACK)
        ) {
            return navObject.getRoute() && !navObject.preview && !ctx.navigationRoutingInProgress;
        }
        return (
            navObject.getRoute() &&
            navObject.getRouteProps()?.overall?.routingTime &&
            !navObject.preview &&
            !ctx.navigationRoutingInProgress
        );
    }

    function handleClearSelectedTrack() {
        navObject.resetRoute();
        ctx.setRouteTrackFile(null);
        navObject.setOption(ROUTE_POINTS_START, null);
        navObject.setOption(ROUTE_POINTS_FINISH, null);
    }

    function handleDownloadSelectedTrack() {
        if (!hasRouteTrack) {
            return;
        }
        const downloadTarget = {
            ...routeTrack,
            type: routeTrack.type ?? GPX_FILE_TYPE,
            routeTypes: routeTrack.routeTypes,
        };
        setDownloadTrack(downloadTarget);
        setDownloadDialogOpen(true);
    }

    function handleSaveTrackCloud() {
        if (!hasRouteTrack || !routeTrack) {
            return;
        }

        if (!ltx.loginUser || ltx.accountInfo?.account === FREE_ACCOUNT) {
            navigate({
                pathname: '/' + PRICING_URL,
                hash: location.hash,
            });
            return;
        }

        const trackToSave = {
            ...routeTrack,
            save: true,
            type: routeTrack.type ?? GPX_FILE_TYPE,
            onClose: () => setCloudTrack(null),
        };
        setCloudTrack(trackToSave);
    }

    return (
        <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
            <HeaderNoUnderline
                title={t('web:navigation_menu_title')}
                onClose={close}
                titleId="se-navigation-title"
                rightContent={
                    <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
                        <Tooltip title={t('shared_string_download')} arrow>
                            <span>
                                <ActionIconBtn
                                    id="se-route-download-track"
                                    icon={<SaveLocalIcon />}
                                    onClick={handleDownloadSelectedTrack}
                                    disabled={!hasRouteTrack}
                                />
                            </span>
                        </Tooltip>
                        <Tooltip title={t('web:upload_gpx_track')} arrow>
                            <span>
                                <ActionIconBtn
                                    id="se-route-save-to-cloud"
                                    icon={<SaveCloudIcon />}
                                    onClick={handleSaveTrackCloud}
                                    disabled={!hasRouteTrack}
                                />
                            </span>
                        </Tooltip>
                    </Box>
                }
            />
            <Box className={gStyles.scrollActiveBlock} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box className={styles.profileButtonBox}>
                    {visibleProfiles.map((key, index) => {
                        if (index === 0 && !profilesReady) {
                            return (
                                <Box
                                    key="loading"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <CircularProgress size={24} />
                                </Box>
                            );
                        }
                        const profile = navObject.listProfiles().find((p) => p.key === key);
                        if (!profile) return null;
                        return (
                            <SquareIconBtn
                                index={key}
                                key={key}
                                id={`se-route-profile-${key}`}
                                icon={profile.icon}
                                selected={navObject.getProfile().profile === key}
                                selectedBorderColor={profile.color}
                                onClick={() => navObject.onRouterProfileSelected({ profile: key })}
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
                                iconColor={COLOR_BTN_BLUE}
                                icon={<SettingsIcon />}
                                onClick={() => {
                                    setOpenSettings((prev) => !prev);
                                }}
                            />
                        </Box>
                    </Tooltip>
                </Box>
                <NavigationPointsManager />
                {ctx.routingErrorMsg &&
                    navObject.getOption(ROUTE_POINTS_START) &&
                    navObject.getOption(ROUTE_POINTS_FINISH) && (
                        <>
                            <ThickDivider mt={0} mb={0} />
                            <TextLeftIconBtn
                                icon={<WarningIcon />}
                                text={t('web:router_error_title')}
                                desc={ctx.routingErrorMsg}
                            />
                        </>
                    )}
                {(!navObject.getOption(ROUTE_POINTS_START) || !navObject.getOption(ROUTE_POINTS_FINISH)) && (
                    <>
                        <ThickDivider />
                        <TextWithLeftIcon
                            icon={<InfoIcon />}
                            text={<Trans i18nKey="web:navigation_tips" components={{ strong: <strong /> }} />}
                        />
                        <ThickDivider mt={0} mb={0} />
                        <TextLeftIconBtn
                            id={'se-attach-gpx-track-btn'}
                            icon={<AttachIcon />}
                            text={t('web:attach_gpx_title')}
                            desc={t('web:attach_gpx_desc')}
                            btnText={t('web:attach_gpx_button')}
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
                {showRouteSummary() && (
                    <>
                        <ThickDivider />
                        <RouteSummaryCard
                            key={navObject.getProfile()?.profile}
                            routeProps={navObject.getRouteProps()}
                            onDetails={openInfoBlock}
                        />
                        <ThickDivider />
                    </>
                )}
                <AvoidRoadsList
                    avoidRoads={avoidRoads}
                    onRemove={(ind) => {
                        const newAvoidRoads = Object.assign([], avoidRoads);
                        newAvoidRoads.splice(ind, 1);
                        navObject.setOption(ROUTE_POINTS_AVOID_ROADS, newAvoidRoads);
                    }}
                />
                {ctx.navigationRoutingInProgress && (
                    <>
                        <ThickDivider />
                        <TextLeftIconBtn
                            id={'se-progress-route-calculation'}
                            icon={<CircularProgress size={24} thickness={4} />}
                            text={t('web:waiting_for_route_calculation')}
                            desc={t('web:waiting_for_route_calculation_description')}
                            btnText={t('shared_string_cancel')}
                            onClick={handleCancelRouteCalculation}
                        />
                    </>
                )}
                <SelectedTrackRow trackFile={ctx.routeTrackFile} onClear={handleClearSelectedTrack} />
                <ColorBlock color={'#f0f0f0'} />
                {openSettings && (
                    <NavigationSettings
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
                    routeObject={navObject}
                />
            </Box>
            {downloadDialogOpen && (
                <DownloadTrackDialog
                    dialogOpen={downloadDialogOpen}
                    setDialogOpen={(open) => {
                        setDownloadDialogOpen(open);
                        if (!open) {
                            setDownloadTrack(null);
                        }
                    }}
                    navTrack={downloadTrack}
                />
            )}
            {cloudTrack && <SaveTrackDialog track={cloudTrack} />}
        </Box>
    );
}
