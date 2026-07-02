import React, { useState, useContext, useEffect, useMemo, useRef } from 'react';
import AppContext from '../../context/AppContext';
import CloudTrackGroup from './CloudTrackGroup';
import isEmpty from 'lodash-es/isEmpty';
import { Box, LinearProgress, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { useElementHeight } from '../../util/hooks/useElementHeight';
import VirtualizedList from '../../frame/components/VirtualizedList';
import CloudTrackItem from './CloudTrackItem';
import { DEFAULT_GROUP_NAME, updateLoadingTracks } from '../../manager/track/TracksManager';
import Empty from '../errors/Empty';
import Loading from '../errors/Loading';
import GroupHeader from '../actions/GroupHeader';
import TrackLoading from './TrackLoading';
import { doSort } from '../actions/SortActions';
import styles from '../trackfavmenu.module.css';
import dropOverlayStyles from '../../frame/components/dropOverlay.module.css';
import TracksDropHighlight from '../../frame/components/TracksDropHighlight';
import gStyles from '../gstylesmenu.module.css';
import { ReactComponent as VisibleIcon } from '../../assets/icons/ic_show_on_map.svg';
import VisibleTracks, { getCountVisibleTracks } from '../visibletracks/VisibleTracks';
import { useTranslation } from 'react-i18next';
import SharedFolder from '../components/SharedFolder';
import LoginContext from '../../context/LoginContext';
import { SHARE_TYPE } from '../share/shareConstants';
import TrackGroupFolder from './TrackGroupFolder';
import { HEADER_SIZE, MAIN_URL_WITH_SLASH, MENU_IDS, VISIBLE_TRACKS_URL, liveHash } from '../../manager/GlobalManager';
import { useGpxFileDragClearZone, useGpxFileDragZone } from '../../util/hooks/useGpxFileDragZone';
import { useNavigate } from 'react-router-dom';

export const DEFAULT_SORT_METHOD = 'time';

export default function TracksMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const [defaultGroup, setDefaultGroup] = useState(null);
    const [sortFiles, setSortFiles] = useState([]);
    const [sortGroups, setSortGroups] = useState([]);

    const [openVisibleTracks, setOpenVisibleTracks] = useState(false);

    const navigate = useNavigate();

    const [, height] = useWindowSize();
    const [listContainerRef, listHeight] = useElementHeight();

    const { t } = useTranslation();

    const rootDropZoneHandlers = useGpxFileDragZone('');
    const clearGpxDragTarget = useGpxFileDragClearZone();
    const trackMenuScrollRef = useRef(null);
    const trackMenuListRef = useRef(null);
    const rootDropZoneRef = useRef(null);

    const checkHasFiles = () =>
        ctx.tracksGroups?.length > 0 || defaultGroup?.length > 0 || !isEmpty(ctx.shareWithMeFiles?.tracks);

    const [hasFiles, setHasFiles] = useState(checkHasFiles());

    useEffect(() => {
        setHasFiles(checkHasFiles());
    }, [ctx.tracksGroups, defaultGroup, ctx.shareWithMeFiles]);

    // get gpx files and create groups
    useEffect(() => {
        const defaultGroupWithFolders = {
            subfolders: ctx.tracksGroups ?? [],
            groupFiles: [],
            name: DEFAULT_GROUP_NAME,
            fullName: DEFAULT_GROUP_NAME,
        };
        if (!isEmpty(ctx.tracksGroups)) {
            const defGroup = ctx.tracksGroups.find((g) => g.name === DEFAULT_GROUP_NAME);
            if (defGroup) {
                setDefaultGroup(defGroup);
            } else {
                setDefaultGroup(defaultGroupWithFolders);
            }
            doSort({
                method: ctx.selectedSort?.tracks?.[DEFAULT_GROUP_NAME] ?? DEFAULT_SORT_METHOD,
                setSortFiles,
                setSortGroups,
                files: defGroup ? defGroup.groupFiles : [],
                groups: defaultGroupWithFolders.subfolders,
            });
        } else {
            setDefaultGroup(defaultGroupWithFolders);
            setSortFiles([]);
            setSortGroups([]);
        }
    }, [ctx.tracksGroups]);

    const defaultGroupItems = useMemo(() => {
        if (defaultGroup?.groupFiles) {
            const items = [];
            const listTracks = sortFiles.length > 0 ? sortFiles : defaultGroup.groupFiles;
            listTracks.map((file, index) => {
                const isLastItem = !isEmpty(listTracks) ? index === listTracks.length - 1 : false;
                items.push(<CloudTrackItem key={'cloudtrack-' + file.name} file={file} isLastItem={isLastItem} />);
            });
            return items;
        }
    }, [defaultGroup?.files, defaultGroup?.files?.length, defaultGroup?.groupFiles, sortFiles]);

    useEffect(() => {
        if (defaultGroup) {
            updateLoadingTracks(ctx, defaultGroup.groupFiles);
        }
    }, [defaultGroup?.groupFiles]);

    const isRootDropActive = ctx.gpxFileDrag?.active && ctx.gpxFileDrag?.hoverFolder === '';

    const trackMenuRows = useMemo(() => {
        const rows = [
            <MenuItem
                key={'se-visible-tracks-menu'}
                id={'se-visible-tracks-menu'}
                divider
                className={styles.item}
                {...clearGpxDragTarget}
                onClick={() => {
                    setOpenVisibleTracks(true);
                    navigate(MAIN_URL_WITH_SLASH + VISIBLE_TRACKS_URL + liveHash());
                    ctx.setOpenVisibleMenu((prev) => ({
                        ...prev,
                        open: true,
                        showTracks: true,
                    }));
                }}
            >
                <ListItemIcon className={styles.icon}>
                    <VisibleIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="inherit" className={styles.groupName}>
                        {t('shared_string_visible_on_map')}
                    </Typography>
                    <Typography variant="body2" className={styles.groupInfo} noWrap>
                        {`Tracks ${getCountVisibleTracks(ctx.visibleTracks)}`}
                    </Typography>
                </ListItemText>
            </MenuItem>,
        ];
        if (!isEmpty(ctx.shareWithMeFiles?.tracks)) {
            rows.push(<SharedFolder key={'shared-folder'} subtype={'track'} files={ctx.shareWithMeFiles?.tracks} />);
        }
        if (ctx.tracksGroups) {
            (sortGroups?.length > 0 ? sortGroups : ctx.tracksGroups)
                .filter((g) => g.name !== DEFAULT_GROUP_NAME)
                .forEach((group, index) => {
                    rows.push(<CloudTrackGroup key={group.name} index={index} group={group} />);
                });
        }
        if (ctx.trackLoading?.length > 0) {
            ctx.trackLoading
                .filter((lt) => lt.folder === DEFAULT_GROUP_NAME)
                .forEach((lt) => {
                    rows.push(<TrackLoading key={lt.name} name={lt.name} />);
                });
        }
        if (defaultGroupItems) {
            rows.push(...defaultGroupItems);
        }

        return rows;
    }, [
        defaultGroupItems,
        sortGroups,
        ctx.tracksGroups,
        ctx.trackLoading,
        ctx.shareWithMeFiles,
        ctx.visibleTracks,
        clearGpxDragTarget,
    ]);

    if (openVisibleTracks) {
        return <VisibleTracks source={MENU_IDS.tracks} open={setOpenVisibleTracks} />;
    }

    // open folders
    if (ctx.openGroups && ctx.openGroups.length > 0) {
        const lastGroup = ctx.openGroups[ctx.openGroups.length - 1];
        if (lastGroup?.type === SHARE_TYPE) {
            return <TrackGroupFolder smartf={lastGroup} />;
        }
        return <TrackGroupFolder folder={lastGroup} />;
    }

    return (
        <Box
            className={gStyles.fixedColumn}
            minWidth={ctx.infoBlockWidth}
            maxWidth={ctx.infoBlockWidth}
            style={{ height: `${height - HEADER_SIZE}px` }}
        >
            {ltx.loginUser && (
                <GroupHeader
                    type="tracks"
                    trackGroup={defaultGroup}
                    setSortGroups={setSortGroups}
                    setSortFiles={setSortFiles}
                />
            )}
            {ctx.smartFoldersLoading && !ctx.gpxLoading && <LinearProgress id={'se-smart-folders-progress'} />}
            {ctx.gpxLoading ? (
                <Loading />
            ) : (
                <>
                    {hasFiles ? (
                        <Box
                            id={'se-track-menu'}
                            ref={listContainerRef}
                            className={gStyles.scrollMainBlock}
                            minWidth={ctx.infoBlockWidth}
                            maxWidth={ctx.infoBlockWidth}
                        >
                            <Box
                                ref={rootDropZoneRef}
                                className={`${dropOverlayStyles.dropZoneContent} ${dropOverlayStyles.folderDropTarget}`}
                                {...rootDropZoneHandlers}
                            >
                                <TracksDropHighlight
                                    active={isRootDropActive}
                                    dropZoneRef={rootDropZoneRef}
                                    scrollRef={trackMenuScrollRef}
                                    listRef={trackMenuListRef}
                                    rowsCount={trackMenuRows.length}
                                    trackItemsCount={defaultGroupItems?.length ?? 0}
                                />
                                <VirtualizedList
                                    ref={trackMenuListRef}
                                    outerRef={trackMenuScrollRef}
                                    items={trackMenuRows}
                                    renderItem={(row) => row}
                                    getItemKey={(row) => row.key}
                                    height={listHeight}
                                />
                                <Box className={dropOverlayStyles.dropZoneSpacer} />
                            </Box>
                        </Box>
                    ) : (
                        <Box
                            id={'se-track-menu'}
                            ref={rootDropZoneRef}
                            className={dropOverlayStyles.folderDropTarget}
                            {...rootDropZoneHandlers}
                        >
                            <TracksDropHighlight
                                active={isRootDropActive}
                                dropZoneRef={rootDropZoneRef}
                                scrollRef={rootDropZoneRef}
                            />
                            <Empty
                                title={t('empty_tracks')}
                                text={t('empty_tracks_description')}
                                folder={DEFAULT_GROUP_NAME}
                            />
                        </Box>
                    )}
                </>
            )}
        </Box>
    );
}
