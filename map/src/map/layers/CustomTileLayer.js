import { useMap } from 'react-leaflet';
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import L from 'leaflet';
import MapContext from '../../context/MapContext';
import { isMvtTileURL } from './MvtLayerConfig';

const CustomTileLayer = forwardRef((props, ref) => {
    const map = useMap();
    const mtx = useContext(MapContext);

    const rasterTileLayerRef = useRef(null);

    useImperativeHandle(ref, () => ({
        getLeafletLayer: () => rasterTileLayerRef.current,
    }));

    useEffect(() => {
        if (isMvtTileURL(mtx.tileURL)) {
            if (rasterTileLayerRef.current && map.hasLayer(rasterTileLayerRef.current)) {
                map.removeLayer(rasterTileLayerRef.current);
            }
            return;
        }

        if (!rasterTileLayerRef.current) {
            rasterTileLayerRef.current = L.tileLayer(mtx.tileURL.url, props).addTo(map);
        } else {
            rasterTileLayerRef.current.setUrl(mtx.tileURL.url);
            if (!map.hasLayer(rasterTileLayerRef.current)) {
                rasterTileLayerRef.current.addTo(map);
            }
        }
    }, [mtx.tileURL.url, props]);

    useEffect(() => {
        return () => {
            if (rasterTileLayerRef.current && map.hasLayer(rasterTileLayerRef.current)) {
                map.removeLayer(rasterTileLayerRef.current);
            }
        };
    }, []);
});

CustomTileLayer.displayName = 'CustomTileLayer';
export default CustomTileLayer;
