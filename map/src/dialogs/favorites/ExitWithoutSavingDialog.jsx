import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useTranslation } from 'react-i18next';
import dialogStyles from '../dialog.module.css';

export default function ExitWithoutSavingDialog({ open, onKeepEditing, onExit }) {
    const { t } = useTranslation();

    return (
        <Dialog className={dialogStyles.dialog} open={open} onClose={onKeepEditing}>
            <DialogTitle className={dialogStyles.title}>{t('web:exit_without_saving')}</DialogTitle>
            <DialogContent className={dialogStyles.content}>
                <DialogContentText className={dialogStyles.contentText}>
                    {t('web:all_changes_will_be_lost')}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button id="se-exit-dialog-keep-editing" className={dialogStyles.button} onClick={onKeepEditing}>
                    {t('web:keep_editing')}
                </Button>
                <Button id="se-exit-dialog-exit" className={dialogStyles.button} onClick={onExit}>
                    {t('web:shared_string_exit')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
