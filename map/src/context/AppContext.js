import React, {useEffect, useState} from 'react';
import {Air, Cloud, Compress, Shower, Thermostat} from '@mui/icons-material';
import useCookie from 'react-use-cookie';
import Utils from "../util/Utils";
import TracksManager from "./TracksManager";
import _ from "lodash";
import FavoritesManager from "./FavoritesManager";
import PoiManager from "./PoiManager";

const osmandTileURL = {
    uiname: 'Mapnik (tiles)',
    key: 'mapniktile',
    tileSize: 512,
    url: 'https://tile.osmand.net/hd/{z}/{x}/{y}.png'
}


function getWeatherUrl(layer) {
    return process.env.REACT_APP_WEATHER_TILES_URL + '/' + layer + '/{time}/{z}/{x}/{y}.png';
}

function getLayers() {
    const layers = [
        {key: "temperature", name: "Temperature", opacity: 0.5, iconComponent: <Thermostat fontSize="small"/>},
        {key: "pressure", name: "Pressure", opacity: 0.6, iconComponent: <Compress fontSize="small"/>},
        {key: "wind", name: "Wind", opacity: 0.6, iconComponent: <Air fontSize="small"/>},
        {key: "cloud", name: "Cloud", opacity: 0.5, iconComponent: <Cloud fontSize="small"/>},
        {key: "precip", name: "Precipitation", opacity: 0.7, iconComponent: <Shower fontSize="small"/>},
    ];
    layers.map((item) => {
        item.url = getWeatherUrl(item.key);
        item.maxNativeZoom = 3;
        item.maxZoom = 11;
        item.checked = false;

        return item;
    });
    return layers;
}

let monthNames = {};

function evaluateMonthNames() {
    if (Object.keys(monthNames).length > 0) {
        return monthNames;
    }
    for (var i = 0; i < 12; i++) {
        var objDate = new Date();
        objDate.setDate(1);
        objDate.setMonth(i);
        monthNames[objDate.toLocaleString("en-us", {month: "short"})] = i + 1;
        monthNames[objDate.toLocaleString(window.navigator.userLanguage || window.navigator.language,
            {month: "short"})] = i + 1;
    }
    return monthNames;

}

export const toHHMMSS = function (time) {
    var sec_num = time / 1000;
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
}


