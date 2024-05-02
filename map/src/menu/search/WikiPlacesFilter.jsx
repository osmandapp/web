import React, { forwardRef, useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { Box, Checkbox, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import searchStyles from '../search/search.module.css';
import filters from '../../resources/wiki_data_filters.json';
import { getIcon, getSvgIcon } from '../../infoblock/components/wpt/WptTagsProvider';

const WikiPlacesFilter = forwardRef((_, ref) => {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [icons, setIcons] = useState({});

    const handleToggleFilter = (filter) => {
        const newSelection = new Set(ctx.searchSettings.selectedFilters);
        if (newSelection.has(filter)) {
            newSelection.delete(filter);
        } else {
            newSelection.add(filter);
        }
        ctx.setSearchSettings({ ...ctx.searchSettings, selectedFilters: newSelection });
    };

    const handleSelectAll = () => {
        if (ctx.searchSettings.selectedFilters.size === filters.length) {
            ctx.setSearchSettings({ ...ctx.searchSettings, selectedFilters: new Set() });
        } else {
            ctx.setSearchSettings({ ...ctx.searchSettings, selectedFilters: new Set(filters) });
        }
    };

    useEffect(() => {
        async function loadIcons() {
            const loadedIcons = {};
            for (const filter of filters) {
                const svgData = await getSvgIcon({ ctx, icon: filter });
                loadedIcons[filter] = getIcon(svgData, 24, '#727272');
            }
            setIcons(loadedIcons);
        }

        loadIcons().then();
    }, []);

    function getIconStyle(filter) {
        if (ctx.searchSettings?.selectedFilters.has(filter)) {
            return searchStyles.filterIconSelected;
        }
        return searchStyles.filterIcon;
    }

    return (
        <>
            <Box ref={ref}>
                <Paper className={searchStyles.filter}>
                    <MenuItem className={searchStyles.filterTitle}>
                        <Typography className={searchStyles.filterTitleText}>{t('search_categories')}</Typography>
                    </MenuItem>
                    <MenuItem className={searchStyles.filterItem} divider>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                {t('shared_string_show_all')}
                            </Typography>
                        </ListItemText>
                        <Checkbox
                            checked={ctx.searchSettings?.selectedFilters.size === filters.length}
                            onChange={handleSelectAll}
                        />
                    </MenuItem>
                    {filters?.map((f, index) => (
                        <MenuItem key={index} className={searchStyles.filterItem}>
                            <ListItemIcon className={getIconStyle(f)}>{icons[f]}</ListItemIcon>
                            <ListItemText>
                                <Typography variant="inherit" className={styles.actionName} noWrap>
                                    {t('poi_' + f)}
                                </Typography>
                            </ListItemText>
                            <Checkbox
                                checked={ctx.searchSettings?.selectedFilters.has(f)}
                                onChange={() => handleToggleFilter(f)}
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
