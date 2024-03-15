import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Dialog } from '@mui/material';
import OsmAndMap from '../../map/components/OsmAndMap';
import MainMenu from '../../menu/MainMenu';
import { Outlet } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import GeneralPanelButtons from './panelbuttons/GeneralPanelButtons';
import { GlobalConfirmationDialog } from '../../dialogs/GlobalConfirmationDialog';
import HeaderMenu from './header/HeaderMenu';
import {
    MAIN_MENU_MIN_SIZE,
    MAIN_MENU_OPEN_SIZE,
    MENU_INFO_CLOSE_SIZE,
    MENU_INFO_OPEN_SIZE,
} from '../../manager/GlobalManager';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import GlobalAlert from './GlobalAlert';
import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../../dialogs/dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import _, { isEmpty } from 'lodash';
import TracksManager, { createTrackGroups, getGpxFiles } from '../../manager/track/TracksManager';
import { addCloseTracksToRecently } from '../../menu/visibletracks/VisibleTracks';

const GlobalFrame = () => {
    const ctx = useContext(AppContext);

    const [showInfoBlock, setShowInfoBlock] = useState(false);
    const [clearState, setClearState] = useState(false);
    const [openMainMenu, setOpenMainMenu] = useState(false);
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    const [menuInfo, setMenuInfo] = useState(null);
    const [width, height] = useWindowSize();
    const [openVisibleMenu, setOpenVisibleMenu] = useState(false);

    const MAIN_MENU_SIZE = openMainMenu ? MAIN_MENU_OPEN_SIZE : MAIN_MENU_MIN_SIZE;
    const MENU_INFO_SIZE = menuInfo ? MENU_INFO_OPEN_SIZE : MENU_INFO_CLOSE_SIZE;

    useEffect(() => {
        ctx.setInfoBlockWidth(MENU_INFO_SIZE);
    });

    useEffect(() => {
        if (ctx.infoBlockWidth === MENU_INFO_CLOSE_SIZE) {
            setShowInfoBlock(false);
            setMenuInfo(null);
        }
    }, [ctx.infoBlockWidth]);

    useEffect(() => {
        setOpenErrorDialog(!!ctx.trackErrorMsg);
    }, [ctx.trackErrorMsg]);

    // add new files to visible tracks
    useEffect(() => {
        if (!isEmpty(ctx.gpxFiles)) {
            let savedVisible = JSON.parse(localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG));

            let oldFiles = [];
            savedVisible.old.forEach((name) => {
                const file = ctx.gpxFiles[name];
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

            Object.values(ctx.gpxFiles).forEach((f) => {
                if (
                    (savedVisible.open.includes(f.name) && !isOldVisibleTrack(savedVisible, f)) ||
                    isNewVisibleTrack(savedVisible, f)
                ) {
                    if (isNewVisibleTrack(savedVisible, f)) {
                        const ind = savedVisible.new.findIndex((n) => n === f.name);
                        if (ind !== -1 && !newVisFiles.new[ind]) {
                            // If the new array at the index is empty, simply assign the current element
                            newVisFiles.new[ind] = f;
                            newVisFilesNames.new[ind] = f.name;
                        } else {
                            // Otherwise, find the next available index and assign the element
                            let nextFreeIndex = newVisFiles.new.findIndex((el) => !el);
                            if (nextFreeIndex === -1) {
                                // If no free indexes are found, append to the end of the array
                                newVisFiles.new.push(f);
                                newVisFilesNames.new.push(f.name);
                            } else {
                                // Assign the element to the next free index
                                newVisFiles.new[nextFreeIndex] = f;
                                newVisFilesNames.new[nextFreeIndex] = f.name;
                            }
                        }
                    } else {
                        // If it's not a new visible track, simply push the element to both arrays
                        newVisFiles.new.push(f);
                        newVisFilesNames.new.push(f.name);
                    }
                } else {
                    if (isOldVisibleTrack(savedVisible, f)) {
                        if (savedVisible.open.includes(f.name)) {
                            newVisFiles.new.push(f);
                            newVisFilesNames.new.push(f.name);
                            const ind = savedVisible.old.findIndex((n) => n === f.name);
                            if (ind !== -1) {
                                savedVisible.old.splice(ind, 1);
                            }
                        }
                    }
                }
            });
            // save updated names to localStorage
            localStorage.setItem(TracksManager.TRACK_VISIBLE_FLAG, JSON.stringify(newVisFilesNames));
            // save updated visible tracks
            ctx.setVisibleTracks({ ...newVisFiles });
        } else {
            let newVisFiles = {
                old: [],
                new: [],
            };
            ctx.setVisibleTracks({ ...newVisFiles });
        }
    }, [ctx.gpxFiles]);

    useEffect(() => {
        if (openVisibleMenu) {
            let savedVisible = JSON.parse(localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG));
            let newVisFilesNames = {
                old: savedVisible.old || [],
                new: savedVisible.new || [],
                open: savedVisible.open || [],
            };
            localStorage.setItem(TracksManager.TRACK_VISIBLE_FLAG, JSON.stringify(newVisFilesNames));
        } else {
            if (!isEmpty(ctx.visibleTracks)) {
                addCloseTracksToRecently(ctx);
            }
        }
    }, [openVisibleMenu]);

    // create track groups
    useEffect(() => {
        if (!_.isEmpty(ctx.listFiles)) {
            let files = getGpxFiles(ctx.listFiles);
            //get groups
            let trackGroups = createTrackGroups(files);

            ctx.setTracksGroups(trackGroups);
        } else {
            ctx.setTracksGroups([]);
        }
    }, [ctx.listFiles]);

    function isOldVisibleTrack(names, file) {
        return names.old.some((n) => n === file.name);
    }

    function isNewVisibleTrack(names, file) {
        return names.new.some((n) => n === file.name);
    }

    return (
        <Box sx={{ display: 'flex', maxHeight: `${height}px`, overflow: 'hidden' }}>
            <HeaderMenu />
            <Box
                sx={{
                    width: { xs: `calc(100%)` },
                    mr: ctx.infoBlockWidth,
                }}
            >
                <GlobalConfirmationDialog />
                <OsmAndMap mainMenuWidth={MAIN_MENU_MIN_SIZE} menuInfoWidth={MENU_INFO_SIZE} />
                <GlobalAlert width={width} />
                <GeneralPanelButtons
                    mainMenuWidth={MAIN_MENU_MIN_SIZE}
                    menuInfoWidth={MENU_INFO_SIZE}
                    showInfoBlock={showInfoBlock}
                    setShowInfoBlock={setShowInfoBlock}
                    clearState={clearState}
                    setMenuInfo={setMenuInfo}
                    setOpenVisibleMenu={setOpenVisibleMenu}
                />
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
                setOpenVisibleMenu={setOpenVisibleMenu}
                openVisibleMenu={openVisibleMenu}
            />
            <Outlet />
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
