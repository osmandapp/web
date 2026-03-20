import React, { useContext } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import HeaderNoUnderline from '../../../frame/components/header/HeaderNoUnderline';
import TabPanels from '../tabs/TabPanels';
import { ReactComponent as TracksIcon } from '../../../assets/menu/ic_action_track.svg';
import styles from './trackcontextmenu.module.css';
import AppContext from '../../../context/AppContext';

export default function TrackContextMenu({ trackName, onClose, tabsObj, showBackButton = false }) {
    const ctx = useContext(AppContext);

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
                <HeaderNoUnderline title="" onClose={onClose} showBackButton={showBackButton} />
                {trackName && (
                    <div className={styles.nameBlock}>
                        <Typography id={'se-track-' + trackName} className={styles.trackName}>
                            {trackName}
                        </Typography>
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
            </div>
        </Box>
    );
}
