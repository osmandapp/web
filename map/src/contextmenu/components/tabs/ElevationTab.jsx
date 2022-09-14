import React, {useContext, useEffect, useMemo, useState} from 'react';
import GpxGraphTab from "./GpxGraphTab";
import AppContext from "../../../context/AppContext";

const ElevationTab = ({points, width, srtm}) => {

    const ctx = useContext(AppContext);

    const [data, setData] = useState(null);

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            if (srtm && ctx.selectedGpxFile.analysis?.srtmAnalysis) {
                setData({data: points, srtm: true});
            } else if (ctx.selectedGpxFile.analysis?.hasElevationData) {
                setData({data: points, srtm: false});
            } else {
                setData(null);
            }
        }
    }, [ctx.selectedGpxFile]);

    const graphData = useMemo(() => {
        if (data) {
            let elevation = data.srtm ? "srtmEle" : "ele";
            let points = data.data;
            let result = [];
            let min = points[0][elevation];
            let max = points[0][elevation];
            let cumDist = 0;
            points.forEach((point) => {
                let val = Math.round(point[elevation] * 10) / 10;
                cumDist += point.distance;
                let dataTab = {
                    "Distance": Math.round(cumDist) / 1000,
                    "Elevation": val
                };
                result.push(dataTab);
                min = Math.min(val, min);
                max = Math.max(val, max);
            });
            return {res: result, min: min, max: max};
        }
    }, [data]);

    return (
        <GpxGraphTab data={graphData?.res} xAxis={"Distance"} yAxis={"Elevation"}
                     width={width} min={graphData?.min} max={graphData?.max}/>

    );
};

export default ElevationTab;