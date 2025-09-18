import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_TRACK_ANALYZER } from '../../context/AppContext';
import { Marker, GeoJSON, useMap } from 'react-leaflet';
import MarkerOptions from '../markers/MarkerOptions';
import { LatLng } from 'leaflet';
import { getDistance } from '../../util/Utils';
import isEmpty from 'lodash-es/isEmpty';
import { TYPE_ANALYZER } from '../../frame/components/graph/GlobalGraph';

const DEFAULT_SEGMENT_COLOR = '#227bff';

export default function TrackAnalyzerLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

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
        const handleMouseMove = (e) => {
            const mousePosition = e.latlng;
            if (
                mousePosition &&
                !isEmpty(geoJsonRef?.current?.getBounds()) &&
                geoJsonRef.current.getBounds().contains(mousePosition)
            ) {
                return;
            }

            if (ctx.mapMarkerListener) {
                ctx.mapMarkerListener(null);
            }
        };

        map.on('mousemove', handleMouseMove);

        return () => {
            map.off('mousemove', handleMouseMove);
        };
    }, [geoJsonRef]);

    useEffect(() => {
        if (ctx.trackAnalyzer?.segments) {
            const segmentsMap = ctx.trackAnalyzer.segments;
            const geoJsonFeatures = Object.keys(segmentsMap).flatMap((key) => {
                const segments = segmentsMap[key];
                if (!segments) {
                    return [];
                }
                return segments
                    .filter((segment) => !ctx.excludedSegments.has(`${segment.name} ${segment.trackInd}`))
                    .map((segment) => ({
                        type: 'Feature',
                        properties: {
                            color: segment.color || DEFAULT_SEGMENT_COLOR,
                            name: segment.name,
                            points: segment.points,
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
        } else if (geoJsonRef?.current) {
            geoJsonRef.current.clearLayers();
        }
    }, [ctx.trackAnalyzer?.segmentsUpdateDate, ctx.excludedSegments]);

    useEffect(() => {
        if (!ctx.trackAnalyzer && (startPoint || finishPoint)) {
            clearLayersFromMap();
        }
    }, [ctx.trackAnalyzer]);

    // close track analyzer
    useEffect(() => {
        if (!ctx.trackAnalyzer) return;

        // hide layers when switching to another menu
        if (ctx.currentObjectType !== OBJECT_TRACK_ANALYZER) {
            clearLayersFromMap();
            ctx.setGlobalGraph((prev) => {
                return {
                    ...prev,
                    show: false,
                    type: null,
                };
            });
        } else {
            // reopen current track analyzer
            ctx.setTrackAnalyzer((prev) => {
                return {
                    ...prev,
                    segmentsUpdateDate: new Date().getMilliseconds(),
                };
            });
            ctx.setGlobalGraph((prev) => {
                return {
                    ...prev,
                    show: true,
                    type: TYPE_ANALYZER,
                };
            });
        }
    }, [ctx.currentObjectType]);

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

    function clearLayersFromMap() {
        setStartPoint(null);
        setFinishPoint(null);
        if (geoJsonRef.current) {
            geoJsonRef.current.clearLayers();
        }
    }

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

        layer.on('mousemove', (e) => {
            const nearestPoint = findNearestPoint(e.latlng, feature.properties.points);
            if (nearestPoint && nearestPoint.lat && nearestPoint.lon) {
                ctx.mapMarkerListener(nearestPoint.lat, nearestPoint.lon);
            }
        });
    };

    const findNearestPoint = (mouseLatLng, points) => {
        let minDist = Infinity;
        let nearestPoint = null;

        for (const point of points) {
            if (!point.lat || !point.lon) {
                continue;
            }
            if (point.lat === mouseLatLng.lat && point.lon === mouseLatLng.lng) {
                return point;
            }
            const dist = getDistance(mouseLatLng.lat, mouseLatLng.lng, point.lat, point.lon);
            if (dist < minDist) {
                minDist = dist;
                nearestPoint = point;
            }
        }
        return nearestPoint;
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
