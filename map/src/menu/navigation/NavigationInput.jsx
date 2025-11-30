import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { ReactComponent as MoveIcon } from '../../assets/icons/ic_action_item_move.svg';
import { ReactComponent as ClearIcon } from '../../assets/icons/ic_action_cancel.svg';
import styles from './routemenu.module.css';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import NavigationHistoryDropdown from './NavigationHistoryDropdown';

const NavigationInput = forwardRef(function NavigationInput(
    {
        inputId,
        value,
        placeholder,
        icon,
        onChange,
        onBlur,
        onKeyDown,
        focused,
        showDragHandle = true,
        onDragHandleMouseDown,
        history = [],
        onHistorySelect,
        onClearHistory,
    },
    ref
) {
    const [inputValue, setInputValue] = useState(value || '');
    const [isFocused, setIsFocused] = useState(false);
    const [showHistory, setShowHistory] = useState(false);

    const isFocusedRef = useRef(false);
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    useImperativeHandle(ref, () => inputRef.current);

    useEffect(() => {
        if (!isFocusedRef.current) {
            setInputValue(value || '');
        }
    }, [value]);

    useEffect(() => {
        const handleNavigationBlur = () => {
            if (isFocusedRef.current) {
                clearFocus();
            }
        };
        globalThis.addEventListener('nav-blur', handleNavigationBlur);
        return () => {
            globalThis.removeEventListener('nav-blur', handleNavigationBlur);
        };
    }, []);

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

    const handleClick = () => {
        setShowHistory(true);
    };

    const handleHistorySelect = (item) => {
        if (item?.name) {
            // Update value prop
            if (onChange) {
                onChange(item.name);
            }
            // Also update inputValue directly to ensure it shows immediately
            setInputValue(item.name);
            // Call onBlur to process the value (like pressing Enter)
            if (onBlur) {
                onBlur(item.name);
            }
        }
        setShowHistory(false);
    };

    const clearFocus = () => {
        isFocusedRef.current = false;
        setIsFocused(false);
    };

    const handleBlur = (e) => {
        const relatedTarget = e.relatedTarget;
        if (relatedTarget && (relatedTarget.closest('.MuiMenu-root') || relatedTarget.closest('[role="menu"]'))) {
            // This blur is from Menu, ignore it
            return;
        }

        // Use a longer timeout to check if input regains focus (Menu might cause temporary blur)
        setTimeout(() => {
            // Check if input is still focused - if yes, blur was temporary (from Menu)
            if (inputRef?.current && document.activeElement === inputRef.current) {
                // Input is still focused, this was a temporary blur from Menu
                return;
            }

            clearFocus();
            // Check if input is still focused before hiding history
            if (inputRef?.current && document.activeElement !== inputRef.current) {
                setShowHistory(false);
            }

            // Only call onBlur if input really lost focus
            if (onBlur && inputRef?.current && document.activeElement !== inputRef.current) {
                onBlur(e.target.value);
            }
        }, 200);
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
        <>
            <Box ref={containerRef} onClick={handleClick}>
                <TextField
                    inputRef={inputRef}
                    id={inputId}
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
                                            <ActionIconBtn
                                                id={`${inputId}-clear`}
                                                icon={<ClearIcon />}
                                                onClick={handleClear}
                                                onMouseDown={(e) => e.preventDefault()}
                                            />
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
            </Box>
            <NavigationHistoryDropdown
                history={history}
                value={inputValue}
                isFocused={showHistory}
                anchorEl={containerRef}
                onHistorySelect={handleHistorySelect}
                onClearHistory={onClearHistory}
                inputId={inputId}
                inputRef={inputRef}
            />
        </>
    );
});

export default NavigationInput;
