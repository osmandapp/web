import React, { useContext, useEffect, useState } from 'react';
import { Box, IconButton, ListItem, ListItemButton, Menu } from '@mui/material';
import { ReactComponent as AddIcon } from '../../../../assets/icons/ic_action_add.svg';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../../context/AppContext';
import MarkerOptions from '../../../../map/markers/MarkerOptions';
import SecondaryMenuDrawer from '../../../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../../../frame/components/header/HeaderWithUnderline';
import ThickDivider from '../../../../frame/components/dividers/ThickDivider';
import ActionsMenuItems from '../../../../frame/components/other/ActionsMenuItems';
import ColorBlock from '../../../../frame/components/other/ColorBlock';
import { getShapeSvg, SelectedMarker } from './WptIconPreview';
import ColorPickerDialog from './ColorPickerDialog';
import { loadColorPalette, nextPaletteId, saveColorPalette } from '../../../../manager/ColorPaletteManager';
import { hasAlpha } from '../../../../util/ColorUtil';
import { ReactComponent as EditIcon } from '../../../../assets/icons/ic_action_appearance.svg';
import { ReactComponent as DuplicateIcon } from '../../../../assets/icons/ic_action_copy.svg';
import { ReactComponent as RemoveIcon } from '../../../../assets/icons/ic_action_delete_outlined.svg';
import styles from '../wptEditPanel.module.css';
import menuStyles from '../../../../menu/trackfavmenu.module.css';

const CIRCLE = MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE;
const COLOR_ITEM_SIZE = 36;
const COLOR_ITEM_CONTAINER = 48;

export default function ColorSelectionPanel({ selectedColor, setSelectedColor, favoriteShape, onClose }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [colors, setColors] = useState([]); // [{ id, value }] — id is the stable palette index
    const [contextMenu, setContextMenu] = useState(null); // { index, anchorEl }
    const [pickerOpen, setPickerOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        loadColorPalette().then((loaded) => {
            if (loaded.length > 0) {
                setColors(loaded);
            }
        });
    }, []);

    function handleSelect(color) {
        setSelectedColor(color);
    }

    function openContextMenu(e, index) {
        e.preventDefault();
        setContextMenu({ index, anchorEl: e.currentTarget });
    }

    function closeContextMenu() {
        setContextMenu(null);
    }

    function handleEdit() {
        const idx = contextMenu.index;
        closeContextMenu();
        setEditIndex(idx);
        setPickerOpen(true);
    }

    async function handleDuplicate() {
        const idx = contextMenu.index;
        closeContextMenu();
        const copy = { id: nextPaletteId(colors), value: colors[idx].value };
        const updated = [copy, ...colors];
        const ok = await saveColorPalette(updated, ctx.setNotification);
        if (ok) {
            setColors(updated);
        }
    }

    async function handleRemove() {
        const idx = contextMenu.index;
        const removed = colors[idx];
        closeContextMenu();
        const updated = colors.filter((_, i) => i !== idx);
        const ok = await saveColorPalette(updated, ctx.setNotification);
        if (ok) {
            setColors(updated);
            const colorStillAvailable = updated.some((c) => c.value === removed.value);
            if (removed.value === selectedColor && !colorStillAvailable) {
                setSelectedColor(updated[0]?.value ?? MarkerOptions.DEFAULT_WPT_COLOR);
            }
        }
    }

    function handleAddColor() {
        setEditIndex(null);
        setPickerOpen(true);
    }

    function handlePickerClose() {
        setPickerOpen(false);
    }

    async function handlePickerApply(color) {
        if (editIndex !== null) {
            const updated = colors.map((c, i) => (i === editIndex ? { ...c, value: color } : c));
            const ok = await saveColorPalette(updated, ctx.setNotification);
            if (!ok) return;
            setPickerOpen(false);
            setColors(updated);
            if (colors[editIndex].value === selectedColor) {
                setSelectedColor(color);
            }
        } else {
            const updated = [{ id: nextPaletteId(colors), value: color }, ...colors];
            const ok = await saveColorPalette(updated, ctx.setNotification);
            if (!ok) return;
            setPickerOpen(false);
            setColors(updated);
            setSelectedColor(color);
        }
    }

    const pickerInitialColor = editIndex !== null ? (colors[editIndex]?.value ?? selectedColor) : selectedColor;

    const headerRightContent = (
        <IconButton className={menuStyles.appBarIcon} onClick={handleAddColor} size="small">
            <AddIcon />
        </IconButton>
    );

    return (
        <SecondaryMenuDrawer onClose={onClose}>
            <HeaderWithUnderline
                title={t('web:all_colors_title')}
                onClose={onClose}
                showBackButton
                appBarProps={{ id: 'se-back-color-selection-panel' }}
                rightContent={headerRightContent}
            />
            <ThickDivider />
            <Box className={styles.iconSelectionContent}>
                <Box className={styles.iconGrid}>
                    {colors.map(({ id, value }, index) => {
                        const isSelected = value === selectedColor;
                        return (
                            <ListItem key={id} className={styles.iconGridItem} component="div" disablePadding>
                                <ListItemButton
                                    id={`se-color-item-${value.replace(/^#/, '')}`}
                                    className={styles.iconGridButton}
                                    onClick={() => handleSelect(value)}
                                    onContextMenu={(e) => openContextMenu(e, index)}
                                >
                                    <ColorCircle
                                        color={value}
                                        shape={favoriteShape}
                                        size={COLOR_ITEM_SIZE}
                                        containerSize={COLOR_ITEM_CONTAINER}
                                        selected={isSelected}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                    <ListItem className={styles.iconGridItem} component="div" disablePadding>
                        <ListItemButton id="se-color-add-btn" className={styles.addColorBtn} onClick={handleAddColor}>
                            <Box className={styles.addColorShape}>
                                <AddIcon />
                            </Box>
                        </ListItemButton>
                    </ListItem>
                </Box>
                <ColorBlock color={'#f0f0f0'} />
            </Box>

            <Menu
                anchorEl={contextMenu?.anchorEl}
                open={Boolean(contextMenu)}
                onClose={closeContextMenu}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <ActionsMenuItems
                    items={[
                        { id: 'color-edit', icon: <EditIcon />, label: t('shared_string_edit'), onClick: handleEdit },
                        {
                            id: 'color-duplicate',
                            icon: <DuplicateIcon />,
                            label: t('shared_string_duplicate'),
                            onClick: handleDuplicate,
                        },
                        {
                            id: 'color-remove',
                            icon: <RemoveIcon />,
                            label: t('shared_string_remove'),
                            onClick: handleRemove,
                            dividerBefore: true,
                        },
                    ]}
                />
            </Menu>

            <ColorPickerDialog
                open={pickerOpen}
                initialColor={pickerInitialColor}
                onApply={handlePickerApply}
                onClose={handlePickerClose}
            />
        </SecondaryMenuDrawer>
    );
}

function ColorCircle({ color, shape, size, containerSize, selected }) {
    return (
        <Box className={styles.colorCircleContainer} sx={{ width: containerSize, height: containerSize }}>
            <Box
                className={hasAlpha(color) ? styles.colorCheckerBg : undefined}
                sx={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden' }}
                dangerouslySetInnerHTML={{ __html: getShapeSvg(shape ?? CIRCLE, color, size) }}
            />
            {selected && <SelectedMarker size={containerSize} />}
        </Box>
    );
}
