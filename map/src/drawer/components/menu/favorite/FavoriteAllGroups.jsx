import { ListItemIcon, ListItemText, MenuItem, Switch } from '@mui/material';
import { ViewHeadline } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../../context/AppContext';
import FavoritesManager from '../../../../manager/FavoritesManager';

export default function FavoriteAllGroups({ setEnableGroups, favoritesGroups }) {
    const ctx = useContext(AppContext);

    const [allGroupsOpen, setAllGroupsOpen] = useState(false);
    const [once, setOnce] = useState(false);

    async function enableLayerAllGroups(ctx, visible) {
        if (visible) {
            setEnableGroups(favoritesGroups);
            setAllGroupsOpen(true);
        } else {
            setEnableGroups([]);
            setAllGroupsOpen(false);
            if (ctx.selectedGpxFile?.markerCurrent) {
                ctx.selectedGpxFile.markerPrev = ctx.selectedGpxFile.markerCurrent;
            }
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        }
    }

    useEffect(() => {
        if (favoritesGroups && !once) {
            setOnce(true);
            let savedVisible = JSON.parse(localStorage.getItem(FavoritesManager.FAVORITE_LOCAL_STORAGE));
            if (savedVisible) {
                if (savedVisible.length === favoritesGroups.length) {
                    setAllGroupsOpen(true);
                }
            }
        }
    }, [favoritesGroups]);

    return (
        <>
            {favoritesGroups.length > 0 && (
                <MenuItem sx={{ ml: 3 }} divider>
                    <ListItemIcon>
                        <ViewHeadline fontSize="small" />
                    </ListItemIcon>
                    <ListItemText> Show all favorites </ListItemText>
                    <Switch checked={allGroupsOpen} onChange={(e) => enableLayerAllGroups(ctx, e.target.checked)} />
                </MenuItem>
            )}
        </>
    );
}
