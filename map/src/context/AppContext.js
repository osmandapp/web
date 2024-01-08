import React, { useEffect, useState } from 'react';
import useCookie from 'react-use-cookie';
import { useMutator, seleniumUpdateActivity } from '../util/Utils';
import TracksManager, { getGpxFiles } from '../manager/track/TracksManager';
import _ from 'lodash';
import { addOpenedFavoriteGroups } from '../manager/FavoritesManager';
import PoiManager from '../manager/PoiManager';
import { apiGet } from '../util/HttpApi';
import { geoRouter } from '../store/geoRouter/geoRouter.js';
import { geoObject } from '../store/geoObject/geoObject.js';
import WeatherManager from '../manager/WeatherManager';
import { getAccountInfo } from '../manager/LoginManager';

export const OBJECT_TYPE_LOCAL_TRACK = 'local_track'; // track in localStorage
export const OBJECT_TYPE_CLOUD_TRACK = 'cloud_track'; // track in OsmAnd Cloud

export const OBJECT_TYPE_NAVIGATION_TRACK = 'route_track'; // track converted from Navigation result
export const OBJECT_TYPE_NAVIGATION_ALONE = 'navigation'; // special case of OBJECT_TYPE_NAVIGATION_TRACK (Navigation w/o InfoBlock)

export const OBJECT_TYPE_FAVORITE = 'favorite';
export const OBJECT_TYPE_WEATHER = 'weather';
export const OBJECT_TYPE_POI = 'poi';

export const OBJECT_CONFIGURE_MAP = 'configure_map';
export const LOCAL_STORAGE_CONFIGURE_MAP = 'configureMap';

export const defaultConfigureMapStateValues = {
    showFavorites: true,
};

export const isLocalTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_LOCAL_TRACK;
export const isCloudTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_CLOUD_TRACK;
export const isRouteTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_NAVIGATION_TRACK;

const osmandTileURL = {
    uiname: 'Mapnik (tiles)',
    key: 'mapniktile',
    tileSize: 512,
    url: 'https://tile.osmand.net/hd/{z}/{x}/{y}.png',
};

async function loadListFiles(
    loginUser,
    listFiles,
    setListFiles,
    gpxFiles,
    setGpxFiles,
    setFavorites,
    setUpdateMarkers,
    setProcessingGroups,
    setVisibleTracks
) {
    if (loginUser !== listFiles.loginUser) {
        if (!loginUser) {
            setListFiles({});
            setFavorites({});
        } else {
            const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
            if (response.ok) {
                await response.json().then(async (res) => {
                    if (res) {
                        res.loginUser = loginUser;
                        res.totalUniqueZipSize = 0;
                        res.uniqueFiles.forEach((f) => {
                            res.totalUniqueZipSize += f.zipSize;
                        });
                        setListFiles(res);

                        await Promise.all([
                            addOpenedTracks(getGpxFiles(res), gpxFiles, setGpxFiles, setVisibleTracks),
                            addOpenedFavoriteGroups(
                                TracksManager.getFavoriteGroups(res),
                                setFavorites,
                                setUpdateMarkers,
                                setProcessingGroups
                            ),
                        ]);
                    }
                });
            }
        }
    }
}

async function addOpenedTracks(files, gpxFiles, setGpxFiles, setVisibleTracks) {
    const newGpxFiles = Object.assign({}, gpxFiles);

    // get saved visible tracks (only new)
    let savedVisible = JSON.parse(localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG));
    let selectedFiles = [];
    if (savedVisible?.new) {
        savedVisible.new.forEach((name) => {
            const matchingFile = files.find((f) => f.name === name);
            if (matchingFile) {
                if (savedVisible.open && savedVisible.open.includes(name)) {
                    selectedFiles.push(_.indexOf(files, matchingFile));
                }
            }
        });
    }
    if (savedVisible?.old) {
        savedVisible.old.forEach((name) => {
            const matchingFile = files.find((f) => f.name === name);
            if (matchingFile) {
                if (savedVisible.open && savedVisible.open.includes(name)) {
                    selectedFiles.push(_.indexOf(files, matchingFile));
                }
            }
        });
    }

    for (let ind of selectedFiles) {
        let file = files[ind];
        newGpxFiles[file.name] = {
            url: null,
            clienttimems: file.clienttimems,
            updatetimems: file.updatetimems,
            showOnMap: false,
            name: file.name,
            type: 'GPX',
        };
    }
    setGpxFiles(newGpxFiles);
    // add visible tracks to old objects, after next page reload they will be deleted
    setVisibleTracks({
        new: [],
        old: Object.values(newGpxFiles),
    });
    // save them to localStorage
    localStorage.setItem(
        TracksManager.TRACK_VISIBLE_FLAG,
        JSON.stringify({
            new: [],
            old: Object.keys(newGpxFiles),
        })
    );
}

