import React, {useContext, useEffect, useState} from 'react';
import {Collapse, LinearProgress, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Star} from "@mui/icons-material";
import AppContext from "../../../context/AppContext";
import FavoriteAllGroups from "./FavoriteAllGroups";
import FavoriteGroup from "./FavoriteGroup";
import Utils from "../../../util/Utils";
import TracksManager from "../../../context/TracksManager";

export default function FavoritesMenu() {
    const ctx = useContext(AppContext);

    const [favoriteGroupsOpen, setFavoriteGroupsOpen] = useState(false);
    const [enableGroups, setEnableGroups] = useState([]);
    const [favoritesGroups, setFavoritesGroups] = useState([]);
    const [loadingFavorites, setLoadingFavorites] = useState(false);

    //create groups
    useEffect(() => {
        let files = (!ctx.listFiles || !ctx.listFiles.uniqueFiles ? [] :
            ctx.listFiles.uniqueFiles).filter((item) => {
            return item.type === 'FAVOURITES' && item.name.slice(-4) === '.gpx';
        });
        files.sort((a, b) => a.name.localeCompare(b.name))
        let groups = [];
        files.forEach(file => {
            file.folder = file.name.split(".")[0].replace('favorites-', '');
            groups.push({name: file.folder, file: file});
        })

        createAllLayers(ctx, false, groups).then();
        setFavoritesGroups(groups);
    }, [ctx.listFiles, ctx.setListFiles]);

    useEffect(() => {
        let enableAllGroups = enableGroups.length === favoritesGroups.length;
        let disableAllGroups = enableGroups.length === 0 && favoritesGroups.length !== 0;
        if (enableAllGroups) {
            createAllLayers(ctx, true, favoritesGroups).then();
        } else if (disableAllGroups) {
            deleteAllLayers(ctx, favoritesGroups);
        }
    }, [enableGroups, setEnableGroups]);

    async function createAllLayers(ctx, addToMap, groups) {
        const newFavoritesFiles = Object.assign({}, ctx.favorites);
        await addAllFavorites(newFavoritesFiles, addToMap, groups);
        ctx.setFavorites(newFavoritesFiles);
    }

    function deleteAllLayers(ctx, groups) {
        setLoadingFavorites(true);
        const newFavoritesFiles = Object.assign({}, ctx.favorites);
        groups.forEach(group => {
            if (newFavoritesFiles[group.name]) {
                newFavoritesFiles[group.name].url = null;
            }
        });
        setLoadingFavorites(false);
        ctx.setFavorites(newFavoritesFiles);
    }

    async function addAllFavorites(newFavoritesFiles, addToMap, groups) {
        if (groups) {
            setLoadingFavorites(true);
            let resGroups = [];
            for (const g of groups) {
                if (!ctx.favorites[g.name]?.url) {
                    let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(g.file.type)}&name=${encodeURIComponent(g.file.name)}`;
                    newFavoritesFiles[g.name] = {
                        'url': url,
                        'clienttimems': g.file.clienttimems,
                        'name': g.file.name,
                        'addToMap': addToMap
                    };
                    await getFavoriteData(g, resGroups, newFavoritesFiles);
                } else {
                    await getFavoriteData(g, resGroups, newFavoritesFiles);
                    newFavoritesFiles[g.name].addToMap = addToMap;
                }
            }
            if (resGroups.length > 0) {
                newFavoritesFiles.groups = resGroups;
            }
            setLoadingFavorites(false);
            setFavoritesGroups([...resGroups]);
        }
    }

    async function getFavoriteData(g, resGroups, newFavoritesFiles) {
        let f = await Utils.getFileData(newFavoritesFiles[g.name]);
        const favoriteFile = new File([f], g.file.name, {
            type: "text/plain",
        });
        let favorites = await TracksManager.getTrackData(favoriteFile);
        g.pointsGroups = favorites.pointsGroups;
        resGroups.push(g);
        if (favorites) {
            favorites.name = g.file.name;
            Object.keys(favorites).forEach(t => {
                newFavoritesFiles[g.name][`${t}`] = favorites[t];
            });
        }
    }

    return <>
        <MenuItem sx={{mb: 1}} onClick={() => setFavoriteGroupsOpen(!favoriteGroupsOpen)}>
            <ListItemIcon>
                <Star fontSize="small"/>
            </ListItemIcon>
            <ListItemText> Favorites </ListItemText>
            <Typography variant="body2" color="textSecondary">
                {favoritesGroups && favoritesGroups.length > 0 ? `${favoritesGroups.length}` : ''}
            </Typography>
            {favoritesGroups.length === 0 ? <></> : favoriteGroupsOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        {loadingFavorites ? <LinearProgress/> : <></>}
        <Collapse in={favoriteGroupsOpen} timeout="auto" unmountOnExit>
            {favoritesGroups.length !== 0 &&
                <FavoriteAllGroups setEnableGroups={setEnableGroups}
                                   favoritesGroups={favoritesGroups}/>}
            {favoritesGroups && favoritesGroups.map((group, index) => {
                return <FavoriteGroup key={group + index}
                                      index={index}
                                      group={group}
                                      enableGroups={enableGroups}
                                      setEnableGroups={setEnableGroups}/>;
            })}
        </Collapse>
    </>;
}