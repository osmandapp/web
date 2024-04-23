import { Dialog } from '@material-ui/core';
import { Button, Grid, IconButton, ListItemText } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext, useEffect, useState } from 'react';
import contextMenuStyles from '../../styles/ContextMenuStyles';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../../context/AppContext';
import { Add, Close } from '@mui/icons-material';
import MarkerOptions from '../../../map/markers/MarkerOptions';
import FavoriteName from './structure/FavoriteName';
import FavoriteAddress from './structure/FavoriteAddress';
import FavoriteDescription from './structure/FavoriteDescription';
import FavoriteGroup from './structure/FavoriteGroup';
import FavoriteIcon from './structure/FavoriteIcon';
import FavoriteColor from './structure/FavoriteColor';
import FavoriteShape from './structure/FavoriteShape';
import FavoritesManager, {
    DEFAULT_FAV_GROUP_NAME,
    DEFAULT_GROUP_NAME_POINTS_GROUPS,
} from '../../../manager/FavoritesManager';
import FavoriteHelper from './FavoriteHelper';
import TracksManager from '../../../manager/track/TracksManager';
import { apiGet } from '../../../util/HttpApi';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import { saveTrackToLocalStorage } from '../../../manager/track/SaveTrackManager';
import { FINAL_ICON_NAME, TITLE, WEB_POI_PREFIX } from '../wpt/WptTagsProvider';

