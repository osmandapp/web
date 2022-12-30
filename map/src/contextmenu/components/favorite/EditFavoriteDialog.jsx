import {Dialog} from "@material-ui/core";
import {Button, Grid, IconButton} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import React, {useContext, useEffect, useState} from "react";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import AppContext from "../../../context/AppContext";
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
import FavoritesManager from "../../../context/FavoritesManager";

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
    const [errorName, setErrorName] = useState(false);

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


    async function save() {
        let selectedGroupName = favoriteGroup === null ? favorite.category : favoriteGroup.name;
        let currentWpt = getCurrentWpt(selectedGroupName);
        let ind = ctx.selectedGpxFile.file.wpts.findIndex(wpt => wpt === currentWpt);
        let newGroup = ctx.favorites.groups.find(g => g.name === selectedGroupName);
        let result = await FavoritesManager.updateFavorite(
            currentWpt,
            ctx.selectedGpxFile.name,
            ctx.selectedGpxFile.file.name,
            newGroup.file.name,
            ctx.favorites[ctx.selectedGpxFile.nameGroup].updatetimems,
            newGroup.updatetimems,
            ind)
        if (result) {
            updateFavoriteGroups(result, selectedGroupName);
            setEditFavoritesDialogOpen(false);
        }
    }

    function getGroups(result, selectedGroupName) {
        let updatedGroups = [];
        ctx.favorites.groups.forEach(g => {
            let newGroup;
            if (g.name === ctx.selectedGpxFile.nameGroup && result.oldGroupResp?.data) {
                let file = g.file;
                Object.keys(result.oldGroupResp.data).forEach(d => {
                    file[`${d}`] = result.oldGroupResp.data[d];
                });
                newGroup = {
                    name: g.name,
                    updatetimems: result.oldGroupResp.updatetimems,
                    file: file,
                    pointsGroups: result.oldGroupResp.data.pointsGroups
                }
            } else if (g.name === selectedGroupName && result.newGroupResp) {
                let file = g.file;
                Object.keys(result.newGroupResp.data).forEach(d => {
                    file[`${d}`] = result.newGroupResp.data[d];
                });
                newGroup = {
                    name: g.name,
                    updatetimems: result.newGroupResp.updatetimems,
                    file: g.file,
                    pointsGroups: result.newGroupResp.data.pointsGroups
                }
            } else {
                newGroup = g;
            }
            updatedGroups.push(newGroup);
        })
        return updatedGroups;
    }

    function getSelectedGroup(selectedGroupName) {
        return ctx.favorites.groups.find(g => g.name === selectedGroupName);
    }

    function updateFavoriteGroups(result, selectedGroupName) {
        //update old group
        if (result.oldGroupResp) {
            ctx.favorites[ctx.selectedGpxFile.nameGroup].clienttimems = result.oldGroupResp.clienttimems;
            ctx.favorites[ctx.selectedGpxFile.nameGroup].updatetimems = result.oldGroupResp.updatetimems;
            Object.keys(result.oldGroupResp.data).forEach(t => {
                ctx.favorites[ctx.selectedGpxFile.nameGroup][`${t}`] = result.oldGroupResp.data[t];
            });
            delete ctx.favorites[ctx.selectedGpxFile.nameGroup].markers;
        }
        ctx.favorites.groups = getGroups(result, selectedGroupName);
        let selectedGroup = getSelectedGroup(selectedGroupName);

        if (!ctx.favorites[selectedGroupName]) {
            const newGroup = result.newGroupResp.data;
            newGroup.url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(selectedGroup.file.type)}&name=${encodeURIComponent(selectedGroup.file.name)}`;
            newGroup.clienttimems = result.newGroupResp.clienttimems;
            newGroup.updatetimems = result.newGroupResp.updatetimems;
        } else {
            const newGroup = Object.assign({}, ctx.favorites[selectedGroupName])
            newGroup.clienttimems = result.newGroupResp.clienttimems;
            newGroup.updatetimems = result.newGroupResp.updatetimems;
            Object.keys(result.newGroupResp.data).forEach(t => {
                newGroup[`${t}`] = result.newGroupResp.data[t];
            });
            ctx.favorites[selectedGroupName] = newGroup;
            delete ctx.favorites[selectedGroupName].markers;
        }

        ctx.setFavorites({...ctx.favorites});
        updateSelectedFile(selectedGroup, selectedGroupName);
    }

    function updateSelectedFile(selectedGroup, selectedGroupName) {
        ctx.selectedGpxFile.file = selectedGroup.file
        ctx.selectedGpxFile.name = favoriteName;
        ctx.selectedGpxFile.nameGroup = selectedGroupName;
        ctx.selectedGpxFile.editFavorite = true;
        ctx.selectedGpxFile.markerCurrent.title = favoriteName;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function getCurrentWpt(selectedGroupName) {
        let res = null;
        ctx.selectedGpxFile.file.wpts.forEach(wpt => {
            if (wpt.name === favorite.name) {
                wpt.name = favoriteName;
                wpt.address = favoriteAddress === "" ? null : favoriteAddress;
                wpt.desc = favoriteDescription === "" ? null : favoriteDescription;
                wpt.color = favoriteColor;
                wpt.background = favoriteShape;
                wpt.icon = favoriteIcon;
                wpt.category = selectedGroupName
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
                                  setFavoriteName={setFavoriteName}
                                  favoriteGroup={favoriteGroup}
                                  favorite={favorite}
                                  setErrorName={setErrorName}/>
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
                <Button disabled={errorName} onClick={() => save()}>
                    Save</Button>
            </DialogActions>
        </Dialog>
    );
}