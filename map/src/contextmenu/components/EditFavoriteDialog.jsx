import {Dialog} from "@material-ui/core";
import {Close, Delete, Folder} from "@mui/icons-material";
import {
    Box,
    Button,
    Grid,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import React, {useContext, useState} from "react";
import contextMenuStyles from "../styles/ContextMenuStyles";
import AppContext from "../../context/AppContext";
import TracksManager from "../../context/TracksManager";


export default function EditFavoriteDialog({favorite, setEditFavoritesDialogOpen}) {

    const styles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [favoriteName, setFavoriteName] = useState(favorite.name);
    const [favoriteAddress, setFavoriteAddress] = useState(favorite.address);
    const [favoriteDescription, setFavoriteDescription] = useState(favorite.desc);
    const [favoriteGroup, setFavoriteGroup] = useState(null);

    const EditName = () => {
        return (<ListItemText>
                <TextField
                    className={styles.favouriteLineInfo}
                    id="name"
                    label="Name"
                    fullWidth
                    onChange={(e) => setFavoriteName(e.target.value)}
                    value={favoriteName}
                    autoFocus={true}
                    error={favoriteName === ""}
                    helperText={favoriteName === "" ? 'Empty name!' : ' '}
                />
            </ListItemText>
        )
    }

    const EditAddress = () => {
        return (<ListItemText>
                <TextField
                    className={styles.favouriteLineInfo}
                    id="address"
                    label="Address"
                    fullWidth
                    onChange={(e) => setFavoriteAddress(e.target.value)}
                    value={favoriteAddress}
                    autoFocus={true}
                />
                <IconButton
                    variant="contained"
                    type="button"
                    onClick={() => setFavoriteAddress('')}
                >
                    <Delete fontSize="small"/>
                </IconButton>
            </ListItemText>
        )
    }

    const EditDescription = () => {
        return (<ListItemText sx={{mt: 3}}>
                <TextField
                    className={styles.favouriteLineInfo}
                    id="desc"
                    label="Description"
                    fullWidth
                    onChange={(e) => setFavoriteDescription(e.target.value)}
                    value={favoriteDescription}
                    autoFocus={true}
                    multiline
                    rows={2}
                />
                <IconButton
                    variant="contained"
                    type="button"
                    onClick={() => setFavoriteDescription('')}
                >
                    <Delete fontSize="small"/>
                </IconButton>
            </ListItemText>
        )
    }

    const FavoriteGroupItem = ({group}) => {
        let g = group.pointsGroups[group.name === 'favourites' ? "" : group.name];
        let color = g.color;
        let size = g.points.length;
        return <Box
            sx={{
                width: 110,
                height: 50,
                border: 1,
                borderColor: "#c1c1c1",
                paddingLeft: 1
            }}>
            <Grid container>
                <Grid item container xs={3}>
                    <ListItemIcon style={{color: color}}>
                        <Folder fontSize="small"/>
                    </ListItemIcon>
                </Grid>
                <Grid item container xs={2} sx={{mt: -0.5}}>
                    <ListItemText>
                        <Typography variant="inherit" noWrap>
                            {size}
                        </Typography>
                    </ListItemText>
                </Grid>
                <Grid item container xs={10}>
                    <ListItemText>
                        <Typography variant="inherit" noWrap>
                            {group.name}
                        </Typography>
                    </ListItemText>
                </Grid>
            </Grid>
        </Box>
    }

    const EditGroup = () => {
        let groupList = [];
        ctx.favorites.groups.forEach(group => {
            if (group.name === favorite.category) {
                groupList.unshift(group);
            }
            else {
                groupList.push(group);
            }
        })

        return (<>
                <ListItemText>
                    <Typography variant="inherit" noWrap>
                        Select group
                    </Typography>
                </ListItemText>
                <Box
                    sx={{
                        display: "flex",
                        width: 450,
                        overflow: "hidden",
                        overflowX: "scroll",
                    }}
                >
                    {groupList?.map((group, index) => {
                        return <ListItem key={index} component="div" disablePadding>
                            <ListItemButton
                                selected={favoriteGroup === group || (favoriteGroup === null && group.name === favorite.category)}
                                onClick={() => setFavoriteGroup(group)}
                            >
                                <FavoriteGroupItem key={group + index}
                                                   index={index}
                                                   group={group}/>
                            </ListItemButton>
                        </ListItem>;
                    })}

                </Box>
            </>
        );
    }

    function editIcon() {

    }

    function editColor() {

    }

    function editShape() {

    }

    function saveFavorite() {
        let selectedGroupName = favoriteGroup === null ? favorite.category : favoriteGroup.name;
        let currentGroup = ctx.favorites[selectedGroupName];
        let editSelectedGpxFile = false;
        if (selectedGroupName === ctx.selectedGpxFile.nameGroup) {
            editSelectedGpxFile = true;
        }
        let currentWpt = getCurrentWpt();
        let fileSaved;
        if (editSelectedGpxFile) {
            currentGroup.pointsGroups[selectedGroupName] = currentGroup.wpts;
            fileSaved = TracksManager.saveTrack(ctx, ctx.selectedGpxFile.file.name, ctx.selectedGpxFile.name, TracksManager.FAVORITE_FILE_TYPE, currentGroup);
        } else {
            //delete wpt from old group
            ctx.selectedGpxFile.file.wpts = ctx.selectedGpxFile.file.wpts.filter(wpt => wpt.name !== currentWpt.name);
            ctx.selectedGpxFile.file.pointsGroups[favorite.category] = ctx.selectedGpxFile.file.wpts;
            let deleted = TracksManager.saveTrack(ctx, ctx.selectedGpxFile.file.name, ctx.selectedGpxFile.name, TracksManager.FAVORITE_FILE_TYPE, ctx.selectedGpxFile.file);
            //add wpt to new group
            if (deleted) {
                if (currentGroup.name !== '') {
                    currentWpt.ext.category = selectedGroupName;
                }
                currentGroup.wpts.push(currentWpt);
                currentGroup.pointsGroups[selectedGroupName] = currentGroup.wpts;
                ctx.selectedGpxFile.file = currentGroup;
                delete ctx.selectedGpxFile.file.markers;
                delete currentGroup.markers;
                fileSaved = TracksManager.saveTrack(ctx, currentGroup.name, currentWpt.name, TracksManager.FAVORITE_FILE_TYPE, currentGroup);
            }
        }
        if (fileSaved) {
            console.log(favoriteName)
            ctx.selectedGpxFile.editFavorite = true;
            ctx.selectedGpxFile.markerCurrent.title = favoriteName;
            ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
            ctx.setFavorites({...ctx.favorites});
            setEditFavoritesDialogOpen(false);
        }
    }

    function getCurrentWpt() {
        let res = null;
        ctx.selectedGpxFile.file.wpts.forEach(wpt => {
            if (wpt.name === favorite.name) {
                wpt.name = favoriteName;
                wpt.address = favoriteAddress === "" ? null : favoriteAddress;
                wpt.desc = favoriteDescription === "" ? null : favoriteDescription;
                res = wpt;
            }
        })
        return res;
    }

    function saveAsFavorite() {
    }

    const CloseDialog = () => {
        return <IconButton
            variant="contained"
            type="button"
            onClick={() => setEditFavoritesDialogOpen(false)}
        >
            <Close fontSize="small"/>
        </IconButton>
    }

    return (
        <Dialog open={true}>
            <Grid container spacing={2}>
                <Grid className={styles.name} item xs={11} sx={{mb: -3}}>
                    <DialogTitle>Edit favorite</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ml: -2, mt: 1}}>
                    {CloseDialog()}
                </Grid>
            </Grid>
            <DialogContent>
                {EditName()}
                {EditAddress()}
                {EditDescription()}
                {EditGroup()}
                {editIcon()}
                {editColor()}
                {editShape()}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => saveFavorite()}>
                    Save</Button>
                <Button onClick={() => saveAsFavorite()}>
                    Save as</Button>
            </DialogActions>
        </Dialog>
    );
}