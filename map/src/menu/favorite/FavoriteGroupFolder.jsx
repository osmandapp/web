import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '@mui/material';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import GroupHeader from '../actions/GroupHeader';
import Empty from '../errors/Empty';
import FavoritesManager, {
    addLocDist,
    DEFAULT_FAV_GROUP_NAME,
    getFavMenuListByLayers,
} from '../../manager/FavoritesManager';
import FavoriteItem from './FavoriteItem';
import Loading from '../errors/Loading';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import { byTime, doSort } from '../actions/SortActions';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';
import { getCenterMapLoc } from '../../manager/MapManager';
import { FixedSizeList } from 'react-window';
import FavoriteGroup from './FavoriteGroup';

export default function FavoriteGroupFolder({ folder, smartf = null }) {
    const ctx = useContext(AppContext);

    const [group, setGroup] = useState(folder);
    const [sortFiles, setSortFiles] = useState([]);
    const [sortGroups, setSortGroups] = useState([]);
    const [enableGroups, setEnableGroups] = useState([]);
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
        if (!group) {
            return;
        }
        let markerList = [];
        if (ctx.favorites.mapObjs[group.id]?.markers) {
            let layers = ctx.favorites.mapObjs[group.id].markers._layers;
            markerList = getFavMenuListByLayers(layers, ctx.favorites.mapObjs[group.id].wpts, currentLoc);
        }
        markerList = addLocDist({ location: currentLoc, markers: markerList });
        if (ctx.selectedSort?.favorites && ctx.selectedSort.favorites[group.id]) {
            doSort({
                method: ctx.selectedSort.favorites[group.id],
                setSortFiles,
                markers: markerList,
                files: ctx.favorites.mapObjs[group.id]?.wpts,
                favoriteGroup: group,
            });
        }
        setMarkers([...markerList]);
        refMarkers.current = markerList;
    }, [group, ctx.favorites]);

    const groupItems = useMemo(() => {
        const items = [];
        let groups = null;
        if (sortGroups && sortGroups.length > 0) {
            groups = sortGroups;
        } else if (smartf?.files?.length > 0) {
            groups = byTime(smartf.files, true, true);
        }
        if (groups) {
            groups.map((g, index) => {
                items.push(
                    <FavoriteGroup
                        key={g + index}
                        index={index}
                        group={g}
                        enableGroups={enableGroups}
                        setEnableGroups={setEnableGroups}
                        smartf={smartf}
                    />
                );
            });
        }
        return items;
    }, [smartf, sortGroups, ctx.openGroups]);

    useEffect(() => {
        if (currentLoc && currentLoc !== LOCATION_UNAVAILABLE) {
            // update markers location
            if (refMarkers.current.length > 0) {
                const updatedMarkers = addLocDist({ location: currentLoc, markers: refMarkers.current });
                setMarkers(updatedMarkers);
            }
        } else if (currentLoc && currentLoc === LOCATION_UNAVAILABLE && refMarkers.current?.length > 0) {
            const updatedMarkers = addLocDist({ location: getCenterMapLoc(hash), markers: refMarkers.current });
            setMarkers(updatedMarkers);
        }
    }, [currentLoc, refMarkers.current]);

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
                    itemSize={70}
                    width={ctx.infoBlockWidth}
                >
                    {({ index, style }) => (
                        <div style={style}>
                            <FavoriteItem
                                key={visibleMarkers[index].name + index}
                                marker={visibleMarkers[index]}
                                group={group}
                                currentLoc={currentLoc}
                                smartf={smartf}
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
            const marker = markers.find((m) => m.name === wpt.name);
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
                id={'se-opened-fav-group-' + group?.name}
                minWidth={ctx.infoBlockWidth}
                maxWidth={ctx.infoBlockWidth}
                sx={{ overflow: 'hidden' }}
            >
                {smartf && !folder ? (
                    <GroupHeader
                        type="favorites"
                        smartf={smartf}
                        favoriteGroup={DEFAULT_FAV_GROUP_NAME}
                        setSortGroups={setSortGroups}
                    />
                ) : (
                    <GroupHeader
                        smartf={smartf}
                        type="favorites"
                        favoriteGroup={group}
                        setSortFiles={setSortFiles}
                        markers={markers}
                    />
                )}
                <Box
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ overflowX: 'hidden', overflowY: 'auto !important', maxHeight: `${height - 120}px` }}
                >
                    {groupItems}
                    {folder &&
                        (FavoritesManager.getGroupSize(folder) === 0 ? (
                            <Empty
                                title={'Empty group'}
                                text={"This group doesn't have any wpt yet. You can add them using map."}
                                menu={OBJECT_TYPE_FAVORITE}
                            />
                        ) : favItems ? (
                            favItems
                        ) : (
                            <Loading />
                        ))}
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
