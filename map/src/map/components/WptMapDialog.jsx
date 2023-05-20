import {Dialog} from "@material-ui/core";
import DialogContent from "@mui/material/DialogContent";
import {
    Button,
    Divider,
    Grid,
    IconButton,
    ListItemIcon,
    ListItemText, MenuItem,
    Typography
} from "@mui/material";
import {Close, Folder, LocationOn} from "@mui/icons-material";
import DialogActions from "@mui/material/DialogActions";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import MarkerOptions from "../markers/MarkerOptions";
import FavoritesManager from "../../context/FavoritesManager";
import contextMenuStyles from "../../infoblock/styles/ContextMenuStyles";
import {makeStyles} from "@material-ui/core/styles";
import EditFavoriteDialog from "../../infoblock/components/favorite/EditFavoriteDialog";
import DeleteFavoriteDialog from "../../infoblock/components/favorite/DeleteFavoriteDialog";
import _ from "lodash";

const useStyles = makeStyles({
    icon: {
        "& .icon": {
            width: '40px',
            height: '40px',
            top: '20px',
            left: '71px'
        },
        "& .background": {
            left: '-25px',
            top: '-25px',
            right: '-25px',
            width: '100px',
            height: '100px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    }
})

export default function WptMapDialog() {

    const ctx = useContext(AppContext);
    const classes = useStyles();
    const styles = contextMenuStyles();

    const [wpt, setWpt] = useState(null);
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [editFavoritesDialogOpen, setEditFavoritesDialogOpen] = useState(false);
    const [deleteFavoritesDialogOpen, setDeleteFavoritesDialogOpen] = useState(false);

    const toggleDescriptionOpen = () => {
        setDescriptionOpen(!descriptionOpen);
    };

    const toggleEditFavoritesDialogOpen = () => {
        setEditFavoritesDialogOpen(!editFavoritesDialogOpen);
    };
    const toggleDeleteFavoritesDialogOpen = () => {
        setDeleteFavoritesDialogOpen(!deleteFavoritesDialogOpen);
    };

    useEffect(() => {
        if (ctx.selectedWpt) {
            ctx.addFavorite.editTrack = true;
            ctx.setAddFavorite({...ctx.addFavorite});
            const lat = ctx.selectedWpt.latlng ? ctx.selectedWpt.latlng.lat : ctx.selectedWpt.lat;
            const lng = ctx.selectedWpt.latlng ? ctx.selectedWpt.latlng.lng : ctx.selectedWpt.lon;
            const currentWpt = ctx.selectedGpxFile.wpts.find(wpt => wpt.lat === lat && wpt.lon === lng);
            setWpt(currentWpt);
        }
    }, [ctx.selectedWpt, ctx.selectedGpxFile]);


    return (<>
            {wpt && <Dialog sx={{minWidth: "600px"}} disableEnforceFocus open={ctx.selectedWpt !== null}>
                <DialogContent sx={{minWidth: "500px", overflowX: "hidden", overflowY: "hidden"}}>
                    <IconButton
                        sx={{float: 'right', mb: -1, mt: -1, mr: -2}}
                        variant="contained"
                        type="button"
                        onClick={() => {
                            ctx.setSelectedWpt(null);
                        }}
                    >
                        <Close fontSize="small"/>
                    </IconButton>
                    <Typography className={styles.info} variant="subtitle1" color="inherit">
                        <Grid container spacing={2}>
                            <Grid className={styles.name} item xs={9}>
                                <Typography style={{color: '#666666', fontWeight: 'bold'}} className={styles.name}
                                            variant="inherit">
                                    {wpt.name}
                                </Typography>
                            </Grid>
                            <Grid sx={{position: "relative"}} className={styles.name} item xs={3}>
                                <div style={{marginBottom: "-120px", marginLeft: "50px"}} className={classes.icon}
                                     dangerouslySetInnerHTML={{__html: MarkerOptions.getWptIcon(wpt, wpt?.color, wpt?.background, wpt?.icon).options.html + ''}}
                                />
                            </Grid>
                        </Grid>
                        <MenuItem sx={{ml: -2, mt: -1}}>
                            <ListItemIcon
                                style={{color: wpt.category && FavoritesManager.getColorGroup(ctx, wpt.category, true)}}>
                                <Folder fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{maxWidth: "300px"}} variant="inherit" noWrap>
                                    {wpt.category ? wpt.category : "Favorites"}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                        {wpt.desc && wpt.desc !== "" && <ListItemText>
                            <Typography component={'span'} variant="inherit">
                                {descriptionOpen ? wpt.desc : wpt.desc.substring(0, 150)}
                                {wpt.desc.length > 150 && <ListItemIcon onClick={toggleDescriptionOpen}>
                                    {descriptionOpen ? "...less" : "...more"}
                                </ListItemIcon>}
                            </Typography>
                            <Divider light/>
                        </ListItemText>}
                        {wpt.address && wpt.address !== "" && <Grid container>
                            <ListItemIcon>
                                <LocationOn fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{mt: -0.5}} noWrap>
                                    {wpt.address}
                                </Typography>
                            </ListItemText>
                        </Grid>
                        }
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained"
                            component="span"
                            sx={{backgroundColor: '#ff595e !important'}}
                            onClick={toggleDeleteFavoritesDialogOpen}>Delete
                    </Button>
                    <Button variant="contained"
                            component="span"
                            sx={{backgroundColor: '#fbc73a'}}
                            onClick={toggleEditFavoritesDialogOpen}>Edit
                    </Button>
                </DialogActions>
            </Dialog>}
            {editFavoritesDialogOpen
                && <EditFavoriteDialog
                    favorite={wpt}
                    editFavoritesDialogOpen={editFavoritesDialogOpen}
                    setEditFavoritesDialogOpen={setEditFavoritesDialogOpen}
                    deleteFavoritesDialogOpen={deleteFavoritesDialogOpen}
                    setDeleteFavoritesDialogOpen={setDeleteFavoritesDialogOpen}/>}
            {deleteFavoritesDialogOpen
                && <DeleteFavoriteDialog
                    dialogOpen={deleteFavoritesDialogOpen}
                    setDialogOpen={setDeleteFavoritesDialogOpen}
                    wpt={wpt}/>}
        </>
    );
}