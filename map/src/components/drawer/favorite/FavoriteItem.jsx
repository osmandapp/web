import {ListItemText, MenuItem} from "@mui/material";
import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";

export default function FavoriteItem({index, marker}) {

    const ctx = useContext(AppContext);

    function addFavoriteToMap(marker) {
        if (ctx.favorites.visibleMarker.current) {
            ctx.favorites.visibleMarker.prev = ctx.favorites.visibleMarker.current;
        }
        ctx.favorites.visibleMarker.current = marker;
        ctx.setFavorites({...ctx.favorites});
    }

    return (
        <MenuItem key={'marker' + index} sx={{ml: 3}} divider onClick={() => addFavoriteToMap(marker)}>
            <ListItemText> {marker.options.title} </ListItemText>
        </MenuItem>)
}