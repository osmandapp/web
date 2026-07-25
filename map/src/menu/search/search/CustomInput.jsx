import { Box, IconButton, InputAdornment, List, ListItemButton, Paper, TextField, Typography } from '@mui/material';
import { ReactComponent as CancelIcon } from '../../../assets/icons/ic_action_cancel.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/ic_action_search_dark.svg';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '../search.module.css';
import gStyles from '../../gstylesmenu.module.css';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../context/AppContext';
import MapContext from '../../../context/MapContext';
import { CATEGORY_TYPE, WEB_VISIBLE_LEVEL } from '../../../infoblock/components/wpt/WptTagsProvider';
import { formattingPoiType } from '../../../manager/PoiManager';
import { LOCATION_UNAVAILABLE } from '../../../manager/FavoritesManager';
import { searchByWordApi } from '../../../manager/SearchApi';
import useSearchNav from '../../../util/hooks/search/useSearchNav';
import { useGeoLocation } from '../../../util/hooks/useGeoLocation';
import { SEARCH_TYPE_CATEGORY, searchTypeMap } from '../../../map/layers/SearchLayer';
import { getMapCenter } from '../../../map/layers/MapStateLayer';
import { abortApiRequest } from '../../../util/HttpApi';
import { debouncer } from '../../../context/TracksRoutingCache';
import { getPropsFromSearchResultItem } from './SearchResultItem';

const SPATIAL_SEARCH_DEBOUNCE_MS = 500;
const SUGGESTIONS_LIMIT = 8;
const SUGGESTIONS_ABORT_KEY = 'spatialAutocomplete';

