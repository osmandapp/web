import { Collapse, LinearProgress, ListItemIcon, ListItemText, MenuItem, Switch, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, Folder } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import FavoriteItem from './FavoriteItem';
import AppContext from '../../../context/AppContext';
import Utils from '../../../util/Utils';
import TracksManager from '../../../context/TracksManager';
import FavoritesManager from '../../../context/FavoritesManager';

export default function FavoriteGroup({ index, group, enableGroups, setEnableGroups }) {
    const ctx = useContext(AppContext);

    const toggleFavoritesPointsOpen = () => {
        setFavoritesPointsOpen(!favoritesPointsOpen);
    };

    const [favoritesPointsOpen, setFavoritesPointsOpen] = useState(false);
    const [loadingFavorites, setLoadingFavorites] = useState(false);
    const [markers, setMarkers] = useState([]);

    async function enableLayerWithGroups(setProgressVisible, visible) {
        ctx.setCurrentObjectType(null);
        if (!visible) {
            deleteGroupFromMap();
            let updateGroup = enableGroups.filter(function (f) {
                return f.name !== group.name;
            });
            setEnableGroups(updateGroup);
        } else {
            await addGroupToMap(setProgressVisible, true);
            setEnableGroups([...enableGroups, group]);
        }
    }

    async function getFavorites(addToMap, newFavoriteFiles) {
        let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(
            group.file.type
        )}&name=${encodeURIComponent(group.file.name)}`;
        newFavoriteFiles[group.name] = {
            url: url,
            clienttimems: group.file.clienttimems,
            updatetimems: group.file.updatetimems,
            name: group.file.name,
            addToMap: addToMap,
        };
        let f = await Utils.getFileData(newFavoriteFiles[group.name]);
        if (f) {
            const favoriteFile = new File([f], group.file.name, {
                type: 'text/plain',
            });
            let favorites = await TracksManager.getTrackData(favoriteFile);
            if (favorites) {
                favorites.name = group.file.name;
            }
            Object.keys(favorites).forEach((t) => {
                newFavoriteFiles[group.name][`${t}`] = favorites[t];
            });
            return newFavoriteFiles;
        }
    }

    function deleteGroupFromMap() {
        const newFavoritesFiles = Object.assign({}, ctx.favorites);
        if (newFavoritesFiles[group.name]) {
            newFavoritesFiles[group.name].url = null;
            ctx.setFavorites(newFavoritesFiles);
        }
        if (ctx.selectedGpxFile.nameGroup === group.name) {
            ctx.selectedGpxFile.markerPrev = ctx.selectedGpxFile.markerCurrent;
            delete ctx.selectedGpxFile.markerCurrent;
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        }

        let savedVisibleFav = JSON.parse(localStorage.getItem(FavoritesManager.FAVORITE_LOCAL_STORAGE));
        if (savedVisibleFav) {
            savedVisibleFav = savedVisibleFav.filter((name) => name !== group.name);
            localStorage.setItem(FavoritesManager.FAVORITE_LOCAL_STORAGE, JSON.stringify(savedVisibleFav));
        }
    }

    async function addGroupToMap(setProgressVisible, addToMap) {
        setProgressVisible(true);
        let newFavoriteFiles = Object.assign({}, ctx.favorites);
        if (ctx.favorites[group.name]?.url) {
            newFavoriteFiles[group.name].addToMap = addToMap;
            ctx.setFavorites({ ...newFavoriteFiles });
        } else {
            newFavoriteFiles = await getFavorites(addToMap, newFavoriteFiles);
            if (addToMap) {
                let newSelectedGpxFile = {};
                newSelectedGpxFile.file = Object.assign({}, newFavoriteFiles[group.name]);
                newSelectedGpxFile.nameGroup = group.name;
                if (!ctx.selectedGpxFile) {
                    ctx.selectedGpxFile = {};
                }
                if (ctx.selectedGpxFile.markerCurrent) {
                    newSelectedGpxFile.markerPrev = ctx.selectedGpxFile.markerCurrent;
                }
                ctx.setSelectedGpxFile(newSelectedGpxFile);
                ctx.setFavorites({ ...newFavoriteFiles });
            }
        }

        let savedVisibleFav = JSON.parse(localStorage.getItem('visibleFav'));
        if (savedVisibleFav) {
            savedVisibleFav.push(group.name);
            localStorage.setItem('visibleFav', JSON.stringify(savedVisibleFav));
        } else {
            localStorage.setItem('visibleFav', JSON.stringify([group.name]));
        }
        setProgressVisible(false);
    }

    useEffect(() => {
        let markerList = [];
        if (ctx.favorites[group.name]?.markers) {
            Object.values(ctx.favorites[group.name].markers._layers).forEach((value) => {
                let marker = {
                    title: value.options.title,
                    icon: value.options.icon.options.html,
                    layer: value,
                };
                markerList.push(marker);
            });
        } else if (favoritesPointsOpen && markers.length === 0) {
            getFavoritesWithoutLayers().then();
        }
        setMarkers(markerList);
    }, [favoritesPointsOpen, setFavoritesPointsOpen, ctx.favorites]);

    async function getFavoritesWithoutLayers() {
        let newFavoriteFiles = await getFavorites(false, Object.assign({}, ctx.favorites)).then();
        ctx.setFavorites({ ...newFavoriteFiles });
    }

    useEffect(() => {
        if (ctx.favorites[group.name]?.markers && group.name === ctx.selectedGpxFile.file?.name) {
            ctx.selectedGpxFile.file.markers = ctx.favorites[group.name].markers;
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        }
    }, [ctx.favorites, ctx.setFavorites]);

    function getGroupSize(group) {
        return group?.pointsGroups[group.name === FavoritesManager.DEFAULT_GROUP_NAME ? '' : group.name].points.length;
    }

    return (
        <div key={'group' + index}>
            <MenuItem
                sx={{ ml: 3 }}
                divider
                onClick={() => {
                    getGroupSize(group) > 0 && toggleFavoritesPointsOpen();
                }}
            >
                <ListItemIcon style={{ color: group.name && FavoritesManager.getColorGroup(ctx, group.name, false) }}>
                    <Folder fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="inherit" noWrap>
                        {group.name}
                    </Typography>
                </ListItemText>
                <Switch
                    checked={
                        ctx.favorites[group.name]?.addToMap === true && enableGroups.some((e) => e.name === group.name)
                    }
                    onChange={(e) => {
                        enableLayerWithGroups(setLoadingFavorites, e.target.checked).then();
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
                {getGroupSize(group) === 0 ? <></> : favoritesPointsOpen ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            {loadingFavorites ? <LinearProgress /> : <></>}
            <Collapse in={favoritesPointsOpen} timeout="auto">
                {markers &&
                    markers.map((marker, index) => {
                        return <FavoriteItem key={marker + index} index={index} marker={marker} group={group} />;
                    })}
            </Collapse>
        </div>
    );
}
