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
import VisibleTracks, { getCountVisibleTracks } from '../visibletracks/VisibleTracks';
import { useTranslation } from 'react-i18next';
import SmartFolder from '../components/SmartFolder';
import LoginContext from '../../context/LoginContext';
import { SHARE_TYPE } from '../share/shareConstants';
import TrackGroupFolder from './TrackGroupFolder';

export const DEFAULT_SORT_METHOD = 'time';

export default function TracksMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const [defaultGroup, setDefaultGroup] = useState(null);
    const [sortFiles, setSortFiles] = useState([]);
    const [sortGroups, setSortGroups] = useState([]);
    const [, height] = useWindowSize();

    const { t } = useTranslation();

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

    // open visible tracks
    if (ctx.openVisibleMenu) {
        return <VisibleTracks />;
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
        <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
            {ltx.loginUser && (
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
                    {hasFiles ? (
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
                                onClick={() => ctx.setOpenVisibleMenu(true)}
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
                            {!isEmpty(ctx.shareWithMeFiles?.tracks) && (
                                <SmartFolder type={'share'} subtype={'track'} files={ctx.shareWithMeFiles?.tracks} />
                            )}
                            {ctx.tracksGroups &&
                                (sortGroups && sortGroups.length > 0 ? sortGroups : ctx.tracksGroups)
                                    .filter((g) => g.name !== DEFAULT_GROUP_NAME)
                                    .map((group, index) => {
                                        return <CloudTrackGroup key={group.name} index={index} group={group} />;
                                    })}
                            {ctx.trackLoading?.length > 0 &&
                                ctx.trackLoading.map((lt) => {
                                    return <TrackLoading key={lt} name={lt} />;
                                })}
                            {defaultGroupItems}
                        </Box>
                    ) : (
                        <Box id={'se-track-menu'}>
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
