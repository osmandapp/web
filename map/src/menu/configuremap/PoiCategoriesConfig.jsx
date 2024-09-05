import headerStyles from '../trackfavmenu.module.css';
import {
    AppBar,
    Box,
    Button,
    Checkbox,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import styles from '../configuremap/configuremap.module.css';
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import PoiManager, { translatePoi } from '../../manager/PoiManager';
import { changeIconSizeWpt, getPoiCategoryIcon, removeShadowFromIconWpt } from '../../map/markers/MarkerOptions';

export const CategoryIcon = ({ color, background, icon, iconSize, shieldSize }) => {
    let svgHtml = getPoiCategoryIcon({ icon, color, background }).options.html;
    return (
        <div
            style={{ display: 'flex' }}
            dangerouslySetInnerHTML={{
                __html: changeIconSizeWpt(removeShadowFromIconWpt(svgHtml), iconSize, shieldSize) + '',
            }}
        />
    );
};

export default function PoiCategoriesConfig({ setOpenPoiConfig }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [selectedCategories, setSelectedCategories] = useState(new Set());

    const activePoiFilters = ctx.poiCategory?.filters;

    useEffect(() => {
        if (ctx.showPoiCategories.length > 0) {
            const categories = ctx.showPoiCategories.map((item) => item.category);
            setSelectedCategories(new Set(categories));
        }
    }, []);

    function closeCategories() {
        setOpenPoiConfig(false);
    }

    const handleTogglePoiCategories = (category) => {
        if (selectedCategories?.has(category)) {
            selectedCategories.delete(category);
        } else {
            selectedCategories.add(category);
        }
        setSelectedCategories(new Set(selectedCategories));
    };

    function deselectAllCategories() {
        setSelectedCategories(new Set());
    }

    function selectCheckedCategories() {
        const updatedCategories = Array.from(selectedCategories).map((category) => ({
            key: null,
            category: category,
        }));
        ctx.setShowPoiCategories([...updatedCategories]);
        setOpenPoiConfig(false);
    }

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" className={styles.closeIcon} onClick={() => closeCategories()}>
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        {t('layer_poi')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ overflowY: 'auto' }}>
                {activePoiFilters?.map((item, key) => {
                    const category = PoiManager.formattingPoiFilter(item, true);
                    return (
                        <MenuItem
                            key={key}
                            className={styles.poiCategoryItem}
                            id={`se-poi-category-${category}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleTogglePoiCategories(category);
                            }}
                        >
                            <ListItemIcon>{ctx.categoryIcons[item]}</ListItemIcon>
                            <ListItemText>
                                <Typography variant="inherit" noWrap>
                                    {translatePoi({ key, ctx, t })}
                                </Typography>
                            </ListItemText>
                            <Checkbox
                                checked={selectedCategories.has(category)}
                                onChange={() => handleTogglePoiCategories(category)}
                            />
                        </MenuItem>
                    );
                })}
            </Box>
            <AppBar position="static" className={styles.footer}>
                <Toolbar className={headerStyles.toolbar} style={{ justifyContent: 'space-between' }}>
                    <Button
                        disabled={selectedCategories.size === 0}
                        className={styles.buttonSelectAll}
                        onClick={deselectAllCategories}
                    >
                        {t('shared_string_deselect_all')}
                    </Button>
                    <Button className={styles.buttonApply} onClick={selectCheckedCategories} id="se-select-categories">
                        {t('shared_string_apply')}
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
