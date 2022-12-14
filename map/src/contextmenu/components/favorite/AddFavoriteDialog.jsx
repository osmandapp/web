import {Dialog} from "@material-ui/core";
import {
    Button,
    Grid,
    IconButton,
    ListItemText
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import React, {useContext, useEffect, useState} from "react";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import AppContext from "../../../context/AppContext";
import {Add, Close} from "@mui/icons-material";
import FavoriteManager from "../../../context/FavoriteManager";
import MarkerOptions from "../../../map/markers/MarkerOptions";
import EditFavoriteName from "./edit/EditFavoriteName";
import EditFavoriteAddress from "./edit/EditFavoriteAddress";
import EditFavoriteDescription from "./edit/EditFavoriteDescription";
import EditFavoriteGroup from "./edit/EditFavoriteGroup";
import EditFavoriteIcon from "./edit/EditFavoriteIcon";
import EditFavoriteColor from "./edit/EditFavoriteColor";
import EditFavoriteShape from "./edit/EditFavoriteShape";
import TracksManager from "../../../context/TracksManager";

export default function AddFavoriteDialog({dialogOpen, setDialogOpen}) {

    const menuStyles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [favoriteName, setFavoriteName] = useState('');
    const [favoriteAddress, setFavoriteAddress] = useState('');
    const [favoriteDescription, setFavoriteDescription] = useState('');
    const [addAddress, setAddAddress] = useState(false);
    const [addDescription, setAddDescription] = useState(false);
    const [favoriteGroup, setFavoriteGroup] = useState(null);
    const [favoriteIcon, setFavoriteIcon] = useState(MarkerOptions.DEFAULT_WPT_ICON);
    const [favoriteIconCategories, setFavoriteIconCategories] = useState(null);
    const [favoriteColor, setFavoriteColor] = useState(MarkerOptions.DEFAULT_WPT_COLOR);
    const [favoriteShape, setFavoriteShape] = useState(MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE);
    const [currentIconCategories, setCurrentIconCategories] = useState(null);

    useEffect(() => {
        getIconCategories().then();
    }, [dialogOpen]);

    async function getIconCategories() {
        let resp = await fetch(FavoriteManager.FAVORITE_GROUP_FOLDER)
        const res = await resp.json();
        if (res) {
            setCurrentIconCategories('special');
            setFavoriteIconCategories(res);
        }
    }

    function save() {
        let group = ctx.favorites[favoriteGroup?.name];
        let favorite;
        if (group) {
            favorite = {
                name: favoriteName,
                address: favoriteAddress === "" ? null : favoriteAddress,
                desc: favoriteDescription === "" ? null : favoriteDescription,
                color: favoriteColor,
                background: favoriteShape,
                icon: favoriteIcon,
                lat: ctx.addFavorite.location.lat,
                lon: ctx.addFavorite.location.lng
            };
        }

        let fileSaved;
        if (favorite) {
            fileSaved = addFavoriteToGroup(group, favoriteGroup.name, favorite, false);
        }

        if (fileSaved) {
            delete group.markers;
            ctx.setFavorites({...ctx.favorites});
            setDialogOpen(false);
        }
    }

    function addFavoriteToGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile) {
        currentGroup = prepareGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile);
        return TracksManager.saveTrack(ctx, currentGroup.name, currentWpt.name, TracksManager.FAVORITE_FILE_TYPE, currentGroup, true);
    }

    function prepareGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile) {
        if (currentGroup.name !== '') {
            currentWpt.category = selectedGroupName;
        }
        if (editSelectedGpxFile) {
            currentGroup.wpts = ctx.selectedGpxFile.file.wpts;
        } else {
            currentGroup.wpts.push(currentWpt);
        }
        currentGroup.pointsGroups[selectedGroupName].points = currentGroup.wpts;

        return currentGroup;
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
        <Dialog open={dialogOpen}>
            <Grid container spacing={2}>
                <Grid className={menuStyles.name} item xs={11} sx={{mb: -3}}>
                    <DialogTitle>Add favorite</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ml: -2, mt: 1}}>
                    {CloseDialog(setDialogOpen)}
                </Grid>
            </Grid>
            <DialogContent>
                <EditFavoriteName favoriteName={favoriteName}
                                  setFavoriteName={setFavoriteName}/>
                {!addAddress && <ListItemText>
                    <IconButton sx={{mt: -1}}
                                onClick={() => setAddAddress(true)}>
                        <Add/>
                    </IconButton>
                    Add address
                </ListItemText>}
                {addAddress && <EditFavoriteAddress favoriteAddress={favoriteAddress}
                                                    setFavoriteAddress={setFavoriteAddress}
                                                    setClose={setAddAddress}/>}
                {!addDescription && <ListItemText>
                    <IconButton sx={{mt: -1}}
                                onClick={() => setAddDescription(true)}>
                        <Add/>
                    </IconButton>
                    Add description
                </ListItemText>}
                {addDescription && <EditFavoriteDescription favoriteDescription={favoriteDescription}
                                                            setFavoriteDescription={setFavoriteDescription}
                                                            setClose={addDescription}/>}
                <EditFavoriteGroup favoriteGroup={favoriteGroup}
                                   setFavoriteGroup={setFavoriteGroup}
                                   groups={ctx.favorites.groups}
                                   defaultGroup={ctx.selectedGpxFile?.nameGroup ? ctx.selectedGpxFile.nameGroup : FavoriteManager.DEFAULT_GROUP_NAME}/>
                <EditFavoriteIcon favoriteIcon={favoriteIcon}
                                  setFavoriteIcon={setFavoriteIcon}
                                  currentIconCategories={currentIconCategories}
                                  favoriteIconCategories={favoriteIconCategories}
                                  selectedGpxFile={ctx.selectedGpxFile}
                                  add={true}
                                  defaultIcon={MarkerOptions.DEFAULT_WPT_ICON}/>
                <EditFavoriteColor favoriteColor={favoriteColor}
                                   setFavoriteColor={setFavoriteColor}
                                   defaultColor={MarkerOptions.DEFAULT_WPT_COLOR}/>
                <EditFavoriteShape color={favoriteColor}
                                   favoriteShape={favoriteShape}
                                   setFavoriteShape={setFavoriteShape}
                                   defaultBackground={MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => save()}>
                    Save</Button>
            </DialogActions>
        </Dialog>
    );
}