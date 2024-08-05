import { TextField } from '@mui/material/';
import { Box, IconButton, InputAdornment } from '@mui/material';
import { ReactComponent as CancelIcon } from '../../../assets/icons/ic_action_cancel.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/ic_action_search_dark.svg';
import React, { useEffect, useState } from 'react';
import styles from '../search.module.css';
import gStyles from '../../gstylesmenu.module.css';
import { SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';

export default function CustomInput({ menuButton = null, setSearchValue, type = null, defaultSearchValue = '' }) {
    const [value, setValue] = useState(defaultSearchValue);

    const MIN_SIZE_SEARCH_VALUE = 3;

    useEffect(() => {
        if (value === '') {
            setSearchValue(null);
        }
    }, [value]);

    return (
        <Box sx={{ mx: 2, my: 1 }}>
            <TextField
                className={styles.searchInputField}
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
                placeholder="Search"
                type="text"
                fullWidth
                onChange={(e) => {
                    setValue(e.target.value);
                    if (type === SEARCH_TYPE_CATEGORY && e.target.value.length >= MIN_SIZE_SEARCH_VALUE) {
                        setSearchValue({
                            query: e.target.value,
                            type: type,
                        });
                    }
                }}
                value={value}
                InputProps={{
                    className: styles.searchInput,
                    startAdornment: <InputAdornment position="start">{menuButton}</InputAdornment>,
                    endAdornment:
                        value === '' ? (
                            <IconButton
                                className={`${gStyles.icon} ${styles.searchInputIcon}`}
                                onClick={() => setValue('')}
                            >
                                <CancelIcon />
                            </IconButton>
                        ) : (
                            <IconButton
                                className={`${gStyles.icon} ${styles.searchInputIcon}`}
                                onClick={() => {
                                    setSearchValue({
                                        query: value.toLowerCase(),
                                        type: type,
                                    });
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
