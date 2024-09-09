import React, { useEffect, useRef, useState } from 'react';
import useCookie from 'react-use-cookie';
import Utils, { seleniumUpdateActivity, useMutator } from '../util/Utils';
import TracksManager, { getGpxFiles } from '../manager/track/TracksManager';
import { addOpenedFavoriteGroups } from '../manager/FavoritesManager';
import PoiManager, { getCategoryIcon } from '../manager/PoiManager';
import { apiGet } from '../util/HttpApi';
import { geoRouter } from '../store/geoRouter/geoRouter.js';
import { geoObject } from '../store/geoObject/geoObject.js';
import WeatherManager from '../manager/WeatherManager';
import { getAccountInfo, INIT_LOGIN_STATE } from '../manager/LoginManager';
import { cloneDeep, isEmpty } from 'lodash';
import { INTERACTIVE_LAYER } from '../map/layers/CustomTileLayer';

export const OBJECT_TYPE_LOCAL_TRACK = 'local_track'; // track in localStorage
export const OBJECT_TYPE_CLOUD_TRACK = 'cloud_track'; // track in OsmAnd Cloud

export const OBJECT_TYPE_NAVIGATION_TRACK = 'route_track'; // track converted from Navigation result
export const OBJECT_TYPE_NAVIGATION_ALONE = 'navigation'; // special case of OBJECT_TYPE_NAVIGATION_TRACK (Navigation w/o InfoBlock)

export const OBJECT_TYPE_FAVORITE = 'favorite';
export const OBJECT_TYPE_WEATHER = 'weather';
export const OBJECT_TYPE_POI = 'poi';

export const OBJECT_CONFIGURE_MAP = 'configure_map';
export const OBJECT_EXPLORE = 'explore';
export const OBJECT_SEARCH = 'search';
export const OBJECT_GLOBAL_SETTINGS = 'global_settings';
export const LOCAL_STORAGE_CONFIGURE_MAP = 'configureMap';

export const defaultConfigureMapStateValues = {
    showFavorites: true,
    showPoi: false,
    showTracks: false,
};

