import { Box, Button, Divider, Grid, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Folder, LocationOn } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import contextMenuStyles from '../../styles/ContextMenuStyles';
import AppContext from '../../../context/AppContext';
import MarkerOptions, { removeShadowFromIconWpt } from '../../../map/markers/MarkerOptions';
import EditWptDialog from '../../../dialogs/favorites/EditWptDialog';
import DeleteWptDialog from '../../../dialogs/favorites/DeleteWptDialog';
import FavoritesManager, {
    isNoValue,
    prepareBackground,
    prepareColor,
    prepareIcon,
} from '../../../manager/FavoritesManager';

const FavoriteInfoTab = () => {
    const styles = contextMenuStyles();
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
            let wpt = ctx.selectedGpxFile.file.wpts.find((wpt) => wpt.name === markerName);
            if (wpt) {
                setFavorite({
                    name: wpt.name,
                    desc: isNoValue(wpt.desc) ? '' : wpt.desc,
                    comment: wpt.ext.comment,
                    address: isNoValue(wpt.address) ? '' : wpt.address,
                    category: wpt.category ? wpt.category : FavoritesManager.DEFAULT_GROUP_NAME,
                    background: prepareBackground(wpt.background),
                    color: prepareColor(wpt.color),
                    icon: prepareIcon(wpt.icon),
                    lat: wpt.ext.lat,
                    lon: wpt.ext.lon,
                    time: wpt.ext.time,
                    marker: wpt,
                });
            }
        }
    }, [ctx.selectedGpxFile]);

    return (
        <Box id={'se-fav-item-info-' + favorite.name} className={styles.item} maxWidth={ctx.infoBlockWidth}>
            <Typography className={styles.info} variant="subtitle1" color="inherit">
                <Grid container spacing={2}>
                    <Grid className={styles.name} item xs={10}>
                        <Typography className={styles.name} variant="inherit">
                            {favorite.name}
                        </Typography>
                    </Grid>
                    {favorite?.marker && (
                        <Grid sx={{ position: 'relative' }} className={styles.name} item xs={2}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        removeShadowFromIconWpt(
                                            MarkerOptions.getWptIcon(
                                                favorite?.marker,
                                                favorite?.color,
                                                favorite?.background,
                                                favorite?.icon
                                            ).options.html
                                        ) + '',
                                }}
                            />
                        </Grid>
                    )}
                </Grid>
                <Grid container>
                    <ListItemIcon
                        style={{
                            color: favorite.category && FavoritesManager.getColorGroup(ctx, favorite.category, false),
                        }}
                    >
                        <Folder fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ mt: -1 }} variant="inherit" noWrap>
                            {favorite.category ? favorite.category : 'Favorites'}
                        </Typography>
                    </ListItemText>
                </Grid>
                {favorite.desc && favorite.desc !== '' && (
                    <ListItemText>
                        <Typography component={'span'} variant="inherit">
                            {descriptionOpen ? favorite.desc : favorite.desc.substring(0, 140)}
                            {favorite.desc.length > 70 && (
                                <ListItemIcon onClick={toggleDescriptionOpen}>
                                    {descriptionOpen ? ' ...less' : ' ...more'}
                                </ListItemIcon>
                            )}
                        </Typography>
                        <Divider light />
                    </ListItemText>
                )}
                {favorite.address && favorite.address !== '' && (
                    <Grid container>
                        <ListItemIcon>
                            <LocationOn fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography sx={{ mt: -0.5 }} noWrap>
                                {favorite.address}
                            </Typography>
                        </ListItemText>
                    </Grid>
                )}
            </Typography>
            <Button
                variant="contained"
                component="span"
                style={{ backgroundColor: '#fbc73a' }}
                onClick={toggleEditFavoritesDialogOpen}
            >
                Edit
            </Button>
            {editFavoritesDialogOpen && (
                <EditWptDialog
                    wpt={favorite}
                    editFavoritesDialogOpen={editFavoritesDialogOpen}
                    setEditFavoritesDialogOpen={setEditFavoritesDialogOpen}
                    deleteFavoritesDialogOpen={deleteFavoritesDialogOpen}
                    setDeleteFavoritesDialogOpen={setDeleteFavoritesDialogOpen}
                />
            )}
            <Button
                sx={{ ml: 2 }}
                variant="contained"
                component="span"
                style={{ backgroundColor: '#fbc73a' }}
                onClick={toggleDeleteFavoritesDialogOpen}
            >
                Delete
            </Button>
            {deleteFavoritesDialogOpen && (
                <DeleteWptDialog dialogOpen={deleteFavoritesDialogOpen} setDialogOpen={setDeleteFavoritesDialogOpen} />
            )}
        </Box>
    );
};

export default FavoriteInfoTab;
