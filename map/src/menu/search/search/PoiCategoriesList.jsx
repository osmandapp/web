import { AppBar, Box, IconButton, ListItemIcon, ListItemText, MenuItem, Toolbar, Typography } from '@mui/material';
import CustomInput from './CustomInput';
import React from 'react';
import { useTranslation } from 'react-i18next';
import headerStyles from '../../trackfavmenu.module.css';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import gStyles from '../../gstylesmenu.module.css';
import styles from '../search.module.css';
import Loading from '../../errors/Loading';
import PoiManager from '../../../manager/PoiManager';
import { SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';
import MenuItemWithLines from '../../components/MenuItemWithLines';

export default function PoiCategoriesList({
    categories,
    categoriesIcons,
    setSearchValue,
    setOpenCategories,
    setOpenSearchResults,
    setIsMainSearchScreen,
    loadingIcons,
}) {
    const { t } = useTranslation();

    const sortedCategories = categories?.slice().sort((a, b) => {
        const nameA = PoiManager.formattingPoiType(t(`poi_${a}`)).toLowerCase();
        const nameB = PoiManager.formattingPoiType(t(`poi_${b}`)).toLowerCase();
        return nameA.localeCompare(nameB);
    });

    return (
        <Box>
            <AppBar position="static" className={headerStyles.appbar} sx={{ boxShadow: 'none !important' }}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        className={gStyles.icon}
                        onClick={() => {
                            setOpenCategories(false);
                            setIsMainSearchScreen(true);
                        }}
                    >
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        {t('search_categories')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <CustomInput setSearchValue={setSearchValue} type={SEARCH_TYPE_CATEGORY} />
            {loadingIcons ? (
                <Loading />
            ) : (
                <Box sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
                    {sortedCategories?.map((item, key) => {
                        const catName = t(`poi_${item}`);
                        return (
                            <MenuItem
                                className={styles.categoriesListItem}
                                key={key}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSearchValue({
                                        query: catName,
                                        type: SEARCH_TYPE_CATEGORY,
                                    });
                                    setOpenSearchResults(true);
                                    setOpenCategories(false);
                                }}
                            >
                                <ListItemIcon>{categoriesIcons[item]}</ListItemIcon>
                                <ListItemText>
                                    <MenuItemWithLines name={catName} maxLines={2} width={'270px'} />
                                </ListItemText>
                            </MenuItem>
                        );
                    })}
                </Box>
            )}
        </Box>
    );
}
