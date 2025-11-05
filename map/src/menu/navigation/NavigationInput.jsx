import React, { useState, useEffect, useRef } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { ReactComponent as MoveIcon } from '../../assets/icons/ic_action_item_move.svg';
import styles from './routemenu.module.css';

export default function NavigationInput({
    value,
    placeholder,
    icon,
    onChange,
    onBlur,
    onKeyDown,
    focused,
    showDragHandle = true,
}) {
    const [inputValue, setInputValue] = useState(value || '');
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
    };

    const handleBlur = (e) => {
        isFocusedRef.current = false;
        if (onBlur) {
            onBlur(e.target.value);
        }
    };

    const handleKeyDown = (e) => {
        if (onKeyDown) {
            onKeyDown(e);
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
                endAdornment: showDragHandle && (
                    <InputAdornment position="end">
                        <Box className={styles.dragHandleInline}>
                            <MoveIcon />
                        </Box>
                    </InputAdornment>
                ),
                className: styles.inputField,
            }}
        />
    );
}
