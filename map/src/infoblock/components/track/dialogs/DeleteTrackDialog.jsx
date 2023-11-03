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
        if (setOpenActions) {
            setOpenActions(false);
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
                deleteTracksFromGroups(trackName);

                // delete track from ctx.openTrackGroups
                deleteTracksFromLastGroup(trackName);

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

    function deleteTracksFromGroups(trackName) {
        const parts = trackName.split('/');
        if (parts.length > 1) {
            const pathToGroup = parts.slice(0, -1).join('/');
            const group = ctx.tracksGroups.find((group) => group.name === pathToGroup);
            if (group) {
                const fileWithoutGroup = parts[parts.length - 1];
                const fileIndexInGroupFiles = group.groupFiles.findIndex((file) => file.name === fileWithoutGroup);
                if (fileIndexInGroupFiles !== -1) {
                    group.groupFiles.splice(fileIndexInGroupFiles, 1);
                }
                const fileIndexInFiles = group.files.findIndex((file) => file.name === fileWithoutGroup);
                if (fileIndexInFiles !== -1) {
                    group.files.splice(fileIndexInFiles, 1);
                }
                ctx.setTracksGroups([...ctx.tracksGroups]);
            }
        }
    }

    function deleteTracksFromLastGroup(trackName) {
        if (ctx.openTrackGroups.length > 0) {
            const lastGroup = ctx.openTrackGroups[ctx.openTrackGroups.length - 1];
            const fileIndexInGroupFiles = lastGroup.groupFiles.findIndex((file) => file.name === trackName);
            if (fileIndexInGroupFiles !== -1) {
                lastGroup.groupFiles.splice(fileIndexInGroupFiles, 1);
            }
            const fileIndexInFiles = lastGroup.files.findIndex((file) => file.name === trackName);
            if (fileIndexInFiles !== -1) {
                lastGroup.files.splice(fileIndexInFiles, 1);
            }
            ctx.setTracksGroups([...ctx.tracksGroups]);
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
