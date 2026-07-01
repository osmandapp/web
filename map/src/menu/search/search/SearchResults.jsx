import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import AppContext from '../../../context/AppContext';
import MapContext from '../../../context/MapContext';
import CustomInput from './CustomInput';
import PoiManager, {
    formattingPoiType,
    getCatPoiIconName,
    getSearchResultIcon,
    getCategoryName,
    parseBrandType,
} from '../../../manager/PoiManager';
import SearchResultItem, { getFirstSubstring } from './SearchResultItem';
import { MenuButton } from './MenuButton';
import { Box, Button, Typography } from '@mui/material';
import VirtualizedList from '../../../frame/components/VirtualizedList';
import styles from '../search.module.css';
import gStyles from '../../gstylesmenu.module.css';
import { iconPathMap } from '../../../map/util/MapManager';
import { searchTypeMap } from '../../../map/layers/SearchLayer';
import Loading from '../../errors/Loading';
import { useGeoLocation } from '../../../util/hooks/useGeoLocation';
import { useElementHeight } from '../../../util/hooks/useElementHeight';
import { usePageTitle } from '../../../util/hooks/usePageTitle';
import { LOCATION_UNAVAILABLE } from '../../../manager/FavoritesManager';
import EmptySearch from '../../errors/EmptySearch';
import { POI_LAYER_ID, SEARCH_LAYER_ID } from '../../../manager/GlobalManager';
import useHashParams from '../../../util/hooks/useHashParams';
import {
    CATEGORY_ICON,
    CATEGORY_TYPE,
    FINAL_POI_ICON_NAME,
    ICON_KEY_NAME,
    POI_ICON_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
    WEB_VISIBLE_LEVEL,
} from '../../../infoblock/components/wpt/WptTagsProvider';
import { getIconByType, parseTagWithLang, SEARCH_BRAND } from '../../../manager/SearchManager';
import useSearchNav from '../../../util/hooks/search/useSearchNav';
import { useTranslation } from 'react-i18next';
import { getMapCenter } from '../../../map/layers/MapStateLayer';

export const ZOOM_ERROR = 'Please zoom in closer';
export const MIN_SEARCH_ZOOM = 8;
const EMPTY_SEARCH_RESULT = 'empty';
// Initial row height estimate used before a row is measured. Real heights are measured per row
// (items vary: 1 line vs name + multi-line address + distance) and cached.
const SEARCH_RESULT_ITEM_HEIGHT = 88;
const SHOW_MORE_ITEM = '__show_more__';

function getRowKey(item, index) {
    if (item === SHOW_MORE_ITEM) return SHOW_MORE_ITEM;
    return item?.id ?? item?.properties?.id ?? index;
}

function getVisibleLevel(item) {
    return item?.properties?.[WEB_VISIBLE_LEVEL] ?? 0;
}

export function searchByWord(searchParams, ctx, loc, baseSearch = false) {
    ctx.setSearchQuery({
        query: formattingPoiType(searchParams.query),
        latlng: { lat: loc.lat, lng: loc.lng },
        baseSearch,
    });
}

export function performBaseSearch(searchParams, ctx, loc) {
    searchByWord(searchParams, ctx, loc, true);
}

export function searchByCategory(searchParams, ctx, t) {
    // Brand format: type:lang, Category format: just type
    let categoryName = '';
    let lang = null;
    if (searchParams.type) {
        const brandInfo = parseBrandType(searchParams.type);
        if (brandInfo) {
            // Brand search: type format is "brandName:lang"
            categoryName = brandInfo.brandName;
            lang = brandInfo.lang;
        } else {
            // Category search: translate category name
            categoryName = getCategoryName(searchParams.type, t, getFirstSubstring);
        }
    }

    ctx.setSearchQuery({
        query: formattingPoiType(categoryName),
        type: searchParams.type,
        lang: lang,
    });
}

