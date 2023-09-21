import React, { useContext, useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import AppContext from '../../../context/AppContext';
import { addDistanceToPoints, equalsPoints, getAllPoints, getTrackPoints } from '../../../context/TracksManager';
import RoadAttributesGraph from './RoadAttributesGraph';
import roadTypes from '../../../store/road-types.json';
import surfaces from '../../../store/surfaces.json';

export default function RoadAttributesGraphProvider({ width }) {
    const ctx = useContext(AppContext);

    const HIGHWAY = 'highway';
    const SURFACE = 'surface';
    const UNDEFINED_DATA = 'undefined';

    const [roadPoints, setRoadPoints] = useState(null);

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            let points = !_.isEmpty(ctx.selectedGpxFile.points)
                ? getAllPoints(ctx.selectedGpxFile.points)
                : getTrackPoints(ctx.selectedGpxFile);
            if (!_.isEmpty(points) && points[0].segment && !equalsPoints(points, roadPoints)) {
                setRoadPoints(points);
            } else if (_.isEmpty(points) || points[0].segment === undefined) {
                setRoadPoints(null);
            }
        } else {
            setRoadPoints(null);
        }
    }, [ctx.selectedGpxFile]);

    const data = useMemo(() => {
        if (roadPoints) {
            addDistanceToPoints(roadPoints);
            let segments = [];
            let prevSegPoint;
            roadPoints.forEach((p) => {
                if (p.segment && p.segment.ext.types) {
                    const routeTypes = p.segment.routeTypes;
                    let seg = _.cloneDeep(p);
                    seg.ind = _.indexOf(roadPoints, p);
                    seg.distance = prevSegPoint
                        ? roadPoints[seg.ind + Number(seg.segment.ext.length) - 1].distanceTotal - seg.distanceTotal
                        : roadPoints[seg.ind + Number(seg.segment.ext.length) - 1].distanceTotal;
                    seg[HIGHWAY] = UNDEFINED_DATA;
                    seg[SURFACE] = UNDEFINED_DATA;
                    p.segment.ext.types.split(',').forEach((t) => {
                        const type = routeTypes[t];
                        if (type) {
                            if (type.tag === HIGHWAY) {
                                seg[HIGHWAY] = roadTypes[type.value] ? roadTypes[type.value].class : type.value;
                            }
                            if (type.tag === SURFACE) {
                                seg[SURFACE] = type.value;
                            }
                        }
                    });
                    prevSegPoint = seg;
                    segments.push(seg);
                }
            });
            return generateDataSets(segments);
        }
    }, [roadPoints]);

    function generatePastelColor(seed) {
        const R = 127 + (((seed + 1) * 111) % 127);
        const G = 127 + (((seed + 1) * 222) % 127);
        const B = 127 + (((seed + 1) * 333) % 127);
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
            let currentColor;
            if (colors[label]) {
                colors[label].distance += seg.distance;
                currentColor = colors[label].color;
            } else {
                currentColor = getColor(label, colors, tagName);
                colors[label] = {
                    color: currentColor,
                    distance: seg.distance,
                };
            }
            return {
                label: label,
                type: 'bar',
                backgroundColor: currentColor,
                borderWidth: -1,
                data: [Number(Math.round(seg.distance) / 1000)],
                barPercentage: 1.0,
                categoryPercentage: 1.0,
                index: seg.ind,
            };
        }
    }

    function getColor(label, colors, tagName) {
        let newColor;
        const data = tagName === SURFACE ? surfaces : roadTypes;
        if (colors[label]) {
            newColor = colors[label];
        } else {
            newColor = data[label] ? data[label].color : generatePastelColor(Object.keys(colors).length);
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
