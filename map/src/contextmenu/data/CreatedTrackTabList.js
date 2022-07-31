import EditInfoTab from "../components/tabs/EditInfoTab";
import PointsTab from "../components/tabs/PointsTab";
import React from "react";
import {Tab} from "@mui/material";

export default class CreatedTrackTabList {
    state = {
        tabs: null,
        tabList: [],
        defaultTab: 'general'
    };

    create(ctx, graphWidth) {
        let tabs = {};
        let list = [];

        tabs.Info = <EditInfoTab key='general'/>;
        tabs.Points = <PointsTab key='points' width={graphWidth}/>;

        list = list.concat(Object.keys(tabs).map((item, index) =>
            <Tab
                disabled={ctx.currentlyEditTrack && ctx.currentlyEditTrack.newRouteLayer && ctx.currentlyEditTrack.newRouteLayer._latlngs && ctx.currentlyEditTrack.pointsList && ctx.currentlyEditTrack.pointsList.length < 2}
                value={tabs[item].key + ''} label={item} key={'tab:' + item}/>));

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }
}