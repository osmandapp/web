import React, { useEffect, useState } from 'react';
import useCookie from 'react-use-cookie';
import Utils, { useMutator } from '../util/Utils';
import TracksManager from './TracksManager';
import _ from 'lodash';
import FavoritesManager from './FavoritesManager';
import PoiManager from './PoiManager';
import { apiGet } from '../util/HttpApi';
import { geoRouter } from '../store/geoRouter/geoRouter.js';
import WeatherManager from './WeatherManager';

const osmandTileURL = {
    uiname: 'Mapnik (tiles)',
    key: 'mapniktile',
    tileSize: 512,
    url: 'https://tile.osmand.net/hd/{z}/{x}/{y}.png',
};

let monthNames = {};

function evaluateMonthNames() {
    if (Object.keys(monthNames).length > 0) {
        return monthNames;
    }
    for (var i = 0; i < 12; i++) {
        var objDate = new Date();
        objDate.setDate(1);
        objDate.setMonth(i);
        monthNames[objDate.toLocaleString('en-us', { month: 'short' })] = i + 1;
        monthNames[
            objDate.toLocaleString(window.navigator.userLanguage || window.navigator.language, { month: 'short' })
        ] = i + 1;
    }
    return monthNames;
}

export const toHHMMSS = function (time) {
    var sec_num = time / 1000;
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + Math.round(seconds);
    }
    return hours + ':' + minutes + ':' + seconds;
};

export const getGpxTime = (f) => {
    if (f?.details?.analysis?.startTime) {
        return f.details.analysis.startTime;
    }
    let dt = f.name.match(/(20\d\d)-(\d\d)-(\d\d)/);
    if (!dt) {
        dt = f.name.match(/(20\d\d)(\d\d)(\d\d)/);
    }
    try {
        if (dt) {
            let date = new Date();
            date.setFullYear(parseInt(dt[1]));
            date.setMonth(parseInt(dt[2]) - 1);
            date.setDate(parseInt(dt[3]));
            return date.getTime();
        } else {
            dt = f.name.match(/(\d\d) (...) (20\d\d)/);
            if (dt) {
                let monthNames = evaluateMonthNames();
                if (monthNames[dt[2]]) {
                    let date = new Date();
                    date.setFullYear(parseInt(dt[3]));
                    date.setMonth(monthNames[dt[2]] - 1);
                    date.setDate(parseInt(dt[1]));
                    return date.getTime();
                }
            }
        }
    } catch (e) {
        console.error('getGpxTime', e);
    }
    return 0;
};

