import React, { useRef, useState } from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { ReactComponent as SegmentIcon } from '../../assets/icons/ic_action_gpx_width_bold.svg';
import SimpleDivider from '../../frame/components/dividers/SimpleDivider';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import ThreeDotsButton from '../../frame/components/btns/ThreeDotsButton';
import ActionsMenu from '../actions/ActionsMenu';
import SegmentActions from '../actions/SegmentActions';
import styles from './trackanalyzer.module.css';
import SegmentName from './SegmentName';
import Statistics from './Statistics';

export default function TrackSegmentItem({ segment, index, filteredStats, setFilteredStats }) {
    const anchorEl = useRef(null);
    const [openActions, setOpenActions] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpand = (e) => {
        e.stopPropagation();
        setIsExpanded((prev) => !prev);
    };

    return (
        <>
            <Box key={`${segment.name}-${index}`}>
                {index !== 0 && <ThickDivider />}
                <MenuItem className={styles.tracksSelectItem} onClick={toggleExpand}>
                    <ListItemIcon sx={{ fill: segment.color }} className={styles.segmentIcon}>
                        <SegmentIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography
                            variant="inherit"
                            noWrap
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <SegmentName segment={segment} />
                            <ThreeDotsButton
                                name={'action_menu_group'}
                                tip={'shared_string_menu'}
                                id={`se-actions-${segment.name}`}
                                anchorEl={anchorEl}
                                setOpenActions={setOpenActions}
                            />
                        </Typography>
                    </ListItemText>
                </MenuItem>
                <SimpleDivider />
                <ActionsMenu
                    open={openActions}
                    setOpen={setOpenActions}
                    anchorEl={anchorEl}
                    actions={
                        <SegmentActions
                            filteredStats={filteredStats}
                            setFilteredStats={setFilteredStats}
                            selectedSegmentInd={index}
                            setOpenActions={setOpenActions}
                        />
                    }
                />
            </Box>
            {isExpanded && <Statistics stats={segment.stats} />}
        </>
    );
}
