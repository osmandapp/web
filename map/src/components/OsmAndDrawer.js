import React, { useContext } from 'react';
import { Toolbar, Typography } from "@mui/material";
import {
    Divider, MenuItem, ListItemIcon, MenuList, Box, IconButton
} from "@mui/material";
import { ArrowBack, Person } from '@mui/icons-material';
import AppContext from "../context/AppContext"
import Weather from "./drawer/Weather"
import CloudGpx from "./drawer/CloudGpx"
import LocalGpx from "./drawer/LocalGpx"
import MapStyle from "./drawer/MapStyle"
import RouteMenu from "./drawer/RouteMenu"
import { useNavigate } from "react-router-dom";
import Favorites from "./drawer/Favorites";



export default function OsmAndDrawer({ mobile, toggleDrawer }) {
    const ctx = useContext(AppContext);
    
    // ctx.setAppFile(ctx.gpxFiles.localInfoSummary);
    const navigate = useNavigate();
    const openLogin = () => {
        navigate('/map/loginForm');
    }
    return (<>
        <Toolbar variant="dense">
            {mobile ?
                <>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu"
                        sx={{ mr: 2 }} onClick={toggleDrawer}>
                        <ArrowBack />
                    </IconButton>
                    {ctx.loginUser ? <Typography color="inherit">{ctx.loginUser}</Typography> :
                        <Typography variant="h6" color="inherit">Login</Typography>}
                    <Box>
                        <IconButton size="large" onClick={openLogin} color="inherit">
                            <Person />
                        </IconButton>
                    </Box>
                    
                </>
                :
                <MenuItem onClick={openLogin}>
                    <ListItemIcon>
                        <Person fontSize="small" />
                    </ListItemIcon>
                    {ctx.loginUser ? <Typography color="inherit">{ctx.loginUser}</Typography> :
                        <Typography variant="h6" color="inherit">Login</Typography>}
                </MenuItem>

            }
        </Toolbar>
        <Divider />
        <MenuList>
            <Weather />
            <CloudGpx />
            <LocalGpx />
            <Favorites />
            <MapStyle />
            <RouteMenu />
        </MenuList>
    </>
    );
}