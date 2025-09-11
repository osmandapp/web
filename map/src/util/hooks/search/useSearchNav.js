import { useMemo } from 'react';
import { matchPath, useNavigate, useSearchParams } from 'react-router-dom';
import { MAIN_URL_WITH_SLASH, SEARCH_RESULT_URL, SEARCH_URL } from '../../../manager/GlobalManager';

const QUERY_KEY = 'query';
const TYPE_KEY = 'type';
const CAT_KEY = 'key';
const LANG_KEY = 'lang';

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

    function updateSearchParams({ query, type, key, lang } = {}) {
        return buildSearchParams({ query, type, key, lang }, searchParams);
    }

    function navigateToSearchMenu() {
        navigate({
            pathname: MAIN_URL_WITH_SLASH + SEARCH_URL,
            hash: window.location.hash,
        });
    }

    function navigateToSearchResults({ query, type, key, lang }) {
        const searchString = updateSearchParams({ query, type, key, lang });
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

    return {
        params,
        searchParams,
        setSearchParams,
        navigateToSearchResults,
        navigateToSearchMenu,
        isSearchResultRoute,
    };
}

function parseParams(sp) {
    const keys = [QUERY_KEY, TYPE_KEY, CAT_KEY, LANG_KEY];
    return keys.reduce((acc, key) => {
        const v = sp.get(key) || '';
        if (v) acc[key] = v;
        return acc;
    }, {});
}

function buildSearchParams({ query, type, key, lang } = {}, currentSearchParams) {
    const sp = new URLSearchParams(currentSearchParams);

    query ? sp.set(QUERY_KEY, query) : sp.delete(QUERY_KEY);
    type ? sp.set(TYPE_KEY, type) : sp.delete(TYPE_KEY);
    key ? sp.set(CAT_KEY, key) : sp.delete(CAT_KEY);
    lang ? sp.set(LANG_KEY, lang) : sp.delete(LANG_KEY);

    const str = sp.toString();
    return str ? `?${str}` : '';
}
