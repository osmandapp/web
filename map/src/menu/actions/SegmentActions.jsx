import React, { forwardRef, useContext } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as VisibleIcon } from '../../assets/icons/ic_show_on_map.svg';
import { ReactComponent as ExcludeIcon } from '../../assets/icons/ic_action_list_exclude_item.svg';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import { processDisplayTrack } from '../../manager/track/TracksManager';

const SegmentActions = forwardRef(({ filteredStats, setFilteredStats, selectedSegmentInd, setOpenActions }, ref) => {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    async function openTrack() {
        const file = ctx.listFiles.uniqueFiles.find((file) => file.name === filteredStats[selectedSegmentInd].name);
        processDisplayTrack({
            visible: true,
            showOnMap: true,
            showInfo: true,
            zoomToTrack: false,
            file,
            ctx,
            fileStorage: ctx.gpxFiles,
            setFileStorage: ctx.setGpxFiles,
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
