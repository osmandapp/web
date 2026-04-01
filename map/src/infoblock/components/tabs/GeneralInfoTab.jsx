import React, { useContext } from 'react';
import { Box, Divider, Checkbox, FormControlLabel } from '@mui/material';
import AppContext, { isLocalTrack } from '../../../context/AppContext';
import GeneralInfo from '../track/GeneralInfo';
import { hasSegments, isEmptyTrack } from '../../../manager/track/TracksManager';
import GpxGraphProvider from '../../../graph/track/GpxGraphProvider';

export default function GeneralInfoTab() {
    const ctx = useContext(AppContext);

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
            </Box>
        </>
    );
}
