import {Dialog} from "@material-ui/core";
import {Close, Delete, Folder} from "@mui/icons-material";
import {ListItemText, TextareaAutosize, IconButton, Grid, TextField, Button} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import React, {useContext, useState} from "react";
import contextMenuStyles from "../styles/ContextMenuStyles";
import AppContext from "../../context/AppContext";


export default function EditFavoriteDialog({favorite, setEditFavoritesDialogOpen}) {

    const styles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [favoriteName, setFavoriteName] = useState(favorite.name);
    const [favoriteAddress, setFavoriteAddress] = useState(favorite.address);
    const [favoriteDescription, setFavoriteDescription] = useState(favorite.desc);

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


    function editGroup() {

    }

    function editIcon() {

    }

    function editColor() {

    }

    function editShape() {

    }

    function saveFavorite() {
        ctx.selectedGpxFile.file.wpts.forEach(wpt => {
            if (wpt.name === favorite.name) {
                wpt.name = favoriteName;
                wpt.address = favoriteAddress === "" ? null : favoriteAddress;
                wpt.desc = favoriteDescription === "" ? null : favoriteDescription;
                ctx.selectedGpxFile.saveFavorite = true;
                ctx.selectedGpxFile.markerCurrent.title = favoriteName;
                ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
            }
        })
        setEditFavoritesDialogOpen(false);
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
                {editGroup()}
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