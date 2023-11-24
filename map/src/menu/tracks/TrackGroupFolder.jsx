import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import CloudTrackItem from './CloudTrackItem';
import CloudTrackGroup from './CloudTrackGroup';
import { Box } from '@mui/material';
import SortActions from './actions/SortActions';
import AppContext from '../../context/AppContext';
import { ReactComponent as TimeIcon } from '../../assets/icons/ic_action_time.svg';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import SortMenu from './actions/SortMenu';
import { findGroupByName, updateLoadingTracks } from '../../manager/track/TracksManager';
import TracksHeader from './actions/TracksHeader';
import Empty from '../errors/Empty';
import { EMPTY_FILE_NAME } from '../../manager/track/SaveTrackManager';
import TrackLoading from './TrackLoading';

export default function TrackGroupFolder({ folder }) {
    const ctx = useContext(AppContext);

    const [group, setGroup] = useState(folder);
    const [openSort, setOpenSort] = useState(false);
    const [sortFiles, setSortFiles] = useState([]);
    const [sortGroups, setSortGroups] = useState([]);
    const [sortIcon, setSortIcon] = useState(<TimeIcon />);
    const [sortName, setSortName] = useState('Last modified');
    const [selectedSort, setSelectedSort] = useState(null);
    const anchorEl = useRef(null);
    const [, height] = useWindowSize();

    useEffect(() => {
        if (ctx.tracksGroups) {
            let found = findGroupByName(ctx.tracksGroups, group.fullName);
            if (ctx.openTrackGroups && ctx.openTrackGroups.length > 0) {
                ctx.openTrackGroups[ctx.openTrackGroups.length - 1] = found;
                ctx.setOpenTrackGroups([...ctx.openTrackGroups]);
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
                {group && (
                    <TracksHeader
                        trackGroup={group}
                        sortIcon={sortIcon}
                        sortName={sortName}
                        setOpenSort={setOpenSort}
                        anchorEl={anchorEl}
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
                <SortMenu
                    openSort={openSort}
                    setOpenSort={setOpenSort}
                    anchorEl={anchorEl}
                    actions={
                        <SortActions
                            files={group.groupFiles}
                            setSortFiles={setSortFiles}
                            groups={group.subfolders}
                            setSortGroups={setSortGroups}
                            setOpenSort={setOpenSort}
                            selectedSort={selectedSort}
                            setSelectedSort={setSelectedSort}
                            setSortIcon={setSortIcon}
                            setSortName={setSortName}
                        />
                    }
                />
            </Box>
            {group.realSize === 0 && ctx.trackLoading?.length === 0 && (
                <Empty title={'Empty folder'} text={"This folder doesn't have any track yet"} folder={group.fullName} />
            )}
        </>
    );
}
