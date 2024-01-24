import { AppBar, Box, Divider, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import visibleStyles from './visibletracks.module.css';
import headerStyles from '../trackfavmenu.module.css';
import AppContext from '../../context/AppContext';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import CloudTrackItem from '../tracks/CloudTrackItem';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import EmptyVisible from '../errors/EmptyVisible';
import { isEmpty } from 'lodash';
import TracksManager, { DEFAULT_GROUP_NAME } from '../../manager/track/TracksManager';
import Empty from '../errors/Empty';
import { Button } from '@mui/material/';
import { deleteTracksFromMap } from '../../manager/track/DeleteTrackManager';
import { useTranslation } from 'react-i18next';

export function getCountVisibleTracks(visibleTracks) {
    const oldSize = visibleTracks?.old?.length || 0;
    const newSize = visibleTracks?.new?.length || 0;
    return oldSize + newSize;
}

export function isVisibleTrack(file) {
    let savedVisible = JSON.parse(localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG));
    return !!savedVisible?.open?.includes(file.name);
}

export function updateVisibleCache({ visible, file }) {
    let savedVisible = JSON.parse(localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG));
    if (savedVisible && !savedVisible.open) {
        savedVisible.open = [];
    }
    if (visible) {
        savedVisible.open.push(file.name);
    } else {
        const ind = savedVisible.open.findIndex((n) => n === file.name);
        if (ind !== -1) {
            savedVisible.open.splice(ind, 1);
        }
    }
    localStorage.setItem(TracksManager.TRACK_VISIBLE_FLAG, JSON.stringify(savedVisible));
}

export function hideAllVisTracks() {
    let savedVisible = JSON.parse(localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG));
    if (savedVisible) {
        savedVisible.open = [];
    }
    localStorage.setItem(TracksManager.TRACK_VISIBLE_FLAG, JSON.stringify(savedVisible));
}

export function addCloseTracksToRecently(ctx) {
    if (!isEmpty(ctx.visibleTracks)) {
        let savedVisible = JSON.parse(localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG));
        let newVisFiles = {
            old: ctx.visibleTracks.old,
            new: [],
        };

        let newVisFilesNames = {
            old: savedVisible.old,
            new: [],
            open: [],
        };

        ctx.visibleTracks.new?.forEach((t) => {
            if (savedVisible.open && savedVisible.open.includes(t.name)) {
                newVisFiles.new.push(t);
                newVisFilesNames.new.push(t.name);
                newVisFilesNames.open.push(t.name);
            } else {
                newVisFiles.old.unshift(t);
                newVisFilesNames.old.unshift(t.name);
            }
        });

        localStorage.setItem(TracksManager.TRACK_VISIBLE_FLAG, JSON.stringify(newVisFilesNames));
        ctx.setVisibleTracks({ ...newVisFiles });
    }
}

export default function VisibleTracks({ setOpenVisibleMenu, setMenuInfo = null, setSelectedType }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [, height] = useWindowSize();

    const trackItems = useMemo(() => {
        const items = [];
        ctx.visibleTracks?.new?.map((file, index) => {
            const trackName = TracksManager.getFileName(file);
            const isLastItem = !isEmpty(ctx.visibleTracks?.new) ? index === ctx.visibleTracks?.new.length - 1 : false;
            if (file.filesize !== 0) {
                items.push(
                    <CloudTrackItem
                        id={`se-new-visible-track-${trackName}`}
                        key={'visible-cloudtrack-' + file.name}
                        file={file}
                        visible={true}
                        isLastItem={isLastItem}
                    />
                );
            }
        });
        return items;
    }, [ctx.visibleTracks?.new]);

    const trackItemsOld = useMemo(() => {
        const items = [];
        ctx.visibleTracks?.old.map((file, index) => {
            const trackName = TracksManager.getFileName(file);
            const isLastItem = !isEmpty(ctx.visibleTracks?.old) ? index === ctx.visibleTracks?.old.length - 1 : false;
            if (file.filesize !== 0) {
                items.push(
                    <CloudTrackItem
                        id={`se-old-visible-track-${trackName}`}
                        key={'visible-cloudtrack-' + file.name}
                        file={file}
                        visible={true}
                        isLastItem={isLastItem}
                    />
                );
            }
        });
        return items;
    }, [ctx.visibleTracks?.old]);

    function hasVisibleTracks() {
        return !isEmpty(ctx.visibleTracks?.old) || !isEmpty(ctx.visibleTracks?.new);
    }

    function hasTracks() {
        if (!isEmpty(ctx.listFiles)) {
            return ctx.listFiles.uniqueFiles.some((f) => f.type === 'GPX');
        }
        return false;
    }

    function hideAllTracks() {
        if (!isEmpty(ctx.visibleTracks)) {
            let files = getAllVisibleFiles();
            if (files.length > 0) {
                deleteTracksFromMap(ctx, files);
            }
        }
    }

    function allVisibleTracksHidden() {
        let files = getAllVisibleFiles();
        if (files.length > 0) {
            return !files.some((f) => ctx.gpxFiles[f.name]?.url !== null && f.showOnMap);
        }
        return true;
    }

    function getAllVisibleFiles() {
        let files = [];
        if (!isEmpty(ctx.visibleTracks)) {
            if (!isEmpty(ctx.visibleTracks.old)) {
                files = files.concat(ctx.visibleTracks.old);
            }
            if (!isEmpty(ctx.visibleTracks.new)) {
                files = files.concat(ctx.visibleTracks.new);
            }
        }
        return files;
    }

    return (
        <>
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                <AppBar position="static" className={headerStyles.appbar}>
                    <Toolbar className={headerStyles.toolbar}>
                        <IconButton
                            id="se-close-visible-tracks"
                            variant="contained"
                            type="button"
                            className={headerStyles.appBarIcon}
                            onClick={() => setOpenVisibleMenu(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography id="se-visible-cloud-track-name" component="div" className={headerStyles.title}>
                            {t('shared_string_tracks')}
                        </Typography>
                        <Button
                            id="se-hide-all-visible-tracks"
                            className={visibleStyles.button}
                            onClick={hideAllTracks}
                            disabled={allVisibleTracksHidden()}
                        >
                            {t('shared_string_hide_all')}
                        </Button>
                    </Toolbar>
                </AppBar>
                {isEmpty(ctx.visibleTracks?.new) && hasTracks() && (
                    <EmptyVisible
                        id="se-empty-visible"
                        setMenuInfo={setMenuInfo}
                        setOpenVisibleMenu={setOpenVisibleMenu}
                        setSelectedType={setSelectedType}
                    />
                )}
                {hasVisibleTracks() && (
                    <>
                        <Box
                            minWidth={ctx.infoBlockWidth}
                            maxWidth={ctx.infoBlockWidth}
                            sx={{ overflowX: 'hidden', overflowY: 'auto !important', maxHeight: `${height - 120}px` }}
                        >
                            {trackItems}
                        </Box>
                        {trackItemsOld.length > 0 && (
                            <>
                                <Divider />
                                <MenuItem className={visibleStyles.item}>
                                    <Typography className={visibleStyles.title} noWrap>
                                        {t('web:recently_visible')}
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
