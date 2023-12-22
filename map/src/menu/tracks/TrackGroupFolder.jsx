import React, { useContext, useEffect, useMemo, useState } from 'react';
import CloudTrackItem from './CloudTrackItem';
import CloudTrackGroup from './CloudTrackGroup';
import { Box } from '@mui/material';
import AppContext from '../../context/AppContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { findGroupByName, updateLoadingTracks } from '../../manager/track/TracksManager';
import GroupHeader from '../actions/GroupHeader';
import Empty from '../errors/Empty';
import { EMPTY_FILE_NAME } from '../../manager/track/SaveTrackManager';
import TrackLoading from './TrackLoading';
import { doSort } from '../actions/SortActions';

export default function TrackGroupFolder({ folder }) {
    const ctx = useContext(AppContext);

    const [group, setGroup] = useState(folder);
    const [sortFiles, setSortFiles] = useState([]);
    const [sortGroups, setSortGroups] = useState([]);
    const [, height] = useWindowSize();

    useEffect(() => {
        if (ctx.tracksGroups) {
            let found = findGroupByName(ctx.tracksGroups, group.fullName);
            if (ctx.openGroups && ctx.openGroups.length > 0) {
                ctx.openGroups[ctx.openGroups.length - 1] = found;
                ctx.setOpenGroups([...ctx.openGroups]);
                if (folder) {
                    setGroup({ ...found });
                }
            }
        }
    }, [ctx.tracksGroups]);

    useEffect(() => {
        if (folder) {
            setGroup({ ...folder });
            setSortFiles([]);
            setSortGroups([]);
        }

        // sort track group
        if (ctx.selectedSort?.tracks && ctx.selectedSort.tracks[folder.fullName]) {
            doSort({
                method: ctx.selectedSort.tracks[folder.fullName],
                setSortFiles,
                setSortGroups,
                files: group.groupFiles,
                groups: group.subfolders,
            });
        }
    }, [folder]);

    const trackItems = useMemo(() => {
        const items = [];
        (sortFiles?.length > 0 ? sortFiles : group.groupFiles).map((file) => {
            if (!file.name.endsWith(EMPTY_FILE_NAME) && file.filesize !== 0) {
                items.push(<CloudTrackItem key={'cloudtrack-' + file.name} file={file} />);
            }
        });
        return items;
    }, [group.groupFiles, group.groupFiles.length, sortFiles]);

    useEffect(() => {
        if (group) {
            updateLoadingTracks(ctx, group.groupFiles);
        }
    }, [group?.groupFiles]);

    const groupItems = useMemo(() => {
        const items = [];
        (sortGroups?.length > 0 ? sortGroups : group.subfolders).map((g, index) => {
            items.push(<CloudTrackGroup key={g.name + index} index={index} group={g} />);
        });
        return items;
    }, [group.subfolders, group.subfolders.length, sortGroups]);

    return (
        <>
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                {group && <GroupHeader trackGroup={group} setSortGroups={setSortGroups} setSortFiles={setSortFiles} />}
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
            {group.realSize === 0 && ctx.trackLoading?.length === 0 && (
                <Empty title={'Empty folder'} text={"This folder doesn't have any track yet"} folder={group.fullName} />
            )}
        </>
    );
}
