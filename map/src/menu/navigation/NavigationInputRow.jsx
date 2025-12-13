import React, { useState } from 'react';
import { Box } from '@mui/material';
import NavigationInput from './NavigationInput';
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

export const START_POINT = 'start';
export const INTERMEDIATE_POINT = 'intermediate';
export const FINISH_POINT = 'finish';

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
}) {
    const [isDraggable, setIsDraggable] = useState(false);

    const showSwap = type === START_POINT;
    const showRemove = type === INTERMEDIATE_POINT;
    const showAdd = type === FINISH_POINT;

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

    const handleDragHandleMouseDown = () => {
        setIsDraggable(true);
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
                    icon={getIcon()}
                    onChange={onChange}
                    onBlur={handleInputBlur}
                    onKeyDown={onKeyDown}
                    focused={focused}
                    showDragHandle={true}
                    onDragHandleMouseDown={handleDragHandleMouseDown}
                    history={history}
                    onHistorySelect={onHistorySelect}
                    onClearHistory={onClearHistory}
                    type={type}
                    hasIntermediates={hasIntermediates}
                    isFirstIntermediate={isFirstIntermediate}
                />
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
                        onClick={onAdd}
                        iconColor={COLOR_BTN_BLUE}
                    />
                )}
            </Box>
        </Box>
    );
}
