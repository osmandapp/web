import { useContext, useMemo } from 'react';
import { matchPath, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { MAIN_URL_WITH_SLASH, SEARCH_RESULT_URL, SEARCH_URL } from '../../../manager/GlobalManager';
import AppContext, {
    SEARCH_ENGINE_CLASSIC,
    SEARCH_ENGINE_SPATIAL,
    SPATIAL_SEARCH_STORAGE_KEY,
} from '../../../context/AppContext';
import { engineFromSpatial } from './useSpatialSearch';

const QUERY_KEY = 'query';
const TYPE_KEY = 'type';
const ENGINE_KEY = 'engine';

const QUERY_SEARCH_RESULT_PARAMS = [ENGINE_KEY, QUERY_KEY, TYPE_KEY];

export function buildSearchParamsFromQuery(q) {
    if (!q) return '';

    const engine = q.engine || getDefaultSearchEngine();
    const type = q.type;
    const query = q.query;

    return buildSearchParams({ engine, query, type });
}

export default function useSearchNav() {
    const ctx = useContext(AppContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const params = useMemo(() => parseParams(searchParams), [searchParams]);

    function updateSearchParams({ query, type } = {}) {
        return buildSearchParams({ engine: engineFromSpatial(ctx.spatialSearch), query, type });
    }

    function navigateToSearchMenu() {
        navigate({
            pathname: MAIN_URL_WITH_SLASH + SEARCH_URL,
            hash: window.location.hash,
        });
    }

    function navigateToSearchResults({ query, type }, options) {
        const searchString = updateSearchParams({ query, type });
        navigate(
            {
                pathname: MAIN_URL_WITH_SLASH + SEARCH_URL + SEARCH_RESULT_URL,
                search: searchString,
                hash: window.location.hash,
            },
            options
        );
    }

    const isSearchResultRoute = matchPath(
        { path: MAIN_URL_WITH_SLASH + SEARCH_URL + SEARCH_RESULT_URL + '*' },
        location.pathname
    );

    function isSearchEqualToUrl(q) {
        const s = buildSearchParamsFromQuery(q);
        const sp = new URLSearchParams(s?.startsWith('?') ? s.slice(1) : s);
        const fromCtx = parseParams(sp);
        return shallowEqualByKeys(fromCtx, params, QUERY_SEARCH_RESULT_PARAMS);
    }

    return {
        params,
        searchParams,
        setSearchParams,
        navigateToSearchResults,
        navigateToSearchMenu,
        isSearchEqualToUrl,
        isSearchResultRoute,
        location,
    };
}

function parseParams(sp) {
    const params = QUERY_SEARCH_RESULT_PARAMS.reduce((acc, key) => {
        const v = sp.get(key) || '';
        if (v) acc[key] = v;
        return acc;
    }, {});
    params[ENGINE_KEY] ||= getDefaultSearchEngine();
    return params;
}

function shallowEqualByKeys(a, b, keys) {
    for (const k of keys) {
        if ((a[k]?.toLowerCase() || '') !== (b[k]?.toLowerCase() || '')) return false;
    }
    return true;
}

function buildSearchParams({ engine, query, type } = {}) {
    const sp = new URLSearchParams();

    sp.set(ENGINE_KEY, engine || getDefaultSearchEngine());
    if (type) {
        sp.set(TYPE_KEY, type);
    } else {
        query && sp.set(QUERY_KEY, query);
    }

    const str = sp.toString();
    return str ? `?${str}` : '';
}

function getDefaultSearchEngine() {
    return globalThis.localStorage?.getItem(SPATIAL_SEARCH_STORAGE_KEY) === 'yes'
        ? SEARCH_ENGINE_SPATIAL
        : SEARCH_ENGINE_CLASSIC;
}
