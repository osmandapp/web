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
import TracksManager from '../../manager/track/TracksManager';

const GlobalFrame = () => {
    const ctx = useContext(AppContext);

    const [showInfoBlock, setShowInfoBlock] = useState(false);
    const [clearState, setClearState] = useState(false);
    const [openMainMenu, setOpenMainMenu] = useState(false);
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    const [menuInfo, setMenuInfo] = useState(null);
    const [width] = useWindowSize();
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
            let oldFiles = _.cloneDeep(ctx.visibleTracks);
            let savedVisible = JSON.parse(localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG));

            let newVisFiles = {
                old: oldFiles.old,
                new: [],
            };
            // for localStorage
            let newVisFilesNames = {
                old: savedVisible ? savedVisible.old : [],
                new: [],
            };

            Object.values(ctx.gpxFiles).forEach((f) => {
                if ((f.url && !isOldVisibleTrack(oldFiles, f)) || isNewVisibleTrack(oldFiles, f)) {
                    newVisFiles.new.push(f);
                    newVisFilesNames.new.push(f.name);
                }
            });
            localStorage.setItem(TracksManager.TRACK_VISIBLE_FLAG, JSON.stringify(newVisFilesNames));
            ctx.setVisibleTracks({ ...newVisFiles });
        }
    }, [ctx.gpxFiles]);

    function isOldVisibleTrack(tracks, file) {
        return tracks.old.some((t) => t.name === file.name);
    }

    function isNewVisibleTrack(tracks, file) {
        return tracks.new.some((t) => t.name === file.name);
    }

    return (
        <Box sx={{ display: 'flex' }}>
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
