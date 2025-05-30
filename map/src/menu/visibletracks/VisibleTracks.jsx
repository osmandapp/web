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
import TracksManager, {
    DEFAULT_GROUP_NAME,
    getAllVisibleFiles,
    getFileName,
    TRACK_VISIBLE_FLAG,
} from '../../manager/track/TracksManager';
import Empty from '../errors/Empty';
import { Button } from '@mui/material/';
import { hideAllTracks } from '../../manager/track/DeleteTrackManager';
import { useTranslation } from 'react-i18next';
import { SHARE_TYPE } from '../share/shareConstants';

export const VISIBLE_SHARE_MARKER = SHARE_TYPE + '_visible_marker_';

export function getCountVisibleTracks(visibleTracks) {
    return visibleTracks?.new?.length || 0;
}

export function isVisibleTrack(file) {
    let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
    return !!savedVisible?.open?.includes(file.name);
}

export function updateVisibleCache({ visible, file, smartf = null }) {
    let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
    if (savedVisible && !savedVisible.open) {
        savedVisible.open = [];
    }
    // always mark shared files in visible cache with SHARE_TYPE prefix
    const fileName = smartf?.type === SHARE_TYPE ? VISIBLE_SHARE_MARKER + file.name : file.name;

    if (visible) {
        savedVisible.open.push(fileName);
    } else {
        const ind = savedVisible.open.findIndex((n) => n === fileName);
        if (ind !== -1) {
            savedVisible.open.splice(ind, 1);
        }
    }
    localStorage.setItem(TRACK_VISIBLE_FLAG, JSON.stringify(savedVisible));
}

export function hideAllVisTracks() {
    let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
    if (savedVisible) {
        savedVisible.open = [];
    }
    localStorage.setItem(TRACK_VISIBLE_FLAG, JSON.stringify(savedVisible));
}

export function addCloseTracksToRecently(ctx) {
    if (!isEmpty(ctx.visibleTracks)) {
        let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
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
            const sharedFile = t.sharedWithMe;

            const fileName = sharedFile ? VISIBLE_SHARE_MARKER + t.name : t.name;
            if (savedVisible.open && savedVisible.open.includes(fileName)) {
                newVisFiles.new.push(t);
                newVisFilesNames.new.push(fileName);
                newVisFilesNames.open.push(fileName);
            } else {
                newVisFiles.old.unshift(t);
                newVisFilesNames.old.unshift(fileName);
            }
        });

        localStorage.setItem(TRACK_VISIBLE_FLAG, JSON.stringify(newVisFilesNames));
        ctx.setVisibleTracks({ ...newVisFiles });
    }
}

export default function VisibleTracks({ setMenuInfo = null, setSelectedType }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [, height] = useWindowSize();

    const trackItems = useMemo(() => {
        const items = [];
        ctx.visibleTracks?.new?.map((file, index) => {
            const trackName = getFileName(file);
            const smartf = file.sharedWithMe ? { type: SHARE_TYPE } : null;
            const isLastItem = !isEmpty(ctx.visibleTracks?.new) ? index === ctx.visibleTracks?.new.length - 1 : false;
            if (file.filesize !== 0) {
                items.push(
                    <CloudTrackItem
                        id={`se-new-visible-track-${trackName}`}
                        key={'visible-cloudtrack-' + file.name}
                        file={file}
                        visible={true}
                        isLastItem={isLastItem}
                        smartf={smartf}
                    />
                );
            }
        });
        return items;
    }, [ctx.visibleTracks?.new]);

    const trackItemsOld = useMemo(() => {
        const items = [];
        ctx.visibleTracks?.old.map((file, index) => {
            const trackName = getFileName(file);
            const smartf = file.sharedWithMe ? { type: SHARE_TYPE } : null;
            const isLastItem = !isEmpty(ctx.visibleTracks?.old) ? index === ctx.visibleTracks?.old.length - 1 : false;
            if (file.filesize !== 0) {
                items.push(
                    <CloudTrackItem
                        id={`se-old-visible-track-${trackName}`}
                        key={'visible-cloudtrack-' + file.name}
                        file={file}
                        visible={true}
                        isLastItem={isLastItem}
                        smartf={smartf}
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
        if (!isEmpty(ctx.shareWithMeFiles?.tracks)) {
            return ctx.shareWithMeFiles.tracks?.length > 0;
        }
        return false;
    }

    function allVisibleTracksHidden() {
        let files = getAllVisibleFiles(ctx);
        if (files.length > 0) {
            const visibleCloudTracks = files.some((f) => f.url !== null && f.showOnMap);
            return !visibleCloudTracks;
        }
        return true;
    }

    return (
        <>
            <Box
                minWidth={ctx.infoBlockWidth}
                maxWidth={ctx.infoBlockWidth}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height,
                    overflow: 'hidden',
                }}
            >
                <AppBar position="static" className={headerStyles.appbar}>
                    <Toolbar className={headerStyles.toolbar}>
                        <IconButton
                            id="se-close-visible-tracks"
                            variant="contained"
                            type="button"
                            className={headerStyles.appBarIcon}
                            onClick={() => ctx.setOpenVisibleMenu(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography id="se-visible-cloud-track-name" component="div" className={headerStyles.title}>
                            {t('shared_string_tracks')}
                        </Typography>
                        <Button
                            id="se-hide-all-visible-tracks"
                            className={visibleStyles.button}
                            onClick={() => hideAllTracks(ctx)}
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
                        setOpenVisibleMenu={ctx.setOpenVisibleMenu}
                        setSelectedType={setSelectedType}
                    />
                )}
                {hasVisibleTracks() && (
                    <Box
                        sx={{
                            flex: 1,
                            overflowY: 'auto',
                            overflowX: 'hidden',
                        }}
                    >
                        <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth}>
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
                                <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth}>
                                    {trackItemsOld}
                                </Box>
                            </>
                        )}
                    </Box>
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
