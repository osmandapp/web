import React, { useContext, useEffect, useRef, useState } from 'react';
import LoginContext from '../context/LoginContext';
import Utils, { seleniumUpdateActivity, useMutator } from '../util/Utils';
import TracksManager, {
    getGpxFiles,
    GPX_FILE_EXT,
    preparedGpxFile,
    TRACK_VISIBLE_FLAG,
} from '../manager/track/TracksManager';
import { addOpenedFavoriteGroups } from '../manager/FavoritesManager';
import PoiManager, { getCategoryIcon } from '../manager/PoiManager';
import { apiGet, apiPost } from '../util/HttpApi';
import { geoRouter } from '../store/geoRouter/geoRouter.js';
import { geoObject } from '../store/geoObject/geoObject.js';
import WeatherManager from '../manager/WeatherManager';
import { INIT_LOGIN_STATE } from '../manager/LoginManager';
import isEmpty from 'lodash-es/isEmpty';
import cloneDeep from 'lodash-es/cloneDeep';
import { INTERACTIVE_LAYER } from '../map/layers/CustomTileLayer';
import { NO_HEIGHTMAP } from '../menu/configuremap/TerrainConfig';
import { getShareWithMe } from '../manager/ShareManager';
import { FAVOURITES, GLOBAL_GRAPH_HEIGHT_SIZE, GPX, POI_URL } from '../manager/GlobalManager';
import { loadLocalTracksFromStorage } from './LocalTrackStorage';
import { units } from '../menu/settings/units/UnitsMenu';
import { getSortFromDB } from './FavoriteStorage';
import MarkerOptions from '../map/markers/MarkerOptions';
import { FORECAST_SOURCE_PARAM } from '../menu/weather/Weather';
import {
    EXPLORE_OBJS_KEY,
    FAVORITES_KEY,
    POI_OBJECTS_KEY,
    SEARCH_RESULTS_KEY,
    TRACKS_KEY,
} from '../util/hooks/menu/useRecentDataSaver';

export const OBJECT_TYPE_LOCAL_TRACK = 'local_track'; // track in localStorage
export const OBJECT_TYPE_CLOUD_TRACK = 'cloud_track'; // track in OsmAnd Cloud

export const OBJECT_TYPE_NAVIGATION_TRACK = 'route_track'; // track converted from Navigation result
export const OBJECT_TYPE_NAVIGATION_ALONE = 'navigation'; // special case of OBJECT_TYPE_NAVIGATION_TRACK (Navigation w/o InfoBlock)

export const OBJECT_TYPE_FAVORITE = 'favorite';
export const OBJECT_TYPE_WEATHER = 'weather';
export const OBJECT_TYPE_POI = 'poi';

export const OBJECT_CONFIGURE_MAP = 'configure_map';
export const OBJECT_SEARCH = 'search';
export const OBJECT_GLOBAL_SETTINGS = 'global_settings';
export const OBJECT_TRACK_ANALYZER = 'track_analyzer';
export const LOCAL_STORAGE_CONFIGURE_MAP = 'configureMap';
export const LOCAL_STORAGE_UNITS_SETTINGS = 'unitsSettings';
export const OBJECT_TYPE_TRAVEL = 'travel';
export const OBJECT_TYPE_SHARE_FILE = 'share_file';

const PIN_PARAM = 'pin';

export const MAX_RECENT_OBJS = 5;

export const defaultConfigureMapStateValues = {
    showFavorites: true,
    pois: [],
    showTracks: true,
    terrain: NO_HEIGHTMAP.key,
};

export const isLocalTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_LOCAL_TRACK;
export const isCloudTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_CLOUD_TRACK;
export const isRouteTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_NAVIGATION_TRACK;
export const isTravelTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_TRAVEL;
export const isShareTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_SHARE_FILE;
export const isTrack = (ctx) =>
    isLocalTrack(ctx) || isCloudTrack(ctx) || isRouteTrack(ctx) || isTravelTrack(ctx) || isShareTrack(ctx);
export const isTrackAnalyzer = (ctx) => ctx.currentObjectType === OBJECT_TRACK_ANALYZER;

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
    setVisibleTracks,
    setShareWithMeFiles,
    setUpdateFiles
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
                        getFilesForUpdateDetails(res.uniqueFiles, setUpdateFiles);
                        setListFiles(res);
                        const favFiles = await loadShareFiles(setShareWithMeFiles);
                        const ownFavorites = TracksManager.getFavoriteGroups(res);
                        const allFavorites = [...ownFavorites, ...favFiles];
                        await Promise.all([
                            addOpenedTracks(getGpxFiles(res), gpxFiles, setGpxFiles, setVisibleTracks),
                            addOpenedFavoriteGroups(allFavorites, setUpdateMarkers, setProcessingGroups),
                        ]);
                    }
                });
            }
        }
    }
}

