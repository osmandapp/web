import { useCallback, useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { useSearchParams } from 'react-router-dom';

const MAX_RECENT_OBJS = 5;

export const SEARCH_RESULTS_KEY = 'searchResults';
export const TRACKS_KEY = 'tracks';
export const FAVORITES_KEY = 'favorites';
export const POI_OBJECTS_KEY = 'pois';
export const EXPLORE_OBJS_KEY = 'exploreObjs';

export function useRecentDataSaver() {
    const ctx = useContext(AppContext);
    const [searchParams] = useSearchParams();

    const limitArray = (arr) => (arr.length > MAX_RECENT_OBJS ? arr.slice(0, MAX_RECENT_OBJS) : arr);

    const limitMap = (map) => {
        const res = new Map(map);
        const keys = Array.from(res.keys());
        for (let i = MAX_RECENT_OBJS; i < keys.length; i++) res.delete(keys[i]);
        return res;
    };

    return useCallback(
        (type, item) => {
            if (!type || !item) return;

            if (type === SEARCH_RESULTS_KEY) {
                const key = searchParams.toString();
                const value = item;
                if (value == null) return;

                ctx.setRecentObjs((prev) => {
                    const prevMap = prev.searchResults instanceof Map ? prev.searchResults : new Map();
                    const tmp = new Map(prevMap);
                    tmp.delete(key);
                    const next = new Map([[key, value], ...tmp.entries()]);
                    return { ...prev, searchResults: limitMap(next) };
                });
                return;
            }

            ctx.setRecentObjs((prev) => {
                const list = Array.isArray(prev?.[type]) ? prev[type] : [];
                const filtered = item.key != null ? list.filter((f) => f.key !== item.key) : list;
                const next = [{ ...item }, ...filtered];
                return { ...prev, [type]: limitArray(next) };
            });
        },
        [searchParams]
    );
}
