import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { ReactComponent as CancelIcon } from '../../../assets/icons/ic_action_cancel.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/ic_action_search_dark.svg';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '../search.module.css';
import gStyles from '../../gstylesmenu.module.css';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../context/AppContext';
import { formattingPoiType } from '../../../manager/PoiManager';
import useSearchNav from '../../../util/hooks/search/useSearchNav';
import { SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';
import { debouncer } from '../../../context/TracksRoutingCache';

const SPATIAL_SEARCH_DEBOUNCE_MS = 500;

export default function CustomInput({
    menuButton = null,
    setSearchValue = null,
    type = null,
    defaultSearchValue = '',
    autoFocus = false,
}) {
    const ctx = useContext(AppContext);

    const inputRef = useRef();
    const spatialSearchTimerRef = useRef(null);

    const [value, setValue] = useState(defaultSearchValue);
    const [isFocused, setIsFocused] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const EMPTY_SEARCH = '';

    const { t } = useTranslation();

    const MIN_SIZE_SEARCH_VALUE = 1;

    const { navigateToSearchResults, params } = useSearchNav();

    useEffect(() => {
        if (!isInitialRender) {
            if (value === EMPTY_SEARCH) {
                if (spatialSearchTimerRef.current) {
                    clearTimeout(spatialSearchTimerRef.current);
                    spatialSearchTimerRef.current = null;
                }
                ctx.setSearchResult((prevResult) => {
                    return {
                        ...prevResult,
                        features: [],
                    };
                });
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
        return () => {
            if (spatialSearchTimerRef.current) {
                clearTimeout(spatialSearchTimerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!ctx.spatialSearch && spatialSearchTimerRef.current) {
            clearTimeout(spatialSearchTimerRef.current);
            spatialSearchTimerRef.current = null;
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

    function search(value) {
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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            search(e.target.value);
            inputRef.current?.blur();
            setIsFocused(false);
        }
    };

    return (
        <Box sx={{ mx: 2, my: 1 }}>
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
                    if (type === SEARCH_TYPE_CATEGORY && nextValue.length >= MIN_SIZE_SEARCH_VALUE) {
                        search(formattingPoiType(nextValue));
                    } else if (ctx.spatialSearch && !type && nextValue.length >= MIN_SIZE_SEARCH_VALUE) {
                        debouncer(() => search(nextValue), spatialSearchTimerRef, SPATIAL_SEARCH_DEBOUNCE_MS);
                    }
                }}
                onKeyDown={(e) => handleKeyPress(e)}
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
        </Box>
    );
}
