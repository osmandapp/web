import React, { useContext, useEffect } from 'react';
import { Drawer, ListItemButton, ListItemIcon, ListItemText, MenuItem, SvgIcon, Toolbar } from '@mui/material';
import { Divider, Box } from '@mui/material';
import { Menu, Person, Map } from '@mui/icons-material';
import AppContext, {
    OBJECT_TYPE_CLOUD_TRACK,
    OBJECT_TYPE_FAVORITE,
    OBJECT_TYPE_LOCAL_TRACK,
    OBJECT_TYPE_ROUTE_TRACK,
    OBJECT_TYPE_WEATHER,
} from '../context/AppContext';
import TracksMenu from './tracks/TracksMenu';
import MapStyle from './mapstyle/MapStyle';
import RouteMenu from './route/RouteMenu';
import { useNavigate } from 'react-router-dom';
import FavoritesMenu from './favorite/FavoritesMenu';
import PlanRouteMenu from './planroute/PlanRouteMenu';
import { ReactComponent as FavoritesIcon } from '../assets/menu/ic_action_favorite.svg';
import { ReactComponent as WeatherIcon } from '../assets/menu/ic_action_umbrella.svg';
import { ReactComponent as TracksIcon } from '../assets/menu/ic_action_track.svg';
import { ReactComponent as NavigationIcon } from '../assets/menu/ic_action_navigation.svg';
import { ReactComponent as PlanRouteIcon } from '../assets/menu/ic_action_plan_route.svg';
import InformationBlock from '../infoblock/components/InformationBlock';
import Weather from './weather/Weather';

