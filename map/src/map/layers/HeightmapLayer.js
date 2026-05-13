import { useMap } from 'react-leaflet';
import { useContext, useEffect, useRef, useState } from 'react';
import MapContext from '../../context/MapContext';
import L from 'leaflet';
import { NO_HEIGHTMAP } from '../../menu/configuremap/TerrainConfig';
import { INIT_LOGIN_STATE } from '../../manager/LoginManager';
import LoginContext from '../../context/LoginContext';

export default function HeightmapLayer() {
    const mtx = useContext(MapContext);
    const ltx = useContext(LoginContext);

    const map = useMap();

    const [loadingTiles, setLoadingTiles] = useState(false);

    const tileLayerRef = useRef(null);

    useEffect(() => {
        if (!map || !ltx.loginUser || ltx.loginUser === INIT_LOGIN_STATE) return;

        if (mtx.heightmap === NO_HEIGHTMAP.key) {
            if (tileLayerRef.current) {
                map.removeLayer(tileLayerRef.current);
                tileLayerRef.current = null;
            }
            return;
        }

        // update opacity
        if (tileLayerRef.current?._url === mtx.heightmap?.url && mtx.heightmap?.opacity) {
            tileLayerRef.current.setOpacity(mtx.heightmap.opacity);
            return;
        } else {
            // remove old layer
            if (tileLayerRef.current) {
                map.removeLayer(tileLayerRef.current);
            }
        }

        if (mtx.heightmap) {
            tileLayerRef.current = L.tileLayer(mtx.heightmap.url, {
                minZoom: 5,
                maxNativeZoom: 15,
                maxZoom: 18,
                tileSize: 256,
            });

            tileLayerRef.current.setOpacity(mtx.heightmap.opacity);

            tileLayerRef.current.on('loading', () => {
                setLoadingTiles(true);
            });

            tileLayerRef.current.on('load', () => {
                setLoadingTiles(false);
            });

            tileLayerRef.current.on('tileerror', () => {
                setLoadingTiles(false);
            });

            tileLayerRef.current.addTo(map);
        }

        return () => {
            if (tileLayerRef.current) {
                tileLayerRef.current.off('loading');
                tileLayerRef.current.off('load');
                tileLayerRef.current.off('tileerror');
            }
        };
    }, [mtx.heightmap, ltx.loginUser]);

    useEffect(() => {
        mtx.setProcessHeightmaps(loadingTiles);
    }, [loadingTiles]);
}
