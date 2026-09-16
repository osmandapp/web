import React, { useState, useRef } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import NavigationInput from './NavigationInput';
import NavigationHistoryDropdown from './NavigationHistoryDropdown';
import { ReactComponent as StartIcon } from '../../assets/icons/list_startpoint.svg';
import { ReactComponent as IntermediateIcon } from '../../assets/icons/list_intermediate.svg';
import { ReactComponent as FinishIcon } from '../../assets/icons/list_destination.svg';
import { ReactComponent as ChangeIcon } from '../../assets/icons/ic_action_change_navigation_points.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/ic_action_add_outlined.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/ic_action_remove_outlined.svg';
import { ReactComponent as AddActiveIcon } from '../../assets/icons/ic_action_add_filled.svg';
import { ReactComponent as RemoveActiveIcon } from '../../assets/icons/ic_action_remove_filled.svg';
import styles from './routemenu.module.css';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import { COLOR_BTN_BLUE, COLOR_BTN_RED } from './NavigationMenu';
import { START_POINT, INTERMEDIATE_POINT, FINISH_POINT } from '../../map/markers/trackPointMarkerFactory';

export default function NavigationInputRow({
    inputId,
    value,
    placeholder,
    onChange,
    onBlur,
    onKeyDown,
    type,
    focused,
    onSwap,
    onAdd,
    onRemove,
    onDragStart,
    onDragOver,
    onDrop,
    onDragEnd,
    inputRef,
    history = [],
    onHistorySelect,
    onClearHistory,
    isDragging = false,
    hasIntermediates = false,
    isFirstIntermediate = false,
    icon = null,
    readOnly = false,
    emptyAction = null,
    onRoundTrip = null,
}) {
    const { t } = useTranslation();
    // with a round trip on offer "+" asks what to add instead of adding an intermediate at once
    const [addMenuAnchor, setAddMenuAnchor] = useState(null);
    const [isDraggable, setIsDraggable] = useState(false);
    const [showHistory, setShowHistory] = useState(false);

    const containerRef = useRef(null);

    // no swap without a finish, e.g. for a round trip
    const showSwap = type === START_POINT && !!onSwap;
    const showRemove = type === INTERMEDIATE_POINT;
    const showAdd = type === FINISH_POINT && !!onAdd;

    const getIcon = () => {
        switch (type) {
            case START_POINT:
                return <StartIcon />;
            case INTERMEDIATE_POINT:
                return <IntermediateIcon />;
            case FINISH_POINT:
                return <FinishIcon />;
            default:
                return null;
        }
    };

    const handleDragHandleMouseDown = (e) => {
        e.stopPropagation();
        setIsDraggable(true);
        setShowHistory(false);
    };

    const handleDragEnd = (e) => {
        setIsDraggable(false);
        if (onDragEnd) {
            onDragEnd(e);
        }
    };

    const handleMouseUp = () => {
        setIsDraggable(false);
    };

    const handleInputBlur = (blurValue) => {
        if (onBlur) {
            onBlur(blurValue);
        }
    };

    const getRowClassName = () => {
        let className = styles.navigationInputRow;
        if (isDragging) {
            className += ` ${styles.navigationInputRowDragging}`;
        }
        return className;
    };

    return (
        <Box
            className={getRowClassName()}
            draggable={isDraggable}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragEnd={handleDragEnd}
            onMouseUp={handleMouseUp}
        >
            <Box className={styles.inputContainer}>
                <NavigationInput
                    ref={inputRef}
                    inputId={inputId}
                    value={value}
                    placeholder={placeholder}
                    icon={icon ?? getIcon()}
                    onChange={onChange}
                    onBlur={handleInputBlur}
                    onKeyDown={onKeyDown}
                    focused={focused}
                    showDragHandle={!readOnly}
                    readOnly={readOnly}
                    emptyAction={emptyAction}
                    onDragHandleMouseDown={handleDragHandleMouseDown}
                    type={type}
                    hasIntermediates={hasIntermediates}
                    isFirstIntermediate={isFirstIntermediate}
                    showHistory={showHistory}
                    setShowHistory={setShowHistory}
                    containerRef={containerRef}
                    isDraggable={isDraggable}
                />
                {!isDragging && !isDraggable && (
                    <NavigationHistoryDropdown
                        history={history}
                        value={value}
                        isFocused={showHistory}
                        setShowHistory={setShowHistory}
                        anchorEl={containerRef}
                        onHistorySelect={onHistorySelect}
                        onClearHistory={onClearHistory}
                        inputId={inputId}
                        inputRef={inputRef}
                        onRoundTrip={onRoundTrip}
                    />
                )}
            </Box>
            <Box className={styles.actionButtons}>
                {showSwap && (
                    <ActionIconBtn
                        id={`${inputId}-swap`}
                        icon={<ChangeIcon />}
                        onClick={onSwap}
                        iconColor={COLOR_BTN_BLUE}
                    />
                )}
                {showRemove && (
                    <ActionIconBtn
                        id={`${inputId}-remove`}
                        icon={<RemoveIcon />}
                        activeIcon={<RemoveActiveIcon />}
                        onClick={onRemove}
                        iconColor={COLOR_BTN_RED}
                    />
                )}
                {showAdd && (
                    <ActionIconBtn
                        id={`${inputId}-add`}
                        icon={<AddIcon />}
                        activeIcon={<AddActiveIcon />}
                        onClick={onRoundTrip ? (e) => setAddMenuAnchor(e.currentTarget) : onAdd}
                        iconColor={COLOR_BTN_BLUE}
                    />
                )}
                {onRoundTrip && (
                    <Menu anchorEl={addMenuAnchor} open={!!addMenuAnchor} onClose={() => setAddMenuAnchor(null)}>
                        <MenuItem
                            id={`${inputId}-add-intermediate`}
                            onClick={() => {
                                setAddMenuAnchor(null);
                                onAdd();
                            }}
                        >
                            {t('web:set_via_point')}
                        </MenuItem>
                        <MenuItem
                            id={`${inputId}-add-round-trip`}
                            onClick={() => {
                                setAddMenuAnchor(null);
                                onRoundTrip();
                            }}
                        >
                            {t('web:round_trip')}
                        </MenuItem>
                    </Menu>
                )}
            </Box>
        </Box>
    );
}
