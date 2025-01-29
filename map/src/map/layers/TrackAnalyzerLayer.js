import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import { Marker, GeoJSON } from 'react-leaflet';
import MarkerOptions from '../markers/MarkerOptions';
import { LatLng } from 'leaflet';

export default function TrackAnalyzerLayer() {
    const ctx = useContext(AppContext);
    const geoJsonRef = useRef(null);

    const [startPoint, setStartPoint] = useState(null);
    const [finishPoint, setFinishPoint] = useState(null);

    // menu -> map
    useEffect(() => {
        if (ctx.trackAnalyzer) {
            if (ctx.trackAnalyzer.start !== startPoint) {
                setStartPoint(ctx.trackAnalyzer.start);
            }
            if (ctx.trackAnalyzer.finish !== finishPoint) {
                setFinishPoint(ctx.trackAnalyzer.finish);
            }
        }
    }, [ctx.trackAnalyzer?.start, ctx.trackAnalyzer?.finish]);

    useEffect(() => {
        if (ctx.trackAnalyzer?.segments) {
            const segmentsMap = ctx.trackAnalyzer.segments;
            const geoJsonFeatures = Object.keys(segmentsMap).flatMap((key) => {
                const segments = segmentsMap[key];
                return segments.map((segment) => ({
                    type: 'Feature',
                    properties: {
                        color: segment.color || '#227bff',
                        name: segment.name,
                    },
                    geometry: {
                        type: 'LineString',
                        coordinates: segment.points.map((point) => [point.lon, point.lat]),
                    },
                }));
            });
            if (geoJsonRef.current) {
                geoJsonRef.current.clearLayers();
                geoJsonRef.current.addData({
                    type: 'FeatureCollection',
                    features: geoJsonFeatures,
                });
            }
        }
    }, [ctx.trackAnalyzer?.segmentsUpdateDate]);

    // map -> menu
    useEffect(() => {
        if (!ctx.trackAnalyzer) {
            return;
        }

        const newPointA = startPoint && startPoint !== ctx.trackAnalyzer.start;
        const newPointB = finishPoint && finishPoint !== ctx.trackAnalyzer.finish;

        if (newPointA || newPointB) {
            ctx.setTrackAnalyzer({
                ...ctx.trackAnalyzer,
                start: newPointA ? startPoint : ctx.trackAnalyzer.start,
                finish: newPointB ? finishPoint : ctx.trackAnalyzer.finish,
            });
        }
    }, [startPoint, finishPoint]);

    const handleMarkerDragEnd = (e, setPoint) => {
        const { lat, lng } = e.target.getLatLng();
        setPoint(new LatLng(lat, lng));
    };

    const onEachFeature = (feature, layer) => {
        layer.setStyle({
            color: feature.properties.color,
            weight: 10,
            opacity: 0.6,
        });
    };

    return (
        <>
            {startPoint && (
                <Marker
                    key={'start-point'}
                    position={startPoint}
                    icon={MarkerOptions.options.trackAnalyzerPointA}
                    draggable={true}
                    eventHandlers={{
                        dragend: (e) => handleMarkerDragEnd(e, setStartPoint),
                    }}
                />
            )}
            {finishPoint && (
                <Marker
                    key={'finish-point'}
                    position={finishPoint}
                    icon={MarkerOptions.options.trackAnalyzerPointB}
                    draggable={true}
                    eventHandlers={{
                        dragend: (e) => handleMarkerDragEnd(e, setFinishPoint),
                    }}
                />
            )}
            <GeoJSON
                ref={geoJsonRef}
                data={{ type: 'FeatureCollection', features: [] }}
                onEachFeature={onEachFeature}
            />
        </>
    );
}
