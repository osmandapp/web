import { Dialog } from '@material-ui/core';
import { Button, Grid, IconButton } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext, useEffect, useState } from 'react';
import contextMenuStyles from '../../infoblock/styles/ContextMenuStyles';
import AppContext from '../../context/AppContext';
import DeleteWptDialog from './DeleteWptDialog';
import { Close } from '@mui/icons-material';
import FavoriteName from '../../infoblock/components/favorite/structure/FavoriteName';
import FavoriteAddress from '../../infoblock/components/favorite/structure/FavoriteAddress';
import FavoriteDescription from '../../infoblock/components/favorite/structure/FavoriteDescription';
import FavoriteGroup from '../../infoblock/components/favorite/structure/FavoriteGroup';
import FavoriteIcon from '../../infoblock/components/favorite/structure/FavoriteIcon';
import FavoriteColor from '../../infoblock/components/favorite/structure/FavoriteColor';
import FavoriteShape from '../../infoblock/components/favorite/structure/FavoriteShape';
import FavoritesManager, { updateFavoriteGroups } from '../../manager/FavoritesManager';
import { apiGet } from '../../util/HttpApi';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { isEmpty } from 'lodash';

export default function EditWptDialog({
    wpt,
    editFavoritesDialogOpen,
    setEditFavoritesDialogOpen,
    deleteFavoritesDialogOpen,
    setDeleteFavoritesDialogOpen,
    setOpenActions = null,
    isDetails = false,
}) {
    const menuStyles = contextMenuStyles();
    const ctx = useContext(AppContext);
    const [favoriteName, setFavoriteName] = useState(wpt.name);
    const [favoriteAddress, setFavoriteAddress] = useState(wpt.address);
    const [favoriteDescription, setFavoriteDescription] = useState(wpt.desc);
    const [favoriteGroup, setFavoriteGroup] = useState(null);
    const [favoriteColor, setFavoriteColor] = useState(wpt.color);
    const [favoriteShape, setFavoriteShape] = useState(wpt.background);
    const [favoriteIcon, setFavoriteIcon] = useState(wpt.icon);
    const [favoriteIconCategories, setFavoriteIconCategories] = useState(null);
    const [currentIconCategories, setCurrentIconCategories] = useState(null);
    const [errorName, setErrorName] = useState(false);
    const [width] = useWindowSize();
    const widthDialog = width / 2 < 450 ? width * 0.75 : 450;

    const useSelected = !isEmpty(ctx.selectedGpxFile);

    const toggleDeleteFavoritesDialogOpen = () => {
        setDeleteFavoritesDialogOpen(!deleteFavoritesDialogOpen);
    };

    useEffect(() => {
        getIconCategories().then();
    }, [editFavoritesDialogOpen]);

    async function getIconCategories() {
        let resp = await apiGet(FavoritesManager.FAVORITE_GROUP_FOLDER, {
            apiCache: true,
        });
        const res = await resp.json();
        if (res) {
            Object.entries(res.categories).forEach((category) => {
                let currentIcon = category[1].icons.find((icon) => icon === wpt.icon);
                if (currentIcon) {
                    setCurrentIconCategories(category[0]);
                }
            });
            setFavoriteIconCategories(res);
        }
    }

    async function save() {
        if (wpt) {
            if (ctx.addFavorite.editTrack) {
                saveTrackWpt();
            } else {
                await saveFavorite();
            }
        } else {
            setEditFavoritesDialogOpen(false);
            if (setOpenActions) {
                setOpenActions(false);
            }
        }
    }

    function saveTrackWpt() {
        let selectedGroupName = favoriteGroup === null ? wpt.category : favoriteGroup.name;
        let currentWpt = getCurrentWpt(selectedGroupName);
        let ind = ctx.selectedGpxFile.wpts.findIndex((wpt) => wpt === currentWpt);
        if (ind !== -1) {
            ctx.selectedGpxFile.wpts[ind] = {
                name: favoriteName,
                address: favoriteAddress === '' ? null : favoriteAddress,
                desc: favoriteDescription === '' ? null : favoriteDescription,
                color: favoriteColor,
                background: favoriteShape,
                icon: favoriteIcon,
                category: getCategoryName(selectedGroupName),
                lat: wpt.latlon?.lat ?? wpt.lat,
                lon: wpt.latlon?.lon ?? wpt.lon,
            };
        }

        ctx.selectedGpxFile.updateLayers = true;
        if (!isDetails) {
            ctx.selectedGpxFile.save = true;
            ctx.setCreateTrack({ ...ctx.createTrack, cloudAutoSave: true });
        }
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        let newWpt = ctx.selectedGpxFile.wpts[ind];
        if (isDetails) {
            newWpt.trackWptItem = true;
        }

        const updatedWpt = {
            trackWpt: true,
            file: ctx.selectedGpxFile,
            ...newWpt,
        };
        ctx.setSelectedWpt(updatedWpt);
        ctx.setPointContextMenu({});
        setEditFavoritesDialogOpen(false);
    }

    function getCategoryName(selectedGroupName) {
        return selectedGroupName !== FavoritesManager.DEFAULT_GROUP_NAME ? selectedGroupName : null;
    }

    async function saveFavorite() {
        let selectedGroupName =
            favoriteGroup === null ? wpt.category ?? FavoritesManager.DEFAULT_GROUP_NAME : favoriteGroup.name;
        let currentWpt = getCurrentWpt(selectedGroupName);
        const arrWpt = useSelected ? ctx.selectedGpxFile.file.wpts : ctx.favorites.mapObjs[wpt.group.name].wpts;

        let newGroup = ctx.favorites.groups.find((g) => g.name === selectedGroupName);
        let oldGroup = ctx.favorites.groups.find(
            (g) => g.name === (useSelected ? ctx.selectedGpxFile.nameGroup : wpt.category)
        );

        const wptName = useSelected ? ctx.selectedGpxFile.name : wpt.name;
        const oldGroupName = useSelected ? ctx.selectedGpxFile.file.name : wpt.group.file.name;

        let result = await FavoritesManager.updateFavorite(
            currentWpt,
            wptName,
            oldGroupName,
            newGroup.file.name,
            oldGroup.updatetimems,
            newGroup.updatetimems,
            arrWpt.findIndex((wpt) => wpt.name === currentWpt.name)
        );

        //update favorites groups
        if (result) {
            const oldGroupName = useSelected ? ctx.selectedGpxFile.nameGroup : wpt.category;
            updateFavoriteGroups({
                result: result,
                selectedGroupName: selectedGroupName,
                oldGroupName: oldGroupName,
                ctx: ctx,
                useSelected: useSelected,
                favoriteName: favoriteName,
            });
            setEditFavoritesDialogOpen(false);
            if (setOpenActions) {
                setOpenActions(false);
            }
        }
    }

    function getCurrentWpt(selectedGroupName) {
        const group = useSelected ? ctx.selectedGpxFile.file : ctx.favorites.mapObjs[wpt.group.name];
        let res = null;
        let wpts = group ? group.wpts : ctx.selectedGpxFile.wpts;
        if (wpts) {
            wpts.forEach((w) => {
                if (w.name === wpt.name) {
                    w.name = favoriteName;
                    w.address = getAddress();
                    w.desc = getDescription();
                    w.color = favoriteColor;
                    w.background = favoriteShape;
                    w.icon = favoriteIcon;
                    w.category = getCategory(selectedGroupName);
                    res = w;
                }
            });
        }
        return res;
    }

    function getCategory(name) {
        return name !== FavoritesManager.DEFAULT_GROUP_NAME ? name : null;
    }

    function getAddress() {
        return favoriteAddress === '' ? null : favoriteAddress;
    }

    function getDescription() {
        return favoriteDescription === '' ? null : favoriteDescription;
    }

    const CloseDialog = (dialogOpen) => {
        return (
            <IconButton variant="contained" type="button" onClick={() => dialogOpen(false)}>
                <Close fontSize="small" />
            </IconButton>
        );
    };

    function getTitleDialog() {
        return ctx.addFavorite.editTrack ? 'Edit waypoint' : 'Edit favorite';
    }

    return (
        <Dialog id="se-edit-fav-dialog" open={true} onClick={(e) => e.stopPropagation()}>
            <Grid container spacing={2}>
                <Grid className={menuStyles.name} item xs={11} sx={{ mb: -3 }}>
                    <DialogTitle>{getTitleDialog()}</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ ml: -2, mt: 1 }}>
                    {CloseDialog(setEditFavoritesDialogOpen)}
                </Grid>
            </Grid>
            <DialogContent>
                <FavoriteName
                    favoriteName={favoriteName}
                    setFavoriteName={setFavoriteName}
                    favoriteGroup={favoriteGroup}
                    favorite={wpt}
                    setErrorName={setErrorName}
                    widthDialog={widthDialog}
                />
                <FavoriteAddress
                    favoriteAddress={favoriteAddress}
                    setFavoriteAddress={setFavoriteAddress}
                    setClose={null}
                    widthDialog={widthDialog}
                />
                <FavoriteDescription
                    favoriteDescription={favoriteDescription}
                    setFavoriteDescription={setFavoriteDescription}
                    setClose={null}
                    widthDialog={widthDialog}
                />
                {!ctx.addFavorite.editTrack && (
                    <FavoriteGroup
                        favoriteGroup={favoriteGroup}
                        setFavoriteGroup={setFavoriteGroup}
                        groups={ctx.favorites.groups}
                        defaultGroup={wpt.category}
                        widthDialog={widthDialog}
                    />
                )}
                {ctx.addFavorite.editTrack && (
                    <FavoriteGroup
                        favoriteGroup={favoriteGroup}
                        setFavoriteGroup={setFavoriteGroup}
                        groups={ctx.selectedGpxFile.pointsGroups}
                        defaultGroup={wpt.category}
                        widthDialog={widthDialog}
                    />
                )}
                <FavoriteIcon
                    favoriteIcon={favoriteIcon}
                    setFavoriteIcon={setFavoriteIcon}
                    currentIconCategories={currentIconCategories}
                    favoriteIconCategories={favoriteIconCategories}
                    selectedGpxFile={ctx.selectedGpxFile}
                    add={false}
                    defaultIcon={wpt.icon}
                    widthDialog={widthDialog}
                />
                <FavoriteColor
                    favoriteColor={favoriteColor}
                    setFavoriteColor={setFavoriteColor}
                    defaultColor={wpt.color}
                    widthDialog={widthDialog}
                />
                <FavoriteShape
                    color={favoriteColor}
                    favoriteShape={favoriteShape}
                    setFavoriteShape={setFavoriteShape}
                    defaultBackground={wpt.background}
                />
            </DialogContent>
            <DialogActions sx={{ display: 'inline' }}>
                <Button sx={{ marginLeft: 'auto' }} onClick={toggleDeleteFavoritesDialogOpen}>
                    Delete
                </Button>
                <div style={{ float: 'right' }}>
                    <Button onClick={() => setEditFavoritesDialogOpen(false)}>Cancel</Button>
                    {deleteFavoritesDialogOpen && (
                        <DeleteWptDialog
                            dialogOpen={deleteFavoritesDialogOpen}
                            setDialogOpen={setDeleteFavoritesDialogOpen}
                            wpt={wpt}
                            isDetails={isDetails}
                        />
                    )}
                    <Button id="se-edit-fav-item-submit" disabled={errorName} onClick={() => save()}>
                        Save
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
}
