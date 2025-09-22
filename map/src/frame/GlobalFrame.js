import React, { useContext, useEffect, useState } from 'react';
import { Alert, Box, Button, Dialog, Snackbar } from '@mui/material';
import OsmAndMap from '../map/OsmAndMap';
import MainMenu from '../menu/MainMenu';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import GeneralPanelButtons from './panelbuttons/GeneralPanelButtons';
import { GlobalConfirmationDialog } from '../dialogs/GlobalConfirmationDialog';
import HeaderMenu from './components/header/HeaderMenu';
import {
    HEADER_SIZE,
    MAIN_MENU_MIN_SIZE,
    MAIN_MENU_OPEN_SIZE,
    MAIN_PAGE_TYPE,
    MAIN_URL_WITH_SLASH,
    MENU_INFO_CLOSE_SIZE,
    MENU_INFO_OPEN_SIZE,
    POI_URL,
} from '../manager/GlobalManager';
import { useWindowSize } from '../util/hooks/useWindowSize';
import GlobalAlert from './components/GlobalAlert';
import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialogs/dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import isEmpty from 'lodash-es/isEmpty';
import { createTrackGroups, getGpxFiles, TRACK_VISIBLE_FLAG } from '../manager/track/TracksManager';
import { addCloseTracksToRecently, VISIBLE_SHARE_MARKER } from '../menu/visibletracks/VisibleTracks';
import PhotosModal from '../menu/search/explore/PhotosModal';
import InstallBanner from './components/InstallBanner';
import { hideAllTracks } from '../manager/track/DeleteTrackManager';
import GlobalGraph from './components/graph/GlobalGraph';
import LoginContext from '../context/LoginContext';

