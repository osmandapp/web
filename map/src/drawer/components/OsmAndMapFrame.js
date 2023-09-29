import React, { useContext, useEffect, useState } from 'react';
import { Drawer, Toolbar, Box, Alert, SvgIcon, Button } from '@mui/material';
import { AppBar } from '@mui/material';
import OsmAndMap from '../../map/components/OsmAndMap';
import OsmAndDrawer from './OsmAndDrawer';
import { Outlet, Link } from 'react-router-dom';
import InformationBlock from '../../infoblock/components/InformationBlock';
import AppContext from '../../context/AppContext';
import GeneralPanelButtons from './GeneralPanelButtons';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { GlobalConfirmationDialog } from '../../dialogs/GlobalConfirmationDialog';
import { ReactComponent as Logo } from '../../static/logo.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    logo: {
        width: '32px !important',
        height: '32px !important',
        marginLeft: -8,
        marginTop: -4,
    },
    name: {
        color: '#1c1e21',
        fontSize: '16px !important',
        fontWeight: '700 !important',
        fontFamily: 'system-ui, -apple-system, "Segoe UI" !important',
        marginLeft: '8px !important',
        marginTop: '-3px !important',
        paddingRight: '6px',
        letterSpacing: '0px !important',
    },
    menu: {
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        marginTop: -4,
        marginLeft: 10,
    },
    menuItem: {
        color: '#1c1e21 !important',
        fontWeight: '500px !important',
        fontSize: '16px !important',
        textTransform: 'none !important',
        fontFamily: 'system-ui, -apple-system, "Segoe UI" !important',
        letterSpacing: '0px !important',
        paddingRight: '12px !important',
        paddingLeft: '12px !important',
        minWidth: '10px !important',
        '&:hover': {
            color: '#237bff !important',
            backgroundColor: '#ffffff !important',
            boxShadow: 'none !important',
        },
    },
});

const pages = [
    {
        name: 'Docs',
        url: '/docs/intro',
    },
    {
        name: 'Blog',
        url: '/blog',
    },
    {
        name: '💳 Purchases',
        url: '/docs/user/purchases',
    },
    {
        name: '🌍 Map',
        url: '/map',
    },
    {
        name: '🚵‍ Join us',
        url: '/docs/hiring',
    },
];

const OsmAndMapFrame = () => {
    const ctx = useContext(AppContext);
    const classes = useStyles();

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
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    height: '60px',
                    background: '#ffffff',
                }}
            >
                <Toolbar>
                    <SvgIcon component={Logo} inheritViewBox className={classes.logo} />
                    <Button
                        target="_blank"
                        component={Link}
                        to={'/'}
                        className={classes.menuItem}
                        sx={{ fontWeight: '700 !important', ml: -0.5, mt: -0.5, mr: -0.77 }}
                    >
                        OsmAnd
                    </Button>
                    <Box className={classes.menu}>
                        {pages.map((page) => (
                            <Button
                                target="_blank"
                                component={Link}
                                to={page.url}
                                key={page.name}
                                className={classes.menuItem}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
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
