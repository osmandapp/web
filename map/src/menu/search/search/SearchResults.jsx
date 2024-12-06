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
import { getDistance } from '../../../util/Utils';
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
import { getIconByType, SEARCH_ICON_BRAND } from '../../../manager/SearchManager';

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
            const type = props[CATEGORY_TYPE];
            if (type === searchTypeMap.POI_TYPE || type === searchTypeMap.POI) {
                if (props[CATEGORY_ICON] === SEARCH_ICON_BRAND) {
                    f.icon = await getSearchResultIcon({ result: SEARCH_ICON_BRAND, ctx });
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
                                    setSearchValue={setSearchValue}
                                />
                            ))}
                    </Box>
                ))}
        </>
    );
}
