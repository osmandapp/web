import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '@mui/material';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import GroupHeader from '../actions/GroupHeader';
import Empty from '../errors/Empty';
import FavoritesManager from '../../manager/FavoritesManager';
import FavoriteItem from './FavoriteItem';
import { getDistance } from '../../util/Utils';
import Loading from '../errors/Loading';
import { isEmpty } from 'lodash';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import { doSort } from '../actions/SortActions';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';
import { changeIconSizeWpt, removeShadowFromIconWpt } from '../../map/markers/MarkerOptions';
import { getCenterMapLoc } from '../../manager/MapManager';

export default function FavoriteGroupFolder({ folder }) {
    const ctx = useContext(AppContext);

    const [group, setGroup] = useState(folder);
    const [sortFiles, setSortFiles] = useState([]);
    const [, height] = useWindowSize();
    const [markers, setMarkers] = useState([]);
    const currentLoc = useGeoLocation(ctx);
    const debouncerTimer = useRef(0);

    const refMarkers = useRef(null);

    const hash = window.location.hash;
    const [delayedHash, setDelayedHash] = useState(hash);

    // debounce map move/scroll
    useEffect(() => {
        debouncerTimer.current > 0 && clearTimeout(debouncerTimer.current);
        debouncerTimer.current = setTimeout(() => {
            debouncerTimer.current = 0;
            setDelayedHash(hash);
        }, 5000);

        return () => {
            clearTimeout(debouncerTimer.current);
        };
    }, [hash]);

    // get markers
    useEffect(() => {
        let markerList = [];
        if (ctx.favorites.mapObjs[group.name]?.markers) {
            let layers = ctx.favorites.mapObjs[group.name].markers._layers;
            Object.values(layers).forEach((value) => {
                let marker = {
                    title: value.options.title,
                    icon: changeIconSizeWpt(removeShadowFromIconWpt(value.options.icon.options.html), 18, 30),
                    layer: value,
                };
                markerList.push(marker);
            });
        }
        markerList = addLocDist({ location: currentLoc, markers: markerList });

        if (ctx.selectedSort?.favorites && ctx.selectedSort.favorites[group.name]) {
            doSort({
                method: ctx.selectedSort.favorites[group.name],
                setSortFiles,
                markers: markerList,
                files: ctx.favorites.mapObjs[group.name]?.wpts,
                favoriteGroup: group,
            });
        }
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
            const updatedMarkers = addLocDist({ location: getCenterMapLoc(hash), markers: refMarkers.current });
            setMarkers(updatedMarkers);
        }
    }, [currentLoc, delayedHash, refMarkers.current]);

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

    useEffect(() => {
        if (folder) {
            setGroup({ ...folder });
        }
    }, [folder]);

    const favItems = useMemo(() => {
        const items = [];
        let sortMarkers = [];
        if (sortFiles?.length > 0) {
            sortMarkers = isWpts(sortFiles) ? getMarkersBySortFiles(sortFiles, markers) : sortFiles;
        }
        markers?.length > 0 &&
            (sortMarkers?.length > 0 ? sortMarkers : markers).map((marker, index) => {
                items.push(<FavoriteItem key={marker + index} marker={marker} group={group} currentLoc={currentLoc} />);
            });
        return items;
    }, [markers, sortFiles, ctx.favorites]);

    function isWpts(files) {
        return files?.length > 0 && !files[0].layer;
    }

    function getMarkersBySortFiles(wpts, markers) {
        let arr = [];
        for (const wpt of wpts) {
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
            <Box
                id={'se-opened-fav-group-' + group.name}
                minWidth={ctx.infoBlockWidth}
                maxWidth={ctx.infoBlockWidth}
                sx={{ overflow: 'hidden' }}
            >
                <GroupHeader type="favorites" favoriteGroup={group} setSortFiles={setSortFiles} markers={markers} />
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
                    title={"You don't have favorite files"}
                    text={'You can import or create favorite files using OsmAnd App.'}
                    menu={OBJECT_TYPE_FAVORITE}
                />
            )}
        </>
    );
}
