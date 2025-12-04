import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button, Dialog } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatString } from '../../manager/SettingsManager';
import React from 'react';

export default function ImportAsTrackDialog({ setOpenDialog, onImport, fileName }) {
    const { t } = useTranslation();
    return (
        <Dialog
            id="se-import-as-track-dialog"
            open={true}
            onClose={() => setOpenDialog(false)}
            onClick={(e) => e.stopPropagation()}
        >
            <DialogTitle className={dialogStyles.title}>{t('import_track')}</DialogTitle>
            <DialogContent className={dialogStyles.content}>
                {formatString(t('import_track_desc'), [fileName])}
            </DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={() => setOpenDialog(false)}>
                    {t('shared_string_cancel')}
                </Button>
                <Button
                    className={dialogStyles.button}
                    onClick={() => {
                        onImport();
                        setOpenDialog(false);
                    }}
                >
                    {t('shared_string_import')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}