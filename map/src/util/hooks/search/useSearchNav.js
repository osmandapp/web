import { useMemo } from 'react';
import { matchPath, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { MAIN_URL_WITH_SLASH, SEARCH_RESULT_URL, SEARCH_URL } from '../../../manager/GlobalManager';
import { SEARCH_ENGINE_CLASSIC, SEARCH_ENGINE_SPATIAL, SPATIAL_SEARCH_STORAGE_KEY } from '../../../context/AppContext';

const QUERY_KEY = 'query';
const TYPE_KEY = 'type';
const ENGINE_KEY = 'engine';

const QUERY_SEARCH_RESULT_PARAMS = [ENGINE_KEY, QUERY_KEY, TYPE_KEY];

export function buildSearchParamsFromQuery(q) {
    if (!q) return '';

    const engine = normalizeSearchEngine(q.engine) || getDefaultSearchEngine();
    const type = q.type;
    const query = q.query;

    return buildSearchParams({ engine, query, type }, new URLSearchParams());
}

export default function useSearchNav() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const params = useMemo(() => parseParams(searchParams), [searchParams]);

    function updateSearchParams({ engine, query, type } = {}) {
        return buildSearchParams({ engine: normalizeSearchEngine(engine) || params.engine, query, type }, searchParams);
    }

    function updateSearchEngine(engine) {
        const searchString = buildSearchParams({ engine, query: params.query, type: params.type }, searchParams);
        navigate({
            pathname: location.pathname,
            search: searchString,
            hash: location.hash,
        });
    }

    function navigateToSearchMenu() {
        navigate({
            pathname: MAIN_URL_WITH_SLASH + SEARCH_URL,
            hash: window.location.hash,
        });
    }

    function navigateToSearchResults({ engine, query, type }) {
        const searchString = updateSearchParams({ engine, query, type });
        navigate({
            pathname: MAIN_URL_WITH_SLASH + SEARCH_URL + SEARCH_RESULT_URL,
            search: searchString,
            hash: window.location.hash,
        });
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
        updateSearchEngine,
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
        if (!v) return acc;
        if (key === ENGINE_KEY) {
            const engine = normalizeSearchEngine(v);
            if (engine) acc[key] = engine;
            return acc;
        }
        acc[key] = v;
        return acc;
    }, {});
    if (!params[ENGINE_KEY]) {
        params[ENGINE_KEY] = getDefaultSearchEngine();
    }
    return params;
}

function shallowEqualByKeys(a, b, keys) {
    for (const k of keys) {
        if ((a[k]?.toLowerCase() || '') !== (b[k]?.toLowerCase() || '')) return false;
    }
    return true;
}

function buildSearchParams({ engine, query, type } = {}, currentSearchParams) {
    const current = new URLSearchParams(currentSearchParams);
    const sp = new URLSearchParams();

    const nextEngine = normalizeSearchEngine(engine) || getDefaultSearchEngine();
    sp.set(ENGINE_KEY, nextEngine);

    if (!type && query) {
        sp.set(QUERY_KEY, query);
    }
    if (type) {
        sp.set(TYPE_KEY, type);
    }

    current.forEach((value, key) => {
        if (!QUERY_SEARCH_RESULT_PARAMS.includes(key)) {
            sp.append(key, value);
        }
    });

    const str = sp.toString();
    return str ? `?${str}` : '';
}

function normalizeSearchEngine(engine) {
    if (engine === SEARCH_ENGINE_CLASSIC || engine === SEARCH_ENGINE_SPATIAL) {
        return engine;
    }
    return null;
}

function getDefaultSearchEngine() {
    return globalThis.localStorage?.getItem(SPATIAL_SEARCH_STORAGE_KEY) === 'yes'
        ? SEARCH_ENGINE_SPATIAL
        : SEARCH_ENGINE_CLASSIC;
}
