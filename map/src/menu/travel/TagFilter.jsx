import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Autocomplete, Box, Chip, TextField } from '@mui/material';
import AppContext from '../../context/AppContext';
import { apiGet } from '../../util/HttpApi';
import styles from './travel.module.css';

export default function TagFilter({ selectedTags, onChangeTags }) {
    const ctx = useContext(AppContext);

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
            if (!ctx.visibleBounds) {
                setAvailableTags([]);
                return;
            }
            const bounds = ctx.visibleBounds;
            const minLat = bounds.getSouth();
            const maxLat = bounds.getNorth();
            const minLon = bounds.getWest();
            const maxLon = bounds.getEast();

            setLoadingTags(true);
            try {
                const response = await apiGet(`${process.env.REACT_APP_OSM_GPX_URL}/osmgpx/tags`, {
                    apiCache: true,
                    params: {
                        minlat: minLat,
                        maxlat: maxLat,
                        minlon: minLon,
                        maxlon: maxLon,
                    },
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
    }, [ctx.visibleBounds]);

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
                renderInput={(params) => (
                    <TextField {...params} placeholder="Type tag to filter" size="small" />
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
