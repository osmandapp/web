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
                                {ctx.currentObjectType && hideContextMenu && (
                                    <IconButton
                                        onClick={toggleContextMenu}
                                        edge="start"
                                        sx={{ ml: 2, display: { xs: 'none', md: 'block' } }}
                                    >
                                        <KeyboardDoubleArrowLeft />
                                    </IconButton>
                                )}
                                {ctx.currentObjectType && !hideContextMenu && (
                                    <IconButton
                                        onClick={toggleContextMenu}
                                        edge="start"
                                        sx={{ ml: 2, display: { xs: 'none', md: 'block' } }}
                                    >
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
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'block' },
                        }}
                    >
                        <GeneralPanelButtons
                            drawerWidth={drawerWidth}
                            showContextMenu={showContextMenu}
                            setShowContextMenu={setShowContextMenu}
                            clearState={clearState}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        <GeneralPanelButtons
                            drawerWidth={0}
                            showContextMenu={showContextMenu}
                            setShowContextMenu={setShowContextMenu}
                            clearState={clearState}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'block' },
                    }}
                >
                    <InformationBlock
                        mobile={false}
                        hideContextMenu={hideContextMenu}
                        showContextMenu={showContextMenu}
                        setShowContextMenu={setShowContextMenu}
                        setClearState={setClearState}
                    />
                </Box>
            </div>
            <Drawer
                variant="temporary"
                PaperProps={{
                    sx: {
                        height: `${drawerHeight}px`,
                        overflow: 'visible',
                    },
                }}
                sx={{ mt: 500, display: { xs: 'block', md: 'none' } }}
                hideBackdrop
                open={true}
                anchor={'bottom'}
            >
                <InformationBlock
                    mobile={true}
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
            <Drawer
                variant="temporary"
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <OsmAndDrawer mobile={true} toggleDrawer={toggleDrawer} />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                <OsmAndDrawer mobile={false} />
            </Drawer>
            <Outlet />
        </>
    );
};

export default OsmAndMapFrame;
