import React, { useContext } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Button, Dialog, List } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { ReactComponent as FullTrackIcon } from '../../assets/icons/ic_action_file_routing.svg';
import { ReactComponent as SimplifiedTrackIcon } from '../../assets/icons/ic_action_save_to_file.svg';
import {
    downloadOriginalGpxFromCloud,
    downloadTravelGpx,
    downloadCurrentLocalGpx,
} from '../../manager/track/TracksManager';
import AppContext, { isLocalTrack, isRouteTrack, isTravelTrack } from '../../context/AppContext';
import dialogStyles from '../dialog.module.css';
import DefaultItem from '../../frame/components/items/DefaultItem';
import { useTranslation } from 'react-i18next';

export default function DownloadTrackDialog({
    dialogOpen,
    setDialogOpen,
    track: externalTrack = null,
    sharedFile,
    setOpenActions,
}) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const trackSource = externalTrack ?? ctx.selectedGpxFile;
    const routeTypes = trackSource?.routeTypes;

    const isContextLocal = !externalTrack && isLocalTrack(ctx);
    const isContextRoute = !externalTrack && isRouteTrack(ctx);
    const isContextTravel = !externalTrack && isTravelTrack(ctx);

    const handleDownload = async (simplified) => {
        if (!trackSource) {
            return;
        }

        if (externalTrack) {
            await downloadCurrentLocalGpx({
                selectedGpxFile: trackSource,
                routeTypes,
                isLocal: false,
                simplified,
            });
        } else if (isContextLocal || isContextRoute) {
            await downloadCurrentLocalGpx({
                selectedGpxFile: trackSource,
                routeTypes,
                isLocal: isContextLocal,
                simplified,
            });
        } else if (isContextTravel) {
            await downloadTravelGpx(trackSource);
        } else {
            await downloadOriginalGpxFromCloud({ track: trackSource, simplified });
        }
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
                        id={'se-download-track-full'}
                        icon={<FullTrackIcon />}
                        name={t('web:download_track_full')}
                        onClick={() => handleDownload(false)}
                    />
                    <DefaultItem
                        id={'se-download-simplified-track'}
                        icon={<SimplifiedTrackIcon />}
                        name={t('web:download_track_simplified')}
                        onClick={() => handleDownload(true)}
                    />
                </List>
            </DialogContent>
            <DialogActions>
                <Button
                    id="se-close-download-dialog"
                    className={dialogStyles.button}
                    onClick={() => setDialogOpen(false)}
                >
                    {t('shared_string_cancel')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
