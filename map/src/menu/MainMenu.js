import React, { useContext, useEffect, useState } from 'react';
import {
    ClickAwayListener,
    Drawer,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    SvgIcon,
    Toolbar,
} from '@mui/material';
import { Divider, Box } from '@mui/material';
import { Menu, Person } from '@mui/icons-material';
import AppContext, {
    OBJECT_CONFIGURE_MAP,
    OBJECT_TYPE_CLOUD_TRACK,
    OBJECT_TYPE_FAVORITE,
    OBJECT_TYPE_LOCAL_TRACK,
    OBJECT_TYPE_NAVIGATION_TRACK,
    OBJECT_TYPE_NAVIGATION_ALONE,
    OBJECT_TYPE_WEATHER,
    OBJECT_TYPE_POI,
    OBJECT_GLOBAL_SETTINGS,
    OBJECT_SEARCH,
} from '../context/AppContext';
import TracksMenu from './tracks/TracksMenu';
import ConfigureMap from './configuremap/ConfigureMap';
import RouteMenu from './route/RouteMenu';
import { useNavigate } from 'react-router-dom';
import FavoritesMenu from './favorite/FavoritesMenu';
import PlanRouteMenu from './planroute/PlanRouteMenu';
import { ReactComponent as FavoritesIcon } from '../assets/menu/ic_action_favorite.svg';
import { ReactComponent as WeatherIcon } from '../assets/menu/ic_action_umbrella.svg';
import { ReactComponent as TracksIcon } from '../assets/menu/ic_action_track.svg';
import { ReactComponent as NavigationIcon } from '../assets/menu/ic_action_navigation.svg';
import { ReactComponent as PlanRouteIcon } from '../assets/menu/ic_action_plan_route.svg';
import { ReactComponent as ConfigureMapIcon } from '../assets/icons/ic_map_configure_map.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/ic_action_settings_outlined.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/ic_action_search_dark.svg';
import InformationBlock from '../infoblock/components/InformationBlock';
import Weather from './weather/Weather';
import styles from './mainmenu.module.css';
import TrackGroupFolder from './tracks/TrackGroupFolder';
import _ from 'lodash';
import FavoriteGroupFolder from './favorite/FavoriteGroupFolder';
import VisibleTracks from './visibletracks/VisibleTracks';
import { useTranslation } from 'react-i18next';
import SettingsMenu from './settings/SettingsMenu';
import CloudSettings from './settings/CloudSettings';
import { closeCloudSettings } from '../manager/SettingsManager';
import ExploreMenu from './search/ExploreMenu';

