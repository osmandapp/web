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
    };

    create(ctx, setShowContextMenu) {
        let tabs = {};
        let list = [];

        let isTrack =
            ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK ||
            ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;

        tabs.Info = <GeneralInfoTab key="general" setShowContextMenu={setShowContextMenu} />;
        if (ctx.currentObjectType !== ctx.OBJECT_TYPE_CLOUD_TRACK) {
            tabs.Track = <PointsTab key="points" />;
        }

        if (isTrack) {
            tabs.Waypoints = <WaypointsTab key="waypoints" />;
        }

        if (ctx.currentObjectType !== ctx.OBJECT_TYPE_CLOUD_TRACK) {
            tabs.Settings = <SettingsTab key="settings" />;
        }

        list = list.concat(
            Object.keys(tabs).map((item) => <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item} />)
        );

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }
}
