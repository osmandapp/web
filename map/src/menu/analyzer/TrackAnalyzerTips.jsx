import ThickDivider from '../../frame/components/dividers/ThickDivider';
import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { ReactComponent as DestIcon } from '../../assets/icons/ic_action_point_destination.svg';
import { ReactComponent as SortIcon } from '../../assets/icons/ic_action_sort_by_name_ascending.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/ic_action_filter.svg';
import styles from './trackanalyzer.module.css';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function TrackAnalyzerTips() {
    const { t } = useTranslation();

    return (
        <>
            <ThickDivider />
            <Box>
                <MenuItem className={styles.tipsItem} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon className={styles.icon}>
                        <DestIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography whiteSpace="normal">{t('web:track_analyzer_desc')}</Typography>
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
                        <Typography whiteSpace="normal">{t('web:track_analyzer_tips_1')}</Typography>
                    </ListItemText>
                </MenuItem>
                <DividerWithMargin dashed={true} />
                <MenuItem className={styles.tipsItem} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon className={styles.icon}>
                        <FilterIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography whiteSpace="normal">
                            <Trans i18nKey="web:track_analyzer_tips_2" components={{ strong: <strong /> }} />
                        </Typography>
                    </ListItemText>
                </MenuItem>
            </Box>
        </>
    );
}
