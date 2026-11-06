import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '@mui/material';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { useElementHeight } from '../../util/hooks/useElementHeight';
import { HEADER_SIZE } from '../../manager/GlobalManager';
import gStyles from '../gstylesmenu.module.css';
import GroupHeader from '../actions/GroupHeader';
import Empty from '../errors/Empty';
import FavoritesManager, {
    DEFAULT_FAV_GROUP_NAME,
    getFavMenuListByLayers,
    addLocDist,
    LOCATION_UNAVAILABLE,
} from '../../manager/FavoritesManager';
import FavoriteItem from './FavoriteItem';
import Loading from '../errors/Loading';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import { byTime, doSort, getSelectedSort, isNearestSort, NEAREST_MAP_CENTER_SORT } from '../actions/SortActions';
import { getMapCenter } from '../../map/layers/MapStateLayer';
import { FixedSizeList } from 'react-window';
import FavoriteGroup from './FavoriteGroup';
import { useLocation } from 'react-router-dom';
import { useFocusMode } from '../../util/hooks/map/useFocusMode';

const FAV_ITEM_HEIGHT = 70;

export default function FavoriteGroupFolder({ folder, smartf = null, onClose = null }) {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const location = useLocation();
    const { setSelectionFocus, clearSelectionFocus } = useFocusMode();

    const [group, setGroup] = useState(folder);
    const [sortFiles, setSortFiles] = useState([]);
    const [sortGroups, setSortGroups] = useState([]);
    const [enableGroups, setEnableGroups] = useState([]);
    const [, height] = useWindowSize();
    const [listContainerRef, listHeight] = useElementHeight();
    const [markers, setMarkers] = useState([]);
    const [sortOnMenuClose, setSortOnMenuClose] = useState(false);
    const currentLoc = useGeoLocation(ctx);

    const refMarkers = useRef(null);

    const isSharedWithMeBaseFolder = smartf && !folder;

    const hash = location.hash;

    const sortMethod = getSelectedSort({ favoriteGroup: group, ctx });
    const useMapCenter = sortMethod === NEAREST_MAP_CENTER_SORT || currentLoc === LOCATION_UNAVAILABLE;
    const mapCenter = useMapCenter ? getMapCenter(mtx, hash) : null;
    const distanceFrom = useMapCenter ? 'mapCenter' : currentLoc ? 'location' : null;

    // get markers
    useEffect(() => {
        if (!group) {
            return;
        }
        let markerList = [];
        if (ctx.favorites.mapObjs[group.id]?.markers) {
            let layers = ctx.favorites.mapObjs[group.id].markers._layers;
            markerList = getFavMenuListByLayers({
                layers,
                wpts: ctx.favorites.mapObjs[group.id].wpts,
                location: getDistanceLocation(),
                pointsGroups: ctx.favorites.mapObjs[group.id].pointsGroups,
            });
        }
        if (sortMethod && !isNearestSort(sortMethod)) {
            sortFavorites();
        }
        setMarkers([...markerList]);
        refMarkers.current = markerList;
    }, [group, ctx.favorites]);

    const groupItems = useMemo(() => {
        const items = [];
        let groups = null;
        if (sortGroups && sortGroups.length > 0) {
            groups = sortGroups;
        } else if (isSharedWithMeBaseFolder && smartf.files?.length > 0) {
            groups = byTime(smartf.files, true, true);
        }
        if (groups) {
            groups.forEach((g, index) => {
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
    }, [smartf, sortGroups]);

    useEffect(() => {
        if (!isSharedWithMeBaseFolder) return;
        const method = getSelectedSort({ favoriteGroup: DEFAULT_FAV_GROUP_NAME, smartf, ctx });
        if (method) {
            doSort({ method, setSortGroups, groups: smartf.files, favoriteGroup: DEFAULT_FAV_GROUP_NAME });
        }
    }, [smartf, ctx.selectedSort?.favorites]);

    useEffect(() => {
        if (ctx.openedPopper) return;
        const loc = getDistanceLocation();
        if (loc && refMarkers.current?.length > 0) {
            // update markers location
            setMarkers(addLocDist({ location: loc, markers: refMarkers.current }));
        }
    }, [currentLoc?.lat, currentLoc?.lng, useMapCenter, mapCenter?.lat, mapCenter?.lng, ctx.openedPopper]);

    // Kept on map move on purpose; picking the option again re-sorts
    useEffect(() => {
        if (!isNearestSort(sortMethod)) return;
        if (ctx.openedPopper) {
            setSortOnMenuClose(true);
            return;
        }
        sortFavorites();
    }, [ctx.selectedSort?.favorites, group, ctx.favorites, distanceFrom]);

    useEffect(() => {
        if (ctx.openedPopper || !sortOnMenuClose) {
            return;
        }
        setSortOnMenuClose(false);
        if (isNearestSort(sortMethod)) {
            sortFavorites();
        }
    }, [ctx.openedPopper]);

    useEffect(() => {
        if (folder) {
            setGroup({ ...folder });
        }
    }, [folder]);

    useEffect(() => {
        if (folder?.id != null) {
            setSelectionFocus({ type: OBJECT_TYPE_FAVORITE, id: folder.id });
        }

        return () => clearSelectionFocus();
    }, [folder?.id]);

    const favItems = useMemo(() => {
        if (markers?.length > 0) {
            let sortMarkers = [];

            if (sortFiles?.length > 0) {
                sortMarkers = getMarkersBySortFiles(sortFiles, markers);
            }

            const visibleMarkers = sortMarkers.length > 0 ? sortMarkers : markers;

            return (
                <FixedSizeList
                    height={Math.max(1, Math.min(visibleMarkers.length * FAV_ITEM_HEIGHT, listHeight))}
                    itemCount={visibleMarkers.length}
                    itemSize={FAV_ITEM_HEIGHT}
                    width={ctx.infoBlockWidth}
                >
                    {({ index, style }) => (
                        <div style={style}>
                            <FavoriteItem
                                insideVirtualizedList
                                key={index}
                                marker={visibleMarkers[index]}
                                group={group}
                                isUserLocation={!useMapCenter}
                                smartf={smartf}
                            />
                        </div>
                    )}
                </FixedSizeList>
            );
        }

        return null;
    }, [markers, sortFiles, ctx.favorites, listHeight, useMapCenter]);

    function getDistanceLocation() {
        return useMapCenter ? mapCenter : currentLoc;
    }

    function sortFavorites() {
        const isNearest = isNearestSort(sortMethod);
        const loc = getDistanceLocation();
        if (isNearest && !loc) {
            return;
        }
        const { files } = doSort({
            method: sortMethod,
            markers: isNearest ? addLocDist({ location: loc, markers: refMarkers.current }) : null,
            files: ctx.favorites.mapObjs[group.id]?.wpts,
            favoriteGroup: group,
        });
        setSortFiles((isNearest ? files?.map((m) => m.point) : files) ?? []);
    }

    function getMarkersBySortFiles(wpts, markers) {
        let arr = [];
        for (const wpt of wpts) {
            const marker = markers.find((m) => m.point === wpt);
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
                className={gStyles.fixedColumn}
                minWidth={ctx.infoBlockWidth}
                maxWidth={ctx.infoBlockWidth}
                style={{ height: `${height - HEADER_SIZE}px` }}
            >
                {isSharedWithMeBaseFolder ? (
                    <GroupHeader
                        type="favorites"
                        smartf={smartf}
                        favoriteGroup={DEFAULT_FAV_GROUP_NAME}
                        setSortGroups={setSortGroups}
                        onClose={onClose}
                    />
                ) : (
                    <GroupHeader smartf={smartf} type="favorites" favoriteGroup={group} setSortFiles={setSortFiles} />
                )}
                <Box
                    ref={listContainerRef}
                    className={gStyles.scrollActiveBlock}
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                >
                    {groupItems}
                    {folder &&
                        (FavoritesManager.getGroupSize(folder) === 0 ? (
                            <Empty
                                title={'Empty group'}
                                text={"This group doesn't have any wpt yet. You can add them using map."}
                            />
                        ) : (
                            favItems || <Loading />
                        ))}
                </Box>
            </Box>
            {ctx.favorites?.groups?.length === 0 && (
                <Empty
                    title={"You don't have favorite files"}
                    text={'You can import or create favorite files using OsmAnd App.'}
                />
            )}
        </>
    );
}
