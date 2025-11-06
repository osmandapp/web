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

export default function NavigationInputRow({
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

    const showSwap = type === 'start';
    const showRemove = type === 'intermediate';
    const showAdd = type === 'finish';

    const getIcon = () => {
        switch (type) {
            case 'start':
                return <StartIcon />;
            case 'intermediate':
                return <IntermediateIcon />;
            case 'finish':
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
                {showSwap && <ActionIconBtn icon={<ChangeIcon />} onClick={onSwap} />}
                {showRemove && <ActionIconBtn icon={<RemoveIcon />} onClick={onRemove} />}
                {showAdd && <ActionIconBtn icon={<AddIcon />} onClick={onAdd} />}
            </Box>
        </Box>
    );
}
