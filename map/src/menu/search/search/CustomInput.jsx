import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { ReactComponent as CancelIcon } from '../../../assets/icons/ic_action_cancel.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/ic_action_search_dark.svg';
import React, { useContext, useEffect, useState } from 'react';
import styles from '../search.module.css';
import gStyles from '../../gstylesmenu.module.css';
import { SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../context/AppContext';
import { formattingPoiType } from '../../../manager/PoiManager';
import useSearchNav from '../../../util/hooks/search/useSearchNav';

export default function CustomInput({
    menuButton = null,
    setSearchValue = null,
    type = null,
    defaultSearchValue = '',
}) {
    const ctx = useContext(AppContext);

    const [value, setValue] = useState(defaultSearchValue);
    const [isFocused, setIsFocused] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const EMPTY_SEARCH = '';

    const { t } = useTranslation();

    const MIN_SIZE_SEARCH_VALUE = 1;

    const { navigateToSearchResults } = useSearchNav();

    useEffect(() => {
        if (!isInitialRender) {
            if (value === EMPTY_SEARCH) {
                ctx.setSearchResult((prevResult) => {
                    return {
                        ...prevResult,
                        features: [],
                    };
                });
                ctx.setSearchQuery((prev) => ({
                    ...prev,
                    search: { query: '' },
                    type: null,
                }));
                navigateToSearchResults({ query: '', type: null });
            }
        } else {
            setIsInitialRender(false);
        }
    }, [value]);

    useEffect(() => {
        setValue(defaultSearchValue);
    }, [defaultSearchValue]);

    function search(value) {
        if (setSearchValue) {
            setSearchValue({
                query: value,
                type,
            });
            return;
        }
        navigateToSearchResults({ query: value, type });
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            search(e.target.value);
        }
    };

    return (
        <Box sx={{ mx: 2, my: 1 }}>
            <TextField
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
                    setValue(e.target.value);
                    if (type === SEARCH_TYPE_CATEGORY && e.target.value.length >= MIN_SIZE_SEARCH_VALUE) {
                        search(formattingPoiType(e.target.value));
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
