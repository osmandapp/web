import React, {useContext} from 'react';
import {Area, Tooltip, XAxis, YAxis, AreaChart} from "recharts";
import {Typography} from "@mui/material";
import AppContext from "../../../context/AppContext";

export default function GpxGraphTab({data, xAxis, yAxis, width, min, max}) {
    const ctx = useContext(AppContext);

    max = Math.ceil(max / 10) * 10;
    min = Math.floor(min / 10) * 10;

    function onMouseMoveGraph(e) {
        if (e.isTooltipActive) {
            if (ctx.mapMarkerListener && ctx.selectedGpxFile.points) {
                const lat = Object.values(ctx.selectedGpxFile.points)[e.activeTooltipIndex].lat;
                const lng = Object.values(ctx.selectedGpxFile.points)[e.activeTooltipIndex].lng;
                ctx.mapMarkerListener(lat, lng);
            }
        }
    }

    return (<>
            <Typography component={'span'} type="title" color="inherit" sx={{p: 0}}>
                <AreaChart
                    width={width}
                    height={150}
                    data={data}
                    margin={{top: 0, right: 0, left: 0, bottom: 0}}
                    onMouseMove={onMouseMoveGraph}
                >
                    <defs>
                        <linearGradient id="colorEl" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8ac827" stopOpacity={0.9}/>
                            <stop offset="95%" stopColor="#bddbb0" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={xAxis} type="number" tickCount={11}/>
                    <YAxis type="number" tickCount={6} domain={[min, max]}/>
                    <Tooltip/>
                    <Area
                        type="monotone"
                        dataKey={yAxis}
                        stroke="#8ac827"
                        fillOpacity={1}
                        fill="url(#colorEl)"
                    />
                </AreaChart>
            </Typography>
        </>
    );
};