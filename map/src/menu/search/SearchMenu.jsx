import { Box, Button, Divider, Grid, LinearProgress, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import CustomInput from './search/CustomInput';
import styles from './search.module.css';
import React, { useContext, useEffect, useState } from 'react';
import AppContext, { OBJECT_SEARCH } from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import SubTitle from '../components/SubTitle';
import WikiPlacesList from './explore/WikiPlacesList';
import { addWikiPlacesDefaultFilters } from '../../manager/SearchManager';
import { EXPLORE_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';
import { useNavigate } from 'react-router-dom';
import { getSearchCategoryIcon, translatePoi } from '../../manager/PoiManager';
import { isEmpty } from 'lodash';
import PoiCategoriesList from './search/PoiCategoriesList';
import SearchResults from './search/SearchResults';
import { MenuButton } from './search/MenuButton';
import { SEARCH_TYPE_CATEGORY } from '../../map/layers/SearchLayer';

export default function SearchMenu() {
    const ctx = useContext(AppContext);
    const navigate = useNavigate();

    const [isMainSearchScreen, setIsMainSearchScreen] = useState(true);
    const [loadingWikiPlaces, setLoadingWikiPlaces] = useState(false);
    const [searchValue, setSearchValue] = useState(null);
    const [categoriesIcons, setCategoriesIcons] = useState({});
    const [openCategories, setOpenCategories] = useState(false);
    const [openSearchResults, setOpenSearchResults] = useState(false);
    const [searchCategories, setSearchCategories] = useState([]);

    const { t } = useTranslation();

    useEffect(() => {
        ctx.setCurrentObjectType(OBJECT_SEARCH);
    }, []);

    useEffect(() => {
        if (ctx.poiCategory?.filters) {
            setSearchCategories(ctx.poiCategory.filters);
        }
    }, [ctx.poiCategory?.filters]);

    useEffect(() => {
        if (searchValue) {
            if (isMainSearchScreen) {
                setIsMainSearchScreen(false);
            }
            if (openCategories && searchValue.type === SEARCH_TYPE_CATEGORY) {
                if (searchCategories.includes(searchValue.query)) {
                    setSearchValue({
                        query: searchValue.query,
                        type: SEARCH_TYPE_CATEGORY,
                    });
                    setOpenSearchResults(true);
                    setOpenCategories(false);
                } else {
                    const res = searchCategories.filter((item) => item.startsWith(searchValue.query));
                    setSearchCategories(res);
                }
            } else {
                setOpenCategories(false);
            }
        } else {
            if (openCategories) {
                setSearchCategories(ctx.poiCategory.filters);
            }
        }
    }, [searchValue]);

    useEffect(() => {
        //for explore layers
        if (isMainSearchScreen) {
            ctx.setSearchSettings({ ...ctx.searchSettings, showOnMainSearch: true });
            if (!ctx.searchSettings.selectedFilters) {
                addWikiPlacesDefaultFilters(ctx, true);
                setLoadingWikiPlaces(true);
            }
        }
    }, [isMainSearchScreen]);

    useEffect(() => {
        if (ctx.wikiPlaces) {
            setLoadingWikiPlaces(false);
        }
    }, [ctx.wikiPlaces]);

    useEffect(() => {
        if (isEmpty(categoriesIcons) && ctx.poiCategory !== null && ctx.poiCategory?.filters !== null) {
            loadIcons().then();
        }
        async function loadIcons() {
            const icons = {};
            const filters = ctx.poiCategory?.filters;

            if (filters) {
                for (const filter of filters) {
                    icons[filter] = await getSearchCategoryIcon(filter, ctx);
                }
                setCategoriesIcons(icons);
            }
        }
    }, [ctx.poiCategory?.filters]);

    useEffect(() => {
        if (!openSearchResults) {
            setSearchValue(null);
        }
    }, [openSearchResults]);

    function openSearchByCategories() {
        setOpenCategories(true);
        setIsMainSearchScreen(false);
    }

    function openExploreMenu() {
        navigate(MAIN_URL_WITH_SLASH + EXPLORE_URL + window.location.hash);
    }

    function searchByCategory(category) {
        setSearchValue({
            query: category,
            type: SEARCH_TYPE_CATEGORY,
        });
        setOpenSearchResults(true);
        setIsMainSearchScreen(false);
    }

    return (
        <>
            {openSearchResults && (
                <SearchResults
                    value={searchValue}
                    setOpenSearchResults={setOpenSearchResults}
                    setIsMainSearchScreen={setIsMainSearchScreen}
                    setSearchValue={setSearchValue}
                />
            )}
            {openCategories && (
                <PoiCategoriesList
                    categories={searchCategories}
                    setSearchValue={setSearchValue}
                    setOpenCategories={setOpenCategories}
                    setOpenSearchResults={setOpenSearchResults}
                    setIsMainSearchScreen={setIsMainSearchScreen}
                />
            )}
            {isMainSearchScreen && (
                <>
                    <CustomInput
                        menuButton={<MenuButton needBackButton={!isMainSearchScreen} />}
                        setSearchValue={setSearchValue}
                    />
                    <SubTitle title={'search_categories'} />
                    <Box sx={{ overflow: 'none', mt: '16px' }}>
                        <Grid sx={{ mx: 0.5, maxWidth: '360px' }} container spacing={2}>
                            {ctx.poiCategory?.filters
                                ?.sort()
                                .slice(0, 6)
                                .map((item, key) => {
                                    return (
                                        <Grid item xs={4} key={key} className={styles.gridItem}>
                                            <ListItemButton
                                                sx={{}}
                                                key={key}
                                                onClick={(e) => {
                                                    searchByCategory(item);
                                                    e.preventDefault();
                                                }}
                                            >
                                                <Box className={styles.categoryItem}>
                                                    <ListItemIcon className={styles.categoryItemIcon}>
                                                        {categoriesIcons[item]}
                                                    </ListItemIcon>
                                                    <Typography className={styles.categoryItemText}>
                                                        {translatePoi({ key, ctx, t })}
                                                    </Typography>
                                                </Box>
                                            </ListItemButton>
                                        </Grid>
                                    );
                                })}
                        </Grid>
                        <Button className={styles.buttonShowAllExplore} onClick={openSearchByCategories}>
                            {t('shared_string_show_all')}
                        </Button>
                    </Box>

                    <Divider />
                    <SubTitle title={'web:explore_menu'} />
                    {loadingWikiPlaces ? (
                        <LinearProgress />
                    ) : (
                        <>
                            <WikiPlacesList size={3} />
                            <Button className={styles.buttonShowAllExplore} onClick={openExploreMenu}>
                                {t('shared_string_show_all')}
                            </Button>
                            <Divider />
                        </>
                    )}
                </>
            )}
        </>
    );
}
