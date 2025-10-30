import React, { useContext, useState } from 'react';
import { Box, Button, Divider, Checkbox, FormControlLabel } from '@mui/material';
import AppContext, {
    isLocalTrack,
    isRouteTrack,
    isTravelTrack,
    OBJECT_TYPE_SHARE_FILE,
} from '../../../context/AppContext';
import { Download } from '@mui/icons-material';
import DeleteTrackDialog from '../../../dialogs/tracks/DeleteTrackDialog';
import DownloadTrackDialog from '../../../dialogs/tracks/DownloadTrackDialog';
import GeneralInfo from '../track/GeneralInfo';
import { hasSegments, isEmptyTrack } from '../../../manager/track/TracksManager';
import GpxGraphProvider from '../graph/GpxGraphProvider';
import { useTranslation } from 'react-i18next';

export default function GeneralInfoTab({ setShowInfoBlock }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openDownloadDialog, setOpenDownloadDialog] = useState(false);

    return (
        <>
            <Box>
                <GeneralInfo width={ctx.infoBlockWidth} />
                {isLocalTrack(ctx) && (
                    <>
                        {!isEmptyTrack(ctx.selectedGpxFile) && <Divider sx={{ mt: '3px', mb: '12px' }} />}
                        <div style={{ marginLeft: '15px', marginTop: '-10px' }}>
                            {!isEmptyTrack(ctx.selectedGpxFile, false, true) && (
                                <FormControlLabel
                                    sx={{
                                        '& .MuiTypography-root': { fontSize: '12px' },
                                        transform: 'scale(0.8)',
                                    }}
                                    key={'show_points'}
                                    label={'Show track points'}
                                    control={
                                        <Checkbox
                                            sx={{ marginLeft: '-30px' }}
                                            checked={ctx.showPoints.points}
                                            onChange={() => ctx.mutateShowPoints((o) => (o.points = !o.points))}
                                        />
                                    }
                                ></FormControlLabel>
                            )}
                            {!isEmptyTrack(ctx.selectedGpxFile, true, false) && (
                                <FormControlLabel
                                    sx={{
                                        '& .MuiTypography-root': { fontSize: '12px' },
                                        transform: 'scale(0.8)',
                                    }}
                                    key={'show_wpts'}
                                    label={'Show track wpts'}
                                    control={
                                        <Checkbox
                                            sx={{ marginLeft: '-30px' }}
                                            checked={ctx.showPoints.wpts}
                                            onChange={() => ctx.mutateShowPoints((o) => (o.wpts = !o.wpts))}
                                        />
                                    }
                                ></FormControlLabel>
                            )}
                        </div>
                    </>
                )}
                {hasSegments(ctx.selectedGpxFile) && <GpxGraphProvider width={ctx.infoBlockWidth} />}
                {isEmptyTrack(ctx.selectedGpxFile) === false && ctx.currentObjectType !== OBJECT_TYPE_SHARE_FILE && (
                    <>
                        <Divider sx={{ mt: '3px', mb: '12px' }} />
                        <Button
                            id="se-infoblock-button-download-gpx"
                            variant="contained"
                            sx={{
                                ml: '-0.5px !important',
                                backgroundColor: '#fbc73a !important',
                                fontSize: '12px !important',
                                minWidth: '20px !important',
                                padding: '3px 5px !important',
                            }}
                            onClick={() => setOpenDownloadDialog(true)}
                        >
                            <Download fontSize="small" sx={{ mr: '3px' }} />
                            {t('shared_string_download')}
                        </Button>
                    </>
                )}
                {isRouteTrack(ctx) === false &&
                    isTravelTrack(ctx) === false &&
                    ctx.currentObjectType !== OBJECT_TYPE_SHARE_FILE && (
                        <>
                            <Divider sx={{ mt: 2, mb: 2 }} />
                            <Button
                                id="se-infoblock-button-close-track"
                                variant="contained"
                                sx={{
                                    ml: '-0.5px !important',
                                    backgroundColor: '#fbc73a !important',
                                    fontSize: '12px !important',
                                    minWidth: '20px !important',
                                    padding: '3px 5px !important',
                                }}
                                onClick={() => setShowInfoBlock(false)}
                            >
                                Close Track
                            </Button>
                            <Button
                                id="se-infoblock-button-delete-track"
                                variant="contained"
                                sx={{
                                    backgroundColor: '#ff595e !important',
                                    fontSize: '12px !important',
                                    minWidth: '20px !important',
                                    padding: '3px 5px !important',
                                    ml: '5px !important',
                                }}
                                onClick={() => {
                                    setOpenDeleteDialog(true);
                                }}
                            >
                                {ctx.createTrack?.cloudAutoSave ? 'Discard changes' : 'Delete Track'}
                            </Button>
                        </>
                    )}
            </Box>
            {openDeleteDialog && (
                <DeleteTrackDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    setShowInfoBlock={setShowInfoBlock}
                />
            )}
            {openDownloadDialog && (
                <DownloadTrackDialog dialogOpen={openDownloadDialog} setDialogOpen={setOpenDownloadDialog} />
            )}
        </>
    );
}
