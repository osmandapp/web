import { AppBar, Box, IconButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import styles from '../infoblock.module.css';
import React, { useContext, useEffect, useState } from 'react';
import AppContext, { isTrack, OBJECT_TYPE_FAVORITE, OBJECT_TYPE_POI } from '../../context/AppContext';
import headerStyles from '../../menu/trackfavmenu.module.css';
import { closeHeader } from '../../menu/actions/HeaderHelper';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/ic_action_edit_outlined.svg';
import PoiManager, { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE } from '../../manager/PoiManager';
import MarkerOptions, { changeIconSizeWpt, removeShadowFromIconWpt } from '../../map/markers/MarkerOptions';
import FavoritesManager, { prepareBackground, prepareColor, prepareIcon } from '../../manager/FavoritesManager';
import { Folder, LocationOn } from '@mui/icons-material';
import EditWptDialog from '../../dialogs/favorites/EditWptDialog';
import DeleteWptDialog from '../../dialogs/favorites/DeleteWptDialog';
import TracksManager from '../../manager/track/TracksManager';

export default function WptDetails({ isDetails = false, setOpenWptTab, setShowInfoBlock }) {
    const ctx = useContext(AppContext);

    const ICON_IMG_SIZE = 24;
    const ICON_SHIELD_SIZE = 40;

    const [wpt, setWpt] = useState(null);
    const [type, setType] = useState(null);
    const [editWptDialogOpen, setEditWptDialogOpen] = useState(false);
    const [deleteWptDialogOpen, setDeleteWptDialogOpen] = useState(false);

    useEffect(() => {
        if (ctx.selectedWpt) {
            setType({
                isPoi: ctx.currentObjectType === OBJECT_TYPE_POI && ctx.selectedWpt?.poi,
                isWpt: isTrack(ctx) && (ctx.selectedWpt?.trackWpt || ctx.selectedWpt?.trackWptItem),
                isFav: ctx.currentObjectType === OBJECT_TYPE_FAVORITE && ctx.selectedWpt?.markerCurrent,
            });
        }
    }, [ctx.selectedWpt, ctx.currentObjectType]);

    useEffect(() => {
        let newWpt = null;
        if (type?.isPoi) {
            const currentPoi = ctx.selectedWpt.poi;
            const { options: poiOptions, latlng } = currentPoi;
            newWpt = {
                name: poiOptions.title ? poiOptions.title : PoiManager.formattingPoiType(poiOptions.poiType),
                latlon: latlng,
                background: DEFAULT_POI_SHAPE,
                color: DEFAULT_POI_COLOR,
                icon: poiOptions.finalIconName,
            };
        } else if (type?.isWpt) {
            newWpt = {
                file: ctx.selectedWpt.file,
                name: ctx.selectedWpt.name,
                latlon: { lat: ctx.selectedWpt.lat, lon: ctx.selectedWpt.lon },
                marker: null,
                background: prepareBackground(ctx.selectedWpt.background),
                color: prepareColor(ctx.selectedWpt.color),
                icon: prepareIcon(ctx.selectedWpt.icon),
                category: ctx.selectedWpt.category,
                address: ctx.selectedWpt.address,
            };
        } else if (type?.isFav) {
            let markerName = ctx.selectedWpt.markerCurrent.title;
            let currentWpt = ctx.selectedWpt.file.wpts.find((p) => p.name === markerName);
            if (currentWpt) {
                newWpt = {
                    file: ctx.selectedWpt.file,
                    name: currentWpt.name,
                    latlon: { lat: currentWpt.lat, lon: currentWpt.lon },
                    marker: currentWpt.marker,
                    background: prepareBackground(currentWpt.background),
                    color: prepareColor(currentWpt.color),
                    icon: prepareIcon(currentWpt.icon),
                    category: currentWpt.category,
                    address: currentWpt.address,
                };
            }
        } else {
            newWpt = null;
        }

        if (newWpt !== null) {
            setWpt(newWpt);
        }
    }, [type]);

    function closeDetails() {
        if (type?.isPoi) {
            closeHeader({ ctx });
        } else if (type?.isWpt) {
            isDetails ? setOpenWptTab(true) : closeHeader({ ctx });
        } else if (type?.isFav) {
            isDetails ? closeOnlyFavDetails() : closeHeader({ ctx });
        }
        ctx.setSelectedWpt(null);
    }

    function closeOnlyFavDetails() {
        setShowInfoBlock(false);
        ctx.setCurrentObjectType(null);
        ctx.setSelectedGpxFile({});
    }

    function getId() {
        if (type?.isFav) {
            return 'se-fav-item-info-' + wpt.name;
        }
        if (type?.isPoi) {
            return 'se-poi-infoblock-' + wpt.name;
        }
        return null;
    }

    const Header = () => {
        return (
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => closeDetails()}
                    >
                        {isDetails ? <BackIcon /> : <CloseIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    };

    const WptIcon = () => {
        return (
            <div
                style={{ display: 'flex' }}
                dangerouslySetInnerHTML={{
                    __html:
                        changeIconSizeWpt(
                            removeShadowFromIconWpt(
                                MarkerOptions.getWptIcon(wpt, wpt?.color, wpt?.background, wpt?.icon).options.html
                            ),
                            ICON_IMG_SIZE,
                            ICON_SHIELD_SIZE
                        ) + '',
                }}
            />
        );
    };

    const WptCategory = () => {
        return (
            <Box className={styles.wptCategory}>
                <ListItemIcon
                    style={{
                        color:
                            wpt.category &&
                            FavoritesManager.getColorGroup({ gpxFile: wpt.file, groupName: wpt.category }),
                        minWidth: 'auto',
                    }}
                >
                    <Folder fontSize="small" />
                </ListItemIcon>
                <Box>
                    <Typography className={styles.wptCategoryText} noWrap>
                        {`${wpt.category ? wpt.category : 'Favorites'} (${wpt.file?.wpts?.length})`}
                    </Typography>
                </Box>
            </Box>
        );
    };

    const WptAddress = () => {
        return (
            <Box className={styles.wptCategory}>
                <ListItemIcon style={{ minWidth: 'auto' }}>
                    <LocationOn fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    <Typography className={styles.wptCategoryText} noWrap>
                        {wpt.address}
                    </Typography>
                </ListItemText>
            </Box>
        );
    };

    return (
        <>
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                <Header />
                {wpt !== null && (
                    <ListItemText id={getId()}>
                        <Box className={styles.topContainer}>
                            <Typography variant="body2" noWrap className={styles.name}>
                                {wpt.name ?? 'No name'}
                            </Typography>
                            {wpt.icon && <WptIcon />}
                        </Box>
                        {wpt?.category && <WptCategory />}
                        {wpt?.address && <WptAddress />}
                        <Box className={styles.wptActionButtonContainer}>
                            {!type?.isPoi && (
                                <IconButton
                                    className={styles.wptActionsButtons}
                                    onClick={() => {
                                        if (type.isWpt) {
                                            TracksManager.handleEditCloudTrack(ctx).then((openEditState) => {
                                                if (openEditState) {
                                                    ctx.addFavorite.editTrack = true;
                                                    ctx.setAddFavorite({ ...ctx.addFavorite });
                                                    setEditWptDialogOpen(true);
                                                }
                                            });
                                        } else {
                                            setEditWptDialogOpen(true);
                                        }
                                    }}
                                >
                                    <EditIcon className={styles.wptActionButtonIcon} />
                                </IconButton>
                            )}
                            {!type?.isPoi && (
                                <IconButton
                                    className={styles.wptActionsButtons}
                                    onClick={() => {
                                        if (type.isWpt) {
                                            TracksManager.handleEditCloudTrack(ctx).then((openEditState) => {
                                                if (openEditState) {
                                                    ctx.addFavorite.editTrack = true;
                                                    ctx.setAddFavorite({ ...ctx.addFavorite });
                                                    setDeleteWptDialogOpen(true);
                                                }
                                            });
                                        } else {
                                            setDeleteWptDialogOpen(true);
                                        }
                                    }}
                                >
                                    <DeleteIcon className={styles.wptActionButtonIcon} />
                                </IconButton>
                            )}
                        </Box>
                    </ListItemText>
                )}
            </Box>
            {editWptDialogOpen && (
                <EditWptDialog
                    wpt={wpt}
                    editFavoritesDialogOpen={editWptDialogOpen}
                    setEditFavoritesDialogOpen={setEditWptDialogOpen}
                    deleteFavoritesDialogOpen={deleteWptDialogOpen}
                    setDeleteFavoritesDialogOpen={setDeleteWptDialogOpen}
                    isDetails={isDetails}
                />
            )}
            {deleteWptDialogOpen && (
                <DeleteWptDialog
                    dialogOpen={deleteWptDialogOpen}
                    setDialogOpen={setDeleteWptDialogOpen}
                    isDetails={isDetails}
                    wpt={type.isWpt ? wpt : null}
                />
            )}
        </>
    );
}
