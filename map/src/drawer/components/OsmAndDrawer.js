import React, { useContext } from 'react';
import { Button, Toolbar } from '@mui/material';
import { Divider, MenuList, Box, IconButton } from '@mui/material';
import { ArrowBack, Person } from '@mui/icons-material';
import AppContext from '../../context/AppContext';
import Weather from './weather/Weather';
import TracksMenu from './tracks/TracksMenu';
import MapStyle from './mapstyle/MapStyle';
import RouteMenu from './route/RouteMenu';
import { useNavigate } from 'react-router-dom';
import FavoritesMenu from './favorite/FavoritesMenu';
import SearchResultMenu from './search/SearchResultMenu';
import { makeStyles } from '@material-ui/core/styles';
import PlanRouteMenu from './PlanRouteMenu';

const useStyles = makeStyles({
    btn: {
        width: '100%',
        justifyContent: 'left !important',
        wordWrap: 'break-word',
        display: 'block !important',
        textOverflow: 'ellipsis !important',
        overflow: 'hidden !important',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        fontSize: '0.80rem !important',
        textTransform: 'none !important',
    },
});

export default function OsmAndDrawer({ toggleDrawer }) {
    const ctx = useContext(AppContext);
    const classes = useStyles();

    const navigate = useNavigate();
    const openLogin = () => {
        navigate('/map/loginForm' + window.location.search + window.location.hash);
    };

    return (
        <>
            <Toolbar variant="dense">
                <>
                    <IconButton
                        id="se-hide-main-menu"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                    >
                        <ArrowBack />
                    </IconButton>
                    {ctx.loginUser && ctx.loginUser != 'INIT' ? (
                        <Button id="se-logout-button" className={classes.btn} onClick={openLogin}>
                            {ctx.loginUser}
                        </Button>
                    ) : (
                        <Button id="se-login-button" onClick={openLogin}>
                            LOGIN
                        </Button>
                    )}
                    <Box>
                        <IconButton size="large" onClick={openLogin} color="inherit">
                            <Person />
                        </IconButton>
                    </Box>
                </>
            </Toolbar>
            <Divider />
            <MenuList>
                <Weather />
                <TracksMenu />
                {ctx.favorites?.groups?.length > 0 && <FavoritesMenu />}
                {ctx.develFeatures && <MapStyle />}
                <RouteMenu />
                <PlanRouteMenu />
                <SearchResultMenu />
            </MenuList>
        </>
    );
}
