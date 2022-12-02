import {Collapse, LinearProgress, ListItemIcon, ListItemText, MenuItem, Switch, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Folder} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import FavoriteItem from "./FavoriteItem";
import AppContext from "../../../context/AppContext";
import Utils from "../../../util/Utils";
import TracksManager from "../../../context/TracksManager";

export default function FavoriteGroup({index, group, enableGroups, setEnableGroups}) {

    const ctx = useContext(AppContext);

    const toggleFavoritesPointsOpen = () => {
        setFavoritesPointsOpen(!favoritesPointsOpen);
    };

    const [favoritesPointsOpen, setFavoritesPointsOpen] = useState(false);
    const [loadingFavorites, setLoadingFavorites] = useState(false);
    const [markers, setMarkers] = useState([]);

    async function enableLayerWithGroups(setProgressVisible, ctx, visible, addToMap) {
        ctx.setCurrentObjectType(null);
        if (!visible) {
            deleteGroupFromMap();
            let updateGroup = enableGroups.filter(function (f) {
                return f.name !== group.name
            });
            setEnableGroups(updateGroup);
        } else {
            await addGroupToMap(setProgressVisible, addToMap);
            setEnableGroups([...enableGroups, group]);
        }
    }

    function deleteGroupFromMap() {
        const newFavoritesFiles = Object.assign({}, ctx.favorites);
        if (newFavoritesFiles[group.name]) {
            newFavoritesFiles[group.name].url = null;
        }
        ctx.setFavorites(newFavoritesFiles);
        if (ctx.selectedGpxFile.name === group.name) {
            ctx.selectedGpxFile = null;
        }

        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    async function addGroupToMap(setProgressVisible, addToMap) {
        setProgressVisible(true);
        if (ctx.favorites && ctx.favorites[group.name]) {
            const newFavoriteFiles = Object.assign({}, ctx.favorites);
            if (ctx.favorites[group.name].url) {
                newFavoriteFiles[group.name].addToMap = addToMap;
            } else {
                let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(group.file.type)}&name=${encodeURIComponent(group.file.name)}`;
                newFavoriteFiles[group.name] = {
                    'url': url,
                    'clienttimems': group.file.clienttimems,
                    'name': group.file.name,
                    'addToMap': addToMap
                };
                let f = await Utils.getFileData(newFavoriteFiles[group.name]);
                const favoriteFile = new File([f], group.file.name, {
                    type: "text/plain",
                });
                let favorites = await TracksManager.getTrackData(favoriteFile);
                if (favorites) {
                    favorites.name = group.file.name;
                }
                Object.keys(favorites).forEach(t => {
                    newFavoriteFiles[group.name][`${t}`] = favorites[t];
                });
            }
            ctx.setFavorites({...newFavoriteFiles});
            let newSelectedGpxFile = {};
            newSelectedGpxFile.file = Object.assign({}, newFavoriteFiles[group.name]);
            newSelectedGpxFile.name = group.name;
            ctx.setSelectedGpxFile(newSelectedGpxFile);
            setProgressVisible(false);
        }
    }

    useEffect(() => {
        let markerList = [];
        if (ctx.favorites[group.name]?.markers) {
            Object.values(ctx.favorites[group.name].markers._layers).forEach(value => {
                let marker = {
                    title: value.options.title,
                    icon: value.options.icon.options.html,
                    layer: value
                }
                markerList.push(marker);
            });
            setMarkers(markerList);
        }
    }, [favoritesPointsOpen, setFavoritesPointsOpen]);

    useEffect(() => {
        if (ctx.favorites[group.name]?.markers && group.name === ctx.selectedGpxFile.file?.name) {
            ctx.selectedGpxFile.file.markers = ctx.favorites[group.name].markers;
            ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
        }
    }, [ctx.favorites, ctx.setFavorites]);

    return (<div key={'group' + index}>
        <MenuItem sx={{ml: 3}} divider onClick={() => {
            toggleFavoritesPointsOpen();
        }}>
            <ListItemIcon>
                <Folder fontSize="small"/>
            </ListItemIcon>
            <ListItemText>
                <Typography variant="inherit" noWrap>
                    {group.name}
                </Typography>
            </ListItemText>
            <Switch checked={enableGroups.some(e => e.name === group.name)}
                    onChange={(e) => {
                        enableLayerWithGroups(setLoadingFavorites, ctx, e.target.checked, true).then();
                    }}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}/>
            {markers === [] ? <></> : favoritesPointsOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        {loadingFavorites ? <LinearProgress/> : <></>}
        <Collapse in={favoritesPointsOpen} timeout="auto">
            {markers && markers.map((marker, index) => {
                return <FavoriteItem key={marker + index}
                                     index={index}
                                     marker={marker}
                                     group={group}/>;
            })}
        </Collapse>
    </div>)
}