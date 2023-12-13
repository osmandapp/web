import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import React from 'react';

export default function ImportFavoriteDialog({ setOpenDialog, setImportFavoriteGroup, name }) {
    return (
        <Dialog
            id="se-import-favorite-dialog"
            open={true}
            onClose={() => setOpenDialog(false)}
            onClick={(e) => e.stopPropagation()}
        >
            <DialogTitle className={dialogStyles.title}>Import</DialogTitle>
            <DialogContent className={dialogStyles.content}>{`Folder ${name} already exist`}</DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={() => setOpenDialog(false)}>
                    Cancel
                </Button>
                <Button
                    className={dialogStyles.button}
                    onClick={() => {
                        setImportFavoriteGroup(true);
                        setOpenDialog(false);
                    }}
                >
                    Keep both
                </Button>
            </DialogActions>
        </Dialog>
    );
}
