import React, { forwardRef, useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { Box, Checkbox, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../../trackfavmenu.module.css';
import searchStyles from '../search.module.css';
import filters from '../../../resources/wiki_data_filters.json';

const ALL_PLACES = '0';

const WikiPlacesFilter = forwardRef((_, ref) => {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const handleToggleFilter = (filter) => {
        const newSelection = new Set(ctx.searchSettings.selectedFilters);
        if (newSelection.has(filter)) {
            if (filter === ALL_PLACES) {
                newSelection.clear();
            } else {
                newSelection.delete(filter);
            }
        } else {
            if (newSelection.has(ALL_PLACES)) {
                newSelection.delete(ALL_PLACES);
            }
            newSelection.add(filter);
        }
        ctx.setSearchSettings({ ...ctx.searchSettings, selectedFilters: newSelection });
    };

    return (
        <>
            <Box ref={ref}>
                <Paper className={searchStyles.filter}>
                    <MenuItem className={searchStyles.filterTitle}>
                        <Typography className={searchStyles.filterTitleText}>{t('search_categories')}</Typography>
                    </MenuItem>
                    {Object.entries(filters)?.map(([key, value]) => (
                        <MenuItem key={key} className={searchStyles.filterItem}>
                            <ListItemText>
                                <Typography variant="inherit" className={styles.actionName} noWrap>
                                    {value}
                                </Typography>
                            </ListItemText>
                            <Checkbox
                                checked={
                                    ctx.searchSettings?.selectedFilters.has(key) ||
                                    ctx.searchSettings?.selectedFilters.has(ALL_PLACES)
                                }
                                onChange={() => handleToggleFilter(key)}
                            />
                        </MenuItem>
                    ))}
                </Paper>
            </Box>
        </>
    );
});

WikiPlacesFilter.displayName = 'WikiPlacesFilter';
export default WikiPlacesFilter;
