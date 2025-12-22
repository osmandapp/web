import { useMemo } from 'react';
import { matchPath, useNavigate, useSearchParams } from 'react-router-dom';
import { MAIN_URL_WITH_SLASH, SEARCH_RESULT_URL, SEARCH_URL } from '../../../manager/GlobalManager';

const QUERY_KEY = 'query';
const TYPE_KEY = 'type';
const CAT_KEY = 'key';
const LANG_KEY = 'lang';
const MODE_KEY = 'mode';

const QUERY_SEARCH_RESULT_PARAMS = [QUERY_KEY, TYPE_KEY, CAT_KEY, LANG_KEY, MODE_KEY];

export function buildSearchParamsFromQuery(q) {
    if (!q) return '';

    const type = q.type;
    const lang = q.lang;
    const query = q.search.query;
    const key = q.search.key;

    return buildSearchParams({ query, type, key, lang }, new URLSearchParams());
}

export default function useSearchNav() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const params = useMemo(() => parseParams(searchParams), [searchParams]);

    function updateSearchParams({ query, type, key, lang, mode } = {}) {
        return buildSearchParams({ query, type, key, lang, mode }, searchParams);
    }

    function navigateToSearchMenu() {
        navigate({
            pathname: MAIN_URL_WITH_SLASH + SEARCH_URL,
            hash: window.location.hash,
        });
    }

    function navigateToSearchResults({ query, type, key, lang, mode }) {
        const searchString = updateSearchParams({ query, type, key, lang, mode });
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
        setSearchParams,
        navigateToSearchResults,
        navigateToSearchMenu,
        isSearchEqualToUrl,
        isSearchResultRoute,
    };
}

function parseParams(sp) {
    return QUERY_SEARCH_RESULT_PARAMS.reduce((acc, key) => {
        const v = sp.get(key) || '';
        if (v) acc[key] = v;
        return acc;
    }, {});
}

function shallowEqualByKeys(a, b, keys) {
    for (const k of keys) {
        if ((a[k]?.toLowerCase() || '') !== (b[k]?.toLowerCase() || '')) return false;
    }
    return true;
}

function buildSearchParams({ query, type, key, lang, mode } = {}, currentSearchParams) {
    const sp = new URLSearchParams(currentSearchParams);

    query ? sp.set(QUERY_KEY, query) : sp.delete(QUERY_KEY);
    type ? sp.set(TYPE_KEY, type) : sp.delete(TYPE_KEY);
    key ? sp.set(CAT_KEY, key) : sp.delete(CAT_KEY);
    lang ? sp.set(LANG_KEY, lang) : sp.delete(LANG_KEY);
    mode ? sp.set(MODE_KEY, mode) : sp.delete(MODE_KEY);

    const str = sp.toString();
    return str ? `?${str}` : '';
}
