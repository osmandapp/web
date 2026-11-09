import { IconButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import React from 'react';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import styles from './wptDetails.module.css';

export default function CollapsableTagHeader({
    prefix,
    prefixMaxLines = 2,
    value,
    expandable,
    open,
    setOpen,
    children = null,
}) {
    return (
        <>
            <ListItemText onClick={() => setOpen(!open)}>
                <MenuItemWithLines name={prefix} maxLines={prefixMaxLines} className={styles.tagPrefix} />
                {children ?? <MenuItemWithLines name={value} maxLines={1} className={styles.tagName} />}
            </ListItemText>
            {expandable && (
                <IconButton onClick={() => setOpen(!open)}>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
            )}
        </>
    );
}
