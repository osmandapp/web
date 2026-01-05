import { AppBar, Box, IconButton, ListItemIcon, ListItemText, MenuItem, Toolbar, Typography } from '@mui/material';
import CustomInput from './CustomInput';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import headerStyles from '../../trackfavmenu.module.css';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import gStyles from '../../gstylesmenu.module.css';
import styles from '../search.module.css';
import Loading from '../../errors/Loading';
import PoiManager, { getCategoryName } from '../../../manager/PoiManager';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { CATEGORY_KEY_NAME } from '../../../infoblock/components/wpt/WptTagsProvider';
import { getFirstSubstring } from './SearchResultItem';
import EmptySearch from '../../errors/EmptySearch';
import { getPoiParentCategory } from '../../../manager/SearchManager';
import AppContext from '../../../context/AppContext';
import useSearchNav from '../../../util/hooks/search/useSearchNav';
import { SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';

export default function PoiCategoriesList({ categories, setSearchValue, categoriesIcons, loadingIcons }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const { navigateToSearchMenu, navigateToSearchResults } = useSearchNav();

    const sortedCategories = categories?.sort((a, b) => {
        const nameA = PoiManager.formattingPoiType(t(`poi_${a[CATEGORY_KEY_NAME]}`)).toLowerCase();
        const nameB = PoiManager.formattingPoiType(t(`poi_${b[CATEGORY_KEY_NAME]}`)).toLowerCase();
        return nameA.localeCompare(nameB);
    });

    return (
        <Box className={gStyles.scrollMainBlock}>
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
                            ctx.setPoiCatMenu(false);
                            ctx.setSearchSettings({ ...ctx.searchSettings, showExploreMarkers: true });
                            navigateToSearchMenu();
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
                <Box id={'se-search-categories-box'} className={gStyles.scrollActiveBlock}>
                    {sortedCategories?.map((item, key) => {
                        const category = item[CATEGORY_KEY_NAME];
                        const catName = getCategoryName(category, t, getFirstSubstring);
                        const mainCatName = getPoiParentCategory(item, t);

                        return (
                            <MenuItem
                                id={'se-search-categories-list-item-' + catName}
                                className={styles.categoriesListItem}
                                key={key + catName}
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigateToSearchResults({
                                        type: category,
                                    });
                                    ctx.setPoiCatMenu(false);
                                }}
                            >
                                <ListItemIcon>{categoriesIcons[category]}</ListItemIcon>
                                <ListItemText>
                                    <MenuItemWithLines className={styles.titleText} name={catName} maxLines={2} />
                                    {mainCatName && (
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
