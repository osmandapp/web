import { Box, List, ListItemButton, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../../context/AppContext';
import MapContext from '../../../context/MapContext';
import { WEB_VISIBLE_LEVEL } from '../../../infoblock/components/wpt/WptTagsProvider';
import { getMapCenter } from '../../../map/layers/MapStateLayer';
import { LOCATION_UNAVAILABLE } from '../../../manager/FavoritesManager';
import { searchByWordApi } from '../../../manager/SearchApi';
import { abortApiRequest } from '../../../util/HttpApi';
import { useGeoLocation } from '../../../util/hooks/useGeoLocation';
import useSearchNav from '../../../util/hooks/search/useSearchNav';
import styles from '../search.module.css';
import { EMPTY_SEARCH, MIN_SIZE_SEARCH_VALUE, SearchInputField, useSearchInputSubmit } from './CustomInput';
import { getPropsFromSearchResultItem } from './SearchResultItem';
import { useTranslation } from 'react-i18next';

const AUTOCOMPLETE_DEBOUNCE_MS = 500;
const AUTOCOMPLETE_LIMIT = 8;
const AUTOCOMPLETE_ABORT_KEY = 'spatialAutocomplete';

function toAutocompleteQuery(value) {
    return value
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => `${word}.`)
        .join(' ');
}

function getAutocompleteStrings(features, ctx, t) {
    const seen = new Set();
    return (features ?? [])
        .filter((feature) => feature?.properties?.[WEB_VISIBLE_LEVEL] === 0)
        .map(
            (feature) =>
                getPropsFromSearchResultItem(feature.properties, t, null, ctx.listFiles, ctx.unitsSettings).name
        )
        .filter(Boolean)
        .map((name) => name.trim())
        .filter((name) => {
            const key = name.toLocaleLowerCase();
            if (!name || seen.has(key)) {
                return false;
            }
            seen.add(key);
            return true;
        })
        .slice(0, AUTOCOMPLETE_LIMIT);
}

export default function SpatialAutocompleteInput({
    menuButton = null,
    setSearchValue = null,
    type = null,
    defaultSearchValue = '',
    autoFocus = false,
}) {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const { navigateToSearchResults } = useSearchNav();
    const currentLoc = useGeoLocation(ctx);
    const { t } = useTranslation();

    const inputRef = useRef();

    const [value, setValue] = useState(defaultSearchValue);
    const [isFocused, setIsFocused] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [suggestions, setSuggestions] = useState([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const search = useSearchInputSubmit({ setSearchValue, type });

    useEffect(() => {
        if (!isInitialRender) {
            if (value === EMPTY_SEARCH) {
                clearAutocomplete();
                ctx.setSearchResult((prevResult) => ({
                    ...prevResult,
                    features: [],
                }));
                if (setSearchValue) {
                    setSearchValue(null);
                } else {
                    ctx.setSearchQuery((prev) => ({
                        ...prev,
                        query: '',
                        type: null,
                    }));
                    navigateToSearchResults({ query: '', type: null });
                }
            }
        } else {
            setIsInitialRender(false);
        }
    }, [value]);

    useEffect(() => {
        setValue((prev) => (defaultSearchValue !== EMPTY_SEARCH || prev === EMPTY_SEARCH ? defaultSearchValue : prev));
    }, [defaultSearchValue]);

    useEffect(() => {
        if (!ctx.spatialSearch) {
            clearAutocomplete();
        }
    }, [ctx.spatialSearch]);

    useEffect(() => {
        const inputElement = inputRef.current;
        if (!inputElement) {
            return;
        }
        if (!autoFocus) {
            inputElement.blur();
            setIsFocused(false);
            return;
        }
        inputElement.focus();
        setIsFocused(true);
    }, [autoFocus]);

    function clearAutocomplete() {
        setSuggestions([]);
        setHighlightedIndex(-1);
    }

    function getAutocompleteLoc() {
        if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE && ctx.visibleBounds?.contains(currentLoc)) {
            return currentLoc;
        }
        return getMapCenter(mtx, globalThis.location.hash);
    }

    async function loadAutocomplete(nextValue, isCancelled) {
        const query = toAutocompleteQuery(nextValue);
        const loc = getAutocompleteLoc();
        const bbox = mtx.visibleBboxInfo?.bounds;
        if (!query || !loc || !bbox) {
            if (!isCancelled()) {
                setSuggestions([]);
            }
            return;
        }

        const response = await searchByWordApi({
            latlng: loc,
            bbox,
            query,
            spatial: true,
            abortControllerKey: AUTOCOMPLETE_ABORT_KEY,
        });
        if (isCancelled()) {
            return;
        }
        if (response?.ok) {
            setSuggestions(getAutocompleteStrings(response.data?.features, ctx, t));
            setHighlightedIndex(-1);
        } else if (!response?.aborted) {
            setSuggestions([]);
        }
    }

    function submitSearch(nextValue) {
        clearAutocomplete();
        setValue(nextValue);
        search(nextValue);
        inputRef.current?.blur();
        setIsFocused(false);
    }

    function handleKeyDown(e) {
        if (e.key === 'ArrowDown' && suggestions.length > 0) {
            e.preventDefault();
            setHighlightedIndex((prev) => (prev + 1) % suggestions.length);
            return;
        }
        if (e.key === 'ArrowUp' && suggestions.length > 0) {
            e.preventDefault();
            setHighlightedIndex((prev) => (prev <= 0 ? suggestions.length - 1 : prev - 1));
            return;
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            submitSearch(highlightedIndex >= 0 ? suggestions[highlightedIndex] : e.target.value);
            return;
        }
        if (e.key === 'Escape') {
            clearAutocomplete();
        }
    }

    useEffect(() => {
        if (!isFocused || value.length < MIN_SIZE_SEARCH_VALUE) {
            abortApiRequest(AUTOCOMPLETE_ABORT_KEY);
            clearAutocomplete();
            return;
        }
        let cancelled = false;
        const timeout = setTimeout(() => loadAutocomplete(value, () => cancelled), AUTOCOMPLETE_DEBOUNCE_MS);
        return () => {
            cancelled = true;
            clearTimeout(timeout);
            abortApiRequest(AUTOCOMPLETE_ABORT_KEY);
        };
    }, [value, isFocused, currentLoc, mtx.visibleBboxInfo?.bounds, ctx.visibleBounds]);

    const showSuggestions = isFocused && suggestions.length > 0;

    return (
        <Box sx={{ mx: 2, my: 1 }} className={styles.autocompleteInputBox}>
            <SearchInputField
                inputRef={inputRef}
                menuButton={menuButton}
                value={value}
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setTimeout(() => {
                        setIsFocused(false);
                    }, 200);
                }}
                onChange={(e) => {
                    const nextValue = e.target.value;
                    setValue(nextValue);
                    setHighlightedIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                onClear={() => setValue(EMPTY_SEARCH)}
                onSearch={() => submitSearch(value)}
            />
            {showSuggestions && (
                <Paper className={styles.autocompleteSelect} elevation={4}>
                    <List dense disablePadding>
                        {suggestions.map((suggestion, index) => (
                            <ListItemButton
                                key={suggestion}
                                selected={index === highlightedIndex}
                                className={styles.autocompleteSelectItem}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => submitSearch(suggestion)}
                            >
                                <Typography className={styles.autocompleteSelectText}>{suggestion}</Typography>
                            </ListItemButton>
                        ))}
                    </List>
                </Paper>
            )}
        </Box>
    );
}
