import { Box, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import CustomInput from './CustomInput';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderNoUnderline from '../../../frame/components/header/HeaderNoUnderline';
import gStyles from '../../gstylesmenu.module.css';
import styles from '../search.module.css';
import Loading from '../../errors/Loading';
import { getCategoryItemName } from '../../../manager/PoiManager';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { CATEGORY_KEY_NAME } from '../../../infoblock/components/wpt/WptTagsProvider';
import EmptySearch from '../../errors/EmptySearch';
import { getPoiParentCategory } from '../../../manager/SearchManager';
import AppContext, { collator } from '../../../context/AppContext';
import useSearchNav from '../../../util/hooks/search/useSearchNav';
import { SEARCH_TYPE_CATEGORY } from '../../../manager/searchConstants';

export default function PoiCategoriesList({ categories, setSearchValue, categoriesIcons, loadingIcons }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const { navigateToSearchMenu, navigateToSearchResults } = useSearchNav();

    const sortedCategories = categories?.sort((a, b) =>
        collator.compare(getCategoryItemName(a, t), getCategoryItemName(b, t))
    );

    function backToSearch() {
        ctx.setPoiCatMenu(false);
        ctx.setSearchSettings({ ...ctx.searchSettings, showExploreMarkers: true });
        navigateToSearchMenu();
    }

    return (
        <Box className={gStyles.scrollMainBlock}>
            <HeaderNoUnderline
                title={t('search_categories')}
                onClose={backToSearch}
                showBackButton
                appBarProps={{ id: 'se-search-categories-list' }}
            />
            <CustomInput setSearchValue={setSearchValue} type={SEARCH_TYPE_CATEGORY} />
            {sortedCategories?.length === 0 && <EmptySearch />}
            {loadingIcons ? (
                <Loading />
            ) : (
                <Box id={'se-search-categories-box'} className={gStyles.scrollActiveBlock}>
                    {sortedCategories?.map((item, key) => {
                        const category = item[CATEGORY_KEY_NAME];
                        const catName = getCategoryItemName(item, t);
                        const mainCatName = getPoiParentCategory(item, t);

                        return (
                            <MenuItem
                                id={'se-search-categories-list-item-' + catName}
                                className={styles.categoriesListItem}
                                key={key + catName}
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigateToSearchResults({ type: category }, { state: { categoryName: catName } });
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
