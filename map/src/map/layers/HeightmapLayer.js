import { useMap } from 'react-leaflet';
import { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import L from 'leaflet';

export default function HeightmapLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [loadingTiles, setLoadingTiles] = useState(false);

    const tileLayerRef = useRef(null);

    useEffect(() => {
        if (!map) return;
        if (tileLayerRef.current) {
            map.removeLayer(tileLayerRef.current);
        }

        if (ctx.heightmap === 'none') {
            return;
        }

        if (ctx.heightmap) {
            tileLayerRef.current = L.tileLayer(ctx.heightmap.url, {
                minZoom: 5,
                maxNativeZoom: 15,
                maxZoom: 18,
                tileSize: 256,
                capacity: ctx.heightmap.capacity,
            });

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
                map.removeLayer(tileLayerRef.current);
                tileLayerRef.current = null;
            }
        };
    }, [ctx.heightmap, map]);

    useEffect(() => {
        ctx.setProcessHeightmaps(loadingTiles);
    }, [loadingTiles, ctx]);
}
