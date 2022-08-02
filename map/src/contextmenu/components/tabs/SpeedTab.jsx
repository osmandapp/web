import React, {useMemo} from 'react';
import GpxGraphTab from "./GpxGraphTab";

export default function SpeedTab({data, width}) {
    const graphData = useMemo(() => {
        let result = [];
        let min = data[0].speed;
        let max = data[0].speed;
        let cumDist = 0;
        data.forEach((point) => {
            let val = Math.round(point.speed * 10) / 10;
            cumDist += point.distance;
            let data = {
                "Distance": Math.round(cumDist) / 1000,
                "Speed": val
            };
            result.push(data);
            min = Math.min(val, min);
            max = Math.max(val, max);
        });
        return {res: result, min: min, max: max};
    }, [data]);
    return (
        <GpxGraphTab data={graphData.res} xAxis={"Distance"} yAxis={"Speed"}
                     width={width} min={0} max={graphData.max}/>
    );
};