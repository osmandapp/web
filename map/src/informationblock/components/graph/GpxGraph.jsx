import React, {useContext} from 'react';
import {Area, Tooltip, XAxis, YAxis, Legend, Line, ComposedChart} from "recharts";
import {Typography} from "@mui/material";
import AppContext from "../../../context/AppContext";
import TracksManager from "../../../context/TracksManager";

export default function GpxGraph({data, xAxis, yAxis, width, minEle, maxEle, minSpeed, maxSpeed}) {
    const ctx = useContext(AppContext);

    minEle = Math.ceil(minEle / 10) * 10;
    maxEle = Math.floor(maxEle / 10) * 10;

    function onMouseMoveGraph(e) {
        if (e.isTooltipActive) {
            if (ctx.mapMarkerListener && ctx.selectedGpxFile) {
                let pointList = TracksManager.getTrackPoints(ctx.selectedGpxFile);
                const lat = Object.values(pointList)[e.activeTooltipIndex].lat;
                const lng = Object.values(pointList)[e.activeTooltipIndex].lng;
                ctx.mapMarkerListener(lat, lng);
            }
        } else {
            ctx.mapMarkerListener(null, null);
        }
    }

    return (<>
            <Typography component={'span'} type="title" color="inherit" sx={{p: 0}}>
                <ComposedChart
                    width={width}
                    height={150}
                    data={data}
                    margin={{top: 0, right: 0, left: -20, bottom: 0}}
                    style={{fontSize: 10}}
                    onMouseMove={onMouseMoveGraph}
                >
                    <defs>
                        <linearGradient id="colorEl" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8ac827" stopOpacity={0.9}/>
                            <stop offset="95%" stopColor="#bddbb0" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorElSRTM" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#aad3df" stopOpacity={0.9}/>
                            <stop offset="95%" stopColor="#bddbb0" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey={xAxis}
                        type="number"
                        tickCount={9}
                        tick={{fontSize: 10}}/>
                    {minEle && maxEle && <YAxis
                        yAxisId="left"
                        dataKey={yAxis}
                        type="number"
                        tickCount={6}
                        domain={[minEle, maxEle]}
                        tick={{fontSize: 10}}/>}
                    {minEle && maxEle && <YAxis
                        yAxisId="left"
                        dataKey="ElevationSRTM"
                        type="number"
                        tickCount={6}
                        domain={[minEle, maxEle]}
                        tick={{fontSize: 10}}/>}
                    {minSpeed !== null && maxSpeed !== null && <YAxis
                        yAxisId="right"
                        orientation="right"
                        dataKey="Speed"
                        type="number"
                        tickCount={6}
                        domain={[minSpeed, maxSpeed]}
                        tick={{fontSize: 10}}/>}
                    <Legend
                        style={{fontSize: 10}}/>
                    <Tooltip/>
                    <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="Elevation"
                        stroke="#8ac827"
                        fillOpacity={1}
                        fill="url(#colorEl)"
                    />
                    <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="ElevationSRTM"
                        stroke="#aad3df"
                        fillOpacity={1}
                        fill="url(#colorElSRTM)"
                    />
                    {minSpeed !== null && maxSpeed !== null &&
                        <Line
                            yAxisId="right"
                            dataKey="Speed"
                            dot={false}
                            stroke="#ffacde"
                        />}
                </ComposedChart>
            </Typography>
        </>
    );
};