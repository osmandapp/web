import { useMap } from 'react-leaflet';
import { useContext, useEffect, useRef } from 'react';
import AppContext from '../../context/AppContext';
import L from 'leaflet';

export default function HeightmapLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();
    const tileLayerRef = useRef(null);

    useEffect(() => {
        if (!map) return;
        if (tileLayerRef.current) {
            map.removeLayer(tileLayerRef.current);
        }

        if (ctx.heightmap) {
            tileLayerRef.current = L.tileLayer(ctx.heightmap.url, {
                minZoom: 1,
                maxNativeZoom: 20,
                maxZoom: 20,
                tileSize: ctx.heightmap.tileSize,
            });
            tileLayerRef.current.addTo(map);
        }

        return () => {
            if (tileLayerRef.current) {
                map.removeLayer(tileLayerRef.current);
                tileLayerRef.current = null;
            }
        };
    }, [ctx.heightmap, map]);
}
