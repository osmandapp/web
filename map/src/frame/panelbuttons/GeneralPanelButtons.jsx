import { Box, IconButton, Paper, SvgIcon, Typography } from '@mui/material';
import React, { useContext } from 'react';
import AppContext, { OBJECT_CONFIGURE_MAP, OBJECT_TYPE_WEATHER } from '../../context/AppContext';
import PanelButtons from './PanelButtons';
import ChangeProfileTrackDialog from '../../dialogs/tracks/ChangeProfileTrackDialog';
import PointContextMenu from '../../infoblock/components/PointContextMenu';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import styles from '../../map/map.module.css';
import { ReactComponent as ConfigureMapIcon } from '../../assets/icons/ic_map_configure_map.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/ic_action_search_dark.svg';
import ConfigureMap from '../../menu/configuremap/ConfigureMap';
import {
    HEADER_SIZE,
    INSTALL_BANNER_SIZE,
    MAIN_MENU_MIN_SIZE,
    MENU_INFO_OPEN_SIZE,
} from '../../manager/GlobalManager';
import SearchMenu from '../../menu/search/SearchMenu';

export default function GeneralPanelButtons({
    mainMenuWidth,
    menuInfoWidth,
    showInfoBlock,
    setShowInfoBlock,
    clearState,
    setMenuInfo,
    showInstallBanner,
}) {
    const ctx = useContext(AppContext);

    const [width, height] = useWindowSize();
    const orientation = getButtonOrientation();
    const tooltipOrientation = getTooltipOrientation();

    const GPS_CONTROL_HEIGHT = 70 + 40; // margin + button
    const INSTALL_BANNER_SIZE_PX = showInstallBanner ? INSTALL_BANNER_SIZE : 0;
    const HEADER_HEIGHT = HEADER_SIZE + INSTALL_BANNER_SIZE_PX + 1;
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
            setMenuInfo(<ConfigureMap />);
        }
    }

    function openSearch() {
        setShowInfoBlock(false);
        setMenuInfo(<SearchMenu />);
    }

    return (
        <>
            <div
                style={{
                    marginLeft: getMarginFromMenu(),
                    marginTop: `${HEADER_HEIGHT + 20}px`,
                    display: 'flex',
                    flexDirection: 'row',
                    paddingBottom: '2px',
                }}
            >
                <Paper sx={{ mr: '8px' }} className={styles.button}>
                    <IconButton onClick={openMapStyle}>
                        <SvgIcon className={styles.customIconPath} component={ConfigureMapIcon} inheritViewBox />
                    </IconButton>
                </Paper>
                <Paper id={'se-open-search-button'} className={styles.button}>
                    <Box
                        onClick={openSearch}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: 'transparent',
                            mt: '8px',
                            px: '8px',
                        }}
                    >
                        <SvgIcon className={styles.customIconPath} component={SearchIcon} inheritViewBox />
                        <Typography variant="inherit" className={styles.searchTitle}>
                            Search
                        </Typography>
                    </Box>
                </Paper>
            </div>
            <div
                style={{
                    left: getMarginFromMenu(),
                    top: `${HEADER_HEIGHT + 100}px`,
                    bottom: useFlexButtons() && `${HEADER_HEIGHT}px`,
                    zIndex: 1000,
                    position: window.innerWidth > MENU_INFO_OPEN_SIZE + MAIN_MENU_MIN_SIZE ? 'absolute' : 'fixed',
                    display: 'flex',
                    height: useFlexButtons() && height - 2 * HEADER_HEIGHT - GPS_CONTROL_HEIGHT,
                    alignItems: useFlexButtons() && 'center',
                    flexDirection: useFlexButtons() && 'column',
                }}
            >
                {showInfoBlock &&
                    !ctx.selectedWpt &&
                    ctx.currentObjectType !== OBJECT_TYPE_WEATHER &&
                    !ctx.shareFile && (
                        <PanelButtons
                            orientation={orientation}
                            tooltipOrientation={tooltipOrientation}
                            setShowInfoBlock={setShowInfoBlock}
                            clearState={clearState}
                            bsize={BUTTON_SIZE}
                        />
                    )}
                {ctx.trackProfileManager?.change && <ChangeProfileTrackDialog open={true} />}
                {ctx.pointContextMenu.element && <PointContextMenu anchorEl={ctx.pointContextMenu.element} />}
            </div>
        </>
    );
}