export default function CustomInput({
    menuButton = null,
    setSearchValue = null,
    type = null,
    defaultSearchValue = '',
    autoFocus = false,
}) {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);

    const { t } = useTranslation();

    const { navigateToSearchResults, params } = useSearchNav();
    const currentLoc = useGeoLocation(ctx);

    const inputRef = useRef();
    const suggestionsTimerRef = useRef(null);

    const [value, setValue] = useState(defaultSearchValue);
    const [isFocused, setIsFocused] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [suggestions, setSuggestions] = useState([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const EMPTY_SEARCH = '';
    const MIN_SIZE_SEARCH_VALUE = 1;

    useEffect(() => {
        if (!isInitialRender) {
            if (value === EMPTY_SEARCH) {
                clearSearch();
            }
        } else {
            setIsInitialRender(false);
        }
    }, [value]);

    useEffect(() => {
        setValue((prev) => (defaultSearchValue !== EMPTY_SEARCH || prev === EMPTY_SEARCH ? defaultSearchValue : prev));
    }, [defaultSearchValue]);

    useEffect(() => {
        // typing suggestions work only for the main word search with the spatial engine
        const suggestionsEnabled = ctx.spatialSearch && !type && !setSearchValue;
        if (!suggestionsEnabled || !isFocused || value.length < MIN_SIZE_SEARCH_VALUE) {
            clearSuggestions();
            return;
        }
        debouncer(() => loadSuggestions(value), suggestionsTimerRef, SPATIAL_SEARCH_DEBOUNCE_MS);

        return () => {
            cancelPendingSuggestions();
        };
    }, [value, isFocused, ctx.spatialSearch, type, setSearchValue]);

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

    function clearSuggestions() {
        setSuggestions([]);
        setHighlightedIndex(-1);
    }

    function cancelPendingSuggestions() {
        if (suggestionsTimerRef.current) {
            clearTimeout(suggestionsTimerRef.current);
            suggestionsTimerRef.current = null;
        }
        abortApiRequest(SUGGESTIONS_ABORT_KEY);
    }

    function getSuggestionsLocation() {
        if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE && ctx.visibleBounds?.contains(currentLoc)) {
            return currentLoc;
        }

        return getMapCenter(mtx, window.location.hash);
    }

    async function loadSuggestions(query) {
        const bbox = mtx.visibleBboxInfo?.bounds;
        const latlng = getSuggestionsLocation();
        if (!bbox || !latlng) {
            clearSuggestions();
            return;
        }
        const response = await searchByWordApi({
            latlng,
            bbox,
            query,
            spatial: true,
            autocomplete: true,
            abortControllerKey: SUGGESTIONS_ABORT_KEY,
        });
        if (response?.ok) {
            const data = await response.json();
            setSuggestions(buildSuggestions(data?.features, ctx, t));
            setHighlightedIndex(-1);
        } else if (!response?.aborted) {
            clearSuggestions();
        }
    }

    function search(value) {
        cancelPendingSuggestions();
        clearSuggestions();
        if (setSearchValue) {
            setSearchValue({
                query: value,
                type,
            });
            return;
        }
        // force a re-search only when the query text is unchanged (navigation alone won't re-trigger it);
        // for a changed query the URL param change already triggers a single search — avoids a stale double search
        if (value === params.query) {
            ctx.setForceSearch(true);
        }
        navigateToSearchResults({ query: value });
    }

    function applySuggestion(suggestion) {
        setValue(suggestion.query);
        search(suggestion.query);
        inputRef.current?.blur();
        setIsFocused(false);
    }

    function clearSearch() {
        cancelPendingSuggestions();
        clearSuggestions();
        ctx.setSearchResult((prevResult) => ({
            ...prevResult,
            features: [],
        }));
        if (setSearchValue) {
            setSearchValue(null);
        } else {
            ctx.setSearchQuery({ query: '', type: null });
            navigateToSearchResults({ query: '', type: null });
        }
    }

    const handleKeyPress = (e) => {
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
        if (e.key === 'Escape') {
            clearSuggestions();
            return;
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
                applySuggestion(suggestions[highlightedIndex]);
                return;
            }
            search(e.target.value);
            inputRef.current?.blur();
            setIsFocused(false);
        }
    };

    return (
        <Box sx={{ mx: 2, my: 1 }} className={styles.autocompleteInputBox}>
            <TextField
                inputRef={inputRef}
                className={`${styles.searchInputField} ${styles.customAutofillFix}`}
                sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused': {
                        background: '#FFF',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid var(--selected-color);',
                    },
                }}
                placeholder={t('shared_string_search')}
                type="text"
                fullWidth
                id={'se-search-input'}
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
                    if (type === SEARCH_TYPE_CATEGORY && nextValue.length >= MIN_SIZE_SEARCH_VALUE) {
                        search(formattingPoiType(nextValue));
                    }
                }}
                onKeyDown={handleKeyPress}
                value={value}
                InputProps={{
                    sx: {
                        paddingLeft: menuButton ? '0px' : '8px',
                    },
                    className: styles.searchInput,
                    startAdornment: <InputAdornment position="start">{menuButton}</InputAdornment>,
                    endAdornment:
                        value === '' || !isFocused ? (
                            <IconButton
                                id={'se-search-input-cancel'}
                                className={`${gStyles.icon} ${styles.searchInputIcon} ${isFocused ? styles.focusedIcon : ''}`}
                                onClick={() => {
                                    setValue(EMPTY_SEARCH);
                                    inputRef.current?.focus();
                                }}
                            >
                                <CancelIcon />
                            </IconButton>
                        ) : (
                            <IconButton
                                id={'se-search-input-search'}
                                className={`${gStyles.icon} ${styles.searchInputIcon} ${isFocused ? styles.focusedIcon : ''}`}
                                onClick={() => {
                                    search(value);
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                        ),
                }}
            />
            {isFocused && suggestions.length > 0 && (
                <Paper className={styles.autocompleteSelect} elevation={4} id={'se-search-suggestions'}>
                    <List dense disablePadding>
                        {suggestions.map((suggestion, index) => (
                            <ListItemButton
                                key={`${suggestion.name}-${suggestion.info}`}
                                selected={index === highlightedIndex}
                                className={styles.autocompleteSelectItem}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => applySuggestion(suggestion)}
                            >
                                <Typography
                                    className={styles.autocompleteSelectText}
                                    title={`${suggestion.name}${suggestion.info ? ` · ${suggestion.info}` : ''}`}
                                >
                                    <span className={styles.autocompleteSelectName}>{suggestion.name}</span>
                                    {suggestion.info && (
                                        <span className={styles.autocompleteSelectInfo}> · {suggestion.info}</span>
                                    )}
                                </Typography>
                            </ListItemButton>
                        ))}
                    </List>
                </Paper>
            )}
        </Box>
    );
}

function buildSuggestions(features, ctx, t) {
    const seen = new Set();

    return (features ?? [])
        .filter((feature) => feature?.properties?.[WEB_VISIBLE_LEVEL] === 0)
        .map((feature) => {
            const props = getPropsFromSearchResultItem(feature.properties, t, null, ctx.listFiles, ctx.unitsSettings);
            const name = props.name?.trim();

            return {
                name,
                info: props.info ?? props.type,
                query: buildSuggestionQuery(props, feature.properties?.[CATEGORY_TYPE]) || name,
            };
        })
        .filter((suggestion) => {
            const key = `${suggestion.name?.toLowerCase()}-${suggestion.info?.toLowerCase()}`;
            if (!suggestion.name || seen.has(key)) {
                return false;
            }
            seen.add(key);

            return true;
        })
        .slice(0, SUGGESTIONS_LIMIT);
}

// a suggestion click runs the full search: rebuild a query specific enough to hit the picked object
function buildSuggestionQuery({ name, info, type, city }, categoryType) {
    const cleanName = name?.trim();
    if (categoryType === searchTypeMap.POI_TYPE) {
        return cleanName;
    }
    const parts = [cleanName, info, city];
    if (
        type &&
        type.toLowerCase() !== searchTypeMap.STREET.toLowerCase() &&
        type.toLowerCase() !== searchTypeMap.HOUSE.toLowerCase()
    ) {
        parts.push(type);
    }

    return parts.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}
