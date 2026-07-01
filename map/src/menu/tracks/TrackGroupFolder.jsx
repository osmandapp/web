import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import CloudTrackItem from './CloudTrackItem';
import CloudTrackGroup from './CloudTrackGroup';
import { Box } from '@mui/material';
import AppContext from '../../context/AppContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { useElementHeight } from '../../util/hooks/useElementHeight';
import VirtualizedList from '../../frame/components/VirtualizedList';
import { HEADER_SIZE } from '../../manager/GlobalManager';
import gStyles from '../gstylesmenu.module.css';
import {
    createTrackGroups,
    DEFAULT_GROUP_NAME,
    EMPTY_FILE_NAME,
    findGroupByName,
    updateLoadingTracks,
} from '../../manager/track/TracksManager';
import GroupHeader from '../actions/GroupHeader';
import Empty from '../errors/Empty';
import TrackLoading from './TrackLoading';
import { doSort } from '../actions/SortActions';
import isEmpty from 'lodash-es/isEmpty';
import { DEFAULT_SORT_METHOD } from './TracksMenu';
import Loading from '../errors/Loading';
import { SMART_TYPE } from '../share/shareConstants';
import { populateSmartFolderFiles } from '../../manager/SmartFoldersManager';
import { useGpxFileDragClearZone, useGpxFileDragZone } from '../../util/hooks/useGpxFileDragZone';
import dropOverlayStyles from '../../frame/components/dropOverlay.module.css';
import TracksDropHighlight from '../../frame/components/TracksDropHighlight';

