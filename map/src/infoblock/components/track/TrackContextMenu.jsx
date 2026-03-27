import React, { useContext, useRef, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import HeaderNoUnderline from '../../../frame/components/header/HeaderNoUnderline';
import TabPanels from '../tabs/TabPanels';
import { ReactComponent as TracksIcon } from '../../../assets/icons/ic_action_polygom_dark.svg';
import styles from './trackcontextmenu.module.css';
import AppContext, { isCloudTrack, isLocalTrack, isRouteTrack, isShareTrack } from '../../../context/AppContext';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import { getFileName } from '../../../manager/track/TracksManager';
import ThreeDotsButton from '../../../frame/components/btns/ThreeDotsButton';
import ActionsMenu from '../../../menu/actions/ActionsMenu';
import TrackActions from '../../../menu/actions/TrackActions';
import { useTrackVisibility } from '../../../util/hooks/menu/useTrackVisibility';
import { useCompactOnScroll } from '../../../util/hooks/useCompactOnScroll';
import CloudTrackActionsButtons from './CloudTrackActionsButtons';
import RouteTrackActionsButtons from './RouteTrackActionsButtons';
import LocalTrackActionsButtons from './LocalTrackActionsButtons';
import ShareTrackActionsButtons from './ShareTrackActionsButtons';

export default function TrackContextMenu({ track, onClose, tabsObj, showBackButton = false }) {
    const ctx = useContext(AppContext);

    const anchorEl = useRef(null);
    const [openActions, setOpenActions] = useState(false);
    const { compact, scrollAreaHandlers } = useCompactOnScroll();

    const { toggleVisibility, checkedSwitch } = useTrackVisibility({ file: track });

    const trackName = track ? getFileName(track) : null;
    const showActionsBtn = (isCloudTrack(ctx) || isLocalTrack(ctx)) && track?.name;
    const compactToolbarProps = compact ? { className: styles.compactHeaderToolbar } : undefined;

    if (!tabsObj || tabsObj.tabList.length === 0) {
        return null;
    }

    return (
        <Box id="se-track-context-menu" className={styles.trackContextMenuShell}>
            <HeaderNoUnderline
                title={compact ? trackName : ''}
                onClose={onClose}
                showBackButton={showBackButton}
                toolbarProps={compactToolbarProps}
                rightContent={
                    showActionsBtn && (
                        <ThreeDotsButton
                            name={'action_menu_track'}
                            tip={'shared_string_menu'}
                            id={`se-actions-${track.name}`}
                            setOpenActions={setOpenActions}
                            anchorEl={anchorEl}
                        />
                    )
                }
            />
            {ctx.processingTravelRouteByUrl ? (
                <CircularProgress sx={{ mt: 10, ml: 20 }} size={36} />
            ) : (
                <>
                    <Box className={`${styles.collapsibleHeader} ${compact ? styles.collapsibleHeaderHidden : ''}`}>
                        {trackName && (
                            <Box className={styles.nameBlock}>
                                <MenuItemWithLines
                                    id={'se-track-' + trackName}
                                    className={styles.trackName}
                                    name={trackName}
                                    maxLines={3}
                                />
                                <Box className={styles.trackIconBox}>
                                    <TracksIcon />
                                </Box>
                            </Box>
                        )}
                        {isCloudTrack(ctx) && track && (
                            <CloudTrackActionsButtons
                                track={track}
                                toggleVisibility={toggleVisibility}
                                checkedSwitch={checkedSwitch}
                            />
                        )}
                        {isLocalTrack(ctx) && track && <LocalTrackActionsButtons track={track} />}
                        {isRouteTrack(ctx) && track && <RouteTrackActionsButtons track={track} />}
                        {isShareTrack(ctx) && track && <ShareTrackActionsButtons track={track} />}
                    </Box>
                    <Box className={styles.trackTabsColumn}>
                        <TabPanels tabsObj={tabsObj} scrollAreaHandlers={scrollAreaHandlers} />
                    </Box>
                </>
            )}
            <ActionsMenu
                open={openActions}
                setOpen={setOpenActions}
                anchorEl={anchorEl}
                actions={
                    track && (
                        <TrackActions
                            track={track}
                            setDisplayTrack={toggleVisibility}
                            setOpenActions={setOpenActions}
                        />
                    )
                }
            />
        </Box>
    );
}
