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

    return (
        <Box>
            <AppBar position="static" className={headerStyles.appbar}>
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
                <Box sx={{ overflowY: 'auto' }}>
                    {categories?.map((item, key) => {
                        return (
                            <MenuItem
                                className={styles.categoriesListItem}
                                key={key}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSearchValue({
                                        query: item,
                                        type: 'category',
                                    });
                                    setOpenSearchResults(true);
                                    setOpenCategories(false);
                                }}
                            >
                                <ListItemIcon>{categoriesIcons[item]}</ListItemIcon>
                                <ListItemText>
                                    <Typography variant="inherit" noWrap>
                                        {PoiManager.formattingPoiType(t(`poi_${item}`))}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        );
                    })}
                </Box>
            )}
        </Box>
    );
}
