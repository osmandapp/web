import headerStyles from '../../trackfavmenu.module.css';
import { Box, IconButton, Tooltip } from '@mui/material';
import OverlayLinearProgress from '../../../frame/components/progress/OverlayLinearProgress';
import HeaderWithUnderline from '../../../frame/components/header/HeaderWithUnderline';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ReactComponent as FilterIcon } from '../../../assets/icons/ic_action_filter.svg';
import { useTranslation } from 'react-i18next';
import { MAIN_URL_WITH_SLASH, SEARCH_URL, liveHash } from '../../../manager/GlobalManager';
import AppContext from '../../../context/AppContext';
import Loading from '../../errors/Loading';
import Empty from '../../errors/Empty';
import ActionsMenu from '../../actions/ActionsMenu';
import WikiPlacesFilter from './WikiPlacesFilter';
import WikiPlacesList from './WikiPlacesList';
import { addWikiPlacesDefaultFilters, closeExploreMenu } from '../../../manager/SearchManager';
import { useNavigate } from 'react-router-dom';
import EmptySearch from '../../errors/EmptySearch';
import { ZOOM_ERROR } from '../search/SearchResults';
import useHashParams from '../../../util/hooks/useHashParams';
import { EXPLORE_MIN_ZOOM } from '../../../map/layers/ExploreLayer';

export default function ExploreMenu() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [openFiltersDialog, setOpenFiltersDialog] = useState(false);
    const anchorEl = useRef(null);

    const { zoom } = useHashParams();

    const MAX_PLACES = 50;

    function close() {
        navigate(MAIN_URL_WITH_SLASH + SEARCH_URL + liveHash());
        closeExploreMenu(ctx);
    }

    useEffect(() => {
        if (!ctx.searchSettings.selectedFilters) {
            addWikiPlacesDefaultFilters(ctx);
        }
        ctx.setLoadingContextMenu(true);
    }, []);

    useEffect(() => {
        if (ctx.wikiPlaces) {
            ctx.setLoadingContextMenu(false);
        }
    }, [ctx.wikiPlaces]);

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <HeaderWithUnderline
                title={t('web:explore_menu')}
                titleId="se-explore-menu-name"
                onClose={close}
                showBackButton
                appBarProps={{ id: 'se-explore-menu-close' }}
                rightContent={
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
                }
            />
            {ctx.wikiPlaces && ctx.loadingContextMenu && !ctx.searchSettings.getPoi ? <OverlayLinearProgress /> : null}
            <Box sx={{ flex: 1, overflowY: 'auto' }}>
                {zoom > 0 && zoom < EXPLORE_MIN_ZOOM && <EmptySearch message={ZOOM_ERROR} />}
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
            </Box>
            <ActionsMenu
                open={openFiltersDialog}
                setOpen={setOpenFiltersDialog}
                anchorEl={anchorEl}
                actions={<WikiPlacesFilter />}
            />
        </Box>
    );
}
