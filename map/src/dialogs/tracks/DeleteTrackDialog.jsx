import React, { useContext } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Button, Dialog } from '@mui/material';
import AppContext, { isCloudTrack, isLocalTrack } from '../../context/AppContext';
import TracksManager from '../../manager/track/TracksManager';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { deleteTrack } from '../../manager/track/DeleteTrackManager';
import LoginContext from '../../context/LoginContext';

export default function DeleteTrackDialog({
    dialogOpen,
    setDialogOpen,
    setShowInfoBlock = null,
    file = null,
    setOpenActions = null,
    shared = false,
}) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    function getPlace() {
        if (isCloudTrack(ctx)) {
            return 'OsmAnd Cloud';
        }
        if (isLocalTrack(ctx)) {
            return 'local tracks';
        }
        if (file && ltx.loginUser) {
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

    const Description = () => {
        if (shared) {
            return (
                <DialogContentText>
                    {`Are you sure you want to delete "${getName()}" track from the shared files?`}
                </DialogContentText>
            );
        }
        return (
            <DialogContentText>
                {discard
                    ? `Are you sure you want to discard local changes?`
                    : `Are you sure you want to delete "${getName()}" track from the ${getPlace()}?`}
            </DialogContentText>
        );
    };
    return (
        <Dialog open={true} onClose={toggleShowDialog}>
            <DialogTitle>{discard ? 'Discard changes' : 'Delete track'}</DialogTitle>
            <DialogContent>
                <Description />
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Cancel</Button>
                <Button
                    id={'se-delete-track-dialog'}
                    onClick={() => {
                        deleteTrack({ file, ctx, ltx, shared }).then();
                        cleanContextMenu();
                    }}
                >
                    {discard ? 'Discard' : 'Delete'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
