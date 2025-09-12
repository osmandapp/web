import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    Box,
    ClickAwayListener,
    Divider,
    Drawer,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    SvgIcon,
    Toolbar,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import LoginContext from '../context/LoginContext';
import AppContext, {
    OBJECT_CONFIGURE_MAP,
    OBJECT_GLOBAL_SETTINGS,
    OBJECT_SEARCH,
    OBJECT_TYPE_TRAVEL,
    OBJECT_TYPE_CLOUD_TRACK,
    OBJECT_TYPE_FAVORITE,
    OBJECT_TYPE_LOCAL_TRACK,
    OBJECT_TYPE_NAVIGATION_ALONE,
    OBJECT_TYPE_NAVIGATION_TRACK,
    OBJECT_TYPE_WEATHER,
    OBJECT_TRACK_ANALYZER,
} from '../context/AppContext';
import TracksMenu from './tracks/TracksMenu';
import ConfigureMap from './configuremap/ConfigureMap';
import NavigationMenu from './navigation/NavigationMenu';
import { matchPath, useLocation, useNavigate, useOutlet, useParams } from 'react-router-dom';
import FavoritesMenu from './favorite/FavoritesMenu';
import PlanRouteMenu from './planroute/PlanRouteMenu';
import { ReactComponent as FavoritesIcon } from '../assets/menu/ic_action_favorite.svg';
import { ReactComponent as WeatherIcon } from '../assets/menu/ic_action_umbrella.svg';
import { ReactComponent as TracksIcon } from '../assets/menu/ic_action_track.svg';
import { ReactComponent as NavigationIcon } from '../assets/menu/ic_action_navigation.svg';
import { ReactComponent as PlanRouteIcon } from '../assets/menu/ic_action_plan_route.svg';
import { ReactComponent as ConfigureMapIcon } from '../assets/icons/ic_map_configure_map.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/ic_action_settings_outlined.svg';
import { ReactComponent as TrackAnalyzerIcon } from '../assets/icons/ic_action_tool.svg';
import { ReactComponent as TravelIcon } from '../assets/icons/ic_action_activity.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/ic_action_search_dark.svg';
import InformationBlock from '../infoblock/components/InformationBlock';
import Weather, { FORECAST_SOURCE_PARAM, FORECAST_TYPE_PARAM, selectedForecastDetails } from './weather/Weather';
import styles from './mainmenu.module.css';
import isEmpty from 'lodash-es/isEmpty';
import { useTranslation } from 'react-i18next';
import SettingsMenu from './settings/SettingsMenu';
import CloudSettings from './settings/CloudSettings';
import { closeCloudSettings } from '../manager/SettingsManager';
import {
    CONFIGURE_URL,
    SEARCH_URL,
    FAVORITES_URL,
    INSTALL_BANNER_SIZE,
    MAIN_PAGE_TYPE,
    MAIN_URL_WITH_SLASH,
    MENU_INFO_CLOSE_SIZE,
    MENU_INFO_OPEN_SIZE,
    NAVIGATE_URL,
    PLANROUTE_URL,
    SETTINGS_URL,
    TRACKS_URL,
    WEATHER_URL,
    TRAVEL_URL,
    SHARE_FILE_MAIN_URL,
    TRACK_ANALYZER_URL,
    INFO_MENU_URL,
    SHARE_MENU_URL,
    LOGIN_URL,
    DELETE_ACCOUNT_URL,
    WEATHER_FORECAST_URL,
    POI_CATEGORIES_URL,
    SEARCH_RESULT_URL,
    EXPLORE_URL,
} from '../manager/GlobalManager';
import { createUrlParams, decodeString } from '../util/Utils';
import { useWindowSize } from '../util/hooks/useWindowSize';
import SearchMenu from './search/SearchMenu';
import LoginButton from '../login/LoginButton';
import TravelMenu from './travel/TravelMenu';
import ProFeatures from '../frame/pro/ProFeatures';
import { getShareFileInfo, updateUserRequests } from '../manager/ShareManager';
import { debouncer } from '../context/TracksRoutingCache';
import TrackAnalyzerMenu from './analyzer/TrackAnalyzerMenu';
import { processDisplayTrack } from '../manager/track/TracksManager';
import { openLoginMenu } from '../manager/LoginManager';
import { saveSortToDB } from '../context/FavoriteStorage';
import { openFavoriteObj } from '../manager/FavoritesManager';
import useMenuDots from '../util/hooks/menu/useMenuDots';
import { buildSearchParamsFromQuery } from '../util/hooks/search/useSearchNav';
import { openPoiObj } from '../manager/SearchManager';
import { useRecentDataSaver } from '../util/hooks/menu/useRecentDataSaver';