export default function MainMenu({
    size,
    infoSize,
    openMainMenu,
    setOpenMainMenu,
    menuInfo,
    setMenuInfo,
    showInfoBlock,
    setShowInfoBlock,
    setClearState,
    setOpenVisibleMenu,
    openVisibleMenu,
}) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [selectedType, setSelectedType] = useState(null);
    const [cloudSettings, setCloudSettings] = useState({
        changes: false,
        trash: false,
    });
    const [openCloudSettings, setOpenCloudSettings] = useState(false);

    const Z_INDEX_OPEN_MENU_INFOBLOCK = 1000;
    const Z_INDEX_LEFT_MENU = Z_INDEX_OPEN_MENU_INFOBLOCK - 1;
    const Z_INDEX_OPEN_LEFT_MENU = Z_INDEX_OPEN_MENU_INFOBLOCK + 1;

    const handleDrawer = () => {
        setOpenMainMenu(!openMainMenu);
    };

    const navigate = useNavigate();
    const openLogin = () => {
        navigate('/map/loginForm' + window.location.search + window.location.hash);
    };

    const handleClickAway = () => {
        setOpenMainMenu(false);
    };

    const items = [
        {
            name: t('shared_string_search'),
            icon: SearchIcon,
            component: <ExploreMenu />,
            type: OBJECT_SEARCH,
            show: ctx.develFeatures,
            id: 'se-show-menu-explore',
        },
        {
            name: t('configure_map'),
            icon: ConfigureMapIcon,
            component: <ConfigureMap setOpenVisibleMenu={setOpenVisibleMenu} />,
            type: OBJECT_CONFIGURE_MAP,
            show: true,
            id: 'se-show-menu-configuremap',
        },
        {
            name: t('shared_string_weather'),
            icon: WeatherIcon,
            component: <Weather />,
            type: OBJECT_TYPE_WEATHER,
            show: true,
            id: 'se-show-menu-weather',
        },
        {
            name: t('shared_string_tracks'),
            icon: TracksIcon,
            component: <TracksMenu setOpenVisibleMenu={setOpenVisibleMenu} />,
            type: OBJECT_TYPE_CLOUD_TRACK,
            show: true,
            id: 'se-show-menu-tracks',
        },
        {
            name: t('shared_string_my_favorites'),
            icon: FavoritesIcon,
            component: <FavoritesMenu />,
            type: OBJECT_TYPE_FAVORITE,
            show: true,
            id: 'se-show-menu-favorites',
        },
        {
            name: t('shared_string_navigation'),
            icon: NavigationIcon,
            component: <RouteMenu />,
            type: OBJECT_TYPE_NAVIGATION_TRACK, // shared with OBJECT_TYPE_NAVIGATION_ALONE
            show: true,
            id: 'se-show-menu-navigation',
        },
        {
            name: t('plan_route'),
            icon: PlanRouteIcon,
            component: <PlanRouteMenu />,
            type: OBJECT_TYPE_LOCAL_TRACK,
            show: true,
            id: 'se-show-menu-planroute',
        },
        {
            name: 'Poi',
            icon: FavoritesIcon,
            component: <FavoritesMenu />,
            type: OBJECT_TYPE_POI,
            show: false,
            id: 'se-show-menu-poi',
        },
        {
            name: t('shared_string_settings'),
            icon: SettingsIcon,
            component: <SettingsMenu setCloudSettings={setCloudSettings} />,
            type: OBJECT_GLOBAL_SETTINGS,
            show: true,
            id: 'se-show-menu-settings',
        },
    ];

    useEffect(() => {
        setOpenCloudSettings(cloudSettings.changes || cloudSettings.trash);
    }, [cloudSettings]);

    //open main menu if infoblock was opened
    useEffect(() => {
        if (showInfoBlock && !menuInfo) {
            selectMenuInfo();
        }
    }, [showInfoBlock]);

    useEffect(() => {
        if (openVisibleMenu) {
            setOpenVisibleMenu(false);
        }
    }, [menuInfo]);

    //open main menu if currentObjectType was changed
    useEffect(() => {
        if (ctx.currentObjectType) {
            closeCloudSettings(openCloudSettings, setOpenCloudSettings, ctx);
            if (ctx.currentObjectType === OBJECT_TYPE_NAVIGATION_ALONE) {
                // invoked by RouteService.js effect
                // activate Navigation menu even w/o currentObjectType (if no other menu was activated before)
                // use timeout to avoid GlobalFrame setMenuInfo(null) and to catch routeObject options start/end
                ctx.setCurrentObjectType(null); // get ready for next navigation changes
                setTimeout(() => {
                    if (
                        ctx.routeObject.getOption('route.points.start') &&
                        ctx.routeObject.getOption('route.points.finish')
                    ) {
                        selectMenuInfo(OBJECT_TYPE_NAVIGATION_TRACK);
                    }
                }, 100);
            } else if (menuInfo?.type.name !== ctx.currentObjectType) {
                selectMenuInfo(); // process all other object types
            }
        }
    }, [ctx.currentObjectType]);

    function selectMenuInfo(force = null) {
        const currentMenu = items.find((item) => {
            return item.type === (force ?? ctx.currentObjectType);
        });
        if (currentMenu) {
            setMenuInfo(currentMenu.component);
            setSelectedType(currentMenu.type);
        } else {
            setOpenMainMenu(true);
        }
    }

    function isSelectedMenuItem(item) {
        return menuInfo?.type.name === item?.component?.type.name;
    }

    function setMenuStyles(item) {
        let res = [];
        //close
        !openMainMenu && res.push(styles.menuItemClose);
        //open
        openMainMenu && res.push(styles.menuItemOpen);
        //selected
        isSelectedMenuItem(item) && res.push(styles.menuItemSelected);

        return res.join(' ');
    }

    function setMenuIconStyles(item) {
        let res = [];
        //close
        !openMainMenu && res.push(styles.menuIconClose);
        //open
        openMainMenu && res.push(styles.menuItemOpen);
        //selected
        isSelectedMenuItem(item) && res.push(styles.menuItemSelected);

        return res.join(' ');
    }

    function getGroup() {
        if (selectedType === OBJECT_TYPE_FAVORITE) {
            return <FavoriteGroupFolder folder={ctx.openGroups[ctx.openGroups.length - 1]} />;
        } else if (selectedType === OBJECT_TYPE_CLOUD_TRACK) {
            return <TrackGroupFolder folder={ctx.openGroups[ctx.openGroups.length - 1]} />;
        }
    }

    function selectMenu(item) {
        ctx.setOpenGroups([]);
        ctx.setSelectedWpt(null);
        setOpenVisibleMenu(false);
        ctx.setLoadingContextMenu(false);
        if (menuInfo) {
            // update menu
            setShowInfoBlock(false);
            closeCloudSettings(openCloudSettings, setOpenCloudSettings, ctx);
            const menu = !isSelectedMenuItem(item) ? item : null;
            setMenuInfo(menu?.component);
            setSelectedType(menu?.type);
            ctx.setCurrentObjectType(null);
        } else {
            // select first menu
            setMenuInfo(item.component);
            setSelectedType(item.type);
            setOpenMainMenu(false);
            if (item.type === OBJECT_CONFIGURE_MAP) {
                ctx.setCurrentObjectType(OBJECT_CONFIGURE_MAP);
            }
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
            }}
        >
            <ClickAwayListener onClickAway={handleClickAway}>
                <Drawer
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            boxSizing: 'border-box',
                            width: size,
                            overflow: 'hidden',
                            zIndex: openMainMenu ? Z_INDEX_OPEN_LEFT_MENU : Z_INDEX_LEFT_MENU,
                            borderRight: (!menuInfo || (menuInfo && openMainMenu)) && 'none !important',
                            boxShadow:
                                !menuInfo || (menuInfo && openMainMenu)
                                    ? '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 10px 5px rgba(0,0,0,0.12);'
                                    : 'none',
                        },
                    }}
                    open={openMainMenu}
                >
                    <Toolbar />
                    <MenuItem
                        key={'Profile'}
                        sx={{
                            minHeight: 'var(--profile-menu-button-height)',
                            maxHeight: 'var(--profile-menu-button-height)',
                        }}
                        onClick={openLogin}
                    >
                        <ListItemButton
                            id={ctx.loginUser && ctx.loginUser !== 'INIT' ? 'se-logout-button' : 'se-login-button'}
                            className={styles.profileButton}
                            sx={{
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
                                <div>
                                    <ListItemText
                                        sx={{
                                            opacity: openMainMenu ? 1 : 0,
                                            pl: openMainMenu ? 1 : 0,
                                            fontSize: 14,
                                            color: '#237bff',
                                            textTransform: 'none !important',
                                            '& .MuiTypography-root': {
                                                fontSize: '14px',
                                            },
                                        }}
                                    >
                                        {ctx.loginUser && ctx.loginUser !== 'INIT'
                                            ? t('login_account')
                                            : t('user_login')}
                                    </ListItemText>
                                    {ctx.loginUser && ctx.loginUser !== 'INIT' && (
                                        <ListItemText
                                            className={styles.profileLogin}
                                            sx={{
                                                opacity: openMainMenu ? 1 : 0,
                                                pl: openMainMenu ? 1 : 0,
                                                '& .MuiTypography-root': {
                                                    fontSize: '14px',
                                                    textOverflow: 'ellipsis !important',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden !important',
                                                },
                                            }}
                                        >
                                            {ctx.loginUser}
                                        </ListItemText>
                                    )}
                                </div>
                            )}
                        </ListItemButton>
                    </MenuItem>
                    <Divider sx={{ my: '0px !important' }} />
                    <div className={styles.menu}>
                        {items.map(
                            (item, index) =>
                                item.show && (
                                    <MenuItem
                                        id={item.id}
                                        key={index}
                                        className={setMenuStyles(item)}
                                        onClick={() => selectMenu(item)}
                                    >
                                        <ListItemButton
                                            className={setMenuIconStyles(item)}
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
                                                <SvgIcon
                                                    className={styles.customIconPath}
                                                    component={item.icon}
                                                    inheritViewBox
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.name}
                                                sx={{
                                                    opacity: openMainMenu ? 1 : 0,
                                                    pl: openMainMenu ? 1 : 0,
                                                    '& .MuiTypography-root': {
                                                        fontSize: '14px',
                                                    },
                                                }}
                                            />
                                        </ListItemButton>
                                    </MenuItem>
                                )
                        )}
                    </div>
                    <div className={styles.menuButton}>
                        <Divider sx={{ my: '0px !important' }} />
                        <div style={{ height: 'var(--profile-menu-button-height)' }}>
                            <MenuItem key={'Menu'}>
                                <ListItemButton
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                    onClick={handleDrawer}
                                >
                                    <div style={{ alignItems: 'center' }}>
                                        <ListItemIcon sx={{ ml: '13px' }}>
                                            <Menu />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                ml: '7px',
                                                color: '#237bff',
                                                fontWeight: '500 !important',
                                                '& .MuiTypography-root': {
                                                    fontSize: '14px',
                                                },
                                            }}
                                        >
                                            {t('shared_string_menu')}
                                        </ListItemText>
                                    </div>
                                </ListItemButton>
                            </MenuItem>
                        </div>
                    </div>
                </Drawer>
            </ClickAwayListener>
            <Drawer
                variant="persistent"
                PaperProps={{
                    sx: {
                        width: infoSize,
                        ml: '64px',
                        boxShadow: 'none',
                        zIndex: Z_INDEX_OPEN_MENU_INFOBLOCK,
                    },
                }}
                sx={{ left: 'auto !important' }}
                open={true}
                hideBackdrop
            >
                <Toolbar sx={{ mb: '-3px' }} />
                {/*add main menu items*/}
                {!showInfoBlock && _.isEmpty(ctx.openGroups) && !openVisibleMenu && !openCloudSettings && menuInfo}
                {/*add track groups*/}
                {ctx.openGroups.length > 0 && !openCloudSettings && !showInfoBlock && getGroup()}
                {openVisibleMenu && !showInfoBlock && !openCloudSettings && (
                    <VisibleTracks
                        setOpenVisibleMenu={setOpenVisibleMenu}
                        setMenuInfo={setMenuInfo}
                        setSelectedType={setSelectedType}
                    />
                )}
                <InformationBlock
                    showInfoBlock={showInfoBlock}
                    setShowInfoBlock={setShowInfoBlock}
                    setClearState={setClearState}
                    mainMenuSize={size}
                />
                {openCloudSettings && (
                    <CloudSettings cloudSettings={cloudSettings} setOpenCloudSettings={setOpenCloudSettings} />
                )}
            </Drawer>
        </Box>
    );
}
