import { Box, Button, IconButton, LinearProgress, ListItemText } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../../context/AppContext';
import { Add } from '@mui/icons-material';
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
    updateFavoriteGroups,
} from '../../../manager/FavoritesManager';
import FavoriteHelper from './FavoriteHelper';
import DeleteWptDialog from '../../../dialogs/favorites/DeleteWptDialog';
import { ADDRESS_NOT_FOUND } from '../wpt/WptDetails';
import { FINAL_POI_ICON_NAME, WEB_POI_PREFIX, WEB_PREFIX } from '../wpt/WptTagsProvider';
import TracksManager, { GPX_FILE_EXT } from '../../../manager/track/TracksManager';
import { saveTrackToLocalStorage } from '../../../context/LocalTrackStorage';
import { apiGet } from '../../../util/HttpApi';
import { getUniqFileId } from '../../../manager/GlobalManager';
import HeaderWithUnderline from '../../../frame/components/header/HeaderWithUnderline';
import styles from './wptEditPanel.module.css';
import isEmpty from 'lodash-es/isEmpty';

const PANEL_CONTENT_WIDTH = 320;

export default function WptEditPanel({ setShowInfoBlock }) {
    const ctx = useContext(AppContext);

    const editWpt = ctx.addFavorite?.editWpt ?? null;
    const poi = ctx.addFavorite?.poi ?? null;
    const isEditMode = editWpt !== null;
    const isPoi = !isEditMode && poi !== null;
    const isAddTrackWpt = !isEditMode && !isPoi && !!ctx.addFavorite?.editTrack;
    const isEditTrackWpt = isEditMode && (editWpt.trackWpt || !!ctx.addFavorite?.editTrack);
    const isTrackMode = isAddTrackWpt || isEditTrackWpt;
    const useSelected = !isEmpty(ctx.selectedGpxFile);

    const [favoriteName, setFavoriteName] = useState(editWpt?.name ?? '');
    const [favoriteAddress, setFavoriteAddress] = useState(editWpt?.address ?? ctx.addFavorite?.address ?? '');
    const [favoriteDescription, setFavoriteDescription] = useState(editWpt?.desc ?? '');
    const [addAddress, setAddAddress] = useState(isEditMode || isPoi);
    const [addDescription, setAddDescription] = useState(isEditMode);
    const [favoriteGroup, setFavoriteGroup] = useState(null);
    const [favoriteIcon, setFavoriteIcon] = useState(
        editWpt?.icon ?? poi?.options?.[FINAL_POI_ICON_NAME] ?? MarkerOptions.DEFAULT_WPT_ICON
    );
    const [favoriteIconCategories, setFavoriteIconCategories] = useState(null);
    const [favoriteColor, setFavoriteColor] = useState(editWpt?.color ?? MarkerOptions.DEFAULT_WPT_COLOR);
    const [favoriteShape, setFavoriteShape] = useState(
        editWpt?.background ?? MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE
    );
    const [currentIconCategories, setCurrentIconCategories] = useState(null);
    const [errorName, setErrorName] = useState(false);
    const [process, setProcess] = useState(false);
    const [latLon, setLatLon] = useState(null);
    const [deleteWptDialogOpen, setDeleteWptDialogOpen] = useState(false);

    useEffect(() => {
        getIconCategories().then();
        if (!isEditMode && !isTrackMode) {
            const defaultGroup = ctx.favorites.groups?.find((g) => g.name === FavoritesManager.DEFAULT_GROUP_NAME);
            if (defaultGroup) {
                setFavoriteGroup(defaultGroup);
            }
        }
    }, []);

    useEffect(() => {
        if (isEditMode) {
            setLatLon({
                lat: editWpt.latlon?.lat ?? editWpt.lat,
                lon: editWpt.latlon?.lon ?? editWpt.lon,
            });
        } else if (ctx.addFavorite?.location) {
            setLatLon({
                lat: ctx.addFavorite.location.lat.toFixed(7),
                lon: ctx.addFavorite.location.lng.toFixed(7),
            });
        }
    }, [ctx.addFavorite]);

    async function getIconCategories() {
        const resp = await apiGet(FavoritesManager.FAVORITE_GROUP_FOLDER, { apiCache: true });
        const res = await resp.json();
        if (res) {
            if (isEditMode) {
                Object.entries(res.categories).forEach(([catName, catData]) => {
                    if (catData.icons.find((icon) => icon === editWpt.icon)) {
                        setCurrentIconCategories(catName);
                    }
                });
            } else {
                setCurrentIconCategories('special');
            }
            setFavoriteIconCategories(res);
        }
    }

    async function save() {
        setProcess(true);
        if (isEditMode) {
            if (isEditTrackWpt) {
                saveEditTrackWpt();
            } else {
                await saveEditFavorite();
            }
        } else if (isAddTrackWpt) {
            saveNewTrackWpt();
        } else {
            const saved = await saveNewFavorite();
            if (saved) {
                await updateGroupMarkers(saved.res, saved.selectedGroup);
                if (!ctx.searchResult && !ctx.selectedWpt?.poi && !ctx.selectedWpt?.wikidata) {
                    ctx.setCurrentObjectType(OBJECT_TYPE_FAVORITE);
                    ctx.setUpdateInfoBlock(true);
                }
                setProcess(false);
                closePanel({ afterSave: true });
            }
        }
        ctx.setUsedIcons((prev) => new Set([favoriteIcon, ...prev]));
    }

    function excludePoiTags(tag) {
        return (
            tag.startsWith(WEB_PREFIX) ||
            tag.startsWith(WEB_POI_PREFIX) ||
            tag === 'svg' ||
            tag === 'idObj' ||
            tag === 'name' ||
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

    // Add new regular favorite (or from POI)
    async function saveNewFavorite() {
        const gName = favoriteGroup === null ? FavoritesManager.DEFAULT_GROUP_NAME : favoriteGroup.name;
        let selectedGroup = ctx.favorites.groups?.find((g) => g.name === gName);
        if (!selectedGroup) {
            selectedGroup = {
                name: FavoritesManager.DEFAULT_GROUP_NAME,
                file: {
                    name: FavoritesManager.DEFAULT_GROUP_NAME + GPX_FILE_EXT,
                    type: FavoritesManager.FAVORITE_FILE_TYPE,
                },
            };
        }
        let ext = null;
        if (isPoi) {
            const poiData = poi.options ?? poi.properties;
            if (poiData) {
                const filteredOptions = Object.entries(poiData)
                    .filter(([key]) => !excludePoiTags(key))
                    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
                ext = { extensions: filteredOptions };
            }
        }
        const favorite = selectedGroup
            ? {
                  name: favoriteName,
                  address: favoriteAddress === '' ? null : favoriteAddress,
                  desc: favoriteDescription === '' ? null : favoriteDescription,
                  color: favoriteColor,
                  background: favoriteShape,
                  icon: favoriteIcon,
                  category: getCategoryName(selectedGroup.name),
                  lat: latLon.lat,
                  lon: latLon.lon,
                  ext,
              }
            : null;

        const res = await FavoritesManager.addFavorite(favorite, selectedGroup, ctx);
        if (!res) {
            setProcess(false);
            ctx.setNotification({ text: 'Error saving favorite', severity: 'error' });
            return null;
        }

        return { res, selectedGroup };
    }

    // Add new waypoint to a track
    function saveNewTrackWpt() {
        const selectedGroup = favoriteGroup ?? { name: FavoritesManager.DEFAULT_GROUP_NAME };
        const favorite = {
            name: favoriteName,
            address: favoriteAddress === '' ? null : favoriteAddress,
            desc: favoriteDescription === '' ? null : favoriteDescription,
            color: favoriteColor,
            background: favoriteShape,
            icon: favoriteIcon,
            category: getCategoryName(selectedGroup.name),
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
            if (!ctx.selectedGpxFile.pointsGroups[DEFAULT_GROUP_NAME_POINTS_GROUPS]) {
                ctx.selectedGpxFile.pointsGroups[DEFAULT_GROUP_NAME_POINTS_GROUPS] = {
                    name: DEFAULT_GROUP_NAME_POINTS_GROUPS,
                    iconName: MarkerOptions.DEFAULT_WPT_ICON,
                    backgroundType: MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE,
                    color: MarkerOptions.DEFAULT_WPT_COLOR,
                    points: [],
                };
            }
            ctx.selectedGpxFile.pointsGroups[DEFAULT_GROUP_NAME_POINTS_GROUPS].points.push(favorite);
        } else {
            ctx.selectedGpxFile.pointsGroups[favorite.category].points.push(favorite);
        }
        ctx.selectedGpxFile.updateLayers = true;
        ctx.selectedGpxFile.wptChangedFlag++;
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        if (ctx.createTrack) {
            ctx.trackState.update = true;
            ctx.setTrackState({ ...ctx.trackState });
        }
        setProcess(false);
        closePanel({ afterSave: true });
    }

    function prepareLocalTrack() {
        if (!ctx.selectedGpxFile?.name) {
            ctx.setRoutingErrorMsg('⚠️ Cannot save nameless local track.');
            return;
        }
        const ind = ctx.localTracks.findIndex((t) => t?.name === ctx.selectedGpxFile?.name);
        if (ind !== -1) {
            if (!ctx.localTracks[ind].wpts) {
                ctx.localTracks[ind].wpts = [];
            }
            if (!ctx.localTracks[ind].pointsGroups) {
                ctx.localTracks[ind].pointsGroups = {};
            }
            ctx.localTracks[ind].wpts = ctx.selectedGpxFile.wpts;
            ctx.localTracks[ind].pointsGroups = ctx.selectedGpxFile.pointsGroups;
            ctx.localTracks[ind].routeTypes = ctx.selectedGpxFile.routeTypes;
        } else {
            TracksManager.prepareTrack(ctx.selectedGpxFile);
            ctx.localTracks.push(ctx.selectedGpxFile);
        }
        saveTrackToLocalStorage({ ctx, track: ctx.selectedGpxFile });
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        ctx.setLocalTracks([...ctx.localTracks]);
    }

    // Edit existing regular favorite
    async function saveEditFavorite() {
        const selectedGroupId = favoriteGroup !== null ? favoriteGroup.id : editWpt.groupId;
        const oldGroupId = useSelected ? ctx.selectedGpxFile.id : editWpt.groupId;
        const selectedGroupName = favoriteGroup !== null ? favoriteGroup.name : editWpt.category;
        const oldGroupName = useSelected ? ctx.selectedGpxFile.file.name : editWpt.group.file.name;

        const currentWpt = getCurrentWpt(selectedGroupName);
        const arrWpt = useSelected ? ctx.selectedGpxFile.trackData?.wpts : ctx.favorites.mapObjs[selectedGroupId].wpts;

        const newGroup = ctx.favorites.groups.find((g) => g.id === selectedGroupId);
        const oldGroup = ctx.favorites.groups.find((g) => g.id === oldGroupId);
        const wptName = useSelected ? ctx.selectedGpxFile.name : editWpt.name;

        const result = await FavoritesManager.updateFavorite(
            currentWpt,
            wptName,
            oldGroupName,
            newGroup.file.name,
            oldGroup.updatetimems,
            newGroup.updatetimems,
            arrWpt.findIndex((w) => w.name === currentWpt.name)
        );

        if (result) {
            updateFavoriteGroups({ result, selectedGroupId, oldGroupId, ctx, useSelected, favoriteName });
            setProcess(false);
            closePanel({ afterSave: true });
        }
    }

    // Edit existing track waypoint
    function saveEditTrackWpt() {
        const selectedGroupName = favoriteGroup === null ? editWpt.category : favoriteGroup.name;
        const currentWpt = getCurrentWpt(selectedGroupName);
        const ind = ctx.selectedGpxFile.wpts.findIndex((w) => w === currentWpt);
        if (ind !== -1) {
            ctx.selectedGpxFile.wpts[ind] = {
                name: favoriteName,
                address: favoriteAddress === '' || favoriteAddress === ADDRESS_NOT_FOUND ? null : favoriteAddress,
                desc: favoriteDescription === '' ? null : favoriteDescription,
                color: favoriteColor,
                background: favoriteShape,
                icon: favoriteIcon,
                category: getCategoryName(selectedGroupName),
                lat: editWpt.latlon?.lat ?? editWpt.lat,
                lon: editWpt.latlon?.lon ?? editWpt.lon,
            };
        }
        ctx.selectedGpxFile.wptChangedFlag++;
        ctx.selectedGpxFile.updateLayers = true;
        if (editWpt.mapObj) {
            ctx.selectedGpxFile.save = true;
            ctx.setCreateTrack({ ...ctx.createTrack, cloudAutoSave: true });
        }
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });

        const newWpt = ctx.selectedGpxFile.wpts[ind];
        newWpt.mapObj = editWpt.mapObj;
        ctx.setSelectedWpt({ trackWpt: true, trackData: ctx.selectedGpxFile.trackData, ...newWpt });
        ctx.setPointContextMenu({});

        setProcess(false);
        closePanel({ afterSave: true });
    }

    function getCurrentWpt(selectedGroupName) {
        const group = useSelected ? ctx.selectedGpxFile.trackData : ctx.favorites.mapObjs[editWpt.group?.id];
        const wpts = group?.wpts ?? ctx.selectedGpxFile.wpts;
        let res = null;
        if (wpts) {
            wpts.forEach((w) => {
                if (w.name === editWpt.name) {
                    w.name = favoriteName;
                    w.address = favoriteAddress === '' ? null : favoriteAddress;
                    w.desc = favoriteDescription === '' ? null : favoriteDescription;
                    w.color = favoriteColor;
                    w.background = favoriteShape;
                    w.icon = favoriteIcon;
                    w.category = selectedGroupName !== FavoritesManager.DEFAULT_GROUP_NAME ? selectedGroupName : null;
                    res = w;
                }
            });
        }

        return res;
    }

    function getCategoryName(selectedGroupName) {
        return selectedGroupName !== FavoritesManager.DEFAULT_GROUP_NAME ? selectedGroupName : null;
    }

    function closePanel({ afterSave = false } = {}) {
        // Close InfoBlock if no selectedWpt AND (edit mode OR cancel).
        // In add mode after save: keep open — updateGroupMarkers will set selectedWpt → WptDetails shows.
        if (!ctx.selectedWpt && (isEditMode || !afterSave)) {
            setShowInfoBlock(false);
        }
        ctx.setAddFavorite({ add: false, location: null });
    }

    async function updateGroupMarkers(result, selectedGroup) {
        const key = selectedGroup.id ?? getUniqFileId(selectedGroup.file);
        if (!ctx.favorites.mapObjs[key]) {
            ctx.favorites.mapObjs[key] = FavoriteHelper.createGroupObj(result, selectedGroup);
        } else {
            ctx.favorites.mapObjs[key] = FavoriteHelper.updateGroupObj(ctx.favorites.mapObjs[key], result);
        }
        ctx.favorites = FavoriteHelper.updateSelectedGroup({
            favorites: ctx.favorites,
            selectedGroupName: selectedGroup.name,
            result,
            id: key,
        });
        ctx.selectedGpxFile.mapObj = true;
        FavoriteHelper.updateSelectedFile({ ctx, result, favoriteName, selectedGroup, deleted: false });
        ctx.setUpdateMarkers({ ...ctx.favorites });
        ctx.setFavorites({ ...ctx.favorites });
        setFavoriteGroup(ctx.favorites.mapObjs[key]);
    }

    function groupHasSameWpt() {
        if (isEditMode || isTrackMode) return false;
        const selectedGroup =
            favoriteGroup === null
                ? ctx.favorites.groups?.find((g) => g.name === FavoritesManager.DEFAULT_GROUP_NAME)
                : favoriteGroup;
        if (!selectedGroup) return false;
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

    const groups = isTrackMode ? ctx.selectedGpxFile?.pointsGroups : ctx.favorites.groups;
    const defaultGroup = isAddTrackWpt
        ? DEFAULT_GROUP_NAME_POINTS_GROUPS
        : isEditMode
          ? editWpt.category
          : FavoritesManager.DEFAULT_GROUP_NAME;
    const title = isEditMode
        ? isEditTrackWpt
            ? 'Edit waypoint'
            : 'Edit favorite'
        : isAddTrackWpt
          ? 'Add waypoint'
          : 'Add favorite';

    return (
        <Box className={styles.panel}>
            {process && <LinearProgress />}
            <HeaderWithUnderline title={title} onClose={closePanel} showBackButton={isEditMode} />
            <Box id={isEditMode ? 'se-edit-fav-dialog' : 'se-add-fav-dialog'} className={styles.content}>
                <FavoriteName
                    favoriteName={favoriteName}
                    setFavoriteName={setFavoriteName}
                    favoriteGroup={favoriteGroup}
                    favorite={isEditMode ? editWpt : undefined}
                    setErrorName={setErrorName}
                    widthDialog={PANEL_CONTENT_WIDTH}
                />
                {!addAddress && (
                    <ListItemText sx={{ maxWidth: `${PANEL_CONTENT_WIDTH}px` }}>
                        <IconButton
                            id={'se-add-fav-add-address-btn'}
                            sx={{ mt: -1 }}
                            onClick={() => setAddAddress(true)}
                        >
                            <Add />
                        </IconButton>
                        Add address
                    </ListItemText>
                )}
                {addAddress && (
                    <FavoriteAddress
                        favoriteAddress={favoriteAddress}
                        setFavoriteAddress={setFavoriteAddress}
                        setClose={isEditMode ? null : setAddAddress}
                        widthDialog={PANEL_CONTENT_WIDTH}
                    />
                )}
                {!addDescription && (
                    <ListItemText sx={{ maxWidth: `${PANEL_CONTENT_WIDTH}px` }}>
                        <IconButton
                            id={'se-add-fav-add-desc-btn'}
                            sx={{ mt: -1 }}
                            onClick={() => setAddDescription(true)}
                        >
                            <Add />
                        </IconButton>
                        Add description
                    </ListItemText>
                )}
                {addDescription && (
                    <FavoriteDescription
                        favoriteDescription={favoriteDescription}
                        setFavoriteDescription={setFavoriteDescription}
                        setClose={isEditMode ? null : setAddDescription}
                        widthDialog={PANEL_CONTENT_WIDTH}
                    />
                )}
                <FavoriteGroup
                    favoriteGroup={favoriteGroup}
                    setFavoriteGroup={setFavoriteGroup}
                    groups={groups}
                    defaultGroup={defaultGroup}
                    widthDialog={PANEL_CONTENT_WIDTH}
                />
                <FavoriteIcon
                    favoriteIcon={favoriteIcon}
                    setFavoriteIcon={setFavoriteIcon}
                    currentIconCategories={currentIconCategories}
                    favoriteIconCategories={favoriteIconCategories}
                    selectedGpxFile={ctx.selectedGpxFile}
                    add={!isEditMode}
                    defaultIcon={isEditMode ? editWpt.icon : MarkerOptions.DEFAULT_WPT_ICON}
                    widthDialog={PANEL_CONTENT_WIDTH}
                />
                <FavoriteColor
                    favoriteColor={favoriteColor}
                    setFavoriteColor={setFavoriteColor}
                    defaultColor={isEditMode ? editWpt.color : MarkerOptions.DEFAULT_WPT_COLOR}
                    widthDialog={PANEL_CONTENT_WIDTH}
                />
                <FavoriteShape
                    color={favoriteColor}
                    favoriteShape={favoriteShape}
                    setFavoriteShape={setFavoriteShape}
                    defaultBackground={isEditMode ? editWpt.background : MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE}
                />
                <Box className={styles.actions}>
                    <Button
                        id={isEditMode ? 'se-edit-fav-item-submit' : 'se-add-fav-btn'}
                        disabled={errorName || groupHasSameWpt()}
                        onClick={() => save()}
                    >
                        Save
                    </Button>
                </Box>
                {isEditMode && (
                    <Box className={styles.deleteAction}>
                        <Button
                            id={'se-delete-fav-item'}
                            sx={{ color: 'error.main' }}
                            onClick={() => setDeleteWptDialogOpen(true)}
                        >
                            Remove favorite
                        </Button>
                        {deleteWptDialogOpen && (
                            <DeleteWptDialog
                                dialogOpen={deleteWptDialogOpen}
                                setDialogOpen={setDeleteWptDialogOpen}
                                wpt={editWpt}
                            />
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );
}