export default function SearchResults() {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const { t } = useTranslation();

    const [result, setResult] = useState(null);
    const hash = window.location.hash;
    const [locReady, setLocReady] = useState(false);
    const [errorZoom, setErrorZoom] = useState(null);
    const currentLoc = useGeoLocation(ctx);
    const [listContainerRef, listHeight] = useElementHeight();
    const { zoom } = useHashParams();

    const { params, navigateToSearchMenu, isSearchEqualToUrl, isSearchResultRoute } = useSearchNav();

    useEffect(() => {
        if ((params.query || params.type) && !isSearchEqualToUrl(ctx.searchQuery)) {
            setResult(null);
        }
    }, [params.query, params.type, ctx.searchQuery]);

    useEffect(() => {
        if (result === EMPTY_SEARCH_RESULT) {
            checkZoomError();
        }
    }, [zoom, result]);

    // Calculate page title based on search params
    const pageTitle = useMemo(() => {
        if (params.query) {
            return params.query;
        } else if (params.type) {
            const brandInfo = parseBrandType(params.type);
            if (brandInfo) {
                return brandInfo.brandName;
            } else {
                return getCategoryName(params.type, t, getFirstSubstring);
            }
        }
        return null;
    }, [params.query, params.type]);

    usePageTitle(pageTitle);

    // always hide explore markers when search query is active
    useEffect(() => {
        if (ctx.searchQuery) {
            ctx.setSearchSettings({ ...ctx.searchSettings, showExploreMarkers: false });
        }
    }, [ctx.searchQuery]);

    const calculateIcons = async (features, ctx) => {
        const promises = features?.map(async (f) => {
            if (!f?.properties) return;
            if (f.icon) return;
            const props = f.properties;
            const type = props[CATEGORY_TYPE];
            if (type === searchTypeMap.FAVORITE) {
                return;
            }
            if (type === searchTypeMap.POI_TYPE || type === searchTypeMap.POI) {
                const brandRes = parseTagWithLang(props[CATEGORY_ICON]);
                if (brandRes.key === SEARCH_BRAND) {
                    f.icon = await getSearchResultIcon({ result: SEARCH_BRAND, ctx });
                    return;
                }
                const iconName = getCatPoiIconName(props);
                f.icon = await getSearchResultIcon({ result: iconName, ctx });
                f.properties[FINAL_POI_ICON_NAME] = PoiManager.getIconNameForPoiType({
                    iconKeyName: f.properties[ICON_KEY_NAME],
                    typeOsmTag: f.properties[TYPE_OSM_TAG],
                    typeOsmValue: f.properties[TYPE_OSM_VALUE],
                    iconName: f.properties[POI_ICON_NAME],
                });
            } else {
                const finalIconName = getIconByType(type);
                f.icon = await getSearchResultIcon({
                    result: finalIconName,
                    ctx,
                    iconUrl: iconPathMap[finalIconName],
                });
                f.properties[FINAL_POI_ICON_NAME] = finalIconName;
            }
        });
        await Promise.all(promises);
    };

    const memoizedResult = useMemo(() => {
        if (!currentLoc) return null;
        const { loc } = getLoc();

        if (!loc) return null;

        const features = ctx.searchResult?.features;
        if (!features) {
            return null;
        }

        if (features.length === 0) {
            return EMPTY_SEARCH_RESULT;
        }

        return features.map((f) => ({ ...f }));
    }, [currentLoc, ctx.searchResult]);

    useEffect(() => {
        if (ctx.processingSearch) return;
        if (!memoizedResult) return;
        if (memoizedResult === EMPTY_SEARCH_RESULT) {
            setResult(EMPTY_SEARCH_RESULT);
            return;
        }
        let cancelled = false;
        const updateIcons = async () => {
            const resultWithIcons = [...memoizedResult];
            const visibleToIcon = resultWithIcons.filter((f) => getVisibleLevel(f) <= ctx.searchVisibleLevel);
            await calculateIcons(visibleToIcon, ctx);
            if (!cancelled) {
                setResult({ features: resultWithIcons });
            }
        };

        updateIcons().then();
        return () => {
            cancelled = true;
        };
    }, [memoizedResult, ctx.processingSearch, ctx.searchVisibleLevel]);

    useEffect(() => {
        if (locReady) {
            const hasSearchParams = params.type || (params.query && params.query !== '');
            if (hasSearchParams && (!isSearchEqualToUrl(ctx.searchQuery) || ctx.forceSearch)) {
                if (!isSearchResultRoute) {
                    return;
                }
                const isWordSearch = params.query && params.query !== '' && !params.type;
                if (isWordSearch && (ctx.gpxLoading || ctx.processingGroups)) {
                    return;
                }
                ctx.setProcessingSearch(true);
                // drop the previous results so the spinner stays until the new list is ready (no stale flash)
                setResult(null);
                if (ctx.forceSearch) {
                    ctx.setForceSearch(false);
                }
                if (params.type) {
                    searchByCategory(params, ctx, t);
                } else {
                    const { loc } = getLoc();
                    if (!loc) return;
                    if (zoom < MIN_SEARCH_ZOOM) {
                        performBaseSearch(params, ctx, loc);
                    } else {
                        searchByWord(params, ctx, loc);
                    }
                }
            }
        }
    }, [locReady, params, ctx.forceSearch, ctx.gpxLoading, ctx.processingGroups]);

    function checkZoomError() {
        setErrorZoom(zoom < MIN_SEARCH_ZOOM ? ZOOM_ERROR : null);
    }

    function getLoc() {
        let isUser = false;
        let loc = null;
        if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
            if (ctx.visibleBounds?.contains(currentLoc)) {
                isUser = true;
                loc = currentLoc;
            } else {
                loc = getMapCenter(mtx, hash);
            }
        } else if (currentLoc && currentLoc === LOCATION_UNAVAILABLE) {
            loc = getMapCenter(mtx, hash);
        }
        return { loc, isUser };
    }

    useEffect(() => {
        // hide explore layers
        ctx.setSearchSettings({ ...ctx.searchSettings, showExploreMarkers: false });
    }, []);

    useEffect(() => {
        if (!ctx.searchResult && result !== null) {
            setResult(null);
        }
    }, [ctx.searchResult]);

    function backToMainSearch() {
        ctx.setCurrentObjectType(null);
        ctx.setSearchResult(null);
        ctx.setSearchFavoriteGroupIds(null);
        ctx.setSearchQuery(null);
        ctx.setSearchSettings({ ...ctx.searchSettings, showExploreMarkers: true });
        navigateToSearchMenu();
    }

    function resulNotPrepared() {
        return !ctx.processingSearch && (!result || reopenSearchResult());
    }

    function reopenSearchResult() {
        return result && result !== EMPTY_SEARCH_RESULT && !params.query && !params.type;
    }

    // URL query already changed but the shown result is still the previous search
    const staleResult = (params.query || params.type) && !isSearchEqualToUrl(ctx.searchQuery);

    const maxVisibleLevel = result?.features?.reduce((max, f) => Math.max(max, getVisibleLevel(f)), 0) ?? 0;
    const hasMore =
        ctx.searchVisibleLevel < maxVisibleLevel &&
        (result?.features?.some((item) => item?.properties && getVisibleLevel(item) > ctx.searchVisibleLevel) ?? false);
    const visibleFeatures = useMemo(() => {
        const features =
            result?.features?.filter((item) => item?.properties && getVisibleLevel(item) <= ctx.searchVisibleLevel) ??
            [];
        return ctx.spatialSearch && hasMore ? [...features, SHOW_MORE_ITEM] : features;
    }, [result, ctx.searchVisibleLevel, ctx.spatialSearch, hasMore]);

    const { loc: distanceLoc, isUser } = useMemo(
        () => getLoc(),
        [currentLoc, ctx.visibleBounds, mtx.visibleBboxInfo, hash]
    );

    useEffect(() => {
        if (distanceLoc) {
            setLocReady(true);
        }
    }, [distanceLoc]);

    const showMoreResults = useCallback(() => {
        ctx.setSearchVisibleLevel((prev) => Math.min(prev + 1, maxVisibleLevel));
    }, [maxVisibleLevel]);
    const typeItem = ctx.searchQuery?.type ? POI_LAYER_ID : SEARCH_LAYER_ID;
    const renderSearchItem = useCallback(
        (item, index) => {
            if (item === SHOW_MORE_ITEM) {
                return (
                    <Button
                        id={'se-search-show-more'}
                        className={styles.buttonShowAllExplore}
                        onClick={showMoreResults}
                    >
                        {t('web:show_more')}
                    </Button>
                );
            }

            return (
                <SearchResultItem
                    item={item}
                    index={index}
                    typeItem={typeItem}
                    currentLoc={currentLoc}
                    loc={distanceLoc}
                    isUser={isUser}
                />
            );
        },
        [typeItem, currentLoc, distanceLoc, isUser, showMoreResults]
    );

    return (
        <>
            <CustomInput
                menuButton={<MenuButton needBackButton={true} backToPrevScreen={backToMainSearch} />}
                defaultSearchValue={
                    ctx.searchQuery?.query ||
                    (params?.type
                        ? (() => {
                              const brandInfo = parseBrandType(params.type);
                              return brandInfo
                                  ? brandInfo.brandName
                                  : getCategoryName(params.type, t, getFirstSubstring);
                          })()
                        : params?.query || '')
                }
            />
            {ctx.spatialSearch && ctx.searchResult?.info && (
                <Typography className={styles.spatialInfo} id={'se-spatial-search-info'}>
                    {Object.entries(ctx.searchResult.info)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(' · ')}
                </Typography>
            )}
            {(ctx.processingSearch || resulNotPrepared() || staleResult) && <Loading />}
            {!ctx.processingSearch &&
                !reopenSearchResult() &&
                !staleResult &&
                (result === EMPTY_SEARCH_RESULT ? (
                    <EmptySearch message={errorZoom} />
                ) : (
                    <Box id={'se-search-results'} ref={listContainerRef} className={gStyles.fillBlock}>
                        <VirtualizedList
                            items={visibleFeatures}
                            renderItem={renderSearchItem}
                            getItemKey={getRowKey}
                            estimatedItemHeight={SEARCH_RESULT_ITEM_HEIGHT}
                            height={listHeight}
                        />
                    </Box>
                ))}
        </>
    );
}
