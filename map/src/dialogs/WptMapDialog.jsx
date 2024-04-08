import { Dialog } from '@material-ui/core';
import DialogContent from '@mui/material/DialogContent';
import {
    Button,
    Divider,
    Grid,
    IconButton,
    Link,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography,
} from '@mui/material';
import { Close, Folder, LocationOn } from '@mui/icons-material';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext, useEffect, useState } from 'react';
import AppContext, { isLocalTrack } from '../context/AppContext';
import FavoritesManager from '../manager/FavoritesManager';
import contextMenuStyles from '../infoblock/styles/ContextMenuStyles';
import { makeStyles } from '@material-ui/core/styles';
import EditFavoriteDialog from './favorites/EditFavoriteDialog';
import DeleteFavoriteDialog from './favorites/DeleteFavoriteDialog';
import { useWindowSize } from '../util/hooks/useWindowSize';
import { getWptIcon } from '../map/markers/MarkerOptions';

const useStyles = makeStyles({
    icon: {
        '& .icon': {
            width: '40px',
            height: '40px',
            top: '10px',
            left: '10px',
        },
        '& .background': {
            width: '100px',
            height: '100px',
            filter: 'drop-shadow(0 0 0 gray)',
        },
    },
});

export default function WptMapDialog() {
    const ctx = useContext(AppContext);
    const classes = useStyles();
    const styles = contextMenuStyles();

    const [wpt, setWpt] = useState(null);
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [editFavoritesDialogOpen, setEditFavoritesDialogOpen] = useState(false);
    const [deleteFavoritesDialogOpen, setDeleteFavoritesDialogOpen] = useState(false);
    const [width] = useWindowSize();
    const widthDialog = width / 2 < 450 ? width * 1.5 : 450;

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
        if (ctx.selectedWpt?.trackWpt) {
            ctx.addFavorite.editTrack = true;
            ctx.setAddFavorite({ ...ctx.addFavorite });
            setWpt(ctx.selectedWpt);
        } else {
            setWpt(null);
        }
    }, [ctx.selectedWpt, ctx.selectedGpxFile]);

    function enableWptDragging() {
        if (ctx.selectedWpt) {
            let marker = ctx.selectedWpt.target ? ctx.selectedWpt.target : ctx.selectedWpt.layer;
            if (marker) {
                marker.dragging.enable();
                ctx.setSelectedWpt(null);
            }
        }
    }

    return (
        <>
            {wpt && (
                <Dialog sx={{ maxWidth: `${widthDialog}px` }} disableEnforceFocus open={ctx.selectedWpt !== null}>
                    <DialogContent sx={{ overflowX: 'hidden', overflowY: 'hidden', width: `${widthDialog}px` }}>
                        <IconButton
                            sx={{ float: 'right', mb: -1, mt: -1, mr: -2, zIndex: 1000 }}
                            variant="contained"
                            type="button"
                            onClick={() => {
                                ctx.setSelectedWpt(null);
                            }}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                        <Typography className={styles.info} variant="subtitle1" color="inherit" component="span">
                            <div
                                style={{ position: 'relative' }}
                                className={classes.icon}
                                dangerouslySetInnerHTML={{
                                    __html: getWptIcon(wpt, wpt?.color, wpt?.background, wpt?.icon).options.html + '',
                                }}
                            />
                            <Typography
                                sx={{ color: '#666666', fontWeight: 'bold' }}
                                className={styles.name}
                                variant="inherit"
                            >
                                {wpt.name}
                            </Typography>
                            <MenuItem sx={{ ml: -2, mt: -1 }}>
                                <ListItemIcon
                                    style={{
                                        color: wpt.category && FavoritesManager.getColorGroup(ctx, wpt.category, true),
                                    }}
                                >
                                    <Folder fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{ maxWidth: '300px' }} variant="inherit" noWrap>
                                        {wpt.category ? wpt.category : 'Favorites'}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                            {wpt.desc && wpt.desc !== '' && (
                                <ListItemText>
                                    <Typography component={'span'} variant="inherit" style={{ whiteSpace: 'pre-line' }}>
                                        {descriptionOpen ? wpt.desc : wpt.desc.substring(0, 150)}
                                        {wpt.desc.length > 150 && (
                                            <ListItemIcon onClick={toggleDescriptionOpen}>
                                                {descriptionOpen ? ' ...less' : ' ...more'}
                                            </ListItemIcon>
                                        )}
                                    </Typography>
                                    {wpt.address && wpt.address !== '' && <Divider light />}
                                </ListItemText>
                            )}
                            {wpt.address && wpt.address !== '' && (
                                <Grid container>
                                    <ListItemIcon>
                                        <LocationOn fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ mt: -0.5 }} noWrap>
                                            {wpt.address}
                                        </Typography>
                                    </ListItemText>
                                </Grid>
                            )}
                        </Typography>
                    </DialogContent>
                    {isLocalTrack(ctx) && (
                        <DialogActions sx={{ display: 'inline' }}>
                            <Link sx={{ fontSize: '10pt', mx: 2 }} href="#" color="inherit" onClick={enableWptDragging}>
                                Move this waypoint
                            </Link>
                            <div style={{ float: 'right' }}>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: '#ff595e !important' }}
                                    onClick={toggleDeleteFavoritesDialogOpen}
                                >
                                    Delete
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: '#fbc73a', ml: 1 }}
                                    onClick={toggleEditFavoritesDialogOpen}
                                >
                                    Edit
                                </Button>
                            </div>
                        </DialogActions>
                    )}
                </Dialog>
            )}
            {editFavoritesDialogOpen && (
                <EditFavoriteDialog
                    wpt={wpt}
                    editFavoritesDialogOpen={editFavoritesDialogOpen}
                    setEditFavoritesDialogOpen={setEditFavoritesDialogOpen}
                    deleteFavoritesDialogOpen={deleteFavoritesDialogOpen}
                    setDeleteFavoritesDialogOpen={setDeleteFavoritesDialogOpen}
                />
            )}
            {deleteFavoritesDialogOpen && (
                <DeleteFavoriteDialog
                    dialogOpen={deleteFavoritesDialogOpen}
                    setDialogOpen={setDeleteFavoritesDialogOpen}
                    wpt={wpt}
                />
            )}
        </>
    );
}
