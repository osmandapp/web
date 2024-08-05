import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../context/AppContext';
import CustomInput from './CustomInput';
import {
    ICON_KEY_NAME,
    ICON_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '../../../infoblock/components/wpt/WptTagsProvider';
import { formattingPoiType, getIconNameForPoiType, getSearchCategoryIcon } from '../../../manager/PoiManager';
import SearchResultItem from './SearchResultItem';
import { MenuButton } from './MenuButton';
import { Box } from '@mui/material';
import { SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';
import Loading from '../../errors/Loading';

export default function SearchResults({ value, setOpenSearchResults, setIsMainSearchScreen, setSearchValue }) {
    const ctx = useContext(AppContext);

    const [result, setResult] = useState(null);

    useEffect(() => {
        // hide explore layers
        ctx.setSearchSettings({ ...ctx.searchSettings, showOnMainSearch: false });
    }, []);

    useEffect(() => {
        if (value) {
            if (value.type === SEARCH_TYPE_CATEGORY) {
                searchByCategory(value);
            } else {
                searchByWord(value);
            }
        }
    }, [value]);

    function searchByCategory(value) {
        const preparedValue = {
            query: formattingPoiType(value.query),
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
        let latlng = { lat: parseFloat(arr[1]), lng: parseFloat(arr[2]) };
        ctx.setSearchQuery({
            search: value,
            latlng: latlng,
        });
    }

    function backToMainSearch() {
        setOpenSearchResults(false);
        setIsMainSearchScreen(true);
        ctx.setSearchResult(null);
        ctx.setSearchQuery(null);
    }

    useEffect(() => {
        if (ctx.searchResult?.features) {
            calculateIcons(ctx.searchResult.features, ctx).then();
        }
        setResult(ctx.searchResult);
    }, [ctx.searchResult]);

    const calculateIcons = async (features, ctx) => {
        const promises = features.map(async (feature) => {
            const iconName = getIconNameForPoiType({
                iconKeyName: feature.properties[ICON_KEY_NAME],
                typeOsmTag: feature.properties[TYPE_OSM_TAG],
                typeOsmValue: feature.properties[TYPE_OSM_VALUE],
                iconName: feature.properties[ICON_NAME],
            });
            feature.icon = await getSearchCategoryIcon(iconName, ctx);
        });
        await Promise.all(promises);
    };

    return (
        <>
            <CustomInput
                menuButton={<MenuButton needBackButton={true} backToPrevScreen={backToMainSearch} />}
                setSearchValue={setSearchValue}
                defaultSearchValue={value.type === SEARCH_TYPE_CATEGORY ? formattingPoiType(value.query) : value.query}
            />
            {!result && <Loading />}
            <Box sx={{ overflowY: 'auto' }}>
                {result?.features.map((item, index) => (
                    <SearchResultItem key={index} item={item} index={index} />
                ))}
            </Box>
        </>
    );
}
