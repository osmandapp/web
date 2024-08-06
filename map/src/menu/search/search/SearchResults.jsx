import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../../context/AppContext';
import CustomInput from './CustomInput';
import {
    ICON_KEY_NAME,
    ICON_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '../../../infoblock/components/wpt/WptTagsProvider';
import {
    DEFAULT_POI_ICON,
    formattingPoiType,
    getIconNameForPoiType,
    getSearchCategoryIcon,
} from '../../../manager/PoiManager';
import SearchResultItem from './SearchResultItem';
import { MenuButton } from './MenuButton';
import { Box } from '@mui/material';
import { SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';
import Loading from '../../errors/Loading';
import { useGeoLocation } from '../../../util/hooks/useGeoLocation';
import { LOCATION_UNAVAILABLE } from '../../../manager/FavoritesManager';
import { getCenterMapLoc } from '../../../manager/MapManager';
import { getDistance } from '../../../util/Utils';
import EmptySearch from '../../errors/EmptySearch';

export default function SearchResults({ value, setOpenSearchResults, setIsMainSearchScreen, setSearchValue }) {
    const ctx = useContext(AppContext);

    const [result, setResult] = useState(null);
    const [processingSearch, setProcessingSearch] = useState(false);
    const hash = window.location.hash;
    const [delayedHash, setDelayedHash] = useState(hash);
    const [locReady, setLocReady] = useState(false);
    const currentLoc = useGeoLocation(ctx);
    const debouncerTimer = useRef(0);

    // debounce map move/scroll
    useEffect(() => {
        debouncerTimer.current > 0 && clearTimeout(debouncerTimer.current);
        debouncerTimer.current = setTimeout(() => {
            debouncerTimer.current = 0;
            setDelayedHash(hash);
        }, 5000);

        return () => {
            clearTimeout(debouncerTimer.current);
        };
    }, [hash]);

    useEffect(() => {
        if (!currentLoc) return;
        let loc = getLoc();

        let features = ctx.searchResult?.features;
        if (!features) return;

        if (loc) {
            const arrWithDist = features.map((f) => {
                return {
                    ...f,
                    locDist: getDistance(loc.lat, loc.lng, f.geometry.coordinates[1], f.geometry.coordinates[0]),
                };
            });
            const sortedList = {
                features: arrWithDist.sort((a, b) => {
                    return a.locDist - b.locDist;
                }),
            };

            if (sortedList) {
                if (!features[0].icon) {
                    calculateIcons(sortedList.features, ctx).then(() => setResult({ features: sortedList.features }));
                } else {
                    setResult({ features: sortedList.features });
                }
            }
        }
    }, [currentLoc, delayedHash, ctx.searchResult?.features]);

    useEffect(() => {
        if (locReady) {
            setProcessingSearch(true);
            if (value) {
                if (value.type === SEARCH_TYPE_CATEGORY) {
                    searchByCategory(value);
                } else {
                    searchByWord(value);
                }
            }
        }
    }, [locReady]);

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
        } else {
            setProcessingSearch(false);
        }
    }, [ctx.searchResult]);

    function searchByCategory(value) {
        const preparedValue = {
            query: value.query,
            type: value.type,
        };
        ctx.setSearchQuery({
            search: preparedValue,
            type: SEARCH_TYPE_CATEGORY,
        });
    }

    function searchByWord(value) {
        let hash = window.location.hash;
        if (!hash) {
            alert('Please zoom in closer');
            return;
        }
        let arr = hash.split('/');
        if (parseInt(arr[0].substring(1)) < 7) {
            alert('Please zoom in closer');
            return;
        }

        const loc = getLoc();

        ctx.setSearchQuery({
            search: value,
            latlng: { lat: loc.lat, lng: loc.lng },
        });
    }

    function backToMainSearch() {
        setOpenSearchResults(false);
        setIsMainSearchScreen(true);
        ctx.setSearchResult(null);
        ctx.setSearchQuery(null);
    }

    const calculateIcons = async (features, ctx) => {
        const promises = features.map(async (f) => {
            const props = f.properties;
            if (props['web_type'].toLowerCase() === 'poi') {
                const iconName = getIconNameForPoiType({
                    iconKeyName: props[ICON_KEY_NAME],
                    typeOsmTag: props[TYPE_OSM_TAG],
                    typeOsmValue: props[TYPE_OSM_VALUE],
                    iconName: props[ICON_NAME],
                });
                f.icon = await getSearchCategoryIcon(iconName, ctx);
            } else {
                f.icon = await getSearchCategoryIcon(DEFAULT_POI_ICON, ctx);
            }
        });
        await Promise.all(promises);
    };

    return (
        <>
            <CustomInput
                menuButton={<MenuButton needBackButton={true} backToPrevScreen={backToMainSearch} />}
                setSearchValue={setSearchValue}
                defaultSearchValue={
                    value?.type === SEARCH_TYPE_CATEGORY ? formattingPoiType(value.query) : value?.query
                }
            />
            {processingSearch && <Loading />}
            <Box sx={{ overflowY: 'auto' }}>
                {result?.features.map((item, index) => (
                    <SearchResultItem key={index} item={item} index={index} />
                ))}
            </Box>
            {!result && !processingSearch && <EmptySearch />}
        </>
    );
}
