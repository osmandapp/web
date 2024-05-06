import styles from '../../infoblock.module.css';
import { Box, IconButton, Tooltip } from '@mui/material';
import TracksManager from '../../../manager/track/TracksManager';
import React, { useContext, useState } from 'react';
import EditWptDialog from '../../../dialogs/favorites/EditWptDialog';
import DeleteWptDialog from '../../../dialogs/favorites/DeleteWptDialog';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/ic_action_delete_outlined.svg';
import { ReactComponent as EditIcon } from '../../../assets/icons/ic_action_edit_outlined.svg';
import AppContext from '../../../context/AppContext';
import { useTranslation } from 'react-i18next';

export default function WptDetailsButtons({ wpt, isDetails }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [editWptDialogOpen, setEditWptDialogOpen] = useState(false);
    const [deleteWptDialogOpen, setDeleteWptDialogOpen] = useState(false);

    return (
        <>
            <Box className={styles.wptActionButtonContainer}>
                {!wpt.type?.isPoi && (
                    <Tooltip title={t('shared_string_edit')} arrow placement="bottom">
                        <IconButton
                            className={styles.wptActionsButtons}
                            onClick={() => {
                                if (wpt.type.isWpt) {
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
                    </Tooltip>
                )}
                {!wpt.type?.isPoi && (
                    <Tooltip title={t('shared_string_delete')} arrow placement="bottom">
                        <IconButton
                            className={styles.wptActionsButtons}
                            onClick={() => {
                                if (wpt.type.isWpt) {
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
                    </Tooltip>
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
                    wpt={wpt.type.isWpt ? wpt : null}
                />
            )}
        </>
    );
}
