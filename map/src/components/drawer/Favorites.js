import React, {useContext, useEffect, useState} from 'react';
import {Collapse, ListItemIcon, ListItemText, MenuItem, Switch, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Star} from "@mui/icons-material";
import AppContext from "../../context/AppContext";

export default function Favorites() {
    const ctx = useContext(AppContext);
    const [favoriteGroupsOpen, setFavoriteGroupsOpen] = useState(false);
    const [favoritesGpx, setFavoritesGpx] = useState({});

    useEffect(() => {
        if (ctx.listFiles) {
            let favoriteFile = (!ctx.listFiles || !ctx.listFiles.uniqueFiles ? [] :
                ctx.listFiles.uniqueFiles).filter((item) => {
                return (item.type === 'FAVOURITES');
            });
            let item = favoriteFile[0];
            if (item) {
                setFavoritesGpx(favoriteFile[0])
                let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(item.type)}&name=${encodeURIComponent(item.name)}`;
                let newFavouriteFile = ctx.favoriteFile[0];
                if (newFavouriteFile && Object.keys(ctx.favoriteFile).length !== 0) {
                    newFavouriteFile.url = null;
                } else {
                    newFavouriteFile = {'url': url, 'clienttimems': item.clienttimems, 'name': item.name};
                }
                ctx.setFavoriteFile(newFavouriteFile);
            }

        }
    }, [ctx.listFiles, ctx.setListFiles]);

    async function enableLayerWithGroups(group, ctx, visible) {
        let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(favoritesGpx.type)}&name=${encodeURIComponent(favoritesGpx.name)}`;

        if (group !== undefined) {
            if (!visible) {
                let newArray = ctx.favoritesGroups.filter(function (f) {
                    return f !== group
                })
                ctx.setFavoritesGroups(newArray);
            } else {
                ctx.setFavoritesGroups(favoritesGroups => [...favoritesGroups, group]);
            }
        }

        const newFavouriteFile = Object.assign({}, ctx.favoriteFile);
        newFavouriteFile[favoritesGpx.name] = {'url': url, 'clienttimems': favoritesGpx.clienttimems, 'name': favoritesGpx.name};
        ctx.setSelectedGpxFile(newFavouriteFile);
        ctx.setFavoriteFile(newFavouriteFile);
    }

    const FavoritesRow = (favoritesGpx, ctx) => ({index, group, style}) => {
        if (group === null) {
            group = "without group"
        }
        return (
            <MenuItem style={style} key={index}>
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
                ctx.favoritesGroupsCache[0] && ctx.favoritesGroupsCache[0].map((group, index) => {
                    return FavoritesRow(favoritesGpx, ctx)({index: index, group: group});
                })
            }
        </Collapse>
    </>;
}