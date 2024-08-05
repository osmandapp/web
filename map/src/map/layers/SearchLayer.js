import { apiGet } from '../../util/HttpApi';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import PoiManager from '../../manager/PoiManager';

export const SEARCH_TYPE_CATEGORY = 'category';

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

    async function searchByWord(query, latlng) {
        const bbox = map.getBounds();
        let response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/search`, {
            apiCache: true,
            params: {
                lat: latlng.lat,
                lon: latlng.lng,
                search: query,
                northWest: `${bbox.getNorthWest().lat},${bbox.getNorthWest().lng}`,
                southEast: `${bbox.getSouthEast().lat},${bbox.getSouthEast().lng}`,
            },
        });
        if (response.ok) {
            let data = await response.json();
            ctx.setSearchResult(data);
        }
    }
}
