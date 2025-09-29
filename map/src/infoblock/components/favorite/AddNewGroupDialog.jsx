import { Box, Button, Grid, IconButton, LinearProgress, ListItemText, Typography, Dialog } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../context/AppContext';
import { Close } from '@mui/icons-material';
import MarkerOptions from '../../../map/markers/MarkerOptions';
import FavoriteName from './structure/FavoriteName';
import FavoriteIcon from './structure/FavoriteIcon';
import FavoriteColor from './structure/FavoriteColor';
import FavoriteShape from './structure/FavoriteShape';
import FavoritesManager, { saveFavoriteGroup } from '../../../manager/FavoritesManager';
import { apiGet } from '../../../util/HttpApi';

export default function AddNewGroupDialog({ dialogOpen, setDialogOpen, setFavoriteGroup }) {
    const ctx = useContext(AppContext);

    const [groupName, setGroupName] = useState('');
    const [groupIcon, setGroupIcon] = useState(MarkerOptions.DEFAULT_WPT_ICON);
    const [favoriteIconCategories, setFavoriteIconCategories] = useState(null);
    const [currentIconCategories, setCurrentIconCategories] = useState(null);
    const [groupColor, setGroupColor] = useState(MarkerOptions.DEFAULT_WPT_COLOR);
    const [groupShape, setGroupShape] = useState(MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE);
    const [errorName, setErrorName] = useState(false);
    const [process, setProcess] = useState(false);

    useEffect(() => {
        getIconCategories().then();
    }, [dialogOpen]);

    async function getIconCategories() {
        let resp = await apiGet(FavoritesManager.FAVORITE_GROUP_FOLDER);
        const res = await resp.json();
        if (res) {
            setCurrentIconCategories('special');
            setFavoriteIconCategories(res);
        }
    }

    async function save() {
        setProcess(true);
        ctx.setUsedIcons((prev) => new Set([groupIcon, ...prev]));
        if (ctx.addFavorite.editTrack) {
            saveTrackWptGroup();
        } else {
            await saveGroup();
        }
    }

    function saveTrackWptGroup() {
        let pointsGroups = createGroup();
        const updatedSelectedGpxFile = {
            ...ctx.selectedGpxFile,
            pointsGroups: {
                ...ctx.selectedGpxFile.pointsGroups,
                [groupName]: pointsGroups[groupName],
            },
        };
        setFavoriteGroup(updatedSelectedGpxFile.pointsGroups[groupName]);
        ctx.setSelectedGpxFile(updatedSelectedGpxFile);
        setProcess(false);
        setDialogOpen(false);
    }

    async function saveGroup() {
        let data = {
            pointsGroups: createGroup(),
        };
        const group = await saveFavoriteGroup(data, groupName, ctx);
        if (group) {
            setFavoriteGroup(group);
            setProcess(false);
            setDialogOpen(false);
        }
    }

    function createGroup() {
        let pointsGroups = {};
        pointsGroups[groupName] = {
            name: groupName,
            iconName: groupIcon,
            backgroundType: groupShape,
            color: groupColor,
            points: [],
        };
        return pointsGroups;
    }

    const CloseDialog = (dialogOpen) => {
        return (
            <IconButton variant="contained" type="button" onClick={() => dialogOpen(false)}>
                <Close fontSize="small" />
            </IconButton>
        );
    };

    return (
        <Dialog id={'se-add-new-fav-group-dialog'} open={dialogOpen}>
            {process ? <LinearProgress /> : <></>}
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={11}
                    sx={{
                        mb: -3,
                        fontFamily: 'Arial',
                        fontSize: 20,
                        color: 'black',
                        outline: 'none',
                        letterSpacing: 'normal',
                        pb: '2px',
                        lineHeight: 'normal',
                        overflowWrap: 'break-word',
                    }}
                >
                    <DialogTitle>Add new category</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ ml: -2, mt: 1 }}>
                    {CloseDialog(setDialogOpen)}
                </Grid>
            </Grid>
            <DialogContent>
                <FavoriteName
                    favoriteName={groupName}
                    setFavoriteName={setGroupName}
                    favoriteGroup={null}
                    setErrorName={setErrorName}
                    isGroupName={true}
                />
                <hr />
                <Box
                    sx={{
                        width: 450,
                    }}
                >
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                {' '}
                                Default appearance
                            </Typography>
                        }
                    />
                    <ListItemText>
                        Default color, icon and shape will apply to the added favorite points into the group.
                    </ListItemText>
                    <hr />
                </Box>
                <FavoriteColor
                    favoriteColor={groupColor}
                    setFavoriteColor={setGroupColor}
                    defaultColor={MarkerOptions.DEFAULT_WPT_COLOR}
                />
                <FavoriteIcon
                    favoriteIcon={groupIcon}
                    setFavoriteIcon={setGroupIcon}
                    currentIconCategories={currentIconCategories}
                    favoriteIconCategories={favoriteIconCategories}
                    selectedGpxFile={ctx.selectedGpxFile}
                    add={true}
                    defaultIcon={MarkerOptions.DEFAULT_WPT_ICON}
                />
                <FavoriteShape
                    color={groupColor}
                    favoriteShape={groupShape}
                    setFavoriteShape={setGroupShape}
                    defaultBackground={MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE}
                />
            </DialogContent>
            <DialogActions>
                <Button id={'se-add-new-fav-group-btn'} disabled={errorName} onClick={() => save()}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}
