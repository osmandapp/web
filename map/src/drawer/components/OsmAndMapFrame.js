import React, {useContext, useState} from 'react';
import {Drawer, Toolbar, Box, SnackbarContent, LinearProgress, Button} from "@mui/material";
import {
    IconButton, AppBar
} from "@mui/material";
import {Close, Menu} from '@mui/icons-material';
import OsmAndMap from '../../map/components/OsmAndMap';
import OsmAndDrawer from './OsmAndDrawer';
import {Outlet, useNavigate} from 'react-router-dom';
import HeaderInfo from "./header/HeaderInfo";
import MapContextMenu from "../../contextmenu/components/MapContextMenu";
import AppContext from "../../context/AppContext";

const OsmAndMapFrame = () => {
    const ctx = useContext(AppContext);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const drawerWidth = 320;

    return (
        <>
            <Box sx={{
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`},
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton onClick={toggleDrawer}
                                    edge="start"
                                    sx={{mr: 2, display: {sm: "none"}}}>
                            <Menu/>
                        </IconButton>
                        <HeaderInfo/>
                    </Toolbar>
                </AppBar>
                {ctx.routingErrorMsg &&
                    <SnackbarContent sx={{backgroundColor: "#1976d2", marginTop: "3px"}}
                                     message={ctx.routingErrorMsg}
                                     action={
                                         <Button key='close' onClick={() => {
                                             ctx.setRoutingErrorMsg(null);
                                         }}>
                                             <Close sx={{color: "#ffffff"}}/>
                                         </Button>
                                     }/>}
                <OsmAndMap/>
                <MapContextMenu drawerWidth={drawerWidth}/>
            </Box>
            <Drawer
                //  container={container}
                variant="temporary"
                open={drawerOpen}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                <OsmAndDrawer mobile={true} toggleDrawer={toggleDrawer}/>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: {xs: 'none', sm: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
                open>
                <OsmAndDrawer mobile={false}/>
            </Drawer>
            <Outlet/>
        </>

    );
};

export default OsmAndMapFrame;