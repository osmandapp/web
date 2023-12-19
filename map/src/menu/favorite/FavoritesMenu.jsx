import React, { useContext, useMemo, useState } from 'react';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import FavoriteGroup from './FavoriteGroup';
import { DEFAULT_FAV_GROUP_NAME } from '../../manager/FavoritesManager';
import Empty from '../errors/Empty';
import { Box } from '@mui/material';
import GroupHeader from '../actions/GroupHeader';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { isEmpty } from 'lodash';
import Loading from '../errors/Loading';

export default function FavoritesMenu() {
    const ctx = useContext(AppContext);

    const [enableGroups, setEnableGroups] = useState([]);
    const [, height] = useWindowSize();
    const [sortGroups, setSortGroups] = useState([]);

    // get list of favorites groups
    const groupItems = useMemo(() => {
        const items = [];
        const groups =
            sortGroups?.length > 0 ? sortGroups : ctx.favorites?.groups?.length > 0 ? ctx.favorites?.groups : null;
        if (groups) {
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

    return (
        <>
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                {!isEmpty(ctx.favorites) && (
                    <GroupHeader favoriteGroup={DEFAULT_FAV_GROUP_NAME} setSortGroups={setSortGroups} />
                )}
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
                        title={'You don’t have favorite files'}
                        text={'You can import or create favorite files using OsmAnd App.'}
                        menu={OBJECT_TYPE_FAVORITE}
                    />
                )}
            </Box>
        </>
    );
}
