import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import GroupHeader from '../actions/GroupHeader';
import Empty from '../errors/Empty';
import FavoritesManager from '../../manager/FavoritesManager';
import FavoriteItem from './FavoriteItem';
import Utils from '../../util/Utils';
import TracksManager from '../../manager/track/TracksManager';
import Loading from '../errors/Loading';

export default function FavoriteGroupFolder({ folder }) {
    const ctx = useContext(AppContext);

    const [group, setGroup] = useState(folder);
    const [sortFiles, setSortFiles] = useState([]);
    const [, height] = useWindowSize();
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        let markerList = [];
        if (ctx.favorites[group.name]?.markers) {
            Object.values(ctx.favorites[group.name].markers._layers).forEach((value) => {
                let marker = {
                    title: value.options.title,
                    icon: value.options.icon.options.html,
                    layer: value,
                };
                markerList.push(marker);
            });
        } else if (markers.length === 0 && FavoritesManager.getGroupSize(group) > 0) {
            getFavoritesWithoutLayers().then();
        }
        setMarkers(markerList);
    }, [ctx.favorites]);

    async function getFavoritesWithoutLayers() {
        let newFavoriteFiles = await getFavorites(false, Object.assign({}, ctx.favorites)).then();
        ctx.setFavorites({ ...newFavoriteFiles });
    }

    async function getFavorites(addToMap, newFavoriteFiles) {
        let url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(
            group.file.type
        )}&name=${encodeURIComponent(group.file.name)}`;
        newFavoriteFiles[group.name] = {
            url: url,
            clienttimems: group.file.clienttimems,
            updatetimems: group.file.updatetimems,
            name: group.file.name,
            addToMap: addToMap,
        };
        let f = await Utils.getFileData(newFavoriteFiles[group.name]);
        if (f) {
            const favoriteFile = new File([f], group.file.name, {
                type: 'text/plain',
            });
            let favorites = await TracksManager.getTrackData(favoriteFile);
            if (favorites) {
                favorites.name = group.file.name;
            }
            Object.keys(favorites).forEach((t) => {
                newFavoriteFiles[group.name][`${t}`] = favorites[t];
            });
            return newFavoriteFiles;
        }
    }

    useEffect(() => {
        if (folder) {
            setGroup({ ...folder });
            setSortFiles([]);
            //setSortGroups([]);
        }
    }, [folder]);

    const favItems = useMemo(() => {
        const items = [];
        markers?.length > 0 &&
            markers.map((marker, index) => {
                items.push(<FavoriteItem key={marker + index} index={index} marker={marker} group={group} />);
            });
        return items;
    }, [markers, sortFiles]);

    return (
        <>
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                <GroupHeader favoriteGroup={group} />
                <Box
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ overflowX: 'hidden', overflowY: 'auto !important', maxHeight: `${height - 120}px` }}
                >
                    {favItems.length > 0 ? favItems : <Loading />}
                </Box>
            </Box>
            {ctx.favorites?.groups?.length === 0 && (
                <Empty
                    title={'You don’t have favorite files'}
                    text={'You can import or create favorite files using OsmAnd App.'}
                    menu={OBJECT_TYPE_FAVORITE}
                />
            )}
        </>
    );
}
