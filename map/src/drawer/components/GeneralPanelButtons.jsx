import { ButtonGroup, IconButton, Paper, Tooltip } from '@mui/material';
import TracksManager from '../../context/TracksManager';
import { Insights, Info, Upload } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { styled } from '@mui/material/styles';
import PoiTypesDialog from './poi/PoiTypesDialog';
import PanelButtons from '../../infoblock/components/PanelButtons';
import ChangeProfileTrackDialog from '../../infoblock/components/track/dialogs/ChangeProfileTrackDialog';
import PointContextMenu from '../../infoblock/components/PointContextMenu';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { confirm } from '../../dialogs/GlobalConfirmationDialog';

export default function GeneralPanelButtons({
    mainMenuWidth,
    showInfoBlock,
    setShowInfoBlock,
    infoBlockOpen,
    setInfoBlockOpen,
    clearState,
    mobile,
}) {
    const ctx = useContext(AppContext);
    const StyledInput = styled('input')({
        display: 'none',
    });

    const [openPoiDialog, setOpenPoiDialog] = useState(false);
    const [width, height] = useWindowSize();
    const orientation = getButtonOrientation();

    const HEADER_HEIGHT = 68;
    const BUTTON_SIZE = 41;

    const fileSelected = () => async (e) => {
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', async () => {
                const track = await TracksManager.getTrackData(file);
                if (track) {
                    track.name = file.name;
                    TracksManager.addTrack({ ctx, track, overwrite: false });
                }
            });
            reader.readAsText(file);
        });
    };

    function getButtonOrientation() {
        // desktop
        if (height >= 666) {
            return 'vertical';
        } else {
            // mobile
            if (height < width) {
                return 'horizontal';
            }
        }
        return 'vertical';
    }

    function useFlexButtons() {
        return !mobile && orientation === 'vertical';
    }

    return (
        <div
            style={{
                left: mainMenuWidth + 10,
                top: `${HEADER_HEIGHT}px`,
                bottom: useFlexButtons() && `${HEADER_HEIGHT}px`,
                zIndex: 1000,
                position: 'absolute',
                display: 'flex',
                height: useFlexButtons() && height - 2 * HEADER_HEIGHT,
                alignItems: useFlexButtons() && 'center',
                flexDirection: useFlexButtons() && 'column',
            }}
        >
            <div
                className="padding-container"
                style={{
                    display: 'flex',
                    flexDirection: orientation === 'vertical' ? 'column' : 'row',
                    marginBottom: useFlexButtons() && 'auto',
                }}
            >
                <Paper>
                    <ButtonGroup
                        sx={{
                            boxShadow: '0 1px 5px rgba(0,0,0,0.65)',
                            borderRadius: '4px',
                            width: orientation === 'vertical' ? BUTTON_SIZE : 'auto',
                            height: orientation === 'vertical' ? 'auto' : BUTTON_SIZE,
                        }}
                        orientation={orientation}
                        color="primary"
                    >
                        <Tooltip title="Create track" arrow placement="right">
                            <IconButton
                                sx={{ mt: orientation === 'vertical' ? '3px' : 0 }}
                                variant="contained"
                                type="button"
                                onClick={() =>
                                    confirm({
                                        ctx,
                                        text: 'Stop editing the current track?',
                                        skip: ctx.createTrack?.enable !== true,
                                        callback: () => TracksManager.createTrack(ctx),
                                    })
                                }
                            >
                                <Insights fontSize="small" />
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
                                <IconButton
                                    sx={{ ml: '2px', mt: orientation === 'vertical' ? 0 : '3px' }}
                                    variant="contained"
                                    component="span"
                                >
                                    <Upload fontSize="small" />
                                </IconButton>
                            </label>
                        </Tooltip>
                        <Tooltip title="POI" arrow placement="right">
                            <IconButton
                                variant="contained"
                                type="button"
                                onClick={() => {
                                    setOpenPoiDialog(true);
                                }}
                            >
                                <Info fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </ButtonGroup>
                </Paper>
            </div>
            {showInfoBlock && (
                <PanelButtons
                    orientation={orientation}
                    setShowInfoBlock={setShowInfoBlock}
                    infoBlockOpen={infoBlockOpen}
                    setInfoBlockOpen={setInfoBlockOpen}
                    clearState={clearState}
                    mobile={mobile}
                    bsize={BUTTON_SIZE}
                />
            )}
            {openPoiDialog && (
                <PoiTypesDialog dialogOpen={openPoiDialog} setDialogOpen={setOpenPoiDialog} width={width} />
            )}
            {ctx.trackProfileManager?.change && <ChangeProfileTrackDialog open={true} />}
            {ctx.pointContextMenu.element && <PointContextMenu anchorEl={ctx.pointContextMenu.element} />}
        </div>
    );
}
