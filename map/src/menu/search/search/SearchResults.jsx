import React, { useContext, useEffect, useMemo, useState } from 'react';
import AppContext from '../../../context/AppContext';
import CustomInput from './CustomInput';
import { formattingPoiType, getCatPoiIconName, getSearchResultIcon } from '../../../manager/PoiManager';
import SearchResultItem from './SearchResultItem';
import { MenuButton } from './MenuButton';
import { Box } from '@mui/material';
import {
    SEARCH_ICON_MAP_OBJ,
    SEARCH_ICON_MAP_OBJ_URL,
    SEARCH_LAYER_ID,
    SEARCH_TYPE_CATEGORY,
} from '../../../map/layers/SearchLayer';
import Loading from '../../errors/Loading';
import { useGeoLocation } from '../../../util/hooks/useGeoLocation';
import { LOCATION_UNAVAILABLE } from '../../../manager/FavoritesManager';
import { getCenterMapLoc } from '../../../manager/MapManager';
import { getDistance } from '../../../util/Utils';
import EmptySearch from '../../errors/EmptySearch';
import { POI_LAYER_ID } from '../../../map/layers/PoiLayer';
import useHashParams from '../../../util/hooks/useHashParams';
import { CATEGORY_ICON } from '../../../infoblock/components/wpt/WptTagsProvider';
import { SEARCH_ICON_BRAND } from '../../../manager/SearchManager';

export const SEARCH_RESULT_TYPE_POI = 'POI';
export const SEARCH_RESULT_TYPE_POI_CATEGORY = 'POI_TYPE';
export const ZOOM_ERROR = 'Please zoom in closer';
const MIN_SEARCH_ZOOM = 8;
const EMPTY_SEARCH_RESULT = 'empty';

export function searchByCategory(value, ctx) {
    const preparedValue = {
        query: formattingPoiType(value.query),
        type: value.type,
        key: value.key,
    };
    ctx.setSearchQuery({
        search: preparedValue,
        type: SEARCH_TYPE_CATEGORY,
    });
}

export default function SearchResults({ value, setOpenSearchResults, setIsMainSearchScreen, setSearchValue }) {
    const ctx = useContext(AppContext);

    const [result, setResult] = useState(null);
    const hash = window.location.hash;
    const [locReady, setLocReady] = useState(false);
    const [showEmptySearch, setShowEmptySearch] = useState(false);
    const [errorZoom, setErrorZoom] = useState(null);
    const currentLoc = useGeoLocation(ctx);

    const { zoom } = useHashParams();

    useEffect(() => {
        ctx.setProcessingSearch(false);
        if (!result || result === EMPTY_SEARCH_RESULT) {
            if (showEmptySearch) return;
            setShowEmptySearch(true);
            checkZoomError();
            setResult(null);
        } else {
            setShowEmptySearch(false);
        }
    }, [result]);

    useEffect(() => {
        if (value?.query) {
            document.title = value.query;
        }
    }, [value?.query]);

    const calculateIcons = async (features, ctx) => {
        const promises = features?.map(async (f) => {
            if (!f?.properties) return;
            const props = f.properties;
            const type = props['web_type'];
            if (type === SEARCH_RESULT_TYPE_POI || type === SEARCH_RESULT_TYPE_POI_CATEGORY) {
                if (props[CATEGORY_ICON] === SEARCH_ICON_BRAND) {
                    f.icon = await getSearchResultIcon({ result: SEARCH_ICON_BRAND, ctx });
                    return;
                }
                const iconName = getCatPoiIconName(props);
                f.icon = await getSearchResultIcon({ result: iconName, ctx });
            } else {
                f.icon = await getSearchResultIcon({
                    result: SEARCH_ICON_MAP_OBJ,
                    ctx,
                    iconUrl: SEARCH_ICON_MAP_OBJ_URL,
                });
            }
        });
        await Promise.all(promises);
    };

    const memoizedResult = useMemo(() => {
        if (!currentLoc) return null;
        const loc = getLoc();

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
            return {
                ...f,
                locDist: lon === 0 && lat === 0 ? null : getDistance(loc.lat, loc.lng, lat, lon),
            };
        });
    }, [currentLoc, ctx.searchResult]);

    useEffect(() => {
        const updateIcons = async () => {
            if (!memoizedResult) return;
            if (memoizedResult === EMPTY_SEARCH_RESULT) {
                setResult(EMPTY_SEARCH_RESULT);
                return;
            }

            if (!memoizedResult[0]?.icon) {
                await calculateIcons(memoizedResult, ctx);
            }
            setResult({ features: memoizedResult });
        };

        updateIcons().then();
    }, [memoizedResult]);

    useEffect(() => {
        if (locReady) {
            if (value) {
                ctx.setProcessingSearch(true);
                if (zoom < MIN_SEARCH_ZOOM) {
                    if (value.type === SEARCH_TYPE_CATEGORY) {
                        setResult(null);
                        setErrorZoom(ZOOM_ERROR);
                        ctx.setProcessingSearch(false);
                    } else {
                        performBaseSearch(value);
                    }
                } else {
                    if (value.type === SEARCH_TYPE_CATEGORY) {
                        searchByCategory(value, ctx);
                    } else {
                        searchByWord(value);
                    }
                }
            }
        }
    }, [locReady, value]);

    function performBaseSearch(value) {
        searchByWord(value, true);
    }

    function checkZoomError() {
        if (zoom < MIN_SEARCH_ZOOM) {
            setErrorZoom(ZOOM_ERROR);
        }
    }

    function getLoc() {
        let loc = null;
        if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
            loc = currentLoc;
            setLocReady(true);
        } else if (currentLoc && currentLoc === LOCATION_UNAVAILABLE) {
            loc = getCenterMapLoc(hash);
            setLocReady(true);
        }
        return loc;
    }

    useEffect(() => {
        // hide explore layers
        ctx.setSearchSettings({ ...ctx.searchSettings, showOnMainSearch: false });
    }, []);

    useEffect(() => {
        if (!ctx.searchResult) {
            setResult(null);
        }
    }, [ctx.searchResult]);

    function searchByWord(value, baseSearch = false) {
        const loc = getLoc();

        if (!loc) return;

        ctx.setSearchQuery({
            search: value,
            latlng: { lat: loc.lat, lng: loc.lng },
            baseSearch,
        });
    }

    function backToMainSearch() {
        setOpenSearchResults(false);
        setIsMainSearchScreen(true);
        ctx.setSearchResult(null);
        ctx.setSearchQuery(null);
    }

    return (
        <>
            <CustomInput
                menuButton={<MenuButton needBackButton={true} backToPrevScreen={backToMainSearch} />}
                setSearchValue={setSearchValue}
                defaultSearchValue={value?.query}
            />
            {ctx.processingSearch && <Loading />}
            {!ctx.processingSearch &&
                (showEmptySearch ? (
                    <EmptySearch message={errorZoom} />
                ) : (
                    <Box sx={{ overflowY: 'auto' }} id={'se-search-results'}>
                        {result?.features
                            .filter((item) => item?.properties)
                            .map((item, index) => (
                                <SearchResultItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    typeItem={
                                        ctx.searchQuery?.type === SEARCH_TYPE_CATEGORY ? POI_LAYER_ID : SEARCH_LAYER_ID
                                    }
                                    searchValue={value}
                                    setSearchValue={setSearchValue}
                                />
                            ))}
                    </Box>
                ))}
        </>
    );
}