export const getGpxTime = (f) => {
    if (f?.details?.analysis?.startTime) {
        return f.details.analysis.startTime;
    }
    let dt = f.name.match(/(20\d\d)-(\d\d)-(\d\d)/)
    if (!dt) {
        dt = f.name.match(/(20\d\d)(\d\d)(\d\d)/)
    }
    try {
        if (dt) {
            let date = new Date();
            date.setFullYear(parseInt(dt[1]));
            date.setMonth(parseInt(dt[2]) - 1);
            date.setDate(parseInt(dt[3]));
            return date.getTime();
        } else {
            dt = f.name.match(/(\d\d) (...) (20\d\d)/)
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
    } catch (Error) {

    }
    return 0;
}

async function loadListFiles(loginUser, listFiles, setListFiles, setGpxLoading, gpxFiles, setGpxFiles, setFavorites) {
    if (loginUser !== listFiles.loginUser) {
        if (!loginUser) {
            setListFiles({});
        } else {
            setGpxLoading(true);
            const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
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

    files.sort((a, b) => a.name.localeCompare(b.name))
    let newFavoritesFiles = {
        groups: []
    };
    files.forEach(file => {
        let group = FavoritesManager.createGroup(file)
        newFavoritesFiles.groups.push(group);
    })
    newFavoritesFiles.groups = FavoritesManager.orderList(newFavoritesFiles.groups, FavoritesManager.DEFAULT_GROUP_NAME);

    let savedVisible = JSON.parse(localStorage.getItem(FavoritesManager.FAVORITE_LOCAL_STORAGE));

    if (savedVisible) {
        for (const name of savedVisible) {
            for (const f of newFavoritesFiles.groups) {
                if (f.name === name) {
                    let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(f.file.type)}&name=${encodeURIComponent(f.file.name)}`;
                    newFavoritesFiles[f.name] = {
                        'url': url,
                        'clienttimems': f.file.clienttimems,
                        'updatetimems': f.file.updatetimems,
                        'name': f.file.name,
                        'addToMap': true
                    };
                    let res = await Utils.getFileData(newFavoritesFiles[f.name]);
                    if (res) {
                        const favoriteFile = new File([res], f.file.name, {
                            type: "text/plain",
                        });
                        let favorites = await TracksManager.getTrackData(favoriteFile);
                        if (favorites) {
                            favorites.name = f.file.name;
                        }
                        Object.keys(favorites).forEach(t => {
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

    let savedVisible = JSON.parse(localStorage.getItem('visible'));
    let selectedFiles = [];
    if (savedVisible?.cloud) {
        savedVisible.cloud.forEach(name => {
            files.forEach(f => {
                if (f.name === name) {
                    selectedFiles.push(_.indexOf(files, f));
                }
            })
        })
    }

    for (let ind of selectedFiles) {
        let file = files[ind];
        let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(file.type)}&name=${encodeURIComponent(file.name)}`;
        newGpxFiles[file.name] = {
            'url': url,
            'clienttimems': file.clienttimems,
            'updatetimems': file.updatetimems,
            'name': file.name,
            'type': "GPX"
        };
        let f = await Utils.getFileData(newGpxFiles[file.name]);
        const gpxfile = new File([f], file.name, {
            type: "text/plain",
        });

        promises.push(TracksManager.getTrackData(gpxfile).then((track) => {
            track.name = file.name;
            Object.keys(track).forEach(t => {
                newGpxFiles[file.name][`${t}`] = track[t];
            });
        }))
    }
    await Promise.all(promises).then(() => {
        setGpxFiles(newGpxFiles)
    })
}

async function checkUserLogin(loginUser, setLoginUser, userEmail, setUserEmail, listFiles, setListFiles) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/auth/info`, {
        method: 'GET'
    });
    if (response.ok) {
        const user = await response.json();
        let newUser = user?.username;
        if (loginUser !== newUser) {
            if (newUser) {
                setUserEmail(newUser, {days: 30});
            }
            setLoginUser(newUser);
        }
    }
}

async function loadTileUrls(setAllTileURLs) {
    const response = await fetch(`${process.env.REACT_APP_TILES_API_SITE}/tile/styles`, {});
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
        setAllTileURLs(data)
    }
}

function getWeatherDate() {
    // // "20211222_0600"
    // let [searchParams, setSearchParams] = useSearchParams();
    const searchParams = new URLSearchParams(window.location.search);
    const weatherDateObj = new Date();
    if (searchParams.get("date")) {
        let weather_date = searchParams.get("date");
        weatherDateObj.setUTCFullYear(parseInt(weather_date.slice(0, 4)));
        weatherDateObj.setUTCMonth(parseInt(weather_date.slice(4, 6)) - 1);
        weatherDateObj.setUTCDate(parseInt(weather_date.slice(6, 8)));
        weatherDateObj.setUTCHours(parseInt(weather_date.slice(9, 11)));
    }
    weatherDateObj.setUTCMinutes(0);
    weatherDateObj.setUTCSeconds(0);
    return weatherDateObj;
}

async function loadRouteModes(routeMode, setRouteMode, creatingRouteMode, setCreatingRouteMode) {
    const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/routing-modes`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        let data = await response.json();
        setRouteMode({mode: routeMode.mode, modes: data, opts: data[routeMode.mode]?.params});

        let creatingData = _.cloneDeep(data);
        creatingData = filterMode(creatingData);
        creatingData = addModes(creatingData);
        setCreatingRouteMode(
            {
                mode: creatingRouteMode.mode,
                modes: creatingData,
                opts: creatingData[creatingRouteMode.mode]?.params,
                colors: getColors()
            }
        )
    }
}

function addModes(data) {
    data['line'] = {name: 'Line', params: {}};
    return data;
}

function filterMode(data) {
    return Object.fromEntries(Object.entries(data).filter(([key]) => !key.includes('rescuetrack')));
}

function getColors() {
    return {
        'car': '#1976d2',
        'truck': '#2F4F4F',
        'motorcycle': '#f8931d',
        'bicycle': '#9053bd',
        'boat': '#08b5ff',
        'horsebackriding': '#7f3431',
        'pedestrian': '#d90139',
        'ski': '#ffacdf',
        'line': '#5F9EA0',
        'moped': '#3e690e'
    };
}


async function calculateRoute(startPoint, endPoint, interPoints, avoidRoads, routeMode, setRouteData, getRouteText, setRoutingErrorMsg) {
    setRouteData(null);
    setRoutingErrorMsg(null);
    const starturl = `points=${startPoint.lat.toFixed(6)},${startPoint.lng.toFixed(6)}`;
    let inter = '';
    interPoints.forEach((i) => {
        inter += `&points=${i.lat.toFixed(6)},${i.lng.toFixed(6)}`;
    });
    const endurl = `points=${endPoint.lat.toFixed(6)},${endPoint.lng.toFixed(6)}`;
    let avoidRoadsUrl = '';
    avoidRoads.forEach((i) => {
        avoidRoadsUrl += ',' + i.id;
    });
    if (avoidRoadsUrl !== '') {
        avoidRoadsUrl = '&avoidRoads=' + avoidRoadsUrl.substring(1);
    }
    getRouteText(true, null)
    const maxDist = `maxDist=${process.env.REACT_APP_MAX_ROUTE_DISTANCE}`
    const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/route?`
        + `routeMode=${TracksManager.formatRouteMode(routeMode)}&${starturl}${inter}&${endurl}&${avoidRoadsUrl}${maxDist}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        let data = await response.json();
        let props = {};
        if (data.msg) {
            setRoutingErrorMsg(data.msg);
            data = data.features;
        }
        if (data.features.length > 0) {
            props = data.features[0]?.properties;
        }
        let allData = {geojson: data, id: new Date().getTime(), props: props};
        setRouteData(allData);
        getRouteText(false, allData)
    }
}

async function calculateGpxRoute(routeMode, routeTrackFile, setRouteData, setStartPoint, setEndPoint, setInterPoints) {
    let formData = new FormData();
    formData.append('file', routeTrackFile);
    const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/gpx-approximate?routeMode=${TracksManager.formatRouteMode(routeMode)}`, {
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        let data = await response.json();
        let start, end;
        let props = {};
        if (data?.features?.length > 0) {
            let coords = data?.features[0].geometry.coordinates;
            if (coords.length > 0) {
                start = {lat: coords[0][1], lng: coords[0][0]};
                end = {lat: coords[coords.length - 1][1], lng: coords[coords.length - 1][0]};
            }
            props = data.features[0]?.properties;
        }
        setStartPoint(start);
        setEndPoint(end);
        setInterPoints([]);
        setRouteData({geojson: data, id: new Date().getTime(), props: props});
    } else {
        let message = await response.text();
        alert(message);
    }
}

const AppContext = React.createContext();

export const AppContextProvider = (props) => {

    const OBJECT_TYPE_FAVORITE = 'favorite';
    const OBJECT_TYPE_CLOUD_TRACK = 'cloud_track';
    const OBJECT_TYPE_LOCAL_CLIENT_TRACK = 'local_client_track';
    const OBJECT_TYPE_WEATHER = 'weather';
    const OBJECT_TYPE_POI = 'poi';

    // const [searchParams, setSearchParams] = useSearchParams({});
    const searchParams = new URLSearchParams(window.location.search);
    const [weatherLayers, updateWeatherLayers] = useState(getLayers());
    const [weatherDate, setWeatherDate] = useState(getWeatherDate());
    const [gpxLoading, setGpxLoading] = useState(false);
    const [localTracksLoading, setLocalTracksLoading] = useState(false);
    // cookie to store email logged in
    const [userEmail, setUserEmail] = useCookie('email', '');
    // server state of login
    const [loginUser, setLoginUser] = useState(null);
    const [listFiles, setListFiles] = useState({});
    const [gpxFiles, setGpxFiles] = useState({});
    const [searchCtx, setSearchCtx] = useState({});
    const [selectedGpxFile, setSelectedGpxFile] = useState({});
    const [mapMarkerListener, setMapMarkerListener] = useState(null);
    const [tracksGroups, setTracksGroups] = useState([])
    // 
    const [tileURL, setTileURL] = useState(osmandTileURL);
    const [allTileURLs, setAllTileURLs] = useState({});
    // route
    const [routeData, setRouteData] = useState(null);
    const [routeTrackFile, setRouteTrackFile] = useState(null);
    let modeParam = searchParams.get('mode') ? searchParams.get('mode') : 'car';
    let startInit, endInit, pinInit;
    if (searchParams.get('start')) {
        let arr = searchParams.get('start').split(',');
        startInit = {lat: parseFloat(arr[0]), lng: parseFloat(arr[1])};
    }
    if (searchParams.get('end')) {
        let arr = searchParams.get('end').split(',');
        endInit = {lat: parseFloat(arr[0]), lng: parseFloat(arr[1])};
    }
    if (searchParams.get('pin')) {
        let arr = searchParams.get('pin').split(',');
        pinInit = {lat: parseFloat(arr[0]), lng: parseFloat(arr[1])};
    }
    const [routeMode, setRouteMode] = useState({
        mode: modeParam, opts: {},
        modes: {'car': {name: 'Car', params: {}}}
    });
    const [creatingRouteMode, setCreatingRouteMode] = useState({
        mode: 'car', opts: {},
        modes: {'car': {name: 'Car', params: {}}}
    });
    const [startPoint, setStartPoint] = useState(startInit);
    const [endPoint, setEndPoint] = useState(endInit);
    const [pinPoint, setPinPoint] = useState(pinInit);
    const [interPoints, setInterPoints] = useState([]);
    const [avoidRoads, setAvoidRoads] = useState([]);
    const [weatherPoint, setWeatherPoint] = useState(null);
    const [favorites, setFavorites] = useState({});
    const [addFavorite, setAddFavorite] = useState({
        add: false,
        location: null
    });

    const [localTracks, setLocalTracks] = useState([]);
    const [currentObjectType, setCurrentObjectType] = useState(null);
    const [headerText, setHeaderText] = useState({
        search: {text: ''},
        weather: {text: ''},
        tracks: {text: ''},
        route: {text: ''},
        welcome: {text: process.env.REACT_APP_WEBSITE_NAME}
    });
    const [createTrack, setCreateTrack] = useState(null);
    const [gpxCollection, setGpxCollection] = useState([]);
    const [loadingContextMenu, setLoadingContextMenu] = useState(false);
    const [updateContextMenu, setUpdateContextMenu] = useState(false);
    const [trackProfileManager, setTrackProfileManager] = useState({});
    const [pointContextMenu, setPointContextMenu] = useState({});
    const [routingErrorMsg, setRoutingErrorMsg] = useState(null);
    const [trackState, setTrackState] = useState({
        pastStates: [],
        futureStates: []
    });
    const [openedPopper, setOpenedPopper] = useState(null);
    const [showPoiCategories, setShowPoiCategories] = useState([]);
    const [poiCategory, setPoiCategories] = useState(null);

    useEffect(() => {
        TracksManager.loadTracks(setLocalTracksLoading).then((tracks) => {
            setLocalTracks(tracks);
        })
    }, []);

    useEffect(() => {
        PoiManager.getPoiCategories(setLocalTracksLoading).then((categories) => {
            setPoiCategories(categories);
        })
    }, []);

    useEffect(() => {
        loadRouteModes(routeMode, setRouteMode, creatingRouteMode, setCreatingRouteMode);
    }, []);

    useEffect(() => {
        if (routeTrackFile) {
            calculateGpxRoute(routeMode, routeTrackFile, setRouteData, setStartPoint, setEndPoint, setInterPoints);
        }
    }, [routeMode, routeTrackFile, setRouteData, setStartPoint, setEndPoint]);

    useEffect(() => {
        if (!routeTrackFile && startPoint && endPoint) {
            calculateRoute(startPoint, endPoint, interPoints, avoidRoads, routeMode, setRouteData, getRouteText, setRoutingErrorMsg);
        } else {
            setHeaderText(prevState => ({
                ...prevState,
                route: {text: ``}
            }));
        }
        // ! routeTrackFile is not part of dependency ! 
    }, [routeMode, startPoint, endPoint, routeTrackFile, interPoints, avoidRoads, setRouteData]);


    function getRouteText(processRoute, data) {
        let resultText = ``;
        if (processRoute) {
            resultText = `Route calculating…`;
        } else {
            if (data) {
                let dist = data.props.overall?.distance ? data.props.overall?.distance : data.props.distance;
                resultText = `Route ${Math.round(dist / 100) / 10.0} km for ${routeMode.mode} is found.`
            }
        }
        setHeaderText(prevState => ({
            ...prevState,
            route: {text: resultText}
        }));
    }

    useEffect(() => {
        loadTileUrls(setAllTileURLs);
    }, []);

    useEffect(() => {
        checkUserLogin(loginUser, setLoginUser, userEmail, setUserEmail);
        // eslint-disable-next-line
    }, [loginUser]);
    useEffect(() => {
        loadListFiles(loginUser, listFiles, setListFiles, setGpxLoading, gpxFiles, setGpxFiles, setFavorites);
        // eslint-disable-next-line
    }, [loginUser]);
    return <AppContext.Provider value={{
        weatherLayers, updateWeatherLayers,
        weatherDate, setWeatherDate,
        userEmail, setUserEmail,
        listFiles, setListFiles,
        loginUser, setLoginUser,
        gpxFiles, setGpxFiles,
        gpxLoading, setGpxLoading,
        selectedGpxFile, setSelectedGpxFile,
        mapMarkerListener, setMapMarkerListener,
        tileURL, setTileURL, allTileURLs,
        startPoint, setStartPoint,
        endPoint, setEndPoint,
        pinPoint, setPinPoint,
        interPoints, setInterPoints,
        routeData, setRouteData,
        routeMode, setRouteMode,
        weatherPoint, setWeatherPoint,
        routeTrackFile, setRouteTrackFile,
        searchCtx, setSearchCtx,
        favorites, setFavorites,
        addFavorite, setAddFavorite,
        avoidRoads, setAvoidRoads,
        localTracks, setLocalTracks,
        currentObjectType, setCurrentObjectType,
        headerText, setHeaderText,
        tracksGroups, setTracksGroups,
        OBJECT_TYPE_FAVORITE,
        OBJECT_TYPE_CLOUD_TRACK,
        OBJECT_TYPE_LOCAL_CLIENT_TRACK,
        OBJECT_TYPE_WEATHER,
        OBJECT_TYPE_POI,
        createTrack, setCreateTrack,
        creatingRouteMode, setCreatingRouteMode,
        gpxCollection, setGpxCollection,
        loadingContextMenu, setLoadingContextMenu,
        updateContextMenu, setUpdateContextMenu,
        trackProfileManager, setTrackProfileManager,
        routingErrorMsg, setRoutingErrorMsg,
        pointContextMenu, setPointContextMenu,
        trackState, setTrackState,
        localTracksLoading, setLocalTracksLoading,
        openedPopper, setOpenedPopper,
        showPoiCategories, setShowPoiCategories,
        poiCategory, setPoiCategories
    }}>
        {props.children}
    </AppContext.Provider>;
};

export default AppContext;
