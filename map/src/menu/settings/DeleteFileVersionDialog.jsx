import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { deleteFile, deleteFileAllVersions, deleteFileVersion, formatString } from '../../manager/SettingsManager';

export default function DeleteFileVersionDialog({
    dialogOpen,
    setDialogOpen,
    file,
    changes,
    setChanges,
    deleteVersion = false,
    deleteAllVersions = false,
}) {
    const { t } = useTranslation();
    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    async function deleteF() {
        if (deleteVersion) {
            await deleteFileVersion({ file, changes, setChanges });
        } else if (deleteAllVersions) {
            await deleteFileAllVersions({ file, changes, setChanges, isTrash: true });
        } else {
            await deleteFile({ file, changes, setChanges });
        }
        setDialogOpen(false);
    }

    return (
        <Dialog open={true} onClose={toggleShowDialog}>
            <DialogTitle>Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {formatString(t('delete_trash_item_confirmation_desc'), [file.name])}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Cancel</Button>
                <Button onClick={deleteF}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}
