import React, { useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Box, IconButton, ListItem, ListItemButton, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../../context/AppContext';
import MarkerOptions from '../../../../map/markers/MarkerOptions';
import SecondaryMenuDrawer from '../../../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../../../frame/components/header/HeaderWithUnderline';
import SubTitleMenu from '../../../../frame/components/titles/SubTitleMenu';
import ThickDivider from '../../../../frame/components/dividers/ThickDivider';
import ColorBlock from '../../../../frame/components/other/ColorBlock';
import WptIconPreview from './WptIconPreview';
import isEmpty from 'lodash-es/isEmpty';
import styles from '../wptEditPanel.module.css';
import menuStyles from '../../../../menu/trackfavmenu.module.css';
import { ReactComponent as ListFlatIcon } from '../../../../assets/features/ic_action_list_flat.svg';

const SELECTION_COLOR = '#237bff';
const FALLBACK_BG_COLOR = '#e6e6e6';
const LAST_USED_KEY = '__last_used__';

export default function IconSelectionPanel({
    selectedIcon,
    setSelectedIcon,
    favoriteIconCategories,
    selectedGpxFile,
    add,
    onClose,
}) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    // Capture icon at mount time so changing selection inside the panel does not re-trigger the scroll
    const initialIconRef = useRef(selectedIcon);

    const [menuAnchor, setMenuAnchor] = useState(null);
    const [scrollTarget, setScrollTarget] = useState(null);

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

    // Find the actual category containing the initially selected icon, so we can scroll to it on open.
    // Last used is intentionally skipped — it's a shortcut, not the canonical location of an icon.
    const initialCategory = useMemo(() => {
        const icon = initialIconRef.current;
        if (!icon || !favoriteIconCategories?.categories) return null;
        const entry = Object.entries(favoriteIconCategories.categories).find(([, data]) => data?.icons?.includes(icon));

        return entry ? entry[0] : null;
    }, [favoriteIconCategories]);

    // Build ordered list of categories for the dropdown: Last used first, then all named categories.
    const categoryMenuItems = useMemo(() => {
        const items = [];
        if (usedIcons.length > 0) {
            items.push({ key: LAST_USED_KEY, label: t('web:wpt_icon_selection_last_used') });
        }
        if (favoriteIconCategories?.categories) {
            Object.keys(favoriteIconCategories.categories).forEach((name) => {
                items.push({ key: name, label: formatCategoryName(name) });
            });
        }
        return items;
    }, [usedIcons, favoriteIconCategories]);

    function openMenu(e) {
        setMenuAnchor(e.currentTarget);
    }

    function closeMenu() {
        setMenuAnchor(null);
    }

    function scrollToCategory(key) {
        closeMenu();
        setScrollTarget(key);
    }

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
            <Box className={styles.iconSelectionContent}>
                {usedIcons.length > 0 && (
                    <IconCategorySection
                        categoryKey={LAST_USED_KEY}
                        title={t('web:wpt_icon_selection_last_used')}
                        icons={usedIcons}
                        selectedIcon={selectedIcon}
                        onSelect={setSelectedIcon}
                        idPrefix="se-fav-icon-last-used"
                        scrollTarget={scrollTarget}
                    />
                )}
                {favoriteIconCategories &&
                    Object.entries(favoriteIconCategories.categories).map(([categoryName, categoryData]) => (
                        <IconCategorySection
                            key={categoryName}
                            categoryKey={categoryName}
                            scrollOnMount={categoryName === initialCategory}
                            title={formatCategoryName(categoryName)}
                            icons={categoryData.icons ?? []}
                            selectedIcon={selectedIcon}
                            onSelect={setSelectedIcon}
                            idPrefix={`se-fav-icon-${categoryName}`}
                            scrollTarget={scrollTarget}
                        />
                    ))}
                <ColorBlock color={'#f0f0f0'} minHeight={scrollTarget ? '100%' : undefined} />
            </Box>
        </SecondaryMenuDrawer>
    );
}

function IconCategorySection({
    scrollOnMount = false,
    categoryKey,
    scrollTarget,
    title,
    icons,
    selectedIcon,
    onSelect,
    idPrefix,
}) {
    const ref = useRef(null);
    const didScroll = useRef(false);

    useLayoutEffect(() => {
        if (!scrollOnMount || didScroll.current || !ref.current) return;
        ref.current.scrollIntoView({ block: 'start' });
        didScroll.current = true;
    }, [scrollOnMount]);

    useLayoutEffect(() => {
        if (scrollTarget !== categoryKey || !ref.current) return;
        ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }, [scrollTarget, categoryKey]);

    if (!icons || icons.length === 0) {
        return null;
    }

    return (
        <Box ref={ref}>
            <ThickDivider />
            <SubTitleMenu text={title} />
            <Box className={styles.iconGrid}>
                {icons.map((icon, index) => {
                    const isSelected = selectedIcon === icon;

                    return (
                        <ListItem
                            key={`${idPrefix}-${index}-${icon}`}
                            className={styles.iconGridItem}
                            component="div"
                            disablePadding
                        >
                            <ListItemButton
                                id={`${idPrefix}-${icon}`}
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
        </Box>
    );
}

function formatCategoryName(name) {
    if (!name) return '';

    return name.charAt(0).toUpperCase() + name.slice(1).replaceAll('_', ' ');
}
