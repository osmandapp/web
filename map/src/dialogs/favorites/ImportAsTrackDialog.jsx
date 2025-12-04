import DialogTitle from '@mui/material/DialogTitle';
import dialogStyles from '../dialog.module.css';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button, Dialog } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatString } from '../../manager/SettingsManager';
import { isEmptyTrack, GPX_FILE_EXT, getGpxFileFromTrackData } from '../../manager/track/TracksManager';
import { createTrackFreeName, saveTrackToCloud } from '../../manager/track/SaveTrackManager';
import AppContext from '../../context/AppContext';
import LoginContext from '../../context/LoginContext';
import React, { useContext } from 'react';

export function hasPoints(track) {
    if (!track) return false;
    const hasWpts = !isEmptyTrack(track, true, false);
    const hasPointsGroups = track.pointsGroups && Object.keys(track.pointsGroups).length > 0;
    return hasWpts || hasPointsGroups;
}

export default function ImportAsTrackDialog({ setOpenDialog, trackToImport }) {
    const { t } = useTranslation();
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    async function handleImportAsTrack() {
        if (trackToImport) {
            const track = trackToImport.track;
            const fileName =
                trackToImport.fileName.substring(0, trackToImport.fileName.lastIndexOf('.')) || trackToImport.fileName;
            const gpx = await getGpxFileFromTrackData(track, track.routeTypes || null);
            if (gpx?.data) {
                const trackFileName = createTrackFreeName(fileName, ctx.tracksGroups, null, '');
                await saveTrackToCloud({
                    ctx,
                    ltx,
                    currentFolder: '',
                    fileName: trackFileName,
                    type: 'GPX',
                    uploadedFile: {
                        originalName: trackFileName + GPX_FILE_EXT,
                        data: gpx.data,
                    },
                    open: true,
                });
            } else {
                ctx.setTrackErrorMsg({
                    title: 'Import error',
                    msg: `Unable to convert ${trackToImport.fileName} to GPX format`,
                });
            }
        }
        ctx.setFavLoading(false);
    }

    return (
        <Dialog
            id="se-import-as-track-dialog"
            open={true}
            onClose={() => setOpenDialog(false)}
            onClick={(e) => e.stopPropagation()}
        >
            <DialogTitle className={dialogStyles.title}>{t('import_track')}</DialogTitle>
            <DialogContent className={dialogStyles.content}>
                {formatString(t('import_track_desc'), [trackToImport?.fileName])}
            </DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={() => setOpenDialog(false)}>
                    {t('shared_string_cancel')}
                </Button>
                <Button
                    className={dialogStyles.button}
                    onClick={() => {
                        handleImportAsTrack();
                        setOpenDialog(false);
                    }}
                >
                    {t('shared_string_import')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}