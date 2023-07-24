import GeneralInfoTab from './GeneralInfoTab';
import React from 'react';
import { Tab } from '@mui/material';
import PointsTab from './PointsTab';
import SettingsTab from './SettingsTab';
import WaypointsTab from './WaypointsTab';

export default class TrackTabList {
    state = {
        tabs: null,
        tabList: [],
        defaultTab: 'general',
        graphWidth: document.body.offsetWidth / 4 > 400 ? 400 : document.body.offsetWidth,
    };

    create(ctx, setShowContextMenu) {
        let tabs = {};
        let list = [];

        let isTrack =
            ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK ||
            ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;

        tabs.Info = (
            <GeneralInfoTab key="general" width={this.state.graphWidth} setShowContextMenu={setShowContextMenu} />
        );
        if (ctx.currentObjectType !== ctx.OBJECT_TYPE_CLOUD_TRACK) {
            tabs.Track = <PointsTab key="points" width={this.state.graphWidth} />;
        }

        if (isTrack) {
            tabs.Waypoints = <WaypointsTab key="waypoints" width={this.state.graphWidth} />;
        }

        if (ctx.currentObjectType !== ctx.OBJECT_TYPE_CLOUD_TRACK) {
            tabs.Settings = <SettingsTab key="settings" width={this.state.graphWidth} />;
        }

        list = list.concat(
            Object.keys(tabs).map((item) => <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item} />)
        );

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }
}
