import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext } from 'react';
import { deleteTrack } from '../../manager/track/DeleteTrackManager';
import AppContext from '../../context/AppContext';
import { FAVORITE_FILE_TYPE } from '../../manager/FavoritesManager';

export default function DeleteFavGroupDialog({ setOpenDialog, group, setOpenActions }) {
    const ctx = useContext(AppContext);
    async function deleteGroup() {
        await deleteTrack(group.file, ctx, FAVORITE_FILE_TYPE);
        if (setOpenActions) {
            setOpenActions(false);
        }
    }

    function closeDialogs() {
        setOpenDialog(false);
        if (setOpenActions) {
            setOpenActions(false);
        }
    }

    return (
        <Dialog
            id="se-delete-fav-group-dialog"
            open={true}
            onClose={() => setOpenDialog(false)}
            onClick={(e) => e.stopPropagation()}
        >
            <DialogTitle className={dialogStyles.title}>Delete group</DialogTitle>
            <DialogContent className={dialogStyles.content}>
                {`This will delete "${group?.name}" group with all favorites.`}
            </DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={closeDialogs}>
                    Cancel
                </Button>
                <Button id={`se-delete-fav-group-submit`} className={dialogStyles.button} onClick={() => deleteGroup()}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}
