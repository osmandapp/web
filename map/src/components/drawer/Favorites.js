import React, {useContext, useEffect, useState} from 'react';
import {Collapse, ListItemIcon, ListItemText, MenuItem, Switch, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Star, ViewHeadline} from "@mui/icons-material";
import AppContext from "../../context/AppContext";

export default function Favorites() {
    const ctx = useContext(AppContext);
    const [favoriteGroupsOpen, setFavoriteGroupsOpen] = useState(false);
    const [enableGroups, setEnableGroups] = useState([]);

    useEffect(() => {
        if (ctx.listFiles) {
            let favoriteFile = (!ctx.listFiles || !ctx.listFiles.uniqueFiles ? [] :
                ctx.listFiles.uniqueFiles).find((item) => {
                return (item.type === 'FAVOURITES');
            });

            if (favoriteFile) {
                let favObj = {};
                let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(favoriteFile.type)}&name=${encodeURIComponent(favoriteFile.name)}`;
                let newFavouriteFile = ctx.favorites.file;
                if (newFavouriteFile) {
                    newFavouriteFile.url = null;
                } else {
                    newFavouriteFile = {'url': url, 'clienttimems': favoriteFile.clienttimems, 'name': favoriteFile.name};
                }
                favObj.file = newFavouriteFile;
                favObj.groups = [];
                ctx.setFavorites(favObj);
            }
        }
    }, [ctx.listFiles, ctx.setListFiles]);

    async function enableLayerWithGroups(group, ctx, visible) {
        if (group !== undefined) {
            ctx.favorites.groups = visible ? [...ctx.favorites.groups, group]
                : ctx.favorites.groups.filter(function (f) {
                    return f !== group
                });
        }
        if (visible) {
            ctx.favorites.groups = [...ctx.favorites.groups, group];
            setEnableGroups([...enableGroups, group]);
        } else {
            ctx.favorites.groups.filter(function (f) {
                return f !== group
            });
            setEnableGroups(enableGroups.filter(function (f) {
                return f !== group
            }));
        }
        ctx.setFavorites({...ctx.favorites});
    }

    async function enableLayerAllGroups(ctx, visible) {
        if (ctx.favorites && ctx.favorites.groupsUnique.length > 0) {
            ctx.favorites.groups = visible ? ctx.favorites.groups.concat(ctx.favorites.groupsUnique) : enableGroups;
        }
        ctx.setFavorites({...ctx.favorites});
    }

    const FavoritesRow = (ctx) => ({index, group}) => {
        if (group === null) {
            group = "Favorites"
        }
        return (
            <MenuItem sx={{ ml: 3 }} key={index} divider>
                <ListItemText inset>
                    <Typography variant="inherit" noWrap>
                        {group}
                    </Typography>
                </ListItemText>
                <Switch
                   onChange={(e) => enableLayerWithGroups(group, ctx, e.target.checked)}/>
            </MenuItem>)
    }

    const FavoritesShowAllRow = (ctx) => {
        return (
            <MenuItem sx={{ml: 3}} divider>
                <ListItemIcon>
                    <ViewHeadline fontSize="small"/>
                </ListItemIcon>
                <ListItemText> Show all favorites </ListItemText>
                <Switch
                    onChange={(e) => enableLayerAllGroups(ctx, e.target.checked)}/>
            </MenuItem>)
    }

    return <>
        <MenuItem sx={{mb: 1}} onClick={() => setFavoriteGroupsOpen(!favoriteGroupsOpen)}>
            <ListItemIcon>
                <Star fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Favorites </ListItemText>
            {favoriteGroupsOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={favoriteGroupsOpen} timeout="auto" unmountOnExit>
            {ctx.favorites.groupsUnique && FavoritesShowAllRow(ctx)}
            {ctx.favorites.groupsUnique && ctx.favorites.groupsUnique.map((group, index) => {
                return FavoritesRow(ctx)({index: index, group: group});
            })}
        </Collapse>
    </>;
}