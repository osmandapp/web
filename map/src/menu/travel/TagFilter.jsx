import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Autocomplete, Box, Chip, TextField } from '@mui/material';
import AppContext from '../../context/AppContext';
import styles from './travel.module.css';
import { useTranslation } from 'react-i18next';

export default function TagFilter({ selectedTags, onChangeTags }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [tagInput, setTagInput] = useState('');
    const [tagColors, setTagColors] = useState({});

    // the tags of the tracks around the point, most used first
    const availableTags = useMemo(() => {
        const counts = {};
        ctx.searchTravelRoutes?.res?.features?.forEach((route) =>
            route.properties.tags?.forEach((tag) => {
                counts[tag] = (counts[tag] ?? 0) + 1;
            })
        );

        return Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .map(([tag, cnt]) => ({ tag, cnt }));
    }, [ctx.searchTravelRoutes?.res]);

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

    const noTagsAvailable = availableTags.length === 0;

    const getNoOptionsText = () => {
        if (availableTags.length === 0) {
            return t('web:no_tags_for_filters');
        }
        return t('web:no_matching_tags');
    };

    return (
        <Box className={styles.tagFilterContainer}>
            <Autocomplete
                freeSolo
                options={options}
                getOptionLabel={(option) => {
                    if (option?.tag) {
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
                    const value = newValue?.tag ? newValue.tag : newValue;
                    addTag(value);
                    setTagInput('');
                }}
                noOptionsText={getNoOptionsText()}
                disabled={noTagsAvailable}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={noTagsAvailable ? t('web:no_tags_available') : t('web:type_tag_to_filter')}
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
