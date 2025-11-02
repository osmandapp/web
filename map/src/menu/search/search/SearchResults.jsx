import React, { useContext, useEffect, useMemo, useState } from 'react';
import AppContext from '../../../context/AppContext';
import CustomInput from './CustomInput';
import PoiManager, { formattingPoiType, getCatPoiIconName, getSearchResultIcon } from '../../../manager/PoiManager';
import SearchResultItem from './SearchResultItem';
import { MenuButton } from './MenuButton';
import { Box } from '@mui/material';
import { iconPathMap, SEARCH_LAYER_ID, SEARCH_TYPE_CATEGORY, searchTypeMap } from '../../../map/layers/SearchLayer';
import Loading from '../../errors/Loading';
import { useGeoLocation } from '../../../util/hooks/useGeoLocation';
import { LOCATION_UNAVAILABLE } from '../../../manager/FavoritesManager';
import { getCenterMapLoc } from '../../../manager/MapManager';
import { getDistance, getBearing } from '../../../util/Utils';
import EmptySearch from '../../errors/EmptySearch';
import { POI_LAYER_ID } from '../../../map/layers/PoiLayer';
import useHashParams from '../../../util/hooks/useHashParams';
import {
    CATEGORY_ICON,
    CATEGORY_TYPE,
    FINAL_POI_ICON_NAME,
    ICON_KEY_NAME,
    POI_ICON_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '../../../infoblock/components/wpt/WptTagsProvider';
import { getIconByType, parseTagWithLang, SEARCH_BRAND } from '../../../manager/SearchManager';
import useSearchNav from '../../../util/hooks/search/useSearchNav';

export const ZOOM_ERROR = 'Please zoom in closer';
export const MIN_SEARCH_ZOOM = 8;
const EMPTY_SEARCH_RESULT = 'empty';

export function searchByWord(searchParams, ctx, loc, baseSearch = false) {
    ctx.setSearchQuery({
        search: { query: formattingPoiType(searchParams.query) },
        latlng: { lat: loc.lat, lng: loc.lng },
        baseSearch,
    });
}

export function performBaseSearch(searchParams, ctx, loc) {
    searchByWord(searchParams, ctx, loc, true);
}

export function searchByCategory(searchParams, ctx) {
    const preparedValue = {
        query: formattingPoiType(searchParams.query),
        type: searchParams.type,
        key: searchParams.key,
    };
    ctx.setSearchQuery({
        search: preparedValue,
        type: SEARCH_TYPE_CATEGORY,
        lang: searchParams.lang,
    });
}

export default function SearchResults() {
    const ctx = useContext(AppContext);

    const [result, setResult] = useState(null);
    const hash = window.location.hash;
    const [locReady, setLocReady] = useState(false);
    const [errorZoom, setErrorZoom] = useState(null);
    const currentLoc = useGeoLocation(ctx);
    const { zoom, lat = null, lon = null } = useHashParams();
    const [debouncedLatLon, setDebouncedLatLon] = useState({ lat, lon });

    const { params, navigateToSearchMenu, isSearchEqualToUrl } = useSearchNav();

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedLatLon({ lat, lon });
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [lat, lon]);

    const centerFromHash = useMemo(() => {
        return debouncedLatLon.lat != null && debouncedLatLon.lon != null
            ? { lat: debouncedLatLon.lat, lon: debouncedLatLon.lon }
            : null;
    }, [debouncedLatLon]);

    useEffect(() => {
        if (result === EMPTY_SEARCH_RESULT) {
            checkZoomError();
        }
    }, [zoom]);

    useEffect(() => {
        if (params.query) {
            document.title = params.query;
        }
    }, [params.query]);

    // always hide explore markers when search query is active
    useEffect(() => {
        if (ctx.searchQuery?.search) {
            ctx.setSearchSettings({ ...ctx.searchSettings, showExploreMarkers: false });
        }
    }, [ctx.searchQuery?.search]);

    const calculateIcons = async (features, ctx) => {
        const promises = features?.map(async (f) => {
            if (!f?.properties) return;
            const props = f.properties;
            const type = props[CATEGORY_TYPE];
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
        const { loc, isUser } = getLoc();

        if (!loc) return null;

        const features = ctx.searchResult?.features;
        if (!features) {
            return null;
        }

        if (features.length === 0) {
            return EMPTY_SEARCH_RESULT;
        }

        return features.map((f) => {
            const lat = f?.geometry?.coordinates[1];
            const lon = f?.geometry?.coordinates[0];
            if (!lat || !lon) return f;

            const distance = lon === 0 && lat === 0 ? null : getDistance(loc.lat, loc.lng, lat, lon);
            const bearing = lon === 0 && lat === 0 ? null : getBearing(loc.lat, loc.lng, lat, lon);

            return {
                ...f,
                locDist: distance,
                bearing: bearing,
                isUserLocation: isUser,
            };
        });
    }, [currentLoc, ctx.searchResult, centerFromHash]);

    useEffect(() => {
        if (!memoizedResult) return;
        if (memoizedResult === EMPTY_SEARCH_RESULT) {
            setResult(EMPTY_SEARCH_RESULT);
            return;
        }
        const updateIcons = async () => {
            const resultWithIcons = [...memoizedResult];
            await calculateIcons(resultWithIcons, ctx);
            setResult({ features: resultWithIcons });
        };

        updateIcons().then();
    }, [memoizedResult]);

    useEffect(() => {
        if (locReady) {
            if (params.query && params.query !== '' && !isSearchEqualToUrl(ctx.searchQuery)) {
                ctx.setProcessingSearch(true);
                if (params.type === SEARCH_TYPE_CATEGORY) {
                    searchByCategory(params, ctx);
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
    }, [locReady, params, ctx.searchQuery]);

    function checkZoomError() {
        if (zoom < MIN_SEARCH_ZOOM) {
            setErrorZoom(ZOOM_ERROR);
        }
    }

    function getLoc() {
        let isUser = false;
        let loc = null;
        if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
            if (ctx.visibleBounds?.contains(currentLoc)) {
                isUser = true;
                loc = currentLoc;
            } else {
                loc = getCenterMapLoc(hash);
            }
            setLocReady(true);
        } else if (currentLoc && currentLoc === LOCATION_UNAVAILABLE) {
            loc = getCenterMapLoc(hash);
            setLocReady(true);
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
        ctx.setSearchQuery(null);
        ctx.setSearchSettings({ ...ctx.searchSettings, showExploreMarkers: true });
        navigateToSearchMenu();
    }

    function resulNotPrepared() {
        return !ctx.processingSearch && (!result || reopenSearchResult());
    }

    function reopenSearchResult() {
        return result && result !== EMPTY_SEARCH_RESULT && !params.query;
    }

    return (
        <>
            <CustomInput
                menuButton={<MenuButton needBackButton={true} backToPrevScreen={backToMainSearch} />}
                defaultSearchValue={ctx.searchQuery?.search?.query || params?.query || ''}
            />
            {(ctx.processingSearch || resulNotPrepared()) && <Loading />}
            {!ctx.processingSearch &&
                !reopenSearchResult() &&
                (result === EMPTY_SEARCH_RESULT ? (
                    <EmptySearch message={errorZoom} />
                ) : (
                    <Box sx={{ overflowY: 'auto' }} id={'se-search-results'}>
                        {result?.features
                            .filter((item) => item?.properties)
                            .map((item, index) => (
                                <SearchResultItem
                                    key={index + (item?.id || item?.properties?.id || '')}
                                    item={item}
                                    index={index}
                                    typeItem={
                                        ctx.searchQuery?.type === SEARCH_TYPE_CATEGORY ? POI_LAYER_ID : SEARCH_LAYER_ID
                                    }
                                />
                            ))}
                    </Box>
                ))}
        </>
    );
}