const GlobalFrame = () => {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const [showInfoBlock, setShowInfoBlock] = useState(false);
    const [clearState, setClearState] = useState(false);
    const [openMainMenu, setOpenMainMenu] = useState(false);
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    const [menuInfo, setMenuInfo] = useState(null);

    const [width, height] = useWindowSize();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const [showInstallBanner, setShowInstallBanner] = useState(false);

    const MAIN_MENU_SIZE = openMainMenu ? `${MAIN_MENU_OPEN_SIZE}px` : `${MAIN_MENU_MIN_SIZE}px`;
    const MENU_INFO_SIZE =
        menuInfo || ltx.openLoginMenu || ctx.infoBlockWidth === `${MENU_INFO_OPEN_SIZE}px`
            ? `${MENU_INFO_OPEN_SIZE}px`
            : `${MENU_INFO_CLOSE_SIZE}px`;

    // check configure map state
    useEffect(() => {
        if (!ctx.configureMapState.showTracks) {
            hideAllTracks(ctx);
        }
        if (isEmpty(ctx.configureMapState.pois)) {
            ctx.setShowPoiCategories([]);
        }
    }, [ctx.configureMapState]);

    useEffect(() => {
        if (menuInfo) {
            ctx.setInfoBlockWidth(`${MENU_INFO_OPEN_SIZE}px`);
        }
    }, [menuInfo]);

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();

        const mobileDeviceRegex = /android|iphone|ipad|ipod/i;
        const isMobileDevice = mobileDeviceRegex.test(userAgent);

        const isIOS = /iphone|ipad|ipod/.test(userAgent);
        const isSafari = isIOS && /safari/.test(userAgent) && !/crios|fxios|edgios|opios/.test(userAgent);

        setShowInstallBanner(isMobileDevice && !isSafari);
    }, [height, width]);

    useEffect(() => {
        if (ctx.infoBlockWidth === `${MENU_INFO_CLOSE_SIZE}px`) {
            setShowInfoBlock(false);
            if (menuInfo !== null) {
                setMenuInfo(null);
            }
            if (location.pathname !== MAIN_URL_WITH_SLASH) {
                if (ctx.pageParams[MAIN_PAGE_TYPE] !== undefined) {
                    navigate(MAIN_URL_WITH_SLASH + ctx.pageParams[MAIN_PAGE_TYPE] + location.hash);
                } else {
                    navigate(MAIN_URL_WITH_SLASH + location.hash);
                }
            }
        }
    }, [ctx.infoBlockWidth]);

    useEffect(() => {
        setOpenErrorDialog(!!ctx.trackErrorMsg);
    }, [ctx.trackErrorMsg]);

    // add new files to visible tracks
    useEffect(() => {
        if (!isEmpty(ctx.gpxFiles)) {
            let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
            const { newVisFiles, newVisFilesNames } = processTracks(ctx.gpxFiles, savedVisible);
            mergeVisibleTracks(savedVisible, newVisFiles, newVisFilesNames, false);
        } else {
            if (isEmpty(ctx.shareWithMeFiles?.tracks)) {
                let newVisFiles = {
                    old: [],
                    new: [],
                };
                ctx.setVisibleTracks({ ...newVisFiles });
            }
        }
    }, [ctx.gpxFiles]);

    useEffect(() => {
        if (!isEmpty(ctx.shareWithMeFiles?.tracks)) {
            let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
            const { newVisFiles, newVisFilesNames } = processTracks(
                ctx.shareWithMeFiles.tracks,
                savedVisible,
                VISIBLE_SHARE_MARKER
            );
            mergeVisibleTracks(savedVisible, newVisFiles, newVisFilesNames, true);
        } else {
            if (isEmpty(ctx.gpxFiles)) {
                let newVisFiles = {
                    old: [],
                    new: [],
                };
                ctx.setVisibleTracks({ ...newVisFiles });
            }
        }
    }, [ctx.shareWithMeFiles]);

    useEffect(() => {
        if (location.pathname.includes(POI_URL) && !ctx.selectedPoiId) {
            const name = searchParams.get('name');
            const type = searchParams.get('type');
            const lat = parseFloat(searchParams.get('lat'));
            const lng = parseFloat(searchParams.get('lng'));

            ctx.setPoiByUrl((prev) => {
                return {
                    ...prev,
                    params: { name, type, lat, lng },
                };
            });
        } else {
            ctx.setPoiByUrl((prev) => {
                return prev ? { ...prev, open: false } : prev;
            });
        }
    }, [location.pathname]);

    function mergeVisibleTracks(savedVisible, newVisFiles, newVisFilesNames, shared) {
        const filterCondition = (name) =>
            shared ? !name.startsWith(VISIBLE_SHARE_MARKER) : name.startsWith(VISIBLE_SHARE_MARKER);

        // get other track names and add them to the visible tracks with the same order
        const otherTrackNames = {
            old: savedVisible.old.filter(filterCondition),
            new: savedVisible.new.filter(filterCondition),
            open: savedVisible.open.filter(filterCondition),
        };

        const mergedVisFilesNames = {
            old: [...new Set([...newVisFilesNames.old, ...otherTrackNames.old].filter(Boolean))],
            new: [...new Set([...newVisFilesNames.new, ...otherTrackNames.new].filter(Boolean))],
            open: [...new Set([...newVisFilesNames.open, ...otherTrackNames.open].filter(Boolean))],
        };

        localStorage.setItem(TRACK_VISIBLE_FLAG, JSON.stringify(mergedVisFilesNames));

        // merge visible tracks with the same order (save the order of the other tracks)
        const mergedVisFiles = {
            old: [
                ...newVisFiles.old.filter(
                    (track) => !ctx.visibleTracks?.old.some((existing) => existing.name === track.name)
                ),
                ...(ctx.visibleTracks?.old.filter(
                    (track) => !newVisFiles.new.some((newTrack) => newTrack.name === track.name)
                ) || []),
            ],
            new: [
                ...newVisFiles.new.filter(
                    (track) => !ctx.visibleTracks?.new.some((existing) => existing.name === track.name)
                ),
                ...(ctx.visibleTracks?.new || []),
            ],
        };

        ctx.setVisibleTracks(mergedVisFiles);
    }

    const processTracks = (files, savedVisible, prefix = '') => {
        // filter out empty values
        Object.keys(savedVisible).forEach((key) => {
            savedVisible[key] = (savedVisible[key] || []).filter(Boolean);
        });

        let oldFiles = [];
        savedVisible.old.forEach((name) => {
            const fileName = name.startsWith(prefix) ? name.slice(prefix.length) : name;
            const file = files[fileName];
            if (file) {
                oldFiles.push(file);
            }
        });
        // don't update old files, update only new ones
        let newVisFiles = {
            old: oldFiles,
            new: [],
        };
        // for localStorage
        let newVisFilesNames = {
            old: savedVisible ? savedVisible.old : [],
            new: [],
            open: savedVisible ? savedVisible.open : [],
        };

        Object.values(files).forEach((f) => {
            if (!f || !f.name) {
                return;
            }
            const fileName = `${prefix}${f.name}`;
            if (
                (savedVisible.open.includes(fileName) && !isOldVisibleTrack(savedVisible, f, prefix)) ||
                isNewVisibleTrack(savedVisible, f, prefix)
            ) {
                if (isNewVisibleTrack(savedVisible, f, prefix)) {
                    const ind = savedVisible.new.findIndex((n) => n === fileName);
                    if (ind !== -1 && !newVisFiles.new[ind]) {
                        // If the new array at the index is empty, simply assign the current element
                        newVisFiles.new[ind] = f;
                        newVisFilesNames.new[ind] = fileName;
                    } else {
                        // Otherwise, find the next available index and assign the element
                        let nextFreeIndex = newVisFiles.new.findIndex((el) => !el);
                        if (nextFreeIndex === -1) {
                            // If no free indexes are found, append to the end of the array
                            newVisFiles.new.push(f);
                            newVisFilesNames.new.push(fileName);
                        } else {
                            // Assign the element to the next free index
                            newVisFiles.new[nextFreeIndex] = f;
                            newVisFilesNames.new[nextFreeIndex] = fileName;
                        }
                    }
                } else {
                    // If it's not a new visible track, simply push the element to both arrays
                    newVisFiles.new.push(f);
                    newVisFilesNames.new.push(fileName);
                }
            } else {
                if (isOldVisibleTrack(savedVisible, f, prefix)) {
                    if (savedVisible.open.includes(fileName)) {
                        newVisFiles.new.push(f);
                        newVisFilesNames.new.push(fileName);
                        const ind = savedVisible.old.findIndex((n) => n === fileName);
                        if (ind !== -1) {
                            savedVisible.old.splice(ind, 1);
                        }
                    }
                }
            }
        });

        return { newVisFiles, newVisFilesNames };
    };

    useEffect(() => {
        if (ctx.openVisibleMenu) {
            let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
            let newVisFilesNames = {
                old: savedVisible.old || [],
                new: savedVisible.new || [],
                open: savedVisible.open || [],
            };
            localStorage.setItem(TRACK_VISIBLE_FLAG, JSON.stringify(newVisFilesNames));
        } else {
            if (!isEmpty(ctx.visibleTracks)) {
                addCloseTracksToRecently(ctx);
            }
        }
    }, [ctx.openVisibleMenu]);
    // create track groups
    useEffect(() => {
        if (!isEmpty(ctx.listFiles)) {
            const files = getGpxFiles(ctx.listFiles);
            const trackGroups = createTrackGroups({ files, ctx });
            ctx.setTracksGroups(trackGroups);
        } else {
            ctx.setTracksGroups([]);
        }
    }, [ctx.listFiles, ctx.selectedSort]);

    function isOldVisibleTrack(names, file, prefix = '') {
        return names.old.some((n) => n === `${prefix}${file.name}`);
    }

    function isNewVisibleTrack(names, file, prefix = '') {
        return names.new.some((n) => n === `${prefix}${file.name}`);
    }

    const handleCloseNotification = (event, reason) => {
        if (reason === 'clickaway') return;
        ctx.setNotification(null);
    };

    return (
        <Box sx={{ display: 'flex', maxHeight: `${height}px`, overflow: 'hidden' }}>
            <InstallBanner showInstallBanner={showInstallBanner} />
            <HeaderMenu showInstallBanner={showInstallBanner} />
            <Box
                sx={{
                    width: { xs: `calc(100%)` },
                    mr: ctx.infoBlockWidth,
                }}
            >
                <GlobalConfirmationDialog />
                <OsmAndMap mainMenuWidth={MAIN_MENU_MIN_SIZE + 'px'} menuInfoWidth={MENU_INFO_SIZE} />
                {ctx.globalGraph?.show && <GlobalGraph type={ctx.globalGraph.type} />}
                <GlobalAlert width={width} />
                <Snackbar
                    open={!!ctx.notification}
                    autoHideDuration={3000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    sx={{ mt: `${HEADER_SIZE}px` }}
                    onClose={handleCloseNotification}
                >
                    <Alert severity={ctx.notification?.severity}>{ctx.notification?.text}</Alert>
                </Snackbar>
                <GeneralPanelButtons
                    mainMenuWidth={MAIN_MENU_MIN_SIZE + 'px'}
                    menuInfoWidth={MENU_INFO_SIZE}
                    showInfoBlock={showInfoBlock}
                    setShowInfoBlock={setShowInfoBlock}
                    clearState={clearState}
                    setMenuInfo={setMenuInfo}
                    showInstallBanner={showInstallBanner}
                />
                {ctx.selectedPhotoInd !== -1 && <PhotosModal photos={ctx.photoGallery} />}
            </Box>
            <MainMenu
                size={MAIN_MENU_SIZE}
                infoSize={MENU_INFO_SIZE}
                openMainMenu={openMainMenu}
                setOpenMainMenu={setOpenMainMenu}
                menuInfo={menuInfo}
                setMenuInfo={setMenuInfo}
                showInfoBlock={showInfoBlock}
                setShowInfoBlock={setShowInfoBlock}
                setClearState={setClearState}
                showInstallBanner={showInstallBanner}
            />
            <Dialog open={openErrorDialog} onClose={() => setOpenErrorDialog(false)}>
                <DialogTitle className={dialogStyles.title}>{ctx.trackErrorMsg?.title}</DialogTitle>
                <DialogContent className={dialogStyles.content}>{ctx.trackErrorMsg?.msg}</DialogContent>
                <DialogActions>
                    <Button className={dialogStyles.button} onClick={() => ctx.setTrackErrorMsg(null)}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default GlobalFrame;
