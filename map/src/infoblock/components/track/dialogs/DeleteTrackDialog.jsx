import React, { useContext } from 'react';
import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
import AppContext, { isCloudTrack, isLocalTrack } from '../../../../context/AppContext';
import TracksManager from '../../../../manager/TracksManager';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { apiPost } from '../../../../util/HttpApi';

export default function DeleteTrackDialog({ dialogOpen, setDialogOpen, setShowInfoBlock = null, file = null }) {
    const ctx = useContext(AppContext);

    function getPlace() {
        if (isCloudTrack(ctx)) {
            return 'cloud';
        }
        if (isLocalTrack(ctx)) {
            return 'local';
        }
        if (file && ctx.loginUser) {
            return 'cloud';
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
    }

    async function deleteCurrentTrack() {
        if ((isCloudTrack(ctx) || file) && ctx.loginUser) {
            const trackName = file ? file?.name : ctx.selectedGpxFile?.name;
            const response = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/delete-file`, '', {
                params: {
                    name: trackName,
                    type: 'GPX',
                },
            });
            if (response.status === 200) {
                // delete track in ctx.gpxFiles (processed by CloudTrackLayer)
                const name = trackName;
                ctx.mutateGpxFiles((o) => {
                    if (o[name]) {
                        o[name].url = null; // remove layer
                        o[name].delete = true; // remove file
                    }
                });

                // delete track from ctx.tracksGroups (used in CloudTrackGroup menu)
                const newTracksGroups = [...ctx.tracksGroups];
                newTracksGroups?.forEach((group) => {
                    const currentFile = group.files.findIndex((file) => file.name === trackName);
                    if (currentFile !== -1) {
                        group.files.splice(currentFile, 1);
                        group.files = [...group.files]; // copy group.files for CloudTrackGroups/SortActions deps
                    }
                });
                ctx.setTracksGroups(newTracksGroups);

                // delete track from ctx.listFiles.uniqueFiles
                // used to refresh list-files in TracksManager.saveTrack
                ctx.setListFiles((o) => {
                    const index = o.uniqueFiles.findIndex((file) => file.name === trackName);
                    if (index !== -1) {
                        o.uniqueFiles.splice(index, 1);
                        o.uniqueFiles = [...o.uniqueFiles];
                    }
                    return { ...o };
                });

                cleanContextMenu();
            }
        } else if (isLocalTrack(ctx)) {
            TracksManager.deleteLocalTrack(ctx);
            cleanContextMenu();
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
                        : `Are you sure you want to delete ${getName()} track from the ${getPlace()} tracks?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Cancel</Button>
                <Button onClick={() => deleteCurrentTrack()}>{discard ? 'Discard' : 'Delete'}</Button>
            </DialogActions>
        </Dialog>
    );
}
