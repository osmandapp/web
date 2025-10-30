import React, { useContext } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Button, Dialog, List } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { ReactComponent as FullTrackIcon } from '../../assets/icons/ic_action_file_routing.svg';
import { ReactComponent as SimplifiedTrackIcon } from '../../assets/icons/ic_action_save_to_file.svg';
import { downloadGpx, downloadTravelGpx, downloadCurrentGpx } from '../../manager/track/TracksManager';
import AppContext, { isLocalTrack, isRouteTrack, isTravelTrack } from '../../context/AppContext';
import dialogStyles from '../dialog.module.css';
import DefaultItem from '../../frame/components/items/DefaultItem';
import { useTranslation } from 'react-i18next';

export default function DownloadTrackDialog({ dialogOpen, setDialogOpen, track, sharedFile, setOpenActions }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const handleDownloadFull = async () => {
        if (track) {
            await downloadGpx(track, sharedFile);
        } else if (isLocalTrack(ctx) || isRouteTrack(ctx)) {
            await downloadCurrentGpx(ctx.selectedGpxFile, ctx.selectedGpxFile.routeTypes, isLocalTrack(ctx));
        } else if (isTravelTrack(ctx)) {
            await downloadTravelGpx(ctx.selectedGpxFile);
        } else {
            await downloadGpx(ctx.selectedGpxFile);
        }
        setDialogOpen(false);
        if (setOpenActions) {
            setOpenActions(false);
        }
    };

    const handleDownloadSimplified = () => {
        console.log('Simplified track download not implemented yet');
        setDialogOpen(false);
        if (setOpenActions) {
            setOpenActions(false);
        }
    };

    return (
        <Dialog
            PaperProps={{
                sx: {
                    maxWidth: '408px',
                },
            }}
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
        >
            <DialogTitle className={dialogStyles.title}>{t('web:download_track')}</DialogTitle>
            <DialogContent className={dialogStyles.content}>
                <DialogContentText sx={{ mb: '12px' }}>{t('web:download_track_desc')}</DialogContentText>
                <List sx={{ p: 0 }}>
                    <DefaultItem
                        id={'download-full-track'}
                        icon={<FullTrackIcon />}
                        name={t('web:download_track_full')}
                        onClick={handleDownloadFull}
                    />
                    <DefaultItem
                        id={'download-simplified-track'}
                        icon={<SimplifiedTrackIcon />}
                        name={t('web:download_track_simplified')}
                        onClick={handleDownloadSimplified}
                    />
                </List>
            </DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={() => setDialogOpen(false)}>
                    {t('shared_string_cancel')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
