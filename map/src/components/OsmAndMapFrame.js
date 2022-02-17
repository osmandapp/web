import React, { useState, useContext } from 'react';
import { Drawer, Toolbar, Typography, Box} from "@mui/material";
import {
    IconButton, AppBar
} from "@mui/material";
import {
    Menu
} from '@mui/icons-material';
import OsmAndMap from './OsmAndMap';
import OsmAndDrawer from './OsmAndDrawer';
import {Outlet} from 'react-router-dom';
import AppContext from "../context/AppContext";


const OsmAndMapFrame = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const drawerWidth = 320;
    const ctx = useContext(AppContext);
    return (
        <>
            <Box sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}>
                <AppBar position="static">
                    <Toolbar variant="dense" >
                        <IconButton onClick={toggleDrawer}
                            edge="start"
                            sx={{ mr: 2, display: { sm: "none" } }}>
                            <Menu />
                        </IconButton>
                        <Box sx={{ ml: 1 }}>
                            <Typography variant="h6" color="inherit" >
                                {ctx.appText ? ctx.appText : process.env.REACT_APP_WEBSITE_NAME }
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <OsmAndMap>
                </OsmAndMap>
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
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <OsmAndDrawer mobile={true} toggleDrawer={toggleDrawer}/>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open>
                <OsmAndDrawer mobile={false}/>
            </Drawer>
            <Outlet/>
        </>

    );
};

export default OsmAndMapFrame;