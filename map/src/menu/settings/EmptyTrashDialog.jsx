import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { emptyTrash, formatString } from '../../manager/SettingsManager';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';

export default function EmptyTrashDialog({ dialogOpen, setDialogOpen, changes, setChanges }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    return (
        <Dialog open={true} onClose={toggleShowDialog}>
            <DialogTitle>{t('shared_string_empty_trash')}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {formatString(t('delete_trash_item_confirmation_desc'), [t('shared_string_trash')])}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Cancel</Button>
                <Button onClick={() => emptyTrash({ ctx, changes, setChanges })}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}
