import React, { useContext, useEffect, useMemo, useState } from 'react';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import FavoriteGroup from './FavoriteGroup';
import { DEFAULT_FAV_GROUP_NAME } from '../../manager/FavoritesManager';
import Empty from '../errors/Empty';
import { Box, LinearProgress } from '@mui/material';
import GroupHeader from '../actions/GroupHeader';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { isEmpty } from 'lodash';
import Loading from '../errors/Loading';
import { byTime, doSort } from '../actions/SortActions';
import SmartFolder from '../components/SmartFolder';
import LoginContext from '../../context/LoginContext';
import { useTranslation } from 'react-i18next';

export default function FavoritesMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const [enableGroups, setEnableGroups] = useState([]);
    const [, height] = useWindowSize();
    const [sortGroups, setSortGroups] = useState([]);

    const sharedFiles = ctx.favorites?.groups?.filter((g) => g.sharedWithMe);

    // get list of favorites groups
    const groupItems = useMemo(() => {
        const items = [];
        let groups = null;
        if (sortGroups && sortGroups.length > 0) {
            groups = sortGroups;
        } else if (ctx.favorites?.groups?.length > 0) {
            groups = byTime(ctx.favorites.groups, true, false);
        }
        if (groups) {
            // remove shared with me groups from main list
            groups = groups.filter((g) => !g.sharedWithMe);
            groups.map((g, index) => {
                items.push(
                    <FavoriteGroup
                        key={g + index}
                        index={index}
                        group={g}
                        enableGroups={enableGroups}
                        setEnableGroups={setEnableGroups}
                    />
                );
            });
        }
        return items;
    }, [ctx.favorites?.groups, sortGroups]);

    useEffect(() => {
        if (ctx.selectedSort?.favorites && ctx.selectedSort.favorites[DEFAULT_FAV_GROUP_NAME]) {
            doSort({
                method: ctx.selectedSort.favorites[DEFAULT_FAV_GROUP_NAME],
                setSortGroups,
                groups: ctx.favorites.groups,
                favoriteGroup: DEFAULT_FAV_GROUP_NAME,
            });
        }
    }, [ctx.selectedSort?.favorites, ctx.favorites.groups]);

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
                        sx={{ overflowX: 'hidden', overflowY: 'auto !important', maxHeight: `${height - 120}px` }}
                    >
                        {groupItems}
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
