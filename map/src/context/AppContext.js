import React, { useState, useEffect } from 'react';
import {
    Air, Cloud, Compress, Shower, Thermostat
} from '@mui/icons-material';
import useCookie from 'react-use-cookie';
import Utils from "../util/Utils";

const osmandTileURL = {
    uiname: 'Mapnik (tiles)', 
    key: 'mapniktile',
    tileSize: 512, 
    url: 'https://tile.osmand.net/hd/{z}/{x}/{y}.png'
}

// const osmandTileURL = '/tile/hd/{z}/{x}/{y}.png';
// const osmandTileURL = '/tile/df/{z}/{x}/{y}.png';



function getWeatherUrl(layer) {
    // const urlWeatherPefix = '.';
    return process.env.REACT_APP_WEATHER_TILES_URL + '/' + layer + '/{time}/{z}/{x}/{y}.png';
}

function getLayers() {
    const layers = [
        { key: "temperature", name: "Temperature", opacity: 0.5, iconComponent: <Thermostat fontSize="small" /> },
        { key: "pressure", name: "Pressure", opacity: 0.6, iconComponent: <Compress fontSize="small" /> },
        { key: "wind", name: "Wind", opacity: 0.6, iconComponent: <Air fontSize="small" /> },
        { key: "cloud", name: "Cloud", opacity: 0.5, iconComponent: <Cloud fontSize="small" /> },
        { key: "precip", name: "Precipitation", opacity: 0.7, iconComponent: <Shower fontSize="small" /> },
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
    for(var i = 0; i < 12; i++ ) {
        var objDate = new Date();
        objDate.setDate(1);
        objDate.setMonth(i);
        monthNames[objDate.toLocaleString("en-us", { month: "short" })] = i + 1;
        monthNames[objDate.toLocaleString(window.navigator.userLanguage || window.navigator.language,
            { month: "short" })] = i + 1;
    }
    return monthNames;
    
}

export const toHHMMSS = function (time) {
    var sec_num = time / 1000;
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
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

async function loadListFiles(loginUser, listFiles, setListFiles, setGpxLoading) {
    if (loginUser !== listFiles.loginUser) {
        if (!loginUser) {
            setListFiles({});
        } else {
            setGpxLoading(true);
            const response = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
            const res = await response.json();
            res.loginUser = loginUser;
            res.uniqueFiles = res.uniqueFiles.sort((f, s) => {
                let ftime = getGpxTime(f);
                let stime = getGpxTime(s);
                if (ftime !== stime) {
                    return ftime > stime ? -1 : 1;
                }
                return 0;
            });
            // res.uniqueFiles = res.uniqueFiles.slice(0, 300);
            setListFiles(res);
            setGpxLoading(false);
        }
    }
}

async function loadFavoritesFile(listFiles, setFavorites, favorites) {
    let favoriteFile = (!listFiles || !listFiles.uniqueFiles ? [] :
        listFiles.uniqueFiles).find((item) => {
        return (item.type === 'FAVOURITES');
    });

    if (favoriteFile) {
        let favObj = {};
        let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(favoriteFile.type)}&name=${encodeURIComponent(favoriteFile.name)}`;
        let newFavouriteFile = favorites.file;
        if (newFavouriteFile) {
            newFavouriteFile.url = null;
        } else {
            newFavouriteFile = {'url': url, 'clienttimems': favoriteFile.clienttimems, 'name': favoriteFile.name};
        }
        favObj.file = newFavouriteFile;
        favObj.groups = [];
        favObj.groupsUnique = [];
        favObj.visibleMarker = {
            prev: null,
            current: null
        };

        setFavorites(favObj);
    }
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
                setUserEmail(newUser, { days: 30 });
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


function formatRouteMode(routeMode) {
    let routeModeStr = routeMode.mode;
    Object.keys(routeMode.opts).forEach(o => {
        if (routeMode.opts[o]?.value === true) {
            routeModeStr += ',' + o;
        } else if (routeMode.opts[o]?.value === false) {
            // skip
        } else {
            routeModeStr += ',' + o + '=' + routeMode.opts[o].value;
        }
    });
    return routeModeStr;
}

async function loadRouteModes(routeMode, setRouteMode) {
    const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/routing-modes`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        let data = await response.json();
        setRouteMode({ mode: routeMode.mode, modes: data, opts: data[routeMode.mode]?.params });
    }
}


async function calculateRoute(startPoint, endPoint, interPoints, routeMode, setRouteData) {
    // encodeURIComponent(startPoint.lat)
    setRouteData(null);
    const starturl = `points=${startPoint.lat.toFixed(6)},${startPoint.lng.toFixed(6)}`;
    let inter = '';
    interPoints.forEach((i) => {
        inter += `&points=${i.lat.toFixed(6)},${i.lng.toFixed(6)}`;
    });
    const endurl = `points=${endPoint.lat.toFixed(6)},${endPoint.lng.toFixed(6)}`;

    const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/route?routeMode=${formatRouteMode(routeMode)}&${starturl}${inter}&${endurl}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        let data = await response.json();
        let props = {}; 
        if (data.features.length > 0) {
            props = data.features[0]?.properties;
        }
        setRouteData({ geojson: data, id: new Date().getTime(), props: props });
    }
}

