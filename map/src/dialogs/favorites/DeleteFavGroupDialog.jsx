import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import { Button, Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext } from 'react';
import { deleteTrack } from '../../manager/track/DeleteTrackManager';
import AppContext from '../../context/AppContext';
import { FAVORITE_FILE_TYPE } from '../../manager/FavoritesManager';
import DialogContentText from '@mui/material/DialogContentText';

export default function DeleteFavGroupDialog({ setOpenDialog, group, setOpenActions, shared }) {
    const ctx = useContext(AppContext);
    async function deleteGroup() {
        const mapObj = ctx.favorites.mapObjs[group.id];
        await deleteTrack({ file: group.file, ctx, type: FAVORITE_FILE_TYPE, shared }).then(() =>
            removeOldLayer(mapObj)
        );
        if (setOpenActions) {
            setOpenActions(false);
        }
    }

    function removeOldLayer(group) {
        ctx.setRemoveFavGroup(group);
    }

    function closeDialogs() {
        setOpenDialog(false);
        if (setOpenActions) {
            setOpenActions(false);
        }
    }

    const Description = () => {
        if (shared) {
            return (
                <DialogContentText>
                    {`This will delete "${group?.name}" shared group with all favorites from shared files.`}
                </DialogContentText>
            );
        }
        return <DialogContentText>{`This will delete "${group?.name}" group with all favorites.`}</DialogContentText>;
    };

    return (
        <Dialog
            id="se-delete-fav-group-dialog"
            open={true}
            onClose={() => setOpenDialog(false)}
            onClick={(e) => e.stopPropagation()}
        >
            <DialogTitle className={dialogStyles.title}>Delete group</DialogTitle>
            <DialogContent className={dialogStyles.content}>
                <Description />
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
