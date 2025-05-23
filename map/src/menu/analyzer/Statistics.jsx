import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from './trackanalyzer.module.css';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import SimpleDivider from '../../frame/components/dividers/SimpleDivider';
import React from 'react';

export default function Statistics({ stats }) {
    const StatItems = (items, isLastGroup, name) => (
        <Box>
            {items.map((item, index) => (
                <Box key={index}>
                    <MenuItem className={styles.statItem}>
                        <ListItemIcon className={styles.icon}>{item.icon}</ListItemIcon>
                        <ListItemText
                            primary={
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="inherit" noWrap>
                                        {item.label}
                                    </Typography>
                                    <Box display="flex" justifyContent="flex-end" alignItems="center">
                                        {!(item.isMax && item.isMin) && // If both are true, show nothing
                                            (item.isMax ? (
                                                name === 'other' ? (
                                                    <Typography sx={{ mr: 0.5 }}>🔺</Typography>
                                                ) : (
                                                    <Typography sx={{ mr: 0.5 }}>🏆</Typography>
                                                )
                                            ) : item.isMin ? (
                                                <Typography sx={{ mr: 0.5 }}>🔻</Typography>
                                            ) : null)}
                                        <Typography
                                            className={styles.statItemValue}
                                            noWrap
                                            sx={{ ...(!item.unit && { mr: -1 }) }}
                                        >
                                            {item.value}
                                        </Typography>
                                        <Typography className={styles.statItemValue2} noWrap sx={{ mt: '2px' }}>
                                            &nbsp;{item.unit}
                                        </Typography>
                                    </Box>
                                </Box>
                            }
                        />
                    </MenuItem>
                    {index < items.length - 1 && <DividerWithMargin dashed={true} />}
                </Box>
            ))}
            {stats.isLastGroup && !isLastGroup && items.length !== 0 && <SimpleDivider />}
        </Box>
    );

    return (
        <>
            {stats && (
                <Box>
                    {StatItems(stats.speed, stats.isLastGroup === 'speed', 'speed')}
                    {StatItems(stats.altitude, stats.isLastGroup === 'altitude', 'altitude')}
                    {StatItems(stats.other, stats.isLastGroup === 'other', 'other')}
                </Box>
            )}
        </>
    );
}
