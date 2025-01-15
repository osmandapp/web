import React, { useContext, useEffect, useMemo, useState } from 'react';
import CloudTrackItem from './CloudTrackItem';
import CloudTrackGroup from './CloudTrackGroup';
import { Box } from '@mui/material';
import AppContext from '../../context/AppContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
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
import { isEmpty } from 'lodash';
import { DEFAULT_SORT_METHOD } from './TracksMenu';
import Loading from '../errors/Loading';

export default function TrackGroupFolder({ folder = null, smartf = null }) {
    const ctx = useContext(AppContext);

    const [group, setGroup] = useState(folder);
    const [sortFiles, setSortFiles] = useState([]);
    const [sortGroups, setSortGroups] = useState([]);
    const [, height] = useWindowSize();
    const [processingGroup, setProcessingGroup] = useState(false);

    // update group after changing or deleting inner tracks
    useEffect(() => {
        if (ctx.tracksGroups && folder) {
            let found = findGroupByName(ctx.tracksGroups, group.fullName);
            if (ctx.openGroups && ctx.openGroups.length > 0) {
                const updatedOpenGroups = [...ctx.openGroups];
                updatedOpenGroups[updatedOpenGroups.length - 1] = found;
                ctx.setOpenGroups(updatedOpenGroups);
                setGroup({ ...found });
            }
        }
    }, [ctx.tracksGroups]);

    useEffect(() => {
        if (smartf) {
            setProcessingGroup(true);
            const trackGroups = createTrackGroups(smartf.files);
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
    }, [smartf, ctx.tracksGroups]);

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

    return (
        <>
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
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
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ overflowX: 'hidden', overflowY: 'auto !important', maxHeight: `${height - 120}px` }}
                >
                    {groupItems}
                    {ctx.trackLoading?.length > 0 &&
                        ctx.trackLoading.map((lt) => {
                            return <TrackLoading key={lt} name={lt} />;
                        })}
                    {trackItems}
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
