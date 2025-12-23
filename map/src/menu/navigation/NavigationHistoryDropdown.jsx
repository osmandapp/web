import React, { useMemo, useEffect, useRef, useContext } from 'react';
import { Menu, Divider } from '@mui/material';
import { ReactComponent as ClearIcon } from '../../assets/icons/ic_action_clear_all_fields.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/ic_action_location_marker_outlined.svg';
import { useTranslation } from 'react-i18next';
import DefaultItem from '../../frame/components/items/DefaultItem';
import styles from './routemenu.module.css';
import AppContext from '../../context/AppContext';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';
import { formatLatLon } from './NavigationPointsManager';
import { navigationObject } from '../../store/navigationObject/navigationObject';
import { WptIcon } from '../../infoblock/components/wpt/WptDetails';
import { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE } from '../../manager/PoiManager';
import { ReactComponent as HistoryIcon } from '../../assets/icons/ic_action_history.svg';

const HISTORY_LIMIT = 5;

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
    const ctx = useContext(AppContext);

    const currentLocationRaw = useGeoLocation(ctx, false);
    const hasCurrentLocation = currentLocationRaw && currentLocationRaw !== LOCATION_UNAVAILABLE;

    const filteredHistory = useMemo(() => {
        if (!history || history.length === 0) {
            return [];
        }

        const trimmedValue = (value || '').trim().toLowerCase();

        if (!trimmedValue) {
            // If input is empty, show last HISTORY_LIMIT items
            return history.slice(0, HISTORY_LIMIT);
        }

        // Filter items that match the input
        const matched = history.filter((item) => {
            if (!(item instanceof navigationObject)) return false;
            const itemName = (item.getDisplayValue() || '').toLowerCase();
            return itemName.includes(trimmedValue);
        });

        return matched.slice(0, HISTORY_LIMIT);
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
    // Show "Current location" item always when input is empty,
    // even if browser/location permission is disabled.
    const shouldShowCurrentLocation = isInputEmpty;

    const shouldShow = isFocused && (shouldShowCurrentLocation || filteredHistory.length > 0) && !hasExactMatch;

    const handleHistoryItemClick = (item, e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onHistorySelect) {
            onHistorySelect(item);
        }
    };

    const handleClearHistoryClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClearHistory) {
            onClearHistory();
        }
        if (inputRef?.current) {
            inputRef.current.blur();
        }
    };

    const handleMenuClose = () => {
        if (!isFocused || !inputRef?.current) {
            return;
        }

        // Restore focus only when menu closes while this input is still considered active.
        requestAnimationFrame(() => {
            if (inputRef?.current && document.activeElement !== inputRef.current) {
                inputRef.current.focus();
            }
        });
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
            {shouldShowCurrentLocation && (
                <>
                    <DefaultItem
                        key="current-location"
                        id={`${inputId}-current-location`}
                        icon={<LocationIcon />}
                        name={t('web:current_location')}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            if (!hasCurrentLocation) {
                                ctx.setNotification({
                                    text: t('web:location_disabled_message'),
                                    severity: 'info',
                                });
                                if (inputRef?.current) {
                                    inputRef.current.blur();
                                }
                                return;
                            }

                            handleHistoryItemClick(
                                {
                                    lat: currentLocationRaw.lat,
                                    lng: currentLocationRaw.lng,
                                    name: formatLatLon(currentLocationRaw),
                                },
                                e
                            );
                        }}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    />
                    {filteredHistory.length > 0 && <Divider />}
                </>
            )}
            {filteredHistory.map((item, index) => {
                if (!(item instanceof navigationObject)) return null;

                const icon = item.icon?.wpt ? (
                    <WptIcon
                        wpt={item.icon.wpt}
                        color={item.icon.color || DEFAULT_POI_COLOR}
                        background={item.icon.background || DEFAULT_POI_SHAPE}
                        icon={item.icon.icon}
                        ctx={ctx}
                    />
                ) : (
                    <HistoryIcon />
                );

                return (
                    <DefaultItem
                        key={`history-item-${index}`}
                        id={`${inputId}-history-item-${index}`}
                        icon={icon}
                        name={item.getDisplayValue()}
                        maxLines={1}
                        onClick={(e) => {
                            handleHistoryItemClick(item, e);
                        }}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    />
                );
            })}
            {isInputEmpty && filteredHistory.length > 0 && (
                <>
                    <Divider />
                    <DefaultItem
                        id={`${inputId}-history-clear`}
                        icon={<ClearIcon />}
                        name={t('web:clear_history')}
                        onClick={handleClearHistoryClick}
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
