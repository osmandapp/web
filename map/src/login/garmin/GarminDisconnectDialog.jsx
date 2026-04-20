import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import dialogStyles from '../../dialogs/dialog.module.css';

export default function GarminDisconnectDialog({ open, onClose, onConfirm, disconnecting }) {
    const { t } = useTranslation();

    return (
        <Dialog open={open} onClose={onClose} className={dialogStyles.dialog}>
            <DialogTitle className={dialogStyles.title}>{t('web:garmin_disconnect_confirm_title')}</DialogTitle>
            <DialogContent className={dialogStyles.content}>
                <Typography variant="body2" color="text.secondary">
                    {t('web:garmin_disconnect_confirm_desc')}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={onClose}>
                    {t('shared_string_cancel')}
                </Button>
                <Button className={dialogStyles.button} disabled={disconnecting} onClick={onConfirm}>
                    {t('web:shared_string_disconnect')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