export default function AddFavoriteDialog({ dialogOpen, setDialogOpen, selectedPoi = null }) {
    const menuStyles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [favoriteName, setFavoriteName] = useState('');
    const [favoriteAddress, setFavoriteAddress] = useState(getDefaultFavAddress());
    const [favoriteDescription, setFavoriteDescription] = useState('');
    const [addAddress, setAddAddress] = useState(favoriteAddress !== '');
    const [addDescription, setAddDescription] = useState(false);
    const [favoriteGroup, setFavoriteGroup] = useState(null);
    const [favoriteIcon, setFavoriteIcon] = useState(getDefaultFavIcon());
    const [favoriteIconCategories, setFavoriteIconCategories] = useState(null);
    const [favoriteColor, setFavoriteColor] = useState(MarkerOptions.DEFAULT_WPT_COLOR);
    const [favoriteShape, setFavoriteShape] = useState(MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE);
    const [currentIconCategories, setCurrentIconCategories] = useState(null);
    const [errorName, setErrorName] = useState(false);
    const [width] = useWindowSize();
    const widthDialog = width / 2 < 450 ? width * 0.75 : 450;
    const [latLon, setLatLon] = useState(null);

    useEffect(() => {
        getIconCategories().then();
    }, [dialogOpen]);

    useEffect(() => {
        if (ctx.addFavorite?.location) {
            setLatLon({
                lat: ctx.addFavorite?.location?.lat.toFixed(7),
                lon: ctx.addFavorite?.location?.lng.toFixed(7),
            });
        }
    }, [ctx.addFavorite]);

    function getDefaultFavIcon() {
        if (selectedPoi) {
            return selectedPoi.poi?.options?.[FINAL_ICON_NAME];
        }
        return MarkerOptions.DEFAULT_WPT_ICON;
    }

    function getDefaultFavAddress() {
        return selectedPoi?.address ?? '';
    }

    async function getIconCategories() {
        let resp = await apiGet(FavoritesManager.FAVORITE_GROUP_FOLDER);
        const res = await resp.json();
        if (res) {
            setCurrentIconCategories('special');
            setFavoriteIconCategories(res);
        }
    }

    async function save() {
        if (ctx.addFavorite.editTrack) {
            saveTrackWpt();
        } else {
            const saved = await saveFavorite();
            if (saved) {
                ctx.setCurrentObjectType(OBJECT_TYPE_FAVORITE);
                ctx.setUpdateInfoBlock(true);
                updateGroupMarkers(saved.res, saved.selectedGroup).then();
                closeDialog();
                ctx.setUpdateInfoBlock(true);
            }
        }
    }

    function saveTrackWpt() {
        delete ctx.addFavorite.editTrack;
        ctx.setAddFavorite({ ...ctx.addFavorite });
        let selectedGroup = FavoritesManager.createDefaultWptGroup(favoriteGroup);
        let favorite = {
            name: favoriteName,
            address: favoriteAddress === '' ? null : favoriteAddress,
            desc: favoriteDescription === '' ? null : favoriteDescription,
            color: favoriteColor,
            background: favoriteShape,
            icon: favoriteIcon,
            category: getCategoryName(selectedGroup),
            lat: latLon.lat,
            lon: latLon.lon,
        };
        if (!ctx.selectedGpxFile.wpts) {
            ctx.selectedGpxFile.wpts = [];
        }
        if (!ctx.selectedGpxFile.pointsGroups) {
            ctx.selectedGpxFile.pointsGroups = {};
        }
        ctx.selectedGpxFile.wpts.push(favorite);
        if (ctx.createTrack) {
            prepareLocalTrack();
        }
        if (favorite.category === null) {
            if (!ctx.selectedGpxFile.pointsGroups[FavoritesManager.DEFAULT_GROUP_NAME_POINTS_GROUPS]) {
                ctx.selectedGpxFile.pointsGroups[FavoritesManager.DEFAULT_GROUP_NAME_POINTS_GROUPS] = {
                    name: FavoritesManager.DEFAULT_GROUP_NAME_POINTS_GROUPS,
                    iconName: MarkerOptions.DEFAULT_WPT_ICON,
                    backgroundType: MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE,
                    color: MarkerOptions.DEFAULT_WPT_COLOR,
                    points: [],
                };
            }
            ctx.selectedGpxFile.pointsGroups[FavoritesManager.DEFAULT_GROUP_NAME_POINTS_GROUPS].points.push(favorite);
        } else {
            ctx.selectedGpxFile.pointsGroups[favorite.category].points.push(favorite);
        }
        ctx.selectedGpxFile.updateLayers = true;
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        if (ctx.createTrack) {
            ctx.trackState.update = true;
            ctx.setTrackState({ ...ctx.trackState });
        }
        closeDialog();
    }

    function prepareLocalTrack() {
        let ind = ctx.localTracks.findIndex((t) => t.name === ctx.selectedGpxFile.name);
        if (ind !== -1) {
            if (!ctx.localTracks[ind].wpts) {
                ctx.localTracks[ind].wpts = [];
            }
            if (!ctx.localTracks[ind].pointsGroups) {
                ctx.localTracks[ind].pointsGroups = {};
            }
            ctx.localTracks[ind].wpts = ctx.selectedGpxFile.wpts;
            ctx.localTracks[ind].pointsGroups = ctx.selectedGpxFile.pointsGroups;
        } else {
            TracksManager.prepareTrack(ctx.selectedGpxFile);
            ctx.localTracks.push(ctx.selectedGpxFile);
        }
        saveTrackToLocalStorage({ ctx, track: ctx.selectedGpxFile }); // ctx.localTracks might be modified there
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        ctx.setLocalTracks([...ctx.localTracks]);
    }

    function excludeTags(tag) {
        return (
            tag.startsWith(WEB_POI_PREFIX) ||
            tag === TITLE ||
            tag === 'icon' ||
            tag === 'color' ||
            tag === 'background' ||
            tag === 'category' ||
            tag === 'lat' ||
            tag === 'lon' ||
            tag === 'desc' ||
            tag === 'address'
        );
    }

    async function saveFavorite() {
        let selectedGroup =
            favoriteGroup === null
                ? ctx.favorites.groups?.find((g) => g.name === FavoritesManager.DEFAULT_GROUP_NAME)
                : favoriteGroup;
        if (!selectedGroup) {
            selectedGroup = {
                name: FavoritesManager.DEFAULT_GROUP_NAME,
                file: {
                    name: FavoritesManager.DEFAULT_GROUP_NAME + '.gpx',
                    type: FavoritesManager.FAVORITE_FILE_TYPE,
                },
            };
        }
        let favorite;
        if (selectedGroup) {
            let ext = null;
            if (selectedPoi) {
                const filteredOptions = Object.keys(selectedPoi.poi.options)
                    .filter((opt) => !excludeTags(opt))
                    .reduce((obj, key) => {
                        obj[key] = selectedPoi.poi.options[key];
                        return obj;
                    }, {});
                ext = { extensions: filteredOptions };
            }
            favorite = {
                name: favoriteName,
                address: favoriteAddress === '' ? null : favoriteAddress,
                desc: favoriteDescription === '' ? null : favoriteDescription,
                color: favoriteColor,
                background: favoriteShape,
                icon: favoriteIcon,
                category: getCategoryName(selectedGroup),
                lat: latLon.lat,
                lon: latLon.lon,
                ext: ext,
            };
        }
        const res = await FavoritesManager.addFavorite(favorite, selectedGroup.file.name, selectedGroup.updatetimems);
        return { res, selectedGroup };
    }

    function getCategoryName(selectedGroup) {
        return selectedGroup.name !== FavoritesManager.DEFAULT_GROUP_NAME ? selectedGroup.name : null;
    }

    function closeDialog() {
        setFavoriteName('');
        setFavoriteAddress('');
        setFavoriteDescription('');
        setAddAddress(false);
        setAddDescription(false);
        setFavoriteGroup(null);
        setFavoriteIcon(MarkerOptions.DEFAULT_WPT_ICON);
        setFavoriteIconCategories(null);
        setFavoriteColor(MarkerOptions.DEFAULT_WPT_COLOR);
        setFavoriteShape(MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE);
        setCurrentIconCategories(null);
        setErrorName(false);
        ctx.setAddFavorite({ ...ctx.addFavorite, location: null });
        setDialogOpen(false);
    }

    async function updateGroupMarkers(result, selectedGroup) {
        if (!ctx.favorites.mapObjs[selectedGroup.name]) {
            ctx.favorites.mapObjs[selectedGroup.name] = FavoriteHelper.createGroupObj(result, selectedGroup);
        } else {
            ctx.favorites.mapObjs[selectedGroup.name] = FavoriteHelper.updateGroupObj(
                ctx.favorites.mapObjs[selectedGroup.name],
                result
            );
        }
        ctx.favorites = FavoriteHelper.updateSelectedGroup(ctx.favorites, selectedGroup.name, result);
        FavoriteHelper.updateSelectedFile({
            ctx,
            favorites: ctx.favorites,
            result,
            favoriteName,
            groupName: selectedGroup.name,
            deleted: false,
        });
        ctx.setFavorites({ ...ctx.favorites });
        setFavoriteGroup(ctx.favorites.mapObjs[selectedGroup.name]);
    }

    const CloseDialog = (dialogOpen) => {
        return (
            <IconButton variant="contained" type="button" onClick={() => dialogOpen(false)}>
                <Close fontSize="small" />
            </IconButton>
        );
    };

    function getTitleDialog() {
        return ctx.addFavorite.editTrack ? 'Add waypoint' : 'Add favorite';
    }

    function groupHasSameWpt() {
        let selectedGroup =
            favoriteGroup === null
                ? ctx.favorites.groups?.find((g) => g.name === FavoritesManager.DEFAULT_GROUP_NAME)
                : favoriteGroup;
        if (!selectedGroup) {
            return false;
        }
        const groupName =
            selectedGroup.name === DEFAULT_FAV_GROUP_NAME ? DEFAULT_GROUP_NAME_POINTS_GROUPS : selectedGroup.name;
        const points = selectedGroup.pointsGroups?.[groupName]?.points || [];

        return points.some(
            (point) =>
                point.name === favoriteName &&
                point.lat === parseFloat(parseFloat(latLon?.lat).toFixed(5)) &&
                point.lon === parseFloat(parseFloat(latLon?.lon).toFixed(5))
        );
    }

    return (
        <Dialog open={dialogOpen}>
            <Grid container spacing={2}>
                <Grid className={menuStyles.name} item xs={11} sx={{ mb: -3 }}>
                    <DialogTitle>{getTitleDialog()}</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ ml: -2, mt: 1 }}>
                    {CloseDialog(setDialogOpen)}
                </Grid>
            </Grid>
            <DialogContent>
                <FavoriteName
                    favoriteName={favoriteName}
                    setFavoriteName={setFavoriteName}
                    favoriteGroup={favoriteGroup}
                    setErrorName={setErrorName}
                    widthDialog={widthDialog}
                />
                {!addAddress && (
                    <ListItemText sx={{ maxWidth: `${widthDialog}px` }}>
                        <IconButton sx={{ mt: -1 }} onClick={() => setAddAddress(true)}>
                            <Add />
                        </IconButton>
                        Add address
                    </ListItemText>
                )}
                {addAddress && (
                    <FavoriteAddress
                        favoriteAddress={favoriteAddress}
                        setFavoriteAddress={setFavoriteAddress}
                        setClose={setAddAddress}
                        widthDialog={widthDialog}
                    />
                )}
                {!addDescription && (
                    <ListItemText sx={{ maxWidth: `${widthDialog}px` }}>
                        <IconButton sx={{ mt: -1 }} onClick={() => setAddDescription(true)}>
                            <Add />
                        </IconButton>
                        Add description
                    </ListItemText>
                )}
                {addDescription && (
                    <FavoriteDescription
                        favoriteDescription={favoriteDescription}
                        setFavoriteDescription={setFavoriteDescription}
                        setClose={setAddDescription}
                        widthDialog={widthDialog}
                    />
                )}
                {!ctx.addFavorite.editTrack && (
                    <FavoriteGroup
                        favoriteGroup={favoriteGroup}
                        setFavoriteGroup={setFavoriteGroup}
                        groups={ctx.favorites.groups}
                        defaultGroup={FavoritesManager.DEFAULT_GROUP_NAME}
                        widthDialog={widthDialog}
                    />
                )}
                {ctx.addFavorite.editTrack && (
                    <FavoriteGroup
                        favoriteGroup={favoriteGroup}
                        setFavoriteGroup={setFavoriteGroup}
                        groups={ctx.selectedGpxFile.pointsGroups}
                        defaultGroup={FavoritesManager.DEFAULT_GROUP_NAME_POINTS_GROUPS}
                        widthDialog={widthDialog}
                    />
                )}
                <FavoriteIcon
                    favoriteIcon={favoriteIcon}
                    setFavoriteIcon={setFavoriteIcon}
                    currentIconCategories={currentIconCategories}
                    favoriteIconCategories={favoriteIconCategories}
                    selectedGpxFile={ctx.selectedGpxFile}
                    add={true}
                    defaultIcon={MarkerOptions.DEFAULT_WPT_ICON}
                    widthDialog={widthDialog}
                />
                <FavoriteColor
                    favoriteColor={favoriteColor}
                    setFavoriteColor={setFavoriteColor}
                    defaultColor={MarkerOptions.DEFAULT_WPT_COLOR}
                    widthDialog={widthDialog}
                />
                <FavoriteShape
                    color={favoriteColor}
                    favoriteShape={favoriteShape}
                    setFavoriteShape={setFavoriteShape}
                    defaultBackground={MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE}
                />
            </DialogContent>
            <DialogActions>
                <Button disabled={errorName || groupHasSameWpt()} onClick={() => save()}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}