async function loadListFiles(loginUser, listFiles, setListFiles, setGpxLoading, gpxFiles, setGpxFiles, setFavorites) {
    if (loginUser !== listFiles.loginUser) {
        if (!loginUser) {
            setListFiles({});
            setFavorites({});
        } else {
            setGpxLoading(true);
            const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
            await response.json().then((res) => {
                if (res) {
                    res.loginUser = loginUser;
                    res.totalUniqueZipSize = 0;
                    res.uniqueFiles.forEach((f) => {
                        res.totalUniqueZipSize += f.zipSize;
                    });
                    res.uniqueFiles = res.uniqueFiles.sort((f, s) => {
                        let ftime = getGpxTime(f);
                        let stime = getGpxTime(s);
                        if (ftime !== stime) {
                            return ftime > stime ? -1 : 1;
                        }
                        return 0;
                    });
                    setListFiles(res);
                    setGpxLoading(false);

                    addOpenedTracks(TracksManager.getTracks(res), gpxFiles, setGpxFiles).then();
                    addOpenedFavoriteGroups(TracksManager.getFavoriteGroups(res), setFavorites);
                }
            });
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

async function checkUserLogin(loginUser, setLoginUser, userEmail, setUserEmail) {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/info`, {
        method: 'GET',
    });
    if (response.ok) {
        const user = await response.json();
        let newUser = user?.username;
        if (loginUser !== newUser) {
            if (newUser) {
                setUserEmail(newUser, { days: 30, SameSite: 'Strict' });
            }
            setLoginUser(newUser);
        }
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
    const OBJECT_TYPE_FAVORITE = 'favorite';
    const OBJECT_TYPE_CLOUD_TRACK = 'cloud_track';
    const OBJECT_TYPE_LOCAL_CLIENT_TRACK = 'local_client_track';
    const OBJECT_TYPE_WEATHER = 'weather';
    const OBJECT_TYPE_POI = 'poi';

    const [globalConfirmation, setGlobalConfirmation] = useState(null);

    const searchParams = new URLSearchParams(window.location.search);
    const [weatherLayers, setWeatherLayers] = useState(WeatherManager.getLayers());
    const [weatherDate, setWeatherDate] = useState(WeatherManager.getWeatherDate());
    const [weatherType, setWeatherType] = useState('gfs');
    const [gpxLoading, setGpxLoading] = useState(false);
    const [localTracksLoading, setLocalTracksLoading] = useState(false);
    // cookie to store email logged in
    const [userEmail, setUserEmail] = useCookie('email', '');
    // server state of login
    const [loginUser, setLoginUser] = useState(null);
    const [listFiles, setListFiles] = useState({});
    const [gpxFiles, setGpxFiles] = useState({});
    const [searchCtx, setSearchCtx] = useState({});

    const [selectedGpxFile, reactSetSelectedGpxFile] = useState({});
    const setSelectedGpxFile = (s) => reactSetSelectedGpxFile(() => s); // wrap setter to queue-style
    const [unverifiedGpxFile, setUnverifiedGpxFile] = useState(null); // see Effect in LocalClientTrackLayer

    const [mapMarkerListener, setMapMarkerListener] = useState(null);
    const [tracksGroups, setTracksGroups] = useState([]);
    //
    const [tileURL, setTileURL] = useState(osmandTileURL);
    const [allTileURLs, setAllTileURLs] = useState({});
    // route
    const [routeData, setRouteData] = useState(null);
    const [routeTrackFile, setRouteTrackFile] = useState(null);
    const [routeShowPoints, setRouteShowPoints] = useState(true);
    let startInit,
        endInit,
        pinInit,
        interInit = [],
        avoidInit = [];
    if (searchParams.get('start')) {
        let arr = searchParams.get('start').split(',');
        startInit = { lat: parseFloat(arr[0]), lng: parseFloat(arr[1]) };
    }
    if (searchParams.get('end')) {
        let arr = searchParams.get('end').split(',');
        endInit = { lat: parseFloat(arr[0]), lng: parseFloat(arr[1]) };
    }
    if (searchParams.get('pin')) {
        let arr = searchParams.get('pin').split(',');
        pinInit = { lat: parseFloat(arr[0]), lng: parseFloat(arr[1]) };
    }
    if (searchParams.get('inter')) {
        searchParams
            .get('inter')
            .split(';')
            .forEach((ll) => {
                const [lat, lng] = ll.split(',');
                interInit.push({ lat: parseFloat(lat), lng: parseFloat(lng) });
            });
    }
    if (searchParams.get('avoid')) {
        searchParams
            .get('avoid')
            .split(';')
            .forEach((id) => {
                avoidInit.push({ id, name: 'Way ' + Math.trunc(id / 64) });
            });
    }
    const [startPoint, setStartPoint] = useState(startInit);
    const [endPoint, setEndPoint] = useState(endInit);
    const [pinPoint, setPinPoint] = useState(pinInit);
    const [interPoints, setInterPoints] = useState(interInit);
    const [avoidRoads, setAvoidRoads] = useState(avoidInit);
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
    const [gpxCollection, setGpxCollection] = useState([]);
    const [loadingContextMenu, setLoadingContextMenu] = useState(false);
    const [updateContextMenu, setUpdateContextMenu] = useState(false);
    const [trackProfileManager, setTrackProfileManager] = useState({});
    const [pointContextMenu, setPointContextMenu] = useState({});
    const [routingErrorMsg, setRoutingErrorMsg] = useState(null);
    const [trackState, setTrackState] = useState({
        update: false, // push track to undo/redo
        // pastStates: [], // was used for logs
        // futureStates: [], // was used for logs
    });
    const [openedPopper, setOpenedPopper] = useState(null);
    const [showPoiCategories, setShowPoiCategories] = useState([]);
    const [poiCategory, setPoiCategories] = useState(null);

    const [routingCash, setRoutingCash] = useState([]);
    const [routingNewSegments, setRoutingNewSegments] = useState([]);
    const [processRouting, setProcessRouting] = useState(false);
    const [selectedWpt, setSelectedWpt] = useState(null);

    const [routeRouter, setRouteRouter] = useState(() => new geoRouter());
    const [trackRouter, setTrackRouter] = useState(() => new geoRouter());
    const [afterPointRouter, setAfterPointRouter] = useState(() => new geoRouter());
    const [beforePointRouter, setBeforePointRouter] = useState(() => new geoRouter());

    const [trackRange, setTrackRange] = useState(null);

    const [showPoints, mutateShowPoints] = useMutator({
        points: true,
        wpts: true,
    });

    const [develFeatures, setDevelFeatures] = useState(process.env.REACT_APP_DEVEL_FEATURES === 'yes');

    routeRouter.initSetter({ setter: setRouteRouter });
    trackRouter.initSetter({ setter: setTrackRouter });
    afterPointRouter.initSetter({ setter: setAfterPointRouter });
    beforePointRouter.initSetter({ setter: setBeforePointRouter });

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
            await routeRouter.loadProviders({ parseQueryString: true });
            await trackRouter.loadProviders();
            await afterPointRouter.loadProviders();
            await beforePointRouter.loadProviders();
        };
        sequentialLoad();
    }, []);

    useEffect(() => {
        if (routeRouter.isReady() && routeTrackFile) {
            routeRouter.calculateGpxRoute({
                routeTrackFile,
                setRouteData,
                setStartPoint,
                setEndPoint,
                setInterPoints,
                changeRouteText,
                setRoutingErrorMsg,
            });
        }
    }, [routeRouter.getEffectDeps(), routeTrackFile]); // setRouteData, setStartPoint, setEndPoint

    useEffect(() => {
        if (routeRouter.isReady() && !routeTrackFile && startPoint && endPoint) {
            routeRouter.calculateRoute({
                startPoint,
                endPoint,
                interPoints,
                avoidRoads,
                setRouteData,
                changeRouteText,
                setRoutingErrorMsg,
            });
        } else {
            if (!routeTrackFile) {
                setHeaderText((prevState) => ({
                    ...prevState,
                    route: { text: `` },
                }));
            }
        }
        // ! routeTrackFile is not part of dependency ! really? :)
    }, [routeRouter.getEffectDeps(), startPoint, endPoint, interPoints, routeTrackFile, avoidRoads]); // ,setRouteData

    function changeRouteText(processRoute, data) {
        let resultText = ``;
        if (processRoute) {
            resultText = `Route calculating…`;
        } else {
            if (data) {
                const { name } = routeRouter.getProfile();
                const dist = data.props.overall?.distance ? data.props.overall?.distance : data.props.distance;
                resultText = `Route ${Math.round(dist / 100) / 10.0} km for ${name} is found.`;
            }
        }
        setHeaderText((prevState) => ({
            ...prevState,
            route: { text: resultText },
        }));
    }

    useEffect(() => {
        loadTileUrls(setAllTileURLs);
    }, []);

    useEffect(() => {
        checkUserLogin(loginUser, setLoginUser, userEmail, setUserEmail);
    }, [loginUser]);

    useEffect(() => {
        loadListFiles(loginUser, listFiles, setListFiles, setGpxLoading, gpxFiles, setGpxFiles, setFavorites);
    }, [loginUser]);

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
                userEmail,
                setUserEmail,
                listFiles,
                setListFiles,
                loginUser,
                setLoginUser,
                gpxFiles,
                setGpxFiles,
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
                startPoint,
                setStartPoint,
                endPoint,
                setEndPoint,
                pinPoint,
                setPinPoint,
                interPoints,
                setInterPoints,
                routeData,
                setRouteData,
                routeRouter,
                trackRouter,
                afterPointRouter,
                beforePointRouter,
                routeShowPoints,
                setRouteShowPoints,
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
                avoidRoads,
                setAvoidRoads,
                localTracks,
                setLocalTracks,
                currentObjectType,
                setCurrentObjectType,
                headerText,
                setHeaderText,
                tracksGroups,
                setTracksGroups,
                OBJECT_TYPE_FAVORITE,
                OBJECT_TYPE_CLOUD_TRACK,
                OBJECT_TYPE_LOCAL_CLIENT_TRACK,
                OBJECT_TYPE_WEATHER,
                OBJECT_TYPE_POI,
                createTrack,
                setCreateTrack,
                gpxCollection,
                setGpxCollection,
                loadingContextMenu,
                setLoadingContextMenu,
                updateContextMenu,
                setUpdateContextMenu,
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
                routingCash,
                setRoutingCash,
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
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;
