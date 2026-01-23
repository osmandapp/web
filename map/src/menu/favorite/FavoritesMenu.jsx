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
import { SHARE_TYPE } from '../share/shareConstants';
import FavoriteGroupFolder from './FavoriteGroupFolder';
import PinnedFavoriteGroups from './PinnedFavoriteGroups';
import { useLocation } from 'react-router-dom';
import { FAVORITES_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';
import { useUpdateQueryParam } from '../../util/hooks/menu/useUpdateQueryParam';

export default function FavoritesMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();
    const location = useLocation();
    const { updateQueryParam, searchParams } = useUpdateQueryParam();

    const [, height] = useWindowSize();
    const [sortGroups, setSortGroups] = useState([]);

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
        if (location.pathname !== MAIN_URL_WITH_SLASH + FAVORITES_URL || !ctx.favorites?.groups) {
            return;
        }

        const folderName = searchParams.get(FAVORITES_URL_PARAM_FOLDER);
        const lastOpenGroup = ctx.openFavGroups?.[ctx.openFavGroups.length - 1];
        const openFolderName = lastOpenGroup?.name;

        if (folderName) {
            if (openFolderName !== folderName) {
                // open favorite group from url param
                const group = ctx.favorites.groups.find((g) => g.name === folderName);
                ctx.setOpenFavGroups(group ? [group] : []);
            }
        } else if (openFolderName) {
            // update url param to match open favorite group
            updateQueryParam(FAVORITES_URL_PARAM_FOLDER, openFolderName, MAIN_URL_WITH_SLASH + FAVORITES_URL, {
                replace: true,
            });
        }
    }, [location.pathname, ctx.favorites?.groups]);

    // handle back/forward navigation
    useEffect(() => {
        if (location.pathname !== MAIN_URL_WITH_SLASH + FAVORITES_URL) {
            return;
        }

        const folderName = searchParams.get(FAVORITES_URL_PARAM_FOLDER);
        if (!folderName && ctx.openFavGroups.length > 0) {
            // close all open favorite groups
            ctx.setOpenFavGroups([]);
        } else if (folderName && ctx.openFavGroups.length === 0) {
            // open favorite group from url param
            const group = ctx.favorites?.groups?.find((g) => g.name === folderName);
            if (group) {
                ctx.setOpenFavGroups([group]);
            }
        }
    }, [searchParams]);

    const folderNameFromUrl = searchParams.get(FAVORITES_URL_PARAM_FOLDER);
    const shouldShowGroup = ctx.openFavGroups && ctx.openFavGroups.length > 0;
    const shouldWaitForGroup = folderNameFromUrl && !shouldShowGroup && ctx.favorites?.groups;

    if (shouldShowGroup) {
        const lastGroup = ctx.openFavGroups[ctx.openFavGroups.length - 1];
        if (lastGroup?.type === SHARE_TYPE) {
            if (lastGroup?.files) {
                return <FavoriteGroupFolder smartf={lastGroup} />;
            }
            return <FavoriteGroupFolder folder={lastGroup.group} smartf={lastGroup} />;
        }
        return <FavoriteGroupFolder folder={lastGroup} />;
    }

    if (shouldWaitForGroup) {
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
                {!isEmpty(sharedFiles) && <SmartFolder type={'share'} subtype={'favorite'} files={sharedFiles} />}
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