export const isLocalTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_LOCAL_TRACK;
export const isCloudTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_CLOUD_TRACK;
export const isRouteTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_NAVIGATION_TRACK;
export const isTrack = (ctx) => isLocalTrack(ctx) || isCloudTrack(ctx) || isRouteTrack(ctx);

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
    const promises = [];
    const newGpxFiles = Object.assign({}, gpxFiles);

    let savedVisible = JSON.parse(localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG));

    let newVisFiles = {
        old: [],
        new: [],
    };

    let newVisFilesNames = {
        old: savedVisible?.old ? savedVisible?.old : [],
        new: [],
        open: [],
    };

    let newSelectedFiles = [];
    let oldSelectedFiles = [];
    if (savedVisible?.new && savedVisible.new.length > 0) {
        savedVisible.new.forEach((name) => {
            if (savedVisible.open.includes(name)) {
                newVisFilesNames.new.push(name);
                newVisFilesNames.open.push(name);
            } else {
                newVisFilesNames.old.push(name);
            }
        });

        newVisFilesNames.new.forEach((name) => {
            const matchingFileInd = files.findIndex((f) => f.name === name);
            if (matchingFileInd !== -1) {
                newSelectedFiles.push(matchingFileInd);
            }
        });
    }
    newVisFilesNames.old = newVisFilesNames?.old.splice(-10);
    newVisFilesNames.old.forEach((name) => {
        const matchingFileInd = files.findIndex((f) => f.name === name);
        if (matchingFileInd !== -1) {
            oldSelectedFiles.push(matchingFileInd);
        }
    });

    for (let ind of oldSelectedFiles) {
        let file = files[ind];
        newGpxFiles[file.name] = {
            url: null,
            clienttimems: file.clienttimems,
            updatetimems: file.updatetimems,
            showOnMap: false,
            name: file.name,
            type: 'GPX',
        };
        newVisFiles.old.push(newGpxFiles[file.name]);
    }

    for (let ind of newSelectedFiles) {
        let file = files[ind];
        let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(
            file.type
        )}&name=${encodeURIComponent(file.name)}`;
        newGpxFiles[file.name] = {
            url: url,
            clienttimems: file.clienttimems,
            updatetimems: file.updatetimems,
            showOnMap: true,
            name: file.name,
            type: 'GPX',
        };
        let f = await Utils.getFileData(newGpxFiles[file.name]);
        const gpxfile = new File([f], file.name, {
            type: 'text/plain',
        });

        promises.push(
            TracksManager.getTrackData(gpxfile).then((track) => {
                track.name = file.name;
                Object.keys(track).forEach((t) => {
                    newGpxFiles[file.name][t] = track[t];
                });
                newVisFiles.new.push(newGpxFiles[file.name]);
            })
        );
    }

    await Promise.all(promises).then(() => {
        setGpxFiles(newGpxFiles);
        setVisibleTracks(newVisFiles);
    });

    localStorage.setItem(TracksManager.TRACK_VISIBLE_FLAG, JSON.stringify(newVisFilesNames));
}

async function checkUserLogin(loginUser, setLoginUser, emailCookie, setEmailCookie, setAccountInfo) {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/info`, {
        method: 'GET',
    });
    if (response.data) {
        if (loginUser !== INIT_LOGIN_STATE) {
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

        data[INTERACTIVE_LAYER] = createInteractiveMap(data, 'hd');

        Object.values(data).forEach((item) => {
            item.tileSize = 256 << item.tileSizeLog;
            item.url = process.env.REACT_APP_TILES_API_SITE + '/tile/' + item.key + '/{z}/{x}/{y}.png';
            if (item.key === INTERACTIVE_LAYER) {
                item.infoUrl =
                    process.env.REACT_APP_TILES_API_SITE + '/tile/' + 'info/' + item.key + '/{z}/{x}/{y}.json';
            }
            item.uiname = item.name.charAt(0).toUpperCase() + item.name.slice(1);
            if (item.tileSize > 256) {
                item.uiname += ' HD';
            }
        });
        data[osmandTileURL.key] = osmandTileURL;
        setAllTileURLs(data);
    }
}

function createInteractiveMap(data, type) {
    let interactiveMap = cloneDeep(data[type]);
    const name = type === 'hd' ? INTERACTIVE_LAYER : `${INTERACTIVE_LAYER}-${type}`;
    interactiveMap.name = 'Interactive';
    interactiveMap.key = name;

    return interactiveMap;
}

const AppContext = React.createContext();

