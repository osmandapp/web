import React, { useContext, useState } from 'react';
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
import { isMobile } from 'react-device-detect';

const OsmAndMapFrame = () => {
    const ctx = useContext(AppContext);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [hideContextMenu, setHideContextMenu] = useState(false);
    const [clearState, setClearState] = useState(false);
    const [resizing, setResizing] = useState(false);
    const [drawerHeight, setDrawerHeight] = useState(45);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const toggleContextMenu = () => {
        setHideContextMenu(!hideContextMenu);
    };

    const drawerWidth = 320;

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Box
                    sx={{
                        width: { sm: `calc(100%)`, xs: `calc(100%)` },
                        ml: { md: `${drawerWidth}px` },
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar variant="dense">
                                <IconButton onClick={toggleDrawer} edge="start" sx={{ mr: 2, display: { md: 'none' } }}>
                                    <Menu />
                                </IconButton>
                                <HeaderInfo />
                                {ctx.currentObjectType && hideContextMenu && !isMobile && (
                                    <IconButton onClick={toggleContextMenu} edge="start" sx={{ ml: 2 }}>
                                        <KeyboardDoubleArrowLeft />
                                    </IconButton>
                                )}
                                {ctx.currentObjectType && !hideContextMenu && !isMobile && (
                                    <IconButton onClick={toggleContextMenu} edge="start" sx={{ ml: 2 }}>
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
                    <OsmAndMap showZoom={!showContextMenu} />
                    <GeneralPanelButtons
                        drawerWidth={isMobile ? 0 : drawerWidth}
                        showContextMenu={showContextMenu}
                        setShowContextMenu={setShowContextMenu}
                        clearState={clearState}
                    />
                </Box>
                {!isMobile && (
                    <InformationBlock
                        hideContextMenu={hideContextMenu}
                        showContextMenu={showContextMenu}
                        setShowContextMenu={setShowContextMenu}
                        setClearState={setClearState}
                    />
                )}
            </div>
            {isMobile && (
                <Drawer
                    variant="temporary"
                    PaperProps={{
                        sx: {
                            height: `${drawerHeight}px`,
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
                        hideContextMenu={hideContextMenu}
                        showContextMenu={showContextMenu}
                        setShowContextMenu={setShowContextMenu}
                        setClearState={setClearState}
                        resizing={resizing}
                        setResizing={setResizing}
                        setDrawerHeight={setDrawerHeight}
                        drawerHeight={drawerHeight}
                    />
                </Drawer>
            )}
            {isMobile && (
                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={toggleDrawer}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <OsmAndDrawer toggleDrawer={toggleDrawer} />
                </Drawer>
            )}
            {!isMobile && (
                <Drawer
                    variant="permanent"
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    <OsmAndDrawer />
                </Drawer>
            )}
            <Outlet />
        </>
    );
};

export default OsmAndMapFrame;
