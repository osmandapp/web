import React, { useState, useEffect, useRef } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { ReactComponent as MoveIcon } from '../../assets/icons/ic_action_item_move.svg';
import { ReactComponent as ClearIcon } from '../../assets/icons/ic_action_cancel.svg';
import styles from './routemenu.module.css';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';

export default function NavigationInput({
    value,
    placeholder,
    icon,
    onChange,
    onBlur,
    onKeyDown,
    focused,
    showDragHandle = true,
    onDragHandleMouseDown,
}) {
    const [inputValue, setInputValue] = useState(value || '');
    const [isFocused, setIsFocused] = useState(false);
    const isFocusedRef = useRef(false);

    useEffect(() => {
        if (!isFocusedRef.current) {
            setInputValue(value || '');
        }
    }, [value]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleFocus = () => {
        isFocusedRef.current = true;
        setIsFocused(true);
    };

    const handleBlur = (e) => {
        setTimeout(() => {
            isFocusedRef.current = false;
            setIsFocused(false);
        }, 100);
        if (onBlur) {
            onBlur(e.target.value);
        }
    };

    const handleKeyDown = (e) => {
        if (onKeyDown) {
            onKeyDown(e);
        }
    };

    const handleClear = (e) => {
        e.stopPropagation();
        setInputValue('');
        if (onChange) {
            onChange('');
        }
        if (onBlur) {
            onBlur('');
        }
    };

    return (
        <TextField
            className={styles.navigationInput}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus={focused}
            fullWidth
            InputProps={{
                startAdornment: icon && <InputAdornment position="start">{icon}</InputAdornment>,
                endAdornment: (
                    <InputAdornment position="end">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            {isFocused && inputValue && (
                                <Box className={styles.clearIconWrapper}>
                                    <ActionIconBtn icon={<ClearIcon />} onClick={handleClear} />
                                </Box>
                            )}
                            {showDragHandle && (
                                <Box className={styles.dragHandleInline} onMouseDown={onDragHandleMouseDown}>
                                    <MoveIcon />
                                </Box>
                            )}
                        </Box>
                    </InputAdornment>
                ),
                className: styles.inputField,
            }}
        />
    );
}
