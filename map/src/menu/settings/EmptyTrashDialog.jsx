import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { emptyTrash, formatString } from '../../manager/SettingsManager';
import DialogActions from '@mui/material/DialogActions';
import { Button, LinearProgress } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';

export default function EmptyTrashDialog({ dialogOpen, setDialogOpen, changes, setChanges }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const [processing, setProcessing] = useState(false);
    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    return (
        <Dialog id={'se-delete-trash-dialog'} open={true} onClose={toggleShowDialog}>
            {processing && <LinearProgress />}
            <DialogTitle>{t('shared_string_empty_trash')}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {formatString(t('delete_trash_item_confirmation_desc'), [t('shared_string_trash')])}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>{t('shared_string_cancel')}</Button>
                <Button
                    id={'se-delete-trash-dialog-delete'}
                    onClick={() => {
                        setProcessing(true);
                        emptyTrash({ ctx, changes, setChanges }).then(() => {
                            setProcessing(false);
                            setDialogOpen(false);
                        });
                    }}
                >
                    {t('shared_string_delete')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
