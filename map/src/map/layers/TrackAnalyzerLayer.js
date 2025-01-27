import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { Marker } from 'react-leaflet';
import MarkerOptions from '../markers/MarkerOptions';
import { LatLng } from 'leaflet';

export default function TrackAnalyzerLayer() {
    const ctx = useContext(AppContext);

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
    }, [ctx.trackAnalyzer]);

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
        </>
    );
}
