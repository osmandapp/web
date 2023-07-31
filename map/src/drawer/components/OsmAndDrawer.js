import React, { useContext } from 'react';
import { Toolbar, Typography } from '@mui/material';
import { Divider, MenuItem, ListItemIcon, MenuList, Box, IconButton } from '@mui/material';
import { ArrowBack, Person } from '@mui/icons-material';
import AppContext from '../../context/AppContext';
import Weather from './weather/Weather';
import TracksMenu from './tracks/TracksMenu';
import MapStyle from './mapstyle/MapStyle';
import RouteMenu from './route/RouteMenu';
import { useNavigate } from 'react-router-dom';
import FavoritesMenu from './favorite/FavoritesMenu';
import SearchResultMenu from './search/SearchResultMenu';

export default function OsmAndDrawer({ mobile, toggleDrawer }) {
    const ctx = useContext(AppContext);

    const navigate = useNavigate();
    const openLogin = () => {
        navigate('/map/loginForm' + window.location.search + window.location.hash);
    };

    return (
        <>
            <Toolbar variant="dense">
                {mobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer}
                        >
                            <ArrowBack />
                        </IconButton>
                        {ctx.loginUser ? (
                            <Typography onClick={openLogin} color="inherit">
                                {ctx.loginUser}
                            </Typography>
                        ) : (
                            <Typography onClick={openLogin} variant="h6" color="inherit">
                                Login
                            </Typography>
                        )}
                        <Box>
                            <IconButton size="large" onClick={openLogin} color="inherit">
                                <Person />
                            </IconButton>
                        </Box>
                    </>
                ) : (
                    <MenuItem onClick={openLogin}>
                        <ListItemIcon>
                            <Person fontSize="small" />
                        </ListItemIcon>
                        {ctx.loginUser ? (
                            <Typography color="inherit">{ctx.loginUser}</Typography>
                        ) : (
                            <Typography variant="h6" color="inherit">
                                Login
                            </Typography>
                        )}
                    </MenuItem>
                )}
            </Toolbar>
            <Divider />
            <MenuList>
                <Weather />
                <TracksMenu />
                <FavoritesMenu />
                {ctx.develFeatures && <MapStyle />}
                <RouteMenu />
                <SearchResultMenu />
            </MenuList>
        </>
    );
}
