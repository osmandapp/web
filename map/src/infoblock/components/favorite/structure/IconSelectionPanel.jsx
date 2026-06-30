import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box, IconButton, ListItem, ListItemButton, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../../context/AppContext';
import MarkerOptions, { resolvedPoiCategories } from '../../../../map/markers/MarkerOptions';
import SecondaryMenuDrawer from '../../../../frame/components/other/SecondaryMenuDrawer';
import VirtualizedList from '../../../../frame/components/VirtualizedList';
import HeaderWithUnderline from '../../../../frame/components/header/HeaderWithUnderline';
import ThickDivider from '../../../../frame/components/dividers/ThickDivider';
import SubTitleMenu from '../../../../frame/components/titles/SubTitleMenu';
import WptIconPreview from './WptIconPreview';
import isEmpty from 'lodash-es/isEmpty';
import { useElementHeight } from '../../../../util/hooks/useElementHeight';
import styles from '../wptEditPanel.module.css';
import menuStyles from '../../../../menu/trackfavmenu.module.css';
import { ReactComponent as ListFlatIcon } from '../../../../assets/features/ic_action_list_flat.svg';

const SELECTION_COLOR = '#237bff';
const FALLBACK_BG_COLOR = '#e6e6e6';
const LAST_USED_KEY = '__last_used__';

const ICONS_PER_ROW = 6;
const HEADER_ROW_HEIGHT = 64;
const ICON_ROW_HEIGHT = 57;

export default function IconSelectionPanel({ selectedIcon, setSelectedIcon, selectedGpxFile, add, onClose }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const [listContainerRef, listHeight] = useElementHeight();

    const initialIconRef = useRef(selectedIcon);
    const listRef = useRef(null);

    const [menuAnchor, setMenuAnchor] = useState(null);

    const usedIcons = useMemo(() => {
        const res = [...ctx.wptRecents.icons];
        if (add || isEmpty(selectedGpxFile)) {
            return res;
        }
        const wpts = selectedGpxFile?.trackData?.wpts ?? selectedGpxFile.wpts ?? [];
        wpts.forEach((wpt) => {
            if (wpt.icon && !res.includes(wpt.icon)) {
                res.push(wpt.icon);
            }
        });

        return res;
    }, [ctx.wptRecents.icons, selectedGpxFile, add]);

    // Build flat rows array and a map of category key → row index for scroll navigation.
    const { rows, categoryIndexMap } = useMemo(() => {
        const rows = [];
        const categoryIndexMap = {};

        if (usedIcons.length > 0) {
            categoryIndexMap[LAST_USED_KEY] = rows.length;
            rows.push({ type: 'header', key: LAST_USED_KEY, title: t('web:wpt_icon_selection_last_used') });
            for (let i = 0; i < usedIcons.length; i += ICONS_PER_ROW) {
                rows.push({
                    type: 'icons',
                    idPrefix: 'se-fav-icon-last-used',
                    icons: usedIcons.slice(i, i + ICONS_PER_ROW),
                });
            }
        }

        for (const [category, icons] of Object.entries(resolvedPoiCategories)) {
            categoryIndexMap[category] = rows.length;
            rows.push({ type: 'header', key: category, title: formatCategoryName(category) });
            for (let i = 0; i < icons.length; i += ICONS_PER_ROW) {
                rows.push({
                    type: 'icons',
                    idPrefix: `se-fav-icon-${category}`,
                    icons: icons.slice(i, i + ICONS_PER_ROW),
                });
            }
        }

        return { rows, categoryIndexMap };
    }, [usedIcons, t]);

    // On mount: scroll to the category containing the initially selected icon.
    useEffect(() => {
        if (!listRef.current) return;
        const icon = initialIconRef.current;
        if (!icon) return;
        const entry = Object.entries(resolvedPoiCategories).find(([, icons]) => icons.includes(icon));
        if (!entry) return;
        const idx = categoryIndexMap[entry[0]];
        if (idx != null) {
            listRef.current.scrollToItem(idx, 'start');
        }
    }, [categoryIndexMap]);

    // Category dropdown menu items.
    const categoryMenuItems = useMemo(() => {
        const items = [];
        if (usedIcons.length > 0) {
            items.push({ key: LAST_USED_KEY, label: t('web:wpt_icon_selection_last_used') });
        }
        Object.keys(resolvedPoiCategories).forEach((name) => {
            items.push({ key: name, label: formatCategoryName(name) });
        });
        return items;
    }, [usedIcons, t]);

    function openMenu(e) {
        setMenuAnchor(e.currentTarget);
    }

    function closeMenu() {
        setMenuAnchor(null);
    }

    function scrollToCategory(key) {
        closeMenu();
        const idx = categoryIndexMap[key];
        if (idx != null && listRef.current) {
            listRef.current.scrollToItem(idx, 'start');
        }
    }

    const getRowHeight = (index) => (rows[index]?.type === 'header' ? HEADER_ROW_HEIGHT : ICON_ROW_HEIGHT);

    const rightContent = (
        <>
            <IconButton className={menuStyles.appBarIcon} onClick={openMenu} size="small">
                <ListFlatIcon />
            </IconButton>
            <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={closeMenu}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                {categoryMenuItems.map(({ key, label }) => (
                    <MenuItem key={key} onClick={() => scrollToCategory(key)}>
                        {label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );

    return (
        <SecondaryMenuDrawer onClose={onClose}>
            <HeaderWithUnderline
                title={t('web:wpt_icon_selection_title')}
                onClose={onClose}
                showBackButton
                appBarProps={{ id: 'se-back-icon-selection-panel' }}
                rightContent={rightContent}
            />
            <Box ref={listContainerRef} sx={{ flex: 1, minHeight: 0 }}>
                <VirtualizedList
                    ref={listRef}
                    items={rows}
                    renderItem={(row) => <IconRow row={row} selectedIcon={selectedIcon} onSelect={setSelectedIcon} />}
                    itemSize={getRowHeight}
                    height={listHeight}
                    style={{ overflowX: 'hidden' }}
                />
            </Box>
        </SecondaryMenuDrawer>
    );
}

function IconRow({ row, selectedIcon, onSelect }) {
    if (row.type === 'header') {
        return (
            <div>
                <ThickDivider />
                <SubTitleMenu text={row.title} />
            </div>
        );
    }

    return (
        <div>
            <Box className={styles.iconGrid}>
                {row.icons.map((icon) => {
                    const isSelected = selectedIcon === icon;
                    return (
                        <ListItem key={icon} className={styles.iconGridItem} component="div" disablePadding>
                            <ListItemButton
                                id={`${row.idPrefix}-${icon}`}
                                className={styles.iconGridButton}
                                onClick={() => onSelect(icon)}
                            >
                                <WptIconPreview
                                    icon={icon}
                                    color={isSelected ? SELECTION_COLOR : FALLBACK_BG_COLOR}
                                    shape={MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE}
                                    size={36}
                                    iconSize={24}
                                    selected={isSelected}
                                    selectionSize={48}
                                    whiteIcon={isSelected}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </Box>
        </div>
    );
}

function formatCategoryName(name) {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).replaceAll('_', ' ');
}
