import { useContext, useEffect, useState } from 'react';
import AppContext, { OBJECT_TYPE_SHARE_FILE } from '../../context/AppContext';
import { addTrackToMap } from './CloudTrackLayer';
import { useMap } from 'react-leaflet';
import { FAVOURITES, GPX, SHARE_FILE_MAIN_URL } from '../../manager/GlobalManager';
import TrackLayerProvider from '../util/TrackLayerProvider';
import { addClusteredMarkersToMap, clusterMarkers } from '../util/Clusterizer';
import { DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import { filterPointsInBounds } from './FavoriteLayer';
import useHashParams from '../../util/hooks/useHashParams';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { addShareFavoriteToMap } from '../../manager/FavoritesManager';
import { useRecentDataSaver } from '../../util/hooks/menu/useRecentDataSaver';

export default function ShareFileLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const { lat } = useHashParams();
    const [move, setMove] = useState(false);
    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);

    useZoomMoveMapHandlers(map, setZoom, setMove);
    const recentSaver = useRecentDataSaver();

    const [currentShareFile, setCurrentShareFile] = useState(null);

    // only for share file from url
    useEffect(() => {
        if (ctx.currentObjectType === OBJECT_TYPE_SHARE_FILE && location.pathname.includes(SHARE_FILE_MAIN_URL)) {
            if (ctx.selectedGpxFile?.type === GPX) {
                const layer = addTrackToMap({ ctx, file: ctx.selectedGpxFile, map, fit: true, recentSaver });
                if (layer) {
                    setCurrentShareFile(layer);
                }
            } else if (ctx.selectedGpxFile?.type === FAVOURITES) {
                if (ctx.selectedGpxFile && !ctx.selectedGpxFile.markerCurrent && !currentShareFile) {
                    // add layers to map by track data first time
                    const markers = TrackLayerProvider.createLayersByTrackData({
                        data: ctx.selectedGpxFile,
                        ctx,
                        map,
                        type: OBJECT_TYPE_SHARE_FILE,
                    });
                    if (markers) {
                        const layers = addMarkersToMap(markers, ctx.selectedGpxFile);
                        setCurrentShareFile(layers);
                        ctx.setShareFileMarkers(markers);
                    }
                }
            }
        } else {
            if (currentShareFile) {
                map.removeLayer(currentShareFile);
                setCurrentShareFile(null);
            }
        }
    }, [ctx.currentObjectType, ctx.selectedGpxFile]);

    useEffect(() => {
        if (currentShareFile && ctx.shareFileMarkers) {
            map.removeLayer(currentShareFile);
            const newLayer = addMarkersToMap(ctx.shareFileMarkers, ctx.selectedGpxFile);
            setCurrentShareFile(newLayer);
            if (move) {
                setMove(false);
            }
        }
    }, [zoom, move]);

    function addMarkersToMap(markers, file) {
        const mapBounds = map.getBounds();

        const { mainMarkers, secondaryMarkers } = clusterMarkers({
            places: filterPointsInBounds(file.wpts, map),
            zoom,
            latitude: lat,
            iconSize: DEFAULT_ICON_SIZE,
            isFavorites: true,
        });

        return addClusteredMarkersToMap({
            map,
            markers,
            mainMarkers,
            secondaryMarkers,
            ctx,
            mapBounds,
            onClick,
        });
    }

    const onClick = (e) => {
        const marker = {
            name: e.sourceTarget.options.name,
            icon: e.sourceTarget.options.icon.options.html,
            layer: e.sourceTarget,
        };
        addShareFavoriteToMap(marker, ctx);
    };
}
