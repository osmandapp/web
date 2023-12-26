import { AppBar, Box, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import visibleStyles from './visibletracks.module.css';
import headerStyles from '../trackfavmenu.module.css';
import AppContext from '../../context/AppContext';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import CloudTrackItem from '../tracks/CloudTrackItem';
import { useWindowSize } from '../../util/hooks/useWindowSize';

export default function VisibleTracks({ setOpenVisibleMenu }) {
    const ctx = useContext(AppContext);

    const [, height] = useWindowSize();

    const trackItems = useMemo(() => {
        const items = [];
        ctx.visibleTracks?.new.map((file) => {
            if (file.filesize !== 0) {
                items.push(<CloudTrackItem key={'visible-cloudtrack-' + file.name} file={file} visible={true} />);
            }
        });
        return items;
    }, [ctx.visibleTracks]);

    const trackItemsOld = useMemo(() => {
        const items = [];
        ctx.visibleTracks?.old.map((file) => {
            if (file.filesize !== 0) {
                items.push(<CloudTrackItem key={'visible-cloudtrack-' + file.name} file={file} visible={true} />);
            }
        });
        return items;
    }, [ctx.visibleTracks]);

    return (
        <>
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                <AppBar position="static" className={headerStyles.appbar}>
                    <Toolbar className={headerStyles.toolbar}>
                        <IconButton
                            variant="contained"
                            type="button"
                            className={headerStyles.appBarIcon}
                            onClick={() => setOpenVisibleMenu(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography id="se-visible-cloud-track-name" component="div" className={headerStyles.title}>
                            Tracks
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ overflowX: 'hidden', overflowY: 'auto !important', maxHeight: `${height - 120}px` }}
                >
                    {trackItems}
                </Box>
                {trackItemsOld.length > 0 && (
                    <>
                        <MenuItem className={visibleStyles.item}>
                            <Typography className={visibleStyles.title} noWrap>
                                Recently visible
                            </Typography>
                        </MenuItem>
                        <Box
                            minWidth={ctx.infoBlockWidth}
                            maxWidth={ctx.infoBlockWidth}
                            sx={{ overflowX: 'hidden', overflowY: 'auto !important', maxHeight: `${height - 120}px` }}
                        >
                            {trackItemsOld}
                        </Box>
                    </>
                )}
            </Box>
        </>
    );
}
