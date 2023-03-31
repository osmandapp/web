import {Tab} from "@mui/material";
import React from "react";
import PoiInfoTab from "./tabs/PoiInfoTab";

export default class PoiTabList {
    state = {
        tabs: null,
        tabList: [],
        defaultTab: 'poiInfo',
        graphWidth: 600
    };

    create() {
        let tabs = {};
        let list = [];

        tabs.Info = <PoiInfoTab key='poiInfo' width={this.state.graphWidth}/>;

        list = list.concat(Object.keys(tabs).map((item, index) =>
            <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item}/>));

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }
}
