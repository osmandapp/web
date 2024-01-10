import { ButtonGroup, IconButton, Paper, SvgIcon, Tooltip } from '@mui/material';
import TracksManager from '../../../manager/track/TracksManager';
import { Insights, Info } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import AppContext, { OBJECT_CONFIGURE_MAP } from '../../../context/AppContext';
import PoiTypesDialog from '../poi/PoiTypesDialog';
import PanelButtons from './PanelButtons';
import ChangeProfileTrackDialog from '../../../dialogs/tracks/ChangeProfileTrackDialog';
import PointContextMenu from '../../../infoblock/components/PointContextMenu';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import { confirm } from '../../../dialogs/GlobalConfirmationDialog';
import styles from '../../../map/components/map.module.css';
import { ReactComponent as ConfigureMapIcon } from '../../../assets/icons/ic_map_configure_map.svg';
import SearchInfo from '../search/SearchInfo';
import ConfigureMap from '../../../menu/configuremap/ConfigureMap';

export default function GeneralPanelButtons({
    mainMenuWidth,
    menuInfoWidth,
    showInfoBlock,
    setShowInfoBlock,
    clearState,
    setMenuInfo,
    setOpenVisibleMenu,
}) {
    const ctx = useContext(AppContext);

    const [openPoiDialog, setOpenPoiDialog] = useState(false);
    const [width, height] = useWindowSize();
    const orientation = getButtonOrientation();
    const tooltipOrientation = getTooltipOrientation();

    const GPS_CONTROL_HEIGHT = 70 + 40; // margin + button
    const HEADER_HEIGHT = 61;
    const BUTTON_SIZE = 41;

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
        return orientation === 'vertical';
    }

    function getTooltipOrientation() {
        return orientation === 'vertical' ? 'right' : 'bottom';
    }

    function getMarginFromMenu() {
        const menuWidth = mainMenuWidth && Number(mainMenuWidth.replace('px', ''));
        const infoWidth = menuInfoWidth && Number(menuInfoWidth.replace('px', ''));
        return `${menuWidth + infoWidth + 20}px`;
    }

    function openMapStyle() {
        ctx.setOpenGroups([]);
        ctx.setSelectedGpxFile({});
        if (ctx.currentObjectType === OBJECT_CONFIGURE_MAP) {
            // close menu
            ctx.setCurrentObjectType(null);
            setMenuInfo(null);
        } else {
            //open menu
            ctx.setCurrentObjectType(OBJECT_CONFIGURE_MAP);
            setShowInfoBlock(false);
            setMenuInfo(<ConfigureMap setOpenVisibleMenu={setOpenVisibleMenu} />);
        }
    }

    return (
        <>
            <div
                style={{
                    marginLeft: getMarginFromMenu(),
                    marginTop: `${HEADER_HEIGHT + 20}px`,
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Paper sx={{ mr: '8px' }} className={styles.button}>
                    <IconButton onClick={openMapStyle}>
                        <SvgIcon className={styles.customIconPath} component={ConfigureMapIcon} inheritViewBox />
                    </IconButton>
                </Paper>
                <Paper sx={{ height: '40px' }} className={styles.button}>
                    <SearchInfo />
                </Paper>
            </div>
            <div
                style={{
                    left: getMarginFromMenu(),
                    top: `${HEADER_HEIGHT + 100}px`,
                    bottom: useFlexButtons() && `${HEADER_HEIGHT}px`,
                    zIndex: 1000,
                    position: 'absolute',
                    display: 'flex',
                    height: useFlexButtons() && height - 2 * HEADER_HEIGHT - GPS_CONTROL_HEIGHT,
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
                            <Tooltip title="Create new route" arrow placement={tooltipOrientation}>
                                <IconButton
                                    sx={{ mt: orientation === 'vertical' ? '3px' : 0 }}
                                    variant="contained"
                                    type="button"
                                    onClick={() =>
                                        confirm({
                                            ctx,
                                            title: 'Plan Route: new track',
                                            text: 'Stop editing the current track?',
                                            skip: ctx.createTrack?.enable !== true,
                                            callback: () => TracksManager.createTrack(ctx),
                                        })
                                    }
                                >
                                    <Insights fontSize="small" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="POI" arrow placement={tooltipOrientation}>
                                <IconButton
                                    id={'se-poi-panel-button'}
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
                        tooltipOrientation={tooltipOrientation}
                        setShowInfoBlock={setShowInfoBlock}
                        clearState={clearState}
                        bsize={BUTTON_SIZE}
                    />
                )}
                {openPoiDialog && (
                    <PoiTypesDialog dialogOpen={openPoiDialog} setDialogOpen={setOpenPoiDialog} width={width} />
                )}
                {ctx.trackProfileManager?.change && <ChangeProfileTrackDialog open={true} />}
                {ctx.pointContextMenu.element && <PointContextMenu anchorEl={ctx.pointContextMenu.element} />}
            </div>
        </>
    );
}
