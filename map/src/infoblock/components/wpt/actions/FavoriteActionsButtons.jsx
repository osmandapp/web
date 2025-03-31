import styles from '../../../infoblock.module.css';
import { Box, IconButton, Tooltip } from '@mui/material';
import TracksManager from '../../../../manager/track/TracksManager';
import React, { useContext, useState } from 'react';
import EditWptDialog from '../../../../dialogs/favorites/EditWptDialog';
import DeleteWptDialog from '../../../../dialogs/favorites/DeleteWptDialog';
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as EditIcon } from '../../../../assets/icons/ic_action_edit_outlined.svg';
import { ReactComponent as ShareIcon } from '../../../../assets/icons/ic_action_gshare_dark.svg';
import { ReactComponent as DirectionFromIcon } from '../../../../assets/icons/ic_action_route_direction_from_here.svg';
import { ReactComponent as NavigationIcon } from '../../../../assets/icons/ic_action_gdirections_dark.svg';
import AppContext from '../../../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { ADDRESS_NOT_FOUND } from '../WptDetails';

export default function FavoriteActionsButtons({ wpt, isDetails }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [editWptDialogOpen, setEditWptDialogOpen] = useState(false);
    const [deleteWptDialogOpen, setDeleteWptDialogOpen] = useState(false);

    const isShare = wpt.type.isShareFav || wpt.sharedWithMe;

    function shareFavorite() {
        const [zoom, lat, lon] = (window.location.hash ?? '').replace('#', '').split('/');
        const host = window.location.host;

        if (!zoom || !lat || !lon) {
            return;
        }

        const roundedLat = Number(lat).toFixed(5);
        const roundedLon = Number(lon).toFixed(5);

        const geoLink = `geo:${roundedLat},${roundedLon}?z=${zoom}`;
        const mapUrl = `https://${host}/map?pin=${roundedLat},${roundedLon}#${zoom}/${roundedLat}/${roundedLon}`;

        const name = wpt.name ? `${wpt.name}\n` : '';
        const folder = wpt.category ? `${wpt.category}\n` : '';
        const address = wpt?.address !== ADDRESS_NOT_FOUND ? `${wpt.address}\n` : '';

        const shareText = `${name}${folder}${address}Location: ${geoLink}\n${mapUrl}`;

        navigator.clipboard
            .writeText(shareText)
            .then(() => {
                ctx.setNotification({
                    text: 'Information about the selected favorite has been copied to clipboard',
                    severity: 'success',
                });
            })
            .catch(() => {
                ctx.setNotification({ text: 'Failed to copy favorite information', severity: 'error' });
            });
    }

    return (
        <>
            <Box className={styles.wptActionButtonContainer}>
                {!isShare && (
                    <Tooltip title={t('shared_string_edit')} arrow placement="bottom">
                        <IconButton
                            id={'se-edit-fav-item'}
                            className={styles.wptActionsButtons}
                            onClick={() => {
                                TracksManager.handleEditCloudTrack(ctx).then((openEditState) => {
                                    if (openEditState) {
                                        ctx.setAddFavorite((prevState) => ({
                                            ...prevState,
                                            editTrack: true,
                                        }));
                                        setEditWptDialogOpen(true);
                                    }
                                });
                            }}
                        >
                            <EditIcon className={styles.wptActionButtonIcon} />
                        </IconButton>
                    </Tooltip>
                )}
                {!isShare && (
                    <Tooltip title={t('shared_string_delete')} arrow placement="bottom">
                        <IconButton
                            id={'se-delete-fav-item'}
                            className={styles.wptActionsButtons}
                            onClick={() => {
                                TracksManager.handleEditCloudTrack(ctx).then((openEditState) => {
                                    if (openEditState) {
                                        ctx.setAddFavorite((prevState) => ({
                                            ...prevState,
                                            editTrack: true,
                                        }));
                                        setDeleteWptDialogOpen(true);
                                    }
                                });
                            }}
                        >
                            <DeleteIcon className={styles.wptActionButtonIcon} />
                        </IconButton>
                    </Tooltip>
                )}
                <Tooltip title={t('shared_string_share')} arrow placement="bottom">
                    <IconButton id={'se-share-fav-item'} className={styles.wptActionsButtons} onClick={shareFavorite}>
                        <ShareIcon className={styles.wptActionButtonIcon} />
                    </IconButton>
                </Tooltip>
                <Tooltip title={t('context_menu_item_directions_from')} arrow placement="bottom">
                    <IconButton id={'se-direction-from-fav-item'} className={styles.wptActionsButtons}>
                        <DirectionFromIcon className={styles.wptActionButtonIcon} />
                    </IconButton>
                </Tooltip>
                <Tooltip title={t('shared_string_navigation')} arrow placement="bottom">
                    <IconButton id={'se-navigation-fav-item'} className={styles.wptActionsButtons}>
                        <NavigationIcon className={styles.wptActionButtonIcon} />
                    </IconButton>
                </Tooltip>
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
                    wpt={wpt}
                />
            )}
        </>
    );
}
