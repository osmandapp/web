import React, {useMemo} from 'react';
import GpxGraphTab from "./GpxGraphTab";

const ElevationTab = ({data, width}) => {
    const graphData = useMemo(() => {
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
    }, [data]);

    return (
        <GpxGraphTab data={graphData.res} xAxis={"Distance"} yAxis={"Elevation"}
                     width={width} min={graphData.min} max={graphData.max}/>

    );
};

export default ElevationTab;