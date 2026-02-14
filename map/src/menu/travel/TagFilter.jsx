import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Autocomplete, Box, Chip, TextField } from '@mui/material';
import AppContext from '../../context/AppContext';
import { MAIN_URL_WITH_SLASH, TRAVEL_URL } from '../../manager/GlobalManager';
import { apiGet } from '../../util/HttpApi';
import styles from './travel.module.css';
import { ACTIVITY_ALL, ALL_YEARS } from './TravelMenu';

export default function TagFilter({ selectedTags, onChangeTags, selectedYear, selectedActivity }) {
    const ctx = useContext(AppContext);
    const location = useLocation();

    const [availableTags, setAvailableTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [loadingTags, setLoadingTags] = useState(false);
    const [tagColors, setTagColors] = useState({});

    useEffect(() => {
        if (selectedTags?.length > 0) {
            setTagColors((prev) => {
                const updated = { ...prev };
                for (const tag of selectedTags) {
                    if (!updated[tag]) {
                        updated[tag] = generatePastelColor();
                    }
                }
                return updated;
            });
        }
    }, [selectedTags]);

    useEffect(() => {
        const fetchTags = async () => {
            if (!ctx.visibleBounds || !location.pathname.startsWith(MAIN_URL_WITH_SLASH + TRAVEL_URL)) {
                setAvailableTags([]);
                return;
            }
            const bounds = ctx.visibleBounds;
            const minLat = bounds.getSouth();
            const maxLat = bounds.getNorth();
            const minLon = bounds.getWest();
            const maxLon = bounds.getEast();

            const params = {
                minLat,
                maxLat,
                minLon,
                maxLon,
            };

            if (selectedYear && selectedYear !== ALL_YEARS) {
                params.year = selectedYear;
            }
            if (selectedActivity && selectedActivity !== ACTIVITY_ALL) {
                params.activityArr = selectedActivity;
            }

            setLoadingTags(true);
            try {
                const response = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/tags`, {
                    apiCache: true,
                    params,
                });
                if (response?.data) {
                    const data = response.data;
                    const tagsArray = Array.isArray(data) ? data : data.tags || [];
                    setAvailableTags(tagsArray);
                } else {
                    setAvailableTags([]);
                }
            } finally {
                setLoadingTags(false);
            }
        };

        fetchTags().then();
    }, [ctx.visibleBounds, selectedYear, selectedActivity]);

    function generatePastelColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = 70; // %
        const lightness = 85; // %
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    function addTag(tag) {
        const trimmed = (tag || '').trim();
        if (!trimmed) {
            return;
        }
        if (selectedTags.includes(trimmed)) {
            return;
        }
        const next = [...selectedTags, trimmed];
        onChangeTags(next);
        setTagColors((prev) => {
            if (prev[trimmed]) {
                return prev;
            }
            return {
                ...prev,
                [trimmed]: generatePastelColor(),
            };
        });
    }

    function removeTag(tagToRemove) {
        const next = selectedTags.filter((tag) => tag !== tagToRemove);
        onChangeTags(next);
        setTagInput('');
    }

    const options = useMemo(() => {
        if (!availableTags || availableTags.length === 0) {
            return [];
        }
        const base = availableTags.filter((item) => !selectedTags.includes(item.tag));
        if (!tagInput.trim()) {
            return base.slice(0, 50);
        }
        return base;
    }, [availableTags, selectedTags, tagInput]);

    const noTagsAvailable = !loadingTags && availableTags.length === 0;

    const getNoOptionsText = () => {
        if (loadingTags) {
            return 'Loading tags...';
        }
        if (availableTags.length === 0) {
            return 'No tags found for current filters';
        }
        return 'No matching tags';
    };

    return (
        <Box className={styles.tagFilterContainer}>
            <Autocomplete
                freeSolo
                options={options}
                getOptionLabel={(option) => {
                    if (option && option.tag) {
                        return option.tag;
                    }
                    return option ?? '';
                }}
                renderOption={(props, option) => {
                    if (!option?.tag) {
                        return null;
                    }
                    const { tag, cnt } = option;
                    const { key, ...restProps } = props;
                    return (
                        <li key={key} {...restProps}>
                            {tag}
                            {cnt ? ` (${cnt})` : ''}
                        </li>
                    );
                }}
                inputValue={tagInput}
                onInputChange={(event, newInputValue) => {
                    setTagInput(newInputValue);
                }}
                onChange={(event, newValue) => {
                    if (!newValue) {
                        return;
                    }
                    const value = newValue && newValue.tag ? newValue.tag : newValue;
                    addTag(value);
                    setTagInput('');
                }}
                loading={loadingTags}
                noOptionsText={getNoOptionsText()}
                disabled={noTagsAvailable}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={noTagsAvailable ? 'No tags available' : 'Type tag to filter'}
                        size="small"
                    />
                )}
            />
            {selectedTags.length > 0 && (
                <Box className={styles.tagChipsContainer}>
                    {selectedTags.map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            onDelete={() => removeTag(tag)}
                            size="small"
                            sx={{
                                backgroundColor: tagColors[tag] || '#FFE0B2',
                                color: '#000',
                                fontWeight: 500,
                            }}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
}
