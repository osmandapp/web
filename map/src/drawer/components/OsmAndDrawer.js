import React, {useContext, useEffect, useState} from 'react';
import {Toolbar, Typography} from "@mui/material";
import {
    Divider, MenuItem, ListItemIcon, MenuList, Box, IconButton
} from "@mui/material";
import {ArrowBack, Person} from '@mui/icons-material';
import AppContext, {toHHMMSS} from "../../context/AppContext"
import Weather from "./weather/Weather"
import TracksMenu from "./tracks/TracksMenu"
import MapStyle from "./mapstyle/MapStyle"
import RouteMenu from "./route/RouteMenu"
import {useNavigate} from "react-router-dom";
import FavoritesMenu from "./favorite/FavoritesMenu";
import SearchResultMenu from "./search/SearchResultMenu";
import VisibleGroup from "./VisibleGroup";
import _ from "lodash";


export default function OsmAndDrawer({mobile, toggleDrawer}) {

    const ctx = useContext(AppContext);
    const [visibleTracks, setVisibleTracks] = useState({local: [], cloud: [], favorites: []});
    const [favoritesGroups, setFavoritesGroups] = useState([]);
    const [enableFavGroups, setEnableFavGroups] = useState([]);

    function visibleTracksOpen() {
        return visibleTracks.local.length > 0 || visibleTracks.cloud.length > 0 || visibleTracks.favorites.length > 0;
    }

    const navigate = useNavigate();
    const openLogin = () => {
        navigate('/map/loginForm');
    }

    useEffect(() => {
        if (ctx.gpxFiles) {
            let oldFiles = _.cloneDeep(visibleTracks.cloud);
            visibleTracks.cloud = [];
            Object.values(ctx.gpxFiles).forEach((f) => {
                if (f.url || oldFiles.find(t => t.name === f.name)) {
                    visibleTracks.cloud.push(f);
                }
            })
        }
        setVisibleTracks({...visibleTracks});
    }, [ctx.gpxFiles]);

    useEffect(() => {
        if (ctx.localTracks) {
            let oldFiles = _.cloneDeep(visibleTracks.local);
            visibleTracks.local = [];
            ctx.localTracks.forEach(f => {
                if (f.selected || oldFiles.find(t => t.name === f.name)) {
                    visibleTracks.local.push(f)
                }
            })
        }
        setVisibleTracks({...visibleTracks});
    }, [ctx.localTracks]);

    useEffect(() => {
        if (enableFavGroups) {
            enableFavGroups.forEach(f => {
                if (!visibleTracks.favorites.find(g => g.name === f.name)) {
                    visibleTracks.favorites.push(f)
                }
            })
        }
        setVisibleTracks({...visibleTracks});
    }, [enableFavGroups]);

    useEffect(() => {
        let resultText = '';
        let dist = 0;
        let tracks = 0;
        let seg = 0;
        let wpts = 0;
        let time = 0;
        let diffUp = 0;
        let diffDown = 0;
        Object.values(ctx.gpxFiles).forEach((item) => {
            if (item.local !== true && item.analysis && item.url) {
                if (item.analysis.totalTracks) {
                    tracks += item.analysis.totalTracks;
                }
                if (item.analysis.points) {
                    seg += item.analysis.points - 1;
                }
                if (item.analysis.wptPoints) {
                    wpts += item.analysis.wptPoints;
                }
                if (item.analysis.totalDistance) {
                    dist += item.analysis.totalDistance;
                }
                if (item.analysis.timeMoving) {
                    time += item.analysis.timeMoving;
                }
                if (item.analysis.diffElevationUp) {
                    diffUp += item.analysis.diffElevationUp;
                }
                if (item.analysis.diffElevationDown) {
                    diffDown += item.analysis.diffElevationDown;
                }
            }

            if (item.local === true && item.analysis && item.url) {
                if (item.analysis.totalTracks) {
                    tracks += item.analysis.totalTracks;
                }
                if (item.analysis.wptPoints) {
                    wpts += item.analysis.wptPoints;
                }
                if (item.analysis.totalDistance) {
                    dist += item.analysis.totalDistance;
                }
            }
        });

        Object.values(ctx.localTracks).forEach((item) => {
            if (item.selected) {
                tracks++;
                if (item.points?.length > 0) {
                    dist += item.points[item.points.length - 1].dist;
                    seg += item.points.length - 1;
                }
            }
        });

        if (tracks > 0) {
            let segInfo = seg > 0 ? `: ${seg} segments` : ``;
            let distInfo = dist > 0 ? `, ${(dist / 1000.0).toFixed(1)} km.` : ``;
            let wptInfo = wpts > 0 ? `, ${wpts} wpts.` : ``;
            let timeInfo = time > 0 ? ` Time moving: ${toHHMMSS(time)}.` : ``;
            let uphillDownhillInfo = diffUp > 0 || diffDown ? ` Uphill / Downhill: ${(diffUp).toFixed(0)} / ${(diffDown).toFixed(0)} m.` : ``;

            resultText = `Selected ${tracks} Tracks${segInfo}${distInfo}${wptInfo}${timeInfo}${uphillDownhillInfo}`;
        }

        ctx.setHeaderText(prevState => ({
            ...prevState,
            tracks: {text: resultText}
        }));

    }, [visibleTracks, setVisibleTracks]);

    return (<>
            <Toolbar variant="dense">
                {mobile ?
                    <>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu"
                                    sx={{mr: 2}} onClick={toggleDrawer}>
                            <ArrowBack/>
                        </IconButton>
                        {ctx.loginUser ? <Typography color="inherit">{ctx.loginUser}</Typography> :
                            <Typography variant="h6" color="inherit">Login</Typography>}
                        <Box>
                            <IconButton size="large" onClick={openLogin} color="inherit">
                                <Person/>
                            </IconButton>
                        </Box>

                    </>
                    :
                    <MenuItem onClick={openLogin}>
                        <ListItemIcon>
                            <Person fontSize="small"/>
                        </ListItemIcon>
                        {ctx.loginUser ? <Typography color="inherit">{ctx.loginUser}</Typography> :
                            <Typography variant="h6" color="inherit">Login</Typography>}
                    </MenuItem>

                }
            </Toolbar>
            <Divider/>
            <MenuList>
                <Weather/>
                {visibleTracksOpen() && <VisibleGroup visibleTracks={visibleTracks}
                                                      setVisibleTracks={setVisibleTracks}
                                                      enableFavGroups={enableFavGroups}
                                                      setEnableFavGroups={setEnableFavGroups}/>}
                <TracksMenu/>
                <FavoritesMenu favoritesGroups={favoritesGroups}
                               setFavoritesGroups={setFavoritesGroups}
                               enableGroups={enableFavGroups}
                               setEnableGroups={setEnableFavGroups}/>
                <MapStyle/>
                <RouteMenu/>
                <SearchResultMenu/>
            </MenuList>
        </>
    );
}