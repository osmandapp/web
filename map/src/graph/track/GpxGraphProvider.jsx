import React, { useContext, useEffect, useMemo, useState } from 'react';
import GpxGraph from './GpxGraph';
import AppContext from '../../context/AppContext';
import { equalsPoints, getAllPoints, getTrackPoints } from '../../manager/track/TracksManager';
import isEmpty from 'lodash-es/isEmpty';
import isEqual from 'lodash-es/isEqual';
import pick from 'lodash-es/pick';
import { Checkbox, Divider, FormControlLabel } from '@mui/material';
import { seleniumUpdateActivity } from '../../util/Utils';
import { ELEVATION, ELEVATION_SRTM, SLOPE, SPEED } from '../GraphManager';
import { trackProfile } from '../model/profile';
import { computeSlopes } from '../model/slopes';
import { roadAttributeCharts, roadAttributeRuns } from './roadAttributes';
import { useGraphUnits } from '../units';

const DEFAULT_VISIBILITY = { [ELEVATION]: true, [ELEVATION_SRTM]: true, [SPEED]: false, [SLOPE]: false };
const KEPT_FOR_ANOTHER_TRACK = [SPEED, SLOPE];

const GpxGraphProvider = ({ width }) => {
    const ctx = useContext(AppContext);

    const units = useGraphUnits();

    const [data, setData] = useState(null);
    const [choices, setChoices] = useState({ trackName: null, values: {} });
    const [roadPoints, setRoadPoints] = useState(null);
    const [routeTypes, setRouteTypes] = useState(null);

    function getRoadPoints(pointsFromTracks) {
        let points = !isEmpty(ctx.selectedGpxFile.points) ? getAllPoints(ctx.selectedGpxFile.points) : pointsFromTracks;
        if (!isEmpty(points) && points[0].segment && !equalsPoints(points, roadPoints)) {
            setRoadPoints(points);
        } else if (isEmpty(points) || points[0].segment === undefined) {
            setRoadPoints(null);
        }
        return points ? points : [];
    }

    //get changed track data
    useEffect(() => {
        if (!ctx.selectedGpxFile) {
            setData(null);
            setRoadPoints(null);
            return;
        }
        const points = getTrackPoints(ctx.selectedGpxFile);
        getRoadPoints(points);
        setRouteTypes(ctx.selectedGpxFile.routeTypes);
        if (isEmpty(points)) {
            setData(null);
            return;
        }
        const pointsChanged = !equalsPoints(points, data?.points);
        const available = availableSeries(ctx.selectedGpxFile.analysis);
        if (pointsChanged || !isEqual(available, data?.available)) {
            setData({ track: ctx.selectedGpxFile, points, available });
        }
        if (ctx.selectedGpxFile.name !== choices.trackName) {
            setChoices((prev) => ({
                trackName: ctx.selectedGpxFile.name,
                values: pointsChanged ? pick(prev.values, KEPT_FOR_ANOTHER_TRACK) : prev.values,
            }));
        }
    }, [ctx.selectedGpxFile]);

    useEffect(() => {
        if (data) {
            seleniumUpdateActivity();
        }
    }, [data]);

    const visible = useMemo(() => {
        const result = {};
        data?.available.forEach((key) => {
            result[key] = choices.values[key] ?? DEFAULT_VISIBILITY[key];
        });

        return result;
    }, [data, choices.values]);

    const profile = useMemo(() => (isEmpty(data?.available) ? null : trackProfile(data.track)), [data]);

    const slopes = useMemo(
        () => (profile && data.available.includes(ELEVATION) ? computeSlopes(profile) : null),
        [data, profile]
    );

    const attrRuns = useMemo(() => {
        if (Array.isArray(roadPoints) && roadPoints.length > 0 && routeTypes) {
            return roadAttributeRuns(roadPoints, routeTypes, slopes);
        }

        return null;
    }, [roadPoints, routeTypes, slopes]);

    const attrGraphData = useMemo(() => attrRuns && roadAttributeCharts(attrRuns, units.distance), [attrRuns, units]);

    function toggle(key) {
        setChoices((prev) => ({ ...prev, values: { ...prev.values, [key]: !visible[key] } }));
    }

    return (
        <>
            {profile && <Divider sx={{ mt: '3px', mb: '12px' }} />}
            <div style={{ marginLeft: '8px' }}>
                {Object.entries(visible).map(([key, checked]) => (
                    <FormControlLabel
                        key={key}
                        label={key === ELEVATION_SRTM ? 'Elevation (Satellite)' : key}
                        control={
                            <Checkbox
                                id={`se-graph-${key}`}
                                sx={{ ml: '-15px', mt: '-4px' }}
                                checked={checked}
                                onChange={() => toggle(key)}
                            />
                        }
                        sx={{
                            '& .MuiFormControlLabel-label': { fontSize: '12px' },
                            transform: 'scale(0.8)',
                        }}
                    />
                ))}
            </div>
            {profile && Object.values(visible).some(Boolean) && (
                <GpxGraph
                    profile={profile}
                    slopes={slopes}
                    attrGraphData={attrGraphData}
                    visible={visible}
                    width={width}
                />
            )}
        </>
    );
};

function availableSeries(analysis) {
    return [
        analysis?.hasElevationData && ELEVATION,
        analysis?.srtmAnalysis && ELEVATION_SRTM,
        analysis?.hasSpeedData && SPEED,
        analysis?.hasElevationData && SLOPE,
    ].filter(Boolean);
}

export default GpxGraphProvider;