export function closeSubPages({ ctx, ltx, wptDetails = true, closeLogin = true }) {
    ctx.setOpenProFeatures(null);
    if (wptDetails) {
        ctx.setSelectedWpt(null);
    }
    ctx.setLoadingContextMenu(false);
    if (closeLogin) {
        ltx.setOpenLoginMenu(false);
    }
    ctx.setSelectedPhotoInd(-1);
}

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
    showInstallBanner,
}) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();
    const location = useLocation();

    const outlet = useOutlet();
    const showDeleteOutlet = matchPath({ path: MAIN_URL_WITH_SLASH + DELETE_ACCOUNT_URL + '*' }, location.pathname);
    const showShareOutlet = matchPath({ path: MAIN_URL_WITH_SLASH + SHARE_FILE_MAIN_URL + '*' }, location.pathname);

    const [, height] = useWindowSize();
    const { filename } = useParams();

    const isAccountOpen = location.pathname.startsWith(MAIN_URL_WITH_SLASH + LOGIN_URL) && ltx.openLoginMenu;

    const timerRef = useRef(null);

    const [selectedType, setSelectedType] = useState(null);
    const [openCloudSettings, setOpenCloudSettings] = useState(false);

    const [redirectUrl, setRedirectUrl] = useState(null);

    const [savePrevState, setSavePrevState] = useState(false);

    const menuDots = useMenuDots(ctx);
    const recentSaver = useRecentDataSaver();

    const Z_INDEX_OPEN_MENU_INFOBLOCK = 1000;
    const Z_INDEX_LEFT_MENU = Z_INDEX_OPEN_MENU_INFOBLOCK - 1;
    const Z_INDEX_OPEN_LEFT_MENU = Z_INDEX_OPEN_MENU_INFOBLOCK + 1;

    const handleDrawer = () => {
        setOpenMainMenu(!openMainMenu);
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname.startsWith(MAIN_URL_WITH_SLASH + LOGIN_URL) && !ltx.openLoginMenu && !ltx.loginUser) {
            const params = new URLSearchParams(location.search);
            const to = params.get('redirect');
            if (to) {
                setRedirectUrl(to);
            }
            openLoginMenu(ctx, ltx, navigate, location);
        }
    }, [location.pathname, ctx, navigate]);

    useEffect(() => {
        if (ltx.loginUser && redirectUrl) {
            window.location.href = redirectUrl;
        }
    }, [ltx.loginUser]);

    // open trackInfo/trackShareMenu after reload or open by link
    useEffect(() => {
        if (location.pathname.includes(INFO_MENU_URL) && ctx.listFiles?.uniqueFiles && ctx.favorites?.groups) {
            if (filename && isEmpty(ctx.selectedGpxFile)) {
                const decodeFilename = decodeString(filename);
                const file = ctx.listFiles.uniqueFiles.find((file) => file.name === decodeFilename);
                if (!file) {
                    return;
                }
                ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');

                if (location.pathname.includes(SHARE_MENU_URL)) {
                    // open share menu
                    if (!ctx.shareFile) {
                        getShareFileInfo({ file, ctx }).then();
                    }
                } else {
                    // open track info
                    processDisplayTrack({
                        visible: true,
                        showOnMap: true,
                        showInfo: true,
                        zoomToTrack: true,
                        file,
                        ctx,
                        fileStorage: ctx.gpxFiles,
                        setFileStorage: ctx.setGpxFiles,
                        recentSaver,
                    }).then();
                }
            }
        }
    }, [location.pathname, ctx.listFiles.uniqueFiles, ctx.favorites?.groups]);

    useEffect(() => {
        if (location.pathname.includes(INFO_MENU_URL) || savePrevState) {
            setSavePrevState(false);
            return;
        }
        if (location.pathname.includes(LOGIN_URL)) {
            ltx.setOpenLoginMenu(true);
            return;
        }
        if (!menuInfo) {
            selectMenuByUrl();
        }
        if (location.pathname === MAIN_URL_WITH_SLASH) {
            ctx.setInfoBlockWidth(`${MENU_INFO_CLOSE_SIZE}px`);
        }

        closeSubPages({ ctx, ltx, wptDetails: false });
        openShareFileByLink();

        const startCreateTrack = ctx.createTrack?.enable && location.pathname === MAIN_URL_WITH_SLASH + PLANROUTE_URL;
        const openCloudTrackAfterSave =
            ctx.selectedGpxFile.url && location.pathname === MAIN_URL_WITH_SLASH + TRACKS_URL;
        const openFavorite =
            !!ctx.selectedGpxFile?.markerCurrent && location.pathname === MAIN_URL_WITH_SLASH + FAVORITES_URL;
        if (!startCreateTrack && !openCloudTrackAfterSave && !openFavorite && !ctx.selectedPoiObj) {
            setShowInfoBlock(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (ctx.selectedSort && (ctx.selectedSort.favorites || ctx.selectedSort?.tracks)) {
            saveSortToDB(ctx.selectedSort).then();
        }
    }, [ctx.selectedSort]);

    function selectMenuByUrl() {
        const item = items.find((item) => location.pathname.startsWith(item.url));
        if (item) {
            ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');
            return selectMenu({ item, openFromUrl: true });
        }
        return null;
    }

    function openShareFileByLink() {
        const openShareFile = location.pathname.includes(SHARE_FILE_MAIN_URL);
        if (openShareFile) {
            setShowInfoBlock(true);
            ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');
        }
    }

    const handleClickAway = () => {
        setOpenMainMenu(false);
    };

    const items = [
        {
            name: t('shared_string_search'),
            icon: SearchIcon,
            component: <SearchMenu />,
            type: OBJECT_SEARCH,
            show: ltx.loginUser,
            id: 'se-show-menu-search',
            url: MAIN_URL_WITH_SLASH + SEARCH_URL,
        },
        {
            name: t('configure_map'),
            icon: ConfigureMapIcon,
            component: <ConfigureMap />,
            type: OBJECT_CONFIGURE_MAP,
            show: true,
            id: 'se-show-menu-configuremap',
            url: MAIN_URL_WITH_SLASH + CONFIGURE_URL,
        },
        {
            name: t('shared_string_weather'),
            icon: WeatherIcon,
            component: <Weather />,
            type: OBJECT_TYPE_WEATHER,
            show: true,
            id: 'se-show-menu-weather',
            url: MAIN_URL_WITH_SLASH + WEATHER_URL,
        },
        {
            name: t('shared_string_tracks'),
            icon: TracksIcon,
            component: <TracksMenu />,
            type: OBJECT_TYPE_CLOUD_TRACK,
            show: true,
            id: 'se-show-menu-tracks',
            url: MAIN_URL_WITH_SLASH + TRACKS_URL,
        },
        {
            name: t('shared_string_my_favorites'),
            icon: FavoritesIcon,
            component: <FavoritesMenu />,
            type: OBJECT_TYPE_FAVORITE,
            show: true,
            id: 'se-show-menu-favorites',
            url: MAIN_URL_WITH_SLASH + FAVORITES_URL,
        },
        {
            name: t('shared_string_navigation'),
            icon: NavigationIcon,
            component: <NavigationMenu />,
            type: OBJECT_TYPE_NAVIGATION_TRACK, // shared with OBJECT_TYPE_NAVIGATION_ALONE
            show: true,
            id: 'se-show-menu-navigation',
            url: MAIN_URL_WITH_SLASH + NAVIGATE_URL,
        },
        {
            name: t('plan_route'),
            icon: PlanRouteIcon,
            component: <PlanRouteMenu />,
            type: OBJECT_TYPE_LOCAL_TRACK,
            show: true,
            id: 'se-show-menu-planroute',
            url: MAIN_URL_WITH_SLASH + PLANROUTE_URL,
        },
        {
            name: 'Travel',
            icon: TravelIcon,
            component: <TravelMenu />,
            type: OBJECT_TYPE_TRAVEL,
            show: ctx.develFeatures,
            id: 'se-show-menu-travel',
            url: MAIN_URL_WITH_SLASH + TRAVEL_URL,
        },
        {
            name: t('shared_string_settings'),
            icon: SettingsIcon,
            component: <SettingsMenu />,
            type: OBJECT_GLOBAL_SETTINGS,
            show: true,
            id: 'se-show-menu-settings',
            url: MAIN_URL_WITH_SLASH + SETTINGS_URL,
        },
        {
            name: t('web:tracks_analyzer'),
            icon: TrackAnalyzerIcon,
            component: <TrackAnalyzerMenu />,
            type: OBJECT_TRACK_ANALYZER,
            show: true,
            id: 'se-show-menu-track-analyzer',
            url: MAIN_URL_WITH_SLASH + TRACK_ANALYZER_URL,
        },
    ];

    useEffect(() => {
        setOpenCloudSettings(ctx.cloudSettings.changes || ctx.cloudSettings.trash);
    }, [ctx.cloudSettings]);

    //open main menu if infoblock was opened
    useEffect(() => {
        if (showInfoBlock && !menuInfo) {
            selectMenuInfoByObjectType();
        }
    }, [showInfoBlock]);

    useEffect(() => {
        if (selectedType === OBJECT_TRACK_ANALYZER) {
            ctx.setCurrentObjectType(OBJECT_TRACK_ANALYZER);
        }
        if (selectedType === OBJECT_TYPE_FAVORITE) {
            if (ctx.selectedFavoriteObj) {
                openFavoriteObj(ctx, ctx.selectedFavoriteObj);
            }
        }

        if (selectedType === OBJECT_TYPE_CLOUD_TRACK) {
            if (ctx.selectedCloudTrackObj) {
                processDisplayTrack({
                    visible: true,
                    showOnMap: true,
                    showInfo: true,
                    zoomToTrack: true,
                    file: ctx.selectedCloudTrackObj,
                    ctx,
                    fileStorage: ctx.gpxFiles,
                    setFileStorage: ctx.setGpxFiles,
                    recentSaver,
                }).then();
            }
        }

        if (selectedType === OBJECT_TYPE_WEATHER) {
            const res = selectedForecastDetails(ctx);
            if (res) {
                const index = ctx.weatherLayers[ctx.weatherType].indexOf(res);
                navigate({
                    pathname: MAIN_URL_WITH_SLASH + WEATHER_URL + WEATHER_FORECAST_URL,
                    search: `?${FORECAST_TYPE_PARAM}=${index}&${FORECAST_SOURCE_PARAM}=${ctx.weatherType}`,
                    hash: location.hash,
                });
                return;
            }
        }

        if (selectedType === OBJECT_TYPE_TRAVEL) {
            ctx.setOpenTravel(true);
        }

        ctx.setSearchSettings({
            ...ctx.searchSettings,
            showExploreMarkers: selectedType === OBJECT_SEARCH ? !ctx.searchResult : false,
        });

        if (selectedType === OBJECT_SEARCH) {
            if (ctx.selectedPoiObj) {
                openPoiObj(ctx, ctx.selectedPoiObj);
            }
            if (ctx.poiCatMenu) {
                navigate(MAIN_URL_WITH_SLASH + SEARCH_URL + POI_CATEGORIES_URL + window.location.hash);
                return;
            }
            if (ctx.searchQuery) {
                navigate({
                    pathname: MAIN_URL_WITH_SLASH + SEARCH_URL + SEARCH_RESULT_URL,
                    search: buildSearchParamsFromQuery(ctx.searchQuery),
                    hash: window.location.hash,
                });
                return;
            }

            if (ctx.exploreMenu) {
                navigate(MAIN_URL_WITH_SLASH + SEARCH_URL + EXPLORE_URL + window.location.hash);
                return;
            }
        }

        const menu = items.find((item) => isSelectedMenuItem(item));
        menu && navigateToUrl({ menu, params: ctx.pageParams });
    }, [selectedType, ctx.pageParams]);

    useEffect(() => {
        const updateRequests = () => {
            updateUserRequests(ctx).then();
        };

        debouncer(updateRequests, timerRef, 3000);

        return () => clearTimeout(timerRef.current);
    }, [ctx.updatedRequestList]);

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
                        ctx.routeObject.getOption('route.points.start') ||
                        ctx.routeObject.getOption('route.points.finish')
                    ) {
                        selectMenuInfoByObjectType(OBJECT_TYPE_NAVIGATION_TRACK);
                    }
                }, 100);
            } else if (selectedType !== ctx.currentObjectType) {
                selectMenuInfoByObjectType(); // process all other object types
            }
        }
    }, [ctx.currentObjectType]);

    function selectMenuInfoByObjectType(force = null) {
        const currentMenu = items.find((item) => {
            return item.type === (force ?? ctx.currentObjectType);
        });
        if (currentMenu) {
            setMenuInfo(currentMenu.component);
            setSelectedType(currentMenu.type);
            ctx.setPrevPageUrl({ url: location, active: false });
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

    function selectMenu({ item }) {
        closeSubPages({ ctx, ltx });
        let currentType;
        if (menuInfo) {
            // update menu
            setShowInfoBlock(false);
            ctx.setSearchSettings({ ...ctx.searchSettings, showExploreMarkers: false });
            closeCloudSettings(openCloudSettings, setOpenCloudSettings, ctx);
            const updateMenu = !isSelectedMenuItem(item) || ctx.openMenu;
            const menu = updateMenu ? item : null;
            if (!menu) {
                ctx.setInfoBlockWidth(`${MENU_INFO_CLOSE_SIZE}px`);
            }
            setMenuInfo(menu?.component);
            currentType = menu?.type;
            ctx.setCurrentObjectType(null);
        } else {
            // select first menu
            setMenuInfo(item.component);
            currentType = item.type;
            setOpenMainMenu(false);
            if (item.type === OBJECT_CONFIGURE_MAP) {
                ctx.setCurrentObjectType(OBJECT_CONFIGURE_MAP);
            }
        }
        ctx.setPrevPageUrl({ url: location, active: false });
        setSelectedType(currentType);

        return currentType;
    }

    useEffect(() => {
        if (ctx.openMenu) {
            const item = items.find((item) => item.id === ctx.openMenu?.id);
            selectMenu({ item });
            ctx.setOpenMenu(null);
        }
    }, [ctx.openMenu]);

    // Note: When adding new parameters, it may be necessary to refactor pageParams
    // to store a list of parameters as a map instead of a string for better flexibility.
    useEffect(() => {
        const pinPoint = ctx.pinPoint;
        if (pinPoint) {
            if (location.pathname.includes(NAVIGATE_URL) && !ctx.routeObject.isReady()) {
                return;
            }
            const pin = `${pinPoint.lat.toFixed(6)},${pinPoint.lng.toFixed(6)}`;
            const pretty = createUrlParams({ pin });
            const pageParams = { ...ctx.pageParams };
            const pinRegex = /pin=([^&]*)/;
            const newPin = pretty.match(pinRegex)[0];

            items.forEach((item) => {
                const type = item.type;
                pageParams[type] = addParamsToUrl(pageParams, type, pinRegex, newPin, pretty);
            });
            // case for main page
            if (location.pathname === MAIN_URL_WITH_SLASH) {
                pageParams[MAIN_PAGE_TYPE] = addParamsToUrl(pageParams, MAIN_PAGE_TYPE, pinRegex, newPin, pretty);
            }

            ctx.setPageParams(pageParams);
        }
    }, [ctx.pinPoint]);

    function addParamsToUrl(pageParams, type, pinRegex, newPin, pretty) {
        const existingParams = pageParams[type] || '';
        if (existingParams.match(pinRegex)) {
            return existingParams.replace(pinRegex, newPin);
        } else {
            return existingParams ? `${existingParams}&${pretty.slice(1)}` : pretty;
        }
    }

    useEffect(() => {
        const currentMenu = items.find((item) => isSelectedMenuItem(item));
        if (currentMenu && menuInfo) {
            if (currentMenu.type === OBJECT_TYPE_CLOUD_TRACK) {
                // not to navigate to the track menu if the track info is opened
                const currentUrl = window.location.href;
                if (currentUrl.includes(INFO_MENU_URL)) {
                    return;
                }
            }
            setSelectedType(currentMenu?.type);
        } else if (location.pathname === MAIN_URL_WITH_SLASH && location.search === '') {
            // if the menu not found, navigate to the main page
            navigateToUrl({ isMain: true, params: ctx.pageParams });
        }
        if (!menuInfo) setSelectedType(null);
    }, [ctx.pageParams, menuInfo]);

    useEffect(() => {
        // now this case only for login/logout
        if (ctx.prevPageUrl?.active) {
            const currentMenu = items?.find((item) => item.url === ctx.prevPageUrl.url?.pathname);
            if (currentMenu) {
                navigateToUrl({ menu: currentMenu });
            } else {
                // if the menu not found, navigate to the main page
                navigateToUrl({ isMain: true });
            }
        }
    }, [ctx.prevPageUrl]);

    function navigateToUrl({ menu = null, isMain = false, params = null }) {
        if (menu) {
            const isSubroute = location.pathname.startsWith(menu.url) && location.pathname !== menu.url;
            if (isSubroute) {
                return;
            }
        }
        if (isMain) {
            if (params?.[MAIN_PAGE_TYPE] !== undefined) {
                navigate(MAIN_URL_WITH_SLASH + params?.[MAIN_PAGE_TYPE] + location.hash);
            } else {
                navigate(MAIN_URL_WITH_SLASH + location.hash);
            }
        } else if (menu) {
            if (menu.type === OBJECT_TYPE_NAVIGATION_TRACK) {
                if (ctx.routeObject.getOption('route.map.zoom')) {
                    // auto navigation from the route (fitBounds)
                    return;
                }
                // special case for Navigation due to lazy-loading providers
                if (params?.[menu.type] !== undefined) {
                    navigate(menu.url + params?.[menu.type] + location.hash);
                } else if (!ctx.routeObject.isReady()) {
                    navigate(menu.url + window.location.search + location.hash);
                } else {
                    navigate(menu.url + location.hash);
                }
            } else {
                // all other cases
                if (params?.[menu.type] !== undefined) {
                    navigate(menu.url + params?.[menu.type] + location.hash);
                } else {
                    navigate(menu.url + location.hash);
                }
            }
        }
    }

    function isOpenSubMenu() {
        return showInfoBlock || openCloudSettings;
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
                            mt: showInstallBanner && `${INSTALL_BANNER_SIZE}px`,
                            height: showInstallBanner ? `${height - INSTALL_BANNER_SIZE}px` : '100%',
                            overflow: 'hidden',
                            zIndex: openMainMenu ? Z_INDEX_OPEN_LEFT_MENU : Z_INDEX_LEFT_MENU,
                            borderRight:
                                ((!menuInfo &&
                                    !ltx.openLoginMenu &&
                                    ctx.infoBlockWidth === `${MENU_INFO_CLOSE_SIZE}px`) ||
                                    (menuInfo && openMainMenu)) &&
                                'none !important',
                            boxShadow:
                                !menuInfo || (menuInfo && openMainMenu)
                                    ? '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 10px 5px rgba(0,0,0,0.12);'
                                    : 'none',
                        },
                    }}
                    open={openMainMenu}
                >
                    <Toolbar />
                    <LoginButton
                        openMainMenu={openMainMenu}
                        setMenuInfo={setMenuInfo}
                        setShowInfoBlock={setShowInfoBlock}
                    />
                    <Divider sx={{ my: '0px !important' }} />
                    <div className={styles.menu}>
                        {items.map(
                            (item, index) =>
                                item.show && (
                                    <MenuItem
                                        id={item.id}
                                        key={index}
                                        className={setMenuStyles(item)}
                                        onClick={() => selectMenu({ item })}
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
                                                {menuDots[item.type] && <span className={styles.dotMenu} />}
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
                        mt: showInstallBanner && `${INSTALL_BANNER_SIZE}px`,
                        boxShadow: 'none',
                        zIndex: Z_INDEX_OPEN_MENU_INFOBLOCK,
                        overflow: 'hidden',
                    },
                }}
                sx={{ left: 'auto !important' }}
                open={true}
                hideBackdrop
            >
                <Toolbar sx={{ mb: '-3px' }} />
                {(showDeleteOutlet || showShareOutlet) && outlet}
                {!isOpenSubMenu() && (
                    <>
                        {ctx.openProFeatures ? <ProFeatures /> : isAccountOpen && outlet ? outlet : null}
                        <div
                            style={{
                                display: isAccountOpen || ctx.openProFeatures ? 'none' : 'block',
                            }}
                        >
                            {items.map((item) => {
                                if (!item.show) return null;
                                const display = selectedType === item.type ? 'block' : 'none';
                                const id = `se-menu-component-${item.type}-${display}`;

                                return (
                                    <div id={id} key={item.type} style={{ display }}>
                                        {item.component}
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
                <InformationBlock
                    showInfoBlock={showInfoBlock}
                    setShowInfoBlock={setShowInfoBlock}
                    setClearState={setClearState}
                    mainMenuSize={size}
                    setSavePrevState={setSavePrevState}
                />
                {openCloudSettings && <CloudSettings setOpenCloudSettings={setOpenCloudSettings} />}
            </Drawer>
        </Box>
    );
}
