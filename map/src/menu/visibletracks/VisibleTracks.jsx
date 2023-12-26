import { AppBar, Box, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import visibleStyles from './visibletracks.module.css';
import headerStyles from '../trackfavmenu.module.css';
import AppContext from '../../context/AppContext';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import CloudTrackItem from '../tracks/CloudTrackItem';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import EmptyVisible from '../errors/EmptyVisible';
import { isEmpty } from 'lodash';
import { DEFAULT_GROUP_NAME } from '../../manager/track/TracksManager';
import Empty from '../errors/Empty';

export default function VisibleTracks({ setOpenVisibleMenu, setMenuInfo = null }) {
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

    function hasVisibleTracks() {
        return !!(!isEmpty(ctx.visibleTracks?.old) || !isEmpty(ctx.visibleTracks?.new));
    }

    function hasTracks() {
        if (!isEmpty(ctx.listFiles)) {
            return ctx.listFiles.uniqueFiles.some((f) => f.type === 'GPX');
        }
        return false;
    }

    return (
        <>
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                {hasVisibleTracks() && (
                    <>
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
                                <Typography
                                    id="se-visible-cloud-track-name"
                                    component="div"
                                    className={headerStyles.title}
                                >
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
                                    sx={{
                                        overflowX: 'hidden',
                                        overflowY: 'auto !important',
                                        maxHeight: `${height - 120}px`,
                                    }}
                                >
                                    {trackItemsOld}
                                </Box>
                            </>
                        )}
                    </>
                )}
                {!hasVisibleTracks() && hasTracks() && <EmptyVisible setMenuInfo={setMenuInfo} />}
                {!hasVisibleTracks() && !hasTracks() && (
                    <Empty
                        title={'You don’t have track files'}
                        text={'You can import, create track files using OsmAnd.'}
                        folder={DEFAULT_GROUP_NAME}
                    />
                )}
            </Box>
        </>
    );
}
