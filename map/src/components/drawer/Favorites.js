import React, {useContext, useEffect, useState} from 'react';
import {Collapse, ListItemIcon, ListItemText, MenuItem, Switch, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Star} from "@mui/icons-material";
import AppContext from "../../context/AppContext";

export default function Favorites() {
    const ctx = useContext(AppContext);
    const [favoriteGroupsOpen, setFavoriteGroupsOpen] = useState(false);

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
        ctx.setFavorites({...ctx.favorites});
    }

    const FavoritesRow = (ctx) => ({index, group}) => {
        if (group === null) {
            group = "favorites"
        }
        return (
            <MenuItem key={index}>
                <ListItemText inset>
                    <Typography variant="inherit" noWrap>
                        {group}
                    </Typography>
                </ListItemText>
                <Switch
                   onChange={(e) => enableLayerWithGroups(group, ctx, e.target.checked)}/>
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
            {
                ctx.favorites.groupsUnique && ctx.favorites.groupsUnique.map((group, index) => {
                    return FavoritesRow(ctx)({index: index, group: group});
                })
            }
        </Collapse>
    </>;
}