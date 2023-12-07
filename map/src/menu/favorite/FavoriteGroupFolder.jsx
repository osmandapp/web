import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import GroupHeader from '../actions/GroupHeader';
import Empty from '../errors/Empty';
import FavoritesManager, { changeIconSizeWpt, removeShadowFromIconWpt } from '../../manager/FavoritesManager';
import FavoriteItem from './FavoriteItem';
import Utils, { getDistance } from '../../util/Utils';
import TracksManager from '../../manager/track/TracksManager';
import Loading from '../errors/Loading';
import { useLocation } from '../../util/hooks/useLocation';
import { isEmpty } from 'lodash';

export default function FavoriteGroupFolder({ folder }) {
    const ctx = useContext(AppContext);

    const [group, setGroup] = useState(folder);
    const [sortFiles, setSortFiles] = useState([]);
    const [, height] = useWindowSize();
    const [markers, setMarkers] = useState([]);
    const currentLoc = useLocation(ctx);

    useEffect(() => {
        let markerList = [];
        if (ctx.favorites[group.name]?.markers) {
            Object.values(ctx.favorites[group.name].markers._layers).forEach((value) => {
                let marker = {
                    title: value.options.title,
                    icon: changeIconSizeWpt(removeShadowFromIconWpt(value.options.icon.options.html), 18, 30),
                    layer: value,
                };
                markerList.push(marker);
            });
        } else if (markers.length === 0 && FavoritesManager.getGroupSize(group) > 0) {
            getFavoritesWithoutLayers().then();
        }
        markerList = addLocDist({ markers: markerList });
        setMarkers([...markerList]);
    }, [ctx.favorites]);

    useEffect(() => {
        if (markers.length > 0 && currentLoc) {
            const updatedMarkers = addLocDist({ markers: markers });
            setMarkers(updatedMarkers);
        }
    }, [currentLoc]);

    async function getFavoritesWithoutLayers() {
        let newFavoriteFiles = await getFavorites(false, Object.assign({}, ctx.favorites)).then();
        ctx.setFavorites({ ...newFavoriteFiles });
    }

    function addLocDist({ markers = null, wpts = null }) {
        let res = [];
        if (currentLoc) {
            if (markers && markers.length > 0) {
                markers.forEach((m) => {
                    if (m?.layer?._latlng) {
                        m.locDist = (
                            getDistance(currentLoc.lat, currentLoc.lng, m?.layer?._latlng.lat, m?.layer?._latlng.lng) /
                            1000
                        ).toFixed(0);
                    }
                    res.push(m);
                });
            } else if (wpts && wpts.length > 0) {
                wpts.forEach((w) => {
                    if (w.latlng) {
                        w.locDist = (
                            getDistance(currentLoc.lat, currentLoc.lng, w.latlng.lat, w.latlng.lng) / 1000
                        ).toFixed(0);
                    }
                    res.push(w);
                });
            }
        }
        if (isEmpty(res)) {
            if (markers) {
                return markers;
            } else if (wpts) {
                return wpts;
            }
        }
        return res;
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
            favorites.wpts = addLocDist({ wpts: favorites.wpts });
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
        }
    }, [folder]);

    const favItems = useMemo(() => {
        const items = [];
        let sortMarkers = [];
        if (sortFiles?.length > 0) {
            sortMarkers = getMarkersBySortFiles();
        }
        markers?.length > 0 &&
            (sortMarkers?.length > 0 ? sortMarkers : markers).map((marker, index) => {
                items.push(<FavoriteItem key={marker + index} marker={marker} group={group} />);
            });
        return items;
    }, [markers, sortFiles]);

    function getMarkersBySortFiles() {
        let arr = [];
        for (const wpt of sortFiles) {
            const marker = markers.find((m) => m.title === wpt.name);
            if (marker) {
                arr.push(marker);
            } else {
                return [];
            }
        }
        return arr;
    }

    return (
        <>
            <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
                <GroupHeader favoriteGroup={group} setSortFiles={setSortFiles} />
                <Box
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ overflowX: 'hidden', overflowY: 'auto !important', maxHeight: `${height - 120}px` }}
                >
                    {FavoritesManager.getGroupSize(folder) === 0 ? (
                        <Empty
                            title={'Empty group'}
                            text={"This group doesn't have any wpt yet. You can add them using map."}
                            menu={OBJECT_TYPE_FAVORITE}
                        />
                    ) : favItems.length > 0 ? (
                        favItems
                    ) : (
                        <Loading />
                    )}
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