export default function TrackGroupFolder({ folder = null, smartf = null }) {
    const ctx = useContext(AppContext);
    const folderDragHandlers = useGpxFileDragZone(folder != null && folder.type !== SMART_TYPE && !smartf ? folder.fullName : null);
    const clearGpxDragTarget = useGpxFileDragClearZone();

    const [group, setGroup] = useState(folder);
    const [sortFiles, setSortFiles] = useState([]);
    const [sortGroups, setSortGroups] = useState([]);
    const [, height] = useWindowSize();
    const [listContainerRef, listHeight] = useElementHeight();
    const [processingGroup, setProcessingGroup] = useState(false);
    const folderScrollRef = useRef(null);
    const folderListRef = useRef(null);
    const folderDropZoneRef = useRef(null);

    // update group after changing or deleting inner tracks
    useEffect(() => {
        if (ctx.tracksGroups && folder) {
            let found = findGroupByName(ctx.tracksGroups, group.fullName);
            if (found) {
                if (found.type === SMART_TYPE) {
                    found = populateSmartFolderFiles(
                        found,
                        ctx.listFiles?.uniqueFiles,
                        ctx.smartFoldersCache,
                        ctx.setSmartFoldersCache
                    );
                }
                if (ctx.openGroups?.length > 0) {
                    const updatedOpenGroups = [...ctx.openGroups];
                    updatedOpenGroups[updatedOpenGroups.length - 1] = found;
                    ctx.setOpenGroups(updatedOpenGroups);
                    setGroup({ ...found });
                }
            }
        }
    }, [ctx.tracksGroups]);

    useEffect(() => {
        if (smartf) {
            setProcessingGroup(true);
            const trackGroups = createTrackGroups({ files: smartf.files, isSmartf: true, ctx });
            if (trackGroups.length > 0) {
                let found = findGroupByName(trackGroups, DEFAULT_GROUP_NAME);
                if (found) {
                    setProcessingGroup(false);
                    setGroup({ ...found });
                    setSortFiles([]);
                    setSortGroups([]);
                    sortTracks(folder);
                }
            }
        }
    }, [smartf]);

    useEffect(() => {
        if (folder) {
            setGroup({ ...folder });
            setSortFiles([]);
            setSortGroups([]);
        }
        sortTracks(folder);
    }, [folder]);

    function sortTracks(folder) {
        if (folder?.groupFiles?.length > 1 || folder?.subfolders?.length > 1) {
            doSort({
                method: ctx.selectedSort?.tracks?.[folder.fullName] ?? DEFAULT_SORT_METHOD,
                setSortFiles,
                setSortGroups,
                files: folder.groupFiles,
                groups: folder.subfolders,
            });
        }
    }

    const trackItems = useMemo(() => {
        const items = [];
        const listTracks = sortFiles?.length > 0 ? sortFiles : group?.groupFiles;
        if (listTracks && listTracks.length > 0) {
            listTracks.map((file, index) => {
                // 2 - count empty.ignore too
                const isLastItem =
                    !isEmpty(listTracks) && listTracks.length > 1 ? index === listTracks.length - 2 : false;
                if (!file.name.endsWith(EMPTY_FILE_NAME) && file.filesize !== 0) {
                    items.push(
                        <CloudTrackItem
                            key={'cloudtrack-' + file.name}
                            file={file}
                            isLastItem={isLastItem}
                            smartf={smartf}
                        />
                    );
                }
            });
            return items;
        }
    }, [group?.groupFiles, sortFiles]);

    useEffect(() => {
        if (group) {
            updateLoadingTracks(ctx, group.groupFiles);
        }
    }, [group?.groupFiles]);

    const groupItems = useMemo(() => {
        const items = [];
        const listGroups = sortGroups?.length > 0 ? sortGroups : group?.subfolders;
        if (listGroups && listGroups.length > 0) {
            listGroups.map((g, index) => {
                items.push(<CloudTrackGroup key={g.name} index={index} group={g} />);
            });
            return items;
        }
    }, [group?.subfolders, sortGroups]);

    function isEmptyFolder() {
        if (smartf && !group) {
            return false;
        }
        return (group?.realSize === 0 && ctx.trackLoading?.length === 0) || (!groupItems && !trackItems);
    }

    const isDropTarget = !!group && group.type !== SMART_TYPE && !smartf;
    const isFolderDropActive = isDropTarget && ctx.gpxFileDrag?.active && ctx.gpxFileDrag?.hoverFolder === group.fullName;

    const folderRows = useMemo(
        () => [
            ...(groupItems ?? []),
            ...(ctx.trackLoading?.length > 0 
                ? ctx.trackLoading
                       .filter((lt) => lt.folder === group?.fullName)
                       .map((lt) => <TrackLoading key={lt.name} name={lt.name} />) 
                : []),
            ...(trackItems ?? []),
        ],
        [groupItems, trackItems, ctx.trackLoading, group?.fullName]
    );

    return (
        <>
            <Box
                id={`se-tracks-folder`}
                className={gStyles.fixedColumn}
                minWidth={ctx.infoBlockWidth}
                maxWidth={ctx.infoBlockWidth}
                style={{ height: `${height - HEADER_SIZE}px` }}
                {...clearGpxDragTarget}
            >
                {group && (
                    <GroupHeader
                        type="tracks"
                        smartf={smartf}
                        trackGroup={group}
                        setSortGroups={setSortGroups}
                        setSortFiles={setSortFiles}
                    />
                )}
                <Box
                    ref={listContainerRef}
                    className={gStyles.scrollMainBlock}
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                >
                    <Box
                        ref={folderDropZoneRef}
                        className={`${dropOverlayStyles.dropZoneContent}${isDropTarget ? ` ${dropOverlayStyles.folderDropTarget}` : ''}`}
                        {...(isDropTarget ? folderDragHandlers : {})}
                    >
                        <TracksDropHighlight
                            active={isFolderDropActive}
                            dropZoneRef={folderDropZoneRef}
                            scrollRef={folderScrollRef}
                            listRef={folderListRef}
                            rowsCount={folderRows.length}
                            trackItemsCount={trackItems?.length ?? 0}
                        />
                        <VirtualizedList
                            ref={folderListRef}
                            outerRef={folderScrollRef}
                            items={folderRows}
                            renderItem={(row) => row}
                            getItemKey={(row) => row.key}
                            height={listHeight}
                        />
                        <Box className={dropOverlayStyles.dropZoneSpacer} />
                    </Box>
                </Box>
            </Box>
            {isEmptyFolder() && (
                <Empty
                    title={'Empty folder'}
                    text={"This folder doesn't have any track yet"}
                    folder={group?.fullName}
                />
            )}
            {processingGroup && <Loading />}
        </>
    );
}
