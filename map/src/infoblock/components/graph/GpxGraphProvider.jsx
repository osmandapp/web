import React, {useContext, useEffect, useMemo, useState} from 'react';
import GpxGraph from "./GpxGraph";
import AppContext from "../../../context/AppContext";
import TracksManager from "../../../context/TracksManager";
import _ from "lodash";

const GpxGraphProvider = ({width}) => {

    const ctx = useContext(AppContext);

    const [data, setData] = useState(null);

    useEffect(() => {
        let trackData = {};
        if (ctx.selectedGpxFile) {
            let points = _.cloneDeep(TracksManager.getTrackPoints(ctx.selectedGpxFile));
            if (ctx.selectedGpxFile.analysis?.hasElevationData) {
                trackData.ele = true;
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
        }

        if (trackData) {
            setData({...trackData});
        }
    }, [ctx.selectedGpxFile]);

    const graphData = useMemo(() => {
        if (!_.isEmpty(data?.data)) {
            let elevation = data.ele ? "ele" : null;
            let elevationSRTM = data.srtm ? "srtmEle" : null;
            let points = data.data;
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
                    ele = TracksManager.getEle(point, elevation, points).toFixed(2);
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
                if (elevationSRTM) {
                    eleSRTM = TracksManager.getEle(point, elevationSRTM, points).toFixed(2);
                    if (!elevation) {
                        eleSRTM = Math.round(eleSRTM * 10) / 10;
                        minEle = Math.min(eleSRTM, minEle);
                        maxEle = Math.max(eleSRTM, maxEle);
                    }
                }
                if (data.speed) {
                    speed = _.cloneDeep(point.speed ? point.speed : point.ext?.speed ? point.ext?.speed : point.ext?.extensions?.speed);
                    if (speed) {
                        speed = ((Math.round(speed * 10) / 10) * 3.6).toFixed(2);
                        minSpeed = Math.min(speed, minSpeed);
                        maxSpeed = Math.max(speed, maxSpeed);
                    }
                }

                if (!point.distance && !point?.ext.distance && point.distanceFromStart) {
                    sumDist = point.distanceFromStart;
                } else {
                    sumDist += point.distance ? point.distance : point?.ext.distance ? point?.ext.distance : 0;
                }

                let dataTab = {
                    "Distance": Math.round(sumDist) / 1000,
                    "Elevation": ele,
                    "ElevationSRTM": eleSRTM,
                    "Speed": speed,
                };
                result.push(dataTab);
            });
            return {res: result, minEle: minEle, maxEle: maxEle, minSpeed: minSpeed, maxSpeed: maxSpeed};
        }
    }, [data]);


    return (<>
            {graphData &&
                <GpxGraph data={graphData?.res}
                          xAxis={"Distance"}
                          yAxis={"Elevation"}
                          width={width}
                          minEle={graphData?.minEle}
                          maxEle={graphData?.maxEle}
                          minSpeed={graphData?.minSpeed}
                          maxSpeed={graphData?.maxSpeed}
                />}
        </>
    );
};

export default GpxGraphProvider;