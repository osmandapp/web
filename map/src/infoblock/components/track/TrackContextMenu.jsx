import React, { useContext, useRef, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import HeaderNoUnderline from '../../../frame/components/header/HeaderNoUnderline';
import TabPanels from '../tabs/TabPanels';
import { ReactComponent as TracksIcon } from '../../../assets/menu/ic_action_track.svg';
import styles from './trackcontextmenu.module.css';
import AppContext, { isCloudTrack, isLocalTrack } from '../../../context/AppContext';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import { getFileName } from '../../../manager/track/TracksManager';
import ThreeDotsButton from '../../../frame/components/btns/ThreeDotsButton';
import ActionsMenu from '../../../menu/actions/ActionsMenu';
import TrackActions from '../../../menu/actions/TrackActions';
import { useTrackVisibility } from '../../../util/hooks/menu/useTrackVisibility';

export default function TrackContextMenu({ track, onClose, tabsObj, showBackButton = false }) {
    const ctx = useContext(AppContext);

    const anchorEl = useRef(null);
    const [openActions, setOpenActions] = useState(false);

    const { toggleVisibility } = useTrackVisibility({ file: track });

    const trackName = track ? getFileName(track) : null;

    if (!tabsObj || tabsObj.tabList.length === 0) {
        return null;
    }

    return (
        <Box
            sx={{
                height: '100vh',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div id="se-track-context-menu" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <HeaderNoUnderline
                    title=""
                    onClose={onClose}
                    showBackButton={showBackButton}
                    rightContent={
                        (isCloudTrack(ctx) || isLocalTrack(ctx)) &&
                        track?.name && (
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
                {trackName && (
                    <div className={styles.nameBlock}>
                        <MenuItemWithLines
                            id={'se-track-' + trackName}
                            className={styles.trackName}
                            name={trackName}
                            maxLines={3}
                        />
                        <div className={styles.trackIconBox}>
                            <TracksIcon />
                        </div>
                    </div>
                )}
                {ctx.processingTravelRouteByUrl ? (
                    <CircularProgress sx={{ mt: 10, ml: 20 }} size={36} />
                ) : (
                    <Box
                        sx={{
                            flex: 1,
                            minHeight: 0,
                            overflowY: 'auto',
                            overflowX: 'hidden',
                        }}
                    >
                        <TabPanels tabsObj={tabsObj} />
                    </Box>
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
            </div>
        </Box>
    );
}
