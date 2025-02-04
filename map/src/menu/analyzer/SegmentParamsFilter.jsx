import { Box, ListItemIcon, ListItemText, MenuItem, Paper, Switch, Typography } from '@mui/material';
import styles from './trackanalyzer.module.css';
import React, { forwardRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DividerWithMargin from '../components/dividers/DividerWithMargin';

const SegmentParamsFilter = forwardRef(
    ({ allStats, speedStats, altitudeStats, otherStats, activeSegmentParams, setActiveSegmentParams }, ref) => {
        const { t } = useTranslation();

        const [selectedFilters, setSelectedFilters] = useState(activeSegmentParams ?? new Set());

        useEffect(() => {
            setActiveSegmentParams(selectedFilters);
        }, [selectedFilters]);

        const handleToggleFilter = (filterKey) => {
            const updatedFilters = new Set(selectedFilters);
            if (updatedFilters.has(filterKey)) {
                updatedFilters.delete(filterKey);
            } else {
                updatedFilters.add(filterKey);
            }
            setSelectedFilters(updatedFilters);
        };

        const handleSelectAll = () => {
            if (selectedFilters.size === allStats.length) {
                setSelectedFilters(new Set());
            } else {
                setSelectedFilters(new Set(allStats.map((stat) => stat.label)));
            }
        };

        function getIconStyle(filter) {
            if (selectedFilters?.has(filter)) {
                return styles.filterIconSelected;
            }
            return styles.filterIcon;
        }

        return (
            <>
                <Box ref={ref}>
                    <Paper className={styles.filter}>
                        <MenuItem className={styles.filterTitle}>
                            <Typography className={styles.filterTitleText}>Visible parameters</Typography>
                        </MenuItem>
                        <MenuItem className={styles.filterItem} divider>
                            <ListItemText>
                                <Typography variant="inherit" className={styles.actionName} noWrap>
                                    {t('shared_string_show_all')}
                                </Typography>
                            </ListItemText>
                            <Switch checked={selectedFilters.size === allStats.length} onChange={handleSelectAll} />
                        </MenuItem>
                        {speedStats !== null &&
                            speedStats.map((stat, index) => (
                                <MenuItem key={index} className={styles.filterItem}>
                                    <ListItemIcon className={getIconStyle(stat.label)}>{stat.icon}</ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="inherit" noWrap>
                                            {stat.label}
                                        </Typography>
                                    </ListItemText>
                                    <Switch
                                        checked={selectedFilters.has(stat.label)}
                                        onChange={() => handleToggleFilter(stat.label)}
                                    />
                                </MenuItem>
                            ))}
                        <DividerWithMargin />
                        {altitudeStats !== null &&
                            altitudeStats.map((stat, index) => (
                                <MenuItem key={index} className={styles.filterItem}>
                                    <ListItemIcon className={getIconStyle(stat.label)}>{stat.icon}</ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="inherit" noWrap>
                                            {stat.label}
                                        </Typography>
                                    </ListItemText>
                                    <Switch
                                        checked={selectedFilters.has(stat.label)}
                                        onChange={() => handleToggleFilter(stat.label)}
                                    />
                                </MenuItem>
                            ))}
                        <DividerWithMargin />
                        {otherStats !== null &&
                            otherStats.map((stat, index) => (
                                <MenuItem key={index} className={styles.filterItem}>
                                    <ListItemIcon className={getIconStyle(stat.label)}>{stat.icon}</ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="inherit" noWrap>
                                            {stat.label}
                                        </Typography>
                                    </ListItemText>
                                    <Switch
                                        checked={selectedFilters.has(stat.label)}
                                        onChange={() => handleToggleFilter(stat.label)}
                                    />
                                </MenuItem>
                            ))}
                    </Paper>
                </Box>
            </>
        );
    }
);

SegmentParamsFilter.displayName = 'SegmentParamsFilter';
export default SegmentParamsFilter;
