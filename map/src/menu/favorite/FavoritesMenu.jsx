import React, { useContext, useEffect, useMemo, useState } from 'react';
import AppContext, { FAVORITES_URL_PARAM_FOLDER, OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import FavoriteGroup from './FavoriteGroup';
import { DEFAULT_FAV_GROUP_NAME, HIDDEN_TRUE } from '../../manager/FavoritesManager';
import Empty from '../errors/Empty';
import { Box, LinearProgress } from '@mui/material';
import GroupHeader from '../actions/GroupHeader';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import isEmpty from 'lodash-es/isEmpty';
import Loading from '../errors/Loading';
import { byTime, doSort } from '../actions/SortActions';
import SmartFolder from '../components/SmartFolder';
import LoginContext from '../../context/LoginContext';
import { useTranslation } from 'react-i18next';
import FavoriteGroupFolder from './FavoriteGroupFolder';
import PinnedFavoriteGroups from './PinnedFavoriteGroups';
import { useSearchParams, useLocation } from 'react-router-dom';
import { FAVORITES_URL, INFO_MENU_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';

export default function FavoritesMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const [, height] = useWindowSize();
    const [sortGroups, setSortGroups] = useState([]);

    const [openSharedFolder, setOpenSharedFolder] = useState(null);

    const [showListReady, setShowListReady] = useState(false);

    const sharedFiles = ctx.favorites?.groups?.filter((g) => g.sharedWithMe);

    const { pinnedGroups, unpinnedGroups } = useMemo(() => {
        let groups = null;
        if (sortGroups && sortGroups.length > 0) {
            groups = sortGroups;
        } else if (ctx.favorites?.groups?.length > 0) {
            groups = byTime(ctx.favorites.groups, true, false);
        }
        if (groups) {
            // remove shared with me groups from main list
            groups = groups.filter((g) => !g.sharedWithMe);
            const pinnedVisible = [];
            const pinnedHidden = [];
            const unpinnedVisible = [];
            const unpinnedHidden = [];

            groups.forEach((g) => {
                const isPinned = g.pinned;
                const isHidden = g.hidden === HIDDEN_TRUE;
                if (isPinned) {
                    if (isHidden) {
                        pinnedHidden.push(g);
                    } else {
                        pinnedVisible.push(g);
                    }
                } else {
                    if (isHidden) {
                        unpinnedHidden.push(g);
                    } else {
                        unpinnedVisible.push(g);
                    }
                }
            });
            const pinnedGroups = pinnedVisible.concat(pinnedHidden);
            const unpinnedGroups = unpinnedVisible.concat(unpinnedHidden);
            return { pinnedGroups, unpinnedGroups };
        }
        return { pinnedGroups: [], unpinnedGroups: [] };
    }, [ctx.favorites?.groups, sortGroups]);

    useEffect(() => {
        if (ctx.selectedSort?.favorites?.[DEFAULT_FAV_GROUP_NAME]) {
            doSort({
                method: ctx.selectedSort.favorites[DEFAULT_FAV_GROUP_NAME],
                setSortGroups,
                groups: ctx.favorites.groups,
                favoriteGroup: DEFAULT_FAV_GROUP_NAME,
            });
        }
    }, [ctx.selectedSort?.favorites, ctx.favorites.groups]);

    useEffect(() => {
        if (location.pathname !== MAIN_URL_WITH_SLASH + FAVORITES_URL) return;
        const nextSearch = location.search || '';
        ctx.setPageParams((prev) => {
            if (prev?.[OBJECT_TYPE_FAVORITE] === nextSearch) return prev;
            return { ...prev, [OBJECT_TYPE_FAVORITE]: nextSearch };
        });
    }, [location.pathname, location.search]);

    const folderName = searchParams.get(FAVORITES_URL_PARAM_FOLDER);
    const openGroup = useMemo(() => {
        if (!folderName || !ctx.favorites?.groups) return null;
        return ctx.favorites.groups.find((g) => g.name === folderName) ?? null;
    }, [folderName, ctx.favorites?.groups]);

    // Until the URL is updated after returning, we show progress instead of flickering the list
    useEffect(() => {
        if (folderName || openGroup) {
            setShowListReady(false);
            return;
        }
        const t = setTimeout(() => setShowListReady(true), 400);
        return () => clearTimeout(t);
    }, [folderName, openGroup]);

    if (folderName && (ctx.processingGroups || !openGroup)) {
        return (
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                {ltx.loginUser && (
                    <GroupHeader
                        type="favorites"
                        favoriteGroup={DEFAULT_FAV_GROUP_NAME}
                        setSortGroups={setSortGroups}
                    />
                )}
                <Loading />
            </Box>
        );
    }

    if (openGroup) {
        if (location.pathname.includes(INFO_MENU_URL)) {
            return (
                <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                    <Loading />
                </Box>
            );
        }
        return <FavoriteGroupFolder folder={openGroup} />;
    }

    if (openSharedFolder) {
        return <FavoriteGroupFolder smartf={openSharedFolder} onClose={() => setOpenSharedFolder(null)} />;
    }

    if (!showListReady) {
        return (
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                {ltx.loginUser && (
                    <GroupHeader
                        type="favorites"
                        favoriteGroup={DEFAULT_FAV_GROUP_NAME}
                        setSortGroups={setSortGroups}
                    />
                )}
                <Loading />
            </Box>
        );
    }

    return (
        <>
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                {ltx.loginUser && (
                    <GroupHeader
                        type="favorites"
                        favoriteGroup={DEFAULT_FAV_GROUP_NAME}
                        setSortGroups={setSortGroups}
                    />
                )}
                {ctx.favLoading && <LinearProgress />}
                {!isEmpty(sharedFiles) && (
                    <SmartFolder
                        type={'share'}
                        subtype={'favorite'}
                        files={sharedFiles}
                        onOpenFolder={setOpenSharedFolder}
                    />
                )}
                {ctx.gpxLoading || ctx.processingGroups ? (
                    <Loading />
                ) : !isEmpty(ctx.favorites) && ctx.favorites?.groups?.length > 0 ? (
                    <Box
                        minWidth={ctx.infoBlockWidth}
                        maxWidth={ctx.infoBlockWidth}
                        sx={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: `${height - 120}px` }}
                    >
                        <PinnedFavoriteGroups pinnedGroups={pinnedGroups} />
                        {unpinnedGroups.map((g, index) => (
                            <FavoriteGroup key={g.id ?? index} index={index} group={g} />
                        ))}
                    </Box>
                ) : (
                    <Empty
                        title={t('web:empty_favorites')}
                        text={t('web:empty_favorites_description')}
                        menu={OBJECT_TYPE_FAVORITE}
                    />
                )}
            </Box>
        </>
    );
}
