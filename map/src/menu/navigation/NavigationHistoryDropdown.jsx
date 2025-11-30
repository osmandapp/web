import React, { useMemo, useEffect, useRef } from 'react';
import { Menu, Divider } from '@mui/material';
import { ReactComponent as HistoryIcon } from '../../assets/icons/ic_action_history.svg';
import { ReactComponent as ClearIcon } from '../../assets/icons/ic_action_clear_all_fields.svg';
import { useTranslation } from 'react-i18next';
import DefaultItem from '../../frame/components/items/DefaultItem';
import styles from './routemenu.module.css';

export default function NavigationHistoryDropdown({
    history = [],
    value = '',
    isFocused = false,
    anchorEl,
    onHistorySelect,
    onClearHistory,
    inputId,
    inputRef,
}) {
    const { t } = useTranslation();

    const filteredHistory = useMemo(() => {
        if (!history || history.length === 0) {
            return [];
        }

        const trimmedValue = (value || '').trim().toLowerCase();

        if (!trimmedValue) {
            // If input is empty, show last 5 items
            return history.slice(0, 5);
        }

        // Filter items that match the input
        const matched = history.filter((item) => {
            const itemName = (item.name || '').toLowerCase();
            return itemName.includes(trimmedValue);
        });

        return matched.slice(0, 5);
    }, [history, value]);

    // Check if input value exactly matches any history item
    const hasExactMatch = useMemo(() => {
        if (!value || !history || history.length === 0) {
            return false;
        }
        const trimmedValue = value.trim().toLowerCase();
        return history.some((item) => {
            const itemName = (item.name || '').trim().toLowerCase();
            return itemName === trimmedValue;
        });
    }, [history, value]);

    const isInputEmpty = !value || value.trim() === '';

    // Stabilize shouldShow to prevent Menu from causing blur on every input change
    const shouldShow = useMemo(() => {
        return isFocused && filteredHistory.length > 0 && !hasExactMatch;
    }, [isFocused, filteredHistory.length, hasExactMatch]);

    const prevShouldShowRef = useRef(shouldShow);

    // Restore focus when menu closes
    useEffect(() => {
        if (!inputRef) return;

        if (prevShouldShowRef.current && !shouldShow && inputRef?.current) {
            // Menu just closed, ensure input keeps focus
            requestAnimationFrame(() => {
                if (inputRef?.current && document.activeElement !== inputRef.current) {
                    inputRef.current.focus();
                }
            });
        }
        prevShouldShowRef.current = shouldShow;
    }, [shouldShow, inputRef]);

    const handleHistoryItemClick = (item, e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onHistorySelect) {
            onHistorySelect(item);
        }
    };

    const handleClearHistoryClick = () => {
        if (onClearHistory) {
            onClearHistory();
        }
    };

    const handleMenuClose = () => {
        if (inputRef?.current) {
            requestAnimationFrame(() => {
                if (inputRef?.current && document.activeElement !== inputRef.current) {
                    inputRef.current.focus();
                }
            });
        }
    };

    return (
        <Menu
            anchorEl={anchorEl?.current}
            open={shouldShow}
            onClose={handleMenuClose}
            disableAutoFocus
            disableEnforceFocus
            disableRestoreFocus
            disablePortal
            hideBackdrop={true}
            style={{ pointerEvents: 'none' }}
            slotProps={{
                paper: {
                    className: styles.historyDropdown,
                    sx: {
                        pointerEvents: 'auto',
                    },
                    onMouseDown: (e) => {
                        // Prevent losing focus on input
                        e.preventDefault();
                    },
                },
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            {filteredHistory.map((item, index) => (
                <DefaultItem
                    key={`history-item-${index}`}
                    id={`${inputId}-history-item-${index}`}
                    icon={<HistoryIcon />}
                    name={item.name}
                    onClick={(e) => {
                        handleHistoryItemClick(item, e);
                    }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                />
            ))}
            {isInputEmpty && filteredHistory.length > 0 && (
                <>
                    <Divider />
                    <DefaultItem
                        id={`${inputId}-history-clear`}
                        icon={<ClearIcon />}
                        name={t('web:clear_history')}
                        onClick={(e) => {
                            handleClearHistoryClick();
                        }}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    />
                </>
            )}
        </Menu>
    );
}
