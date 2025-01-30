import React, { useContext, useEffect, useState, useRef } from 'react';
import AppContext from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import TracksManager from '../../manager/track/TracksManager';
import { apiGet } from '../../util/HttpApi';
import { confirm } from '../../dialogs/GlobalConfirmationDialog';
import styles from '../map.module.css';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider, ClickAwayListener, Popover } from '@mui/material';
import { ReactComponent as MyLocationIcon } from '../../assets/icons/ic_action_my_location.svg';
import { ReactComponent as WeatherIcon } from '../../assets/icons/ic_action_umbrella.svg';
import { ReactComponent as PlanRouteIcon } from '../../assets/menu/ic_action_plan_route.svg';
import { ReactComponent as FavoriteAddIcon } from '../../assets/icons/ic_action_favorite_add.svg';
import { ReactComponent as RouteFromIcon } from '../../assets/icons/ic_action_route_direction_from_here.svg';
import { ReactComponent as RouteToIcon } from '../../assets/icons/ic_action_route_direction_here.svg';
import { ReactComponent as RouteViaIcon } from '../../assets/icons/ic_action_route_intermediate.svg';
import { ReactComponent as CoordinatesIcon } from '../../assets/icons/ic_action_coordinates_location.svg';
import { ReactComponent as AddPinIcon } from '../../assets/icons/ic_show_on_map_outlined.svg';
import { ReactComponent as ShowRegionsIcon } from '../../assets/icons/ic_action_world_globe.svg';
import { useTranslation } from 'react-i18next';
import { LOGIN_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';

export default function ContextMenu({ setGeocodingData, setRegionData }) {
    const ctx = useContext(AppContext);

    const map = useMap();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [menuPosition, setMenuPosition] = useState(null);
    const [clickLatLng, setClickLatLng] = useState(null);
    const anchorEl = useRef(document.createElement('div'));
    const [open, setOpen] = useState(false);

    const handleContextMenu = (event) => {
        event.originalEvent.preventDefault();
        setMenuPosition({
            mouseX: event.originalEvent.clientX + 5,
            mouseY: event.originalEvent.clientY + 5,
        });
        setClickLatLng(event.latlng);
        setOpen(true);
        ctx.setOpenContextMenu(true);
    };

    const handleClose = () => {
        setOpen(false);
        setClickLatLng(null);
        ctx.setOpenContextMenu(false);
    };

    const handleMenuItemClick = (callback) => {
        callback(clickLatLng);
        handleClose();
    };

    const openLogin = () => {
        navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.search + window.location.hash);
    };

    const routeObject = ctx.routeObject;
    const startPoint = routeObject.getOption('route.points.start');
    const finishPoint = routeObject.getOption('route.points.finish');

    function navigateSetStartOrFinish({ latlng, target }) {
        confirm({
            ctx,
            text: 'Modify previous Navigation?',
            callback: () => {
                routeObject.setOption(target, latlng);
            },
            skip: !routeObject.getOption('route.points.start') || !routeObject.getOption('route.points.finish'),
        });
    }

    useEffect(() => {
        if (map) {
            map.on('contextmenu', handleContextMenu);
        }
        return () => {
            if (map) {
                map.off('contextmenu', handleContextMenu);
            }
        };
    }, [map]);

    const whereAmI = async (latlng) => {
        setGeocodingData(null);
        const params = `lat=${latlng.lat.toFixed(6)}&lon=${latlng.lng.toFixed(6)}`;
        const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/geocoding?${params}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            let data = await response.json();
            let props = {};
            if (data.features.length > 0) {
                props = data.features[0]?.properties;
            }
            setGeocodingData({ geojson: data, id: new Date().getTime(), props: props });
        }
    };

    async function getRegions(latlng) {
        setRegionData(null);
        await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/regions-by-latlon`, {
            params: {
                lat: latlng.lat.toFixed(6),
                lon: latlng.lng.toFixed(6),
            },
        }).then((res) => {
            const regions = formattingRegions(res.data.regions);
            setRegionData({
                regions: regions,
                latlng: latlng,
            });
        });
    }

    function addFavorite(latlng) {
        ctx.setAddFavorite((prevState) => ({
            ...prevState,
            location: latlng,
        }));
    }

    function addWpt(latlng) {
        ctx.setAddFavorite((prevState) => ({
            ...prevState,
            location: latlng,
            editTrack: true,
        }));
    }

    function formattingRegions(regions) {
        return regions.join(', ').replaceAll('_', ' ');
    }

    function copyCoordinates(latlng) {
        navigator.clipboard.writeText(latlng.lat.toFixed(6) + ',' + latlng.lng.toFixed(6));
    }

    function openWeather(latlng) {
        ctx.setOpenMenu({ id: 'se-show-menu-weather', latlng: latlng });
    }

    return (
        <>
            <div
                ref={anchorEl}
                style={{
                    position: 'absolute',
                    top: menuPosition?.mouseY || 0,
                    left: menuPosition?.mouseX || 0,
                    width: 1,
                    height: 1,
                    pointerEvents: 'none',
                }}
            />
            <Popover
                id={'se-context-menu'}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={open}
                anchorEl={anchorEl.current}
                disablePortal={true}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                        handleClose();
                    }
                }}
            >
                <ClickAwayListener
                    onClickAway={() => {
                        handleClose();
                    }}
                >
                    <Box className={styles.contextMenu}>
                        {/* Where I am */}
                        <MenuItem
                            id={'se-where-i-am'}
                            className={styles.contextMenuItem}
                            onClick={() => handleMenuItemClick(whereAmI)}
                        >
                            <ListItemIcon className={styles.contextMenuIcon}>
                                <MyLocationIcon />
                            </ListItemIcon>
                            <ListItemText className={styles.contextMenuItemText}>{t('where_am_i')}</ListItemText>
                        </MenuItem>
                        {/* Weather */}
                        <MenuItem
                            id={'se-open-weather-action'}
                            className={styles.contextMenuItem}
                            onClick={() => handleMenuItemClick(openWeather)}
                        >
                            <ListItemIcon className={styles.contextMenuIcon}>
                                <WeatherIcon />
                            </ListItemIcon>
                            <ListItemText className={styles.contextMenuItemText}>
                                {t('open_weather_action')}
                            </ListItemText>
                        </MenuItem>
                        <Divider className={styles.dividerMenu} />
                        {/*Create new route */}
                        <MenuItem
                            id={'se-create-route-action'}
                            className={styles.contextMenuItem}
                            onClick={() => handleMenuItemClick((latlng) => TracksManager.createTrack(ctx, latlng))}
                        >
                            <ListItemIcon className={styles.contextMenuIcon}>
                                <PlanRouteIcon />
                            </ListItemIcon>
                            <ListItemText className={styles.contextMenuItemText}>
                                {t('plan_route_create_new_route')}
                            </ListItemText>
                        </MenuItem>
                        {/*Add wpt */}
                        {ctx.createTrack?.enable && (
                            <>
                                <MenuItem
                                    id={'se-add-wpt-action'}
                                    className={styles.contextMenuItem}
                                    onClick={() => handleMenuItemClick(addWpt)}
                                >
                                    <ListItemIcon className={styles.contextMenuIcon}>
                                        <FavoriteAddIcon />
                                    </ListItemIcon>
                                    <ListItemText className={styles.contextMenuItemText}>
                                        {t('add_waypoint')}
                                    </ListItemText>
                                </MenuItem>
                                <Divider className={styles.dividerMenu} />
                            </>
                        )}
                        {/*Add favorite */}
                        <MenuItem
                            id={'se-add-favorite-action'}
                            className={styles.contextMenuItem}
                            onClick={() => handleMenuItemClick(addFavorite)}
                        >
                            <ListItemIcon className={styles.contextMenuIcon}>
                                <FavoriteAddIcon />
                            </ListItemIcon>
                            <ListItemText className={styles.contextMenuItemText}>
                                {t('favourites_context_menu_add')}
                            </ListItemText>
                        </MenuItem>
                        <Divider className={styles.dividerMenu} />
                        {/*Direction from */}
                        <MenuItem
                            id={'se-direction-action-from'}
                            className={styles.contextMenuItem}
                            onClick={() =>
                                handleMenuItemClick((latlng) =>
                                    navigateSetStartOrFinish({ latlng, target: 'route.points.start' })
                                )
                            }
                        >
                            <ListItemIcon className={styles.contextMenuIcon}>
                                <RouteFromIcon />
                            </ListItemIcon>
                            <ListItemText className={styles.contextMenuItemText}>
                                {t('context_menu_item_directions_from')}
                            </ListItemText>
                        </MenuItem>
                        {/*Direction via */}
                        {startPoint && finishPoint && (
                            <MenuItem
                                id={'se-direction-action-via'}
                                className={styles.contextMenuItem}
                                onClick={() =>
                                    handleMenuItemClick((latlng) => routeObject.routeAddViaPoint({ ll: latlng }))
                                }
                            >
                                <ListItemIcon className={styles.contextMenuIcon}>
                                    <RouteViaIcon />
                                </ListItemIcon>
                                <ListItemText className={styles.contextMenuItemText}>
                                    {t('add_intermediate_point')}
                                </ListItemText>
                            </MenuItem>
                        )}
                        {/*Direction to */}
                        <MenuItem
                            id={'se-direction-action-to'}
                            className={styles.contextMenuItem}
                            onClick={() =>
                                handleMenuItemClick((latlng) =>
                                    navigateSetStartOrFinish({ latlng, target: 'route.points.finish' })
                                )
                            }
                        >
                            <ListItemIcon className={styles.contextMenuIcon}>
                                <RouteToIcon />
                            </ListItemIcon>
                            <ListItemText className={styles.contextMenuItemText}>
                                {t('context_menu_item_directions_to')}
                            </ListItemText>
                        </MenuItem>
                        <Divider className={styles.dividerMenu} />
                        {/*Copy coordinates */}
                        <MenuItem
                            className={styles.contextMenuItem}
                            onClick={() => handleMenuItemClick(copyCoordinates)}
                        >
                            <ListItemIcon className={styles.contextMenuIcon}>
                                <CoordinatesIcon />
                            </ListItemIcon>
                            <ListItemText className={styles.contextMenuItemText}>{t('copy_coordinates')}</ListItemText>
                        </MenuItem>
                        <Divider className={styles.dividerMenu} />
                        {/*Add pin */}
                        <MenuItem
                            id={'se-add-pin-action'}
                            className={styles.contextMenuItem}
                            onClick={() => handleMenuItemClick((latlng) => ctx.setPinPoint(latlng))}
                        >
                            <ListItemIcon className={styles.contextMenuIcon}>
                                <AddPinIcon />
                            </ListItemIcon>
                            <ListItemText className={styles.contextMenuItemText}>Add pin</ListItemText>
                        </MenuItem>
                        {/*Show regions */}
                        <MenuItem
                            id={'se-show-regions-action'}
                            className={styles.contextMenuItem}
                            onClick={() =>
                                handleMenuItemClick((latlng) => (ctx.loginUser ? getRegions(latlng) : openLogin()))
                            }
                        >
                            <ListItemIcon className={styles.contextMenuIcon}>
                                <ShowRegionsIcon />
                            </ListItemIcon>
                            <ListItemText className={styles.contextMenuItemText}>Show regions</ListItemText>
                        </MenuItem>
                    </Box>
                </ClickAwayListener>
            </Popover>
        </>
    );
}