export default function MainMenu({
    size,
    infoSize,
    openMainMenu,
    setOpenMainMenu,
    menuInfo,
    setMenuInfo,
    infoBlockOpen,
    showInfoBlock,
    setShowInfoBlock,
    setClearState,
}) {
    const ctx = useContext(AppContext);

    const handleDrawer = () => {
        setOpenMainMenu(!openMainMenu);
        setMenuInfo(null);
    };

    const navigate = useNavigate();
    const openLogin = () => {
        navigate('/map/loginForm' + window.location.search + window.location.hash);
    };

    const items = [
        {
            name: 'Weather',
            icon: WeatherIcon,
            component: <Weather />,
            type: OBJECT_TYPE_WEATHER,
            show: true,
        },
        {
            name: 'Tracks',
            icon: TracksIcon,
            component: <TracksMenu />,
            type: OBJECT_TYPE_LOCAL_TRACK || OBJECT_TYPE_CLOUD_TRACK,
            show: true,
        },
        {
            name: 'Favorites',
            icon: FavoritesIcon,
            component: <FavoritesMenu />,
            type: OBJECT_TYPE_FAVORITE,
            show: ctx.favorites?.groups?.length > 0,
        },
        {
            name: 'Navigation',
            icon: NavigationIcon,
            component: <RouteMenu />,
            type: OBJECT_TYPE_ROUTE_TRACK,
            show: true,
        },
        {
            name: 'Map Style',
            icon: Map,
            component: <MapStyle />,
            type: null,
            show: ctx.develFeatures,
        },
        {
            name: 'Plan a route',
            icon: PlanRouteIcon,
            component: <PlanRouteMenu />,
            type: null,
            show: true,
        },
    ];

    //open main menu if infoblock was opened
    useEffect(() => {
        if (showInfoBlock && !menuInfo) {
            setOpenMainMenu(true);
            const currentMenu = items.find((item) => item.type === ctx.currentObjectType);
            if (currentMenu) {
                setMenuInfo(currentMenu.component);
            }
        }
    }, [showInfoBlock]);

    //open main menu if currentObjectType was changed
    useEffect(() => {
        if (ctx.currentObjectType) {
            if (menuInfo?.type.name !== ctx.currentObjectType) {
                const currentMenu = items.find((item) => item.type === ctx.currentObjectType);
                if (currentMenu) {
                    setMenuInfo(currentMenu.component);
                }
            }
        }
    }, [ctx.currentObjectType]);

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                PaperProps={{
                    sx: {
                        boxSizing: 'border-box',
                        width: size,
                        overflow: 'hidden',
                    },
                }}
                open={openMainMenu}
            >
                <Toolbar />
                <MenuItem
                    key={'Profile'}
                    onClick={() => {
                        handleDrawer();
                        openLogin();
                    }}
                >
                    <ListItemButton
                        sx={{
                            minWidth: '40px',
                            maxWidth: '40px',
                            ml: '-5px',
                            minHeight: '77px',
                            justifyContent: openMainMenu ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                justifyContent: 'center',
                                ml: openMainMenu ? '-14px' : 0,
                            }}
                        >
                            <Person />
                        </ListItemIcon>
                        {openMainMenu && (
                            <div style={{}}>
                                <ListItemText
                                    sx={{
                                        opacity: openMainMenu ? 1 : 0,
                                        pl: openMainMenu ? 1 : 0,
                                        fontSize: 14,
                                        color: '#237bff',
                                        textTransform: 'none !important',
                                    }}
                                >
                                    {ctx.loginUser && ctx.loginUser !== 'INIT' ? 'Account' : 'Login'}
                                </ListItemText>
                                {ctx.loginUser && ctx.loginUser !== 'INIT' && (
                                    <ListItemText
                                        sx={{
                                            opacity: openMainMenu ? 1 : 0,
                                            pl: openMainMenu ? 1 : 0,
                                            fontSize: 14,
                                        }}
                                    >
                                        {ctx.loginUser}
                                    </ListItemText>
                                )}
                            </div>
                        )}
                    </ListItemButton>
                </MenuItem>
                <Divider />
                {items.map(
                    (item, index) =>
                        item.show && (
                            <MenuItem
                                key={index}
                                onClick={() => {
                                    if (openMainMenu) {
                                        setShowInfoBlock(false);
                                        setMenuInfo(
                                            menuInfo?.type.name !== item?.component?.type.name ? item.component : null
                                        );
                                    } else {
                                        setOpenMainMenu(true);
                                        setMenuInfo(item.component);
                                    }
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        minWidth: '40px',
                                        maxWidth: '40px',
                                        ml: '-5px',
                                        justifyContent: openMainMenu ? 'initial' : 'center',
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            justifyContent: 'center',
                                            ml: openMainMenu ? '-14px' : 0,
                                        }}
                                    >
                                        <SvgIcon component={item.icon} inheritViewBox />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.name}
                                        sx={{
                                            opacity: openMainMenu ? 1 : 0,
                                            pl: openMainMenu ? 1 : 0,
                                            fontSize: 14,
                                        }}
                                    />
                                </ListItemButton>
                            </MenuItem>
                        )
                )}
                <div style={{ position: 'absolute', bottom: 0, right: 0, left: 0 }}>
                    <Divider />
                    <div style={{ display: 'flex', justifyContent: 'center', height: '77px' }}>
                        <MenuItem key={'Menu'}>
                            <ListItemButton onClick={handleDrawer}>
                                <div style={{ alignItems: 'center' }}>
                                    <ListItemIcon sx={{ ml: '13px' }}>
                                        <Menu />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: '5px', color: '#237bff', fontWeight: '500 !important' }}>
                                        Menu
                                    </ListItemText>
                                </div>
                            </ListItemButton>
                        </MenuItem>
                    </div>
                </div>
            </Drawer>
            <Drawer
                variant="temporary"
                PaperProps={{
                    sx: {
                        width: infoSize,
                        ml: size,
                    },
                }}
                sx={{ left: 'auto !important' }}
                open={true}
                hideBackdrop
            >
                <Toolbar />
                {!showInfoBlock && menuInfo}
                <InformationBlock
                    infoBlockOpen={infoBlockOpen}
                    showInfoBlock={showInfoBlock}
                    setShowInfoBlock={setShowInfoBlock}
                    setClearState={setClearState}
                />
            </Drawer>
        </Box>
    );
}
