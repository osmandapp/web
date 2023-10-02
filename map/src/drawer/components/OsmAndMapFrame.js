import React, { useContext, useEffect, useState } from 'react';
import { Drawer, Toolbar, Box, Alert } from '@mui/material';
import OsmAndMap from '../../map/components/OsmAndMap';
import OsmAndDrawer from './OsmAndDrawer';
import { Outlet } from 'react-router-dom';
import InformationBlock from '../../infoblock/components/InformationBlock';
import AppContext from '../../context/AppContext';
import GeneralPanelButtons from './GeneralPanelButtons';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { GlobalConfirmationDialog } from '../../dialogs/GlobalConfirmationDialog';
import HeaderMenu from './header/HeaderMenu';

const OsmAndMapFrame = () => {
    const ctx = useContext(AppContext);

    const MAIN_MENU_SIZE = 320;

    const [showInfoBlock, setShowInfoBlock] = useState(false);
    const [infoBlockOpen, setInfoBlockOpen] = useState(true);
    const [clearState, setClearState] = useState(false);
    const [resizing, setResizing] = useState(false);
    const [drawerRightHeight, setDrawerRightHeight] = useState(0);
    const [mobile, setMobile] = useState(false);
    const [width, height] = useWindowSize();

    const toggleMainMenu = () => {};

    // screen version
    useEffect(() => {
        setMobile(false);
    }, [width]);

    return (
        <Box sx={{ display: 'flex' }}>
            <HeaderMenu />
            <Box
                sx={{
                    width: { xs: `calc(100%)` },
                    mr: ctx.infoBlockWidth,
                }}
            >
                {ctx.routingErrorMsg && (
                    <Alert severity="warning" onClose={() => ctx.setRoutingErrorMsg(null)}>
                        {ctx.routingErrorMsg}
                    </Alert>
                )}
                <GlobalConfirmationDialog />
                <OsmAndMap
                    mobile={mobile}
                    drawerRightHeight={drawerRightHeight}
                    mainMenuWidth={MAIN_MENU_SIZE}
                    drawerRightWidth={ctx.infoBlockWidth}
                />
                <GeneralPanelButtons
                    mainMenuWidth={MAIN_MENU_SIZE}
                    showInfoBlock={showInfoBlock}
                    setShowInfoBlock={setShowInfoBlock}
                    infoBlockOpen={infoBlockOpen}
                    setInfoBlockOpen={setInfoBlockOpen}
                    clearState={clearState}
                    mobile={mobile}
                />
            </Box>
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
                    open={true}
                    PaperProps={{
                        sx: {
                            boxSizing: 'border-box',
                            width: MAIN_MENU_SIZE,
                        },
                    }}
                    sx={{ ml: 500 }}
                >
                    <Toolbar />
                    <OsmAndDrawer toggleDrawer={toggleMainMenu} />
                </Drawer>
            }
            <Outlet />
        </Box>
    );
};

export default OsmAndMapFrame;
