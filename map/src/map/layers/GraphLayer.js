import { useContext, useEffect, useState } from 'react';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import TracksManager from '../../context/TracksManager';

export default function GraphLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [trackRangeLine, setTrackRangeLine] = useState(null);

    useEffect(() => {
        if (ctx.trackRange) {
            let trackPoints = ctx.selectedGpxFile.points
                ? ctx.selectedGpxFile.points
                : TracksManager.getTrackPoints(ctx.selectedGpxFile);
            let points = [];
            if (ctx.selectedGpxFile.hasGeo) {
                trackPoints.forEach((p) => {
                    points = points.concat(p.geometry);
                });
            } else {
                points = trackPoints;
            }
            let selectedPoints = points.slice(ctx.trackRange[0], ctx.trackRange[1]);
            let polyline = new L.Polyline(selectedPoints, {
                color: '#ffc939',
                weight: 5,
            });
            if (trackRangeLine) {
                trackRangeLine.setLatLngs(polyline._latlngs);
            } else {
                setTrackRangeLine(polyline);
                polyline.addTo(map);
            }
        } else {
            removeTrackRangeLine();
        }
    }, [ctx.trackRange]);

    useEffect(() => {
        if (ctx.selectedGpxFile.layers) {
            checkShowPoints(ctx.showPoints.points, false);
            checkShowPoints(ctx.showPoints.wpts, true);
        }
    }, [ctx.showPoints.points, ctx.showPoints.wpts]);

    function checkShowPoints(showPoints, isWpts) {
        if (!showPoints) {
            ctx.selectedGpxFile.layers.getLayers().forEach((l) => {
                if (l instanceof L.Marker && checkWpts(isWpts, l)) {
                    l._icon.style.display = 'none';
                }
            });
        } else {
            ctx.selectedGpxFile.layers.getLayers().forEach((l) => {
                if (l instanceof L.Marker && checkWpts(isWpts, l)) {
                    l._icon.style.display = null;
                }
            });
        }
    }

    function checkWpts(isWpts, layer) {
        return isWpts ? layer.options.wpt : !layer.options.wpt;
    }

    function removeTrackRangeLine() {
        if (trackRangeLine) {
            if (map.hasLayer(trackRangeLine)) {
                map.removeLayer(trackRangeLine);
            }
            setTrackRangeLine(null);
        }
    }
}
