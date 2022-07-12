import {Collapse, ListItemText, MenuItem, Switch, Typography} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import FavoriteItem from "./FavoriteItem";
import AppContext from "../../../context/AppContext";

export default function FavoriteGroup({index, group, enableGroups, setEnableGroups}) {

    const ctx = useContext(AppContext);

    const toggleFavoritesPointsOpen = () => {
        setFavoritesPointsOpen(!favoritesPointsOpen);
    };
    const [indexGroup, setIndexGroup] = useState(-1);
    const [showFavoritePoints, setShowFavoritePoints] = useState([]);
    const [favoritesPointsOpen, setFavoritesPointsOpen] = useState(false);

    function removeFavoriteFromMap() {
        ctx.favorites.visibleMarker.prev = ctx.favorites.visibleMarker.current;
        ctx.favorites.visibleMarker.current = null;
    }

    async function enableLayerWithGroups(group, ctx, visible) {
        removeFavoriteFromMap();

        if (visible) {
            ctx.favorites.groups = [...ctx.favorites.groups, group];
            setEnableGroups([...enableGroups, group]);
        } else {
            ctx.favorites.groups = ctx.favorites.groups.filter(function (f) {
                return f.type !== group.type
            });
            let updateGroup = enableGroups.filter(function (f) {
                return f.type !== group.type
            });
            setEnableGroups(updateGroup);
        }
        ctx.setFavorites({...ctx.favorites});
    }

    useEffect(() => {
        if (indexGroup !== -1) {
            if (showFavoritePoints.includes(indexGroup)) {
                showFavoritePoints.splice(showFavoritePoints.indexOf(indexGroup), 1)
            } else {
                showFavoritePoints.push(indexGroup);
            }
            setShowFavoritePoints([...showFavoritePoints]);
        }
        if (showFavoritePoints.length === 0) {
            removeFavoriteFromMap();
            ctx.setFavorites({...ctx.favorites});
        }
    }, [favoritesPointsOpen, setFavoritesPointsOpen]);

    return (<div key={'group' + index}>
        <MenuItem sx={{ml: 3}} divider onClick={() => {
            setIndexGroup(index);
            toggleFavoritesPointsOpen();
        }}>
            <ListItemText inset>
                <Typography variant="inherit" noWrap>
                    {group.type}
                </Typography>
            </ListItemText>
            <Switch checked={enableGroups.some(e => e.type === group.type)}
                    onChange={(e) => {
                        enableLayerWithGroups(group, ctx, e.target.checked).then();
                    }}
                    onClick={(e) => {e.stopPropagation()}}/>
            {group.markers.length === 0 ? <></> : showFavoritePoints.length > 0 ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={showFavoritePoints.includes(index)} timeout="auto">
            {group.markers.map((marker, index) => {
                return <FavoriteItem key={marker + index}
                                     index={index}
                                     marker={marker}/>;
            })}
        </Collapse>
    </div>)
}