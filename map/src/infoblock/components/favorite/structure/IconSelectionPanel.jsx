import React, { useContext, useLayoutEffect, useMemo, useRef } from 'react';
import { Box, ListItem, ListItemButton } from '@mui/material';
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

const SELECTION_COLOR = '#237bff';
const FALLBACK_BG_COLOR = '#e6e6e6';

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

    const usedIcons = useMemo(() => {
        const res = [...ctx.usedIcons];
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
    }, [ctx.usedIcons, selectedGpxFile, add]);

    // Find the actual category containing the initially selected icon, so we can scroll to it on open.
    // Last used is intentionally skipped — it's a shortcut, not the canonical location of an icon.
    const initialCategory = useMemo(() => {
        const icon = initialIconRef.current;
        if (!icon || !favoriteIconCategories?.categories) return null;
        const entry = Object.entries(favoriteIconCategories.categories).find(([, data]) => data?.icons?.includes(icon));

        return entry ? entry[0] : null;
    }, [favoriteIconCategories]);

    function handleSelectIcon(icon) {
        setSelectedIcon(icon);
    }

    return (
        <SecondaryMenuDrawer onClose={onClose}>
            <HeaderWithUnderline
                title={t('web:wpt_icon_selection_title')}
                onClose={onClose}
                showBackButton
                appBarProps={{ id: 'se-back-icon-selection-panel' }}
            />
            <Box className={styles.iconSelectionContent}>
                {usedIcons.length > 0 && (
                    <IconCategorySection
                        title={t('web:wpt_icon_selection_last_used')}
                        icons={usedIcons}
                        selectedIcon={selectedIcon}
                        onSelect={handleSelectIcon}
                        idPrefix="se-fav-icon-last-used"
                    />
                )}
                {favoriteIconCategories &&
                    Object.entries(favoriteIconCategories.categories).map(([categoryName, categoryData]) => (
                        <IconCategorySection
                            key={categoryName}
                            scrollOnMount={categoryName === initialCategory}
                            title={formatCategoryName(categoryName)}
                            icons={categoryData.icons ?? []}
                            selectedIcon={selectedIcon}
                            onSelect={handleSelectIcon}
                            idPrefix={`se-fav-icon-${categoryName}`}
                        />
                    ))}
                <ColorBlock color={'#f0f0f0'} />
            </Box>
        </SecondaryMenuDrawer>
    );
}

function IconCategorySection({ scrollOnMount = false, title, icons, selectedIcon, onSelect, idPrefix }) {
    const ref = useRef(null);
    const didScroll = useRef(false);

    useLayoutEffect(() => {
        if (!scrollOnMount || didScroll.current || !ref.current) return;
        ref.current.scrollIntoView({ block: 'start' });
        didScroll.current = true;
    }, [scrollOnMount]);

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
                                id={`${idPrefix}-${index}`}
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
