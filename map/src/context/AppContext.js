import React, { useEffect, useState } from 'react';
import useCookie from 'react-use-cookie';
import Utils, { useMutator, seleniumUpdateActivity } from '../util/Utils';
import TracksManager, { getGpxFiles } from '../manager/track/TracksManager';
import _ from 'lodash';
import FavoritesManager from '../manager/FavoritesManager';
import PoiManager from '../manager/PoiManager';
import { apiGet } from '../util/HttpApi';
import { geoRouter } from '../store/geoRouter/geoRouter.js';
import { geoObject } from '../store/geoObject/geoObject.js';
import WeatherManager from '../manager/WeatherManager';
import { getAccountInfo } from '../manager/LoginManager';

export const OBJECT_TYPE_LOCAL_TRACK = 'local_track';
export const OBJECT_TYPE_CLOUD_TRACK = 'cloud_track';
export const OBJECT_TYPE_ROUTE_TRACK = 'route_track';
export const OBJECT_TYPE_NAVIGATION = 'navigation';
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
export const isRouteTrack = (ctx) => ctx.currentObjectType === OBJECT_TYPE_ROUTE_TRACK;

const osmandTileURL = {
    uiname: 'Mapnik (tiles)',
    key: 'mapniktile',
    tileSize: 512,
    url: 'https://tile.osmand.net/hd/{z}/{x}/{y}.png',
};

async function loadListFiles(loginUser, listFiles, setListFiles, setGpxLoading, gpxFiles, setGpxFiles, setFavorites) {
    if (loginUser !== listFiles.loginUser) {
        if (!loginUser) {
            setListFiles({});
            setFavorites({});
        } else {
            setGpxLoading(true);
            const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
            if (response.ok) {
                await response.json().then((res) => {
                    if (res) {
                        res.loginUser = loginUser;
                        res.totalUniqueZipSize = 0;
                        res.uniqueFiles.forEach((f) => {
                            res.totalUniqueZipSize += f.zipSize;
                        });
                        setListFiles(res);
                        setGpxLoading(false);

                        addOpenedTracks(getGpxFiles(res), gpxFiles, setGpxFiles).then();
                        addOpenedFavoriteGroups(TracksManager.getFavoriteGroups(res), setFavorites);
                    }
                });
            }
        }
    }
}

async function addOpenedFavoriteGroups(files, setFavorites) {
    files.sort((a, b) => a.name.localeCompare(b.name));
    let newFavoritesFiles = {
        groups: [],
    };
    files.forEach((file) => {
        let group = FavoritesManager.createGroup(file);
        newFavoritesFiles.groups.push(group);
    });
    newFavoritesFiles.groups = FavoritesManager.orderList(
        newFavoritesFiles.groups,
        FavoritesManager.DEFAULT_GROUP_NAME
    );

    let savedVisible = JSON.parse(localStorage.getItem(FavoritesManager.FAVORITE_LOCAL_STORAGE));

    if (savedVisible) {
        for (const name of savedVisible) {
            for (const f of newFavoritesFiles.groups) {
                if (f.name === name) {
                    let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(
                        f.file.type
                    )}&name=${encodeURIComponent(f.file.name)}`;
                    newFavoritesFiles[f.name] = {
                        url: url,
                        clienttimems: f.file.clienttimems,
                        updatetimems: f.file.updatetimems,
                        name: f.file.name,
                        addToMap: true,
                    };
                    let res = await Utils.getFileData(newFavoritesFiles[f.name]);
                    if (res) {
                        const favoriteFile = new File([res], f.file.name, {
                            type: 'text/plain',
                        });
                        let favorites = await TracksManager.getTrackData(favoriteFile);
                        if (favorites) {
                            favorites.name = f.file.name;
                        }
                        Object.keys(favorites).forEach((t) => {
                            newFavoritesFiles[f.name][`${t}`] = favorites[t];
                        });
                    }
                }
            }
        }
    }
    setFavorites(newFavoritesFiles);
}

async function addOpenedTracks(files, gpxFiles, setGpxFiles) {
    const promises = [];
    const newGpxFiles = Object.assign({}, gpxFiles);

    let savedVisible = JSON.parse(localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG));
    let selectedFiles = [];
    if (savedVisible?.cloud) {
        savedVisible.cloud.forEach((name) => {
            files.forEach((f) => {
                if (f.name === name) {
                    selectedFiles.push(_.indexOf(files, f));
                }
            });
        });
    }

    for (let ind of selectedFiles) {
        let file = files[ind];
        let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(
            file.type
        )}&name=${encodeURIComponent(file.name)}`;
        newGpxFiles[file.name] = {
            url: url,
            clienttimems: file.clienttimems,
            updatetimems: file.updatetimems,
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
                    newGpxFiles[file.name][`${t}`] = track[t];
                });
            })
        );
    }
    await Promise.all(promises).then(() => {
        setGpxFiles(newGpxFiles);
    });
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
    const [favorites, setFavorites] = useState({});
    const [addFavorite, setAddFavorite] = useState({
        add: false,
        location: null,
    });

    const [localTracks, setLocalTracks] = useState([]);
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
            loadListFiles(loginUser, listFiles, setListFiles, setGpxLoading, gpxFiles, setGpxFiles, setFavorites);
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
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;
