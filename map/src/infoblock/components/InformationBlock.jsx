import { AppBar, LinearProgress, Box, Typography, IconButton } from '@mui/material';
import AppContext, {
    isLocalTrack,
    isCloudTrack,
    OBJECT_TYPE_FAVORITE,
    OBJECT_TYPE_WEATHER,
    OBJECT_TYPE_POI,
} from '../../context/AppContext';
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { TabContext, TabList } from '@mui/lab';
import TrackTabList from './tabs/TrackTabList';
import WeatherTabList from './tabs/WeatherTabList';
import FavoritesTabList from './tabs/FavoritesTabList';
import _ from 'lodash';
import PoiTabList from './tabs/PoiTabList';
import { hasSegmentTurns } from '../../manager/track/TracksManager';
import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import styles from '../../menu/tracks/trackmenu.module.css';

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
    } else {
        // mounted || setTimeout(() => setMounted(true), 1000); // mount not-selected tabs with delay
    }

    return null;
};

export default function InformationBlock({ showInfoBlock, setShowInfoBlock, setClearState, mainMenuSize }) {
    const DRAWER_SIZE = 360;

    const ctx = useContext(AppContext);

    const [value, setValue] = useState('general');
    const [tabsObj, setTabsObj] = useState(null);
    const [prevTrack, setPrevTrack] = useState(null);

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
        if (!_.isEmpty(ctx.pointContextMenu)) {
            window.addEventListener('keydown', escapePointMenu);
        }
    }, [ctx.pointContextMenu]);

    useEffect(() => {
        if (!showInfoBlock) {
            // stop-editor (close button)
            stopCreatedTrack(false);
            ctx.mutateShowPoints({ points: true, wpts: true });
            ctx.setTrackRange(null);
            setClearState(true);
        }
    }, [showInfoBlock]);

    useEffect(() => {
        const width = getWidth();
        ctx.setInfoBlockWidth(width);
        const px = parseFloat(width) || 0; // 100px -> 100, auto -> 0
        const padding = px || DRAWER_SIZE + Number(mainMenuSize.replace('px', '')) + 24; // always apply right padding on desktop
        ctx.mutateFitBoundsPadding((o) => (o.left = padding));
    }, [showInfoBlock]);

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
        if ((!ctx.selectedGpxFile || _.isEmpty(ctx.selectedGpxFile)) && ctx.currentObjectType !== OBJECT_TYPE_WEATHER) {
            setPrevTrack(null);
            setTabsObj(null);
            setShowInfoBlock(false);
        } else {
            if (!ctx.currentObjectType) {
                setTabsObj(null);
                setShowInfoBlock(false);
            } else if (ctx.updateInfoBlock || !prevTrack || Object.keys(prevTrack).length === 0 || !showInfoBlock) {
                let obj;
                setPrevTrack(ctx.selectedGpxFile);
                ctx.setUpdateInfoBlock(false);
                if (isCloudTrack(ctx) && ctx.selectedGpxFile?.tracks) {
                    obj = new TrackTabList().create(ctx, setShowInfoBlock);
                } else if (ctx.currentObjectType === OBJECT_TYPE_WEATHER && ctx.weatherPoint) {
                    obj = new WeatherTabList().create(ctx);
                } else if (ctx.currentObjectType === OBJECT_TYPE_FAVORITE) {
                    obj = new FavoritesTabList().create(ctx);
                } else if (ctx.currentObjectType === OBJECT_TYPE_POI) {
                    obj = new PoiTabList().create();
                } else if (ctx.selectedGpxFile) {
                    // finally assume that default selectedGpxFile is a track
                    obj = new TrackTabList().create(ctx, setShowInfoBlock);
                }
                if (obj) {
                    setShowInfoBlock(true);
                    clearStateIfObjChange();
                    setTabsObj(obj);
                    setValue(obj.defaultTab);
                }
            }
        }
    }, [ctx.currentObjectType, ctx.selectedGpxFile, ctx.weatherPoint, ctx.updateInfoBlock]);

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
            return MENU_INFO_CLOSE_SIZE;
        }
    }

    return (
        <>
            {showInfoBlock && (
                <>
                    <Box
                        anchor={'right'}
                        sx={{ alignContent: 'flex-end', height: 'auto', width: getWidth(), overflowX: 'hidden' }}
                    >
                        <div id="se-infoblock-all">
                            {(ctx.loadingContextMenu || ctx.gpxLoading) && <LinearProgress size={20} />}
                            <IconButton
                                id={'se-button-back'}
                                size="small"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                className={styles.appBarIcon}
                                sx={{ mx: '11px', my: '11px' }}
                                onClick={() => {
                                    setShowInfoBlock(false);
                                    ctx.setCurrentObjectType(null);
                                }}
                            >
                                <BackIcon />
                            </IconButton>
                            {tabsObj && tabsObj.tabList.length > 0 && (
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
                            )}
                        </div>
                    </Box>
                </>
            )}
        </>
    );
}
