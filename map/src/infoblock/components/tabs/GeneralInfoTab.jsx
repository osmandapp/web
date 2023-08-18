import React, { useContext, useState } from 'react';
import { Box, Button, Divider } from '@mui/material';
import AppContext from '../../../context/AppContext';
import { Add } from '@mui/icons-material';
import contextMenuStyles from '../../styles/ContextMenuStyles';
import DeleteTrackDialog from '../track/dialogs/DeleteTrackDialog';
import GpxGraphProvider from '../graph/GpxGraphProvider';
import GeneralInfo from '../track/GeneralInfo';
import DescTrackDialog from '../track/dialogs/DescTrackDialog';
import { isEmptyTrack } from '../../../context/TracksManager';
import { Checkbox, FormControlLabel } from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    checkbox: {
        '& .MuiTypography-root': {
            fontSize: '12',
        },
        transform: 'scale(0.8)',
    },
});

export default function GeneralInfoTab({ setShowInfoBlock }) {
    const styles = contextMenuStyles();
    const ctx = useContext(AppContext);
    const classes = useStyles();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openDescDialog, setOpenDescDialog] = useState(false);

    function addToCollection() {
        if (!ctx.gpxCollection.find((name) => name === ctx.selectedGpxFile.name)) {
            ctx.gpxCollection.push(ctx.selectedGpxFile.name);
            ctx.setGpxCollection([...ctx.gpxCollection]);
        }
    }

    return (
        <>
            <Box>
                <GeneralInfo width={ctx.infoBlockWidth} setOpenDescDialog={setOpenDescDialog} />
                {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && (
                    <>
                        <Divider sx={{ mt: '3px', mb: '12px' }} />
                        <div style={{ marginLeft: '15px', marginTop: '-10px' }}>
                            {!isEmptyTrack(ctx.selectedGpxFile, false, true) && (
                                <FormControlLabel
                                    className={classes.checkbox}
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
                                    className={classes.checkbox}
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
                {!isEmptyTrack(ctx.selectedGpxFile, false) && (
                    <>
                        <GpxGraphProvider width={ctx.infoBlockWidth} />
                    </>
                )}
                <Divider sx={{ mt: '3px', mb: '12px' }} />
                {isEmptyTrack(ctx.selectedGpxFile) === false && (
                    <Button
                        variant="contained"
                        sx={{ ml: '-0.5px !important' }}
                        className={styles.button}
                        onClick={addToCollection}
                    >
                        <Add fontSize="small" sx={{ mr: '3px' }} />
                        Collection
                    </Button>
                )}
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#ff595e !important' }}
                    className={styles.button}
                    onClick={() => {
                        setOpenDeleteDialog(true);
                    }}
                >
                    Delete
                </Button>
            </Box>
            {openDeleteDialog && (
                <DeleteTrackDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    setShowInfoBlock={setShowInfoBlock}
                />
            )}
            {openDescDialog && <DescTrackDialog dialogOpen={openDescDialog} setDialogOpen={setOpenDescDialog} />}
        </>
    );
}
