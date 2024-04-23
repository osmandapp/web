import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Button, LinearProgress } from '@mui/material';
import React, { useState } from 'react';
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
    const [processing, setProcessing] = useState(false);
    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    async function deleteF() {
        setProcessing(true);
        if (deleteVersion) {
            deleteFileVersion({ file, changes, setChanges }).then(() => {
                setProcessing(false);
            });
        } else if (deleteAllVersions) {
            deleteFileAllVersions({ file, changes, setChanges, isTrash: true }).then(() => {
                setProcessing(false);
            });
        } else {
            deleteFile({ file, changes, setChanges }).then(() => {
                setProcessing(false);
            });
        }
        setDialogOpen(false);
    }

    return (
        <Dialog id={'se-delete-version-dialog'} open={true} onClose={toggleShowDialog}>
            {processing && <LinearProgress />}
            <DialogTitle>{t('shared_string_delete')}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {formatString(t('delete_trash_item_confirmation_desc'), [file.name])}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>{t('shared_string_cancel')}</Button>
                <Button id={'se-delete-version-dialog-delete'} onClick={deleteF}>
                    {t('shared_string_delete')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
