import { Box, Select, Switch, Typography, FormControl, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import styles from '../frame.module.css';

import { ReactComponent as SegmentIcon } from '../../../assets/icons/ic_action_polygom_dark.svg';
import SegmentName from '../../../menu/analyzer/SegmentName';
import DividerWithMargin from '../../../menu/components/dividers/DividerWithMargin';
import AppContext from '../../../context/AppContext';

export default function SegmentSelector({ currentGraph, segmentVisibility, toggleSegmentVisibility }) {
    const ctx = useContext(AppContext);

    const [open, setOpen] = useState(false);
    const [segments, setSegments] = useState(currentGraph.object);

    const flattenedVisibility = Object.values(segmentVisibility).flat();
    const visibleCount = flattenedVisibility.filter((visible) => visible).length;
    const totalCount = flattenedVisibility.length;

    useEffect(() => {
        if (ctx.sortedSegments) {
            const filtered = ctx.sortedSegments.filter(
                (segment) => !ctx.excludedSegments.has(`${segment.name} ${segment.trackInd}`)
            );
            setSegments(
                filtered.reduce((acc, segment) => {
                    const trackName = segment.name;
                    if (!acc[trackName]) {
                        acc[trackName] = [];
                    }
                    acc[trackName].push(segment);
                    return acc;
                }, {})
            );
        }
    }, [ctx.sortedSegments, ctx.excludedSegments]);

    return (
        <FormControl fullWidth>
            <Select
                variant="filled"
                sx={{
                    '& .MuiFilledInput-input': {
                        p: '1px 4px 0px 12px',
                    },
                    '&::before': {
                        borderBottom: 'none',
                    },
                    '&::after': {
                        borderBottom: 'none',
                    },
                    '&:hover:not(.Mui-disabled)::before': {
                        borderBottom: 'none',
                    },
                }}
                MenuProps={{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                    disablePortal: true,
                    PaperProps: {
                        sx: {
                            maxHeight: 400,
                            overflowY: 'auto',
                        },
                    },
                }}
                value=""
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                displayEmpty
                renderValue={() => (
                    <MenuItem className={styles.graphSelectorItem}>
                        <ListItemIcon className={styles.graphIcon}>
                            <SegmentIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit">{`${visibleCount}/${totalCount}`}</Typography>
                        </ListItemText>
                    </MenuItem>
                )}
            >
                {Object.entries(segments).map(([trackName, trackSegments], trackIndex, trackArray) => (
                    <Box key={trackName}>
                        {trackSegments.map((segment, index) => {
                            const isLast = trackIndex === trackArray.length - 1 && index === trackSegments.length - 1;

                            return (
                                <Box key={`${trackName}-segment-${index}`}>
                                    <MenuItem>
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
                                                <Switch
                                                    checked={segmentVisibility[trackName]?.[index]}
                                                    onChange={() => toggleSegmentVisibility(trackName, index)}
                                                />
                                            </Typography>
                                        </ListItemText>
                                    </MenuItem>
                                    {!isLast && <DividerWithMargin />}
                                </Box>
                            );
                        })}
                    </Box>
                ))}
            </Select>
        </FormControl>
    );
}
