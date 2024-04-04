import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { deleteFile, deleteFileAllVersions, deleteFileVersion } from '../../manager/SettingsManager';
import AppContext from '../../context/AppContext';

export default function DeleteFileVersionDialog({
    dialogOpen,
    setDialogOpen,
    file,
    changes,
    setChanges,
    deleteVersion = false,
    deleteAllVersions = false,
}) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    function formatString(templateString, replacements) {
        return templateString.replace(/%\d\$s/g, function (match) {
            let index = parseInt(match.replace('%', '').replace('$s', ''), 10) - 1;
            return replacements[index];
        });
    }

    async function deleteF() {
        if (deleteVersion) {
            deleteFileVersion(file, ctx, changes, setChanges).then();
        } else if (deleteAllVersions) {
            deleteFileAllVersions(file, ctx, changes, setChanges).then();
        } else {
            deleteFile(file, ctx, changes, setChanges).then();
        }
        setDialogOpen(false);
    }

    return (
        <Dialog open={true} onClose={toggleShowDialog}>
            <DialogTitle>Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {formatString(t(`delete_trash_item_confirmation_desc`), [file.name])}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Cancel</Button>
                <Button id={'se-delete-track-dialog'} onClick={() => deleteF()}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}
