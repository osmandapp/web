import React, { useContext, useEffect, useMemo, useState } from 'react';
import GpxGraph from './GpxGraph';
import AppContext from '../../../context/AppContext';
import TracksManager, { equalsPoints } from '../../../context/TracksManager';
import _ from 'lodash';
import { Checkbox, Divider, FormControlLabel } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { seleniumUpdateActivity } from '../../../util/Utils';

const useStyles = makeStyles({
    checkbox: {
        '& .MuiTypography-root': {
            fontSize: '12',
        },
        transform: 'scale(0.8)',
    },
});

const GpxGraphProvider = ({ width }) => {
    const ctx = useContext(AppContext);
    const classes = useStyles();

    const ELEVATION = 'Elevation';
    const ELEVATION_SRTM = 'ElevationSRTM';
    const SPEED = 'Speed';
    const DISTANCE = 'Distance';
    const SLOPE = 'Slope';

    const [data, setData] = useState(null);
    const [showData, setShowData] = useState(null);

    function hasData() {
        return showData[ELEVATION] || showData[ELEVATION_SRTM] || showData[SPEED] || showData[SLOPE];
    }

    function isSrtmAppeared(trackData) {
        return !trackData.srtm && ctx.selectedGpxFile.analysis?.srtmAnalysis;
    }

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            let trackData = {};
            let points = TracksManager.getTrackPoints(ctx.selectedGpxFile);
            if (!_.isEmpty(points) && (isSrtmAppeared(trackData) || !equalsPoints(points, data?.data))) {
                if (ctx.selectedGpxFile.analysis?.hasElevationData) {
                    trackData.ele = true;
                    trackData.slope = true;
                    trackData.data = points;
                }
                if (ctx.selectedGpxFile.analysis?.srtmAnalysis) {
                    trackData.srtm = true;
                    if (!trackData.data) {
                        trackData.data = points;
                    }
                }
                if (ctx.selectedGpxFile?.analysis?.hasSpeedData) {
                    trackData.speed = true;
                    if (!trackData.data) {
                        trackData.data = points;
                    }
                }
                setData({ ...trackData });
            } else if (_.isEmpty(points)) {
                setData(null);
            }
        } else {
            setData(null);
        }
    }, [ctx.selectedGpxFile]);

    useEffect(() => {
        if (data) {
            let newShowData = {};
            if (data.ele) {
                newShowData[ELEVATION] = data.ele;
            }
            if (data.srtm) {
                newShowData[ELEVATION_SRTM] = data.srtm;
            }
            if (data.speed) {
                newShowData[SPEED] = showData && showData[SPEED] ? true : '';
            }
            if (data.slope) {
                newShowData[SLOPE] = showData && showData[SLOPE] ? true : '';
            }
            setShowData(newShowData);
            seleniumUpdateActivity();
        }
    }, [data]);

    const graphData = useMemo(() => {
        if (!_.isEmpty(data?.data)) {
            let elevation = data.ele ? 'ele' : null;
            let elevationSRTM = data.srtm ? 'srtmEle' : null;
            let points = _.cloneDeep(data.data);
            let result = [];
            let minEle = elevation ? points[0][elevation] : elevationSRTM ? points[0][elevationSRTM] : null;
            let maxEle = elevation ? points[0][elevation] : elevationSRTM ? points[0][elevationSRTM] : null;
            let minSpeed = data.speed ? 0 : null;
            let maxSpeed = data.speed ? 0 : null;
            let sumDist = 0;
            points.forEach((point) => {
                let ele;
                let eleSRTM;
                let speed;
                if (elevation) {
                    ele = TracksManager.getEle(point, elevation, points)?.toFixed(2);
                    if (ele !== undefined) {
                        ele = Math.round(ele * 10) / 10;
                        if (minEle === TracksManager.NAN_MARKER) {
                            minEle = ele;
                        } else {
                            minEle = Math.min(ele, minEle);
                        }

                        if (maxEle === TracksManager.NAN_MARKER) {
                            maxEle = ele;
                        } else {
                            maxEle = Math.max(ele, maxEle);
                        }
                    }
                }
                if (elevationSRTM) {
                    eleSRTM = TracksManager.getEle(point, elevationSRTM, points)?.toFixed(2);
                    if (eleSRTM && !elevation) {
                        eleSRTM = Math.round(eleSRTM * 10) / 10;
                        minEle = Math.min(eleSRTM, minEle);
                        maxEle = Math.max(eleSRTM, maxEle);
                    }
                }
                if (data.speed) {
                    speed = _.cloneDeep(
                        point.speed ? point.speed : point.ext?.speed ? point.ext?.speed : point.ext?.extensions?.speed
                    );
                    if (speed) {
                        speed = ((Math.round(speed * 10) / 10) * 3.6).toFixed(2);
                        minSpeed = Math.min(speed, minSpeed);
                        maxSpeed = Math.max(speed, maxSpeed);
                    }
                }

                // get-analysis might make point.distance inaccurate, so use "total" first
                if (point.distanceTotal > 0 || point.distanceSegment > 0 || point.ext?.distance > 0) {
                    sumDist = point.distanceTotal || point.distanceSegment || point.ext?.distance;
                } else if (point.distance || point.distance === 0) {
                    sumDist += point.distance;
                }

                let dataTab = {
                    [DISTANCE]: Math.round(sumDist) / 1000,
                    [ELEVATION]: ele,
                    [ELEVATION_SRTM]: eleSRTM,
                    [SPEED]: speed,
                };
                result.push(dataTab);
            });
            return {
                res: result,
                minEle: minEle,
                maxEle: maxEle,
                minSpeed: minSpeed,
                maxSpeed: maxSpeed,
                slopes: getSlopes(result),
            };
        }
    }, [data]);

    function interpolate(totalLength, step, result) {
        const calculatedPointsCount = Math.floor(totalLength / step) + 1;
        const calculatedX = [];
        const calculatedY = [];
        const lastIndex = result.length - 1;
        let nextW = 0;

        function getY(index) {
            return result[index][ELEVATION];
        }

        function getX(index) {
            return result[index][DISTANCE] * 1000;
        }

        for (let k = 0; k < calculatedPointsCount; k++) {
            if (k > 0) {
                calculatedX[k] = (calculatedX[k - 1] ? calculatedX[k - 1] : 0) + step;
            } else {
                calculatedY[k] = getY(0);
                continue;
            }
            while (nextW < lastIndex && calculatedX[k] > getX(nextW)) {
                nextW++;
            }
            const px = nextW === 0 ? 0 : getX(nextW - 1);
            const py = nextW === 0 ? getY(0) : getY(nextW - 1);

            calculatedY[k] = py + ((getY(nextW) - py) / (getX(nextW) - px)) * (calculatedX[k] - px);
        }
        return { calculatedX, calculatedY };
    }

    function getSlopes(result) {
        let STEP = 5;
        let l = 10;
        while (l > 0 && ctx.selectedGpxFile.analysis.totalDistance / STEP > 10000) {
            STEP = Math.max(STEP, ctx.selectedGpxFile.analysis.totalDistance / (result.length * l--));
        }
        // interpolate
        const interpolatorResult = interpolate(ctx.selectedGpxFile.analysis.totalDistance, STEP, result);

        const calculatedDist = interpolatorResult.calculatedX;
        const calculatedH = interpolatorResult.calculatedY;
        const SLOPE_PROXIMITY = Math.max(20, STEP * 2);
        const calculatedSlopeDist = [];
        const calculatedSlope = [];

        const threshold = Math.max(2, Math.floor(SLOPE_PROXIMITY / STEP / 2));

        for (let k = 0; k < calculatedDist.length; k++) {
            calculatedSlopeDist[k] = calculatedDist[k];

            if (k < threshold) {
                calculatedSlope[k] =
                    ((-1.5 * calculatedH[k] + 2.0 * calculatedH[k + 1] - 0.5 * calculatedH[k + 2]) * 100) / STEP;
            } else if (k >= calculatedSlopeDist.length - threshold) {
                calculatedSlope[k] =
                    ((0.5 * calculatedH[k - 2] - 2.0 * calculatedH[k - 1] + 1.5 * calculatedH[k]) * 100) / STEP;
            } else {
                calculatedSlope[k] =
                    ((calculatedH[threshold + k] - calculatedH[k - threshold]) * 100) / SLOPE_PROXIMITY;
            }

            if (isNaN(calculatedSlope[k])) {
                calculatedSlope[k] = 0;
            }
        }
        // add slopes to points
        for (let i = 0; i < result.length; i++) {
            let current = result[i];
            if (current) {
                let dist = current[DISTANCE];
                let ind = calculatedSlopeDist.findIndex(
                    (d) => d / 1000 > dist - STEP / 1000 && d / 1000 < dist + STEP / 1000
                );
                if (ind !== -1 && ind >= 0) {
                    result[i][SLOPE] = Math.trunc(calculatedSlope[ind] * 100) / 100;
                }
            }
        }

        // create array slopes
        let res = [];
        for (let i = 0; i < calculatedSlope.length; i++) {
            let dist = calculatedSlopeDist[i];
            res.push({
                slope: Math.trunc(calculatedSlope[i] * 100) / 100,
                dist: dist !== undefined ? dist / 1000 : 0,
            });
        }
        if (STEP > 5) {
            res = smoothSlopes(res, 0.3);
        }
        res.min = Math.trunc(Math.min(...calculatedSlope) * 100) / 100;
        res.max = Math.trunc(Math.max(...calculatedSlope) * 100) / 100;
        return res;
    }
    function smoothSlopes(data, alpha) {
        const smoothedData = [];
        let previousValue = data[0].slope;
        for (let i = 0; i < data.length; i++) {
            const currentSlope = data[i].slope;
            const smoothedSlope = alpha * currentSlope + (1 - alpha) * previousValue;
            smoothedData.push({
                slope: smoothedSlope,
                dist: data[i].dist,
            });
            previousValue = smoothedSlope;
        }
        return smoothedData;
    }

    function checkShowData(value) {
        return value === '' ? false : value;
    }

    return (
        <>
            {graphData && showData && <Divider sx={{ mt: '3px', mb: '12px' }} />}
            <div style={{ marginLeft: '20px' }}>
                {showData &&
                    Object.entries(showData).map(([key, value]) => (
                        <FormControlLabel
                            className={classes.checkbox}
                            key={key}
                            label={key === ELEVATION_SRTM ? 'Elevation (Satellite)' : key}
                            control={
                                <Checkbox
                                    sx={{ ml: '-15px', mt: '-4px' }}
                                    checked={checkShowData(value)}
                                    onChange={() => {
                                        let updatedShowData = Object.assign({}, showData);
                                        updatedShowData[key] = !value;
                                        setShowData(updatedShowData);
                                    }}
                                />
                            }
                        ></FormControlLabel>
                    ))}
            </div>
            {graphData && showData && hasData() && (
                <GpxGraph
                    data={graphData?.res}
                    showData={showData}
                    xAxis={DISTANCE}
                    y1Axis={[ELEVATION, ELEVATION_SRTM, SLOPE]}
                    y2Axis={SPEED}
                    width={width}
                    minEle={graphData?.minEle}
                    maxEle={graphData?.maxEle}
                    minSpeed={graphData?.minSpeed}
                    maxSpeed={graphData?.maxSpeed}
                    slopes={graphData?.slopes}
                />
            )}
        </>
    );
};

export default GpxGraphProvider;
