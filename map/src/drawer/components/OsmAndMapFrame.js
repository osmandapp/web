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

    const [drawerLeftOpen, setDrawerLeftOpen] = useState(false);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [hideContextMenu, setHideContextMenu] = useState(false);
    const [clearState, setClearState] = useState(false);
    const [resizing, setResizing] = useState(false);
    const [drawerRightHeight, setDrawerRightHeight] = useState(0);
    const [drawerRightWidth, setDrawerRightWidth] = useState(0);
    const [mobile, setMobile] = useState(false);
    const [width, height] = useWindowSize();

    const toggleLeftDrawer = () => {
        let res = !drawerLeftOpen;
        setDrawerLeftOpen(res);
    };

    const toggleContextMenu = () => {
        setHideContextMenu(!hideContextMenu);
    };

    let leftDrawerWidth = mobile ? 0 : LEFT_DRAWER_SIZE;

    useEffect(() => {
        if (width && width < MOBILE_SCREEN_SIZE) {
            leftDrawerWidth = 0;
            setMobile(true);
        } else {
            if (showContextMenu && !hideContextMenu) {
                leftDrawerWidth = LEFT_DRAWER_SIZE;
            }
            setMobile(false);
        }
    }, [width, hideContextMenu]);

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
                                {mobile && (
                                    <IconButton onClick={toggleLeftDrawer} edge="start" sx={{ mr: 2 }}>
                                        <Menu />
                                    </IconButton>
                                )}
                                <HeaderInfo leftDrawerWidth={leftDrawerWidth} />
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
                        leftDrawerWidth={leftDrawerWidth}
                        drawerRightWidth={drawerRightWidth}
                    />
                    <GeneralPanelButtons
                        drawerWidth={leftDrawerWidth}
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
            {mobile && (
                <Drawer
                    variant="temporary"
                    open={drawerLeftOpen}
                    onClose={toggleLeftDrawer}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: LEFT_DRAWER_SIZE },
                    }}
                >
                    <OsmAndDrawer mobile={mobile} toggleDrawer={toggleLeftDrawer} />
                </Drawer>
            )}
            {!mobile && (
                <Drawer
                    variant="permanent"
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: LEFT_DRAWER_SIZE },
                    }}
                    open={drawerLeftOpen}
                >
                    <OsmAndDrawer mobile={mobile} />
                </Drawer>
            )}
            <Outlet />
        </>
    );
};

export default OsmAndMapFrame;
