import GeneralInfoTab from "./components/tabs/GeneralInfoTab";
import ElevationTab from "./components/tabs/ElevationTab";
import SpeedTab from "./components/tabs/SpeedTab";
import React from "react";
import {Tab} from "@mui/material";
import PointsTab from "./components/tabs/PointsTab";

export default class TrackTabList {

    state = {
        tabs: null,
        tabList: [],
        defaultTab: 'general',
        graphWidth: 600
    };

    create(ctx) {
        let tabs = {};
        let list = [];

        const hasAltitude = ctx.selectedGpxFile?.summary?.hasElevationData;
        const hasSpeed = ctx.selectedGpxFile?.summary?.hasSpeedData;

        tabs.Info = <GeneralInfoTab key='general'
                                    url={ctx.selectedGpxFile.url} width={this.state.graphWidth} srtm={false}/>;
        if (ctx.currentObjectType !== 'cloud_track') {
            tabs.Points = <PointsTab key='points' width={this.state.graphWidth}/>;
        }

        const elevationData = ctx.selectedGpxFile?.summary?.elevationData;
        if (elevationData && elevationData.length > 0 && hasAltitude) {
            tabs.Elevation = <ElevationTab key='elevation' width={this.state.graphWidth} srtm={false}/>
        }

        const speedData = ctx.selectedGpxFile?.summary?.speedData;
        if (speedData && speedData.length > 0 && hasSpeed) {
            tabs.Speed = <SpeedTab key='speed' data={speedData} width={this.state.graphWidth}/>;
        }

        if (ctx.selectedGpxFile?.srtmSummary) {
            tabs.SRTM = <GeneralInfoTab key='srtm'
                                        width={this.state.graphWidth} srtm={true}/>;
        }

        if (ctx.selectedGpxFile?.srtmSummary?.elevationData &&
            ctx.selectedGpxFile.srtmSummary.elevationData.length > 0) {
            tabs["SRTM Ele"] = <ElevationTab key='srtmele' data={ctx.selectedGpxFile.srtmSummary.elevationData}
                                             width={this.state.graphWidth} srtm={true}/>
        }

        list = list.concat(Object.keys(tabs).map((item, index) =>
            <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item}/>));

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }
}