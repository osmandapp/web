import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { ReactComponent as MoveIcon } from '../../assets/icons/ic_action_item_move.svg';
import { ReactComponent as ClearIcon } from '../../assets/icons/ic_action_cancel.svg';
import styles from './routemenu.module.css';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
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
        type,
        hasIntermediates = false,
        isFirstIntermediate = false,
        showHistory = false,
        setShowHistory,
        containerRef,
        isDraggable = false,
    },
    ref
) {
    const [inputValue, setInputValue] = useState(value || '');

    const isFocusedRef = useRef(false);
    const inputRef = useRef(null);

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
        // Don't open history if dragging
        if (isDraggable) {
            return;
        }
        if (setShowHistory) {
            setShowHistory(true);
        }
    };

    const clearFocus = () => {
        isFocusedRef.current = false;
    };

    const handleBlur = (e) => {
        const relatedTarget = e.relatedTarget;
        // If focus is moving to the history dropdown, restore it immediately
        if (relatedTarget?.closest('.MuiMenu-root')) {
            if (inputRef.current) {
                inputRef.current.focus();
            }
            return;
        }

        clearFocus();
        if (setShowHistory) {
            setShowHistory(false);
        }

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
        </>
    );
});

export default NavigationInput;
