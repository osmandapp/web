import {Box, Button, Divider, Grid, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Folder, LocationOn} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import AppContext from "../../../context/AppContext";
import MarkerOptions from "../../../map/markers/MarkerOptions";
import {makeStyles} from "@material-ui/core/styles";
import EditFavoriteDialog from "../favorite/EditFavoriteDialog";
import DeleteFavoriteDialog from "../favorite/DeleteFavoriteDialog";
import FavoritesManager from "../../../context/FavoritesManager";

const useStyles = makeStyles({
    icon: {
        "& .icon": {
            width: '40px',
            height: '40px',
            top: '20px',
            left: '21px'
        },
        "& .background": {
            left: '-25px',
            top: '-25px',
            width: '100px',
            height: '100px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    }
})

const FavoriteInfoTab = ({width}) => {

    const styles = contextMenuStyles();
    const classes = useStyles();
    const ctx = useContext(AppContext);

    const toggleEditFavoritesDialogOpen = () => {
        setEditFavoritesDialogOpen(!editFavoritesDialogOpen);
    };
    const toggleDeleteFavoritesDialogOpen = () => {
        setDeleteFavoritesDialogOpen(!deleteFavoritesDialogOpen);
    };
    const toggleDescriptionOpen = () => {
        setDescriptionOpen(!descriptionOpen);
    };

    const [favorite, setFavorite] = useState({});
    const [editFavoritesDialogOpen, setEditFavoritesDialogOpen] = useState(false);
    const [deleteFavoritesDialogOpen, setDeleteFavoritesDialogOpen] = useState(false);
    const [descriptionOpen, setDescriptionOpen] = useState(false);

    useEffect(() => {
        if (ctx.selectedGpxFile.markerCurrent) {
            let markerName = ctx.selectedGpxFile.markerCurrent.title;
            let wpt = ctx.selectedGpxFile.file.wpts.find(wpt => wpt.name === markerName);
            if (wpt) {
                setFavorite(
                    {
                        name: wpt.name,
                        desc: isNoValue(wpt.desc) ? "" : wpt.desc,
                        comment: wpt.ext.comment,
                        address: isNoValue(wpt.address) ? "" : wpt.address,
                        category: wpt.category ? wpt.category : FavoritesManager.DEFAULT_GROUP_NAME,
                        background: prepareBackground(wpt.background),
                        color: prepareColor(wpt.color),
                        icon: prepareIcon(wpt.icon),
                        lat: wpt.ext.lat,
                        lon: wpt.ext.lon,
                        time: wpt.ext.time,
                        marker: wpt
                    })
            }
        }
    }, [ctx.selectedGpxFile])

    function isNoValue(value) {
        return value === undefined || value === 'null' || value === null;
    }

    function prepareColor(value) {
        return isNoValue(value) ? MarkerOptions.DEFAULT_WPT_COLOR : value;
    }

    function prepareBackground(value) {
        return isNoValue(value) ? MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE : value;
    }

    function prepareIcon(value) {
        return isNoValue(value) ? MarkerOptions.DEFAULT_WPT_ICON : value;
    }

    return (<Box className={styles.item} maxWidth={width}>
        <Typography className={styles.info} variant="subtitle1" color="inherit">
            <Grid container spacing={2}>
                <Grid className={styles.name} item xs={10}>
                    <Typography className={styles.name} variant="inherit">
                        {favorite.name}
                    </Typography>
                </Grid>
                {favorite?.marker && <Grid sx={{position:"relative"}} className={styles.name} item xs={2}>
                    <div className={classes.icon}
                         dangerouslySetInnerHTML={{__html: MarkerOptions.getWptIcon(favorite?.marker, favorite?.color, favorite?.background, favorite?.icon).options.html + ''}}/>
                </Grid>}
            </Grid>
            <Grid container sx={{mt: -9}}>
                <ListItemIcon
                    style={{color: favorite.category && FavoritesManager.getColorGroup(ctx, favorite.category)}}>
                    <Folder fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{mt: -1}} variant="inherit" noWrap>
                        {favorite.category ? favorite.category : "Favorites"}
                    </Typography>
                </ListItemText>
            </Grid>
            {favorite.desc && favorite.desc !== "" && <ListItemText>
                <Typography component={'span'} variant="inherit">
                    {descriptionOpen ? favorite.desc : favorite.desc.substring(0, 140)}
                    {favorite.desc.length > 70 && <ListItemIcon onClick={toggleDescriptionOpen}>
                        {descriptionOpen ? "...less" : "...more"}
                    </ListItemIcon>}
                </Typography>
                <Divider light/>
            </ListItemText>}
            {favorite.address && favorite.address !== "" && <Grid container>
                <ListItemIcon>
                    <LocationOn fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{mt: -0.5}} noWrap>
                        {favorite.address}
                    </Typography>
                </ListItemText>
            </Grid>
            }
        </Typography>
        <Button variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                onClick={toggleEditFavoritesDialogOpen}>Edit</Button>
        {editFavoritesDialogOpen
            && <EditFavoriteDialog
                favorite={favorite}
                editFavoritesDialogOpen={editFavoritesDialogOpen}
                setEditFavoritesDialogOpen={setEditFavoritesDialogOpen}
                deleteFavoritesDialogOpen={deleteFavoritesDialogOpen}
                setDeleteFavoritesDialogOpen={setDeleteFavoritesDialogOpen}/>}
        <Button sx={{ml: 2}} variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                onClick={toggleDeleteFavoritesDialogOpen}>Delete</Button>
        {deleteFavoritesDialogOpen
            && <DeleteFavoriteDialog
                dialogOpen={deleteFavoritesDialogOpen}
                setDialogOpen={setDeleteFavoritesDialogOpen}/>}
    </Box>);
}

export default FavoriteInfoTab;