export function getFilesForUpdateDetails(files, setUpdateFiles) {
    const filesToUpdate = files
        .filter((f) => f.details && f.details.update && f.type === GPX && f.name.toLowerCase().endsWith(GPX_FILE_EXT))
        .map((f) => ({
            name: f.name,
            type: f.type,
            isError: !!f.details.error,
            time: f.details.updatetime,
        }));
    if (filesToUpdate.length > 0) {
        setUpdateFiles(filesToUpdate);
    }
}

export async function loadShareFiles(setShareWithMeFiles) {
    const tracks = await getShareWithMe({ type: GPX });
    const favorites = await getShareWithMe({ type: FAVOURITES });
    const preparedTracks =
        tracks.length === 0
            ? {}
            : Object.fromEntries(
                  getGpxFiles(tracks).map((t) => {
                      return [t.name, { ...t, sharedWithMe: true }];
                  })
              );
    setShareWithMeFiles((prev) => ({
        ...prev,
        tracks: preparedTracks,
        favorites: favorites?.uniqueFiles,
    }));
    return favorites?.uniqueFiles.map((f) => {
        return {
            ...f,
            sharedWithMe: true,
        };
    });
}

async function addOpenedTracks(files, gpxFiles, setGpxFiles, setVisibleTracks) {
    const promises = [];
    const newGpxFiles = Object.assign({}, gpxFiles);

    let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));

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
        const file = files[ind];
        let oneGpxFile = preparedGpxFile({ file });
        oneGpxFile.showOnMap = true;
        newGpxFiles[file.name] = oneGpxFile;
        let f = await Utils.getFileData(newGpxFiles[file.name]);
        const gpxfile = new File([f], file.name, {
            type: 'text/plain',
        });

        promises.push(
            TracksManager.getTrackData(gpxfile).then(async (track) => {
                track.name = file.name;
                track.info = await Utils.getFileInfo(oneGpxFile);
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

    localStorage.setItem(TRACK_VISIBLE_FLAG, JSON.stringify(newVisFilesNames));
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
    const { loginUser } = useContext(LoginContext);

    seleniumUpdateActivity();

    const [processingSaveTrack, setProcessingSaveTrack] = useState(false);

    const [globalConfirmation, setGlobalConfirmation] = useState(null);
    const [fitBoundsPadding, mutateFitBoundsPadding] = useMutator({ left: 0, top: 0, right: 0, bottom: 0 });

    const [openMenu, setOpenMenu] = useState(null);
    const [openContextMenu, setOpenContextMenu] = useState(false);

    const [cloudSettings, setCloudSettings] = useState({
        changes: false,
        trash: false,
    });

    const [unitsSettings, setUnitsSettings] = useState(getUnitsSettings);

    const [notification, setNotification] = useState(null);

    const [zoomToCoords, setZoomToCoords] = useState(null);

    //pages
    const [prevPageUrl, setPrevPageUrl] = useState(null);
    const [pageParams, setPageParams] = useState({});

    const searchParams = new URLSearchParams(globalThis.location.search);
    // weather
    const [weatherLayers, setWeatherLayers] = useState(WeatherManager.getLayers());
    const [weatherDate, setWeatherDate] = useState(new Date());
    const [weatherType, setWeatherType] = useState(searchParams.get(FORECAST_SOURCE_PARAM) ?? 'gfs');
    const [renderingType, setRenderingType] = useState(null);
    const [forecastLoading, setForecastLoading] = useState(false);
    const [mapBbox, setMapBbox] = useState(null);

    const [gpxLoading, setGpxLoading] = useState(false);
    const [localTracksLoading, setLocalTracksLoading] = useState(false);
    // files
    const [listFiles, setListFiles] = useState({});
    const [updateFiles, setUpdateFiles] = useState(null);
    const [gpxFiles, mutateGpxFiles, setGpxFiles] = useMutator({});
    // search
    const searchTooltipRef = useRef(null);
    const searchPointerRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchResult, setSearchResult] = useState(null);
    const [selectedSearchMarker, setSelectedSearchMarker] = useState(null);
    const [processingSearch, setProcessingSearch] = useState(false);
    const [zoomToMapObj, setZoomToMapObj] = useState({
        obj: null,
        zoom: 17,
        animateDist: 1000000,
    });
    const [visibleBounds, setVisibleBounds] = useState(null);
    const [exploreMenu, setExploreMenu] = useState(false);
    const [poiCatMenu, setPoiCatMenu] = useState(false);
    const [poiByUrl, setPoiByUrl] = useState(null);

    // travel
    const [openTravel, setOpenTravel] = useState(false);
    const [travelFilter, setTravelFilter] = useState(null);
    const [searchTravelRoutes, setSearchTravelRoutes] = useState(null);
    const [selectedTravelRoute, setSelectedTravelRoute] = useState(null);
    // share
    const [shareFile, setShareFile] = useState(null);
    const [updatedRequestList, setUpdatedRequestList] = useState([]);
    const [shareFileMarkers, setShareFileMarkers] = useState(null);
    const [shareFilesCache, setShareFilesCache] = useState({});
    const [shareWithMeFiles, setShareWithMeFiles] = useState(null);
    const [fitBoundsShareTracks, setFitBoundsShareTracks] = useState(null);
    // selected track
    const [selectedGpxFile, setSelectedGpxFile] = useState({});
    const [unverifiedGpxFile, setUnverifiedGpxFile] = useState(null); // see Effect in LocalClientTrackLayer

    const [mapMarkerListener, setMapMarkerListener] = useState(null);
    const [tracksGroups, setTracksGroups] = useState([]);

    const [tileURL, setTileURL] = useState(osmandTileURL);
    const [allTileURLs, setAllTileURLs] = useState({});
    const [heightmap, setHeightmap] = useState(null);
    const [processHeightmaps, setProcessHeightmaps] = useState(false);

    let pinInit;
    if (searchParams.get(PIN_PARAM) && !globalThis.location.pathname.includes(POI_URL)) {
        const arr = searchParams.get(PIN_PARAM).split(',');
        if (arr.length === 2 && !Number.isNaN(Number.parseFloat(arr[0])) && !Number.isNaN(Number.parseFloat(arr[1]))) {
            pinInit = { lat: Number.parseFloat(arr[0]), lng: Number.parseFloat(arr[1]) };
        }
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
    const [favLoading, setFavLoading] = useState(false);
    const [removeFavGroup, setRemoveFavGroup] = useState(null);
    const [usedIcons, setUsedIcons] = useState(new Set([MarkerOptions.DEFAULT_WPT_ICON]));

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
    const [showPoiConfig, setShowPoiConfig] = useState([]);
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
    const [infoBlockWidth, setInfoBlockWidth] = useState('0');

    const [configureMapState, setConfigureMapState] = useState(getConfigureMap);

    // ex. tracks:{"": 'za', new!!!: 'za'}
    const [selectedSort, setSelectedSort] = useState({});

    const [openProFeatures, setOpenProFeatures] = useState(null);

    // track analyzer
    const [trackAnalyzer, setTrackAnalyzer] = useState(null);
    const [excludedSegments, setExcludedSegments] = useState(new Set());
    const [graphHighlightedPoint, setGraphHighlightedPoint] = useState(null);
    const [sortedSegments, setSortedSegments] = useState(null);

    const [recentObjs, setRecentObjs] = useState({
        [TRACKS_KEY]: [],
        [FAVORITES_KEY]: [],
        [POI_OBJECTS_KEY]: [],
        [EXPLORE_OBJS_KEY]: [],
        [SEARCH_RESULTS_KEY]: [],
    });

    const [selectedFavoriteObj, setSelectedFavoriteObj] = useState(null);
    const [selectedCloudTrackObj, setSelectedCloudTrackObj] = useState(null);
    const [selectedLocalTrackObj, setSelectedLocalTrackObj] = useState(null);
    const [selectedPoiObj, setSelectedPoiObj] = useState(null);

    const [processingPoiByUrl, setProcessingPoiByUrl] = useState(false);

    const [closeMapObj, setCloseMapObj] = useState(false);
    const [saveTrackToCloud, setSaveTrackToCloud] = useState(false);

    const [processingAnalytics, setProcessingAnalytics] = useState(false);

    useEffect(() => {
        async function loadSort() {
            try {
                const sort = await getSortFromDB();
                if (sort) {
                    setSelectedSort(sort);
                }
            } catch (e) {
                console.error('Failed to load sort from DB', e);
            }
        }
        loadSort().then();
    }, []);

    // global graph
    const [globalGraph, setGlobalGraph] = useState({
        show: false,
        size: GLOBAL_GRAPH_HEIGHT_SIZE,
    });

    function getConfigureMap() {
        const TIME_UPDATE_CONFIGURE_MAP = 1744806975000; // 2025-04-16
        let savedConfigureMap = localStorage.getItem(LOCAL_STORAGE_CONFIGURE_MAP);
        if (savedConfigureMap) {
            savedConfigureMap = JSON.parse(savedConfigureMap);
            if (!savedConfigureMap.updateTime || savedConfigureMap.updateTime < TIME_UPDATE_CONFIGURE_MAP) {
                savedConfigureMap = defaultConfigureMapStateValues;
                savedConfigureMap.updateTime = TIME_UPDATE_CONFIGURE_MAP;
                localStorage.setItem(LOCAL_STORAGE_CONFIGURE_MAP, JSON.stringify(savedConfigureMap));
                return defaultConfigureMapStateValues;
            }
            setHeightmap(savedConfigureMap.terrain);
            if (!isEmpty(savedConfigureMap.pois)) {
                setShowPoiCategories(savedConfigureMap.pois);
            }
            return savedConfigureMap;
        }
        return defaultConfigureMapStateValues;
    }

    function getUnitsSettings() {
        const saved = localStorage.getItem(LOCAL_STORAGE_UNITS_SETTINGS);
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            len: units.len.defaultValue,
            speed: units.speed.defaultValue,
        };
    }

    useEffect(() => {
        Object.keys(localStorage).forEach((name) => {
            if (name.startsWith('localTrack_') || name.startsWith('favorites')) {
                localStorage.removeItem(name);
            }
        });
        loadLocalTracksFromStorage(setLocalTracksLoading).then((tracks) => {
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
        const update = async () => {
            if (updateFiles && !isEmpty(listFiles)) {
                const response = await apiPost(
                    `${process.env.REACT_APP_USER_API_SITE}/mapapi/refresh-list-files`,
                    updateFiles
                );

                if (response.ok) {
                    const updatedData = await response.json();
                    setListFiles((prev) => {
                        if (!prev.uniqueFiles) return prev;

                        const updatedUniqueFiles = prev.uniqueFiles.map((file) => {
                            const updatedFile = updatedData.find((f) => f.id === file.id);
                            return updatedFile ? { ...file, details: updatedFile.details } : file;
                        });

                        return {
                            ...prev,
                            uniqueFiles: updatedUniqueFiles,
                        };
                    });
                }
            }
        };

        update().then(() => {
            setUpdateFiles(null);
        });
    }, [updateFiles]);

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
                setVisibleTracks,
                setShareWithMeFiles,
                setUpdateFiles
            ).then(() => {
                setGpxLoading(false);
            });
        }
    }, [loginUser]);

    const [openGroups, setOpenGroups] = useState([]);
    const [openFavGroups, setOpenFavGroups] = useState([]);

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
                listFiles,
                setListFiles,
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
                heightmap,
                setHeightmap,
                processHeightmaps,
                setProcessHeightmaps,
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
                routeObject,
                fitBoundsPadding,
                mutateFitBoundsPadding,
                openGroups,
                setOpenGroups,
                trackErrorMsg,
                setTrackErrorMsg,
                trackLoading,
                setTrackLoading,
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
                processingSearch,
                setProcessingSearch,
                searchTooltipRef,
                searchPointerRef,
                favLoading,
                setFavLoading,
                searchTravelRoutes,
                setSearchTravelRoutes,
                selectedTravelRoute,
                setSelectedTravelRoute,
                travelFilter,
                setTravelFilter,
                openProFeatures,
                setOpenProFeatures,
                selectedSearchMarker,
                setSelectedSearchMarker,
                zoomToMapObj,
                setZoomToMapObj,
                shareFile,
                setShareFile,
                updatedRequestList,
                setUpdatedRequestList,
                shareFileMarkers,
                setShareFileMarkers,
                shareFilesCache,
                setShareFilesCache,
                shareWithMeFiles,
                setShareWithMeFiles,
                fitBoundsShareTracks,
                setFitBoundsShareTracks,
                trackAnalyzer,
                setTrackAnalyzer,
                excludedSegments,
                setExcludedSegments,
                globalGraph,
                setGlobalGraph,
                processingSaveTrack,
                setProcessingSaveTrack,
                graphHighlightedPoint,
                setGraphHighlightedPoint,
                sortedSegments,
                setSortedSegments,
                updateFiles,
                setUpdateFiles,
                unitsSettings,
                setUnitsSettings,
                removeFavGroup,
                setRemoveFavGroup,
                notification,
                setNotification,
                usedIcons,
                setUsedIcons,
                openFavGroups,
                setOpenFavGroups,
                recentObjs,
                setRecentObjs,
                selectedFavoriteObj,
                setSelectedFavoriteObj,
                selectedCloudTrackObj,
                setSelectedCloudTrackObj,
                visibleBounds,
                setVisibleBounds,
                exploreMenu,
                setExploreMenu,
                openTravel,
                setOpenTravel,
                poiCatMenu,
                setPoiCatMenu,
                selectedPoiObj,
                setSelectedPoiObj,
                zoomToCoords,
                setZoomToCoords,
                poiByUrl,
                setPoiByUrl,
                closeMapObj,
                setCloseMapObj,
                saveTrackToCloud,
                setSaveTrackToCloud,
                selectedLocalTrackObj,
                setSelectedLocalTrackObj,
                showPoiConfig,
                setShowPoiConfig,
                processingPoiByUrl,
                setProcessingPoiByUrl,
                processingAnalytics,
                setProcessingAnalytics,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;
