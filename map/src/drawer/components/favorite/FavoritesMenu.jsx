import React, {useContext, useEffect, useState} from 'react';
import {
    Collapse,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import {ExpandLess, ExpandMore, Star} from "@mui/icons-material";
import AppContext from "../../../context/AppContext";
import FavoriteAllGroups from "./FavoriteAllGroups";
import FavoriteGroup from "./FavoriteGroup";
import Utils from "../../../util/Utils";
import TracksManager from "../../../context/TracksManager";
import FavoritesManager from "../../../context/FavoritesManager";

export default function FavoritesMenu() {
    const ctx = useContext(AppContext);

    const [favoriteGroupsOpen, setFavoriteGroupsOpen] = useState(false);
    const [openFavoritesGroups, setOpenFavoritesGroups] = useState([]);
    const [enableGroups, setEnableGroups] = useState([]);

    //create groups
    useEffect(() => {
        let files = (!ctx.listFiles || !ctx.listFiles.uniqueFiles ? [] :
            ctx.listFiles.uniqueFiles).filter((item) => {
            return item.type === FavoritesManager.FAVORITE_FILE_TYPE && item.name.slice(-4) === '.gpx';
        });
        files.sort((a, b) => a.name.localeCompare(b.name))
        const newFavoritesFiles = {
            groups: []
        };
        files.forEach(file => {
            let group = FavoritesManager.createGroup(file)
            newFavoritesFiles.groups.push(group);
        })
        newFavoritesFiles.groups = FavoritesManager.orderList(newFavoritesFiles.groups, FavoritesManager.DEFAULT_GROUP_NAME);
        ctx.setFavorites(newFavoritesFiles);
    }, [ctx.listFiles, ctx.setListFiles]);

    useEffect(() => {
        if (ctx.favorites.groups) {
            let res = [];
            ctx.favorites.groups.forEach(g => {
                if (g.hidden !== true) {
                    res.push(g);
                }
            })
            setOpenFavoritesGroups(res);
        }
    }, [ctx.favorites]);

    useEffect(() => {
        let enableAllGroups = enableGroups.length === openFavoritesGroups.length;
        let disableAllGroups = enableGroups.length === 0 && ctx.favorites.groups?.length !== 0;
        if (enableAllGroups) {
            createAllLayers(ctx, true, ctx.favorites.groups).then();
        } else if (disableAllGroups) {
            deleteAllLayers(ctx, ctx.favorites.groups);
        }
    }, [enableGroups, setEnableGroups]);

    async function createAllLayers(ctx, addToMap, groups) {
        const newFavoritesFiles = Object.assign({}, ctx.favorites);
        await addAllFavorites(newFavoritesFiles, addToMap, groups);
        ctx.setFavorites(newFavoritesFiles);
    }

    function deleteAllLayers(ctx, groups) {
        const newFavoritesFiles = Object.assign({}, ctx.favorites);
        groups.forEach(group => {
            if (newFavoritesFiles[group.name]) {
                newFavoritesFiles[group.name].url = null;
            }
        });
        ctx.setFavorites(newFavoritesFiles);
    }

    async function addAllFavorites(newFavoritesFiles, addToMap, groups) {
        if (groups) {
            for (const g of openFavoritesGroups) {
                if (!ctx.favorites[g.name]?.url) {
                    let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(g.file.type)}&name=${encodeURIComponent(g.file.name)}`;
                    newFavoritesFiles[g.name] = {
                        'url': url,
                        'clienttimems': g.file.clienttimems,
                        'updatetimems': g.file.updatetimems,
                        'name': g.file.name,
                        'addToMap': addToMap
                    };
                    await getFavoriteData(g, newFavoritesFiles);
                } else {
                    newFavoritesFiles[g.name].addToMap = addToMap;
                }
            }
            newFavoritesFiles.groups = FavoritesManager.orderList(newFavoritesFiles.groups, FavoritesManager.DEFAULT_GROUP_NAME);
        }
    }

    async function getFavoriteData(g, newFavoritesFiles) {
        let f = await Utils.getFileData(newFavoritesFiles[g.name]);
        const favoriteFile = new File([f], g.file.name, {
            type: "text/plain",
        });
        let favorites = await TracksManager.getTrackData(favoriteFile);
        let ind = newFavoritesFiles.groups.findIndex((obj => obj.name === g.name));
        newFavoritesFiles.groups[ind].pointsGroups = favorites.pointsGroups;
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
                {ctx.favorites.groups && ctx.favorites.groups.length > 0 ? `${ctx.favorites.groups.length}` : ''}
            </Typography>
            {ctx.favorites.groups?.length === 0 ? <></> : favoriteGroupsOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={favoriteGroupsOpen} timeout="auto" unmountOnExit>
            {ctx.favorites.groups?.length !== 0 &&
                <FavoriteAllGroups setEnableGroups={setEnableGroups}
                                   favoritesGroups={openFavoritesGroups}/>}
            {ctx.favorites.groups && ctx.favorites.groups.map((group, index) => {
                return <FavoriteGroup key={group + index}
                                      index={index}
                                      group={group}
                                      enableGroups={enableGroups}
                                      setEnableGroups={setEnableGroups}/>;
            })}
        </Collapse>
    </>;
}