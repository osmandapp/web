import React, {useContext, useState} from 'react';
import {Collapse, LinearProgress, ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import {ExpandLess, ExpandMore, Star} from "@mui/icons-material";
import AppContext from "../../../context/AppContext";
import FavoriteAllGroups from "./FavoriteAllGroups";
import FavoriteGroup from "./FavoriteGroup";

export default function FavoritesMenu() {
    const ctx = useContext(AppContext);

    const [favoriteGroupsOpen, setFavoriteGroupsOpen] = useState(false);
    const [enableGroups, setEnableGroups] = useState([]);

    return <>
        <MenuItem sx={{mb: 1}} onClick={() => setFavoriteGroupsOpen(!favoriteGroupsOpen)}>
            <ListItemIcon>
                <Star fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Favorites {ctx.favorites.groupsUnique && ctx.favorites.groupsUnique.length > 0 ? `(${ctx.favorites.groupsUnique.length})` : ''}</ListItemText>
            {ctx.favorites.groupsUnique.length === 0 ? <></> : favoriteGroupsOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        {ctx.gpxLoading ? <LinearProgress/> : <></>}
        <Collapse in={favoriteGroupsOpen} timeout="auto" unmountOnExit>
            {ctx.favorites.groupsUnique.length !== 0 &&
                <FavoriteAllGroups enableGroups={enableGroups}
                                   setEnableGroups={setEnableGroups}/>}
            {ctx.favorites.groupsUnique && ctx.favorites.groupsUnique.map((group, index) => {
                return <FavoriteGroup key={group + index}
                                      index={index}
                                      group={group}
                                      enableGroups={enableGroups}
                                      setEnableGroups={setEnableGroups}/>;
            })}
        </Collapse>
    </>;
}