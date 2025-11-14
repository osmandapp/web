import { Box, Button, Divider, Grid, LinearProgress, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import CustomInput from './search/CustomInput';
import styles from './search.module.css';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import WikiPlacesList from './explore/WikiPlacesList';
import { addWikiPlacesDefaultFilters } from '../../manager/SearchManager';
import {
    EXPLORE_URL,
    HEADER_SIZE,
    MAIN_URL_WITH_SLASH,
    POI_CATEGORIES_URL,
    SEARCH_URL,
} from '../../manager/GlobalManager';
import { matchPath, useNavigate } from 'react-router-dom';
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
import { CATEGORY_KEY_NAME } from '../../infoblock/components/wpt/WptTagsProvider';
import EmptyLogin from '../../login/EmptyLogin';
import useHashParams from '../../util/hooks/useHashParams';
import { EXPLORE_MIN_ZOOM } from '../../map/layers/ExploreLayer';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import LoginContext from '../../context/LoginContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import gStyles from '../gstylesmenu.module.css';
import useSearchNav from '../../util/hooks/search/useSearchNav';
import { SEARCH_RESULTS_KEY, useRecentDataSaver } from '../../util/hooks/menu/useRecentDataSaver';
import ExploreMenu from './explore/ExploreMenu';

export const DEFAULT_EXPLORE_POITYPES = ['0'];

export default function SearchMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const [, height] = useWindowSize();

    const { navigateToSearchResults, isSearchResultRoute } = useSearchNav();

    const showExploreOutlet = matchPath(
        { path: MAIN_URL_WITH_SLASH + SEARCH_URL + EXPLORE_URL + '*' },
        location.pathname
    );

    const isMainMenu = matchPath({ path: MAIN_URL_WITH_SLASH + SEARCH_URL + '*' }, location.pathname);

    const isPoiCategoriesRoute = matchPath(
        { path: MAIN_URL_WITH_SLASH + SEARCH_URL + POI_CATEGORIES_URL + '*' },
        location.pathname
    );

    const navigate = useNavigate();

    const [loadingWikiPlaces, setLoadingWikiPlaces] = useState(false);
    const [loadingIcons, setLoadingIcons] = useState(false);
    const [searchValue, setSearchValue] = useState(null);
    const [categoriesIcons, setCategoriesIcons] = useState({});
    const [searchCategories, setSearchCategories] = useState([]);
    const [searchCategoriesIconNames, setSearchCategoriesIconNames] = useState(null);
    const [searchCategoriesIcons, setSearchCategoriesIcons] = useState({});
    const [mainCategories, setMainCategories] = useState(null);

    const { zoom } = useHashParams();

    const { t } = useTranslation();

    const recentSaver = useRecentDataSaver();

    useEffect(() => {
        if (ctx.searchResult) {
            recentSaver(SEARCH_RESULTS_KEY, ctx.searchResult);
        }
    }, [ctx.searchResult]);

    useEffect(() => {
        if (ctx.categoryIcons) {
            setSearchCategoriesIcons((prevIcons) => ({
                ...prevIcons,
                ...ctx.categoryIcons,
            }));
        }
    }, [ctx.categoryIcons]);

    useEffect(() => {
        if (ctx.poiCategory?.filters && ctx.searchSettings.showExploreMarkers && !mainCategories) {
            const cats = createCategoriesFromFilters(ctx.poiCategory.filters);
            setMainCategories(cats);
            setSearchCategories(cats);
        }
    }, [ctx.poiCategory?.filters, ctx.searchSettings.showExploreMarkers]);

    useEffect(() => {
        const fetchCategorySearchResults = async (searchValue) => {
            if (searchValue) {
                if (isPoiCategoriesRoute) {
                    const categoriesResult = await PoiManager.searchPoiCategories(searchValue.query);
                    if (categoriesResult) {
                        const validCategories = Object.values(categoriesResult).filter(
                            (item) => item[CATEGORY_KEY_NAME] !== undefined
                        );
                        const sortedCategories = validCategories?.sort((a, b) => {
                            const nameA = PoiManager.formattingPoiType(t(`poi_${a[CATEGORY_KEY_NAME]}`)).toLowerCase();
                            const nameB = PoiManager.formattingPoiType(t(`poi_${b[CATEGORY_KEY_NAME]}`)).toLowerCase();
                            return nameA.localeCompare(nameB);
                        });
                        getCategoriesIcons(sortedCategories);
                        setSearchCategories(sortedCategories);
                    } else {
                        setSearchCategories([]);
                    }
                }
            } else {
                if (isPoiCategoriesRoute) {
                    setSearchCategories(mainCategories);
                }
            }
        };

        if (searchValue) {
            if (searchValue.type === SEARCH_TYPE_CATEGORY) {
                fetchCategorySearchResults(searchValue).then();
            } else {
                navigateToSearchResults({ query: searchValue.query });
            }
        }

        function getCategoriesIcons(res) {
            const icons = res.map((item) => {
                return getCatPoiIconName(item);
            });
            setLoadingIcons(true);
            setSearchCategoriesIconNames(icons);
        }
    }, [searchValue]);

    useEffect(() => {
        if (ltx.isLoggedIn()) {
            // for search categories
            if (mainCategories) {
                setSearchCategories(mainCategories);
            }
            if (!ctx.searchSettings.selectedFilters) {
                addWikiPlacesDefaultFilters(ctx, true, DEFAULT_EXPLORE_POITYPES);
            }
        }
    }, [ltx.loginUser]);

    useEffect(() => {
        if (ctx.wikiPlaces || zoom < EXPLORE_MIN_ZOOM) {
            setLoadingWikiPlaces(false);
        } else {
            setLoadingWikiPlaces(true);
        }
    }, [ctx.wikiPlaces, zoom]);

    // clear search value when object result context menu (WptDetails) is opened
    useEffect(() => {
        if (ctx.selectedWpt?.poi) {
            setSearchValue(null);
        }
    }, [ctx.selectedWpt?.poi]);

    // load icons for main search categories
    useEffect(() => {
        if (searchCategories !== null) {
            if (searchValue?.type !== SEARCH_TYPE_CATEGORY) {
                loadIcons().then();
            }
        }
        async function loadIcons() {
            const icons = categoriesIcons;
            const filters = searchCategories?.map((item) => item[CATEGORY_KEY_NAME]);
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
            loadIcons().then((res) => {
                setSearchCategoriesIcons(res);
                setLoadingIcons(false);
            });
        }

        async function loadIcons() {
            const icons = searchCategoriesIcons;
            const categories = Object.values(searchCategories).map((item) => item[CATEGORY_KEY_NAME]);
            if (categories) {
                for (const category of categories) {
                    const ind = categories.indexOf(category);
                    if (!icons[category]) {
                        icons[category] = await getCategoryIcon(searchCategoriesIconNames[ind]);
                    }
                }
                return icons;
            }
        }
    }, [searchCategoriesIconNames]);

    function createCategoriesFromFilters(filters) {
        return filters.map((item) => ({
            [CATEGORY_KEY_NAME]: item,
        }));
    }

    function openSearchByCategories() {
        ctx.setPoiCatMenu(true);
        navigate(MAIN_URL_WITH_SLASH + SEARCH_URL + POI_CATEGORIES_URL + window.location.hash);
    }

    function openExploreMenu() {
        ctx.setExploreMenu(true);
        navigate(MAIN_URL_WITH_SLASH + SEARCH_URL + EXPLORE_URL + window.location.hash);
    }

    function searchByCategory(category) {
        navigateToSearchResults({ query: category, type: SEARCH_TYPE_CATEGORY });
    }

    return (
        <>
            {ltx.isLoggedIn() ? (
                <>
                    {showExploreOutlet ? (
                        <ExploreMenu />
                    ) : (
                        <Box
                            sx={{
                                height: `${height - HEADER_SIZE}px`,
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: 0,
                            }}
                        >
                            {isSearchResultRoute && <SearchResults />}
                            {isPoiCategoriesRoute && (
                                <PoiCategoriesList
                                    setSearchValue={setSearchValue}
                                    categories={searchCategories}
                                    categoriesIcons={searchCategoriesIcons}
                                    loadingIcons={loadingIcons}
                                />
                            )}
                            {!isSearchResultRoute && !isPoiCategoriesRoute && (
                                <Box className={gStyles.scrollMainBlock}>
                                    <CustomInput
                                        autoFocus={{ isMainMenu }}
                                        menuButton={
                                            <MenuButton needBackButton={!ctx.searchSettings.showExploreMarkers} />
                                        }
                                        setSearchValue={setSearchValue}
                                    />
                                    <Box className={gStyles.scrollActiveBlock}>
                                        <SubTitleMenu text={t('search_categories')} />
                                        <Box sx={{ overflow: 'none', mt: '16px', ml: '16px' }}>
                                            <Grid container spacing={2}>
                                                {ctx.poiCategory?.filters
                                                    ?.sort()
                                                    .slice(0, 6)
                                                    .map((item, key) => {
                                                        const catName = translatePoi({ key, ctx, t });
                                                        const catNameId = catName.split(' ').join('_');
                                                        return (
                                                            <Grid
                                                                item
                                                                xs={4}
                                                                key={key + catName + 'grid'}
                                                                className={styles.gridItem}
                                                                id={'se-default-search-categories'}
                                                            >
                                                                <ListItemButton
                                                                    id={
                                                                        'se-default-search-categories-item-' + catNameId
                                                                    }
                                                                    key={key + catName}
                                                                    onClick={(e) => {
                                                                        searchByCategory(catName);
                                                                        e.preventDefault();
                                                                    }}
                                                                >
                                                                    <Box className={styles.categoryItem}>
                                                                        <ListItemIcon
                                                                            className={styles.categoryItemIcon}
                                                                        >
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
                                        </Box>
                                        <Button
                                            id={'se-search-categories-show-all'}
                                            className={styles.buttonShowAllExplore}
                                            onClick={openSearchByCategories}
                                        >
                                            {t('shared_string_show_all')}
                                        </Button>
                                        <Divider />
                                        {zoom >= EXPLORE_MIN_ZOOM && (
                                            <>
                                                <SubTitleMenu text={t('web:explore_menu')} />
                                                {loadingWikiPlaces ? (
                                                    <LinearProgress />
                                                ) : (
                                                    <>
                                                        <WikiPlacesList
                                                            size={3}
                                                            showAll={
                                                                <Button
                                                                    id={'se-show-all-wiki-place'}
                                                                    className={styles.buttonShowAllExplore}
                                                                    onClick={openExploreMenu}
                                                                >
                                                                    {t('shared_string_show_all')}
                                                                </Button>
                                                            }
                                                        />
                                                        <Divider />
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    )}
                </>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
