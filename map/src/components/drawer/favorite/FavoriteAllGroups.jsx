import {ListItemIcon, ListItemText, MenuItem, Switch} from "@mui/material";
import {ViewHeadline} from "@mui/icons-material";
import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";

export default function FavoriteAllGroups({enableGroups, setEnableGroups}) {

    const ctx = useContext(AppContext);

    const [allGroupsOpen, setAllGroupsOpen] = useState(false);

    async function enableLayerAllGroups(ctx, visible) {
        if (visible) {
            if (ctx.favorites && ctx.favorites.groupsUnique.length > 0) {
                ctx.favorites.groups = ctx.favorites.groupsUnique.filter(function (item) {
                    return item.hidden === 'false';
                });
                ctx.favorites.groups = ctx.favorites.groups.concat(enableGroups);
            }
            setEnableGroups(ctx.favorites.groups);
            setAllGroupsOpen(true);
        } else {
            if (ctx.favorites && ctx.favorites.groupsUnique.length > 0) {
                ctx.favorites.groups = [];
            }
            setEnableGroups([]);
            setAllGroupsOpen(false);
        }

        ctx.favorites.visibleMarker.prev = ctx.favorites.visibleMarker.current;
        ctx.favorites.visibleMarker.current = null;

        ctx.setFavorites({...ctx.favorites});
    }

    return (<MenuItem sx={{ml: 3}} divider>
        <ListItemIcon>
            <ViewHeadline fontSize="small"/>
        </ListItemIcon>
        <ListItemText> Show all favorites </ListItemText>
        <Switch checked={allGroupsOpen}
                onChange={(e) => enableLayerAllGroups(ctx, e.target.checked)}/>
    </MenuItem>)
}