import { AppBar, LinearProgress, Box, Typography, IconButton } from '@mui/material';
import AppContext, {
    isLocalTrack,
    OBJECT_TYPE_NAVIGATION_ALONE,
    OBJECT_TYPE_WEATHER,
    isTrack,
    isCloudTrack,
    isTrackAnalyzer,
    OBJECT_TYPE_STOP,
} from '../../context/AppContext';
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { TabContext, TabList } from '@mui/lab';
import TrackTabList from './tabs/TrackTabList';
import isEmpty from 'lodash-es/isEmpty';
import { hasSegmentTurns } from '../../manager/track/TracksManager';
import {
    FAVORITES_URL,
    FAVOURITES,
    INFO_MENU_URL,
    MAIN_URL_WITH_SLASH,
    MENU_INFO_CLOSE_SIZE,
    SHARE_FILE_MAIN_URL,
    SHARE_MENU_URL,
    TRACKS_URL,
} from '../../manager/GlobalManager';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import styles from '../../menu/trackfavmenu.module.css';
import { isVisibleTrack } from '../../menu/visibletracks/VisibleTracks';
import WptDetails from './wpt/WptDetails';
import WptPhotoList from './wpt/WptPhotoList';
import ShareFileMenu from '../../menu/share/ShareFileMenu';
import ShareFile from '../../menu/share/ShareFile';
import { useNavigate } from 'react-router-dom';
import { encodeString } from '../../util/Utils';
import LoginContext from '../../context/LoginContext';

const PersistentTabPanel = ({ tabId, selectedTabId, children }) => {
    const [mounted, setMounted] = useState(false);

    if (tabId === selectedTabId || mounted) {
        mounted || setMounted(true);
        const hidden = tabId !== selectedTabId;
        return (
            <Typography hidden={hidden} component="span">
                <Box sx={{ px: 3, pt: 3, pb: 8 }}>{children}</Box>
            </Typography>
        );
    }

    return null;
};

