import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as VisibleIcon } from '../../assets/icons/ic_show_on_map.svg';
import { ReactComponent as ExcludeIcon } from '../../assets/icons/ic_action_list_exclude_item.svg';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import { processDisplayTrack } from '../../manager/track/TracksManager';
import MakeTrackVisibleAction from './components/MakeTrackVisibleAction';
import { useRecentDataSaver } from '../../util/hooks/menu/useRecentDataSaver';

const SegmentActions = forwardRef(({ filteredStats, setFilteredStats, selectedSegmentInd, setOpenActions }, ref) => {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [displayTrack, setDisplayTrack] = useState(null); // null -> true/false -> null
    const recentSaver = useRecentDataSaver();

    const file = ctx.listFiles.uniqueFiles.find((file) => file.name === filteredStats[selectedSegmentInd].name);

    useEffect(() => {
        if (displayTrack === true || displayTrack === false) {
            processDisplayTrack({
                showOnMap: displayTrack,
                visible: displayTrack,
                file,
                ctx,
                fileStorage: ctx.gpxFiles,
                setFileStorage: ctx.setGpxFiles,
                recentSaver,
            }).then();
            setDisplayTrack(null);
        }
    }, [displayTrack]);

    async function openTrack() {
        processDisplayTrack({
            visible: true,
            showOnMap: true,
            showInfo: true,
            zoomToTrack: false,
            file,
            ctx,
            fileStorage: ctx.gpxFiles,
            setFileStorage: ctx.setGpxFiles,
            recentSaver,
        }).then();
    }

    function excludeSegment() {
        const excludedSegment = filteredStats[selectedSegmentInd];
        if (!excludedSegment) {
            return;
        }
        ctx.setExcludedSegments((prev) => new Set([...prev, `${excludedSegment.name} ${excludedSegment.trackInd}`]));
        const newFilteredStats = filteredStats.filter((_, i) => i !== selectedSegmentInd);
        setFilteredStats(newFilteredStats);
        setOpenActions(false);
    }

    return (
        <>
            <Box ref={ref}>
                <Paper className={styles.actions}>
                    <MenuItem className={styles.action} onClick={openTrack}>
                        <ListItemIcon className={styles.iconAction}>
                            <VisibleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('shared_string_open_track')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                    <MakeTrackVisibleAction
                        ctx={ctx}
                        track={file}
                        setDisplayTrack={setDisplayTrack}
                        setOpenActions={setOpenActions}
                    />
                    <Divider className={styles.dividerActions} />
                    <MenuItem className={styles.action} onClick={excludeSegment}>
                        <ListItemIcon className={styles.iconAction}>
                            <ExcludeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('web:exclude')}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                </Paper>
            </Box>
        </>
    );
});

SegmentActions.displayName = 'SegmentActions';
export default SegmentActions;
