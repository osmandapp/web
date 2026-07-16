import { Box, CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
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

export const EMPTY_SEARCH = '';
export const MIN_SIZE_SEARCH_VALUE = 1;

export function useSearchInputSubmit({ setSearchValue = null, type = null }) {
    const ctx = useContext(AppContext);
    const { navigateToSearchResults, params } = useSearchNav();

    return (value) => {
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
    };
}

export function SearchInputField({
    menuButton = null,
    inputRef,
    value,
    isFocused,
    onFocus,
    onBlur,
    onChange,
    onKeyDown,
    onClear,
    onSearch,
    loading = false,
}) {
    const { t } = useTranslation();

    return (
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
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
            InputProps={{
                sx: {
                    paddingLeft: menuButton ? '0px' : '8px',
                },
                className: styles.searchInput,
                startAdornment: <InputAdornment position="start">{menuButton}</InputAdornment>,
                endAdornment: loading ? (
                    <Box className={`${styles.searchInputIcon} ${styles.searchInputProgress}`}>
                        <CircularProgress size={24} />
                    </Box>
                ) : value === '' || !isFocused ? (
                    <IconButton
                        id={'se-search-input-cancel'}
                        className={`${gStyles.icon} ${styles.searchInputIcon} ${isFocused ? styles.focusedIcon : ''}`}
                        onClick={onClear}
                    >
                        <CancelIcon />
                    </IconButton>
                ) : (
                    <IconButton
                        id={'se-search-input-search'}
                        className={`${gStyles.icon} ${styles.searchInputIcon} ${isFocused ? styles.focusedIcon : ''}`}
                        onClick={onSearch}
                    >
                        <SearchIcon />
                    </IconButton>
                ),
            }}
        />
    );
}

export default function CustomInput({
    menuButton = null,
    setSearchValue = null,
    type = null,
    defaultSearchValue = '',
    autoFocus = false,
}) {
    const ctx = useContext(AppContext);
    const { navigateToSearchResults } = useSearchNav();

    const inputRef = useRef();

    const [value, setValue] = useState(defaultSearchValue);
    const [isFocused, setIsFocused] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);

    const search = useSearchInputSubmit({ setSearchValue, type });

    useEffect(() => {
        if (!isInitialRender) {
            if (value === EMPTY_SEARCH) {
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
                    if (type === SEARCH_TYPE_CATEGORY && nextValue.length >= MIN_SIZE_SEARCH_VALUE) {
                        search(formattingPoiType(nextValue));
                    }
                }}
                onKeyDown={handleKeyPress}
                onClear={() => setValue(EMPTY_SEARCH)}
                onSearch={() => search(value)}
            />
        </Box>
    );
}
