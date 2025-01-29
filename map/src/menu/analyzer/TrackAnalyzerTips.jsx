import ThickDivider from '../components/dividers/ThickDivider';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { ReactComponent as DestIcon } from '../../assets/icons/ic_action_point_destination.svg';
import { ReactComponent as SortIcon } from '../../assets/icons/ic_action_sort_by_name_ascending.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/ic_action_filter.svg';
import styles from './trackanalyzer.module.css';
import DividerWithMargin from '../components/dividers/DividerWithMargin';
import React from 'react';

export default function TrackAnalyzerTips() {
    return (
        <>
            <ThickDivider />
            <Box>
                <MenuItem className={styles.tipsItem} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon className={styles.icon}>
                        <DestIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography whiteSpace="normal">
                            Select one or two points on the map to find tracks passing through them and view analytics.
                        </Typography>
                    </ListItemText>
                </MenuItem>
            </Box>
            <ThickDivider />
            <Box>
                <MenuItem className={styles.tipsItem} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon className={styles.icon}>
                        <SortIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography whiteSpace="normal">Sort button allows to sort tracks by any data type</Typography>
                    </ListItemText>
                </MenuItem>
                <DividerWithMargin dashed={true} />
                <MenuItem className={styles.tipsItem} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon className={styles.icon}>
                        <FilterIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography whiteSpace="normal">
                            Click on <strong>Fields</strong> button to set visible data fields
                        </Typography>
                    </ListItemText>
                </MenuItem>
                <ThickDivider />
            </Box>
        </>
    );
}
