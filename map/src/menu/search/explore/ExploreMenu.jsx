import headerStyles from '../../trackfavmenu.module.css';
import { AppBar, IconButton, LinearProgress, Toolbar, Tooltip, Typography } from '@mui/material';
import styles from '../../settings/settings.module.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as FilterIcon } from '../../../assets/icons/ic_action_filter.svg';
import { useTranslation } from 'react-i18next';
import { MAIN_URL_WITH_SLASH, SEARCH_URL } from '../../../manager/GlobalManager';
import AppContext, { OBJECT_EXPLORE } from '../../../context/AppContext';
import Loading from '../../errors/Loading';
import Empty from '../../errors/Empty';
import ActionsMenu from '../../actions/ActionsMenu';
import WikiPlacesFilter from './WikiPlacesFilter';
import WikiPlacesList from './WikiPlacesList';
import { addWikiPlacesDefaultFilters } from '../../../manager/SearchManager';
import { useNavigate } from 'react-router-dom';

export default function ExploreMenu() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [openFiltersDialog, setOpenFiltersDialog] = useState(false);
    const anchorEl = useRef(null);

    const MAX_PLACES = 50;

    function close() {
        navigate(MAIN_URL_WITH_SLASH + SEARCH_URL + window.location.hash);
        ctx.setLoadingContextMenu(false);
        addWikiPlacesDefaultFilters(ctx, true);
    }

    useEffect(() => {
        ctx.setCurrentObjectType(OBJECT_EXPLORE);
        addWikiPlacesDefaultFilters(ctx);
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
                    <IconButton
                        id={'se-explore-menu-close'}
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={close}
                    >
                        <BackIcon />
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
                {ctx.wikiPlaces && ctx.loadingContextMenu && !ctx.searchSettings.getPoi ? <LinearProgress /> : null}
            </AppBar>
            {!ctx.wikiPlaces && ctx.loadingContextMenu && !ctx.searchSettings.getPoi ? (
                <Loading id={'se-loading-page'} />
            ) : (
                <>
                    {ctx.wikiPlaces?.length === 0 ? (
                        <Empty title={'Places not found'} />
                    ) : (
                        <WikiPlacesList size={MAX_PLACES} />
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
