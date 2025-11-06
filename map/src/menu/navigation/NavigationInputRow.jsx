import React, { useState } from 'react';
import { Box } from '@mui/material';
import NavigationInput from './NavigationInput';
import { ReactComponent as StartIcon } from '../../assets/icons/list_startpoint.svg';
import { ReactComponent as IntermediateIcon } from '../../assets/icons/list_intermediate.svg';
import { ReactComponent as FinishIcon } from '../../assets/icons/list_destination.svg';
import { ReactComponent as ChangeIcon } from '../../assets/icons/ic_action_change_navigation_points.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/ic_action_add_outlined.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/ic_action_remove_outlined.svg';
import styles from './routemenu.module.css';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';

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

    return (
        <Box
            className={styles.navigationInputRow}
            draggable={isDraggable}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragEnd={handleDragEnd}
            onMouseUp={handleMouseUp}
        >
            <Box className={styles.inputContainer}>
                <NavigationInput
                    inputId={inputId}
                    value={value}
                    placeholder={placeholder}
                    icon={getIcon()}
                    onChange={onChange}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    focused={focused}
                    showDragHandle={true}
                    onDragHandleMouseDown={handleDragHandleMouseDown}
                />
            </Box>
            <Box className={styles.actionButtons}>
                {showSwap && <ActionIconBtn id={`${inputId}-swap`} icon={<ChangeIcon />} onClick={onSwap} />}
                {showRemove && <ActionIconBtn icon={<RemoveIcon />} onClick={onRemove} />}
                {showAdd && <ActionIconBtn icon={<AddIcon />} onClick={onAdd} />}
            </Box>
        </Box>
    );
}
