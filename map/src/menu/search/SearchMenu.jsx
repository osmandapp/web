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
import PoiManager, {
    getCategoryIcon,
    getCatPoiIconName,
    getSearchResultIcon,
    translatePoi,
} from '../../manager/PoiManager';
import PoiCategoriesList from './search/PoiCategoriesList';
import SearchResults from './search/SearchResults';
import { MenuButton } from './search/MenuButton';
import { SEARCH_TYPE_CATEGORY } from '../../map/layers/SearchLayer';
import { POI_CATEGORY_KEY_NAME } from '../../infoblock/components/wpt/WptTagsProvider';
import EmptyLogin from '../errors/EmptyLogin';

export default function SearchMenu() {
    const ctx = useContext(AppContext);
    const navigate = useNavigate();

    const [isMainSearchScreen, setIsMainSearchScreen] = useState(true);
    const [loadingWikiPlaces, setLoadingWikiPlaces] = useState(false);
    const [loadingIcons, setLoadingIcons] = useState(false);
    const [searchValue, setSearchValue] = useState(ctx.searchResult);
    const [categoriesIcons, setCategoriesIcons] = useState({});
    const [openCategories, setOpenCategories] = useState(false);
    const [openSearchResults, setOpenSearchResults] = useState(false);
    const [searchCategories, setSearchCategories] = useState([]);
    const [searchCategoriesIconNames, setSearchCategoriesIconNames] = useState(null);
    const [searchCategoriesIcons, setSearchCategoriesIcons] = useState({});

    const { t } = useTranslation();

    useEffect(() => {
        ctx.setCurrentObjectType(OBJECT_SEARCH);
    }, []);

    useEffect(() => {
        if (ctx.categoryIcons) {
            setSearchCategoriesIcons((prevIcons) => ({
                ...prevIcons,
                ...ctx.categoryIcons,
            }));
        }
    }, [ctx.categoryIcons]);

    useEffect(() => {
        if (ctx.poiCategory?.filters) {
            setSearchCategories(ctx.poiCategory.filters);
        }
    }, [ctx.poiCategory?.filters]);

    useEffect(() => {
        const fetchCategorySearchResults = async (searchValue) => {
            if (searchValue) {
                if (openCategories) {
                    const categoriesResult = await PoiManager.searchPoiCategories(searchValue.query);
                    if (categoriesResult) {
                        getCategoriesIcons(categoriesResult);
                        getCategoriesNames(categoriesResult);
                    }
                }
            } else {
                if (openCategories) {
                    setSearchCategories(ctx.poiCategory.filters);
                }
            }
        };

        if (searchValue) {
            if (isMainSearchScreen) {
                setIsMainSearchScreen(false);
            }
            if (searchValue.type === SEARCH_TYPE_CATEGORY) {
                fetchCategorySearchResults(searchValue).then();
            } else {
                setOpenSearchResults(true);
            }
        }

        function getCategoriesIcons(res) {
            const icons = Object.values(res).map((item) => {
                return getCatPoiIconName(item);
            });
            setSearchCategoriesIconNames(icons);
        }

        function getCategoriesNames(res) {
            const validCategories = Object.values(res).filter((item) => item[POI_CATEGORY_KEY_NAME] !== undefined);
            setSearchCategories(Object.values(validCategories).map((item) => item[POI_CATEGORY_KEY_NAME]));
        }
    }, [searchValue]);

    useEffect(() => {
        if (isMainSearchScreen) {
            // for search categories
            if (ctx.poiCategory?.filters) {
                setSearchCategories(ctx.poiCategory.filters);
            }
            //for explore layers
            ctx.setSearchSettings({ ...ctx.searchSettings, showOnMainSearch: true });
            if (!ctx.searchSettings.selectedFilters) {
                const selectedFilters = ['tourism', 'leisure'];
                addWikiPlacesDefaultFilters(ctx, true, selectedFilters);
                setLoadingWikiPlaces(true);
            }
        }
    }, [isMainSearchScreen]);

    useEffect(() => {
        if (ctx.wikiPlaces) {
            setLoadingWikiPlaces(false);
        }
    }, [ctx.wikiPlaces]);

    // load icons for main search categories
    useEffect(() => {
        if (searchCategories !== null) {
            if (searchValue?.type !== SEARCH_TYPE_CATEGORY) {
                loadIcons().then();
            }
        }
        async function loadIcons() {
            const icons = categoriesIcons;
            const filters = searchCategories;
            if (filters) {
                for (const filter of filters) {
                    if (!icons[filter]) {
                        icons[filter] = await getSearchResultIcon({ result: filter, ctx, isCategory: true });
                    }
                }
                setCategoriesIcons(icons);
            }
        }
    }, [searchCategories]);

    // load icons for other search categories
    useEffect(() => {
        if (searchCategoriesIconNames) {
            setLoadingIcons(true);
            loadIcons().then(() => setLoadingIcons(false));
        }

        async function loadIcons() {
            const icons = searchCategoriesIcons;
            const categories = searchCategories;
            if (categories) {
                for (const category of categories) {
                    const ind = categories.indexOf(category);
                    if (!icons[category]) {
                        icons[category] = await getCategoryIcon(searchCategoriesIconNames[ind]);
                    }
                }
                setSearchCategoriesIcons(icons);
            }
        }
    }, [searchCategoriesIconNames]);

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
            {ctx.loginUser ? (
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
                            categoriesIcons={searchCategoriesIcons}
                            setSearchValue={setSearchValue}
                            setOpenCategories={setOpenCategories}
                            setOpenSearchResults={setOpenSearchResults}
                            setIsMainSearchScreen={setIsMainSearchScreen}
                            loadingIcons={loadingIcons}
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
                                            const catName = translatePoi({ key, ctx, t });
                                            return (
                                                <Grid item xs={4} key={key} className={styles.gridItem}>
                                                    <ListItemButton
                                                        key={key}
                                                        onClick={(e) => {
                                                            searchByCategory(catName);
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <Box className={styles.categoryItem}>
                                                            <ListItemIcon className={styles.categoryItemIcon}>
                                                                {categoriesIcons[item]}
                                                            </ListItemIcon>
                                                            <Typography className={styles.categoryItemText}>
                                                                {catName}
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
                                    <WikiPlacesList
                                        size={3}
                                        showAll={
                                            <Button className={styles.buttonShowAllExplore} onClick={openExploreMenu}>
                                                {t('shared_string_show_all')}
                                            </Button>
                                        }
                                    />
                                    <Divider />
                                </>
                            )}
                        </>
                    )}
                </>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
