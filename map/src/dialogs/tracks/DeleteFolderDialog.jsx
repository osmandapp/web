import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext } from 'react';
import { deleteTrackFolder } from '../../manager/track/DeleteTrackManager';
import AppContext from '../../context/AppContext';

export default function DeleteFolderDialog({ setOpenDialog, folder, setOpenActions }) {
    const ctx = useContext(AppContext);
    async function deleteFolder() {
        await deleteTrackFolder(folder, ctx);
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
            id="se-delete-folder-dialog"
            open={true}
            onClose={() => setOpenDialog(false)}
            onClick={(e) => e.stopPropagation()}
        >
            <DialogTitle className={dialogStyles.title}>Delete folder</DialogTitle>
            <DialogContent className={dialogStyles.content}>
                {`This will delete "${folder?.name}" folder and all tracks (${folder?.realSize}) included.`}
            </DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={closeDialogs}>
                    Cancel
                </Button>
                <Button id={`se-delete-folder-submit`} className={dialogStyles.button} onClick={() => deleteFolder()}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}
