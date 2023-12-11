import { Dialog } from '@material-ui/core';
import dialogStyles from '../../dialogs/dialog.module.css';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import React from 'react';
import DialogContent from '@mui/material/DialogContent';

export default function UnavailableActionAlert({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose} onClick={(e) => e.stopPropagation()}>
            <DialogContent className={dialogStyles.title}>Not supported in the current plan.</DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={onClose}>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}
