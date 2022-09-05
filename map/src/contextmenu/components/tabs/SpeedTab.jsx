import React, {useContext, useEffect, useMemo, useState} from 'react';
import GpxGraphTab from "./GpxGraphTab";
import AppContext from "../../../context/AppContext";

export default function SpeedTab({width}) {
    const ctx = useContext(AppContext);

    const [data, setData] = useState(null);

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            setData(ctx.selectedGpxFile?.analysis?.speedData)
        }
    }, [ctx.selectedGpxFile]);

    const graphData = useMemo(() => {
        if (data) {
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
        }
    }, [data]);
    return (
        <GpxGraphTab data={graphData?.res} xAxis={"Distance"} yAxis={"Speed"}
                     width={width} min={0} max={graphData?.max}/>
    );
};