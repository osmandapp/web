import { TextField } from '@mui/material/';
import { Box, IconButton, InputAdornment } from '@mui/material';
import { ReactComponent as CancelIcon } from '../../../assets/icons/ic_action_cancel.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/ic_action_search_dark.svg';
import React, { useContext, useEffect, useState } from 'react';
import styles from '../search.module.css';
import gStyles from '../../gstylesmenu.module.css';
import { SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../context/AppContext';
import { formattingPoiType } from '../../../manager/PoiManager';

export default function CustomInput({ menuButton = null, setSearchValue, type = null, defaultSearchValue = '' }) {
    const ctx = useContext(AppContext);

    const [value, setValue] = useState(defaultSearchValue);
    const [isFocused, setIsFocused] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const EMPTY_SEARCH = '';

    const { t } = useTranslation();

    const MIN_SIZE_SEARCH_VALUE = 3;

    useEffect(() => {
        if (!isInitialRender) {
            if (value === EMPTY_SEARCH) {
                ctx.setSearchResult(null);
                setSearchValue(null);
            }
        } else {
            setIsInitialRender(false);
        }
    }, [value]);

    useEffect(() => {
        setValue(defaultSearchValue);
    }, [defaultSearchValue]);

    function search(value) {
        setSearchValue({
            query: value,
            type: type,
        });
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            search(e.target.value);
        }
    };

    return (
        <Box sx={{ mx: 2, my: 1 }} id={'se-search-input'}>
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
                                className={`${gStyles.icon} ${styles.searchInputIcon} ${isFocused ? styles.focusedIcon : ''}`}
                                onClick={() => {
                                    setValue(EMPTY_SEARCH);
                                }}
                            >
                                <CancelIcon />
                            </IconButton>
                        ) : (
                            <IconButton
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
