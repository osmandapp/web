import headerStyles from '../trackfavmenu.module.css';
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import styles from '../settings/settings.module.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/ic_action_filter.svg';
import { useTranslation } from 'react-i18next';
import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';
import AppContext, { OBJECT_SEARCH } from '../../context/AppContext';
import Loading from '../errors/Loading';
import Empty from '../errors/Empty';
import WikiPlacesItem from './WikiPlacesItem';
import ActionsMenu from '../actions/ActionsMenu';
import WikiPlacesFilter from './WikiPlacesFilter';
import filters from '../../resources/wiki_data_filters.json';

export default function ExploreMenu() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const [openFiltersDialog, setOpenFiltersDialog] = useState(false);
    const anchorEl = useRef(null);

    function close() {
        ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE);
        ctx.setCurrentObjectType(null);
        ctx.setLoadingContextMenu(false);
    }

    useEffect(() => {
        ctx.setCurrentObjectType(OBJECT_SEARCH);
        const defaultFilters = filters.filter((f) => f !== 'office');
        ctx.setSearchSettings({
            ...ctx.searchSettings,
            selectedFilters: new Set(defaultFilters),
            useWikiImages: false,
        });
        ctx.setLoadingContextMenu(true);
    }, []);

    useEffect(() => {
        if (ctx.wikiPlaces) {
            ctx.setLoadingContextMenu(false);
        }
    }, [ctx.wikiPlaces]);

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" type="button" className={styles.closeIcon} onClick={close}>
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-explore-menu-name" component="div" className={headerStyles.title}>
                        {t('web:explore_menu')}
                    </Typography>
                    <Tooltip key={'wikidata_filters'} title={t('shared_string_filters')} arrow placement="bottom-end">
                        <span>
                            <IconButton
                                id={'se-wikidata_filters'}
                                component="span"
                                variant="contained"
                                type="button"
                                ref={anchorEl}
                                className={headerStyles.appBarIcon}
                                onClick={() => setOpenFiltersDialog(true)}
                            >
                                <FilterIcon />
                            </IconButton>
                        </span>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            {!ctx.wikiPlaces && ctx.loadingContextMenu && !ctx.searchSettings.getPoi ? (
                <Loading id={'se-loading-page'} />
            ) : (
                <>
                    {ctx.wikiPlaces?.length === 0 ? (
                        <Empty title={'Places not found'} />
                    ) : (
                        <Box
                            id={'se-wiki_places-items'}
                            minWidth={ctx.infoBlockWidth}
                            maxWidth={ctx.infoBlockWidth}
                            sx={{ overflow: 'auto', overflowX: 'hidden' }}
                        >
                            {!ctx.searchSettings.useWikiImages &&
                                ctx.wikiPlaces?.map((item, index) => (
                                    <WikiPlacesItem index={item.id} key={index} item={item} />
                                ))}
                        </Box>
                    )}
                </>
            )}
            <ActionsMenu
                open={openFiltersDialog}
                setOpen={setOpenFiltersDialog}
                anchorEl={anchorEl}
                actions={<WikiPlacesFilter />}
            />
        </>
    );
}
