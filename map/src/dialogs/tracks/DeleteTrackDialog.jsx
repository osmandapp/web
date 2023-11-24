import React, { useContext } from 'react';
import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
import AppContext, { isCloudTrack, isLocalTrack } from '../../context/AppContext';
import TracksManager from '../../manager/track/TracksManager';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { deleteTrack } from '../../manager/track/DeleteTrackManager';

export default function DeleteTrackDialog({
    dialogOpen,
    setDialogOpen,
    setShowInfoBlock = null,
    file = null,
    setOpenActions = null,
}) {
    const ctx = useContext(AppContext);

    function getPlace() {
        if (isCloudTrack(ctx)) {
            return 'OsmAnd Cloud';
        }
        if (isLocalTrack(ctx)) {
            return 'local tracks';
        }
        if (file && ctx.loginUser) {
            return 'OsmAnd Cloud';
        }
        return '';
    }

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    function cleanContextMenu() {
        setDialogOpen(false);
        if (setShowInfoBlock) {
            setShowInfoBlock(false);
        }
        if (setOpenActions) {
            setOpenActions(false);
        }
    }

    function getName() {
        if (file) {
            return file.name;
        }
        if (ctx.selectedGpxFile?.name) {
            return TracksManager.prepareName(ctx.selectedGpxFile.name);
        }
    }

    const discard = !!ctx.createTrack?.cloudAutoSave;

    return (
        <Dialog open={true} onClose={toggleShowDialog}>
            <DialogTitle>{discard ? 'Discard changes' : 'Delete track'}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {discard
                        ? `Are you sure you want to discard local changes?`
                        : `Are you sure you want to delete "${getName()}" track from the ${getPlace()}?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Cancel</Button>
                <Button
                    id={'se-delete-track-dialog'}
                    onClick={() => {
                        deleteTrack(file, ctx).then();
                        cleanContextMenu();
                    }}
                >
                    {discard ? 'Discard' : 'Delete'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
