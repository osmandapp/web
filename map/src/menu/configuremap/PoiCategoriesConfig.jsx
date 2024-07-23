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
import PoiManager, { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE } from '../../manager/PoiManager';
import { changeIconSizeWpt, getPoiCategoryIcon, removeShadowFromIconWpt } from '../../map/markers/MarkerOptions';
import { isEmpty } from 'lodash';

export const CategoryIcon = ({ color, background, icon, iconSize, shieldSize }) => {
    return (
        <div
            style={{ display: 'flex' }}
            dangerouslySetInnerHTML={{
                __html:
                    changeIconSizeWpt(
                        removeShadowFromIconWpt(getPoiCategoryIcon(icon, color, background).options.html),
                        iconSize,
                        shieldSize
                    ) + '',
            }}
        />
    );
};

export default function PoiCategoriesConfig({ setOpenPoiConfig }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [categoryIcons, setCategoryIcons] = useState({});
    const [selectedCategories, setSelectedCategories] = useState(new Set());

    const activePoiFilters = removeUnusedFilters(ctx.poiCategory?.filters);

    useEffect(() => {
        if (ctx.showPoiCategories.length > 0) {
            setSelectedCategories(new Set(ctx.showPoiCategories));
        }
    }, []);

    useEffect(() => {
        async function loadIcons() {
            const icons = {};
            for (const filter of activePoiFilters) {
                icons[filter] = await getCategoryIcon(filter);
            }
            setCategoryIcons(icons);
        }
        if (isEmpty(categoryIcons) && activePoiFilters !== null) {
            loadIcons().then();
        }
    }, [activePoiFilters]);

    function closeCategories() {
        setOpenPoiConfig(false);
    }

    function removeUnusedFilters(filters) {
        if (filters) {
            return filters.filter((f) => f !== 'routes');
        }
        return null;
    }

    const handleTogglePoiCategories = (category) => {
        if (selectedCategories?.has(category)) {
            selectedCategories.delete(category);
        } else {
            selectedCategories.add(category);
        }
        setSelectedCategories(new Set(selectedCategories));
    };

    function translatePoi({ key = null, value = null }) {
        if (key === null && value === null) {
            return '';
        }
        if (key !== null && activePoiFilters !== null) {
            return t('poi_' + activePoiFilters[key]);
        } else if (value !== null) {
            return t('poi_' + value);
        }
        return '';
    }

    async function getCategoryIcon(category) {
        const name = PoiManager.preparePoiFilterIcon(category);
        return (
            <CategoryIcon
                color={DEFAULT_POI_COLOR}
                background={DEFAULT_POI_SHAPE}
                icon={name}
                iconSize={20}
                shieldSize={30}
            />
        );
    }

    function selectAllCategories() {
        let allCategories = [];
        activePoiFilters.forEach((item) => {
            const category = PoiManager.formattingPoiFilter(item, true);
            allCategories.push(category);
        });
        setSelectedCategories(new Set(allCategories));
        ctx.setShowPoiCategories(allCategories);
    }

    function selectCheckedCategories() {
        ctx.setShowPoiCategories([...selectedCategories]);
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
                        <MenuItem key={key} className={styles.poiCategoryItem} id={`se-poi-category-${category}`}>
                            <ListItemIcon>{categoryIcons[item]}</ListItemIcon>
                            <ListItemText>
                                <Typography variant="inherit" noWrap>
                                    {translatePoi({ key })}
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
                    <Button className={styles.buttonSelectAll} onClick={selectAllCategories}>
                        {t('shared_string_select_all')}
                    </Button>
                    <Button className={styles.buttonApply} onClick={selectCheckedCategories}>
                        {t('shared_string_apply')}
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
