import React, { useContext, useState } from 'react';
import { Box, Alert } from '@mui/material';
import OsmAndMap from '../../map/components/OsmAndMap';
import MainMenu from '../../menu/MainMenu';
import { Outlet } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import GeneralPanelButtons from './panelbuttons/GeneralPanelButtons';
import { GlobalConfirmationDialog } from '../../dialogs/GlobalConfirmationDialog';
import HeaderMenu from './header/HeaderMenu';

const GlobalFrame = () => {
    const ctx = useContext(AppContext);

    const [showInfoBlock, setShowInfoBlock] = useState(false);
    const [infoBlockOpen, setInfoBlockOpen] = useState(true);
    const [clearState, setClearState] = useState(false);
    const [openMainMenu, setOpenMainMenu] = useState(false);
    const [menuInfo, setMenuInfo] = useState(null);

    let MAIN_MENU_SIZE = openMainMenu ? '240px' : '64px';
    let MENU_INFO_SIZE = menuInfo ? '424px' : '0px';

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
                <OsmAndMap mainMenuWidth={MAIN_MENU_SIZE} drawerRightWidth={ctx.infoBlockWidth} />
                <GeneralPanelButtons
                    mainMenuWidth={MAIN_MENU_SIZE}
                    menuInfoWidth={MENU_INFO_SIZE}
                    showInfoBlock={showInfoBlock}
                    setShowInfoBlock={setShowInfoBlock}
                    infoBlockOpen={infoBlockOpen}
                    setInfoBlockOpen={setInfoBlockOpen}
                    clearState={clearState}
                />
            </Box>
            <MainMenu
                size={MAIN_MENU_SIZE}
                infoSize={MENU_INFO_SIZE}
                openMainMenu={openMainMenu}
                setOpenMainMenu={setOpenMainMenu}
                menuInfo={menuInfo}
                setMenuInfo={setMenuInfo}
                infoBlockOpen={infoBlockOpen}
                showInfoBlock={showInfoBlock}
                setShowInfoBlock={setShowInfoBlock}
                setClearState={setClearState}
            />
            <Outlet />
        </Box>
    );
};

export default GlobalFrame;
