import React, {useContext, useEffect, useMemo, useState} from 'react';
import GpxGraphTab from "./GpxGraphTab";
import AppContext from "../../../context/AppContext";

const ElevationTab = ({width, srtm}) => {

    const ctx = useContext(AppContext);

    const [data, setData] = useState(null);

    useEffect(() => {

        if (ctx.selectedGpxFile) {
            if (srtm && ctx.selectedGpxFile?.srtmSummary) {
                setData(ctx.selectedGpxFile.srtmSummary.elevationData)
            } else if (!srtm && ctx.selectedGpxFile?.summary?.hasElevationData && ctx.selectedGpxFile?.summary?.elevationData) {
                setData(ctx.selectedGpxFile?.summary?.elevationData)
            } else {
                setData(null);
            }
        }

    }, [ctx.selectedGpxFile]);

    const graphData = useMemo(() => {
        if (data) {
            let result = [];
            let min = data[0].elevation;
            let max = data[0].elevation;
            let cumDist = 0;
            data.forEach((point) => {
                let val = Math.round(point.elevation * 10) / 10;
                cumDist += point.distance;
                let data = {
                    "Distance": Math.round(cumDist) / 1000,
                    "Elevation": val
                };
                result.push(data);
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