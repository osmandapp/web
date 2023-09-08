import React, { useContext, useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import AppContext from '../../../context/AppContext';
import { addDistanceToPoints, getTrackPoints } from '../../../context/TracksManager';
import RoadAttributesGraph from './RoadAttributesGraph';

export default function RoadAttributesGraphProvider({ width }) {
    const ctx = useContext(AppContext);

    const [roadPoints, setRoadPoints] = useState(null);

    useEffect(() => {
        if (ctx.selectedGpxFile && ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK) {
            let points = _.cloneDeep(getTrackPoints(ctx.selectedGpxFile));
            if (points[0].segment) {
                setRoadPoints(points);
            }
        } else {
            setRoadPoints(null);
        }
    }, [ctx.selectedGpxFile]);

    const data = useMemo(() => {
        if (roadPoints) {
            addDistanceToPoints(roadPoints);
            let segments = [];
            const routeTypes = roadPoints[0].segment.routeTypes;
            roadPoints.forEach((p) => {
                if (p.segment && p.segment.ext.types) {
                    let seg = p;
                    seg.ind = _.indexOf(roadPoints, p);
                    seg['highway'] = 'unknown';
                    seg['surface'] = 'unknown';
                    p.segment.ext.types.split(',').forEach((t) => {
                        const type = routeTypes[t];
                        if (type.tag === 'highway') {
                            seg['highway'] = type.value;
                        }
                        if (type.tag === 'surface') {
                            seg['surface'] = type.value;
                        }
                    });
                    segments.push(seg);
                }
            });
            return generateDataSets(segments);
        }
    }, [roadPoints]);

    function generatePastelColor() {
        let R = Math.floor(Math.random() * 127 + 127);
        let G = Math.floor(Math.random() * 127 + 127);
        let B = Math.floor(Math.random() * 127 + 127);

        let rgb = (R << 16) + (G << 8) + B;
        return `#${rgb.toString(16)}`;
    }

    function generateDataSets(data) {
        let types = [];
        let surfaces = [];
        let typesColors = {};
        let surfacesColors = {};
        data.forEach((seg) => {
            addDataSet(types, seg, 'highway', typesColors);
            addDataSet(types, seg, 'route', typesColors);
            addDataSet(types, seg, 'railway', typesColors);
            addDataSet(types, seg, 'aeroway', typesColors);
            addDataSet(types, seg, 'aerialway', typesColors);
            addDataSet(types, seg, 'piste:type', typesColors);
            addDataSet(surfaces, seg, 'surface', surfacesColors);
        });
        return {
            types: {
                datasets: types,
                legend: typesColors,
            },
            surfaces: {
                datasets: surfaces,
                legend: surfacesColors,
            },
        };
    }

    function addDataSet(arr, seg, tag, colors) {
        let res = createDataSet(seg, tag, colors);
        if (res) {
            arr.push(res);
        }
    }

    function createDataSet(seg, tagName, colors) {
        const label = seg[tagName];
        if (label) {
            const currentColor = getColor(label, colors);
            colors[label] = currentColor;
            return {
                label: label,
                type: 'bar',
                backgroundColor: currentColor,
                borderWidth: -1,
                data: [Number((Math.round(seg.distanceTotal) / 1000).toFixed(1))],
                barPercentage: 1.0,
                categoryPercentage: 1.0,
            };
        }
    }

    function getColor(label, colors) {
        let newColor;
        if (colors[label]) {
            newColor = colors[label];
        } else {
            newColor = generatePastelColor();
            while (Object.values(colors).includes(newColor)) {
                newColor = generatePastelColor();
            }
        }
        return newColor;
    }

    return (
        <>
            {roadPoints && data && (
                <div>
                    {data.types && <RoadAttributesGraph name={'Waytypes'} data={data.types} width={width} />}
                    {data.surfaces && <RoadAttributesGraph name={'Surfaces'} data={data.surfaces} width={width} />}
                </div>
            )}
        </>
    );
}
