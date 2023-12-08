import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '@mui/material';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import GroupHeader from '../actions/GroupHeader';
import Empty from '../errors/Empty';
import FavoritesManager, {
    changeIconSizeWpt,
    LOCATION_UNAVAILABLE,
    removeShadowFromIconWpt,
} from '../../manager/FavoritesManager';
import FavoriteItem from './FavoriteItem';
import Utils, { getDistance } from '../../util/Utils';
import TracksManager from '../../manager/track/TracksManager';
import Loading from '../errors/Loading';
import { isEmpty } from 'lodash';
import { useLocation } from '../../util/hooks/useLocation';

export default function FavoriteGroupFolder({ folder }) {
    const ctx = useContext(AppContext);

    const [group, setGroup] = useState(folder);
    const [sortFiles, setSortFiles] = useState([]);
    const [, height] = useWindowSize();
    const [markers, setMarkers] = useState([]);
    const currentLoc = useLocation(ctx);

    const hash = window.location.hash;

    const refMarkers = useRef(null);

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
        markerList = addLocDist({ location: currentLoc, markers: markerList });
        setMarkers([...markerList]);
        refMarkers.current = markerList;
    }, [ctx.favorites]);

    useEffect(() => {
        if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
            // update markers location
            if (refMarkers.current.length > 0) {
                const updatedMarkers = addLocDist({ location: currentLoc, markers: refMarkers.current });
                setMarkers(updatedMarkers);
            }
        } else if (currentLoc && currentLoc === LOCATION_UNAVAILABLE && refMarkers.current.length > 0) {
            const updatedMarkers = addLocDist({ location: getCenterMapLoc(), markers: refMarkers.current });
            setMarkers(updatedMarkers);
        }
    }, [currentLoc, hash, refMarkers.current]);

    async function getFavoritesWithoutLayers() {
        let newFavoriteFiles = await getFavorites(false, Object.assign({}, ctx.favorites)).then();
        ctx.setFavorites({ ...newFavoriteFiles });
    }

    function getCenterMapLoc() {
        const parts = hash.split('/').slice(1);
        if (parts.length === 2) {
            const [lat, lng] = parts.map(parseFloat);
            if (!isNaN(lat) && !isNaN(lng)) {
                return {
                    lat: lat,
                    lng: lng,
                };
            }
        }
        return null;
    }

    function addLocDist({ location, markers = null, wpts = null }) {
        let res = [];
        if (location && location !== LOCATION_UNAVAILABLE) {
            if (markers && markers.length > 0) {
                markers.forEach((m) => {
                    if (m?.layer?._latlng) {
                        m.locDist = (
                            getDistance(location.lat, location.lng, m?.layer?._latlng.lat, m?.layer?._latlng.lng) / 1000
                        ).toFixed(0);
                    }
                    res.push(m);
                });
            } else if (wpts && wpts.length > 0) {
                wpts.forEach((w) => {
                    if (w.latlng) {
                        w.locDist = (
                            getDistance(location.lat, location.lng, w.latlng.lat, w.latlng.lng) / 1000
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
            favorites.wpts = addLocDist({ location: currentLoc, wpts: favorites.wpts });
            Object.keys(favorites).forEach((t) => {
                newFavoriteFiles[group.name][`${t}`] = favorites[t];
            });
            return newFavoriteFiles;
        }
    }

    useEffect(() => {
        if (folder) {
            setGroup({ ...folder });
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
                items.push(<FavoriteItem key={marker + index} marker={marker} group={group} currentLoc={currentLoc} />);
            });
        return items;
    }, [markers, sortFiles, ctx.favorites]);

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
