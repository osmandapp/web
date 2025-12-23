import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { ReactComponent as MoveIcon } from '../../assets/icons/ic_action_item_move.svg';
import { ReactComponent as ClearIcon } from '../../assets/icons/ic_action_cancel.svg';
import styles from './routemenu.module.css';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import NavigationHistoryDropdown from './NavigationHistoryDropdown';
import { COLOR_BTN_BLUE } from './NavigationMenu';
import { START_POINT, FINISH_POINT, INTERMEDIATE_POINT } from './NavigationInputRow';

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
        type,
        hasIntermediates = false,
        isFirstIntermediate = false,
    },
    ref
) {
    const [inputValue, setInputValue] = useState(value || '');
    const [showHistory, setShowHistory] = useState(false);

    const isFocusedRef = useRef(false);
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    useImperativeHandle(ref, () => inputRef.current);

    useEffect(() => {
        if (value !== inputValue) {
            setInputValue(value || '');
        }
    }, [value, inputValue]);

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

    // Close this history dropdown when another input opens its history
    useEffect(() => {
        const handleHistoryOpen = (e) => {
            const otherId = e.detail?.inputId;
            if (otherId && otherId !== inputId) {
                setShowHistory(false);
            }
        };

        globalThis.addEventListener('nav-history-open', handleHistoryOpen);
        return () => {
            globalThis.removeEventListener('nav-history-open', handleHistoryOpen);
        };
    }, [inputId]);

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

    const handleClick = () => {
        globalThis.dispatchEvent(new CustomEvent('nav-history-open', { detail: { inputId } }));
        setShowHistory(true);
    };

    const handleHistorySelect = (item) => {
        const displayValue = item?.getDisplayValue();
        if (displayValue) {
            if (onHistorySelect) {
                onHistorySelect(item);
            }
            // Update value prop
            if (onChange) {
                onChange(displayValue);
            }
            // Also update inputValue directly to ensure it shows immediately
            setInputValue(displayValue);
        }
        setShowHistory(false);
    };

    const clearFocus = () => {
        isFocusedRef.current = false;
    };

    const handleBlur = (e) => {
        const relatedTarget = e.relatedTarget;
        // If focus is moving to the history dropdown, don't clear focus
        if (relatedTarget?.closest('.MuiMenu-root')) {
            return;
        }

        clearFocus();
        setShowHistory(false);

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

    const getInputClassName = () => {
        const classes = [styles.navigationInput];

        if (type === START_POINT) {
            classes.push(styles.navigationInputStart);
            if (!hasIntermediates) {
                classes.push(styles.navigationInputStartNoIntermediates);
            }
        } else if (type === FINISH_POINT) {
            classes.push(styles.navigationInputFinish);
        } else if (type === INTERMEDIATE_POINT && !isFirstIntermediate) {
            classes.push(styles.navigationInputIntermediateNotFirst);
        }

        return classes.join(' ');
    };

    return (
        <>
            <Box ref={containerRef} onClick={handleClick}>
                <TextField
                    inputRef={inputRef}
                    id={inputId}
                    className={getInputClassName()}
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
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                                    {inputValue && (
                                        <Box className={styles.clearIconWrapper}>
                                            <ActionIconBtn
                                                id={`${inputId}-clear`}
                                                icon={<ClearIcon />}
                                                iconColor={COLOR_BTN_BLUE}
                                                onClick={handleClear}
                                                onMouseDown={(e) => e.preventDefault()}
                                            />
                                        </Box>
                                    )}
                                    {showDragHandle && (
                                        <ActionIconBtn
                                            icon={<MoveIcon />}
                                            iconColor={COLOR_BTN_BLUE}
                                            onMouseDown={onDragHandleMouseDown}
                                            className={styles.dragHandleInline}
                                        />
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
