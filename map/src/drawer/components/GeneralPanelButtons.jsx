import { ButtonGroup, IconButton, Paper, Tooltip } from '@mui/material';
import TracksManager from '../../context/TracksManager';
import { Create, Info, Upload } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import PoiTypesDialog from './poi/PoiTypesDialog';
import PanelButtons from '../../infoblock/components/PanelButtons';
import ChangeProfileTrackDialog from '../../infoblock/components/track/dialogs/ChangeProfileTrackDialog';
import PointContextMenu from '../../infoblock/components/PointContextMenu';
import { useWindowSize } from '../../util/hooks/useWindowSize';

const useStyles = makeStyles({
    buttongroup: {
        top: '10vh',
        width: '10px',
        height: '10px',
    },
});
export default function GeneralPanelButtons({ drawerWidth, showContextMenu, setShowContextMenu, clearState }) {
    const ctx = useContext(AppContext);
    const classes = useStyles();
    const StyledInput = styled('input')({
        display: 'none',
    });

    const [openPoiDialog, setOpenPoiDialog] = useState(false);
    const [width, height] = useWindowSize();
    const orientation = getOrientation();

    const fileSelected = () => async (e) => {
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', async () => {
                let track = await TracksManager.getTrackData(file);
                if (track) {
                    track.name = file.name;
                    TracksManager.addTrack(ctx, track);
                }
            });
            reader.readAsText(file);
        });
    };

    function getOrientation() {
        return height > 500 && width > 0 ? 'vertical' : 'horizontal';
    }

    return (
        <div style={{ left: drawerWidth + 10, top: '55px' }} className={`${classes.buttongroup} ${'leaflet-bottom'}`}>
            <div
                className="leaflet-control leaflet-bar padding-container"
                style={{ display: 'flex', flexDirection: orientation === 'vertical' ? 'column' : 'row' }}
            >
                <Paper>
                    <ButtonGroup
                        sx={{
                            width: orientation === 'vertical' ? 41 : 'auto',
                            height: orientation === 'vertical' ? 'auto' : 41,
                        }}
                        orientation={orientation}
                        color="primary"
                    >
                        <Tooltip title="Create track" arrow placement="right">
                            <IconButton
                                variant="contained"
                                type="button"
                                onClick={() => TracksManager.createTrack(ctx)}
                            >
                                <Create fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Upload track" arrow placement="right">
                            <label htmlFor="contained-button-file">
                                <StyledInput
                                    accept=".gpx"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={fileSelected(ctx)}
                                />
                                <IconButton sx={{ ml: '2px' }} variant="contained" component="span">
                                    <Upload fontSize="small" />
                                </IconButton>
                            </label>
                        </Tooltip>
                        <Tooltip title="Poi" arrow placement="right">
                            <IconButton
                                variant="contained"
                                type="button"
                                onClick={() => {
                                    setOpenPoiDialog(true);
                                    ctx.setCurrentObjectType(ctx.OBJECT_TYPE_POI);
                                }}
                            >
                                <Info fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </ButtonGroup>
                </Paper>
                {showContextMenu && (
                    <PanelButtons
                        orientation={orientation}
                        setShowContextMenu={setShowContextMenu}
                        clearState={clearState}
                    />
                )}
            </div>
            {openPoiDialog && ctx.currentObjectType === ctx.OBJECT_TYPE_POI && (
                <PoiTypesDialog dialogOpen={openPoiDialog} setDialogOpen={setOpenPoiDialog} />
            )}
            {ctx.trackProfileManager?.change && <ChangeProfileTrackDialog open={true} />}
            {ctx.pointContextMenu.ref && <PointContextMenu anchorEl={ctx.pointContextMenu.ref} />}
        </div>
    );
}