async function calculateGpxRoute(routeMode, routeTrackFile, setRouteData, setStartPoint, setEndPoint, setInterPoints) {
    let formData = new FormData();
    formData.append('file', routeTrackFile);
    const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/gpx-approximate?routeMode=${formatRouteMode(routeMode)}`, {
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
                start = { lat: coords[0][1], lng: coords[0][0] };
                end = { lat: coords[coords.length - 1][1], lng: coords[coords.length - 1][0] };
            }
            props = data.features[0]?.properties;
        }
        setStartPoint(start);
        setEndPoint(end);
        setInterPoints([]);
        setRouteData({ geojson: data, id: new Date().getTime(), props: props });
    } else {
        let message = await response.text();
        alert(message);
    }
}

// var originalDateObj = new Date(weatherDateObj);
const AppContext = React.createContext();

export const AppContextProvider = (props) => {
    // const [searchParams, setSearchParams] = useSearchParams({});
    const searchParams = new URLSearchParams(window.location.search);
    const [weatherLayers, updateWeatherLayers] = useState(getLayers());
    const [weatherDate, setWeatherDate] = useState(getWeatherDate());
    const [gpxLoading, setGpxLoading] = useState(false);
    // cookie to store email logged in
    const [userEmail, setUserEmail] = useCookie('email', '');
    // server state of login
    const [loginUser, setLoginUser] = useState(null);
    const [listFiles, setListFiles] = useState({});
    const [gpxFiles, setGpxFiles] = useState({});
    const [searchCtx, setSearchCtx] = useState({});
    const [selectedGpxFile, setSelectedGpxFile] = useState({});
    const [mapMarkerListener, setMapMarkerListener] = useState(null);
    const [appText, setAppText] = useState('');
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
    const [routeMode, setRouteMode] = useState({mode: modeParam, opts: {}, 
        modes: { 'car': { name: 'Car', params: {} } } });
    const [startPoint, setStartPoint] = useState(startInit);
    const [endPoint, setEndPoint] = useState(endInit);
    const [pinPoint, setPinPoint] = useState(pinInit);
    const [interPoints, setInterPoints] = useState([]);
    const [weatherPoint, setWeatherPoint] = useState(null);
    const [favorites, setFavorites] = useState({
        file: null,
        groups: [],
        groupsUnique: [],
        readFirst: false,
        visibleMarker: {
            prev: null,
            current: null
        }
    });
    const [currentlyEditTrack, setCurrentlyEditTrack] = useState(null);
    const [selectedEditTrack, setSelectedEditTrack] = useState(null);
    const [createNewTrack, setCreateNewTrack] = useState(false);

    useEffect(() => {
        loadRouteModes(routeMode, setRouteMode);
    }, []);

    useEffect(() => {
        if (routeTrackFile) {
            calculateGpxRoute(routeMode, routeTrackFile, setRouteData, setStartPoint, setEndPoint, setInterPoints);
        }
    }, [routeMode, routeTrackFile, setRouteData, setStartPoint, setEndPoint]);

    useEffect(() => {
        if (!routeTrackFile && startPoint && endPoint) {
            calculateRoute(startPoint, endPoint, interPoints, routeMode, setRouteData);
        }
        // ! routeTrackFile is not part of dependency ! 
    }, [routeMode, startPoint, endPoint, routeTrackFile, interPoints, setRouteData]);
    
    useEffect(() => {
        loadTileUrls(setAllTileURLs);
    }, []);
    
    useEffect(() => {
        checkUserLogin(loginUser, setLoginUser, userEmail, setUserEmail);
    // eslint-disable-next-line
    }, [loginUser]);
    useEffect(() => {
        loadListFiles(loginUser, listFiles, setListFiles, setGpxLoading);
    // eslint-disable-next-line
    }, [loginUser]);
    useEffect(() => {
        loadFavoritesFile(listFiles, setFavorites, favorites).then();
    }, [loginUser, listFiles]);
    return <AppContext.Provider value={{
        weatherLayers, updateWeatherLayers,
        weatherDate, setWeatherDate,
        userEmail, setUserEmail,
        listFiles, setListFiles,
        loginUser, setLoginUser,
        gpxFiles, setGpxFiles,
        gpxLoading, setGpxLoading,
        appText, setAppText,
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
        currentlyEditTrack, setCurrentlyEditTrack,
        selectedEditTrack, setSelectedEditTrack,
        createNewTrack, setCreateNewTrack

    }}>
        {props.children}
    </AppContext.Provider>;
};

export default AppContext;