export const AppContextProvider = (props) => {
    seleniumUpdateActivity();

    const [globalConfirmation, setGlobalConfirmation] = useState(null);
    const [fitBoundsPadding, mutateFitBoundsPadding] = useMutator({ left: 0, top: 0, right: 0, bottom: 0 });

    const [openMenu, setOpenMenu] = useState(null);
    const [openContextMenu, setOpenContextMenu] = useState(false);

    const [cloudSettings, setCloudSettings] = useState({
        changes: false,
        trash: false,
    });

    //pages
    const [prevPageUrl, setPrevPageUrl] = useState(null);
    const [pageParams, setPageParams] = useState({});

    const searchParams = new URLSearchParams(window.location.search);
    // weather
    const [weatherLayers, setWeatherLayers] = useState(WeatherManager.getLayers());
    const [weatherDate, setWeatherDate] = useState(new Date());
    const [weatherType, setWeatherType] = useState('gfs');
    const [renderingType, setRenderingType] = useState(null);
    const [forecastLoading, setForecastLoading] = useState(false);
    const [mapBbox, setMapBbox] = useState(null);

    const [gpxLoading, setGpxLoading] = useState(false);
    const [localTracksLoading, setLocalTracksLoading] = useState(false);
    // cookie to store email logged in
    const [emailCookie, setEmailCookie] = useCookie('email', '');
    // login
    const [loginUser, setLoginUser] = useState(INIT_LOGIN_STATE);
    const [openLoginMenu, setOpenLoginMenu] = useState(false);
    const [loginState, setLoginState] = useState({ default: true });
    const [accountInfo, setAccountInfo] = useState(null);
    const [wantDeleteAcc, setWantDeleteAcc] = useState(false);
    const [loginError, setLoginError] = useState(null);
    // files
    const [listFiles, setListFiles] = useState({});
    const [gpxFiles, mutateGpxFiles, setGpxFiles] = useMutator({});
    // search
    const searchTooltipRef = useRef(null);
    const searchPointerRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchResult, setSearchResult] = useState(null);
    const [processingSearch, setProcessingSearch] = useState(false);
    const [zoomToMapObj, setZoomToMapObj] = useState(false);

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
    const [openVisibleMenu, setOpenVisibleMenu] = useState(false);
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
    const [loadingContextItem, setLoadingContextItem] = useState(null);
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

    //poi
    const [showPoiCategories, setShowPoiCategories] = useState([]);
    const [poiCategory, setPoiCategories] = useState(null);
    const [poiIconCache, setPoiIconCache] = useState({});
    const [categoryIcons, setCategoryIcons] = useState({});

    const [wikiPlaces, setWikiPlaces] = useState(null);
    const [photoGallery, setPhotoGallery] = useState(null);
    const [selectedPhotoInd, setSelectedPhotoInd] = useState(-1);
    const [searchSettings, setSearchSettings] = useState({});

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

    const [selectedPoiId, setSelectedPoiId] = useState(null);

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
        if (wantDeleteAcc) {
            setLoginError('Please log in to delete your account.');
        } else {
            setLoginError(null);
        }
    }, [wantDeleteAcc]);

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
                    filters: removeUnusedFilters(filters),
                });
            });
        });

        function removeUnusedFilters(filters) {
            if (filters) {
                return filters.filter((f) => f !== 'routes');
            }
            return null;
        }
    }, []);

    useEffect(() => {
        async function loadIcons() {
            const icons = {};
            const filters = poiCategory?.filters;

            if (filters) {
                for (const filter of filters) {
                    icons[filter] = await getCategoryIcon(filter);
                }
                setCategoryIcons(icons);
            }
        }
        if (isEmpty(categoryIcons) && poiCategory !== null && poiCategory?.filters !== null) {
            loadIcons().then();
        }
    }, [poiCategory?.filters]);

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
        if (loginUser !== INIT_LOGIN_STATE) {
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
                routeTrackFile,
                setRouteTrackFile,
                searchQuery,
                setSearchQuery,
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
                poiIconCache,
                setPoiIconCache,
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
                forecastLoading,
                setForecastLoading,
                renderingType,
                setRenderingType,
                mapBbox,
                setMapBbox,
                wikiPlaces,
                setWikiPlaces,
                searchSettings,
                setSearchSettings,
                loadingContextItem,
                setLoadingContextItem,
                selectedPoiId,
                setSelectedPoiId,
                openMenu,
                setOpenMenu,
                openContextMenu,
                setOpenContextMenu,
                prevPageUrl,
                setPrevPageUrl,
                pageParams,
                setPageParams,
                photoGallery,
                setPhotoGallery,
                selectedPhotoInd,
                setSelectedPhotoInd,
                openVisibleMenu,
                setOpenVisibleMenu,
                cloudSettings,
                setCloudSettings,
                categoryIcons,
                setCategoryIcons,
                searchResult,
                setSearchResult,
                zoomToMapObj,
                setZoomToMapObj,
                processingSearch,
                setProcessingSearch,
                searchTooltipRef,
                searchPointerRef,
                openLoginMenu,
                setOpenLoginMenu,
                loginState,
                setLoginState,
                loginError,
                setLoginError,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;
