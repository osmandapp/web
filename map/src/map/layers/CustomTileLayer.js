import { useMap } from 'react-leaflet';
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import L from 'leaflet';
import MapContext from '../../context/MapContext';
import { isMvtTileURL } from './MvtLayerConfig';

const RasterTileLayer = L.TileLayer.extend({
    _clampZoom(zoom) {
        // Leaflet's redraw() passes the map zoom without rounding it for the tile grid.
        return L.TileLayer.prototype._clampZoom.call(this, Math.round(zoom));
    },
});

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
            rasterTileLayerRef.current = new RasterTileLayer(mtx.tileURL.url, props).addTo(map);
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
