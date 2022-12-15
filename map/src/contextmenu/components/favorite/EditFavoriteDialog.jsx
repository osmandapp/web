import {Dialog} from "@material-ui/core";
import {Button, Grid, IconButton} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import React, {useContext, useEffect, useState} from "react";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import AppContext from "../../../context/AppContext";
import TracksManager from "../../../context/TracksManager";
import DeleteFavoriteDialog from "./DeleteFavoriteDialog";
import FavoriteManager from "../../../context/FavoriteManager";
import {Close} from "@mui/icons-material";
import EditFavoriteName from "./edit/EditFavoriteName";
import EditFavoriteAddress from "./edit/EditFavoriteAddress";
import EditFavoriteDescription from "./edit/EditFavoriteDescription";
import EditFavoriteGroup from "./edit/EditFavoriteGroup";
import EditFavoriteIcon from "./edit/EditFavoriteIcon";
import EditFavoriteColor from "./edit/EditFavoriteColor";
import EditFavoriteShape from "./edit/EditFavoriteShape";


export default function EditFavoriteDialog({
                                               favorite, editFavoritesDialogOpen, setEditFavoritesDialogOpen,
                                               deleteFavoritesDialogOpen, setDeleteFavoritesDialogOpen
                                           }) {

    const menuStyles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [favoriteName, setFavoriteName] = useState(favorite.name);
    const [favoriteAddress, setFavoriteAddress] = useState(favorite.address);
    const [favoriteDescription, setFavoriteDescription] = useState(favorite.desc);
    const [favoriteGroup, setFavoriteGroup] = useState(null);
    const [favoriteColor, setFavoriteColor] = useState(favorite.color);
    const [favoriteShape, setFavoriteShape] = useState(favorite.background);
    const [favoriteIcon, setFavoriteIcon] = useState(favorite.icon);
    const [favoriteIconCategories, setFavoriteIconCategories] = useState(null);
    const [currentIconCategories, setCurrentIconCategories] = useState(null);

    const toggleDeleteFavoritesDialogOpen = () => {
        setDeleteFavoritesDialogOpen(!deleteFavoritesDialogOpen);
    };

    useEffect(() => {
        getIconCategories().then();
    }, [editFavoritesDialogOpen]);

    async function getIconCategories() {
        let resp = await fetch(FavoriteManager.FAVORITE_GROUP_FOLDER)
        const res = await resp.json();
        if (res) {
            Object.entries(res.categories).forEach(category => {
                let currentIcon = category[1].icons.find(icon => icon === favorite.icon);
                if (currentIcon) {
                    setCurrentIconCategories(category[0]);
                }
            })
            setFavoriteIconCategories(res);
        }
    }

    function save() {
        let selectedGroupName = favoriteGroup === null ? favorite.category : favoriteGroup.name;
        let editSelectedGpxFile = selectedGroupName === ctx.selectedGpxFile.nameGroup;
        let currentGroup = ctx.favorites[selectedGroupName];
        let currentWpt = getCurrentWpt();
        let fileSaved;
        if (!editSelectedGpxFile) {
            let deleted = deleteFavoriteFromOldGroup(currentWpt);
            if (deleted) {
                fileSaved = addFavoriteToGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile);
            }
        } else {
            fileSaved = addFavoriteToGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile);
        }
        if (fileSaved) {
            delete currentGroup.markers;
            updateSelectedFavorites(currentGroup, selectedGroupName);
            ctx.setFavorites({...ctx.favorites});
            setEditFavoritesDialogOpen(false);
        }
    }

    function addFavoriteToGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile) {
        currentGroup = prepareGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile);
        return TracksManager.saveTrack(ctx, currentGroup.name, currentWpt.name, TracksManager.FAVORITE_FILE_TYPE, currentGroup, true);
    }

    function updateSelectedFavorites(currentGroup, selectedGroupName) {
        ctx.selectedGpxFile.file = currentGroup
        ctx.selectedGpxFile.nameGroup = selectedGroupName;
        ctx.selectedGpxFile.editFavorite = true;
        ctx.selectedGpxFile.markerCurrent.title = favoriteName;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function deleteFavoriteFromOldGroup(currentWpt) {
        const resGpxFiles = Object.assign({}, ctx.selectedGpxFile);
        resGpxFiles.file.wpts = ctx.selectedGpxFile.file.wpts.filter(wpt => wpt.name !== currentWpt.name);
        resGpxFiles.file.pointsGroups[FavoriteManager.getGroupNameFromPointsGroups(favorite.category)].points = ctx.selectedGpxFile.file.wpts;
        let deleted = TracksManager.saveTrack(ctx, ctx.selectedGpxFile.file.name, ctx.selectedGpxFile.name, TracksManager.FAVORITE_FILE_TYPE, resGpxFiles.file, true);
        if (deleted) {
            delete ctx.favorites[resGpxFiles.nameGroup].markers;
            return true;
        }
        return false;
    }

    function prepareGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile) {
        if (currentGroup.name !== '' && currentGroup.name !== 'favorites.gpx') {
            currentWpt.category = selectedGroupName;
            currentGroup.pointsGroups[selectedGroupName].points = currentGroup.wpts;
        }
        if (editSelectedGpxFile) {
            currentGroup.wpts = ctx.selectedGpxFile.file.wpts;
        } else {
            currentGroup.wpts.push(currentWpt);
        }

        return currentGroup;
    }

    function getCurrentWpt() {
        let res = null;
        ctx.selectedGpxFile.file.wpts.forEach(wpt => {
            if (wpt.name === favorite.name) {
                wpt.name = favoriteName;
                wpt.address = favoriteAddress === "" ? null : favoriteAddress;
                wpt.desc = favoriteDescription === "" ? null : favoriteDescription;
                wpt.color = favoriteColor;
                wpt.background = favoriteShape;
                wpt.icon = favoriteIcon;
                res = wpt;
            }
        })
        return res;
    }

    const CloseDialog = (dialogOpen) => {
        return <IconButton
            variant="contained"
            type="button"
            onClick={() => dialogOpen(false)}
        >
            <Close fontSize="small"/>
        </IconButton>
    }

    return (
        <Dialog open={true}>
            <Grid container spacing={2}>
                <Grid className={menuStyles.name} item xs={11} sx={{mb: -3}}>
                    <DialogTitle>Edit favorite</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ml: -2, mt: 1}}>
                    {CloseDialog(setEditFavoritesDialogOpen)}
                </Grid>
            </Grid>
            <DialogContent>
                <EditFavoriteName favoriteName={favoriteName}
                                  setFavoriteName={setFavoriteName}/>
                <EditFavoriteAddress favoriteAddress={favoriteAddress}
                                     setFavoriteAddress={setFavoriteAddress}
                                     setClose={null}/>
                <EditFavoriteDescription favoriteDescription={favoriteDescription}
                                         setFavoriteDescription={setFavoriteDescription}
                                         setClose={null}/>
                <EditFavoriteGroup favoriteGroup={favoriteGroup}
                                   setFavoriteGroup={setFavoriteGroup}
                                   groups={ctx.favorites.groups}
                                   defaultGroup={favorite.category}/>
                <EditFavoriteIcon favoriteIcon={favoriteIcon}
                                  setFavoriteIcon={setFavoriteIcon}
                                  currentIconCategories={currentIconCategories}
                                  favoriteIconCategories={favoriteIconCategories}
                                  selectedGpxFile={ctx.selectedGpxFile}
                                  add={false}
                                  defaultIcon={favorite.icon}/>
                <EditFavoriteColor favoriteColor={favoriteColor}
                                   setFavoriteColor={setFavoriteColor}
                                   defaultColor={favorite.color}/>
                <EditFavoriteShape color={favoriteColor}
                                   favoriteShape={favoriteShape}
                                   setFavoriteShape={setFavoriteShape}
                                   defaultBackground={favorite.background}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleDeleteFavoritesDialogOpen}>
                    Delete</Button>
                {deleteFavoritesDialogOpen
                    && <DeleteFavoriteDialog
                        dialogOpen={deleteFavoritesDialogOpen}
                        setDialogOpen={setDeleteFavoritesDialogOpen}/>}
                <Button onClick={() => save()}>
                    Save</Button>
            </DialogActions>
        </Dialog>
    );
}