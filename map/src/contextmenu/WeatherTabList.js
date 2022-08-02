import WeatherForecast from "./components/WeatherForecast";
import React from "react";
import {Tab} from "@mui/material";

export default class WeatherTabList {
    state = {
        tabs: null,
        tabList: [],
        defaultTab: 'weatherday'
    };

    create(ctx, graphWidth) {
        let tabs = {};
        let list = [];
        let loc = ctx.weatherPoint.lat.toFixed(2) + ' ' + ctx.weatherPoint.lon.toFixed(2);

        tabs["Day forecast"] =
            <WeatherForecast key="weatherday" width={graphWidth} data={ctx.weatherPoint.day} loc={loc}/>
        tabs["Week forecast"] =
            <WeatherForecast key="weatherweek" width={graphWidth} data={ctx.weatherPoint.week} loc={loc}/>

        list = list.concat(Object.keys(tabs).map((item, index) =>
            <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item}/>));

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }
}