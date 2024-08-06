import { apiGet } from '../../util/HttpApi';
import { useContext, useEffect, useState } from 'react';
import AppContext, { OBJECT_SEARCH } from '../../context/AppContext';
import PoiManager from '../../manager/PoiManager';
import { useMap } from 'react-leaflet';
import { createPoiLayer } from './PoiLayer';
import L from 'leaflet';

export const SEARCH_TYPE_CATEGORY = 'category';
export const SEARCH_LAYER_ID = 'search-layer';

export function findFeatureGroupById(map, id) {
    let foundGroup = null;
    map.eachLayer(function (layer) {
        if (layer instanceof L.FeatureGroup && layer.options.id === id) {
            foundGroup = layer;
        }
    });
    return foundGroup;
}

export default function SearchLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if (ctx.searchQuery?.search) {
            const searchData = ctx.searchQuery.search;
            if (ctx.searchQuery.type === SEARCH_TYPE_CATEGORY) {
                const category = PoiManager.formattingPoiFilter(searchData?.query, true);
                searchByCategory(category);
                setSelectedCategory(category);
            } else {
                if (ctx.searchQuery.latlng) {
                    searchByWord(searchData.query, ctx.searchQuery.latlng).then();
                } else {
                    console.debug('SearchLayer: search query without latlng');
                }
            }
        } else {
            if (selectedCategory) {
                removeCategory(selectedCategory);
            }
        }
    }, [ctx.searchQuery]);

    async function searchByWord(query, latlng) {
        let response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/search`, {
            apiCache: true,
            params: {
                lat: latlng.lat,
                lon: latlng.lng,
                text: query,
            },
        });
        if (response.ok) {
            let data = await response.json();
            ctx.setSearchResult(data);
        }
    }

    function removeOldSearchLayer() {
        const searchLayer = findFeatureGroupById(map, SEARCH_LAYER_ID);
        if (searchLayer) {
            map.removeLayer(searchLayer);
        }
    }

    useEffect(() => {
        const addAsyncLayers = async () => {
            if (!ctx.searchResult) {
                removeOldSearchLayer();
                if (ctx.searchQuery?.type === SEARCH_TYPE_CATEGORY) {
                    const category = PoiManager.formattingPoiFilter(ctx.searchQuery?.search?.query, true);
                    removeCategory(category);
                }
            } else {
                if (ctx.searchResult?.features && ctx.searchQuery.type !== SEARCH_TYPE_CATEGORY) {
                    const layers = await createPoiLayer({
                        ctx,
                        poiList: ctx.searchResult?.features,
                        globalPoiIconCache: ctx.poiIconCache,
                        type: OBJECT_SEARCH,
                    });
                    layers.addTo(map);
                }
            }
        };
        addAsyncLayers().then();
    }, [ctx.searchResult]);

    function searchByCategory(category) {
        if (!ctx.showPoiCategories.includes(category)) {
            ctx.showPoiCategories.push(category);
        }
        ctx.setShowPoiCategories([...ctx.showPoiCategories]);
    }

    function removeCategory(category) {
        const index = ctx.showPoiCategories.indexOf(category);
        if (index > -1) {
            ctx.showPoiCategories.splice(index, 1);
        }
        ctx.setShowPoiCategories([...ctx.showPoiCategories]);
    }
}