async function checkUserLogin(loginUser, setLoginUser, emailCookie, setEmailCookie, setAccountInfo) {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/info`, {
        method: 'GET',
    });
    if (response.data) {
        if (loginUser !== 'INIT') {
            await getAccountInfo(setAccountInfo);
        }
        const user = await response.json();
        let newUser = user?.username;
        if (loginUser !== newUser) {
            if (newUser) {
                setEmailCookie(newUser, { days: 30, SameSite: 'Strict' });
            }
            setLoginUser(newUser);
        }
    } else {
        setLoginUser(null);
    }
}

async function loadTileUrls(setAllTileURLs) {
    const response = await apiGet(`${process.env.REACT_APP_TILES_API_SITE}/tile/styles`, {});
    if (response.ok) {
        let data = await response.json();
        Object.values(data).forEach((item) => {
            item.tileSize = 256 << item.tileSizeLog;
            item.url = process.env.REACT_APP_TILES_API_SITE + '/tile/' + item.key + '/{z}/{x}/{y}.png';
            item.uiname = item.name.charAt(0).toUpperCase() + item.name.slice(1);
            if (item.tileSize > 256) {
                item.uiname += ' HD';
            }
        });
        data[osmandTileURL.key] = osmandTileURL;
        setAllTileURLs(data);
    }
}

const AppContext = React.createContext();

export const AppContextProvider = (props) => {
    seleniumUpdateActivity();

    const [globalConfirmation, setGlobalConfirmation] = useState(null);
    const [fitBoundsPadding, mutateFitBoundsPadding] = useMutator({ left: 0, top: 0, right: 0, bottom: 0 });

    const searchParams = new URLSearchParams(window.location.search);
    const [weatherLayers, setWeatherLayers] = useState(WeatherManager.getLayers());
    const [weatherDate, setWeatherDate] = useState(WeatherManager.getWeatherDate());
    const [weatherType, setWeatherType] = useState('gfs');
    const [gpxLoading, setGpxLoading] = useState(false);
    const [localTracksLoading, setLocalTracksLoading] = useState(false);
    // cookie to store email logged in
    const [emailCookie, setEmailCookie] = useCookie('email', '');
    // server state of login
    const [loginUser, setLoginUser] = useState('INIT');
    const [accountInfo, setAccountInfo] = useState(null);
    const [wantDeleteAcc, setWantDeleteAcc] = useState(false);
    const [listFiles, setListFiles] = useState({});
    const [gpxFiles, mutateGpxFiles, setGpxFiles] = useMutator({});
    const [searchCtx, setSearchCtx] = useState({});

    const [selectedGpxFile, setSelectedGpxFile] = useState({});
    const [unverifiedGpxFile, setUnverifiedGpxFile] = useState(null); // see Effect in LocalClientTrackLayer

    const [mapMarkerListener, setMapMarkerListener] = useState(null);
    const [tracksGroups, setTracksGroups] = useState([]);

    const [tileURL, setTileURL] = useState(osmandTileURL);
    const [allTileURLs, setAllTileURLs] = useState({});

    let pinInit;
    if (searchParams.get('pin')) {
        let arr = searchParams.get('pin').split(',');
        pinInit = { lat: parseFloat(arr[0]), lng: parseFloat(arr[1]) };
    }
    const [pinPoint, setPinPoint] = useState(pinInit);

    const [weatherPoint, setWeatherPoint] = useState(null);

    // favorites
    const [favorites, setFavorites] = useState({});
    const [updateMarkers, setUpdateMarkers] = useState(null);
    const [zoomToFavGroup, setZoomToFavGroup] = useState(null);
    const [addFavorite, setAddFavorite] = useState({
        add: false,
        location: null,
    });
    const [processingGroups, setProcessingGroups] = useState(false);

    const [localTracks, setLocalTracks] = useState([]);
    const [visibleTracks, setVisibleTracks] = useState({});
    const [currentObjectType, setCurrentObjectType] = useState(null);
    const [headerText, setHeaderText] = useState({
        search: { text: '' },
        weather: { text: '' },
        tracks: { text: '' },
        route: { text: '' },
        welcome: { text: process.env.REACT_APP_WEBSITE_NAME },
    });
    const [createTrack, setCreateTrack] = useState(null);
    const [loadingContextMenu, setLoadingContextMenu] = useState(false);
    const [updateInfoBlock, setUpdateInfoBlock] = useState(false);
    const [trackProfileManager, setTrackProfileManager] = useState({});
    const [pointContextMenu, setPointContextMenu] = useState({});
    const [routingErrorMsg, setRoutingErrorMsg] = useState(null);
    const [trackErrorMsg, setTrackErrorMsg] = useState(null);
    const [trackState, setTrackState] = useState({
        update: false, // push track to undo/redo
        // pastStates: [], // was used for logs
        // futureStates: [], // was used for logs
    });
    const [openedPopper, setOpenedPopper] = useState(null);
    const [showPoiCategories, setShowPoiCategories] = useState([]);
    const [poiCategory, setPoiCategories] = useState(null);

    const [routingCache, mutateRoutingCache] = useMutator({});
    const [routingNewSegments, setRoutingNewSegments] = useState([]);
    const [processRouting, setProcessRouting] = useState(false);
    const [selectedWpt, setSelectedWpt] = useState(null);

    const [routeTrackFile, setRouteTrackFile] = useState(null);

    const [trackLoading, setTrackLoading] = useState([]);

    const [routeObject, setRouteObject] = useState(() => new geoObject());
    const [trackRouter, setTrackRouter] = useState(() => new geoRouter());
    const [afterPointRouter, setAfterPointRouter] = useState(() => new geoRouter());
    const [beforePointRouter, setBeforePointRouter] = useState(() => new geoRouter());

    routeObject.initSetter({ setter: setRouteObject });
    trackRouter.initSetter({ setter: setTrackRouter });
    afterPointRouter.initSetter({ setter: setAfterPointRouter });
    beforePointRouter.initSetter({ setter: setBeforePointRouter });

    const [trackRange, setTrackRange] = useState(null);

    const [showPoints, mutateShowPoints] = useMutator({
        points: true,
        wpts: true,
    });

    const [develFeatures, setDevelFeatures] = useState(process.env.REACT_APP_DEVEL_FEATURES === 'yes');
    const [infoBlockWidth, setInfoBlockWidth] = useState(0);

    const [configureMapState, setConfigureMapState] = useState(getConfigureMap);

    const [selectedSort, setSelectedSort] = useState({});

    function getConfigureMap() {
        let savedConfigureMap = localStorage.getItem(LOCAL_STORAGE_CONFIGURE_MAP);
        return savedConfigureMap ? JSON.parse(savedConfigureMap) : defaultConfigureMapStateValues;
    }

    useEffect(() => {
        TracksManager.loadTracks(setLocalTracksLoading).then((tracks) => {
            setLocalTracks(tracks);
        });
    }, []);

    useEffect(() => {
        PoiManager.getPoiCategories(setLocalTracksLoading).then((categories) => {
            PoiManager.getTopPoiFilters(setLocalTracksLoading).then((filters) => {
                setPoiCategories({
                    categories: categories,
                    filters: filters,
                });
            });
        });
    }, []);

    useEffect(() => {
        const sequentialLoad = async () => {
            await routeObject.loadProviders({ parseQueryString: true });
            await trackRouter.loadProviders();
            await afterPointRouter.loadProviders();
            await beforePointRouter.loadProviders();
        };
        sequentialLoad();
    }, []);

    useEffect(() => {
        loadTileUrls(setAllTileURLs);
    }, []);

    useEffect(() => {
        checkUserLogin(loginUser, setLoginUser, emailCookie, setEmailCookie, setAccountInfo);
    }, [loginUser]);

    useEffect(() => {
        if (loginUser !== 'INIT') {
            setGpxLoading(true);
            loadListFiles(
                loginUser,
                listFiles,
                setListFiles,
                gpxFiles,
                setGpxFiles,
                setFavorites,
                setUpdateMarkers,
                setProcessingGroups,
                setVisibleTracks
            ).finally(() => setGpxLoading(false));
        }
    }, [loginUser]);

    const [openGroups, setOpenGroups] = useState([]);

    const [stopUseGeoLocation, setStopUseGeoLocation] = useState(false);

    return (
        <AppContext.Provider
            value={{
                globalConfirmation,
                setGlobalConfirmation,
                weatherLayers,
                setWeatherLayers,
                weatherDate,
                setWeatherDate,
                weatherType,
                setWeatherType,
                emailCookie,
                setEmailCookie,
                listFiles,
                setListFiles,
                loginUser,
                setLoginUser,
                gpxFiles,
                setGpxFiles,
                mutateGpxFiles,
                gpxLoading,
                setGpxLoading,
                selectedGpxFile,
                setSelectedGpxFile,
                unverifiedGpxFile,
                setUnverifiedGpxFile,
                mapMarkerListener,
                setMapMarkerListener,
                tileURL,
                setTileURL,
                allTileURLs,
                pinPoint,
                setPinPoint,
                trackRouter,
                afterPointRouter,
                beforePointRouter,
                weatherPoint,
                setWeatherPoint,
                routeTrackFile,
                setRouteTrackFile,
                searchCtx,
                setSearchCtx,
                favorites,
                setFavorites,
                addFavorite,
                setAddFavorite,
                localTracks,
                setLocalTracks,
                currentObjectType,
                setCurrentObjectType,
                headerText,
                setHeaderText,
                tracksGroups,
                setTracksGroups,
                createTrack,
                setCreateTrack,
                loadingContextMenu,
                setLoadingContextMenu,
                updateInfoBlock,
                setUpdateInfoBlock,
                trackProfileManager,
                setTrackProfileManager,
                routingErrorMsg,
                setRoutingErrorMsg,
                pointContextMenu,
                setPointContextMenu,
                trackState,
                setTrackState,
                localTracksLoading,
                setLocalTracksLoading,
                openedPopper,
                setOpenedPopper,
                routingCache,
                mutateRoutingCache,
                routingNewSegments,
                setRoutingNewSegments,
                processRouting,
                setProcessRouting,
                selectedWpt,
                setSelectedWpt,
                trackRange,
                setTrackRange,
                showPoints,
                mutateShowPoints,
                showPoiCategories,
                setShowPoiCategories,
                poiCategory,
                setPoiCategories,
                develFeatures,
                setDevelFeatures,
                infoBlockWidth,
                setInfoBlockWidth,
                wantDeleteAcc,
                setWantDeleteAcc,
                routeObject,
                fitBoundsPadding,
                mutateFitBoundsPadding,
                openGroups,
                setOpenGroups,
                trackErrorMsg,
                setTrackErrorMsg,
                trackLoading,
                setTrackLoading,
                accountInfo,
                setAccountInfo,
                stopUseGeoLocation,
                setStopUseGeoLocation,
                configureMapState,
                setConfigureMapState,
                zoomToFavGroup,
                setZoomToFavGroup,
                updateMarkers,
                setUpdateMarkers,
                processingGroups,
                setProcessingGroups,
                selectedSort,
                setSelectedSort,
                visibleTracks,
                setVisibleTracks,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;
