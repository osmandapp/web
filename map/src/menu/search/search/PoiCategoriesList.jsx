import { AppBar, Box, IconButton, ListItemIcon, ListItemText, MenuItem, Toolbar, Typography } from '@mui/material';
import CustomInput from './CustomInput';
import React from 'react';
import { useTranslation } from 'react-i18next';
import headerStyles from '../../trackfavmenu.module.css';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import gStyles from '../../gstylesmenu.module.css';
import styles from '../search.module.css';
import Loading from '../../errors/Loading';
import PoiManager from '../../../manager/PoiManager';
import { SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { CATEGORY_KEY_NAME, MAIN_CATEGORY_KEY_NAME } from '../../../infoblock/components/wpt/WptTagsProvider';
import { getFirstSubstring } from './SearchResultItem';
import EmptySearch from '../../errors/EmptySearch';

export default function PoiCategoriesList({
    categories,
    categoriesIcons,
    setSearchValue,
    setOpenCategories,
    setOpenSearchResults,
    setIsMainSearchScreen,
    loadingIcons,
}) {
    const { t } = useTranslation();

    const sortedCategories = categories?.sort((a, b) => {
        const nameA = PoiManager.formattingPoiType(t(`poi_${a[CATEGORY_KEY_NAME]}`)).toLowerCase();
        const nameB = PoiManager.formattingPoiType(t(`poi_${b[CATEGORY_KEY_NAME]}`)).toLowerCase();
        return nameA.localeCompare(nameB);
    });

    function getCatName(category) {
        if (category.includes('name:')) {
            const [mainPart, subPart] = category.split(':');
            return getFirstSubstring(t(`poi_${mainPart}`)) + ' (' + t(`lang_${subPart}`) + ')';
        } else if (category.includes('lang:')) {
            const preparedCategory = category.replace(':', '_');
            return getFirstSubstring(t(`poi_${preparedCategory}`));
        }
        return getFirstSubstring(t(`poi_${category}`));
    }

    return (
        <Box>
            <AppBar
                id={'se-search-categories-list'}
                position="static"
                className={headerStyles.appbar}
                sx={{ boxShadow: 'none !important' }}
            >
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        className={gStyles.icon}
                        onClick={() => {
                            setOpenCategories(false);
                            setIsMainSearchScreen(true);
                        }}
                    >
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        {t('search_categories')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <CustomInput setSearchValue={setSearchValue} type={SEARCH_TYPE_CATEGORY} />
            {sortedCategories?.length === 0 && <EmptySearch />}
            {loadingIcons ? (
                <Loading />
            ) : (
                <Box sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
                    {sortedCategories?.map((item, key) => {
                        const category = item[CATEGORY_KEY_NAME];
                        const parentCategory = item[MAIN_CATEGORY_KEY_NAME];
                        const catName = getCatName(category);
                        let mainCatName;
                        if (parentCategory) {
                            mainCatName = getCatName(parentCategory);
                        }
                        return (
                            <MenuItem
                                id={'se-search-categories-list-item-' + catName}
                                className={styles.categoriesListItem}
                                key={key}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSearchValue({
                                        query: catName,
                                        type: SEARCH_TYPE_CATEGORY,
                                    });
                                    setOpenSearchResults(true);
                                    setOpenCategories(false);
                                }}
                            >
                                <ListItemIcon>{categoriesIcons[category]}</ListItemIcon>
                                <ListItemText>
                                    <MenuItemWithLines className={styles.titleText} name={catName} maxLines={2} />
                                    {parentCategory && (
                                        <MenuItemWithLines
                                            className={styles.placeTypes}
                                            name={mainCatName}
                                            maxLines={2}
                                        />
                                    )}
                                </ListItemText>
                            </MenuItem>
                        );
                    })}
                </Box>
            )}
        </Box>
    );
}
