import React, { useState, useContext, useEffect, useMemo } from 'react';
import AppContext from '../../context/AppContext';
import CloudTrackGroup from './CloudTrackGroup';
import { isEmpty } from 'lodash';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import CloudTrackItem from './CloudTrackItem';
import { DEFAULT_GROUP_NAME, updateLoadingTracks } from '../../manager/track/TracksManager';
import Empty from '../errors/Empty';
import Loading from '../errors/Loading';
import GroupHeader from '../actions/GroupHeader';
import TrackLoading from './TrackLoading';
import { doSort } from '../actions/SortActions';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as VisibleIcon } from '../../assets/icons/ic_show_on_map.svg';
import { getCountVisibleTracks } from '../visibletracks/VisibleTracks';
import { useTranslation } from 'react-i18next';

export default function TracksMenu({ setOpenVisibleMenu }) {
    const ctx = useContext(AppContext);

    const [defaultGroup, setDefaultGroup] = useState(null);
    const [sortFiles, setSortFiles] = useState([]);
    const [sortGroups, setSortGroups] = useState([]);
    const [, height] = useWindowSize();
    const { t } = useTranslation();

    // get gpx files and create groups
    useEffect(() => {
        if (!isEmpty(ctx.tracksGroups)) {
            let defGroup = ctx.tracksGroups.find((g) => g.name === DEFAULT_GROUP_NAME);
            setDefaultGroup(defGroup ?? null);
            // sort default track group
            if (ctx.selectedSort?.tracks && ctx.selectedSort.tracks[DEFAULT_GROUP_NAME]) {
                doSort({
                    method: ctx.selectedSort.tracks[DEFAULT_GROUP_NAME],
                    setSortFiles,
                    setSortGroups,
                    files: defGroup.groupFiles,
                    groups: ctx.tracksGroups,
                });
            }
        }
    }, [ctx.tracksGroups]);

    const defaultGroupItems = useMemo(() => {
        if (defaultGroup) {
            const items = [];
            const listTracks = sortFiles.length > 0 ? sortFiles : defaultGroup.groupFiles;
            listTracks.map((file, index) => {
                const isLastItem = !isEmpty(listTracks) ? index === listTracks.length - 1 : false;
                items.push(<CloudTrackItem key={'cloudtrack-' + file.name} file={file} isLastItem={isLastItem} />);
            });
            return items;
        }
    }, [defaultGroup?.files, defaultGroup?.files.length, sortFiles]);

    useEffect(() => {
        if (defaultGroup) {
            updateLoadingTracks(ctx, defaultGroup.groupFiles);
        }
    }, [defaultGroup?.groupFiles]);

    return (
        <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
            {ctx.loginUser && (
                <GroupHeader
                    type="tracks"
                    trackGroup={defaultGroup}
                    setSortGroups={setSortGroups}
                    setSortFiles={setSortFiles}
                />
            )}
            {ctx.gpxLoading ? (
                <Loading />
            ) : (
                <>
                    {ctx.tracksGroups?.length > 0 || defaultGroup?.length > 0 ? (
                        <Box
                            id={'se-track-menu'}
                            minWidth={ctx.infoBlockWidth}
                            maxWidth={ctx.infoBlockWidth}
                            sx={{
                                overflowX: 'hidden !important',
                                overflowY: 'auto !important',
                                maxHeight: `${height - 120}px`,
                            }}
                        >
                            <MenuItem
                                id={'se-visible-tracks-menu'}
                                divider
                                className={styles.item}
                                onClick={() => setOpenVisibleMenu(true)}
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
                            </MenuItem>
                            {ctx.tracksGroups &&
                                (sortGroups.length > 0 ? sortGroups : ctx.tracksGroups)
                                    .filter((g) => g.name !== DEFAULT_GROUP_NAME)
                                    .map((group, index) => {
                                        return <CloudTrackGroup key={group.name + index} index={index} group={group} />;
                                    })}
                            {ctx.trackLoading?.length > 0 &&
                                ctx.trackLoading.map((lt) => {
                                    return <TrackLoading key={lt} name={lt} />;
                                })}
                            {defaultGroupItems}
                        </Box>
                    ) : (
                        <Empty
                            title={'You don’t have track files'}
                            text={'You can import, create track files using OsmAnd.'}
                            folder={DEFAULT_GROUP_NAME}
                        />
                    )}
                </>
            )}
        </Box>
    );
}
