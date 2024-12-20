import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '@mui/material';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import GroupHeader from '../actions/GroupHeader';
import Empty from '../errors/Empty';
import FavoritesManager, { addLocDist, getFavMenuListByLayers } from '../../manager/FavoritesManager';
import FavoriteItem from './FavoriteItem';
import Loading from '../errors/Loading';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import { doSort } from '../actions/SortActions';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';
import { getCenterMapLoc } from '../../manager/MapManager';
import { FixedSizeList } from 'react-window';

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
            markerList = getFavMenuListByLayers(layers, ctx.favorites.mapObjs[group.name].wpts, currentLoc);
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

    useEffect(() => {
        if (folder) {
            setGroup({ ...folder });
        }
    }, [folder]);

    const favItems = useMemo(() => {
        if (markers?.length > 0) {
            let sortMarkers = [];

            if (sortFiles?.length > 0) {
                sortMarkers = isWpts(sortFiles) ? getMarkersBySortFiles(sortFiles, markers) : sortFiles;
            }

            const visibleMarkers = sortMarkers.length > 0 ? sortMarkers : markers;

            return (
                <FixedSizeList
                    height={height - 120}
                    itemCount={visibleMarkers.length}
                    itemSize={80}
                    width={ctx.infoBlockWidth}
                >
                    {({ index, style }) => (
                        <div style={style}>
                            <FavoriteItem
                                key={visibleMarkers[index].title + index}
                                marker={visibleMarkers[index]}
                                group={group}
                                currentLoc={currentLoc}
                            />
                        </div>
                    )}
                </FixedSizeList>
            );
        }

        return null;
    }, [markers, sortFiles, ctx.favorites, height]);

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
                    ) : favItems ? (
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
