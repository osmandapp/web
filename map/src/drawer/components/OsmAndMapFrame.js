import React, { useContext, useEffect, useState } from 'react';
import { Drawer, Toolbar, Box, Alert } from '@mui/material';
import { IconButton, AppBar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import OsmAndMap from '../../map/components/OsmAndMap';
import OsmAndDrawer from './OsmAndDrawer';
import { Outlet } from 'react-router-dom';
import HeaderInfo from './header/HeaderInfo';
import InformationBlock from '../../infoblock/components/InformationBlock';
import AppContext from '../../context/AppContext';
import GeneralPanelButtons from './GeneralPanelButtons';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { GlobalConfirmationDialog } from '../../dialogs/GlobalConfirmationDialog';

const OsmAndMapFrame = () => {
    const ctx = useContext(AppContext);

    const MOBILE_SCREEN_SIZE = 1000;
    const MAIN_MENU_OPEN_SCREEN_SIZE = 1200;
    const MAIN_MENU_SIZE = 320;

    const [mainMenuOpen, setMainMenuOpen] = useState(false);
    const [mainMenuWidth, setMainMenuWidth] = useState(0);
    const [showInfoBlock, setShowInfoBlock] = useState(false);
    const [infoBlockOpen, setInfoBlockOpen] = useState(true);
    const [clearState, setClearState] = useState(false);
    const [resizing, setResizing] = useState(false);
    const [drawerRightHeight, setDrawerRightHeight] = useState(0);
    const [mobile, setMobile] = useState(false);
    const [width, height] = useWindowSize();

    const toggleMainMenu = () => {
        setMainMenuOpen(!mainMenuOpen);
    };

    // screen version
    useEffect(() => {
        setMobile(!!(width && width < MOBILE_SCREEN_SIZE));
        setMainMenuOpen(!!(width && width >= MAIN_MENU_OPEN_SCREEN_SIZE));
    }, [width]);

    // main menu size
    useEffect(() => {
        if (mainMenuOpen && !mobile) {
            setMainMenuWidth(MAIN_MENU_SIZE);
        } else {
            setMainMenuWidth(0);
        }
    }, [mainMenuOpen]);

    return (
        <>
            <div>
                <Box
                    sx={{
                        width: { xs: `calc(100%)` },
                        mr: ctx.infoBlockWidth,
                    }}
                >
                    <Box>
                        <AppBar position="static">
                            <Toolbar variant="dense">
                                <IconButton onClick={toggleMainMenu} edge="start" sx={{ mr: 2 }}>
                                    <Menu />
                                </IconButton>
                                <HeaderInfo mainMenuWidth={mainMenuWidth} />
                            </Toolbar>
                        </AppBar>
                    </Box>
                    {ctx.routingErrorMsg && (
                        <Alert severity="warning" onClose={() => ctx.setRoutingErrorMsg(null)}>
                            {ctx.routingErrorMsg}
                        </Alert>
                    )}
                    <GlobalConfirmationDialog />
                    <OsmAndMap
                        mobile={mobile}
                        drawerRightHeight={drawerRightHeight}
                        mainMenuWidth={mainMenuWidth}
                        drawerRightWidth={ctx.infoBlockWidth}
                    />
                    <GeneralPanelButtons
                        mainMenuWidth={mainMenuWidth}
                        showInfoBlock={showInfoBlock}
                        setShowInfoBlock={setShowInfoBlock}
                        infoBlockOpen={infoBlockOpen}
                        setInfoBlockOpen={setInfoBlockOpen}
                        clearState={clearState}
                        mobile={mobile}
                    />
                </Box>
            </div>
            {!mobile && (
                <Drawer
                    variant="temporary"
                    PaperProps={{
                        sx: {
                            width: ctx.infoBlockWidth,
                        },
                    }}
                    open={true}
                    hideBackdrop
                    sx={{ mr: 500 }}
                    anchor={'right'}
                    disableEnforceFocus
                >
                    <InformationBlock
                        mobile={mobile}
                        infoBlockOpen={infoBlockOpen}
                        showInfoBlock={showInfoBlock}
                        setShowInfoBlock={setShowInfoBlock}
                        setClearState={setClearState}
                        heightScreen={height}
                    />
                </Drawer>
            )}
            {mobile && (
                <Drawer
                    variant="temporary"
                    PaperProps={{
                        sx: {
                            height: `${drawerRightHeight}px`,
                            overflow: 'visible',
                        },
                    }}
                    sx={{ mt: 500 }}
                    hideBackdrop
                    open={true}
                    anchor={'bottom'}
                    disableEnforceFocus
                >
                    <InformationBlock
                        mobile={mobile}
                        infoBlockOpen={infoBlockOpen}
                        showInfoBlock={showInfoBlock}
                        setShowInfoBlock={setShowInfoBlock}
                        setClearState={setClearState}
                        heightScreen={height}
                        resizing={resizing}
                        setResizing={setResizing}
                        setDrawerHeight={setDrawerRightHeight}
                        drawerHeight={drawerRightHeight}
                    />
                </Drawer>
            )}
            {
                <Drawer
                    variant="persistent"
                    open={mainMenuOpen}
                    onClose={toggleMainMenu}
                    hideBackdrop={!mobile}
                    PaperProps={{
                        sx: {
                            boxSizing: 'border-box',
                            width: MAIN_MENU_SIZE,
                        },
                    }}
                    sx={{ ml: 500 }}
                >
                    <OsmAndDrawer toggleDrawer={toggleMainMenu} />
                </Drawer>
            }
            <Outlet />
        </>
    );
};

export default OsmAndMapFrame;