export default function InformationBlock({
    showInfoBlock,
    setShowInfoBlock,
    setClearState,
    mainMenuSize,
    setSavePrevState,
}) {
    const DRAWER_SIZE = 360;

    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const navigate = useNavigate();

    const [value, setValue] = useState('general');
    const [tabsObj, setTabsObj] = useState(null);
    const [prevTrack, setPrevTrack] = useState(null);
    const [openWptDetails, setOpenWptDetails] = useState(false);
    const [openWptTab, setOpenWptTab] = useState(false);
    const [openShareFileMenu, setOpenShareFileMenu] = useState(false);
    const [openShareFileItem, setOpenShareFileItem] = useState(false);
    const [trackName, setTrackName] = useState(null);
    const [trackType, setTrackType] = useState(null);
    const [closeShareMenu, setCloseShareMenu] = useState(false);

    /**
     * Handle Escape key to close PointContextMenu.
     * Located here (parent) to run Effect on closed menu.
     * Otherwise (if located in child) we can't catch removeEventListener moment.
     */
    const escapePointMenu = useCallback((e) => {
        if (e.key === 'Escape') {
            ctx.setPointContextMenu({});
        }
    }, []);
    useEffect(() => {
        window.removeEventListener('keydown', escapePointMenu);
        if (!isEmpty(ctx.pointContextMenu)) {
            window.addEventListener('keydown', escapePointMenu);
        }
    }, [ctx.pointContextMenu]);

    useEffect(() => {
        if (closeShareMenu) {
            setCloseShareMenu(false);
            setTrackName(null);
            setSavePrevState(true);
            navigate(MAIN_URL_WITH_SLASH + trackType);
        }
    }, [closeShareMenu]);

    useEffect(() => {
        if (!showInfoBlock) {
            // stop-editor (close button)
            stopCreatedTrack(false);
            ctx.mutateShowPoints({ points: true, wpts: true });
            ctx.setTrackRange(null);
            setClearState(true);
            hideTrackFromMapIfNotVisible(ctx.selectedGpxFile);
            if (!isEmpty(ctx.selectedGpxFile)) {
                ctx.setSelectedGpxFile({});
            }
        }
    }, [showInfoBlock]);

    useEffect(() => {
        const width = getWidth();
        const px = parseFloat(width) || 0; // 100px -> 100, auto -> 0
        const padding = px || DRAWER_SIZE + Number(mainMenuSize.replace('px', '')) + 24; // always apply right padding on desktop
        ctx.mutateFitBoundsPadding((o) => (o.left = padding));
    }, [showInfoBlock]);

    useEffect(() => {
        if (location.pathname.includes(SHARE_FILE_MAIN_URL)) {
            setOpenShareFileItem(true);
        } else {
            setOpenShareFileItem(false);
        }
    }, [showInfoBlock]);

    // update URL for info track menu
    useEffect(() => {
        if (trackName && !ctx.shareFile) {
            navigate(
                {
                    pathname:
                        MAIN_URL_WITH_SLASH + TRACKS_URL + INFO_MENU_URL + encodeURIComponent(encodeString(trackName)),
                    hash: window.location.hash,
                },
                { replace: true }
            );
        }
    }, [trackName]);

    useEffect(() => {
        if (ctx.selectedGpxFile.file?.type === FAVOURITES && !ctx.shareFile) {
            const favName = ctx.selectedGpxFile.name;
            const favGroup = ctx.selectedGpxFile.nameGroup;
            const fullName =
                encodeURIComponent(encodeString(favGroup)) + '/' + encodeURIComponent(encodeString(favName));
            navigate(
                {
                    pathname: MAIN_URL_WITH_SLASH + FAVORITES_URL + INFO_MENU_URL + fullName,
                    hash: window.location.hash,
                },
                { replace: true }
            );
        }
    }, [ctx.selectedGpxFile.name]);

    // detect leaving from Local Track Editor when another kind of object type is activated
    useEffect(() => {
        if (ctx.currentObjectType && isLocalTrack(ctx) === false && ctx.createTrack) {
            stopCreatedTrack(true);
        }
    }, [ctx.currentObjectType]);

    // used to add Turns tab when the turns appeared
    useEffect(() => {
        isLocalTrack(ctx) && ctx.setUpdateInfoBlock(true);
    }, [hasSegmentTurns({ track: ctx.selectedGpxFile })]);

    useEffect(() => {
        if ((!ctx.selectedGpxFile || isEmpty(ctx.selectedGpxFile)) && ctx.currentObjectType !== OBJECT_TYPE_WEATHER) {
            setPrevTrack(null);
            setTabsObj(null);
            setShowInfoBlock(false);
        } else {
            if (!ctx.currentObjectType) {
                setTabsObj(null);
                setShowInfoBlock(false);
            } else if (ctx.updateInfoBlock || !prevTrack || Object.keys(prevTrack).length === 0 || !showInfoBlock) {
                let tObj;
                setPrevTrack(ctx.selectedGpxFile);
                ctx.setUpdateInfoBlock(false);
                if (ctx.currentObjectType === OBJECT_TYPE_NAVIGATION_ALONE) {
                    // don't display InfoBlock in Navigation menu until details requested
                } else if (ctx.selectedGpxFile && (isTrack(ctx) || isTrackAnalyzer(ctx)) && !openShareFileItem) {
                    // finally assume that default selectedGpxFile is a track
                    tObj = new TrackTabList().create(ctx, setShowInfoBlock);
                    if (isCloudTrack(ctx)) {
                        // set track identification for URL
                        setTrackName(ctx.selectedGpxFile.name);
                        setTrackType(TRACKS_URL);
                        setOpenWptDetails(false);
                    }
                }
                if (tObj) {
                    setShowInfoBlock(true);
                    clearStateIfObjChange();
                    setTabsObj(tObj);
                    setValue(tObj.defaultTab);
                }
            }
        }
    }, [ctx.currentObjectType, ctx.selectedGpxFile, ctx.updateInfoBlock]);

    useEffect(() => {
        if (ctx.selectedWpt) {
            setShowInfoBlock(true);
            setOpenWptDetails(true);
        } else {
            setOpenWptDetails(false);
        }
    }, [ctx.selectedWpt]);

    // share file menu
    useEffect(() => {
        if (ctx.shareFile?.mainFile.name) {
            setOpenShareFileMenu(true);
            if (!showInfoBlock) {
                setShowInfoBlock(true);
            }
            const name = ctx.shareFile.mainFile.name;
            const typeUrl = ctx.shareFile.mainFile.type === FAVOURITES ? FAVORITES_URL : TRACKS_URL;
            setTrackName(name);
            setTrackType(typeUrl);

            navigate(
                MAIN_URL_WITH_SLASH +
                    typeUrl +
                    INFO_MENU_URL +
                    encodeURIComponent(encodeString(name)) +
                    '/' +
                    SHARE_MENU_URL,
                {
                    replace: true,
                }
            );
        } else {
            setOpenShareFileMenu(false);
        }
    }, [ctx.shareFile]);

    useEffect(() => {
        if (!ltx.loginUser) {
            setShowInfoBlock(false);
            setOpenWptDetails(false);
        }
    }, [ltx.loginUser]);

    useEffect(() => {
        if (openWptTab) {
            let tObj = new TrackTabList().create(ctx, setShowInfoBlock);
            clearStateIfObjChange();
            setTabsObj(tObj);
            setValue('waypoints');
        }
    }, [openWptTab]);

    function hideTrackFromMapIfNotVisible(track) {
        if (!isEmpty(track) && !isVisibleTrack(track)) {
            if (!isEmpty(ctx.gpxFiles) && ctx.gpxFiles[track.name]) {
                ctx.mutateGpxFiles((o) => (o[track.name].url = null));
            }
            // remove share file from visible tracks
            if (ctx.shareWithMeFiles?.tracks[track.name]) {
                ctx.setShareWithMeFiles({
                    ...ctx.shareWithMeFiles,
                    tracks: {
                        ...ctx.shareWithMeFiles.tracks,
                        [track.name]: {
                            ...ctx.shareWithMeFiles.tracks[track.name],
                            url: null,
                        },
                    },
                });
            }
        }
    }

    function clearStateIfObjChange() {
        if (
            prevTrack &&
            prevTrack.name !== ctx.selectedGpxFile.name &&
            prevTrack.points?.length !== ctx.selectedGpxFile?.points?.length
        ) {
            setClearState(true);
        } else {
            setClearState(false);
        }
    }

    function stopCreatedTrack(deletePrev) {
        if (ctx.createTrack) {
            ctx.createTrack.enable = false; // stop-editor
            if (deletePrev) {
                ctx.createTrack.deletePrev = deletePrev;
            }
            ctx.setCreateTrack({ ...ctx.createTrack });
            ctx.addFavorite.editTrack = false;
            ctx.setAddFavorite({ ...ctx.addFavorite });
        }
    }

    function getWidth() {
        if (showInfoBlock) {
            return `${DRAWER_SIZE + 24}px`;
        } else {
            return `${MENU_INFO_CLOSE_SIZE}px`;
        }
    }

    function hasOldTabs() {
        return !openWptDetails && !openShareFileMenu;
    }

    function isOpenMainFavShareFile() {
        const isCloseFavItemDetails = !ctx.selectedGpxFile?.markerCurrent;
        return openShareFileItem && isCloseFavItemDetails;
    }

    return (
        <>
            {showInfoBlock && (
                <>
                    {openWptDetails &&
                        (ctx.photoGallery ? (
                            <WptPhotoList photos={ctx.photoGallery} />
                        ) : (
                            <WptDetails setOpenWptTab={setOpenWptTab} setShowInfoBlock={setShowInfoBlock} />
                        ))}
                    {openShareFileMenu && (
                        <ShareFileMenu setShowInfoBlock={setShowInfoBlock} setCloseShareMenu={setCloseShareMenu} />
                    )}
                    {isOpenMainFavShareFile() && <ShareFile />}
                    {hasOldTabs() && (
                        <Box
                            anchor={'right'}
                            sx={{
                                height: '100vh',
                                overflowX: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div
                                id="se-infoblock-all"
                                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                            >
                                <Box>
                                    {(ctx.loadingContextMenu || ctx.gpxLoading) && <LinearProgress size={20} />}
                                    <IconButton
                                        id={ctx.selectedGpxFile.mapObj ? 'se-button-close' : 'se-button-back'}
                                        size="small"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        className={styles.appBarIcon}
                                        sx={{ mx: '11px', my: '11px' }}
                                        onClick={() => {
                                            setShowInfoBlock(false);

                                            // not change object type if track analyzer is active, because return to prev menu
                                            if (!isTrackAnalyzer(ctx)) {
                                                if (ctx.currentObjectType === OBJECT_TYPE_STOP) {
                                                    ctx.setSelectedTransportRoute(null);
                                                }
                                                ctx.setCurrentObjectType(null);
                                            }
                                            if (ctx.selectedGpxFile.mapObj) {
                                                ctx.setCloseMapObj(true);
                                                if (!isEmpty(ctx.gpxFiles) && ctx.gpxFiles[ctx.selectedGpxFile.name]) {
                                                    ctx.mutateGpxFiles(
                                                        (o) => (o[ctx.selectedGpxFile.name].mapObj = null)
                                                    );
                                                }
                                            } else if (isCloudTrack(ctx)) {
                                                hideTrackFromMapIfNotVisible(ctx.selectedGpxFile);
                                                if (!isEmpty(ctx.selectedGpxFile)) {
                                                    ctx.setSelectedGpxFile({});
                                                }
                                                setTrackName(null);
                                                setSavePrevState(true);
                                                ctx.setSelectedCloudTrackObj(null);

                                                navigate({
                                                    pathname: MAIN_URL_WITH_SLASH + trackType,
                                                    hash: window.location.hash,
                                                });
                                            } else if (isLocalTrack(ctx)) {
                                                if (!isEmpty(ctx.selectedGpxFile)) {
                                                    ctx.setSelectedGpxFile({});
                                                }
                                                ctx.setSelectedLocalTrackObj(null);
                                            }
                                        }}
                                    >
                                        {ctx.selectedGpxFile.mapObj ? <CloseIcon /> : <BackIcon />}
                                    </IconButton>
                                </Box>
                                {tabsObj && tabsObj.tabList.length > 0 && (
                                    <Box
                                        sx={{
                                            flex: 1,
                                            minHeight: 0,
                                            overflowY: 'auto',
                                            overflowX: 'hidden',
                                        }}
                                    >
                                        <TabContext value={value}>
                                            <AppBar position="static" color="default">
                                                <div>
                                                    <TabList
                                                        variant="scrollable"
                                                        scrollButtons
                                                        onChange={(e, newValue) => setValue(newValue)}
                                                    >
                                                        {tabsObj.tabList}
                                                    </TabList>
                                                </div>
                                            </AppBar>
                                            <div>
                                                {Object.values(tabsObj.tabs).map((item) => (
                                                    <PersistentTabPanel
                                                        key={'tabpanel-desktop:' + item.key}
                                                        selectedTabId={value}
                                                        tabId={item.key}
                                                    >
                                                        {item}
                                                    </PersistentTabPanel>
                                                ))}
                                            </div>
                                        </TabContext>
                                    </Box>
                                )}
                            </div>
                        </Box>
                    )}
                </>
            )}
        </>
    );
}
