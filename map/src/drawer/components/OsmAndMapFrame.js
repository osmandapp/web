import React, { useContext, useEffect, useState } from 'react';
import { Drawer, Toolbar, Box, Alert } from '@mui/material';
import { IconButton, AppBar } from '@mui/material';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, Menu } from '@mui/icons-material';
import OsmAndMap from '../../map/components/OsmAndMap';
import OsmAndDrawer from './OsmAndDrawer';
import { Outlet } from 'react-router-dom';
import HeaderInfo from './header/HeaderInfo';
import InformationBlock from '../../infoblock/components/InformationBlock';
import AppContext from '../../context/AppContext';
import GeneralPanelButtons from './GeneralPanelButtons';
import { useWindowSize } from '../../util/hooks/useWindowSize';

const OsmAndMapFrame = () => {
    const ctx = useContext(AppContext);

    const MOBILE_SCREEN_SIZE = 900;
    const LEFT_DRAWER_SIZE = 320;

    const [mainMenuOpen, setMainMenuOpen] = useState(false);
    const [mainMenuWidth, setMainMenuWidth] = useState(0);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [hideContextMenu, setHideContextMenu] = useState(false);
    const [clearState, setClearState] = useState(false);
    const [resizing, setResizing] = useState(false);
    const [drawerRightHeight, setDrawerRightHeight] = useState(0);
    const [drawerRightWidth, setDrawerRightWidth] = useState(0);
    const [mobile, setMobile] = useState(false);
    const [width, height] = useWindowSize();

    const toggleLeftDrawer = () => {
        setMainMenuOpen(!mainMenuOpen);
    };

    const toggleContextMenu = () => {
        setHideContextMenu(!hideContextMenu);
    };

    //screen version
    useEffect(() => {
        if (width && width < MOBILE_SCREEN_SIZE) {
            setMobile(true);
            setMainMenuOpen(false);
        } else {
            setMobile(false);
            setMainMenuOpen(true);
        }
    }, [width, hideContextMenu]);

    //main menu size
    useEffect(() => {
        if (mainMenuOpen && !mobile) {
            setMainMenuWidth(LEFT_DRAWER_SIZE);
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
                        mr: drawerRightWidth,
                    }}
                >
                    <Box>
                        <AppBar position="static">
                            <Toolbar variant="dense">
                                <IconButton onClick={toggleLeftDrawer} edge="start" sx={{ mr: 2 }}>
                                    <Menu />
                                </IconButton>
                                <HeaderInfo mainMenuWidth={mainMenuWidth} />
                                {ctx.currentObjectType && hideContextMenu && !mobile && (
                                    <IconButton sx={{ ml: '5px' }} onClick={toggleContextMenu} edge="start">
                                        <KeyboardDoubleArrowLeft />
                                    </IconButton>
                                )}
                                {ctx.currentObjectType && !hideContextMenu && !mobile && (
                                    <IconButton sx={{ ml: '5px' }} onClick={toggleContextMenu} edge="start">
                                        <KeyboardDoubleArrowRight />
                                    </IconButton>
                                )}
                            </Toolbar>
                        </AppBar>
                    </Box>
                    {ctx.routingErrorMsg && (
                        <Alert severity="warning" onClose={() => ctx.setRoutingErrorMsg(null)}>
                            {ctx.routingErrorMsg}
                        </Alert>
                    )}
                    <OsmAndMap
                        mobile={mobile}
                        drawerRightHeight={drawerRightHeight}
                        mainMenuWidth={mainMenuWidth}
                        drawerRightWidth={drawerRightWidth}
                    />
                    <GeneralPanelButtons
                        mainMenuWidth={mainMenuWidth}
                        showContextMenu={showContextMenu}
                        setShowContextMenu={setShowContextMenu}
                        clearState={clearState}
                    />
                </Box>
            </div>
            {!mobile && (
                <Drawer
                    variant="temporary"
                    PaperProps={{
                        sx: {
                            width: `${drawerRightWidth}`,
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
                        setDrawerWidth={setDrawerRightWidth}
                        hideContextMenu={hideContextMenu}
                        showContextMenu={showContextMenu}
                        setShowContextMenu={setShowContextMenu}
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
                        setDrawerWidth={setDrawerRightWidth}
                        hideContextMenu={hideContextMenu}
                        showContextMenu={showContextMenu}
                        setShowContextMenu={setShowContextMenu}
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
                    variant="temporary"
                    open={mainMenuOpen}
                    onClose={toggleLeftDrawer}
                    hideBackdrop={!mobile}
                    disableEnforceFocus
                    PaperProps={{
                        sx: {
                            boxSizing: 'border-box',
                            width: LEFT_DRAWER_SIZE,
                        },
                    }}
                    sx={{ ml: 500 }}
                >
                    <OsmAndDrawer toggleDrawer={toggleLeftDrawer} />
                </Drawer>
            }
            <Outlet />
        </>
    );
};

export default OsmAndMapFrame;
